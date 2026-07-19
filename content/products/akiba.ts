import type { PageContent } from "../../types/content";

export const akibaProductContent: PageContent = {
  eyebrow: "Product",
  title: "Akiba",
  intro:
    "Akiba is a collaborative savings platform developed by Globe Technologies. It enables families, friends and communities to save, manage and grow money together simply, securely and transparently.",

  sections: [
    {
      title: "Why Akiba Exists",
      paragraphs: [
        "Saving money together is built on trust, communication and accountability. Yet many groups continue to rely on informal processes that can be difficult to manage, track and scale.",
        "Akiba was created to provide a modern digital platform that makes collaborative saving more accessible, transparent and convenient for everyone involved.",
      ],
    },

    {
      title: "What Akiba Enables",
      cards: [
        {
          title: "Collaborative Saving",
          description:
            "Bring families, friends and communities together to save towards shared goals.",
        },
        {
          title: "Transparency",
          description:
            "Provide members with clear visibility into contributions, balances and group activity.",
        },
        {
          title: "Security",
          description:
            "Protect savings through secure authentication and carefully designed access controls.",
        },
        {
          title: "Simplicity",
          description:
            "Make managing group savings intuitive and accessible for everyday users.",
        },
      ],
    },

    {
      title: "Built with Purpose",
      paragraphs: [
        "Akiba reflects Globe Technologies' commitment to researching, developing and delivering innovative solutions that contribute to a better future. By strengthening the way people save together, the platform supports financial inclusion, accountability and stronger communities.",
      ],
    },

    {
      title: "Looking Ahead",
      paragraphs: [
        "Akiba will continue evolving through research, user feedback and responsible innovation. Future developments will expand its capabilities while maintaining the simplicity, trust and reliability that define the platform.",
      ],
    },

    {
      title: "Part of Globe Software",
      paragraphs: [
        "Akiba is developed and maintained by Globe Software, the software development division of Globe Technologies. It represents one of the company's ongoing efforts to create practical technologies that improve everyday life.",
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
      label: "Products",
      href: "/products",
      description:
        "Explore other products developed by Globe Technologies.",
    },
    {
      label: "Globe Software",
      href: "/divisions/software",
      description:
        "Learn more about the software division behind Akiba.",
    },
    {
      label: "Research",
      href: "/research",
      description:
        "See how research shapes every Globe Technologies product.",
    },
  ],
};