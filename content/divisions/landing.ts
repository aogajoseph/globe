import type { PageContent } from "../../types/content";

export const divisionsLandingContent: PageContent = {
  eyebrow: "Divisions",
  title: "Our Divisions",
  intro:
    "Globe Technologies brings together specialized divisions that pursue different areas of innovation while remaining united by one purpose, one identity and one standard of excellence.",

  sections: [
    {
      title: "Built Around Purpose",
      paragraphs: [
        "Meaningful innovation rarely happens within a single discipline. By organizing our work into dedicated divisions, we enable teams to develop deep expertise while collaborating toward a shared vision of innovating towards a better future.",
        "Each division focuses on a distinct area of opportunity, yet every product, project and initiative reflects the values and long-term purpose of Globe Technologies.",
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
          title: "Globe Software",
          description:
            "Developing software products and digital platforms that solve meaningful problems and improve everyday life.",
          href: "/divisions/software",
        },
        {
          title: "Globe Media",
          description:
            "Creating educational and creative media that informs, inspires and empowers generations.",
          href: "/divisions/media",
        },
      ],
    },

    {
      title: "Designed to Grow",
      paragraphs: [
        "As Globe Technologies evolves, new divisions will be established to explore emerging opportunities, expand our capabilities and support our long-term mission. Whatever form they take, they will remain connected by one company, one purpose and one commitment to excellence.",
      ],
    },
  ],

  related: [
    {
      label: "Products",
      href: "/products",
      description: "Discover the solutions we're building.",
    },
    {
      label: "Projects",
      href: "/projects",
      description: "Explore long-term initiatives shaping the future.",
    },
    {
      label: "Company Overview",
      href: "/company",
      description: "Learn how Globe Technologies is organized.",
    },
  ],
};