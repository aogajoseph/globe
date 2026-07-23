import type { PageContent } from "../../types/content";

export const homePageContent: PageContent = {
  eyebrow: "Home",
  title: "Globe Technologies",
  heroImage: "/images/hero/homepage-banner.png",
  intro:
    "Inventing the Future.",
  sections: [
    {
      title: "Why Globe Technologies Exists",
      paragraphs: [
        "Every generation faces problems that require new ideas, better tools and responsible leadership. Globe Technologies addresses these challenges through research and innovation.",
      ],
      cards: [
        {
          title: "Purpose",
          description:
          "Creating innovative solutions that contribute to a better future.",
        },
        {
          title: "Vision",
          description:
          "To be the world's most trusted creator of global, innovative solutions that contribute to a better future.",
        },
        {
          title: "Mission",
          description:
          "Innovating towards a better future.",
        },
        {
          title: "Our Philosophy",
          description:
          "Purpose. Excellence. Stewardship.",
        },
      ],
    },

    {
      title: "Our Approach",
      paragraphs: [

        "Everything we build begins with research.",
        
        "Before pursuing any significant initiative, we ensure it advances our purpose, reflects excellence and promotes responsible stewardship."  
      ],
      cards: [
        {
          title: "Research First",
          description:
          "We invest in research and responsible experimentation.",
        },
        {
          title: "Purpose",
          description:
          "We seek to address meaningful problems through thoughtful products and initiatives. ",
        },
        {
          title: "Excellence",
          description:
          "We pursue the highest standards in everything we do.",
        },
        {
          title: "Stewardship",
          description:
          "We strive to leave the company and the world better than we found it.",
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
            "Creating educational and creative works that inform, inspire and empower generations.",
          href: "/divisions/media",
        },
      ],
    },

    {
      title: "Products",
      paragraphs: [
        "Our products are designed to enhance productivity, efficiency and convenience.",
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
            "An original dramatic series on humanity. It invites audiences to reflect on the unseen battle surrounding the human experience.",
          href: "/projects/addam",
        },
      ],
    },

    {
      title: "Research",
      paragraphs: [
        "Every great solution begins with understanding. Before we design products, launch projects or pursue new initiatives, we research to uncover meaningful problems and discover the best ways to address them.",
      ],
      cards: [
        {
          title: "Explore Our Research",
          description:
            "Explore the research insights behind our products and initiatives.",
          href: "/research",
        },
      ],
    },

    {
      type: "image",
      id: "hq-teams",
      src: "/images/home/hq-teams.png",
      alt: "Globe Technologies headquarters",
    },

    {
      title: "Let's Invent the Future Together",
      paragraphs: [
        "Globe Technologies is built for generations.",
        "Our success is measured not only by growth, but by the trust we earn, the communities we strengthen and the future we help create.",
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
    { label: "Company Overview", href: "/company" },
    { label: "Divisions", href: "/divisions" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "Research", href: "/research" },
    { label: "Constitution", href: "/company/constitution" },
  ],
};

;