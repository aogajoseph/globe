import type { PageContent } from "../../types/content";

export const divisionsLandingContent: PageContent = {
  eyebrow: "Divisions",
  title: "Globe Technologies Divisions",
  intro:
    "The company is organized around two current business divisions: Globe Software and Globe Media.",
  sections: [
    {
      title: "Division Structure",
      cards: [
        {
          title: "Globe Software",
          description:
            "Responsible for researching, designing, developing and maintaining software products and digital platforms.",
          href: "/divisions/software",
        },
        {
          title: "Globe Media",
          description:
            "Responsible for researching, creating and publishing educational and creative media.",
          href: "/divisions/media",
        },
      ],
    },
  ],
  related: [
    { label: "Products", href: "/products", description: "Product architecture and future offerings." },
    { label: "Research", href: "/research", description: "Knowledge creation and publication architecture." },
    { label: "Careers", href: "/careers", description: "Career pathways across the company." },
  ],
};

export const softwareDivisionContent: PageContent = {
  eyebrow: "Division",
  title: "Globe Software",
  intro:
    "Globe Software is responsible for researching, designing, developing and maintaining software products and digital platforms.",
  sections: [
    {
      title: "Overview",
      paragraphs: [
        "Globe Software supports the company by building durable software capabilities and digital infrastructure.",
      ],
    },
    {
      title: "Purpose",
      items: [
        "Develop practical digital systems",
        "Support internal company operations",
        "Create durable technical foundations",
        "Enable future products and services",
      ],
    },
    {
      title: "Relationship to Globe Technologies",
      paragraphs: [
        "Globe Software operates as a division of Globe Technologies and remains aligned with the company's strategy, governance and long-term direction.",
      ],
    },
    {
      title: "Current Product",
      items: ["Akiba"],
    },
    {
      title: "Future Products",
      items: [
        "Artificial Intelligence Solutions",
        "Enterprise Platforms",
        "Mobile Applications",
        "Cloud Services",
      ],
    },
    {
      title: "Careers",
      paragraphs: [
        "Career pathways in this division will be published as recruitment information becomes available.",
      ],
    },
  ],
  related: [
    { label: "Globe Media", href: "/divisions/media" },
    { label: "Products", href: "/products" },
    { label: "The Company", href: "/company" },
  ],
};

export const mediaDivisionContent: PageContent = {
  eyebrow: "Division",
  title: "Globe Media",
  intro:
    "Globe Media is responsible for researching, creating and publishing educational and creative media.",
  sections: [
    {
      title: "Overview",
      paragraphs: [
        "Globe Media provides a division framework for communication, storytelling, and the structured sharing of knowledge.",
      ],
    },
    {
      title: "Purpose",
      items: [
        "Publish ideas and company updates",
        "Support public communication",
        "Organize future editorial work",
        "Extend Globe Technologies' mission through media",
      ],
    },
    {
      title: "Relationship to Globe Technologies",
      paragraphs: [
        "Globe Media operates as a division of Globe Technologies and remains aligned with the company's standards and priorities.",
      ],
    },
    {
      title: "Current Project",
      items: ["Addam"],
    },
    {
      title: "Future Media",
      items: ["Books", "Films", "Documentaries", "Podcasts", "Educational Series"],
    },
    {
      title: "Careers",
      paragraphs: [
        "Future opportunities in content, editorial, and media operations will be listed here.",
      ],
    },
  ],
  related: [
    { label: "Globe Software", href: "/divisions/software" },
    { label: "News", href: "/news" },
    { label: "The Company", href: "/company" },
  ],
};

