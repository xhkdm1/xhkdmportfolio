"use client";

import { useEffect, useState } from "react";

type BackToTopProps = {
  showAfter?: number;
  label?: string;
};

export default function BackToTop({
  showAfter = 700,
  label = "맨 위로 이동",
}: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY >= showAfter);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      className={`fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-950 shadow-[0_12px_35px_rgba(0,0,0,0.14)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-zinc-950 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950 sm:bottom-8 sm:right-8 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="m6.5 10.5 5.5-5.5 5.5 5.5" />
      </svg>
    </button>
  );
}
