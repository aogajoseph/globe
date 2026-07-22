import type { PageContent } from "../../types/content";

export const softwareDivisionContent: PageContent = {
  eyebrow: "Division",
  title: "Globe Software",
  intro:
    "Globe Software designs and develops software products and digital platforms that solve meaningful problems, improve everyday life and contribute to a better future.",

  sections: [
    {
      title: "What We Do",
      paragraphs: [
        "Globe Software is the software development division of Globe Technologies. Through research, engineering and thoughtful design, we create digital solutions that help people, organizations and communities solve real-world challenges.",
        "Every product begins with understanding the problem before designing the technology, ensuring our solutions are practical, reliable and built for long-term value.",
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
      title: "Areas of Focus",
      cards: [
        {
          title: "Research",
          description:
            "Exploring meaningful challenges and emerging technologies before building solutions.",
        },
        {
          title: "Software Engineering",
          description:
            "Designing, developing and maintaining reliable software systems.",
        },
        {
          title: "Digital Platforms",
          description:
            "Creating secure, scalable platforms that empower people and organizations.",
        },
        {
          title: "Innovation",
          description:
            "Investigating new ideas and technologies that improve lives and shape the future.",
        },
      ],
    },

    {
      title: "Current Work",
      paragraphs: [
        "Akiba is Globe Software's flagship product. It enables families, friends and communities to save, manage and grow funds together through a secure collaborative savings platform.",
      ],
      cards: [
        {
          title: "Akiba",
          description:
            "A collaborative savings platform designed for families, friends and communities.",
          href: "/products/akiba",
        },
      ],
    },

    {
      title: "Looking Ahead",
      paragraphs: [
        "Globe Software will continue expanding into new software products, intelligent platforms and emerging technologies that contribute to a better future while remaining grounded in research, excellence and responsible innovation.",
      ],
    },

    {
      title: "Part of Globe Technologies",
      paragraphs: [
        "Globe Software operates as a division of Globe Technologies and shares the company's purpose, vision and commitment to excellence. Every solution reflects the same standards of research, innovation and stewardship that define the company as a whole.",
      ],
    },
  ],

  related: [
    {
      label: "Globe Media",
      href: "/divisions/media",
      description:
        "Explore the creative and educational media division.",
    },
    {
      label: "Products",
      href: "/products",
      description:
        "Discover the products developed by Globe Technologies.",
    },
    {
      label: "Research",
      href: "/research",
      description:
        "Learn how research shapes everything we build.",
    },
  ],
};