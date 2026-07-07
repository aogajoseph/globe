import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-[rgb(var(--color-border))] bg-[rgb(var(--color-primary-soft))]/35 px-3 py-1.5 text-caption font-semibold tracking-[0.12em] text-[rgb(var(--color-primary))]",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
