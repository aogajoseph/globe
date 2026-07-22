import type { PageContent } from "../../types/content";

export const productsLandingContent: PageContent = {
  eyebrow: "Products",
  title: "Our Products",
  intro:
    "Every product begins with a meaningful problem. Through research, thoughtful design and responsible engineering, Globe Technologies develops products that help people, organizations and communities work, connect and thrive.",

  sections: [
    {
      title: "Designed with Purpose",
      paragraphs: [
        "Our products are created to solve practical challenges while contributing to a better future. Rather than building technology for its own sake, we focus on solutions that improve everyday life, strengthen communities and create lasting value.",
        "Every product reflects the same commitment to research, innovation and excellence that defines Globe Technologies.",
      ],
    },

    {
      type: "image",
      id: "product-development",
      src: "/images/products/product-development.png",
      alt: "Globe Technologies product development in progress",
      variant: "editorial",
    },

    {
      title: "Current Products",
      cards: [
        {
          title: "Akiba",
          description:
            "A collaborative savings platform that helps families, friends and communities save and manage money together simply, securely and transparently.",
          href: "/products/akiba",
        },
      ],
    },

    {
      title: "Looking Ahead",
      paragraphs: [
        "As Globe Technologies grows, our product portfolio will continue expanding into new areas of innovation. Every future product will be guided by the same purpose of developing meaningful solutions that contribute to a better future.",
      ],
    },
  ],

  related: [
    {
      label: "Globe Software",
      href: "/divisions/software",
      description:
        "Discover the division responsible for developing our software products.",
    },
    {
      label: "Research",
      href: "/research",
      description:
        "Learn how research informs every product we create.",
    },
    {
      label: "Projects",
      href: "/projects",
      description:
        "Explore our long-term creative and strategic initiatives.",
    },
  ],
};