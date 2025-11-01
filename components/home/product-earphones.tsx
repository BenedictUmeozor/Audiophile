import Image from "next/image";
import Link from "next/link";
import Container from "../shared/container";
import Button from "../ui/button";

const ProductEarphones = () => {
  return (
    <Container className="mb-[200px] grid grid-cols-2 gap-x-[30px] gap-y-6 max-lg:mb-24 max-lg:gap-x-[11px] max-md:mb-[120px] max-md:grid-cols-1">
      <div className="flex h-80 items-center justify-center overflow-hidden rounded-lg max-md:h-[200px]">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
          />
          <Image
            src="/assets/home/mobile/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            className="h-full w-full object-cover object-center"
            width={300}
            height={300}
          />
        </picture>
      </div>
      <div className="bg-muted flex items-center rounded-lg max-md:h-[200px]">
        <div className="z-10 ml-[95px] max-lg:ml-[41px]">
          <h2 className="mb-8 text-[28px] leading-[100%] font-bold tracking-[2px] text-black uppercase">
            YX1 EARPHONES
          </h2>
          <Link href="/products/yx1-earphones">
            <Button variant="outline">SEE PRODUCT</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ProductEarphones;
