import type { PageContent } from "../../types/content";

export const projectsLandingContent: PageContent = {
  eyebrow: "Projects",
  title: "Our Projects",
  intro:
    "Some ideas deserve more than a product. Globe Technologies pursues long-term projects that explore meaningful questions, inspire imagination and contribute to a better future through creativity, research and storytelling.",

  sections: [
    {
      title: "Created with Purpose",
      paragraphs: [
        "Our projects are long-term creative and strategic initiatives that extend beyond commercial products. They provide opportunities to explore complex ideas, encourage thoughtful conversations and create work with lasting cultural and educational value.",
        "Whether expressed through film, literature, article or other forms of media, every project reflects our commitment to meaningful innovation and responsible stewardship.",
      ],
    },

    {
      title: "Current Projects",
      cards: [
        {
          title: "Addam",
          description:
            "An original dramatic series exploring humanity and the unseen battle surrounding the human experience.",
          href: "/projects/addam",
        },
      ],
    },

    {
      title: "Looking Ahead",
      paragraphs: [
        "As Globe Technologies grows, our portfolio of projects will continue expanding into new forms of storytelling, education and creative exploration. Every future project will remain guided by the same purpose of inspiring generations and contributing to a better future.",
      ],
    },
  ],

  related: [
    {
      label: "Globe Media",
      href: "/divisions/media",
      description:
        "Discover the division behind our creative and educational work.",
    },
    {
      label: "Research",
      href: "/research",
      description:
        "Learn how research informs every project we pursue.",
    },
    {
      label: "Products",
      href: "/products",
      description:
        "Explore the practical solutions developed by Globe Technologies.",
    },
  ],
};