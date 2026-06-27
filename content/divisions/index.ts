import type { PageContent } from "../../types/content";

export const divisionsLandingContent: PageContent = {
  eyebrow: "Divisions",
  title: "Globe Technologies Divisions",
  intro:
    "The division structure exists to organize the institution's work clearly while keeping the focus on purpose rather than promotion.",
  sections: [
    {
      title: "Division Structure",
      cards: [
        {
          title: "Software Division",
          description:
            "The software division develops tools, systems, and digital infrastructure aligned with Globe Technologies' institutional goals.",
          href: "/divisions/software",
        },
        {
          title: "Awake Media",
          description:
            "Awake Media represents Globe Technologies' media-oriented division and future knowledge distribution work.",
          href: "/divisions/awake-media",
        },
      ],
    },
  ],
  related: [
    { label: "Products", href: "/products", description: "Product architecture and future offerings." },
    { label: "Research", href: "/research", description: "Knowledge creation and publication architecture." },
    { label: "Careers", href: "/careers", description: "Career pathways across the institution." },
  ],
};

export const softwareDivisionContent: PageContent = {
  eyebrow: "Division",
  title: "Software Division",
  intro: "The software division builds reliable digital systems in support of Globe Technologies.",
  sections: [
    {
      title: "Overview",
      paragraphs: [
        "The software division is responsible for the design and delivery of software capabilities that serve the institution's long-term direction.",
      ],
    },
    {
      title: "Purpose",
      items: [
        "Develop practical digital systems",
        "Support internal institutional operations",
        "Create durable technical foundations",
        "Enable future products and services",
      ],
    },
    {
      title: "Relationship to Globe Technologies",
      paragraphs: [
        "The division exists as part of the broader institutional structure and remains accountable to Globe Technologies' mission and governance.",
      ],
    },
    {
      title: "Future Work",
      items: [
        "Infrastructure",
        "Applications",
        "Platform services",
        "Operational tooling",
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
    { label: "Awake Media", href: "/divisions/awake-media" },
    { label: "Products", href: "/products" },
    { label: "Careers", href: "/careers" },
  ],
};

export const awakeMediaContent: PageContent = {
  eyebrow: "Division",
  title: "Awake Media",
  intro: "Awake Media will support knowledge communication, publishing, and future media work.",
  sections: [
    {
      title: "Overview",
      paragraphs: [
        "Awake Media provides a division framework for communication, storytelling, and the structured sharing of knowledge.",
      ],
    },
    {
      title: "Purpose",
      items: [
        "Publish ideas and institutional updates",
        "Support public communication",
        "Organize future editorial work",
        "Extend Globe Technologies' knowledge mission",
      ],
    },
    {
      title: "Relationship to Globe Technologies",
      paragraphs: [
        "Awake Media operates as a division of Globe Technologies and remains aligned with the institution's standards and priorities.",
      ],
    },
    {
      title: "Future Work",
      items: [
        "Editorial publishing",
        "Media products",
        "Knowledge distribution",
        "Community communication",
      ],
    },
    {
      title: "Careers",
      paragraphs: [
        "Future opportunities in content, editorial, and media operations will be listed here.",
      ],
    },
  ],
  related: [
    { label: "Software Division", href: "/divisions/software" },
    { label: "News", href: "/news" },
    { label: "Research", href: "/research" },
  ],
};
