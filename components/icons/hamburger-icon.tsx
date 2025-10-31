import { ComponentProps } from "react";

const HamburgerIcon = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="16" height="3" fill="white" />
      <rect y="6" width="16" height="3" fill="white" />
      <rect y="12" width="16" height="3" fill="white" />
    </svg>
  );
};

export default HamburgerIcon;
