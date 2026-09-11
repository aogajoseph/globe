import type { PageContent } from "../../types/content";

export const mediaDivisionContent: PageContent = {
  eyebrow: "Division",
  title: "Globe Media",
  intro:
    "Globe Media creates films, documentaries, podcasts, publications and other creative works that turn ideas into meaningful stories and intellectual properties.",

  sections: [
    {
      title: "Creating Stories and Experiences",
      paragraphs: [
        "Globe Media is the creative division of Globe Technologies. It develops original stories, publications and media experiences across visual, audio and written forms.",
        "The division combines creative development, production and thoughtful communication to create work that is engaging, distinctive and built for lasting value.",
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
      title: "What We Create",
      cards: [
        {
          title: "Film & Drama",
          description:
            "Developing original films and dramatic works that explore ideas, experiences and human stories.",
        },
        {
          title: "Documentaries",
          description:
            "Producing factual works that investigate subjects, preserve stories and present ideas through visual storytelling.",
        },
        {
          title: "Publishing",
          description:
            "Creating books, publications and written works that communicate knowledge, stories and perspectives.",
        },
        {
          title: "Digital Media",
          description:
            "Developing podcasts, digital experiences and other media formats for contemporary audiences.",
        },
      ],
    },

    {
      title: "Current Intellectual Property",
      paragraphs: [
        "Addam is an original Globe Media intellectual property: a dramatic series exploring the human experience through identity, choice, purpose, relationships and the hidden forces that shape our lives.",
      ],
      cards: [
        {
          title: "Addam",
          description:
            "An original dramatic series exploring the complexities of the human experience.",
          href: "/ips/media/addam",
        },
      ],
    },

    {
      title: "From Idea to Production",
      paragraphs: [
        "Globe Media develops ideas into creative works according to the form best suited to their purpose. Development may involve concept development, writing, visual development, production and post-production.",
        "Where an idea originates through Globe Research, research findings and recommendations provide direction for the creative process. Media development may also generate new questions requiring further research.",
      ],
    },

    {
      title: "Part of Globe",
      paragraphs: [
        "Globe Media is a specialized division of Globe Technologies, operating within the company's governance framework and guided by its Constitution, purpose, mission and vision.",
        "Its work reflects Globe's commitment to purpose, excellence and stewardship, applying creative discipline and thoughtful production to the development of original media and intellectual properties.",
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