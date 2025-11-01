"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="hover:text-primary mt-[79px] mb-[38px] inline-block text-[15px] leading-[25px] tracking-[0px] opacity-50 transition-colors duration-150 ease-linear max-lg:mt-12 max-lg:mb-6 max-md:mt-4"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
};

export default BackButton;
