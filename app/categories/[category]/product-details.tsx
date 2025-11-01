import Button from "@/components/ui/button";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = ({
  product,
  evenOrder,
  index,
}: {
  product: T.Product;
  evenOrder: boolean;
  index: number;
}) => {
  const productName = product.name.split(" ").slice(0, -1).join(" ");

  return (
    <div className="grid grid-cols-[1fr_445px] items-center gap-x-[125px] gap-y-[52px] max-lg:grid-cols-1 max-md:gap-y-8">
      <div
        className={cn(
          "bg-muted aspect-540/560 overflow-hidden rounded-lg max-lg:aspect-689/352 max-md:aspect-327/352",
          !evenOrder && "lg:order-2",
        )}
      >
        <picture>
          <source srcSet={product.image.desktop} media="(min-width: 1024px)" />
          <source srcSet={product.image.tablet} media="(min-width: 768px)" />
          <Image
            src={product.image.mobile}
            alt={product.name}
            width={300}
            height={300}
            className="h-full w-full object-contain object-center"
          />
        </picture>
      </div>
      <div className={cn("max-lg:text-center", !evenOrder && "lg:order-1")}>
        {index === 0 && (
          <h6 className="text-primary mb-4 text-[14px] leading-[100%] font-normal tracking-[10px] uppercase max-md:mb-6">
            NEW PRODUCT
          </h6>
        )}
        <h2 className="mb-8 text-[40px] leading-11 font-bold tracking-[1.43px] uppercase max-md:mb-6 max-md:text-[28px] max-md:leading-[100%] max-md:tracking-[1px]">
          {productName} <br />
          {product.category}
        </h2>
        <p className="text-[15px mb-10 leading-[25px] tracking-[0px] opacity-50 max-lg:mb-6">
          {product.description}
        </p>
        <Link href={`/categories/${product.category}/products/${product.slug}`}>
          <Button variant="default">SEE PRODUCT</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
