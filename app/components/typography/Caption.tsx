import type { ReactNode } from "react";
import { cn } from "../../../lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Caption({ children, className }: Props) {
  return <p className={cn("text-sm leading-6 text-zinc-500", className)}>{children}</p>;
}
