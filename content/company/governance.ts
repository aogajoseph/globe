import type { PageContent } from "../../types/content";

export const governanceContent: PageContent = {
  eyebrow: "The Company",
  title: "Governance",
  intro:
    "Good governance helps ensure Globe Technologies remains accountable, resilient and true to its purpose. It provides the framework for responsible decision-making, effective oversight and long-term continuity.",

  sections: [
    {
      title: "Our Approach to Governance",
      paragraphs: [
        "Globe Technologies believes that sustainable innovation requires responsible governance. Strong structures, clear accountability and principled leadership enable the company to pursue its purpose while maintaining the trust of the people and communities it serves.",
        "Our governance framework is designed to support sound decision-making, responsible stewardship and continuity across generations of leadership.",
      ],
    },

    {
      title: "Governance Principles",
      items: [
        "Purpose-driven leadership",
        "Integrity and accountability",
        "Responsible stewardship",
        "Transparency and trust",
        "Long-term continuity",
        "Sound decision-making",
      ],
    },

    {
      title: "Governance Framework",
      cards: [
        {
          title: "Leadership",
          description:
            "Providing strategic direction while ensuring the company's purpose and values remain central to every decision.",
          href: "/company/leadership",
        },
        {
          title: "Constitution",
          description:
            "The enduring framework that defines the company's principles, governance structures and responsibilities.",
          href: "/company/constitution",
        },
        {
          title: "Policies",
          description:
            "Internal policies and standards that guide ethical conduct, operations and responsible business practices.",
        },
        {
          title: "Risk & Compliance",
          description:
            "Identifying, managing and mitigating risks while supporting responsible growth and regulatory compliance.",
        },
      ],
    },

    {
      title: "Built for Continuity",
      paragraphs: [
        "Globe Technologies is designed to endure beyond individual leaders, products and generations. Governance exists to preserve the company's identity, protect its purpose and provide stability as it continues to grow and evolve.",
      ],
    },
  ],

  related: [
    {
      label: "Constitution",
      href: "/company/constitution",
    },
    {
      label: "Leadership",
      href: "/company/leadership",
    },
    {
      label: "Company Profile",
      href: "/company/company-profile",
    },
  ],
};