import { ComponentProps } from "react";

const ChevronRightIcon = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="6"
      height="12"
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.707031 0.707153L5.70703 5.70715L0.707031 10.7072"
        stroke="#D87D4A"
        strokeWidth="2"
      />
    </svg>
  );
};

export default ChevronRightIcon;
