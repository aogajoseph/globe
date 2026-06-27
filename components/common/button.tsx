import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[rgb(var(--color-primary))] text-white hover:opacity-90",
  secondary:
    "bg-[rgb(var(--color-surface))] text-[rgb(var(--color-primary))] border border-[rgb(var(--color-border))] hover:bg-[rgb(var(--color-background))]",
  ghost: "bg-transparent text-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-background))]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-small",
  md: "h-11 px-5 text-small",
  lg: "h-12 px-6 text-body",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    />
  );
}
