import type { ReactNode } from "react";
import { cn } from "../../../lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
};

export function SectionTitle({ children, className }: Props) {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl lg:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
