"use client";

import { useCartContext } from "@/context/cart-context";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Button from "../ui/button";
import Container from "./container";

const CartItem = ({ item }: { item: T.CartItem }) => {
  const { dispatch } = useCartContext();

  const productName = item.product.name.split(" ").slice(0, -1).join(" ");

  const incrementQuantity = () => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { cartItemId: item.id } });
  };
  const decrementQuantity = () => {
    if (item.quantity === 1) {
      dispatch({ type: "REMOVE_FROM_CART", payload: { cartItemId: item.id } });
    } else {
      dispatch({
        type: "DECREMENT_QUANTITY",
        payload: { cartItemId: item.id },
      });
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-4">
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
        <div>
          <p className="text-[15px] leading-[25px] font-bold tracking-[0px]">
            {productName}
          </p>
          <p className="text-[14px] leading-[25px] font-bold tracking-[0px] text-black/50">
            $ {item.product.price.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="bg-muted grid h-8 w-24 grid-cols-3">
        <button
          className="hover:text-primary flex items-center justify-center text-[13px] leading-[100%] font-bold tracking-[1px] text-black/25 uppercase transition-colors duration-150 ease-linear"
          onClick={decrementQuantity}
        >
          -
        </button>
        <p className="flex items-center justify-center text-[13px] leading-[100%] font-bold tracking-[1px]">
          {item.quantity}
        </p>
        <button
          className="hover:text-primary flex items-center justify-center text-[13px] leading-[100%] font-bold tracking-[1px] text-black/25 uppercase transition-colors duration-150 ease-linear"
          onClick={incrementQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const { cart, dispatch } = useCartContext();

  const productsLength = cart.items.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    setOpen(false);
    toast.success("Cart cleared");
  };

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [open]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.addEventListener("toggle-cart", toggleOpen);

    return () => {
      window.removeEventListener("toggle-cart", toggleOpen);
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  if (!open) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 top-0 left-0 z-99 overflow-y-auto bg-black/40"
      onClick={(e) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      }}
    >
      <Container className="mt-[97px] flex items-start justify-end pt-8 pb-12 max-lg:mt-[90px] max-lg:pt-6">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "tween" }}
          ref={menuRef}
          className="w-[377px] rounded-lg bg-white px-[33px] py-[31px] max-md:w-full"
        >
          {cart.items.length === 0 ? (
            <p className="body text-black/60">Your cart is empty</p>
          ) : (
            <>
              <header className="mb-8 flex items-center justify-between">
                <h6 className="text-[18px] leading-[100%] font-bold tracking-[1.29px]">
                  CART ({productsLength})
                </h6>
                <button
                  className="hover:text-primary text-[15px] leading-[25px] tracking-[0px] text-black/50 underline transition-colors duration-150 ease-linear"
                  onClick={clearCart}
                >
                  Remove all
                </button>
              </header>
              <div className="mb-8 space-y-6">
                {cart.items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[15px] leading-[25px] tracking-[0px] text-black/50">
                  TOTAL
                </span>
                <span className="text-[18px] leading-[100%] font-bold tracking-[0px]">
                  $ {cart.total.toLocaleString()}
                </span>
              </div>
              <Link href="/checkout">
                <Button variant="default" block>
                  CHECKOUT
                </Button>
              </Link>
            </>
          )}
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Cart;
