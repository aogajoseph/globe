import type { PageContent } from "../../types/content";

export const homePageContent: PageContent = {
  eyebrow: "Globe Technologies",
  title: "Inventing the Future",
  heroImage: "/images/hero/homepage-banner.png",

  intro:
    "Globe Technologies is a multidisciplinary innovation company that researches, develops and commercializes ideas into products, services and intellectual property.",

  sections: [
    {
      title: "Why Globe Exists",
      paragraphs: [
        "Ideas have the power to change how people live, work and experience the world. Globe exists to give promising ideas the research, expertise and resources they need to become reality.",
        "Those ideas may become software, media, research publications, intellectual properties, physical products or services. What they become depends on what the idea calls for, not on a predetermined category.",
      ],
      cards: [
        {
          title: "Purpose",
          description:
            "To create innovations that contribute to a better future.",
        },
        {
          title: "Vision",
          description:
            "To become one of the world's most trusted innovation companies.",
        },
        {
          title: "Mission",
          description:
            "Researching, creating and commercializing ideas to produce lasting value.",
        },
        {
          title: "Philosophy",
          description:
            "Purpose. Excellence. Stewardship.",
        },
      ],
    },

    {
      title: "How We Work",
      paragraphs: [
        "Our work follows a simple principle, Understanding before Building.",
        "At Globe Technologies, ideas move through three connected stages: research, creation and commercialization. Each stage answers a different question: What should we build? How should we build it? And how should it reach the world?",
      ],
      cards: [
        {
          title: "Research",
          description:
            "We investigate ideas, problems and opportunities to understand their potential and determine what they should become.",
        },
        {
          title: "Create",
          description:
            "Our specialized divisions turn validated ideas into software, media, research publications, intellectual properties, physical products and other forms of value.",
        },
        {
          title: "Commercialize",
          description:
            "We bring our creations and capabilities to the market through products, services, licensing, merchandise and other appropriate channels.",
        },
      ],
    },

    {
      title: "Our Divisions",
      paragraphs: [
        "Globe operates through specialized divisions, each with a distinct role in researching, creating and commercializing ideas, products and intellectual properties.",
      ],
      cards: [
        {
          title: "Globe Research",
          description:
            "Researching ideas, problems and opportunities to understand their potential and determine what they should become.",
          href: "/divisions/research",
        },
        {
          title: "Globe Software",
          description:
            "Creating software products and digital platforms that address practical problems and opportunities.",
          href: "/divisions/software",
        },
        {
          title: "Globe Media",
          description:
            "Creating and producing films, documentaries, podcasts, publications and other creative works and intellectual properties.",
          href: "/divisions/media",
        },
        {
          title: "Globe Merchandise",
          description:
            "Commercializing Globe's brands and intellectual properties through physical products, printed materials and other merchandise.",
          href: "/divisions/merchandise",
        },
        {
          title: "Globe Client Services",
          description:
            "Bringing in and delivering work for external clients through the capabilities of Globe's specialized divisions.",
          href: "/divisions/client-services",
        },
      ],
    },

    {
      title: "Intellectual Property",
      paragraphs: [
        "Our intellectual property portfolio includes software, media, research publications and other original works developed through our specialized divisions.",
      ],
      cards: [
        {
          title: "Akiba",
          description:
            "A collaborative financial platform designed to help groups coordinate, communicate and manage shared financial goals.",
          href: "/ips/software/akiba",
        },
        {
          title: "Addam",
          description:
            "An original dramatic series exploring humanity and the unseen forces surrounding the human experience.",
          href: "/ips/media/addam",
        },
        {
          title: "Research Publications",
          description:
            "Research and insights developed to deepen understanding and inform future innovation.",
          href: "/ips/research",
        },
      ],
    },

    {
      type: "image",
      id: "hq-teams",
      src: "/images/home/hq-teams.png",
      alt: "Globe Technologies team",
    },

    {
      title: "Let's Invent the Future Together",
      paragraphs: [
        "Have an idea worth exploring? Let's see where it can go.",
      ],
      cards: [
        {
          title: "Get In Touch",
          description:
            "Reach out for enquiries, partnerships, collaborations, client services or investment opportunities.",
          href: "/contact",
        },
      ],
    },
  ],

  related: [
    { label: "About Globe", href: "/about" },
    { label: "Our Divisions", href: "/divisions" },
    { label: "Our Work", href: "/ips" },
    { label: "Research", href: "/ips/research" },
    { label: "Constitution", href: "/about/constitution" },
    { label: "Contact", href: "/contact" },
  ],
};