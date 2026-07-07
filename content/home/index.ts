import type { PageContent } from "../../types/content";

export const homePageContent: PageContent = {
  eyebrow: "Globe Technologies",
  title: "Researching. Building. Advancing the Future.",
  heroImage: "/images/hero/homepage-banner.png",
  intro:
    "Globe Technologies is a technology company dedicated to researching, creating and delivering innovative solutions that solve meaningful problems, improve lives, strengthen communities and create lasting value.",
    sections: [
      {
        title: "Why Globe Technologies Exists",
        paragraphs: [
          "Every generation faces problems that require new ideas, better tools and responsible leadership. Globe Technologies exists to help solve those challenges through research, innovation and technology.",

          "Our purpose is not simply to build software or create media. It is to create solutions that improve lives, strengthen communities and contribute to a better future."
        ],
        cards: [
          {
            title: "Purpose",
            description:
            "Solving meaningful problems through innovation.",
          },
          {
            title: "Vision",
            description:
            "Becoming a trusted global technology company..",
          },
          {
            title: "Mission",
            description:
            "Research. Create. Deliver.",
          },
          {
            title: "Our Philosophy",
            description:
            "Technology should always serve people.",
          },
        ],
      },

      {
        title: "Our Approach",
        paragraphs: [

          "Everything we build begins with research.",
          
          "Before pursuing any significant initiative, we ask whether it solves a meaningful problem, improves people's lives, strengthens communities, advances our purpose, creates lasting value and reflects excellence, integrity and responsible stewardship."  
        ],
        cards: [
          {
            title: "Research First",
            description:
            "Innovation begins with understanding.",
          },
          {
            title: "Purpose-Driven",
            description:
            "Every initiative serves a meaningful purpose.",
          },
          {
            title: "Long-Term Thinking",
            description:
            "Building value that endures.",
          },
        ],
      },

      {
        title: "The Company",
        paragraphs: [
          "Globe Technologies operates through specialized divisions united by one identity, one purpose and one Constitution."  
        ],
        cards: [
          {
            title: "Globe Software",
            description:
              "Designing software platforms and digital solutions that solve practical problems.",
            href: "/divisions/software",
          },
          {
            title: "Globe Media",
            description:
              "Creating educational and creative media that informs, inspires and empowers.",
            href: "/divisions/media",
          },
        ],
      },

      {
        title: "Products",
        paragraphs: [
          "Our products are designed to improve everyday life.",
        ],
        cards: [
          {
            title: "Akiba",
            description:
              "A collaborative savings platform that enables groups to save, manage funds and make financial decisions securely.",
            href: "/products/akiba",
          },
        ],
      },

      {
        title: "Projects",
        paragraphs: [
          "Our Projects shape the future.",
        ],
        cards: [
          {
            title: "Addam",
            description:
              "An innovation initiative exploring technologies that support Globe Technologies' long-term vision.",
            href: "/projects/addam",
          },
        ],
      },

      {
        title: "Research",
        paragraphs: [
          "Research is the foundation of everything we do.",
          "Before we design products, launch projects or pursue an initiative, we seek to understand the problems worth solving. Through continuous learning, investigation and experimentation, research shapes every decision we make.",
        ],
        cards: [
          {
            title: "Explore Research",
            description:
              "Discover the research that informs our products, projects and initiatives.",
            href: "/research",
          },
        ],
      },

      {
        title: "Let's Build the Future Together",
        paragraphs: [
          "Globe Technologies is built for generations.",
          "We believe companies should endure through principled leadership, responsible stewardship and continual innovation.",
          "Success is measured not only by growth, but by the trust we earn, the people we develop, the communities we strengthen and the future we help create.",
        ],
        cards: [
          {
            title: "Contact Us",
            description:
              "Get in touch with Globe Technologies.",
            href: "/contact",
          },
        ],
      },
    ],

    related: [
      { label: "The Company", href: "/company" },
      { label: "Divisions", href: "/divisions" },
      { label: "Products", href: "/products" },
      { label: "Projects", href: "/projects" },
      { label: "Research", href: "/research" },
      { label: "Contact", href: "/contact" },
    ],
};
