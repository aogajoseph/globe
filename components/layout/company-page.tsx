import Link from "next/link";
import type { PageContent, PageSection } from "../../types/content";
import { Badge } from "../common/badge";
import { Card } from "../common/card";
import { Container } from "./container";
import { Section } from "./section";

type InstitutionalPageProps = {
  content: PageContent;
};

function renderSection(section: PageSection) {
  return (
    <Section key={section.title} id={section.id} className="py-0">
      <Card className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-h2">{section.title}</h2>
          {section.description ? (
            <p className="text-body text-[rgb(var(--color-secondary))]">
              {section.description}
            </p>
          ) : null}
        </div>

        {section.paragraphs ? (
          <div className="space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-body text-[rgb(var(--color-secondary))]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}

        {section.items ? (
          <ul className="grid gap-3 md:grid-cols-2">
            {section.items.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-background))] p-4 text-body text-[rgb(var(--color-secondary))]"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {section.cards ? (
          <div className="grid gap-4 md:grid-cols-2">
            {section.cards.map((card) => (
              <Card key={card.title} className="space-y-3">
                <h3 className="text-h3">{card.title}</h3>
                <p className="text-body text-[rgb(var(--color-secondary))]">
                  {card.description}
                </p>
                {card.href ? (
                  <Link
                    href={card.href}
                    className="inline-flex text-small font-medium text-[rgb(var(--color-primary))] underline-offset-4 hover:underline"
                  >
                    Explore
                  </Link>
                ) : null}
              </Card>
            ))}
          </div>
        ) : null}
      </Card>
    </Section>
  );
}

export function InstitutionalPage({ content }: InstitutionalPageProps) {
  return (
    <>
      <Section className="pt-12 md:pt-16">
        <Container className="space-y-6">
          {content.eyebrow ? (
            <Badge className="w-fit">{content.eyebrow}</Badge>
          ) : null}
          <div className="max-w-4xl space-y-4">
            <h1 className="text-display">{content.title}</h1>
            {content.intro ? (
              <p className="max-w-3xl text-body text-[rgb(var(--color-secondary))]">
                {content.intro}
              </p>
            ) : null}
          </div>
        </Container>
      </Section>

      <Container className="space-y-6">
        {content.sections.map((section) => renderSection(section))}
      </Container>

      {content.cta ? (
        <Section>
          <Container>
            <Card className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="space-y-2">
                <h2 className="text-h2">{content.cta.label}</h2>
                {content.cta.description ? (
                  <p className="text-body text-[rgb(var(--color-secondary))]">
                    {content.cta.description}
                  </p>
                ) : null}
              </div>
              <Link
                href={content.cta.href}
                className="inline-flex rounded-full bg-[rgb(var(--color-primary))] px-5 py-3 text-small font-medium text-white"
              >
                Continue
              </Link>
            </Card>
          </Container>
        </Section>
      ) : null}

      {content.related ? (
        <Section className="pt-0">
          <Container className="space-y-4">
            <h2 className="text-h3">Related Pages</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {content.related.map((item) => (
                <Card key={item.href} className="space-y-2">
                  <Link href={item.href} className="block">
                    <h3 className="text-h3">{item.label}</h3>
                  </Link>
                  {item.description ? (
                    <p className="text-small text-[rgb(var(--color-secondary))]">
                      {item.description}
                    </p>
                  ) : null}
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
