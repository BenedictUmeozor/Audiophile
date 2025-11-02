"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="body mb-14 text-black/50 transition-colors hover:text-primary max-lg:mb-6"
    >
      Go Back
    </button>
  );
};

export default BackButton;
