import type { PageContent } from "../../../types/content";

export const addamContent: PageContent = {
  eyebrow: "Media Intellectual Property",
  title: "Addam",
  intro:
    "Addam is an original dramatic series developed by Globe Media that explores the human experience through the life of one man. The story examines identity, purpose, choice and the unseen forces surrounding human life.",

  sections: [
    {
      type: "image",
      id: "addam-cinematic",
      src: "/images/projects/addam.png",
      alt: "Cinematic still from the Addam dramatic series",
      variant: "panoramic",
    },

    {
      title: "The Story",
      paragraphs: [
        "Addam follows one man's journey through life, using his experiences to explore questions that extend beyond his individual story.",
        "The series examines the hopes, fears, relationships, choices and struggles that shape human life while introducing an unseen dimension that exists alongside the world people know.",
      ],
    },

    {
      title: "Themes",
      cards: [
        {
          title: "Human Nature",
          description:
            "Exploring the strengths, weaknesses, desires and contradictions that shape human behaviour.",
        },
        {
          title: "Identity & Purpose",
          description:
            "Examining the search for identity, meaning, belonging and purpose throughout life.",
        },
        {
          title: "Choice & Consequence",
          description:
            "Exploring how decisions shape individuals, relationships and the course of their lives.",
        },
        {
          title: "The Unseen",
          description:
            "Exploring the unseen forces and conflicts that exist alongside the visible human world.",
        },
      ],
    },

    {
      title: "The World of Addam",
      paragraphs: [
        "Addam presents an ordinary human world alongside an unseen realm with its own forces, relationships and conflicts. The two dimensions intersect through the lives and choices of human beings.",
        "The unseen world provides another perspective on the human experience without reducing the story to simple answers. Its purpose is to deepen the questions the series asks about humanity, choice and the forces that influence our lives.",
      ],
    },

    {
      title: "Why We Created Addam",
      paragraphs: [
        "Addam was created to explore the human condition through drama rather than exposition. The series uses one person's life to examine questions that are universal while leaving audiences room to form their own interpretations.",
        "It is a story about people: how they think, what they want, what they fear, what they choose and what those choices reveal about who they are.",
      ],
    },

    {
      title: "Development",
      paragraphs: [
        "Addam is developed as a Globe Media intellectual property, with its story, characters, visual identity and wider world designed to support a long-form dramatic series.",
        "The intellectual property is intended to grow through storytelling and production while preserving the central questions and themes at the heart of the work.",
      ],
    },

    {
      title: "Part of Globe Media",
      paragraphs: [
        "Addam is a media intellectual property developed by Globe Media, the division responsible for creating Globe's films, documentaries, podcasts, publications and other creative works.",
      ],
      cards: [
        {
          title: "Globe Media",
          description:
            "Explore the division responsible for developing Addam and Globe's other media intellectual properties.",
          href: "/divisions/media",
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
      label: "Globe Software",
      href: "/divisions/software",
    },
    {
      label: "Leadership",
      href: "/about/leadership",
    },
  ],
};