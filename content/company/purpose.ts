import type { PageContent } from "../../types/content";

export const purposeContent: PageContent = {
  eyebrow: "The Company",
  title: "Purpose",
  intro:
    "Our purpose defines why Globe Technologies exists. It is the enduring reason behind every decision, every innovation and every step we take towards the future.",

  sections: [
    {
      title: "Our Purpose",
      paragraphs: [
        "Innovating for a Better Future.",
        "This simple statement expresses the reason Globe Technologies exists. We believe innovation should serve a greater purpose than technological advancement alone. It should improve lives, strengthen communities and help create a future that benefits generations to come.",
      ],
    },

    {
      title: "Purpose in Practice",
      paragraphs: [
        "Our purpose influences every part of the company. Before we develop a product, launch a project or pursue a new initiative, we ask whether it contributes meaningfully to the future we aspire to create.",
        "By combining research, creativity and responsible stewardship, we strive to develop solutions that create lasting value for individuals, organizations and communities.",
      ],
    },

    {
      title: "What Our Purpose Inspires",
      items: [
        "Research-led innovation",
        "Meaningful problem solving",
        "Long-term thinking",
        "Responsible stewardship",
        "Excellence in execution",
        "Lasting positive impact",
      ],
    },

    {
      title: "Living Our Purpose",
      cards: [
        {
          title: "Vision",
          description:
            "The future Globe Technologies is committed to helping create.",
          href: "/company/vision",
        },
        {
          title: "Mission",
          description:
            "How we transform our purpose into meaningful action.",
          href: "/company/mission",
        },
        {
          title: "Constitution",
          description:
            "The principles and framework that preserve our purpose across generations.",
          href: "/company/constitution",
        },
        {
          title: "Research",
          description:
            "Understanding meaningful challenges before creating solutions.",
          href: "/research",
        },
      ],
    },
  ],

  related: [
    {
      label: "Vision",
      href: "/company/vision",
    },
    {
      label: "Mission",
      href: "/company/mission",
    },
    {
      label: "Constitution",
      href: "/company/constitution",
    },
  ],
};