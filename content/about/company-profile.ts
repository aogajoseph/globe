import type { PageContent } from "../../types/content";

export const companyProfileContent: PageContent = {
  eyebrow: "About Us",
  title: "Company Profile",
  intro:
    "Globe Technologies is a diversified company that turns ideas into products, services and intellectual properties through research, development, production and commercialization.",

  sections: [
    {
      title: "Company Overview",
      paragraphs: [
        "Globe Technologies brings together the capabilities needed to explore ideas, develop opportunities and turn them into tangible work.",
        "The company operates across different forms of creation and delivery, from software and media to research, physical products and client services. Its work may be developed for Globe itself or external clients as products, services or intellectual properties with long-term potential.",
      ],
    },

    {
      type: "image",
      id: "company-overview",
      src: "/images/about/company-profile.png",
      alt: "Globe Technologies at a glance",
      variant: "panoramic",
    },

    {
      title: "At a Glance",
      cards: [
        {
          title: "Company Type",
          description:
            "Diversified innovation company.",
        },
        {
          title: "Business Model",
          description:
            "Ideas research, development and commercialization.",
        },
        {
          title: "Operating Model",
          description:
            "Specialized divisions supported by shared operational functions.",
        },
        {
          title: "Headquarters",
          description:
            "Remote",
        },
      ],
    },

    {
      title: "Current Divisions",
      paragraphs: [
        "Globe Technologies currently operates through specialized divisions, each responsible for a distinct area of work while remaining part of the same company.",
      ],
      cards: [
        {
          title: "Globe Research",
          description:
            "Explores ideas, conducts research and helps determine what opportunities are worth developing and what they can become.",
          href: "/divisions/research",
        },
        {
          title: "Globe Software",
          description:
            "Designs and develops software products, digital platforms and related technologies.",
          href: "/divisions/software",
        },
        {
          title: "Globe Media",
          description:
            "Develops and produces creative media and media-based intellectual properties.",
          href: "/divisions/media",
        },
        {
          title: "Globe Merchandise",
          description:
            "Develops and commercializes physical products carrying Globe's or Globe-owned intellectual property branding.",
          href: "/divisions/merchandise",
        },
        {
          title: "Globe Client Services",
          description:
            "Sources and coordinates external client work through the division best suited to deliver it.",
          href: "/divisions/client-services",
        },
      ],
    },

    {
      title: "Operational Support",
      paragraphs: [
        "The divisions are supported by the company's operational functions, which provide the financial, legal, administrative, technical and other capabilities required to run the business.",
        "This allows the divisions to remain focused on their areas of work while operating within a shared company framework.",
      ],
    },

    {
      title: "What We Create",
      paragraphs: [
        "Because Globe Technologies is built around ideas rather than a single type of output, the company's work can take many forms.",
        "Depending on the idea and its potential, Globe may create software products, digital platforms, films, documentaries, books, research publications, physical products, services or intellectual properties.",
      ],
    },
  ],

  related: [
    {
      label: "Company Overview",
      href: "/about",
      description:
        "Learn what Globe Technologies is and how the company approaches its work.",
    },
    {
      label: "Our Brand",
      href: "/about/brand",
      description:
        "Explore the identity and standards through which Globe Technologies represents itself.",
    },
    {
      label: "Mission & Vision",
      href: "/about/mission-vision",
      description:
        "Explore the company's mission and the direction it is pursuing.",
    },
  ],
};