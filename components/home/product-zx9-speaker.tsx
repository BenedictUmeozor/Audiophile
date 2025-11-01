import Image from "next/image";
import Link from "next/link";
import Container from "../shared/container";
import Button from "../ui/button";

const ProductZX9Speaker = () => {
  return (
    <Container className="bg-primary **bg-size-[944px_944px] max-md:bg-position-[center_-120px]** relative mb-12 flex flex-col items-center justify-center gap-x-[135.28px] overflow-hidden rounded-lg bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-position-[-185px_-35px] bg-no-repeat max-lg:mb-8 max-lg:gap-y-16 max-lg:bg-size-[558px_558px] max-lg:bg-position-[center_-140px] max-lg:pt-[52px] max-lg:pb-16 max-md:mb-6 max-md:gap-y-8 lg:flex-row lg:items-end lg:pt-[133px] lg:pb-0">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/home/desktop/image-speaker-zx9.png"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/assets/home/tablet/image-speaker-zx9.png"
        />
        <Image
          src="/assets/home/mobile/image-speaker-zx9.png"
          alt="Speaker ZX9"
          className="max-lg:h-[237px] max-lg:w-[197.21px] max-md:h-[207px] max-md:w-[172.25px] lg:-mb-4 lg:h-[493px] lg:w-[410.23px]"
          width={300}
          height={300}
        />
      </picture>
      <div className="w-[349px] self-start max-lg:mx-auto max-lg:text-center max-md:w-auto">
        <h2 className="h1 mb-6 text-white">
          ZX9 <br />
          SPEAKER
        </h2>
        <p className="body mb-10 text-white opacity-75 max-md:mx-auto max-md:mb-6 max-md:w-[80%] max-md:max-w-[375px]">
          Upgrade to premium speakers that are{" "}
          <br className="hidden md:block" /> phenomenally built to deliver truly
          remarkable <br className="hidden md:block" /> sound.
        </p>
        <Link href="/products/zx9-speaker">
          <Button variant="dark">SEE PRODUCT</Button>
        </Link>
      </div>
    </Container>
  );
};

export default ProductZX9Speaker;
