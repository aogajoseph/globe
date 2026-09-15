import type { PageContent } from "../../types/content";

export const missionAndVisionContent: PageContent = {
  eyebrow: "About Us",
  title: "Mission & Vision",
  intro:
    "Our mission defines what Globe Technologies does while our vision defines what the company aims to become.",

  sections: [
    {
      title: "Vision",
      paragraphs: [
        "To become one of the world's most trusted innovation companies.",
      ],
    },

    {
      title: "Mission",
      paragraphs: [
        "Researching, developing and commercializing ideas to produce lasting value.",
      ],
    },

    {
      title: "What This Means",
      paragraphs: [
        "Our mission begins with research. We explore ideas, questions, opportunities and problems to understand what is worth pursuing and what an idea can become.",
        "We then develop. Depending on the opportunity, an idea may become a product, service or intellectual property. The form is determined by the nature and potential of the idea.",
        "Finally, we commercialize. We develop work that can be delivered, owned, licensed, sold or otherwise create value. This connects creativity with a sustainable business.",
      ],
    },

    {
      title: "Our Direction",
      paragraphs: [
        "Our vision sets a long-term direction for Globe Technologies. Trust is built through the quality of our work, the way we conduct our business and the value we consistently deliver.",
        "Becoming one of the world's most trusted innovation companies is therefore not defined by size alone. It means building a company whose ideas, products, services and intellectual properties can earn confidence and public truast over time.",
      ],
    },

  ],

  related: [
    {
      label: "Company Overview",
      href: "/about",
      description:
        "Learn what Globe Technologies is and how the company approaches its work.",
    },
    {
      label: "Our Brand",
      href: "/about/brand",
      description:
        "Explore the identity through which Globe Technologies represents itself.",
    },
    {
      label: "Constitution",
      href: "/about/constitution",
      description:
        "Explore the foundational principles and framework that govern the company.",
    },
  ],
};