import { cn } from "@/utils";
import { ButtonHTMLAttributes } from "react";
import ChevronRightIcon from "../icons/chevron-right-icon";

const Button = ({
  variant = "default",
  children,
  block = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "shop" | "dark";
  block?: boolean;
}) => {
  if (variant === "outline") {
    return (
      <button
        {...props}
        className="h-12 w-40 border border-black bg-transparent text-[13px] leading-[100%] font-bold tracking-[1px] text-black transition-colors duration-150 ease-linear hover:bg-black hover:text-white"
      >
        {children}
      </button>
    );
  }

  if (variant === "shop") {
    return (
      <button
        {...props}
        className="group group-hover:text-primary! flex h-[18px] w-[57.32px] items-center gap-x-1 transition-all duration-150 ease-linear"
      >
        <span className="group-hover:text-primary text-[13px] leading-[100%] font-bold tracking-[1px] text-black opacity-50 group-hover:opacity-100">
          SHOP
        </span>
        <ChevronRightIcon />
      </button>
    );
  }

  if (variant === "dark") {
    return (
      <button
        {...props}
        className="h-12 w-40 bg-black text-[13px] leading-[100%] font-bold tracking-[1px] text-white uppercase transition-colors duration-150 ease-linear hover:bg-[#4C4C4C]"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      {...props}
      className={cn(
        "bg-primary hover:bg-primary-light h-12 text-[13px] leading-[100%] font-bold tracking-[1px] text-white uppercase transition-colors duration-150 ease-linear",
        block ? "w-full" : "w-40",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
