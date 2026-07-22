import type { PageContent } from "../../types/content";

export const missionContent: PageContent = {
  eyebrow: "The Company",
  title: "Mission",
  intro:
    "Our mission defines how Globe Technologies fulfills its purpose. It guides our daily work, shapes our decisions and directs the way we create lasting value.",

  sections: [
    {
      title: "Mission Statement",
      paragraphs: [
        "Innovating towards a better future.",
      ],
    },

    {
      title: "How We Deliver Our Mission",
      paragraphs: [
        "Every solution begins with understanding. We invest in research to uncover meaningful challenges, develop thoughtful solutions through innovation and deliver work that creates lasting value for individuals, organizations and communities.",
        "Whether building software, creating media or pursuing strategic initiatives, we remain committed to our enduring purpose, excellence and responsible stewardship.",
      ],
    },

    {
      title: "Our Commitments",
      items: [
        "Research before innovation",
        "Solve meaningful problems",
        "Pursue excellence in everything we do",
        "Act with integrity and responsible stewardship",
        "Create lasting value for people and communities",
        "Build for generations",
      ],
    },

    {
      title: "Mission in Practice",
      cards: [
        {
          title: "Research",
          description:
            "Understanding challenges through learning, investigation and experimentation.",
          href: "/research",
        },
        {
          title: "Products",
          description:
            "Developing practical solutions that improve the way people live and work.",
          href: "/products",
        },
        {
          title: "Projects",
          description:
            "Delivering long-term initiatives that educate, inspire and create positive impact.",
          href: "/projects",
        },
        {
          title: "Our Divisions",
          description:
            "Specialized teams working together under one shared purpose and identity.",
          href: "/divisions",
        },
      ],
    },
  ],

  related: [
    {
      label: "Purpose",
      href: "/company/purpose",
    },
    {
      label: "Vision",
      href: "/company/vision",
    },
    {
      label: "Constitution",
      href: "/company/constitution",
    },
  ],
};