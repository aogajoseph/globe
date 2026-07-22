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
        "Addam follows the journey of one man as he navigates the defining moments of life. His experiences become a reflection of humanity itself, exploring the hopes, fears, struggles and aspirations that connect people across cultures and generations.",
        "Through compelling storytelling, the series invites audiences to consider not only the choices we make, but also the unseen influences that shape our lives and the world around us.",
      ],
    },

    {
      type: "image",
      id: "addam-cinematic",
      src: "/images/projects/addam.png",
      alt: "Cinematic still from the Addam dramatic series",
      variant: "panoramic",
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
            "Reflecting on the search for meaning, belonging and purpose.",
        },
        {
          title: "Choice & Consequence",
          description:
            "Examining how decisions shape individuals, relationships and communities.",
        },
        {
          title: "The Unseen Battle",
          description:
            "Inviting audiences to consider the invisible influences surrounding the human experience.",
        },
      ],
    },

    {
      title: "Why We Created Addam",
      paragraphs: [
        "Stories have the power to help people understand themselves and one another. Addam was created to encourage thoughtful reflection on the human condition through a compelling narrative that resonates across cultures, generations and backgrounds.",
        "Rather than offering simple answers, the series invites audiences to wrestle with timeless questions about humanity, purpose and the choices that define our lives.",
      ],
    },

    {
      title: "Looking Ahead",
      paragraphs: [
        "As Globe Media's flagship dramatic series, Addam will continue to grow through thoughtful storytelling, world-building and creative collaboration, inviting new audiences to engage with its exploration of the human experience.",
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