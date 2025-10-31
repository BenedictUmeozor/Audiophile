import Image from "next/image";
import Container from "../shared/container";
import Button from "../ui/button";

const HomeHero = () => {
  return (
    <section className={`relative bg-[#191919]`}>
      <Container className="relative flex h-screen items-center justify-start py-12 md:max-h-[665px]">
        <div className="z-10 w-full md:text-center lg:text-left">
          <h5 className="mb-6 text-[14px] leading-[100%] font-normal tracking-[10px] text-white opacity-[49.64%]">
            NEW PRODUCT
          </h5>
          <h1 className="h1 mb-6 text-white">
            XX99 Mark II <br />
            Headphones
          </h1>
          <p className="mb-10 text-[15px] leading-[25px] font-medium tracking-[0] text-white opacity-75">
            Experience natural, lifelike audio and exceptional <br /> build
            quality made for the passionate music <br /> enthusiast.
          </p>
          <Button variant="default">SEE PRODUCT</Button>
        </div>

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
            className="absolute inset-0 h-full w-full object-cover object-bottom"
            fill
          />
        </picture>
      </Container>
    </section>
  );
};

export default HomeHero;
