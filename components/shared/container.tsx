import { cn } from "@/utils";
import { ComponentProps } from "react";

const Container = ({
  className,
  children,
  addOverflow = true,
  ...props
}: ComponentProps<"div"> & {
  addOverflow?: boolean;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1110px] max-lg:max-w-[689px]  max-md:max-w-[88%]",
        className,
        addOverflow && "overflow-hidden",
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
