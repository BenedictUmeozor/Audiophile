import Categories from "@/components/home/categories";
import HomeHero from "@/components/home/hero";
import ProductEarphones from "@/components/home/product-earphones";
import ProductZX9Speaker from "@/components/home/product-zx9-speaker";
import AudioGear from "@/components/shared/audio-gear";
import ProductZX7Speaker from "../components/home/product-zx7-speaker";

export default function Page() {
  return (
    <main className="mb-40 max-lg:mb-24 max-md:mb-[120px]">
      <HomeHero />
      <Categories />
      <ProductZX9Speaker />
      <ProductZX7Speaker />
      <ProductEarphones />
      <AudioGear />
    </main>
  );
}
