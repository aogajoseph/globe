import type { PageContent } from "../../types/content";

export const leadershipContent: PageContent = {
  eyebrow: "The Company",
  title: "Leadership",
  intro:
    "Leadership at Globe Technologies is a responsibility of stewardship. Our leaders are entrusted with preserving the company's purpose, guiding its strategy and building an organization that serves generations to come.",

  sections: [
    {
      title: "Our Leadership Philosophy",
      paragraphs: [
        "We believe leadership is measured not only by results, but by the lasting impact those results create. Every leader at Globe Technologies is expected to uphold the company's purpose, pursue excellence and act with integrity in every decision.",
        "Leadership exists to enable people, encourage innovation and ensure the company continues to grow responsibly while remaining faithful to its founding principles.",
      ],
    },

    {
      type: "image",
      id: "leadership-discussion",
      src: "/images/company/leadership-discussion.png",
      alt: "Globe Technologies leadership in discussion",
      variant: "editorial",
    },

    {
      title: "Leadership Responsibilities",
      items: [
        "Preserve the company's purpose and identity",
        "Provide strategic direction",
        "Promote a culture of excellence and innovation",
        "Develop people and future leaders",
        "Steward company resources responsibly",
        "Build trust with employees, partners and communities",
      ],
    },

    {
      title: "Leadership Structure",
      cards: [
        {
          title: "Board of Directors",
          description:
            "Provides independent oversight, safeguards the company's long-term interests and ensures responsible governance.",
        },
        {
          title: "Office of the Chief Executive Officer",
          description:
            "Provides strategic leadership, corporate direction and stewardship of Globe Technologies.",
        },
        {
          title: "Executive Leadership",
          description:
            "Leads the company's divisions, operations and long-term strategic priorities.",
        },
        {
          title: "Future Leadership",
          description:
            "As Globe Technologies grows, additional leadership roles and governance structures will be established to support the company's long-term development.",
        },
      ],
    },

    {
      title: "Leading with Stewardship",
      paragraphs: [
        "Globe Technologies is built to endure beyond any one individual. Leadership is therefore entrusted with protecting the company's purpose, strengthening its culture and preparing future generations to continue the work with wisdom, responsibility and excellence.",
      ],
    },
  ],

  related: [
    {
      label: "Governance",
      href: "/company/governance",
    },
    {
      label: "Constitution",
      href: "/company/constitution",
    },
    {
      label: "Vision",
      href: "/company/vision",
    },
  ],
};