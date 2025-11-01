"use client";

import { CATEGORIES } from "@/constants/categories";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "../icons/cart-icon";
import HamburgerIcon from "../icons/hamburger-icon";
import Container from "./container";

const Header = () => {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("toggle-menu"));
    }
  };

  return (
    <header className="sticky top-0 z-9999 bg-[#191919] max-md:border-b max-md:border-b-white/20">
      <Container className="flex items-center justify-between border-b border-b-white/20 pt-[35px] pb-9 max-md:border-b-0">
        <div className="items-center gap-x-[42px] max-lg:flex">
          <button className="lg:hidden" onClick={handleClick}>
            <HamburgerIcon />
          </button>
          <Link href="/" className="max-md:hidden">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              width={143}
              height={25}
              className="h-[25] w-[143]"
            />
          </Link>
        </div>
        <Link href="/" className="md:hidden">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={143}
            height={25}
            className="h-[25] w-[143]"
          />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-[34px]">
            <li>
              <Link
                href="/"
                className="hover:text-primary text-[13px] leading-[25px] font-bold tracking-[2px] text-white uppercase transition-colors duration-150 ease-linear"
              >
                HOME
              </Link>
            </li>
            {CATEGORIES.map((category) => (
              <li key={category.name}>
                <Link
                  href={`/categories/${category.slug}`}
                  className="hover:text-primary text-[13px] leading-[25px] font-bold tracking-[2px] text-white uppercase transition-colors duration-150 ease-linear"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button>
          <CartIcon />
        </button>
      </Container>
    </header>
  );
};

export default Header;
