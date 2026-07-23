export type NavigationChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationGroup = {
  label: string;
  href: string;
  children: NavigationChild[];
};

function normalizeSiteUrl(value: string): string {
  const trimmed = value.trim().replace(/\/+$/, "");

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

export const siteConfig = {
  name: "Globe Technologies",
  description:
    "Globe Technologies is a research-driven technology company building products, projects and initiatives that contribute to a better future.",
  url: normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://globetechnologies.com",
  ),
  locale: "en_US",
  language: "en",
  themeColor: "#0f172a",
  manifestPath: "/manifest.webmanifest",
  logoPath: "/logos/logo.png",
  tagline: "Inventing the Future.",
  keywords: [
    "Globe Technologies",
    "Globe Software",
    "Globe Media",
    "Globe Research",
    "Akiba",
    "Addam",
  ],
} as const;

export const navigationGroups: NavigationGroup[] = [
  {
    label: "The Company",
    href: "/company",
    children: [
      { label: "Overview", href: "/company" },
      { label: "About Us", href: "/company/about" },
      { label: "Our Story", href: "/company/our-story" },
      { label: "Company Profile", href: "/company/company-profile" },
      { label: "Constitution", href: "/company/constitution" },
      { label: "Vision", href: "/company/vision" },
      { label: "Mission", href: "/company/mission" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Governance", href: "/company/governance" },
      { label: "Our Brand", href: "/company/brand" },
    ],
  },
  {
    label: "Divisions",
    href: "/divisions",
    children: [
      { label: "Globe Software", href: "/divisions/software" },
      { label: "Globe Media", href: "/divisions/media" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [{ label: "Akiba", href: "/products/akiba" }],
  },
  {
    label: "Projects",
    href: "/projects",
    children: [{ label: "Addam", href: "/projects/addam" }],
  },
] as const;

export const primaryNavigation = [
  { label: "Home", href: "/" },
  ...navigationGroups.map((group) => ({ label: group.label, href: group.href })),
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavigation = [
  { label: "The Company", href: "/company" },
  { label: "Divisions", href: "/divisions" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
] as const;
