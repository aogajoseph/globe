import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingVariant = "display" | "h1" | "h2" | "h3";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4";
  variant?: HeadingVariant;
  children: ReactNode;
};

const headingStyles: Record<HeadingVariant, string> = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
};

export function Heading({
  as: Component = "h2",
  variant = "h2",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Component className={cn(headingStyles[variant], className)} {...props}>
      {children}
    </Component>
  );
}
