import type { PageContent } from "../../types/content";

export const softwareDivisionContent: PageContent = {
  eyebrow: "Division",
  title: "Globe Software",
  intro:
    "Globe Software creates software products and digital platforms from ideas identified and validated through Globe's innovation process. The division combines product thinking, engineering and design to turn those ideas into usable technologies.",

  sections: [
    {
      title: "Turning Ideas into Software",
      paragraphs: [
        "Globe Software takes validated ideas and turns them into practical software products and digital platforms. Its work spans product definition, system design, engineering, development, testing and ongoing monitoring.",
        "The division focuses on building technologies that are useful, reliable and capable of creating lasting value for the people and organizations they serve.",
      ],
    },

    {
      type: "image",
      id: "engineering-workspace",
      src: "/images/divisions/engineering-workspace.png",
      alt: "Globe Software engineering workspace",
      variant: "editorial",
    },

    {
      title: "What We Build",
      cards: [
        {
          title: "Software Products",
          description:
            "Developing software products that address defined problems and opportunities.",
        },
        {
          title: "Digital Platforms",
          description:
            "Building platforms that bring people, information, processes and services together.",
        },
        {
          title: "Technical Systems",
          description:
            "Designing the underlying systems, integrations and infrastructure required to support reliable software.",
        },
        {
          title: "Product Experiences",
          description:
            "Creating clear, usable experiences that connect technology with the needs of its intended users.",
        },
      ],
    },

    {
      title: "Current Work",
      paragraphs: [
        "Akiba is a Globe Software intellectual property: a collaborative financial platform that enables groups to coordinate, communicate and transparently manage shared financial goals in one trusted environment.",
      ],
      cards: [
        {
          title: "Akiba",
          description:
            "A collaborative financial platform designed to help groups coordinate, communicate and manage shared financial goals.",
          href: "/ips/software/akiba",
        },
      ],
    },

    {
      title: "From Idea to Product",
      paragraphs: [
        "Globe Software works within the wider Globe innovation process. Globe Research investigates ideas, problems and opportunities and provides the understanding and recommendations needed to determine what an idea should become.",
        "When an idea calls for software, Globe Software takes responsibility for turning that direction into a working product or platform, with further research continuing where development requires it.",
      ],
    },

    {
      title: "Part of Globe",
      paragraphs: [
        "Globe Software is a specialized division of Globe Technologies, operating within the company's governance framework and guided by its Constitution, purpose, mission and vision.",
        "Its work reflects Globe's commitment to purpose, excellence and stewardship, applying disciplined engineering and thoughtful design to the creation of software and digital platforms.",
      ],
    },
  ],

  related: [
    {
      label: "Globe Media",
      href: "/divisions/media",
      description:
        "Explore the division responsible for creating films, documentaries, podcasts, publications and other creative works.",
    },
    {
      label: "Globe Merchandise",
      href: "/divisions/merchandise",
      description:
        "Explore the division responsible for commercializing Globe's brands and intellectual properties through physical products.",
    },
    {
      label: "Globe Client Services",
      href: "/divisions/client-services",
      description:
        "Explore the division responsible for bringing in and delivering work for external clients through Globe's specialized capabilities.",
    },
  ],
};