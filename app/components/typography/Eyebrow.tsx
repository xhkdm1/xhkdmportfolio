import type { ReactNode } from "react";
import { cn } from "../../../lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: Props) {
  return (
    <p className={cn("text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500", className)}>
      {children}
    </p>
  );
}
