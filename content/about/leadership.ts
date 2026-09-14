import type { PageContent } from "../../types/content";

export const leadershipContent: PageContent = {
  eyebrow: "About Us",
  title: "Leadership",
  intro:
    "Leadership at Globe Technologies is a responsibility of stewardship. It exists to guide the company, make decisions, develop its capabilities and protect its long-term interests.",

  sections: [
    {
      title: "Our Approach to Leadership",
      paragraphs: [
        "Leadership at Globe Technologies is based on responsibility, judgment and accountability. Leaders are entrusted with making decisions that serve the company's interests while maintaining the standards and principles that guide its work.",
        "As the company grows, leadership will develop with it. Roles and responsibilities may change as new divisions, capabilities and governance structures become necessary.",
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
        "Provide direction and make responsible decisions",
        "Protect the company's interests and identity",
        "Guide strategy and priorities",
        "Develop people and organizational capability",
        "Steward company resources responsibly",
        "Maintain accountability and high standards",
      ],
    },

    {
      title: "Leadership Structure",
      paragraphs: [
        "Globe Technologies is led through defined offices and responsibilities rather than a fixed leadership structure. The Chief Executive Officer holds ultimate executive authority, supported by the company's leadership offices and operational functions.",
        "As Globe Technologies develops, additional leadership roles and governance structures may be established where they are needed to support the company's work and long-term development.",
      ],
      cards: [
        {
          title: "Office of the Chief Executive Officer",
          description:
            "Provides executive leadership, sets company direction and makes final executive decisions.",
        },
        {
          title: "Executive Leadership",
          description:
            "Provides leadership across the company's divisions and operational functions, reporting to the Chief Executive Officer.",
        },
        {
          title: "Future Leadership",
          description:
            "Additional leadership roles may be established as the company grows and its needs develop.",
        },
      ],
    },

    {
      title: "Leadership and Continuity",
      paragraphs: [
        "Globe Technologies is intended to endure beyond any one individual. Leadership therefore carries a responsibility to strengthen the company, preserve what should endure and prepare it for continued development.",
        "The Constitution provides the foundational principles that guide this responsibility and establish the framework for leadership and succession.",
      ],
    },
  ],

  related: [
    {
      label: "Governance",
      href: "/about/governance",
      description:
        "Explore how authority, accountability and oversight are established at Globe Technologies.",
    },
    {
      label: "Constitution",
      href: "/about/constitution",
      description:
        "Explore the foundational principles and framework that govern the company.",
    },
    {
      label: "Mission & Vision",
      href: "/about/mission-vision",
      description:
        "Explore what Globe Technologies does and what the company aims to become.",
    },
  ],
};