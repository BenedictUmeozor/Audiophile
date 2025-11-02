"use client";

import { useCartContext } from "@/context/cart-context";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CheckIcon from "../icons/check-icon";
import Button from "./button";

interface OrderData {
  orderId: string;
  items: Array<{
    productName: string;
    price: number;
    quantity: number;
    image: string;
  }>;
  grandTotal: number;
}

const OrderConfirmation = () => {
  const [open, setOpen] = useState(false);
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  const handleToggle = (event?: CustomEvent) => {
    if (event?.detail) {
      setOrderData(event.detail);
      setOpen(true);
    } else {
      setOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [open]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("toggle-order-confirmation", handleToggle as EventListener);

    return () => {
      window.removeEventListener("toggle-order-confirmation", handleToggle as EventListener);
    };
  }, []);

  if (!orderData || !open) {
    return null;
  }

  const FIRST_ITEM = orderData.items[0];
  const productName = FIRST_ITEM.productName.split(" ").slice(0, -1).join(" ");

  return (
    <div
      className="fixed inset-0 top-0 left-0 z-99999 flex items-center justify-center overflow-y-auto bg-black/40 py-12"
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-confirmation-title"
    >
      <div className="w-full rounded-lg bg-white p-12 max-md:max-w-[88%] max-md:p-8 md:w-[540px]">
        <div
          className="bg-primary mb-[33px] flex h-16 w-16 items-center justify-center rounded-full"
          aria-hidden="true"
        >
          <CheckIcon />
        </div>
        <h2
          id="order-confirmation-title"
          className="mb-6 text-[32px] leading-9 font-bold tracking-[1.14px] max-md:mb-4 max-md:text-[24px] max-md:leading-7 max-md:tracking-[0.86px]"
        >
          THANK YOU <br />
          FOR YOUR ORDER
        </h2>
        <p className="body mb-[33px] text-black/50 max-md:mb-6">
          You will receive an email confirmation shortly.
        </p>
        <div className="mb-[46px] grid aspect-444/140 grid-cols-[1fr_198px] overflow-hidden rounded-lg max-md:mb-[23px] max-md:aspect-auto max-md:grid-cols-1 max-md:py-6">
          <div className="bg-muted flex flex-col items-center justify-center gap-y-3 p-6">
            <div className="flex w-full items-center gap-x-4">
              <div className="flex h-[50px] w-[50px] items-center justify-center">
                <Image
                  src={FIRST_ITEM.image}
                  alt={FIRST_ITEM.productName}
                  width={50}
                  height={50}
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <div className="flex flex-1 items-start justify-between gap-x-4">
                <div>
                  <p className="text-[15px] leading-[25px] font-bold tracking-[0px]">
                    {productName}
                  </p>
                  <p className="text-[14px] leading-[25px] font-bold tracking-[0px] text-black/50">
                    $ {FIRST_ITEM.price.toLocaleString()}
                  </p>
                </div>
                <span className="text-[15px] leading-[25px] font-bold tracking-[0px] text-black/50">
                  X{FIRST_ITEM.quantity}
                </span>
              </div>
            </div>
            {orderData.items.length > 1 && (
              <>
                <div className="h-px w-full bg-black/8" />
                <p className="text-center text-[12px] leading-[100%] font-bold tracking-[-0.21px] text-black/50">
                  and {orderData.items.length - 1} other item(s)
                </p>
              </>
            )}
          </div>
          <div className="flex flex-col justify-center gap-y-2 bg-black px-8 max-md:px-6 max-md:pt-[15px] max-md:pb-[19px]">
            <h6 className="body text-white/50">GRAND TOTAL</h6>
            <p className="text-[18px] leading-[100%] font-bold tracking-[0px] text-white">
              $ {orderData.grandTotal.toLocaleString()}
            </p>
          </div>
        </div>
        <Link href={orderData.orderId ? `/orders/${orderData.orderId}` : "/"}>
          <Button variant="default" block>
            VIEW YOUR ORDER
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
