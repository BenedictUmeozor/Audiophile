import { cn } from "@/utils";
import { ComponentProps } from "react";

const Input = ({
  error,
  ...props
}: ComponentProps<"input"> & { error?: boolean }) => {
  return (
    <input
      {...props}
      className={cn(
        "caret-primary focus:ring-primary hover:border-primary h-14 w-full rounded-lg border border-[#CFCFCF] px-6 text-[14px] leading-[100%] font-bold tracking-[-0.25px] outline-none placeholder:text-black/40 focus:ring-1 focus:outline-none",
        error && "border-danger border-2",
      )}
    />
  );
};

export default Input;
