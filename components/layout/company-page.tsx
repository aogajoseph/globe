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

const actionLinkClass =
  "inline-flex items-center gap-2 text-small font-medium text-[rgb(var(--color-primary))] transition-[gap,color] duration-200 ease-out group-hover:gap-2.5";

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

  if (href.includes("/company/")) {
    return "Learn more →";
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

  if (href.includes("/products/akiba")) {
    return "Discover Akiba";
  }

  return cta.label;
}

function getRelatedActionLabel(item: RelatedLink): string {
  const href = item.href.toLowerCase();

  if (href.includes("/contact")) {
    return "Contact us";
  }

  if (href.includes("/divisions/")) {
    return "View division";
  }

  if (href.includes("/products/")) {
    return "View product";
  }

  if (href.includes("/projects/")) {
    return "View project";
  }

  if (href.includes("/research")) {
    return "Read more";
  }

  return "Learn more";
}

function SectionHeader({
  section,
  layout,
}: {
  section: PageSection;
  layout: SectionLayout;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        layout === "features" ? "space-y-4" : "space-y-5",
      )}
    >
      <h2 className="text-h2 text-[rgb(var(--color-foreground))]">{section.title}</h2>
      {section.description ? (
        <p
          className={cn(
            "max-w-2xl",
            layout === "content" || layout === "mixed"
              ? "text-lead"
              : "text-body text-[rgb(var(--color-secondary))]",
          )}
        >
          {section.description}
        </p>
      ) : null}
    </div>
  );
}

function SectionParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-3xl space-y-6">
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="text-body leading-[1.75] text-[rgb(var(--color-secondary))]"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function SectionItems({ items }: { items: string[] }) {
  return (
    <ul className="max-w-3xl divide-y divide-[rgb(var(--color-border))]/55">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-5 py-5 text-body leading-[1.75] text-[rgb(var(--color-secondary))] first:pt-0 last:pb-0"
        >
          <span
            className="mt-[0.7rem] h-px w-5 shrink-0 bg-[rgb(var(--color-primary))]/30"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function SectionCards({
  cards,
  layout,
}: {
  cards: PageCard[];
  layout: SectionLayout;
}) {
  return (
    <div
      className={cn(
        "grid gap-5",
        layout === "mixed" ? "md:grid-cols-2 md:gap-6" : "md:grid-cols-2 lg:gap-6",
        cards.length === 1 && "md:max-w-xl",
      )}
    >
      {cards.map((card) => (
        <Card
          key={card.title}
          className={cn(
            "group flex h-full flex-col",
            card.href &&
              "transition-[border-color,box-shadow] duration-200 ease-out hover:border-[rgb(var(--color-primary))]/20 hover:shadow-[0_6px_20px_rgba(15,23,42,0.05)]",
          )}
        >
          <div className="flex flex-1 flex-col gap-5">
            <div className="space-y-3">
              <h3 className="text-h3 text-[rgb(var(--color-foreground))]">{card.title}</h3>
              <p className="text-body leading-[1.75] text-[rgb(var(--color-secondary))]">
                {card.description}
              </p>
            </div>
            {card.href ? (
              <Link href={card.href} className={cn(actionLinkClass, "mt-auto pt-2")}>
                {getCardActionLabel(card)}
              </Link>
            ) : null}
          </div>
        </Card>
      ))}
    </div>
  );
}

function renderSection(section: PageSection) {
  const layout = getSectionLayout(section);

  return (
    <div
      key={section.title}
      id={section.id}
      className={cn(
        "py-14 md:py-20",
        layout === "features" && "md:py-24",
      )}
    >
      <div
        className={cn(
          layout === "mixed" ? "space-y-12" : "space-y-10",
          layout === "content" && section.paragraphs && "space-y-8",
        )}
      >
        <SectionHeader section={section} layout={layout} />

        {section.paragraphs ? (
          <SectionParagraphs paragraphs={section.paragraphs} />
        ) : null}

        {section.items ? <SectionItems items={section.items} /> : null}

        {section.cards ? <SectionCards cards={section.cards} layout={layout} /> : null}
      </div>
    </div>
  );
}

export function CompanyPage({ content }: CompanyPageProps) {
  return (
    <>
      <Section className="border-b border-[rgb(var(--color-border))]/80 bg-[rgb(var(--color-surface))] py-0">
        <Container className="py-16 md:py-24">
          <div className="max-w-4xl space-y-8">
            {content.eyebrow ? <Badge className="w-fit">{content.eyebrow}</Badge> : null}

            <div className="space-y-6">
              <h1 className="max-w-4xl text-display text-[rgb(var(--color-foreground))]">
                {content.title}
              </h1>

              {content.intro ? (
                <p className="max-w-2xl text-lead">{content.intro}</p>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-0">
        <Container className="py-4 md:py-6">
          <div className="divide-y divide-[rgb(var(--color-border))]/60">
            {content.sections.map((section) => renderSection(section))}
          </div>
        </Container>
      </Section>

      {content.cta ? (
        <Section className="border-t border-[rgb(var(--color-border))]/80 bg-[rgb(var(--color-surface))] py-0">
          <Container className="py-16 md:py-20">
            <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-16">
              <div className="max-w-2xl space-y-4">
                <h2 className="text-h2 text-[rgb(var(--color-foreground))]">
                  {content.cta.label}
                </h2>
                {content.cta.description ? (
                  <p className="text-lead">{content.cta.description}</p>
                ) : null}
              </div>

              <Link
                href={content.cta.href}
                className="inline-flex shrink-0 items-center gap-2 border border-[rgb(var(--color-border))] bg-[rgb(var(--color-background))] px-5 py-3 text-small font-medium text-[rgb(var(--color-primary))] transition-[border-color,background-color,gap] duration-200 ease-out hover:border-[rgb(var(--color-primary))]/25 hover:bg-[rgb(var(--color-primary-soft))]/50 hover:gap-2.5"
              >
                {getCtaActionLabel(content.cta)} →
              </Link>
            </div>
          </Container>
        </Section>
      ) : null}

      {content.related ? (
        <Section className="border-t border-[rgb(var(--color-border))]/80 py-0">
          <Container className="py-14 md:py-20">
            <div className="space-y-10">
              <div className="max-w-3xl space-y-3">
                <p className="text-caption font-semibold text-[rgb(var(--color-muted))]">
                  Continue exploring
                </p>
                <h2 className="text-h2 text-[rgb(var(--color-foreground))]">Related pages</h2>
              </div>

              <div className="grid gap-px overflow-hidden rounded-sm border border-[rgb(var(--color-border))]/80 bg-[rgb(var(--color-border))]/50 md:grid-cols-2 lg:grid-cols-3">
                {content.related.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex h-full flex-col bg-[rgb(var(--color-surface))] p-6 transition-[background-color] duration-200 ease-out hover:bg-[rgb(var(--color-primary-soft))]/35 md:p-7"
                  >
                    <h3 className="text-h3 text-[rgb(var(--color-foreground))] transition-colors duration-200 group-hover:text-[rgb(var(--color-primary))]">
                      {item.label}
                    </h3>
                    {item.description ? (
                      <p className="mt-3 flex-1 text-small leading-relaxed text-[rgb(var(--color-muted))]">
                        {item.description}
                      </p>
                    ) : null}
                    <span className={cn(actionLinkClass, "mt-5")}>
                      {getRelatedActionLabel(item)} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
