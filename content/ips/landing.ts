import type { PageContent } from "../../types/content";

export const ipsLandingContent: PageContent = {
  eyebrow: "Intellectual Properties",
  title: "Intellectual Properties",
  intro:
    "Globe develops intellectual properties across software, media, research and other forms of original work. Each IP begins with an idea and is developed according to what that idea calls for.",

    sections: [
      {
        title: "Our Intellectual Properties",
        paragraphs: [
          "Our intellectual property portfolio represents ideas developed through Globe's research, development and commercialization processes.",
          "Each IP belongs to a broad family of intellectual properties within its respective area, allowing Globe to develop related works and future IPs under a common category.",
        ],
      },
    
      {
        title: "Current IPs",
        cards: [
          {
            title: "Akiba",
            description:
              "A software IP and the first member of Globe's Software IP family, developed as a collaborative financial platform for groups.",
            href: "/ips/software/akiba",
          },
          {
            title: "Addam",
            description:
              "A media IP and the first member of Globe's Media IP family, developed as a philosophical drama exploring human existence and unseen influences.",
            href: "/ips/media/addam",
          },
          {
            title: "Research Publications",
            description:
              "A research IP family comprising original publications developed from Globe's research into ideas, questions, opportunities and areas of inquiry.",
            href: "/ips/research/research-publications",
          },
        ],
      },
    
      {
        title: "Looking Ahead",
        paragraphs: [
          "As Globe grows, each IP family will expand with new works, products and related intellectual properties. Physical products based on Globe and Globe-owned IPs are also developed through the Globe Merchandise division and made available commercially through Globe Store.",
        ],
      },
    ],

  related: [
    {
      label: "Globe Store",
      href: "/ips/merchandise/store",
      description:
        "Discover the storefront for Globe's and Globe-owned IP branded merchandise.",
    },
    {
      label: "Globe Research",
      href: "/divisions/research",
      description:
        "Learn how research informs Globe's ideas and innovation process.",
    },
    {
      label: "Globe Media",
      href: "/divisions/media",
      description:
        "Explore the division responsible for Globe's media and creative works.",
    },
  ],
};