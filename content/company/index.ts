import type { PageContent } from "../../types/content";

export const companyLandingContent: PageContent = {
  eyebrow: "The Company",
  title: "The Company",
  intro:
    "Globe Technologies is a technology company that researches, develops and delivers innovative solutions that solve meaningful problems and contribute to a better future.",
  sections: [
    {
      title: "Company Focus",
      paragraphs: [
        "This website presents the company clearly and consistently.",
        "It brings together identity, governance, divisions, products, research, news, careers, and contact information within a shared content system.",
      ],
    },
    {
      title: "Company Structure",
      cards: [
        {
          title: "Office of the Chief Executive Officer",
          description:
            "Corporate Strategy, Governance, Executive Leadership, Investor Relations, Corporate Communications and Partnerships.",
        },
        {
          title: "Operations",
          description:
            "Finance, Human Resources, Legal & Compliance, Information Technology, Administration, Facilities & Maintenance, Procurement and Security.",
        },
        {
          title: "Shared Services",
          description:
            "Wellness Centre, Learning Centre and Events Centre.",
        },
        {
          title: "Divisions",
          description:
            "Globe Software and Globe Media, with future divisions to be introduced later.",
        },
      ],
    },
    {
      title: "Explore the Company",
      cards: [
        {
          title: "About Globe",
          description: "A concise introduction to Globe Technologies as a company.",
          href: "/company/about",
        },
        {
          title: "Our Story",
          description: "A placeholder for the origin and evolution of Globe Technologies.",
          href: "/company/our-story",
        },
        {
          title: "Constitution",
          description: "The company framework that will guide the organization over time.",
          href: "/company/constitution",
        },
        {
          title: "Leadership",
          description: "The people and structures responsible for stewardship and direction.",
          href: "/company/leadership",
        },
      ],
    },
  ],
  related: [
    {
      label: "Governance",
      href: "/company/governance",
      description: "Company oversight and decision-making structures.",
    },
    {
      label: "Company Profile",
      href: "/company/company-profile",
      description: "A structured profile for external understanding and reference.",
    },
    {
      label: "Brand",
      href: "/company/brand",
      description: "Identity and brand architecture placeholders.",
    },
  ],
};

export const aboutContent: PageContent = {
  eyebrow: "About Us",
  title: "About Globe",
  intro: "A structured introduction to Globe Technologies as a company.",
  sections: [
    {
      title: "Overview",
      paragraphs: [
        "Globe Technologies researches, develops and delivers innovative solutions that solve meaningful problems and contribute to a better future.",
        "This page provides a concise company summary for stakeholders and visitors.",
      ],
    },
    {
      title: "Key Areas",
      items: [
        "Company purpose and public identity",
        "Long-term stewardship and continuity",
        "Relationship to divisions and products",
        "Commitment to clarity and trust",
      ],
    },
  ],
  related: [
    { label: "Our Story", href: "/company/our-story" },
    { label: "Vision", href: "/company/vision" },
    { label: "Company Profile", href: "/company/company-profile" },
  ],
};

export const ourStoryContent: PageContent = {
  eyebrow: "About Us",
  title: "Our Story",
  intro: "A placeholder narrative space for the history of Globe Technologies.",
  sections: [
    {
      title: "Origin",
      paragraphs: [
        "The origin story will be developed as the company's published history is finalized.",
        "For now, this page preserves space for a future account that is factual, concise, and aligned with the company's long-term tone.",
      ],
    },
  ],
  related: [
    { label: "About Globe", href: "/company/about" },
    { label: "Constitution", href: "/company/constitution" },
    { label: "Brand", href: "/company/brand" },
  ],
};

export const constitutionContent: PageContent = {
  eyebrow: "About Us",
  title: "Constitution",
  intro: "The company constitution will define the enduring framework of Globe Technologies.",
  sections: [
    {
      title: "Purpose",
      paragraphs: [
        "This page will eventually publish the company rules, responsibilities, and principles that guide Globe Technologies.",
        "Until then, the structure remains in place for future constitutional text.",
      ],
    },
    {
      title: "Future Expansion",
      items: [
        "Foundational principles",
        "Governance structure",
        "Leadership responsibilities",
        "Company continuity",
      ],
    },
  ],
  related: [
    { label: "Governance", href: "/company/governance" },
    { label: "Leadership", href: "/company/leadership" },
    { label: "Vision", href: "/company/vision" },
  ],
};

