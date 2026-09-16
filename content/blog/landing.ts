import type { PageContent } from "../../types/content";

export const blogLandingContent: PageContent = {
  eyebrow: "Blog",
  title: "News and Updates",
  intro:
    "Explore the latest stories, updates and announcements from Globe Technologies. Our blog covers the company, its products, official communications and events.",

  sections: [
    {
      title: "Latest Posts",
      cards: [
        {
          title: "Building Globe: From Ideas to a Company",
          description:
            "A look at the thinking behind Globe Technologies and the model of turning ideas into products, services and intellectual properties.",
          href: "/blogposts/building-globe-from-ideas-to-a-company",
        },
        {
          title: "Akiba: Building a Better Way for Groups to Manage Shared Money",
          description:
            "An introduction to Akiba and the problem it is designed to solve for groups coordinating contributions, goals and shared finances.",
          href: "/blogposts/akiba-shared-finance",
        },
        {
          title: "Globe Technologies Announces Its Current Intellectual Property Portfolio",
          description:
            "An overview of Globe's current IP families, including Akiba, Addam and Research Publications.",
          href: "/blogposts/globe-intellectual-property-portfolio",
        },
        {
          title: "Inside Globe: How Research Shapes What We Build",
          description:
            "Why research sits at the beginning of Globe's model and how it helps determine what an idea can become.",
          href: "/blogposts/globe-research-and-innovation",
        },
      ],
    },

    {
      title: "Browse by Category",
      cards: [
        {
          title: "Company News",
          description:
            "Announcements, milestones and developments from across Globe Technologies.",
          href: "/blog/company-news",
        },
        {
          title: "Product Updates",
          description:
            "Stories and updates about Globe's products and intellectual properties.",
          href: "/blog/product-updates",
        },
        {
          title: "Press Releases",
          description:
            "Formal announcements and official communications from Globe Technologies.",
          href: "/blog/press-releases",
        },
        {
          title: "Events",
          description:
            "Events, discussions and other activities involving Globe Technologies.",
          href: "/blog/events",
        },
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