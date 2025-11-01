"use client";

import Button from "@/components/ui/button";
import { useCartContext } from "@/context/cart-context";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

const ProductInfo = ({ product }: { product: T.Product }) => {
  const [quantity, setQuantity] = useState(1);
  const productName = product.name.split(" ").slice(0, -1).join(" ");
  const { dispatch } = useCartContext();

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { product, quantity },
    });
    setQuantity(1);
    toast.success("Product added to cart");
  };

  return (
    <div className="grid grid-cols-[1fr_445.5px] items-center gap-x-[124.5px] max-lg:grid-cols-[281px_339.5px] max-lg:gap-x-[69px] max-md:grid-cols-1 max-md:gap-y-8">
      <div className="bg-muted flex aspect-540/560 items-center justify-center overflow-hidden rounded-lg max-lg:aspect-281/480 max-md:aspect-square">
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
      <div>
        {product.new && (
          <h6 className="text-primary mb-4 text-[14px] leading-[100%] font-normal tracking-[10px] uppercase max-lg:mb-[17px] max-lg:text-[12px] max-lg:tracking-[8.57px] max-md:mb-6">
            NEW PRODUCT
          </h6>
        )}
        <h2 className="mb-8 text-[40px] leading-11 font-bold tracking-[1.43px] uppercase max-lg:text-[28px] max-lg:leading-8 max-lg:tracking-[1px] max-md:mb-6 max-md:text-[28px] max-md:leading-[100%] max-md:tracking-[1px]">
          {productName} <br />
          {product.category}
        </h2>
        <p className="mb-8 text-[15px] leading-[25px] tracking-[0px] opacity-50 max-md:mb-6">
          {product.description}
        </p>
        <p className="mb-[47px] text-[18px] leading-[100%] font-bold tracking-[1.26px] max-lg:mb-[31px] max-lg:tracking-[1.29px]">
          $ {product.price.toLocaleString()}
        </p>
        <div className="flex items-center gap-x-4">
          <div className="bg-muted grid h-12 w-[120px] grid-cols-3">
            <button
              className="hover:text-primary flex items-center justify-center text-[13px] leading-[100%] font-bold text-black/25 uppercase transition-colors duration-150 ease-linear"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <p className="flex items-center justify-center text-[13px] leading-[100%] font-bold">
              {quantity}
            </p>
            <button
              className="hover:text-primary flex items-center justify-center text-[13px] leading-[100%] font-bold text-black/25 uppercase transition-colors duration-150 ease-linear"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <Button variant="default" onClick={addToCart}>
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
