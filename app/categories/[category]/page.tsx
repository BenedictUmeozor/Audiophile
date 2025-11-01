import AudioGear from "@/components/shared/audio-gear";
import Categories from "@/components/shared/categories";
import Container from "@/components/shared/container";
import { CATEGORIES } from "@/constants/categories";
import { notFound } from "next/navigation";
import ProductDetails from "./product-details";

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({
    category: c.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const pageCategory = CATEGORIES.find((c) => c.slug === category);

  if (!pageCategory) {
    notFound();
  }

  return (
    <main className="pb-40 max-lg:pb-[120px]">
      <section className="bg-black pt-[98px] pb-[97px] text-center text-[40px] leading-11 font-bold tracking-[1.43px] text-white uppercase max-lg:pt-[105px] max-md:pt-8 max-md:pb-8 max-md:text-[28px] max-md:leading-[100%] max-md:tracking-[2px]">
        {pageCategory.name}
      </section>
      <Container className="space-y-40 py-40 max-lg:space-y-[120px] max-lg:py-[120px] max-md:pt-16">
        {pageCategory.products.map((product, index) => (
          <ProductDetails
            key={product.id}
            product={product}
            evenOrder={index % 2 === 0}
            index={index}
          />
        ))}
      </Container>
      <Categories className="mb-40 max-lg:mb-[120px]" />
      <AudioGear />
    </main>
  );
}
