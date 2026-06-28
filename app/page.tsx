import { InstitutionalPage } from "../components/layout/institutional-page";

const quickLinks = [
  { label: "Learn About the Company", href: "/company" },
  { label: "Explore Globe Software", href: "/divisions/software" },
  { label: "Explore Globe Media", href: "/divisions/media" },
  { label: "Discover Akiba", href: "/products/akiba" },
  { label: "View Addam", href: "/projects/addam" },
  { label: "Explore Research", href: "/research" },
];

export default function HomePage() {
  return (
    <InstitutionalPage
      content={{
        eyebrow: "Globe Technologies",
        title: "Globe Technologies",
        intro:
          "A technology company that researches, develops and delivers innovative solutions that solve meaningful problems and contribute to a better future.",
        sections: [
          {
            title: "Start Here",
            cards: quickLinks.map((item) => ({
              title: item.label,
              description: "Open the relevant section of the company website.",
              href: item.href,
            })),
          },
        ],
        related: [
          { label: "The Company", href: "/company" },
          { label: "Divisions", href: "/divisions" },
          { label: "Projects", href: "/projects" },
        ],
      }}
    />
  );
}

