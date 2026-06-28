import Link from "next/link";
import { Container } from "./container";
import { footerNavigation, primaryNavigation } from "../../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="text-small font-semibold tracking-[0.18em] uppercase text-[rgb(var(--color-primary))]">
              Globe Technologies
            </p>
            <p className="text-body text-[rgb(var(--color-muted))]">
              A calm, durable company foundation for the long-term Globe
              Technologies web platform.
            </p>
          </div>

          <nav className="space-y-3" aria-label="Footer navigation">
            <p className="text-caption font-semibold text-[rgb(var(--color-muted))]">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-small text-[rgb(var(--color-secondary))] transition-colors hover:text-[rgb(var(--color-primary))]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav className="space-y-3" aria-label="Footer divisions">
            <p className="text-caption font-semibold text-[rgb(var(--color-muted))]">
              Divisions
            </p>
            <div className="flex flex-col gap-2">
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-small text-[rgb(var(--color-secondary))] transition-colors hover:text-[rgb(var(--color-primary))]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="space-y-3">
            <p className="text-caption font-semibold text-[rgb(var(--color-muted))]">
              Contact
            </p>
            <p className="text-small text-[rgb(var(--color-secondary))]">
              Contact details will be finalized in the next content phase.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[rgb(var(--color-border))] pt-6 text-small text-[rgb(var(--color-muted))] md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} Globe Technologies. All rights reserved.</p>
          <p>Built on a reusable company foundation.</p>
        </div>
      </Container>
    </footer>
  );
}
