"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
  aspectClassName?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  dark?: boolean;
};

export default function ImageLightbox({
  src,
  alt,
  label,
  caption,
  aspectClassName = "aspect-video",
  imageClassName = "object-contain",
  sizes = "(max-width: 768px) 100vw, 1120px",
  priority = false,
  dark = false,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <figure className="flex h-full min-w-0 flex-col">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${alt} 확대해서 보기`}
        className={`group relative block w-full overflow-hidden rounded-2xl border ${
          dark
            ? "border-white/10 bg-white"
            : "border-zinc-200 bg-zinc-50"
        } ${aspectClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`${imageClassName} transition duration-300 group-hover:scale-[1.01]`}
        />

        <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white">
          확대 ↗
        </span>
      </button>

      {(label || caption) && (
        <figcaption className="mt-4 min-w-0">
          {label && (
            <p
              className={`text-xs font-medium uppercase tracking-[0.12em] ${
                dark ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              {label}
            </p>
          )}
          {caption && (
            <p
              className={`mt-2 text-sm font-medium leading-6 ${
                dark ? "text-zinc-200" : "text-zinc-800"
              }`}
            >
              {caption}
            </p>
          )}
        </figcaption>
      )}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} 확대 이미지`}
        >
          <div
            className="relative h-full w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="확대 이미지 닫기"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl text-zinc-950 shadow-lg sm:right-8 sm:top-8"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
      )}
    </figure>
  );
}