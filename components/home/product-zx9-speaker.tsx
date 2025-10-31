import Image from "next/image";
import Container from "../shared/container";
import Button from "../ui/button";

const ProductZX9Speaker = () => {
  return (
    <Container className="bg-primary relative mb-12 flex h-[560px] items-end justify-center gap-x-[135.28px] overflow-hidden rounded-lg bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-size-[944px_944px] bg-position-[-185px_-35px] bg-no-repeat">
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
          className="-mb-4 h-[493px] w-[410.23px]"
          width={300}
          height={300}
        />
      </picture>
      <div className="mt-[133px] w-[349px] self-start">
        <h2 className="h1 mb-6 text-white">
          ZX9 <br />
          SPEAKER
        </h2>
        <p className="body mb-10 text-white opacity-75">
          Upgrade to premium speakers that are <br /> phenomenally built to
          deliver truly remarkable <br /> sound.
        </p>
        <Button variant="dark">SEE PRODUCT</Button>
      </div>
    </Container>
  );
};

export default ProductZX9Speaker;
