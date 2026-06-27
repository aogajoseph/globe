import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type QuoteProps = HTMLAttributes<HTMLQuoteElement> & {
  children: ReactNode;
};

export function Quote({ className, children, ...props }: QuoteProps) {
  return (
    <blockquote
      className={cn(
        "border-l-2 border-[rgb(var(--color-primary))] pl-5 text-body text-[rgb(var(--color-secondary))]",
        className,
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
}
