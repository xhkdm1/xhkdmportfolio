"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  caption?: string;
};

export default function ImageLightbox({
  src,
  alt,
  caption,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden rounded-3xl border border-zinc-200"
      >
        <Image
          src={src}
          alt={alt}
          width={2000}
          height={2600}
          className="w-full transition duration-300 group-hover:scale-[1.01]"
        />

        <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
          🔍 Click to enlarge
        </div>
      </button>

      {caption && (
        <p className="mt-3 text-sm text-zinc-500">
          {caption}
        </p>
      )}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-8"
        >
          <Image
            src={src}
            alt={alt}
            width={2600}
            height={3400}
            className="max-h-[92vh] w-auto rounded-xl"
          />

          <button
            className="absolute right-8 top-8 text-4xl text-white"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}