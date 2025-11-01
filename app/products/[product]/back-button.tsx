"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="mt-[79px] mb-14 inline-block text-[15px] leading-[25px] tracking-[0px] opacity-50 max-lg:mt-[33px] max-lg:mb-6 max-md:mt-4"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
};

export default BackButton;
