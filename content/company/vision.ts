import type { PageContent } from "../../types/content";

export const visionContent: PageContent = {
  eyebrow: "The Company",
  title: "Vision",
  intro:
    "Our vision expresses the future Globe Technologies is committed to helping create through research, innovation and responsible stewardship.",

  sections: [
    {
      title: "Vision Statement",
      paragraphs: [
        "To be the world's most trusted creator of global, innovative solutions that contribute to a better future.",
      ],
    },

    {
      title: "Our Vision for the Future",
      paragraphs: [
        "We envision a future where innovation expands human potential, strengthens communities and creates opportunities for generations to come. Through thoughtful research and purposeful action, we strive to develop solutions that leave a lasting, positive impact on society.",
        "While technology continues to evolve, our commitment remains constant: to build solutions that are useful, responsible and capable of improving the world around us.",
      ],
    },

    {
      title: "What Our Vision Inspires",
      items: [
        "Long-term thinking",
        "Purpose-driven innovation",
        "Research-led decision-making",
        "Excellence in everything we do",
        "Responsible stewardship",
        "A lasting positive impact on people and communities",
      ],
    },

    {
      title: "Turning Vision into Reality",
      cards: [
        {
          title: "Research",
          description:
            "Every meaningful innovation begins with understanding.",
          href: "/research",
        },
        {
          title: "Products",
          description:
            "Creating practical solutions that improve everyday life.",
          href: "/products",
        },
        {
          title: "Projects",
          description:
            "Pursuing long-term initiatives that educate, inspire and shape the future.",
          href: "/projects",
        },
        {
          title: "Our Divisions",
          description:
            "Specialized teams working together toward one shared vision.",
          href: "/divisions",
        },
      ],
    },
  ],

  related: [
    {
      label: "Mission",
      href: "/company/mission",
    },
    {
      label: "Constitution",
      href: "/company/constitution",
    },
    {
      label: "Leadership",
      href: "/company/leadership",
    },
  ],
};