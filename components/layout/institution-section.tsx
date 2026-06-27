import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

type InstitutionSectionProps = {
  title?: string;
  subtitle?: string;
  intro?: string;
  children?: ReactNode;
};

export function InstitutionSection({
  title,
  subtitle,
  intro,
  children,
}: InstitutionSectionProps) {
  return (
    <Section>
      <Container className="space-y-8">
        {(title || subtitle || intro) && (
          <div className="max-w-3xl space-y-4">
            {subtitle ? (
              <p className="text-caption font-semibold text-[rgb(var(--color-muted))]">
                {subtitle}
              </p>
            ) : null}
            {title ? <h1 className="text-h1">{title}</h1> : null}
            {intro ? <p className="text-body text-[rgb(var(--color-secondary))]">{intro}</p> : null}
          </div>
        )}
        {children}
      </Container>
    </Section>
  );
}
