import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[rgb(var(--color-border))] bg-[rgb(var(--color-background))] px-3 py-1 text-caption font-semibold text-[rgb(var(--color-secondary))]",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
