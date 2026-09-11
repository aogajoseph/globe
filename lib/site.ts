export type NavigationChild = {
  label: string;
  href: string;
  description?: string;
  children?: readonly NavigationChild[];
};

export type NavigationGroup = {
  label: string;
  href: string;
  description?: string;
  children: readonly NavigationChild[];
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
    "Globe Technologies is a multidisciplinary innovation company that researches, develops and commercializes ideas into products, services and intellectual property.",

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
    "Globe Research",
    "Globe Software",
    "Globe Media",
    "Globe Merchandise",
    "Globe Client Services",
    "Akiba",
    "Addam",
    "technology",
    "intellectual property",
    "innovation",
    "research",
    "software",
    "media",
    "merchandise",
    "client services",
  ],
} as const;

/**
 * Primary mega-navigation groups.
 *
 * These represent the major areas of the Globe Technologies website:
 * About, Divisions and IPs.
 */
export const navigationGroups: readonly NavigationGroup[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      {
        label: "The Company",
        href: "/about/company",
      },
      {
        label: "Our Story",
        href: "/about/our-story",
      },
      {
        label: "Our Brand",
        href: "/about/brand",
      },
      {
        label: "Company Profile",
        href: "/about/company-profile",
      },
      {
        label: "Mission & Vision",
        href: "/about/mission-vision",
      },
      {
        label: "Leadership",
        href: "/about/leadership",
      },
      {
        label: "Governance",
        href: "/about/governance",
      },
      {
        label: "Constitution",
        href: "/about/constitution",
      },
    ],
  },

  {
    label: "Divisions",
    href: "/divisions",
    children: [
      {
        label: "Globe Research",
        href: "/divisions/research",
        description:
          "Research opportunities, evaluate ideas and guide innovation.",
      },
      {
        label: "Globe Software",
        href: "/divisions/software",
        description:
          "Create software products and digital platforms.",
      },
      {
        label: "Globe Media",
        href: "/divisions/media",
        description:
          "Share ideas through storytelling, productions and media intellectual property.",
      },
      {
        label: "Globe Merchandise",
        href: "/divisions/merchandise",
        description:
          "Develop and commercialize Globe and IP-branded physical products.",
      },
      {
        label: "Globe Client Services",
        href: "/divisions/client-services",
        description:
          "Connect clients with the capabilities and expertise of Globe.",
      },
    ],
  },

  {
    label: "IPs",
    href: "/ips",
    children: [
      {
        label: "Research Publications",
        href: "/ips/research/research-publications",
        description:
          "Research publications and knowledge produced by Globe Research.",
      },

      {
        label: "Software",
        href: "/ips/software",
        description:
          "Software intellectual property created by Globe Software.",
        children: [
          {
            label: "Akiba",
            href: "/ips/software/akiba",
          },
        ],
      },

      {
        label: "Media",
        href: "/ips/media",
        description:
          "Media intellectual property created by Globe Media.",
        children: [
          {
            label: "Addam",
            href: "/ips/media/addam",
          },
        ],
      },

      {
        label: "Merchandise",
        href: "/ips/merchandise",
        description:
          "Globe Store for commercializing Globe's corporate and IP-branded merchandise.",
        children: [
          {
            label: "Globe Store",
            href: "/ips/merchandise/store",
          },
        ],
      },
    ],
  },
] as const;

export const contactLink = {
  label: "Contact Us",
  href: "/contact",
} as const;

/**
 * Main website navigation.
 */
export const primaryNavigation = [
  { label: "Home", href: "/" },
  ...navigationGroups.map((group) => ({
    label: group.label,
    href: group.href,
  })),
  { label: "Blog", href: "/blog" },
  contactLink,
] as const;

/**
 * Footer navigation.
 */
export const footerNavigation = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Divisions",
    href: "/divisions",
  },
  {
    label: "IPs",
    href: "/ips",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;