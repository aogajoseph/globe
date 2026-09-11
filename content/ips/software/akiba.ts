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
      title: "Why Akiba Exists",
      paragraphs: [
        "Groups have long relied on informal tools and processes to manage shared financial goals. Contributions, balances and important decisions are often communicated manually, leaving members dependent on incomplete information and trust.",
        "Akiba was created to bring communication, coordination and financial visibility into one platform, giving groups a clearer and more accountable way to manage shared goals.",
      ],
    },

    {
      title: "What Akiba Enables",
      cards: [
        {
          title: "Group Coordination",
          description:
            "Bring people together around shared financial goals and give groups a structured environment for coordination.",
        },
        {
          title: "Transparency",
          description:
            "Give members clear visibility into contributions, balances and group financial activity.",
        },
        {
          title: "Communication",
          description:
            "Keep group discussions and financial coordination together in one shared environment.",
        },
        {
          title: "Accountability",
          description:
            "Provide clear records and defined roles that help groups manage shared finances responsibly.",
        },
      ],
    },

    {
      title: "Built with Purpose",
      paragraphs: [
        "Akiba reflects Globe's approach to developing practical technologies around real problems. By bringing financial coordination, communication and transparency together, the platform is designed to strengthen how groups manage shared financial goals.",
      ],
    },

    {
      title: "Looking Ahead",
      paragraphs: [
        "Akiba will continue evolving through research, development and user feedback. Future capabilities will expand the platform while preserving the clarity, trust and simplicity at the core of the product.",
      ],
    },

    {
      title: "Part of Globe Software",
      paragraphs: [
        "Akiba is developed by Globe Software, the division responsible for creating Globe's software products and digital platforms.",
      ],
      cards: [
        {
          title: "Globe Software",
          description:
            "Discover the division behind the development of Akiba.",
          href: "/divisions/software",
        },
      ],
    },
  ],

  related: [
    {
      label: "Software",
      href: "/ips/software",
      description:
        "Explore software intellectual property developed by Globe Software.",
    },
    {
      label: "Globe Software",
      href: "/divisions/software",
      description:
        "Learn more about the division behind Akiba.",
    },
    {
      label: "Intellectual Property",
      href: "/ips",
      description:
        "Explore Globe's intellectual property portfolio.",
    },
  ],
};