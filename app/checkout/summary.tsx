import Button from "@/components/ui/button";
import { useCartContext } from "@/context/cart-context";
import Image from "next/image";

interface SummaryProps {
  isSubmitting?: boolean;
}

const Summary = ({ isSubmitting = false }: SummaryProps) => {
  const { cart } = useCartContext();

  const VAT = Math.floor(cart.total * 0.2);
  const SHIPPING = 50;
  const GRAND_TOTAL = cart.total + VAT + SHIPPING;

  return (
    <div className="rounded-lg bg-white px-[33px] py-8 max-md:px-6">
      <h5 className="text-[18px] leading-[100%] font-bold tracking-[1.29px]">
        SUMMARY
      </h5>
      <div className="mt-[31px] mb-8 space-y-6">
        {cart.items.map((item) => {
          const productName = item.product.name
            .split(" ")
            .slice(0, -1)
            .join(" ");
          return (
            <div key={item.id} className="flex items-center gap-x-4">
              <div className="bg-muted flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg">
                <picture>
                  <source
                    srcSet={item.product.image.desktop}
                    media="(min-width: 1024px)"
                  />
                  <source
                    srcSet={item.product.image.tablet}
                    media="(min-width: 768px)"
                  />
                  <Image
                    src={item.product.image.mobile}
                    alt={item.product.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-contain object-center"
                  />
                </picture>
              </div>
              <div className="flex flex-1 items-start justify-between">
                <div>
                  <p className="text-[15px] leading-[25px] font-bold tracking-[0px]">
                    {productName}
                  </p>
                  <p className="text-[14px] leading-[25px] font-bold tracking-[0px] text-black/50">
                    $ {item.product.price.toLocaleString()}
                  </p>
                </div>
                <span className="text-[15px] leading-[25px] font-bold tracking-[0px] text-black/50">
                  x{item.quantity}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <ul className="mb-6 space-y-2">
        <li className="flex items-center justify-between">
          <span className="text-[15px] leading-[25px] tracking-[0px] text-black/50">
            TOTAL
          </span>
          <span className="text-[18px] leading-[100%] font-bold tracking-[0px]">
            $ {cart.total.toLocaleString()}
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-[15px] leading-[25px] tracking-[0px] text-black/50">
            SHIPPING
          </span>
          <span className="text-[18px] leading-[100%] font-bold tracking-[0px]">
            $ {SHIPPING}
          </span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-[15px] leading-[25px] tracking-[0px] text-black/50">
            VAT (INCLUDED)
          </span>
          <span className="text-[18px] leading-[100%] font-bold tracking-[0px]">
            $ {VAT}
          </span>
        </li>
      </ul>
      <div className="mb-8 flex items-center justify-between">
        <span className="text-[15px] leading-[25px] tracking-[0px] text-black/50">
          GRAND TOTAL
        </span>
        <span className="text-primary text-[18px] leading-[100%] font-bold tracking-[0px]">
          $ {GRAND_TOTAL.toLocaleString()}
        </span>
      </div>
      <Button
        variant="default"
        block
        disabled={cart.items.length === 0 || isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-x-2">
            <svg
              className="h-5 w-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            PROCESSING...
          </span>
        ) : (
          "CONTINUE & PAY"
        )}
      </Button>
    </div>
  );
};

export default Summary;
