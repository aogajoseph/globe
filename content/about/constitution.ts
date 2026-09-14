import type { PageContent } from "../../types/content";

export const constitutionContent: PageContent = {
  eyebrow: "About Us",
  title: "Constitution",
  intro:
    "The Globe Technologies Constitution establishes the foundational framework of the company. It defines the principles, responsibilities and structures that are intended to endure as the company develops.",

  sections: [
    {
      title: "Why a Constitution?",
      paragraphs: [
        "A company can change over time without losing the principles that define it. The Constitution provides Globe Technologies with a stable foundation for making decisions, exercising authority and managing that change.",
        "It establishes what should endure while allowing the company to adapt its capabilities, structure and areas of work as new opportunities arise.",
      ],
    },

    {
      title: "What It Establishes",
      items: [
        "The company's foundational principles",
        "Leadership responsibilities and authority",
        "Governance and accountability",
        "Decision-making principles",
        "Stewardship of company interests and resources",
        "Continuity and succession",
      ],
    },

    {
      title: "Enduring Principles",
      paragraphs: [
        "The Constitution establishes the principles that should remain central to Globe Technologies regardless of changes in leadership, divisions, products or areas of work.",
        "These principles provide a reference point for decisions and help distinguish what may change from what should remain constant.",
      ],
      items: [
        "Excellence",
        "Stewardship",
        "Purpose",
      ],
    },

    {
      title: "A Framework for Continuity",
      paragraphs: [
        "The Constitution is intended to provide continuity beyond any individual leader or period of the company's development. It gives future leadership a clear foundation from which to govern, build and make necessary changes.",
        "As Globe Technologies evolves, the Constitution provides the framework within which that evolution takes place.",
      ],
    },
  ],

  related: [
    {
      label: "Leadership",
      href: "/about/leadership",
      description:
        "Explore the responsibilities and structure of leadership at Globe Technologies.",
    },
    {
      label: "Governance",
      href: "/about/governance",
      description:
        "Explore how authority, accountability and oversight operate within the company.",
    },
    {
      label: "Mission & Vision",
      href: "/about/mission-vision",
      description:
        "Explore what Globe Technologies does and what the company aims to become.",
    },
  ],
};