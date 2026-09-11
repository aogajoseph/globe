import type { PageContent } from "../../../types/content";

export const akibaContent: PageContent = {
  eyebrow: "Software Intellectual Property",
  title: "Akiba",
  intro:
    "Akiba is a collaborative financial platform developed by Globe Software. It enables groups to coordinate, communicate and transparently manage shared financial goals in one trusted environment.",

  sections: [
    {
      type: "image",
      id: "akiba-mockup",
      src: "/images/products/akiba-app-mockup.png",
      alt: "Akiba collaborative financial platform on mobile devices",
      variant: "feature",
    },

    {
      title: "The Problem",
      paragraphs: [
        "Groups often manage shared financial goals through a combination of messaging apps, bank accounts, spreadsheets and manual updates. Contributions, balances and financial decisions can become difficult to track, leaving members dependent on incomplete information and informal trust.",
        "Akiba brings these activities into one shared environment, giving groups a clearer way to coordinate, communicate and maintain visibility over their financial goals.",
      ],
    },

    {
      title: "The Group",
      paragraphs: [
        "The group is the foundation of Akiba. Each group brings people together around a shared financial goal and provides the structure through which members can communicate, contribute and monitor financial activity.",
        "Members can participate according to defined roles and access the information they need to understand the group's progress and activity.",
      ],
    },

    {
      title: "What Akiba Enables",
      cards: [
        {
          title: "Financial Coordination",
          description:
            "Give groups a structured environment for managing contributions and shared financial goals.",
        },
        {
          title: "Transparency",
          description:
            "Provide members with clear visibility into contributions, balances and group financial activity.",
        },
        {
          title: "Communication",
          description:
            "Keep group discussion and financial coordination together in one shared environment.",
        },
        {
          title: "Accountability",
          description:
            "Maintain clear records, defined roles and visible activity to support responsible group financial management.",
        },
      ],
    },

    {
      title: "Designed for Shared Goals",
      paragraphs: [
        "Akiba is designed for situations where people need to manage money together around a common objective. Whether the goal is an event, a recurring contribution, a trip, an asset or another shared financial commitment, the platform provides a common environment for coordination and visibility.",
        "The platform is built around the principle that people managing money together should have a clear understanding of what is happening within their group.",
      ],
    },

    {
      title: "Development",
      paragraphs: [
        "Akiba is developed by Globe Software as part of Globe Technologies' intellectual property portfolio. Its development is guided by research, product development and feedback as the platform evolves.",
        "Future capabilities will expand the platform while preserving its core focus on clarity, transparency, communication and coordinated financial management.",
      ],
    },

    {
      title: "Part of Globe Software",
      paragraphs: [
        "Akiba is a software intellectual property developed by Globe Software, the Globe division responsible for creating software products and digital platforms.",
      ],
      cards: [
        {
          title: "Globe Software",
          description:
            "Explore the division responsible for developing Akiba and Globe's other software products and platforms.",
          href: "/divisions/software",
        },
      ],
    },
  ],

  related: [
    {
      label: "Intellectual Property",
      href: "/ips",
    },
    {
      label: "Company Profile",
      href: "/about/company-profile",
    },
    {
      label: "Our Brand",
      href: "/about/brand",
    },
  ],
};