"use client";

import { useCartContext } from "@/context/cart-context";
import Image from "next/image";
import { useEffect, useState } from "react";
import CheckIcon from "../icons/check-icon";
import Button from "./button";

const OrderConfirmation = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCartContext();

  const handleToggle = () => {
    setOpen((prev) => !prev);
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

    window.addEventListener("toggle-order-confirmation", handleToggle);

    return () => {
      window.removeEventListener("toggle-order-confirmation", handleToggle);
    };
  }, []);

  if (!cart.items || cart.items.length === 0 || !open) {
    return null;
  }

  const VAT = cart.total * 0.2;
  const SHIPPING = 50;
  const GRAND_TOTAL = cart.total + VAT + SHIPPING;

  const FIRST_CART_ITEM = cart.items[0];
  const productName = FIRST_CART_ITEM.product.name
    .split(" ")
    .slice(0, -1)
    .join(" ");

  return (
    <div className="fixed inset-0 top-0 left-0 z-99999 flex items-center justify-center overflow-y-auto bg-black/40 py-12">
      <div className="w-full rounded-lg bg-white p-12 max-md:max-w-[88%] max-md:p-8 md:w-[540px]">
        <div className="bg-primary mb-[33px] flex h-16 w-16 items-center justify-center rounded-full">
          <CheckIcon />
        </div>
        <h2 className="mb-6 text-[32px] leading-9 font-bold tracking-[1.14px] max-md:mb-4 max-md:text-[24px] max-md:leading-7 max-md:tracking-[0.86px]">
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
                <picture>
                  <source
                    srcSet={FIRST_CART_ITEM.product.image.desktop}
                    media="(min-width: 1024px)"
                  />
                  <source
                    srcSet={FIRST_CART_ITEM.product.image.tablet}
                    media="(min-width: 768px)"
                  />
                  <Image
                    src={FIRST_CART_ITEM.product.image.mobile}
                    alt={FIRST_CART_ITEM.product.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-contain object-center"
                  />
                </picture>
              </div>
              <div className="flex flex-1 items-start justify-between gap-x-4">
                <div>
                  <p className="text-[15px] leading-[25px] font-bold tracking-[0px]">
                    {productName}
                  </p>
                  <p className="text-[14px] leading-[25px] font-bold tracking-[0px] text-black/50">
                    $ {FIRST_CART_ITEM.product.price.toLocaleString()}
                  </p>
                </div>
                <span className="text-[15px] leading-[25px] font-bold tracking-[0px] text-black/50">
                  X{FIRST_CART_ITEM.quantity}
                </span>
              </div>
            </div>
            {cart.items.length > 1 && (
              <>
                <div className="h-px w-full bg-black/8" />
                <p className="text-center text-[12px] leading-[100%] font-bold tracking-[-0.21px] text-black/50">
                  and {cart.items.length - 1} other item(s)
                </p>
              </>
            )}
          </div>
          <div className="flex flex-col justify-center gap-y-2 bg-black px-8 max-md:px-6 max-md:pt-[15px] max-md:pb-[19px]">
            <h6 className="body text-white/50">GRAND TOTAL</h6>
            <p className="text-[18px] leading-[100%] font-bold tracking-[0px] text-white">
              $ {GRAND_TOTAL.toLocaleString()}
            </p>
          </div>
        </div>
        <Button variant="default" block>
          VIEW YOUR ORDER
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
