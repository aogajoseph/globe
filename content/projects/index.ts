import type { PageContent } from "../../types/content";

export const projectsLandingContent: PageContent = {
  eyebrow: "Projects",
  title: "Projects",
  intro:
    "Projects are long-term initiatives, films, books, documentaries, research series, and other major works that are not commercial products.",
  sections: [
    {
      title: "Current Projects",
      cards: [
        {
          title: "Addam",
          description:
            "The first project in Globe Technologies' projects architecture.",
          href: "/projects/addam",
        },
      ],
    },
    {
      title: "Future Projects",
      items: [
        "Books",
        "Films",
        "Documentaries",
        "Podcasts",
        "Research Series",
      ],
    },
  ],
  related: [
    { label: "The Company", href: "/company" },
    { label: "Globe Media", href: "/divisions/media" },
    { label: "Research", href: "/research" },
  ],
};

export const addamContent: PageContent = {
  eyebrow: "Project",
  title: "Addam",
  intro:
    "Addam is the initial long-term project placeholder within Globe Technologies' projects architecture.",
  sections: [
    {
      title: "Overview",
      paragraphs: [
        "This page establishes the project template for long-form initiatives that are not commercial products.",
      ],
    },
    {
      title: "Purpose",
      paragraphs: [
        "The purpose section will eventually explain how Addam contributes to the company through storytelling, publishing, or another long-term initiative.",
      ],
    },
    {
      title: "Future Development",
      paragraphs: [
        "Future development notes, production plans, and related project details will be added here later.",
      ],
    },
  ],
  related: [
    { label: "Projects", href: "/projects" },
    { label: "Globe Media", href: "/divisions/media" },
    { label: "The Company", href: "/company" },
  ],
};
