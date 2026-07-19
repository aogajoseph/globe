import type { PageContent } from "../../types/content";

export const addamProjectContent: PageContent = {
  eyebrow: "Project",
  title: "Addam",
  intro:
    "Addam is an original dramatic series by Globe Media that explores the human experience through the life of one man. It invites audiences to reflect on identity, purpose, choice and the unseen battle surrounding the human experience.",

  sections: [
    {
      title: "The Story",
      paragraphs: [
        "Addam follows the journey of one man from the beginning of his life through the defining moments that shape his character, relationships and understanding of the world. His story becomes a reflection of humanity itself, exploring the hopes, fears, struggles and aspirations that connect people across cultures and generations.",
        "Through compelling storytelling, the series encourages audiences to consider the visible choices we make and the unseen influences that often shape them.",
      ],
    },

    {
      title: "Themes",
      cards: [
        {
          title: "Human Nature",
          description:
            "Exploring the strengths, weaknesses and complexities that define the human experience.",
        },
        {
          title: "Identity & Purpose",
          description:
            "Examining the questions of who we are, why we exist and what gives our lives meaning.",
        },
        {
          title: "Choice & Consequence",
          description:
            "Reflecting on the decisions we make and the lasting impact they have on ourselves and others.",
        },
        {
          title: "The Unseen Battle",
          description:
            "Inviting audiences to reflect on the invisible influences that shape human thoughts, choices and relationships.",
        },
      ],
    },

    {
      title: "Why We Created Addam",
      paragraphs: [
        "Stories have the power to help people understand themselves and the world around them. Addam was created to encourage thoughtful reflection on the human condition through a compelling narrative that resonates across cultures, generations and backgrounds.",
        "Rather than providing simple answers, the series invites audiences to wrestle with timeless questions about humanity, purpose and the choices that define our lives.",
      ],
    },

    {
      title: "Looking Ahead",
      paragraphs: [
        "Addam is envisioned as Globe Media's flagship dramatic series. As development continues, the project will expand through thoughtful storytelling, world-building and creative collaboration while remaining grounded in the ideas that inspired its creation.",
      ],
    },

    {
      title: "Part of Globe Media",
      paragraphs: [
        "Addam is developed by Globe Media, the creative media division of Globe Technologies. It reflects the division's commitment to creating original stories that inform, inspire and empower generations through meaningful storytelling.",
      ],
      cards: [
        {
          title: "Globe Media",
          description:
            "Discover the division behind the creation of Addam.",
          href: "/divisions/media",
        },
      ],
    },
  ],

  related: [
    {
      label: "Projects",
      href: "/projects",
      description:
        "Explore other projects and initiatives by Globe Technologies.",
    },
    {
      label: "Globe Media",
      href: "/divisions/media",
      description:
        "Learn more about the creative media division.",
    },
    {
      label: "Research",
      href: "/research",
      description:
        "See how research informs our stories, projects and initiatives.",
    },
  ],
};