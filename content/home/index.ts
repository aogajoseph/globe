import type { PageContent } from "../../types/content";

export const homePageContent: PageContent = {
  eyebrow: "Research",
  title: "Researching. Building. Advancing the Future.",
  intro:
    "Globe Technologies is an innovation-driven technology company dedicated to researching, designing and developing solutions that solve meaningful problems, create lasting value and contribute to a better future. We believe technology reaches its highest purpose when it serves people.",
    sections: [
      {
        title: "About Globe Technologies",
        paragraphs: [
          "Globe Technologies is committed to advancing society through research, innovation and responsible engineering.",
          "Our work spans software, media, research and emerging technologies, united by a common purpose: creating solutions that improve lives, strengthen communities and shape a better future.",
        ],
        cards: [
          {
            title: "Company Profile",
            description:
              "Learn about our identity, history and Company philosophy.",
            href: "/company/company-profile",
          },
          {
            title: "Constitution",
            description:
              "Explore the principles that guide our organization.",
            href: "/company/constitution",
          },
          {
            title: "Leadership",
            description:
              "Meet the people responsible for stewarding Globe Technologies.",
            href: "/company/leadership",
          },
          {
            title: "Governance",
            description:
              "Understand how the company is structured and governed.",
            href: "/company/governance",
          },
        ],
      },

      {
        title: "Our Purpose",
        paragraphs: [
          "Technology is most valuable when it solves real problems.",
          "Our purpose is to discover meaningful opportunities, develop innovative solutions and deliver technologies that create lasting impact for individuals, organizations and society.",
        ],
        cards: [
          {
            title: "Research",
            description:
              "We investigate important questions before building solutions.",
          },
          {
            title: "Innovation",
            description:
              "We transform ideas into practical technologies through thoughtful engineering.",
          },
          {
            title: "Impact",
            description:
              "We create solutions that generate meaningful and lasting value.",
          },
        ],
      },

      {
        title: "Our Divisions",
        paragraphs: [
          "Globe Technologies brings together specialized divisions that operate independently while sharing one vision and one philosophy.",
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
          "Our products are designed to solve real-world problems through practical, reliable and user-focused technology.",
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
          "Some ideas require exploration before becoming products. Our projects represent long-term initiatives through which we investigate emerging technologies and prepare future innovations.",
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
          "Before we design products or launch projects, we seek to understand the problems worth solving. Through continuous learning, investigation and experimentation, research shapes every decision we make.",
        ],
        cards: [
          {
            title: "Explore Our Research",
            description:
              "Discover the research that informs our products, projects and future innovations.",
            href: "/research",
          },
        ],
      },

      {
        title: "Let's Build the Future Together",
        paragraphs: [
          "Whether you're interested in partnerships, research collaborations or learning more about Globe Technologies, we'd love to hear from you.",
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
