import type { ReactNode } from "react";
import { cn } from "../../../lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
};

export function HeroTitle({ children, className }: Props) {
  return (
    <h1
      className={cn(
        "max-w-[12ch] text-4xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl lg:text-6xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
