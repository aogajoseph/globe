import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextVariant = "body" | "small" | "caption";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  variant?: TextVariant;
  children: ReactNode;
};

const textStyles: Record<TextVariant, string> = {
  body: "text-body",
  small: "text-small",
  caption: "text-caption",
};

export function Text({
  variant = "body",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <p className={cn(textStyles[variant], className)} {...props}>
      {children}
    </p>
  );
}
