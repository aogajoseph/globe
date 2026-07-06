import Link from "next/link";
import type { PageCard, PageContent, PageSection, RelatedLink } from "../../types/content";
import { Badge } from "../common/badge";
import { Card } from "../common/card";
import { Container } from "./container";
import { Section } from "./section";
import { cn } from "../../lib/utils";

type CompanyPageProps = {
  content: PageContent;
};

type SectionLayout = "content" | "list" | "features" | "mixed";

function getSectionLayout(section: PageSection): SectionLayout {
  if (section.cards && section.paragraphs?.length) {
    return "mixed";
  }

  if (section.cards) {
    return "features";
  }

  if (section.items) {
    return "list";
  }

  return "content";
}

function getCardActionLabel(card: PageCard): string {
  if (!card.href) {
    return "";
  }

  const title = card.title.toLowerCase();
  const href = card.href.toLowerCase();

  if (href.includes("/contact") || title.includes("contact")) {
    return "Contact us →";
  }

  if (title.includes("akiba") || href.includes("/products/akiba")) {
    return "Discover Akiba →";
  }

  if (title.includes("addam") || href.includes("/projects/addam")) {
    return "Learn about Addam →";
  }

  if (href.includes("/divisions/")) {
    return "View division →";
  }

  if (href.includes("/research") || title.includes("research")) {
    return "Read more →";
  }

  if (href.includes("/products/")) {
    return "View product →";
  }

  if (href.includes("/projects/")) {
    return "View project →";
  }

  return "Learn more →";
}

function getCtaActionLabel(cta: RelatedLink): string {
  const href = cta.href.toLowerCase();

  if (href.includes("/contact")) {
    return "Contact us";
  }

  if (href.includes("/research")) {
    return "Explore research";
  }

  if (href.includes("/careers")) {
    return "View careers";
  }

  return cta.label;
}

function SectionHeader({ section }: { section: PageSection }) {
  return (
    <div className="max-w-3xl space-y-4">
      <h2 className="text-h2 text-[rgb(var(--color-foreground))]">{section.title}</h2>
      {section.description ? (
        <p className="max-w-2xl text-lead">{section.description}</p>
      ) : null}
    </div>
  );
}

function SectionParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-3xl space-y-5">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-body text-[rgb(var(--color-secondary))]">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function SectionItems({ items }: { items: string[] }) {
  return (
    <ul className="max-w-3xl divide-y divide-[rgb(var(--color-border))]/60">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-4 py-4 text-body text-[rgb(var(--color-secondary))] first:pt-0 last:pb-0"
        >
          <span
            className="mt-[0.65rem] h-px w-4 shrink-0 bg-[rgb(var(--color-primary))]/35"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionCards({ cards }: { cards: PageCard[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {cards.map((card) => (
        <Card
          key={card.title}
          className={cn(
            "flex h-full flex-col gap-4 transition-[border-color,box-shadow] duration-200 ease-out",
            card.href &&
              "hover:border-[rgb(var(--color-primary))]/15 hover:shadow-[0_4px_18px_rgba(15,23,42,0.05)]",
          )}
        >
          <div className="space-y-3">
            <h3 className="text-h3 text-[rgb(var(--color-foreground))]">{card.title}</h3>
            <p className="text-body text-[rgb(var(--color-secondary))]">{card.description}</p>
          </div>
          {card.href ? (
            <Link
              href={card.href}
              className="mt-auto inline-flex text-small font-medium text-[rgb(var(--color-primary))] transition-colors duration-200 hover:text-[rgb(var(--color-foreground))]"
            >
              {getCardActionLabel(card)}
            </Link>
          ) : null}
        </Card>
      ))}
    </div>
  );
}

function renderSection(section: PageSection) {
  return (
    <Section
      key={section.title}
      id={section.id}
      className="border-b border-[rgb(var(--color-border))] py-16 last:border-none"
    >
      <div className="space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-h2">
            {section.title}
          </h2>

          {section.description && (
            <p className="text-body text-[rgb(var(--color-secondary))]">
              {section.description}
            </p>
          )}

          <div className="h-px w-20 bg-[rgb(var(--color-border))]" />
        </div>

        {/* Paragraphs */}
        {section.paragraphs && (
          <div className="max-w-3xl space-y-5">
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-body leading-8 text-[rgb(var(--color-secondary))]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {/* Items */}
        {section.items && (
          <ul className="grid gap-4 md:grid-cols-2">
            {section.items.map((item) => (
              <li
                key={item}
                className="border border-[rgb(var(--color-border))]
                           bg-[rgb(var(--color-surface))]
                           p-5"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* Cards */}
        {section.cards && (
          <div className="grid gap-6 md:grid-cols-2">
            {section.cards.map((card) => (
              <Card
                key={card.title}
                className="group flex h-full flex-col justify-between border transition-all duration-200 hover:border-[rgb(var(--color-primary))]"
              >
                <div className="space-y-4">
                  <h3 className="text-h3">
                    {card.title}
                  </h3>

                  <p className="text-body text-[rgb(var(--color-secondary))]">
                    {card.description}
                  </p>
                </div>

                {card.href && (
                  <Link
                    href={card.href}
                    className="mt-8 inline-flex text-small font-semibold text-[rgb(var(--color-primary))]"
                  >
                    Learn more →
                  </Link>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

export function CompanyPage({ content }: CompanyPageProps) {
  return (
    <>
      {/* Hero */}
      <Section className="border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <div className="max-w-5xl space-y-8">
            {content.eyebrow ? (
              <Badge className="w-fit">
                {content.eyebrow}
              </Badge>
            ) : null}

            <div className="space-y-6">
              <h1 className="max-w-4xl text-display">
                {content.title}
              </h1>

              {content.intro ? (
                <p className="max-w-3xl text-lg leading-8 text-[rgb(var(--color-secondary))]">
                  {content.intro}
                </p>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Container className="space-y-8 py-12 md:space-y-10 md:py-16">
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
                className="inline-flex rounded-full bg-[rgb(var(--color-primary))] px-5 py-3 text-small font-medium text-white transition-colors hover:opacity-90"
              >
                Continue
              </Link>
            </Card>
          </Container>
        </Section>
      ) : null}

      {content.related ? (
        <Section className="pt-0">
          <Container className="space-y-6">
            <div className="border-t border-[rgb(var(--color-border))] pt-8">
              <h2 className="text-h3">Related Pages</h2>
            </div>

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
