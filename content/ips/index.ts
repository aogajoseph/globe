import type { PageContent } from "../../types/content";
import { akibaContent } from "./software/akiba";
import { addamContent } from "./media/addam";
import { researchPublicationsContent } from "./research/research-publications";


export const ipsContent: PageContent = {
  eyebrow: "Intellectual Properties",
  title: "Intellectual Properties",
  intro:
    "Globe develops intellectual properties across software, media, research and other forms of original work. Each IP begins with an idea and is developed according to what that idea calls for.",

  sections: [
    {
      title: "Our Intellectual Property",
      paragraphs: [
        "Our intellectual property portfolio represents ideas developed through Globe's research, creation and commercialization process.",
        "These may take the form of software products, digital platforms, films, publications, physical products and other original works.",
      ],
    },

    {
      title: "Current IPs",
      cards: [
        {
          title: akibaContent.title,
          description:
            "A collaborative financial platform designed to help groups coordinate, communicate and manage shared financial goals.",
          href: "/ips/software/akiba",
        },
      ],
    },

    {
      title: "Looking Ahead",
      paragraphs: [
        "As Globe grows, the intellectual property portfolio will expand into new areas and forms. Each future IP will be developed according to its purpose, potential and the needs it is intended to address.",
      ],
    },
  ],

  related: [
    {
      label: "Globe Software",
      href: "/divisions/software",
      description:
        "Discover the division responsible for developing Globe's software products and digital platforms.",
    },
    {
      label: "Globe Research",
      href: "/divisions/research",
      description:
        "Learn how research informs Globe's ideas and innovation process.",
    },
    {
      label: "Globe Media",
      href: "/divisions/media",
      description:
        "Explore the division responsible for Globe's media and creative works.",
    },
  ],
};