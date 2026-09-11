import type { PageContent } from "../../types/content";

export const clientServicesDivisionContent: PageContent = {
  eyebrow: "Division",
  title: "Globe Client Services",
  intro:
    "Globe Client Services brings Globe's capabilities to external clients, connecting their needs with the expertise required to deliver effective products, services and creative works.",

  sections: [
    {
      title: "Bringing Globe's Capabilities to Clients",
      paragraphs: [
        "Globe Client Services is the division responsible for external client engagements. It identifies opportunities, understands client needs, develops appropriate engagements and coordinates delivery through the relevant Globe capabilities.",
        "The division provides clients with access to Globe's multidisciplinary expertise without requiring every engagement to fit within a single specialist division.",
      ],
    },

    {
      type: "image",
      id: "client-services",
      src: "/images/research/research-collaboration.png",
      alt: "Globe Client Services team working with a client",
      variant: "editorial",
    },

    {
      title: "What We Offer",
      cards: [
        {
          title: "Web & Software",
          description:
            "Helping clients develop websites, web applications, digital platforms and other software solutions through Globe Software.",
        },
        {
          title: "Media & Creative",
          description:
            "Supporting clients with creative development, visual production, publishing and other media capabilities through Globe Media.",
        },
        {
          title: "Research & Strategy",
          description:
            "Providing research, analysis and strategic insight where an engagement requires deeper understanding before development.",
        },
        {
          title: "Custom Solutions",
          description:
            "Assembling the appropriate Globe capabilities to address client requirements that span multiple disciplines.",
        },
      ],
    },

    {
      title: "How Client Engagements Work",
      paragraphs: [
        "Client engagements begin by understanding the client's objectives, requirements and constraints. Globe Client Services then determines the appropriate scope of work and identifies the capabilities required to deliver it.",
        "Once an engagement is defined, the relevant Globe division or divisions carry out the specialist work while Client Services coordinates the relationship and overall delivery.",
      ],
    },

    {
      title: "Working Across Globe",
      paragraphs: [
        "Client Services acts as a bridge between external clients and Globe's specialized divisions. A single engagement may involve software development, media production, research, design, merchandise or a combination of capabilities.",
        "This structure allows Globe to assemble the right expertise around the client's needs rather than forcing every project into a predetermined service category.",
      ],
    },

    {
      title: "Part of Globe",
      paragraphs: [
        "Globe Client Services is a specialized division of Globe Technologies, operating within the company's governance framework and guided by its Constitution, purpose, mission and vision.",
        "Its work reflects Globe's commitment to purpose, excellence and stewardship, ensuring that external engagements are approached professionally, delivered responsibly and aligned with the capabilities of the company.",
      ],
    },

    {
      title: "Looking Ahead",
      paragraphs: [
        "As Globe expands its capabilities, Client Services will provide an increasingly broad channel through which organizations, businesses and individuals can work with the company and access its growing range of expertise.",
      ],
    },
  ],

  related: [
    {
      label: "Globe Software",
      href: "/divisions/software",
      description:
        "Explore the division responsible for creating Globe's software products and digital platforms.",
    },
    {
      label: "Globe Media",
      href: "/divisions/media",
      description:
        "Explore the division responsible for creating Globe's films, publications, podcasts and other creative works.",
    },
    {
      label: "Globe Merchandise",
      href: "/divisions/merchandise",
      description:
        "Explore the division responsible for commercializing Globe's brands and intellectual properties through physical products.",
    },
  ],
};