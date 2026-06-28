"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import { primaryNavigation } from "../../lib/site";
import { cn } from "../../lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-[rgb(var(--color-border))]/80 bg-[rgb(var(--color-surface))]/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex flex-col">
          <span className="text-small font-semibold tracking-[0.18em] uppercase text-[rgb(var(--color-primary))]">
            Globe Technologies
          </span>
          <span className="text-caption text-[rgb(var(--color-muted))] normal-case tracking-[0.12em]">
            Company Website
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-small font-medium transition-colors",
                pathname === item.href
                  ? "bg-[rgb(var(--color-primary))] text-white"
                  : "text-[rgb(var(--color-secondary))] hover:bg-[rgb(var(--color-surface))] hover:text-[rgb(var(--color-primary))]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] text-[rgb(var(--color-primary))] lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-[rgb(var(--color-background))] px-6 py-8 transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "pointer-events-none translate-x-full",
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-small font-semibold tracking-[0.18em] uppercase text-[rgb(var(--color-primary))]">
            Navigation
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-full border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] p-3"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-3" aria-label="Mobile">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] px-5 py-4 text-h3"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
