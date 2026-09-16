import type { PageContent } from "../../types/content";

export const newsCategoryContent: PageContent = {
  eyebrow: "Blog",
  title: "Company News",
  intro:
    "News, announcements and developments from Globe Technologies, documenting the company's growth, work and progress.",

  sections: [
    {
      title: "Latest News",
      cards: [
        {
          title: "Building Globe: From Ideas to a Company",
          description:
            "How Globe Technologies developed from an idea into a multidisciplinary company built around researching, developing and commercializing ideas.",
          href: "/blog/company/building-globe-from-ideas-to-a-company",
        },
      ],
    },

    {
      title: "About Company News",
      paragraphs: [
        "Company News blogposts document developments across Globe Technologies as the company grows. They provide a record of important milestones, decisions, initiatives and changes taking place across the business.",
      ],
    },
  ],

  related: [
    {
      label: "Product Updates",
      href: "/blog/product-updates",
      description:
        "Follow updates on Globe's products and intellectual properties.",
    },
    {
      label: "Press Releases",
      href: "/blog/press-releases",
      description:
        "Read official announcements from Globe Technologies.",
    },
    {
      label: "Events",
      href: "/blog/events",
      description:
        "Explore events, discussions and activities involving Globe Technologies.",
    },
  ],
};