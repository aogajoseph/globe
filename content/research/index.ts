import type { PageContent } from "../../types/content";

export const researchContent: PageContent = {
  eyebrow: "Research",
  title: "Research",
  intro:
    "Globe Technologies treats research as a long-term commitment to knowledge creation, refinement, and application.",
  sections: [
    {
      title: "Publications",
      paragraphs: [
        "Placeholder space for papers, articles, and institutional publications.",
      ],
    },
    {
      title: "White Papers",
      paragraphs: [
        "Placeholder space for strategic and technical white papers.",
      ],
    },
    {
      title: "Innovation",
      paragraphs: [
        "Placeholder space for innovation notes, experiments, and applied work.",
      ],
    },
    {
      id: "partnerships",
      title: "Partnerships",
      paragraphs: [
        "Placeholder space for research collaborations and external partnerships.",
      ],
    },
  ],
  related: [
    { label: "Products", href: "/products" },
    { label: "News", href: "/news" },
    { label: "Divisions", href: "/divisions" },
    { label: "Partnerships", href: "/research#partnerships" },
  ],
};
