import type { PageContent } from "../../types/content";

export const homePageContent: PageContent = {
  eyebrow: "Globe Technologies",
  title: "Inventing the Future.",
  heroImage: "/images/hero/homepage-banner.png",
  intro:
    "Researching, creating and delivering innovative solutions that solve meaningful problems, improve lives, strengthen communities and contribute to a better future.",
  sections: [
    {
      title: "Why Globe Technologies Exists",
      paragraphs: [
        "Every generation faces problems that require new ideas, better tools and responsible leadership. Globe Technologies is a multi-division technology company that addresses those challenges through research and innovation.",
      ],
      cards: [
        {
          title: "Purpose",
          description:
          "Researching, developing and delivering innovative solutions that solve meaningful problems, improve lives, strengthen communities and contribute to a better future.",
        },
        {
          title: "Vision",
          description:
          "To be the most trusted global creator of innovative solutions that solve meaningful problems, improve lives, strengthen communities and contribute to a better future.",
        },
        {
          title: "Mission",
          description:
          "To research, develop and deliver innovative solutions that solve meaningful problems, improve lives, strengthen communities and contribute to a better future.",
        },
        {
          title: "Our Philosophy",
          description:
          "We believe that meaningful innovation is achieved through research, responsible engineering, improving lives and strengthening communities continually.",
        },
      ],
    },

    {
      title: "Our Approach",
      paragraphs: [

        "Everything we build begins with research.",
        
        "Before pursuing any significant initiative, we ask whether it advances our purpose by solving a meaningful problem, improving people's lives, strengthening communities, and if it reflects excellence and responsible stewardship to create lasting value for the people we serve."  
      ],
      cards: [
        {
          title: "Research First",
          description:
          "We invest in research, responsible experimentation and meaningful innovation.",
        },
        {
          title: "Purpose",
          description:
          "We seek to address meaningful problems through thoughtful products, projects and initiatives. ",
        },
        {
          title: "Excellence",
          description:
          "We pursue excellence as a discipline rather than an achievement.",
        },
        {
          title: "Stewardship",
          description:
          "We strive to leave the company stronger than we found it.",
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
            "Creating educational and creative media that informs, inspires and empowers generations.",
          href: "/divisions/media",
        },
      ],
    },

    {
      title: "Products",
      paragraphs: [
        "Our products are designed to and improve productivity, efficiency and convenience.",
      ],
      cards: [
        {
          title: "Akiba",
          description:
            "A collaborative savings platform that enables families, friends and communities to save and manage funds securely, as a team.",
          href: "/products/akiba",
        },
      ],
    },

    {
      title: "Projects",
      paragraphs: [
        "Our projects and initiatives are designed to inspire generations and shape a better future.",
      ],
      cards: [
        {
          title: "Addam",
          description:
            "An original dramatic series following the life of Addam. It invites audiences to reflect on the unseen battle surrounding the human experience.",
          href: "/projects/addam",
        },
      ],
    },

    {
      title: "Research",
      paragraphs: [
        "Every great solution begins with understanding. Before we design products, launch projects or pursue new initiatives, we invest in research to uncover meaningful problems and discover the best ways to address them.",
      ],
      cards: [
        {
          title: "Explore Research",
          description:
            "Explore the research insights behind our products, projects and initiatives.",
          href: "/research",
        },
      ],
    },

    {
      title: "Let's Invent the Future Together",
      paragraphs: [
        "Globe Technologies is built for generations.",
        "Our success is measured not only by growth, but by the trust we earn, the people we develop, the communities we strengthen and the future we help create.",
      ],
      cards: [
        {
          title: "Get In Touch",
          description:
            "Reach out for enquiries, partnerships, collaborations, investment opportunities and more.",
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
