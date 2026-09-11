import type { PageContent } from "../../types/content";

export const companyLandingContent: PageContent = {
  eyebrow: "The Company",
  title: "Overview",
  intro:
    "Globe Technologies is a research-driven company building products, projects and initiatives designed to contribute to a better future.",

  sections: [
    {
      title: "Built for the Future",
      paragraphs: [
        "The challenges of tomorrow will require more than individual ideas. They will require research, imagination, disciplined execution and a willingness to build for the long term.",
        "Globe Technologies brings these qualities together under one company, developing products, projects and initiatives across specialized areas while remaining united by a shared purpose: innovating towards a better future.",
      ],
    },

    {
      type: "image",
      id: "hq-architecture",
      src: "/images/company/reception.png",
      alt: "Globe Technologies headquarters interior",
      variant: "panoramic",
    },

    {
      title: "How We Create",
      paragraphs: [
        "Our work begins with curiosity. We seek to understand the problems worth solving, explore possibilities through research and develop solutions with purpose.",
        "Some of our work becomes a product. Some becomes a project. Some becomes an initiative. Whatever form it takes, we aim to create work that is thoughtful, useful and capable of contributing lasting value.",
      ],
      cards: [
        {
          title: "Products",
          description:
            "Solutions designed to address practical needs and improve the way people live, work and connect.",
          href: "/products",
        },
        {
          title: "Projects",
          description:
            "Long-term creative and strategic undertakings designed to explore ideas, inspire people and shape the future.",
          href: "/projects",
        },
      ],
    },

    {
      title: "Our Divisions",
      paragraphs: [
        "Globe Technologies operates through specialized divisions. Each division has its own area of focus, but all are connected by the same company identity, purpose and standards.",
      ],
      cards: [
        {
          title: "Globe Software",
          description:
            "Building software products and digital platforms that solve practical problems.",
          href: "/divisions/software",
        },
        {
          title: "Globe Media",
          description:
            "Creating educational and creative media that informs, inspires and empowers generations.",
          href: "/divisions/media",
        },
      ],
    },

    {
      title: "Built for Continuity",
      paragraphs: [
        "Globe Technologies is designed to grow beyond any single product, project, division or generation of leadership.",
        "Our Constitution, governance structures and shared principles exist to help preserve the company's identity, guide its decisions and support responsible growth over time.",
      ],
      cards: [
        {
          title: "Constitution",
          description:
            "The foundational framework that defines the principles and structures of the company.",
          href: "/company/constitution",
        },
        {
          title: "Governance",
          description:
            "The systems of responsibility, accountability and oversight that support the company.",
          href: "/company/governance",
        },
      ],
    },

    {
      title: "Explore Globe Technologies",
      paragraphs: [
        "There is more to discover about who we are, what we are building and how we intend to grow.",
      ],
      cards: [
        {
          title: "About Us",
          description:
            "Learn more about Globe Technologies, our purpose and the ideas that guide us.",
          href: "/company/about",
        },
        {
          title: "Our Story",
          description:
            "Explore the journey behind the company and the vision that continues to shape it.",
          href: "/company/our-story",
        },
        {
          title: "Our Divisions",
          description:
            "Discover the specialized areas through which Globe Technologies creates and delivers value.",
          href: "/divisions",
        },
        {
          title: "Our Profile",
          description:
            "Explore our company profile, structure, divisions and the work we are building for the future.",
          href: "/company/company-profile",
        },
      ],
    },
  ],

  related: [
    {
      label: "Vision",
      href: "/company/vision",
      description: "Discover the future Globe Technologies is working to help create.",
    },
    {
      label: "Mission",
      href: "/company/mission",
      description: "Learn how Globe Technologies turns its purpose into action.",
    },
    {
      label: "Leadership",
      href: "/company/leadership",
      description: "Meet the people entrusted with guiding the company.",
    },
  ],
};