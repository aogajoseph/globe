import type { PageContent } from "../../types/content";

export const companyLandingContent: PageContent = {
  eyebrow: "About Us",
  title: "Overview",
  intro:
  "Globe Technologies is a multidisciplinary innovation company that turns ideas, opportunities and areas of inquiry into products, services and intellectual properties.",

  sections: [
    {
      title: "A Company Built Around Ideas",
      paragraphs: [
      "Globe Technologies exists to explore what an idea can become. An idea may begin as a question, a problem, a creative concept, a technological possibility or an opportunity to create something of lasting value.",
      "Rather than limiting ideas to a single industry or form, Globe provides a structure through which they can be researched, developed, produced and commercialized. The result may be a software product, digital platform, film, documentary, podcast, book, research publication, branded asset, physical product or an intellectual property with the potential to grow into something larger.",
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
      title: "From Idea to Value",
      paragraphs: [
        "Our work begins with exploration. Globe Research helps examine an idea, understand its potential and guide the company in deciding what it can become.",
        "Once a direction is established, the appropriate division develops and delivers it. Software creates digital products and platforms. Media produces creative and storytelling work. Merchandise commercializes branded assets and physical products. Client Services brings external opportunities into the company and coordinates their delivery through the division best equipped to serve them.",
        "This structure allows Globe to work across disciplines while maintaining clear responsibilities, specialized expertise and a common standard of excellence.",
      ],
      cards: [
        {
          title: "Research",
          description:
            "Exploring ideas, opportunities and questions to determine what they can become and how they can create value.",
          href: "/divisions/research",
        },
        {
          title: "Software",
          description:
            "Creating software products and digital platforms that solve problems and enable new possibilities.",
          href: "/divisions/software",
        },
        {
          title: "Media",
          description:
            "Producing films, documentaries, podcasts, storytelling works and other creative media.",
          href: "/divisions/media",
        },
        {
          title: "Merchandise",
          description:
            "Commercializing Globe's branded assets and intellectual properties through physical products and materials.",
          href: "/divisions/merchandise",
        },
        {
          title: "Client Services",
          description:
            "Serving external clients by sourcing opportunities and delivering them through the appropriate Globe division.",
          href: "/divisions/client-services",
        },
      ],
    },

    {
      title: "Supported by an Operational Engine",
      paragraphs: [
        "The divisions are supported by the company's operational departments, which provide the capabilities required to run Globe as a sustainable company.",
        "Finance, Information Technology, Marketing, Legal, Human Resources and other operational functions support the company's people, systems, resources and obligations, enabling the divisions to focus on creating and delivering value.",
      ],
      cards: [
        {
          title: "Leadership",
          description:
          "Explore the leadership structure and responsibilities established to guide Globe Technologies as it grows.",
          href: "/about/leadership",
        },            
        {
          title: "Governance",
          description:
            "The structures of responsibility, accountability and oversight that guide the company.",
          href: "/about/governance",
        },
      ],
    },

    {
      title: "Designed for Continuity and Growth",
      paragraphs: [
        "Globe Technologies is not defined by a fixed list of industries, products or divisions. Its structure is designed to evolve as new technologies emerge, new opportunities are discovered and new forms of value become possible.",
        "Future divisions may operate in areas that do not yet exist within the company. What remains constant is the underlying model: research what is possible, build what is valuable, commercialize what can create sustainable value and preserve the principles that define the company.",
      ],
    },

    {
      title: "Explore Globe Technologies",
      paragraphs: [
        "Explore the company, the ideas that guide it, the people entrusted with its leadership and the divisions through which its work becomes reality.",
      ],
      cards: [
        {
          title: "The Company",
          description:
            "Learn more about Globe Technologies, its purpose and the principles that guide the company.",
          href: "/about/company",
        },
        {
          title: "Our Story",
          description:
            "Explore the journey that led to Globe Technologies and the vision behind its continued development.",
          href: "/about/our-story",
        },
        {
          title: "Our Divisions",
          description:
            "Discover the specialized divisions through which Globe researches, creates, produces and delivers value.",
          href: "/divisions",
        },
        {
          title: "Our Profile",
          description:
            "Explore Globe Technologies' structure, capabilities, divisions and areas of work.",
          href: "/about/company-profile",
        },
      ],
    },

  ],

  related: [
    {
      label: "Mission & Vision",
      href: "/about/mission-vision",
      description:
      "Discover the future Globe Technologies is working to help create.",
    },
    {
      label: "Our Brand",
      href: "/about/brand",
      description:
      "Explore the identity, visual language and standards that represent Globe Technologies.",
    },
    {
      label: "Constitution",
      href: "/about/constitution",
      description:
      "Explore the foundational principles and framework that govern Globe Technologies.",
    },      
  ],
};
