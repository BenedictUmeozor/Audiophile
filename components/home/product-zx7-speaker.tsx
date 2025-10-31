import Image from "next/image";
import Container from "../shared/container";
import Button from "../ui/button";

const ProductZX7Speaker = () => {
  return (
    <Container className="bg-muted relative mb-12 flex w-full items-center overflow-hidden rounded-lg py-[101px]">
      <div className="z-10 ml-[95px]">
        <h2 className="mb-8 text-[28px] leading-[100%] font-bold tracking-[2px] text-black uppercase">
          ZX7 SPEAKER
        </h2>
        <Button variant="outline">SEE PRODUCT</Button>
      </div>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/assets/home/desktop/image-speaker-zx7.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
        />
        <Image
          src="/assets/home/mobile/image-speaker-zx7.jpg"
          alt="Speaker ZX7"
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={300}
          height={300}
        />
      </picture>
    </Container>
  );
};

export default ProductZX7Speaker;
