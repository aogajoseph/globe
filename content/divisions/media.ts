import type { PageContent } from "../../types/content";

export const mediaDivisionContent: PageContent = {
  eyebrow: "Division",
  title: "Globe Media",
  intro:
    "Globe Media creates and publishes educational and creative media that informs, inspires and empowers generations.",

  sections: [
    {
      title: "What We Do",
      paragraphs: [
        "Globe Media is the creative media division of Globe Technologies. Through storytelling, publishing and digital media, we explore ideas that educate, inspire and encourage people to think more deeply about themselves, their communities and the world around them.",
        "Our work combines research, creativity and thoughtful communication to produce stories and experiences that are engaging, meaningful and enduring.",
      ],
    },

    {
      type: "image",
      id: "creative-studio",
      src: "/images/divisions/creative-studio.png",
      alt: "Globe Media creative production studio",
      variant: "editorial",
    },

    {
      title: "Areas of Focus",
      cards: [
        {
          title: "Research",
          description:
            "Exploring ideas, cultures and history that inspire meaningful stories and educational content.",
        },
        {
          title: "Storytelling",
          description:
            "Creating original narratives that entertain, challenge perspectives and inspire conversations.",
        },
        {
          title: "Publishing",
          description:
            "Producing books, articles and publications that share knowledge and ideas.",
        },
        {
          title: "Creative Production",
          description:
            "Developing visual, audio and interactive experiences across multiple forms of media.",
        },
      ],
    },

    {
      title: "Current Work",
      paragraphs: [
        "Addam. An original dramatic series exploring the human experience through the life of the main character, inviting audiences to reflect on identity, choice, purpose, relationships and the unseen forces that shape our lives. While inspired by timeless themes, Addam speaks to questions that transcend culture, generation and background.",
      ],
      cards: [
        {
          title: "Addam",
          description:
            "An original dramatic series exploring the complexities of the human experience.",
          href: "/projects/addam",
        },
      ],
    },

    {
      title: "Looking Ahead",
      paragraphs: [
        "Globe Media will continue expanding into books, documentaries, films, podcasts and digital experiences that educate, inspire and contribute to meaningful conversations across generations.",
      ],
    },

    {
      title: "Part of Globe Technologies",
      paragraphs: [
        "Globe Media operates as a division of Globe Technologies and shares the company's purpose, vision and commitment to excellence. Every story, publication and creative work reflects the same principles of research, innovation and responsible stewardship that define the company as a whole.",
      ],
    },
  ],

  related: [
    {
      label: "Globe Software",
      href: "/divisions/software",
      description:
        "Explore the software division of Globe Technologies.",
    },
    {
      label: "Projects",
      href: "/projects",
      description:
        "Discover the projects and initiatives developed by Globe Technologies.",
    },
    {
      label: "Research",
      href: "/research",
      description:
        "Learn how research informs every story and initiative we create.",
    },
  ],
};