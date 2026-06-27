import NextLink, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AppLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
  };

export function AppLink({ className, children, ...props }: AppLinkProps) {
  return (
    <NextLink
      {...props}
      className={cn(
        "font-medium text-[rgb(var(--color-primary))] underline-offset-4 hover:underline",
        className,
      )}
    >
      {children}
    </NextLink>
  );
}
