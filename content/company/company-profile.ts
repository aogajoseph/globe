import type { PageContent } from "../../types/content";

export const companyProfileContent: PageContent = {
  eyebrow: "The Company",
  title: "Company Profile",
  intro:
    "Globe Technologies is a research-driven technology company dedicated to innovating for a better future through products, projects and initiatives that create lasting value.",

  sections: [
    {
      title: "Company Overview",
      paragraphs: [
        "Globe Technologies researches, develops and delivers innovative solutions that address meaningful challenges and create opportunities for people and communities.",
        "The company brings together research, engineering, creativity and responsible stewardship to build solutions designed for long-term impact across multiple industries.",
      ],
    },

    {
      title: "At a Glance",
      cards: [
        {
          title: "Industry",
          description:
            "Technology, Research and Innovation",
        },
        {
          title: "Headquarters",
          description:
            "Remote",
        },
        {
          title: "Business Model",
          description:
            "Research, product development, creative media and strategic initiatives.",
        },
        {
          title: "Tagline",
          description:
            "Inventing the Future.",
        },
      ],
    },

    {
      title: "Our Purpose",
      paragraphs: [
        "Globe Technologies exists to innovate for a better future by creating solutions that improve lives, strengthen communities and contribute lasting value.",
      ],
    },

    {
      title: "Core Areas",
      cards: [
        {
          title: "Research",
          description:
            "Understanding meaningful challenges and discovering new opportunities.",
          href: "/research",
        },
        {
          title: "Products",
          description:
            "Developing practical solutions that improve everyday life.",
          href: "/products",
        },
        {
          title: "Projects",
          description:
            "Delivering long-term creative and strategic initiatives.",
          href: "/projects",
        },
        {
          title: "Divisions",
          description:
            "Operating through specialized divisions united by one company identity.",
          href: "/divisions",
        },
      ],
    },

    {
      title: "Guiding Principles",
      items: [
        "Purpose",
        "Research",
        "Excellence",
        "Stewardship",
        "Innovation",
        "Long-term thinking",
      ],
    },
  ],

  related: [
    {
      label: "About Us",
      href: "/company/about",
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