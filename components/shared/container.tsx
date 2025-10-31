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
        "mx-auto w-full md:max-w-[689px] lg:max-w-[1110px]",
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
