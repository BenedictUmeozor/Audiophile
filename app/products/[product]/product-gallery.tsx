import Image from "next/image";

const ProductGallery = ({ product }: { product: T.Product }) => {
  return (
    <section className="grid aspect-1110/592 grid-cols-[445px_635px] gap-x-[30px] max-lg:aspect-690/368 max-lg:grid-cols-[277px_395px] max-lg:gap-x-[18px] max-md:grid-cols-1 max-md:gap-y-5 max-md:aspect-auto">
      <div className="grid grid-rows-[1fr_1fr] gap-y-8 max-lg:gap-y-5">
        <div className="flex items-center justify-center overflow-hidden rounded-lg max-md:aspect-327/174">
          <picture>
            <source
              srcSet={product.gallery.first.desktop}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={product.gallery.first.tablet}
              media="(min-width: 768px)"
            />
            <Image
              src={product.gallery.first.mobile}
              alt={product.name}
              width={200}
              height={100}
              className="h-full w-full object-cover"
            />
          </picture>
        </div>
        <div className="flex items-center justify-center overflow-hidden rounded-lg max-md:aspect-327/174">
          <picture>
            <source
              srcSet={product.gallery.second.desktop}
              media="(min-width: 1024px)"
            />
            <source
              srcSet={product.gallery.second.tablet}
              media="(min-width: 768px)"
            />
            <Image
              src={product.gallery.second.mobile}
              alt={product.name}
              width={200}
              height={100}
              className="h-full w-full object-cover"
            />
          </picture>
        </div>
      </div>
      <div className="flex items-center justify-center overflow-hidden rounded-lg max-md:aspect-327/368">
        <picture>
          <source
            srcSet={product.gallery.third.desktop}
            media="(min-width: 1024px)"
          />
          <source
            srcSet={product.gallery.third.tablet}
            media="(min-width: 768px)"
          />
          <Image
            src={product.gallery.third.mobile}
            alt={product.name}
            width={200}
            height={100}
            className="h-full w-full object-cover"
          />
        </picture>
      </div>
    </section>
  );
};

export default ProductGallery;
