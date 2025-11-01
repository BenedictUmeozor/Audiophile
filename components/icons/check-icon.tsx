import { ComponentProps } from "react";

const CheckIcon = (props: ComponentProps<"svg">) => {
  return (
    <svg
      width="26"
      height="21"
      viewBox="0 0 26 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.41406 10.4658L8.16558 17.2173L23.9687 1.41418"
        stroke="white"
        strokeWidth="4"
      />
    </svg>
  );
};

export default CheckIcon;
