"use client";

import { CATEGORIES } from "@/constants/categories";
import { cn } from "@/utils";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Container from "../shared/container";
import Button from "./button";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
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

    window.addEventListener("toggle-menu", handleToggle);

    return () => {
      window.removeEventListener("toggle-menu", handleToggle);
    };
  }, []);

  if (!open) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 top-0 left-0 z-99 w-full overflow-y-auto bg-black/40 lg:hidden"
      onClick={(e) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      }}
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "tween" }}
        className="mt-[90px] min-h-[340px] bg-white max-md:mt-8"
        ref={menuRef}
      >
        <Container
          className="flex items-center gap-x-2.5 gap-y-[68px] max-lg:pt-24 max-lg:pb-24 max-md:flex-col max-md:pt-[125px] max-md:pb-[120px] lg:gap-x-[30px] lg:pt-[120px] lg:pb-[168px]"
          addOverflow={false}
        >
          {CATEGORIES.map((category, index) => (
            <Link
              key={category.name}
              href={`/categories/${category.slug}`}
              className="bg-muted group relative flex w-full flex-1 cursor-pointer flex-col items-center justify-center gap-9 rounded-lg max-lg:p-[22px] max-lg:pt-[88px] lg:p-[30px] lg:pt-[116px]"
            >
              <Image
                src={`/assets/shared/desktop/image-category-thumbnail-${category.slug}.png`}
                alt={category.name}
                className={cn(
                  "absolute inset-0 mx-auto -translate-y-[38%] object-cover transition-transform group-hover:scale-105",
                  index === 0 &&
                    "max-lg:h-[104px] max-lg:w-[79.92px] lg:h-40 lg:w-[122.95]",
                  index === 1 &&
                    "max-lg:h-[101px] max-lg:w-[84.04px] lg:h-[146px] lg:w-[121.49px]",
                  index === 2 &&
                    "max-lg:h-[104px] max-lg:w-[103] lg:h-[126px] lg:w-[125px]",
                )}
                width={150}
                height={160}
              />

              <div className="flex flex-col items-center justify-center gap-y-[15px]">
                <p className="leading-[100%] font-bold uppercase max-lg:text-[15px] max-lg:tracking-[1.07px] lg:text-[18px] lg:tracking-[1.29px]">
                  {category.name}
                </p>
                <Button variant="shop" />
              </div>
            </Link>
          ))}
        </Container>
      </motion.div>
    </motion.section>
  );
};

export default Menu;
