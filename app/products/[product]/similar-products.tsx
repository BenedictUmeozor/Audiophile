import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const SimilarProducts = ({ product }: { product: T.Product }) => {
  return (
    <section>
      <h2 className="mb-16 text-center text-[32px] leading-9 font-bold tracking-[1.14px] max-md:mb-10 max-md:text-[24px] max-md:tracking-[0.86px]">
        YOU MAY ALSO LIKE
      </h2>
      <div className="grid grid-cols-3 gap-x-[30px] gap-y-14 max-lg:gap-x-[11px] max-md:grid-cols-1">
        {product.others.map((item) => (
          <div key={item.slug}>
            <div className="bg-muted flex aspect-350/318 items-center justify-center overflow-hidden rounded-lg max-lg:aspect-223/318 max-md:aspect-327/120">
              <picture>
                <source
                  srcSet={item.image.desktop}
                  media="(min-width: 1024px)"
                />
                <source srcSet={item.image.tablet} media="(min-width: 768px)" />
                <Image
                  src={item.image.mobile}
                  alt={item.name}
                  width={200}
                  height={100}
                  className="h-full w-full object-contain object-center"
                />
              </picture>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-8 pt-10 max-md:pt-8">
              <h6 className="text-[24px] leading-[100%] font-bold tracking-[1.71px] uppercase">
                {item.name}
              </h6>
              <Link href={`/products/${item.slug}`}>
                <Button variant="default">SEE PRODUCT</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarProducts;
