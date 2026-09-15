import type { PageContent } from "../../types/content";

export const divisionsLandingContent: PageContent = {
  eyebrow: "Divisions",
  title: "Our Divisions",
  intro:
    "Globe Technologies operates through specialized divisions that turn ideas and opportunities into products, services and intellectual properties and client needs into deliverables.",

  sections: [
    {
      title: "How Our Divisions Work",
      paragraphs: [
        "Each division has a distinct area of responsibility and the capabilities needed to develop its work. Together, they allow Globe Technologies to work across different disciplines and forms of output without limiting what an idea can become.",
        "An idea may begin as a question, opportunity, area of research or client work and move into the division best suited to develop it. Divisions can also work together when a project requires capabilities from more than one area.",
      ],
    },

    {
      type: "image",
      id: "divisions-collaboration",
      src: "/images/divisions/divisions-collaboration.png",
      alt: "Globe Technologies divisions collaborating across disciplines",
      variant: "panoramic",
    },

    {
      title: "Our Divisions",
      cards: [
        {
          title: "Globe Research",
          description:
            "Researches ideas, opportunities and areas of inquiry, helping determine what is worth pursuing and what an idea can become.",
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
            "Develops and produces films, documentaries, podcasts and other creative media and intellectual properties.",
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
            "Sources external client work and coordinates its delivery through the division best suited to the client's needs.",
          href: "/divisions/client-services",
        },
      ],
    },

    {
      title: "One Company, Different Capabilities",
      paragraphs: [
        "The divisions are not separate companies. They are specialized parts of Globe Technologies, operating within the same company and supported by its shared operational functions.",
        "Their areas of work may develop over time, and new divisions may be established when the company's ideas, capabilities or opportunities require them.",
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
      label: "Company Profile",
      href: "/about/company-profile",
      description:
        "Explore the company's current structure, capabilities and areas of work.",
    },
    {
      label: "Our Brand",
      href: "/about/brand",
      description:
        "Explore the identity through which Globe Technologies represents itself.",
    },
  ],
};