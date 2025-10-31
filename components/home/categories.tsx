import { CATEGORIES } from "@/constants/categories";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import Container from "../shared/container";
import Button from "../ui/button";

const Categories = () => {
  return (
    <Container
      className="flex items-center gap-[30px] pt-[120px] pb-[168px]"
      addOverflow={false}
    >
      {CATEGORIES.map((category, index) => (
        <Link
          key={category.name}
          href={`/categories/${category.slug}`}
          className="bg-muted group relative flex flex-1 cursor-pointer flex-col items-center justify-center gap-9 rounded-lg p-[30px] pt-[116px]"
        >
          <Image
            src={`/assets/shared/desktop/image-category-thumbnail-${category.slug}.png`}
            alt={category.name}
            className={cn(
              "absolute inset-0 mx-auto -translate-y-[38%] object-cover transition-transform group-hover:scale-105",
              index === 0 && "h-40 w-[122.95]",
              index === 1 && "h-[146px] w-[121.49px]",
              index === 2 && "h-[126px] w-[125px]",
            )}
            width={150}
            height={160}
          />

          <div className="flex flex-col items-center justify-center gap-y-[15px]">
            <p className="text-[18px] leading-[100%] font-bold tracking-[1.29px] uppercase">
              {category.name}
            </p>
            <Button variant="shop" />
          </div>
        </Link>
      ))}
    </Container>
  );
};

export default Categories;
