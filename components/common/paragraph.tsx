import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
};

export function Paragraph({ className, children, ...props }: ParagraphProps) {
  return (
    <p className={cn("text-body text-[rgb(var(--color-secondary))]", className)} {...props}>
      {children}
    </p>
  );
}
