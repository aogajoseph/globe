import type { PageContent } from "../../types/content";

export const constitutionContent: PageContent = {
  eyebrow: "The Company",
  title: "Constitution",
  intro:
    "Our Constitution defines our enduring framework. It establishes the principles, structures and responsibilities that guide the company and preserve its identity across generations.",

  sections: [
    {
      title: "Why a Constitution?",
      paragraphs: [
        "Great organizations are built on enduring principles that guide decisions, protect purpose and provide continuity over time.",
        "The Globe Technologies Constitution exists to ensure the company remains faithful to its purpose while adapting responsibly to new opportunities and challenges.",
      ],
    },
    {
      title: "What It Defines",
      items: [
        "Purpose and guiding principles",
        "Leadership responsibilities",
        "Governance framework",
        "Decision-making structures",
        "Company continuity",
        "Stewardship and accountability",
      ],
    },
  ],

  related: [
    { label: "Leadership", href: "/company/leadership" },
    { label: "Governance", href: "/company/governance" },
    { label: "Vision", href: "/company/vision" },
  ],
};