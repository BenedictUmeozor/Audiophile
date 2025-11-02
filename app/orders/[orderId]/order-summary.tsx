"use client";

import type { Doc } from "@/convex/_generated/dataModel";
import Image from "next/image";

interface OrderSummaryProps {
  order: Doc<"orders">;
}

const OrderSummary = ({ order }: OrderSummaryProps) => {
  return (
    <div className="rounded-lg bg-white px-[33px] py-8 max-md:px-6">
      <h5 className="mb-[31px] text-[18px] leading-[100%] font-bold tracking-[1.29px]">
        ORDER SUMMARY
      </h5>

      {/* Order Items */}
      <div className="mb-8 space-y-6">
        {order.items.map((item, index) => {
          const productName = item.productName.split(" ").slice(0, -1).join(" ");
          return (
            <div key={index} className="flex items-center gap-x-4">
              <div className="bg-muted flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.productName}
                  width={64}
                  height={64}
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <div className="flex flex-1 items-start justify-between">
                <div>
                  <p className="text-[15px] leading-[25px] font-bold tracking-[0px]">
                    {productName}
                  </p>
                  <p className="text-[14px] leading-[25px] font-bold tracking-[0px] text-black/50">
                    $ {item.price.toLocaleString()}
                  </p>
                </div>
                <span className="text-[15px] leading-[25px] font-bold tracking-[0px] text-black/50">
                  x{item.quantity}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Totals */}
      <ul className="mb-6 space-y-2">
        <li className="flex items-center justify-between">
          <span className="text-[15px] leading-[25px] tracking-[0px] text-black/50">
            TOTAL
          </span>
          <span className="text-[18px] leading-[100%] font-bold tracking-[0px]">
            $ {order.subtotal.toLocaleString()}
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-[15px] leading-[25px] tracking-[0px] text-black/50">
            SHIPPING
          </span>
          <span className="text-[18px] leading-[100%] font-bold tracking-[0px]">
            $ {order.shipping}
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-[15px] leading-[25px] tracking-[0px] text-black/50">
            VAT (INCLUDED)
          </span>
          <span className="text-[18px] leading-[100%] font-bold tracking-[0px]">
            $ {order.vat}
          </span>
        </li>
      </ul>

      {/* Grand Total */}
      <div className="flex items-center justify-between">
        <span className="text-[15px] leading-[25px] tracking-[0px] text-black/50">
          GRAND TOTAL
        </span>
        <span className="text-primary text-[18px] leading-[100%] font-bold tracking-[0px]">
          $ {order.grandTotal.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default OrderSummary;
