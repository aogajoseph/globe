import type { PageContent } from "../../../types/content";

export const storeContent: PageContent = {
  eyebrow: "Merchandise Intellectual Property",
  title: "Globe Store",
  intro:
    "Globe Store is the retail platform through which Globe Merchandise commercializes selected Globe brands and intellectual properties through physical products and merchandise.",

  sections: [
    {
      type: "image",
      id: "globe-store",
      src: "/images/research/research-collaboration.png",
      alt: "Globe Store merchandise collection",
      variant: "feature",
    },

    {
      title: "The Store",
      paragraphs: [
        "Globe Store provides a direct channel for bringing selected Globe brands and intellectual properties into physical form and making them available to customers.",
        "The Store is designed to extend the experience of Globe's work beyond digital products and media, giving people tangible ways to engage with the company and the intellectual properties it develops.",
      ],
    },

    {
      title: "What We Offer",
      cards: [
        {
          title: "Globe Brands",
          description:
            "Physical products developed around Globe's corporate identity, brands and visual language.",
        },
        {
          title: "IP Merchandise",
          description:
            "Products developed around selected Globe intellectual properties and their associated identities.",
        },
        {
          title: "Printed Works",
          description:
            "Books, publications and other printed materials produced through Globe's intellectual property portfolio.",
        },
        {
          title: "Special Editions",
          description:
            "Limited and purpose-specific products created around selected releases, occasions and intellectual properties.",
        },
      ],
    },

    {
      title: "From IP to Product",
      paragraphs: [
        "Products offered through Globe Store originate from Globe's brands and intellectual properties and are developed according to the identity, purpose and audience of the underlying work.",
        "Globe Merchandise manages the process of turning suitable intellectual property into physical products, from product development and sourcing through to presentation and commercial distribution.",
      ],
    },

    {
      title: "A Growing Portfolio",
      paragraphs: [
        "The Globe Store portfolio will expand as new brands and intellectual properties are developed and opportunities for physical commercialization emerge.",
        "Not every Globe intellectual property will require merchandise. Products are developed where physical form adds meaningful value to the work, its audience or its commercial potential.",
      ],
    },

    {
      title: "Part of Globe Merchandise",
      paragraphs: [
        "Globe Store is an intellectual property of Globe Merchandise, the division responsible for commercializing Globe's brands and intellectual properties through physical products, printed materials and other merchandise.",
      ],
      cards: [
        {
          title: "Globe Merchandise",
          description:
            "Explore the division responsible for developing and commercializing Globe's physical products and merchandise.",
          href: "/divisions/merchandise",
        },
      ],
    },
  ],

  related: [
    {
      label: "Intellectual Property",
      href: "/ips",
    },
    {
      label: "Globe Merchandise",
      href: "/divisions/merchandise",
    },
    {
      label: "Governance",
      href: "/about/governance",
    },
  ],
};