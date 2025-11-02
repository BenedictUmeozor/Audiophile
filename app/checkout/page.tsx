"use client";

import Container from "@/components/shared/container";
import OrderConfirmation from "@/components/ui/order-confirmation";
import { useCartContext } from "@/context/cart-context";
import { formSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "convex/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";
import { api } from "../../convex/_generated/api";
import BackButton from "./back-button";
import CheckoutForm from "./checkout-form";
import Summary from "./summary";

export default function Page() {
  const { cart, dispatch } = useCartContext();
  const createOrder = useMutation(api.orders.createOrder);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { handleSubmit, control } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      method: undefined,
      eMoneyNumber: "",
      eMoneyPin: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      // Calculate totals (matching Summary component)
      const subtotal = cart.total;
      const shipping = 50;
      const vat = Math.floor(cart.total * 0.2);
      const grandTotal = cart.total + vat + shipping;

      // Prepare order items
      const items = cart.items.map((item) => ({
        productId: item.product.id,
        productName: item.product.name,
        productSlug: item.product.slug,
        price: item.product.price,
        quantity: item.quantity,
        image: item.product.image.mobile,
      }));

      // Create order in Convex
      const order = await createOrder({
        customerName: values.name,
        customerEmail: values.email,
        customerPhone: values.phone,
        shippingAddress: values.address,
        shippingCity: values.city,
        shippingZipCode: values.zipCode,
        shippingCountry: values.country,
        paymentMethod: values.method,
        eMoneyNumber: values.eMoneyNumber,
        eMoneyPin: values.eMoneyPin,
        items,
        subtotal,
        shipping,
        vat,
        grandTotal,
      });

      toast.success("Order placed successfully!");
      console.log("Order created:", order);

      // Prepare order data for confirmation modal (before clearing cart)
      const orderConfirmationData = {
        orderId: order?._id,
        items: items,
        grandTotal: grandTotal,
      };

      // Clear cart after successful order
      dispatch({ type: "CLEAR_CART" });

      // Trigger order confirmation modal with order data
      const event = new CustomEvent("toggle-order-confirmation", {
        detail: orderConfirmationData,
      });
      window.dispatchEvent(event);

      // Send order confirmation email
      try {
        await fetch("/api/send-order-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerName: values.name,
            customerEmail: values.email,
            orderNumber: order?.orderNumber,
            items: items,
            subtotal: subtotal,
            shipping: shipping,
            vat: vat,
            grandTotal: grandTotal,
            shippingAddress: values.address,
            shippingCity: values.city,
            shippingZipCode: values.zipCode,
            shippingCountry: values.country,
            orderId: order?._id,
          }),
        });
        console.log("Order confirmation email sent");
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Don't show error to user - order was still created successfully
      }
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-muted pb-[141px] max-lg:pb-[116px]">
      <Container>
        <BackButton />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-[730px_350px] gap-x-[30px] gap-y-8 max-lg:grid-cols-1 lg:items-start"
        >
          <CheckoutForm control={control} />
          <Summary isSubmitting={isSubmitting} />
        </form>
      </Container>
      <OrderConfirmation />
    </main>
  );
}
