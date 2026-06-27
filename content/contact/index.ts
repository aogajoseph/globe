import type { PageContent } from "../../types/content";

export const contactContent: PageContent = {
  eyebrow: "Contact",
  title: "Contact Globe Technologies",
  intro:
    "A professional contact page with structured placeholders for the main communication channels.",
  sections: [
    {
      title: "General Enquiries",
      paragraphs: ["Contact details for general questions will be added here."],
    },
    {
      title: "Partnerships",
      paragraphs: ["Contact details for partnership opportunities will be added here."],
    },
    {
      title: "Careers",
      paragraphs: ["Contact details for recruitment and career enquiries will be added here."],
    },
    {
      title: "Media",
      paragraphs: ["Contact details for media and press enquiries will be added here."],
    },
    {
      title: "Office Location",
      paragraphs: ["The office location placeholder will be finalized later."],
    },
  ],
  related: [
    { label: "The Institution", href: "/institution" },
    { label: "Divisions", href: "/divisions" },
    { label: "News", href: "/news" },
  ],
};
