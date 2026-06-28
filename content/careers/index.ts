import type { PageContent } from "../../types/content";

export const careersContent: PageContent = {
  eyebrow: "Careers",
  title: "Careers at Globe Technologies",
  intro:
    "Globe Technologies should feel like a company where people can build meaningful careers with clarity, growth, and purpose.",
  sections: [
    {
      title: "Life at Globe",
      paragraphs: [
        "A placeholder overview of the working experience at Globe Technologies.",
      ],
    },
    {
      id: "our-culture",
      title: "Our Culture",
      paragraphs: [
        "A placeholder summary of the values and working principles that shape the company.",
      ],
    },
    {
      title: "Learning",
      paragraphs: [
        "A placeholder area for skills development, mentorship, and growth pathways.",
      ],
    },
    {
      title: "Wellness",
      paragraphs: [
        "A placeholder area for wellbeing, balance, and sustainable work practices.",
      ],
    },
    {
      title: "Recruitment Process",
      paragraphs: [
        "A placeholder description of how recruitment will work across the company.",
      ],
    },
    {
      title: "Open Positions",
      paragraphs: ["A placeholder listing area for future vacancies."],
    },
  ],
  related: [
    { label: "Life at Globe", href: "/careers" },
    { label: "Our Culture", href: "/careers#our-culture" },
    { label: "Divisions", href: "/divisions" },
    { label: "Contact", href: "/contact" },
  ],
};
