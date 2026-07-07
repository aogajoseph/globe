import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-sm border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] p-6 shadow-[0_1px_3px_rgba(15,23,42,0.03)] md:p-7",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
