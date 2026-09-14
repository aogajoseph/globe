import type { PageContent } from "../../types/content";

export const ourStoryContent: PageContent = {
  eyebrow: "About Us",
  title: "Our Story",
  intro:
  "Globe Technologies began with an idea: to build a company capable of taking ideas seriously, developing them deliberately and turning them into work with real value.",

  sections: [
    {
      title: "The Beginning",
      paragraphs: [
        "Globe Technologies began as an idea before it became a company. At its foundation was a desire to create a company that was not restricted to a single product, discipline or way of creating.",
        "The early concept was simple: ideas should have room to be explored before they are forced into a predetermined form. Some ideas may become software. Others may become media, research, books, physical products, services or intellectual properties. The company would need the ability to recognize those possibilities and develop them accordingly.",
      ],
    },

    {
      type: "image",
      id: "founding-journey",
      src: "/images/company/founding-journey.png",
      alt: "The early vision behind Globe Technologies",
      variant: "editorial",
    },

    {
      title: "From an Idea to a Company",
      paragraphs: [
        "As the concept developed, Globe Technologies began to take shape around a broader model: research what an idea can become, develop it through the appropriate capabilities and create something that can be delivered, owned or commercialized.",
        "This led to the development of specialized divisions rather than a company built around one type of output. Research could examine possibilities. Software could build digital products. Media could produce creative work. Merchandise could commercialize physical assets. Client Services could bring external work into the company and coordinate its delivery.",
      ],
    },

    {
      title: "Building the Company",
      paragraphs: [
        "With the model taking shape, attention turned from what Globe could create to what it needed to become a functioning company. Systems for operations, finance, technology, legal affairs, administration and other areas became necessary to support the work of the divisions.",
        "The company therefore developed as both a creative and commercial enterprise: one side focused on discovering and creating value, and the other providing the capabilities required to operate the business responsibly and sustainably.",
      ],
    },

    {
      title: "The Story Continues",
      paragraphs: [
        "Globe Technologies is still developing. Its current divisions, products and intellectual properties represent the company's present stage rather than a final definition of what it can become.",
        "As new ideas and opportunities emerge, the company will continue to develop its capabilities, pursue new forms of work and establish new areas where appropriate. The story of Globe Technologies is therefore not a completed history, but an ongoing record of a company being built.",
      ],
    },

  ],

  related: [
    {
      label: "Company Overview",
      href: "/about",
      description:
      "Learn what Globe Technologies is, what it does and how the company approaches its work.",
    },
    {
      label: "Our Brand",
      href: "/about/brand",
      description:
      "Explore the identity and standards through which Globe Technologies represents itself.",
    },
    {
      label: "Company Profile",
      href: "/about/company-profile",
      description:
      "Explore the company's structure, capabilities and current areas of work.",
    },
  ],
};
