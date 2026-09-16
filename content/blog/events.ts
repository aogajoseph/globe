import type { PageContent } from "../../types/content";

export const eventsCategoryContent: PageContent = {
  eyebrow: "Blog",
  title: "Company Events",
  intro:
    "Events, discussions and activities involving Globe Technologies, documenting occasions connected to the company's work and development.",

  sections: [
    {
      title: "Latest Events",
      cards: [
        {
          title: "Inside Globe: How Research Shapes What We Build",
          description:
          "A look at how research guides Globe Technologies in exploring ideas, evaluating opportunities and deciding what is worth developing.",
          href: "/blog/events/globe-research-and-innovation",
        },
      ],
    },

    {
      title: "About Events",
      paragraphs: [
        "Events blogposts document occasions, discussions and activities involving Globe Technologies. They provide a record of events connected to the company's work, divisions, products, research and development.",
      ],
    },

  ],

  related: [
    {
      label: "Company News",
      href: "/blog/company-news",
      description:
      "Read announcements and developments from across Globe Technologies.",
    },
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
  ],
};