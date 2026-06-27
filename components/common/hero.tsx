import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
};

export function Hero({ eyebrow, title, description, actions }: HeroProps) {
  return (
    <Section className="pt-12 md:pt-16">
      <Container className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
        <div className="space-y-4">
          {eyebrow ? (
            <p className="text-caption font-semibold text-[rgb(var(--color-muted))]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-display max-w-4xl">{title}</h1>
          {description ? (
            <p className="max-w-2xl text-body text-[rgb(var(--color-secondary))]">
              {description}
            </p>
          ) : null}
        </div>
        {actions ? <div className="flex lg:justify-end">{actions}</div> : null}
      </Container>
    </Section>
  );
}
