import type { ElementType, ReactNode } from "react";
import { cn } from "../../../lib/cn";

type Size = "sm" | "md" | "lg";

type Props<T extends ElementType = "p"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  size?: Size;
};

const sizeClass: Record<Size, string> = {
  sm: "text-sm leading-6",
  md: "text-base leading-7",
  lg: "text-lg leading-8",
};

export function Body<T extends ElementType = "p">({
  as,
  children,
  className,
  size = "md",
}: Props<T>) {
  const Component = as ?? "p";
  return (
    <Component className={cn("text-zinc-600", sizeClass[size], className)}>
      {children}
    </Component>
  );
}
