import type { PageContent } from "../../types/content";

export const productsLandingContent: PageContent = {
  eyebrow: "Products",
  title: "Product Architecture",
  intro:
    "The product structure is intentionally expandable so new offerings can be introduced without changing the underlying page system.",
  sections: [
    {
      title: "Current Products",
      cards: [
        {
          title: "Akiba",
          description:
            "The first product in Globe Software's architecture.",
          href: "/products/akiba",
        },
      ],
    },
  ],
  related: [
    { label: "Globe Software", href: "/divisions/software" },
    { label: "Research", href: "/research" },
    { label: "News", href: "/news" },
  ],
};

export const akibaContent: PageContent = {
  eyebrow: "Product",
  title: "Akiba",
  intro: "Akiba is the initial product within Globe Software's architecture.",
  sections: [
    {
      title: "Overview",
      paragraphs: [
        "This page establishes the product template that future Globe Technologies products will inherit.",
      ],
    },
    {
      title: "Purpose",
      paragraphs: [
        "The purpose section will eventually explain what Akiba does and how it fits within the wider company.",
      ],
    },
    {
      title: "Key Features",
      items: [
        "Placeholder feature architecture",
        "Future modular capability layout",
        "Structured content-ready design",
      ],
    },
    {
      title: "Future Development",
      paragraphs: [
        "Future development notes, release plans, and product evolution details will be added here later.",
      ],
    },
  ],
  related: [
    { label: "Products", href: "/products" },
    { label: "Globe Software", href: "/divisions/software" },
    { label: "The Company", href: "/company" },
  ],
};

