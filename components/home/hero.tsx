import Image from "next/image";
import Link from "next/link";
import Container from "../shared/container";
import Button from "../ui/button";

const HomeHero = () => {
  return (
    <section className={`relative bg-[#191919]`}>
      <Container className="flex h-screen items-center justify-start py-12 max-lg:max-h-[665px] max-md:max-h-[600px]">
        <div className="z-10 w-full max-lg:text-center lg:text-left">
          <h5 className="mb-6 text-[14px] leading-[100%] font-normal tracking-[10px] text-white opacity-[49.64%]">
            NEW PRODUCT
          </h5>
          <h1 className="h1 mb-6 text-white">
            XX99 Mark II <br />
            Headphones
          </h1>
          <p className="mb-10 text-[15px] leading-[25px] font-medium tracking-[0] text-white opacity-75 max-md:mx-auto max-md:max-w-[328px]">
            Experience natural, lifelike audio and exceptional{" "}
            <br className="max-md:hidden" /> build quality made for the
            passionate music <br className="max-md:hidden" /> enthusiast.
          </p>
          <Link href="/products/xx99-mark-two-headphones">
            <Button variant="default">SEE PRODUCT</Button>
          </Link>
        </div>
      </Container>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/home/desktop/image-hero.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/assets/home/tablet/image-header.jpg"
        />
        <Image
          src="/assets/home/mobile/image-header.jpg"
          alt="Hero image"
          className="absolute inset-0 h-full w-full object-scale-down object-center "
          fill
        />
      </picture>
    </section>
  );
};

export default HomeHero;
