import AudioGear from "@/components/shared/audio-gear";
import Categories from "@/components/shared/categories";
import Container from "@/components/shared/container";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { fetchQuery } from "convex/nextjs";
import { notFound } from "next/navigation";
import BackButton from "./back-button";
import OrderDetails from "./order-details";
import OrderSummary from "./order-summary";

export default async function Page({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;

  const order = await fetchQuery(api.orders.getOrderById, {
    orderId: orderId as Id<"orders">,
  });

  if (!order) {
    notFound();
  }

  return (
    <main className="bg-muted pb-[141px] pt-20 max-lg:pb-[116px] max-lg:pt-[33px]">
      <Container>
        <BackButton />
        <div className="space-y-8">
          <div className="rounded-lg bg-white px-12 py-[54px] max-lg:px-7 max-lg:py-[30px] max-md:px-6 max-md:py-6">
            <h2 className="mb-8 text-[32px] leading-9 font-bold tracking-[1.14px] max-md:mb-6 max-md:text-[28px] max-md:leading-[100%] max-md:tracking-[1px]">
              ORDER DETAILS
            </h2>
            <OrderDetails order={order} />
          </div>
          <OrderSummary order={order} />
        </div>
      </Container>
      <div className="mt-40 space-y-40 max-lg:mt-[120px] max-lg:space-y-[120px]">
        <Categories />
        <AudioGear />
      </div>
    </main>
  );
}
