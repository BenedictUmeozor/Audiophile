"use client";

import Container from "@/components/shared/container";
import OrderConfirmation from "@/components/ui/order-confirmation";
import { formSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import BackButton from "./back-button";
import CheckoutForm from "./checkout-form";
import Summary from "./summary";

export default function Page() {
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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
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
          <Summary />
        </form>
      </Container>
      <OrderConfirmation />
    </main>
  );
}
