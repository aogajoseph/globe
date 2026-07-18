import type { PageContent } from "../../types/content";

export const ourStoryContent: PageContent = {
  eyebrow: "The Company",
  title: "Our Story",
  intro:
    "Every company begins with an idea. Globe Technologies began with a belief that meaningful innovation can help shape a better future.",

  sections: [
    {
      title: "Where It Began",
      paragraphs: [
        "Globe Technologies was founded on a simple conviction: the world's greatest challenges deserve thoughtful solutions. Rather than building technology for its own sake, we believe innovation should begin with understanding people, identifying meaningful problems and creating solutions that make a lasting difference.",
        "That belief continues to guide every product we develop, every project we pursue and every initiative we undertake.",
      ],
    },

    {
      title: "Growing Beyond Products",
      paragraphs: [
        "From the beginning, Globe Technologies was envisioned as more than a software company. It was imagined as a home for ideas—a company where research, technology, creativity and responsible stewardship come together to build solutions that improve lives and strengthen communities.",
        "As the company grows, new divisions, products and initiatives will continue to expand that vision while remaining united by one purpose and one identity.",
      ],
    },

    {
      title: "Looking Ahead",
      paragraphs: [
        "Our story is still being written. Every breakthrough, every partnership and every solution we create becomes another chapter in a journey driven by curiosity, purpose and the pursuit of excellence.",
        "While we cannot predict the future, we remain committed to helping invent it—responsibly, thoughtfully and for generations to come.",
      ],
    },
  ],

  related: [
    {
      label: "About Us",
      href: "/company/about",
    },
    {
      label: "Vision",
      href: "/company/vision",
    },
    {
      label: "Company Profile",
      href: "/company/company-profile",
    },
  ],
};