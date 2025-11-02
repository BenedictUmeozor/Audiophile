"use client";

import type { Doc } from "@/convex/_generated/dataModel";

interface OrderDetailsProps {
  order: Doc<"orders">;
}

const OrderDetails = ({ order }: OrderDetailsProps) => {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-8">
      {/* Order Info */}
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        <div>
          <p className="text-[13px] leading-[25px] font-bold tracking-[0.93px] text-black/50">
            ORDER NUMBER
          </p>
          <p className="text-[15px] leading-[25px] font-bold">
            {order.orderNumber}
          </p>
        </div>
        <div>
          <p className="text-[13px] leading-[25px] font-bold tracking-[0.93px] text-black/50">
            ORDER DATE
          </p>
          <p className="text-[15px] leading-[25px] font-bold">
            {formatDate(order._creationTime)}
          </p>
        </div>
        <div>
          <p className="text-[13px] leading-[25px] font-bold tracking-[0.93px] text-black/50">
            STATUS
          </p>
          <span
            className={`inline-block rounded-full px-3 py-1 text-[12px] font-bold uppercase ${getStatusColor(order.orderStatus)}`}
          >
            {order.orderStatus}
          </span>
        </div>
        <div>
          <p className="text-[13px] leading-[25px] font-bold tracking-[0.93px] text-black/50">
            PAYMENT METHOD
          </p>
          <p className="text-[15px] leading-[25px] font-bold">
            {order.paymentMethod}
          </p>
        </div>
      </div>

      <div className="h-px w-full bg-black/10" />

      {/* Customer Details */}
      <div>
        <h6 className="text-primary mb-4 text-[13px] leading-[25px] font-bold tracking-[0.93px]">
          CUSTOMER DETAILS
        </h6>
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div>
            <p className="text-[12px] leading-[100%] font-bold tracking-[-0.21px] text-black/50">
              Name
            </p>
            <p className="mt-2 text-[15px] leading-[25px] font-bold">
              {order.customerName}
            </p>
          </div>
          <div>
            <p className="text-[12px] leading-[100%] font-bold tracking-[-0.21px] text-black/50">
              Email
            </p>
            <p className="mt-2 text-[15px] leading-[25px] font-bold">
              {order.customerEmail}
            </p>
          </div>
          <div>
            <p className="text-[12px] leading-[100%] font-bold tracking-[-0.21px] text-black/50">
              Phone
            </p>
            <p className="mt-2 text-[15px] leading-[25px] font-bold">
              {order.customerPhone}
            </p>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-black/10" />

      {/* Shipping Address */}
      <div>
        <h6 className="text-primary mb-4 text-[13px] leading-[25px] font-bold tracking-[0.93px]">
          SHIPPING ADDRESS
        </h6>
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="md:col-span-2">
            <p className="text-[12px] leading-[100%] font-bold tracking-[-0.21px] text-black/50">
              Address
            </p>
            <p className="mt-2 text-[15px] leading-[25px] font-bold">
              {order.shippingAddress}
            </p>
          </div>
          <div>
            <p className="text-[12px] leading-[100%] font-bold tracking-[-0.21px] text-black/50">
              City
            </p>
            <p className="mt-2 text-[15px] leading-[25px] font-bold">
              {order.shippingCity}
            </p>
          </div>
          <div>
            <p className="text-[12px] leading-[100%] font-bold tracking-[-0.21px] text-black/50">
              ZIP Code
            </p>
            <p className="mt-2 text-[15px] leading-[25px] font-bold">
              {order.shippingZipCode}
            </p>
          </div>
          <div>
            <p className="text-[12px] leading-[100%] font-bold tracking-[-0.21px] text-black/50">
              Country
            </p>
            <p className="mt-2 text-[15px] leading-[25px] font-bold">
              {order.shippingCountry}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