export const visionContent: PageContent = {
  eyebrow: "About Us",
  title: "Vision",
  intro: "A clear statement of the future Globe Technologies seeks to contribute to.",
  sections: [
    {
      title: "Vision Statement",
      paragraphs: [
        "Globe Technologies envisions a future where technology helps people, strengthens communities, and creates durable value.",
      ],
    },
    {
      title: "What the Vision Guides",
      items: [
        "Company priorities",
        "Strategic decision-making",
        "Relationships with communities",
        "Long-term development",
      ],
    },
  ],
  related: [
    { label: "Mission", href: "/company/mission" },
    { label: "Constitution", href: "/company/constitution" },
    { label: "The Company", href: "/company" },
  ],
};

export const missionContent: PageContent = {
  eyebrow: "About Us",
  title: "Mission",
  intro: "A concise statement of how Globe Technologies will act in service of its purpose.",
  sections: [
    {
      title: "Mission Statement",
      paragraphs: [
        "Globe Technologies develops and delivers practical technology with discipline, integrity, and a long-term commitment to public value.",
      ],
    },
    {
      title: "Connected Themes",
      items: [
        "Service to people",
        "Stewardship of knowledge",
        "Reliable execution",
        "Company trust",
      ],
    },
  ],
  related: [
    { label: "Vision", href: "/company/vision" },
    { label: "Leadership", href: "/company/leadership" },
    { label: "Governance", href: "/company/governance" },
  ],
};

export const leadershipContent: PageContent = {
  eyebrow: "About Us",
  title: "Leadership",
  intro: "A placeholder structure for leadership, stewardship, and executive responsibility.",
  sections: [
    {
      title: "Leadership Framework",
      paragraphs: [
        "This page will hold the company's public leadership information once it is finalized.",
        "The page is intentionally structured to support future profiles and governance references.",
      ],
    },
  ],
  related: [
    { label: "Governance", href: "/company/governance" },
    { label: "Constitution", href: "/company/constitution" },
    { label: "Company Profile", href: "/company/company-profile" },
  ],
};

export const governanceContent: PageContent = {
  eyebrow: "About Us",
  title: "Governance",
  intro: "A dedicated space for company oversight and decision-making structures.",
  sections: [
    {
      title: "Governance Model",
      paragraphs: [
        "Globe Technologies will publish governance information here as the company framework is developed.",
      ],
    },
    {
      title: "Primary Areas",
      items: ["Oversight", "Responsibility", "Accountability", "Continuity"],
    },
  ],
  related: [
    { label: "Leadership", href: "/company/leadership" },
    { label: "Constitution", href: "/company/constitution" },
    { label: "Company Profile", href: "/company/company-profile" },
  ],
};

export const companyProfileContent: PageContent = {
  eyebrow: "About Us",
  title: "Company Profile",
  intro: "A structured profile page for official external reference.",
  sections: [
    {
      title: "Profile Summary",
      paragraphs: [
        "This page will ultimately contain the official company profile, summarizing Globe Technologies in a stable and accessible format.",
      ],
    },
  ],
  related: [
    { label: "About Globe", href: "/company/about" },
    { label: "Governance", href: "/company/governance" },
    { label: "Brand", href: "/company/brand" },
  ],
};

export const brandContent: PageContent = {
  eyebrow: "About Us",
  title: "Brand",
  intro: "A placeholder for Globe Technologies identity, usage, and brand architecture.",
  sections: [
    {
      title: "Brand Architecture",
      paragraphs: [
        "This page reserves space for the company brand system, usage guidance, and visual identity rules.",
      ],
    },
  ],
  related: [
    { label: "Company Profile", href: "/company/company-profile" },
    { label: "The Company", href: "/company" },
    { label: "About Globe", href: "/company/about" },
  ],
};

