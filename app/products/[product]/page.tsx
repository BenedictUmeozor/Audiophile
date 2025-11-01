import AudioGear from "@/components/shared/audio-gear";
import Categories from "@/components/shared/categories";
import Container from "@/components/shared/container";
import { PRODUCTS } from "@/constants/products";
import { notFound } from "next/navigation";
import BackButton from "./back-button";
import ProductFeatures from "./product-features";
import ProductGallery from "./product-gallery";
import ProductInfo from "./product-info";
import SimilarProducts from "./similar-products";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    product: product.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;

  const pageProduct = PRODUCTS.find((p) => p.slug === product);

  if (!pageProduct) {
    notFound();
  }

  return (
    <main className="space-y-40 pb-40 max-lg:space-y-[120px] max-lg:pb-[120px]">
      <Container>
        <BackButton />
        <section className="space-y-40 max-lg:space-y-[120px]">
          <ProductInfo product={pageProduct} />
          <ProductFeatures product={pageProduct} />
          <ProductGallery product={pageProduct} />
          <SimilarProducts product={pageProduct} />
        </section>
      </Container>
      <Categories />
      <AudioGear />
    </main>
  );
}
