import type { PageContent } from "../../types/content";

export const merchandiseDivisionContent: PageContent = {
  eyebrow: "Division",
  title: "Globe Merchandise",
  intro:
    "Globe Merchandise commercializes Globe's brands and intellectual properties through thoughtfully developed physical products, printed materials and other merchandise.",

  sections: [
    {
      title: "Turning Intellectual Properties into Physical Products",
      paragraphs: [
        "Globe Merchandise is the commercialization division responsible for extending Globe's brands and intellectual properties into physical form.",
        "The division develops and manages merchandise that give audiences and customers tangible ways to engage with Globe and its intellectual properties while creating additional commercial value.",
      ],
    },

    {
      type: "image",
      id: "merchandise-development",
      src: "/images/research/research-collaboration.png",
      alt: "Globe Merchandise product development workspace",
      variant: "editorial",
    },

    {
      title: "What We Create",
      cards: [
        {
          title: "Branded Products",
          description:
            "Developing physical products that extend Globe's corporate identity and brands beyond digital platforms.",
        },
        {
          title: "IP Merchandise",
          description:
            "Creating products inspired by and associated with Globe's intellectual properties.",
        },
        {
          title: "Printed Materials",
          description:
            "Producing books, stationery, printed works and other physical materials developed through Globe's divisions.",
        },
        {
          title: "Special Editions",
          description:
            "Developing limited, premium or purpose-specific physical products around selected brands and intellectual properties.",
        },
      ],
    },

    {
      title: "Globe Store",
      paragraphs: [
        "Globe Store is the primary platform through which Globe Merchandise commercializes selected Globe brands and intellectual properties.",
        "The store provides a direct channel for making physical products and merchandise available to customers while supporting the broader commercialization of Globe's intellectual property portfolio.",
      ],
      cards: [
        {
          title: "Globe Store",
          description:
            "Explore physical products and merchandise developed from Globe's brands and intellectual properties.",
          href: "/ips/merchandise/store",
        },
      ],
    },

    {
      title: "From Intellectual Property to the Market",
      paragraphs: [
        "Globe Merchandise works with Globe's intellectual property portfolio to identify opportunities for physical commercialization. Products are developed according to the identity, audience, purpose and commercial potential of the underlying intellectual property.",
        "Depending on the opportunity, commercialization may involve product development, manufacturing, sourcing, packaging, distribution, direct sales, licensing or other appropriate channels.",
      ],
    },

    {
      title: "Part of Globe",
      paragraphs: [
        "Globe Merchandise is a specialized division of Globe Technologies, operating within the company's governance framework and guided by its Constitution, purpose, mission and vision.",
        "Its work reflects Globe's commitment to purpose, excellence and stewardship, ensuring that physical products are developed thoughtfully and contribute meaningful commercial value to the company's brands and intellectual properties.",
      ],
    },
  ],

  related: [
    {
      label: "Globe Media",
      href: "/divisions/media",
      description:
        "Explore the division responsible for creating Globe's films, publications, podcasts and other creative works.",
    },
    {
      label: "Globe Client Services",
      href: "/divisions/client-services",
      description:
        "Explore the division responsible for bringing in and delivering work for external clients through Globe's specialized capabilities.",
    },
    {
      label: "Globe Software",
      href: "/divisions/software",
      description:
        "Explore the division responsible for creating Globe's software products and digital platforms.",
    },
  ],
};