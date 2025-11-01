import Image from "next/image";
import Container from "./container";

const AudioGear = () => {
  return (
    <Container className="grid grid-cols-[445px_1fr] flex-col items-center gap-x-[125px] gap-y-[63px] max-lg:flex max-md:gap-y-10">
      <div className="max-lg:order-2 max-lg:text-center">
        <h2 className="mb-8 text-[40px] leading-11 font-bold tracking-[1.43px] uppercase max-md:text-[28px] max-md:leading-[100%] max-md:tracking-[1px]">
          Bringing you the <br className="hidden lg:block" />{" "}
          <span className="text-primary">best</span>{" "}
          <br className="hidden md:block lg:hidden" />
          audio gear
        </h2>
        <p className="text-[15px] leading-[25px] font-normal tracking-[0px] text-black opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="flex h-[588px] items-center overflow-hidden rounded-lg max-lg:order-1 max-lg:h-[300px] max-md:aspect-327/300 max-md:h-auto">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/shared/desktop/image-best-gear.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/shared/tablet/image-best-gear.jpg"
          />
          <Image
            src="/assets/shared/mobile/image-best-gear.jpg"
            alt="YX1 Earphones"
            className="h-full w-full object-cover object-center"
            width={300}
            height={300}
          />
        </picture>
      </div>
    </Container>
  );
};

export default AudioGear;
