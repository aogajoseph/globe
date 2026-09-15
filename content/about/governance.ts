import type { PageContent } from "../../types/content";

export const governanceContent: PageContent = {
  eyebrow: "About Us",
  title: "Governance",
  intro:
    "Governance provides the framework through which Globe Technologies is directed, accountable and responsible for its decisions.",

  sections: [
    {
      title: "Our Approach to Governance",
      paragraphs: [
        "Governance at Globe Technologies establishes how authority is exercised, how decisions are made and how responsibility is maintained across the company.",
        "The aim is to ensure that the company can operate effectively while protecting its interests, resources, identity and long-term continuity.",
      ],
    },

    {
      title: "Governance Principles",
      items: [
        "Clear authority and accountability",
        "Responsible decision-making",
        "Integrity and transparency",
        "Responsible stewardship",
        "Protection of company interests",
        "Long-term continuity",
      ],
    },

    {
      title: "Governance Framework",
      cards: [
        {
          title: "Chief Executive Officer",
          description:
            "Holds ultimate executive authority and makes final executive decisions for the company.",
        },
        {
          title: "Leadership",
          description:
            "Carries defined responsibilities for directing the company, developing its capabilities and implementing approved priorities.",
        },
        {
          title: "Constitution",
          description:
            "Establishes the foundational principles and framework that govern Globe Technologies.",
        },
        {
          title: "Policies & Procedures",
          description:
            "Provide practical rules and standards for carrying out the company's day-to-day work and responsibilities.",
        },
      ],
    },

    {
      title: "Accountability",
      paragraphs: [
        "Authority at Globe Technologies carries corresponding responsibility. Those entrusted with leadership or operational responsibilities are expected to act within their authority, account for their decisions and protect the interests of the company.",
        "The Chief Executive Officer remains the final executive authority, while the company's governance framework provides the principles and structures within which that authority is exercised.",
      ],
    },

    {
      title: "Built for Continuity",
      paragraphs: [
        "Governance is designed to help Globe Technologies remain stable as the company grows and leadership changes. The objective is not to prevent change, but to provide a framework through which the company can develop without losing its fundamental identity and principles.",
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
      label: "Constitution",
      href: "/about/constitution",
      description:
        "Explore the foundational principles and framework that govern the company.",
    },
    {
      label: "Company Profile",
      href: "/about/company-profile",
      description:
        "Explore the company's current structure, capabilities and areas of work.",
    },
  ],
};