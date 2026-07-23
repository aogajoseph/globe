import type { Metadata, MetadataRoute } from "next";
import { contactInfo } from "./contact-info";
import { siteConfig } from "./site";

type AbsolutePath = "/" | `/${string}`;

type BreadcrumbItem = {
  name: string;
  pathname: AbsolutePath;
};

export type JsonLdObject = {
  "@context": "https://schema.org";
  "@type": string | string[];
  [key: string]: unknown;
};

type PageSchemaKind =
  | "aboutPage"
  | "contactPage"
  | "creativeWork"
  | "softwareApplication"
  | "webPage";

type PageDefinition = {
  pathname: AbsolutePath;
  title: string;
  description: string;
  keywords: readonly string[];
  image: string;
  imageAlt: string;
  category?: string;
  schemaKind?: PageSchemaKind;
  breadcrumbs: readonly BreadcrumbItem[];
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

const metadataBase = new URL(siteConfig.url);

function resolveUrl(pathname: string): string {
  return new URL(pathname, metadataBase).toString();
}

function buildRobots(): NonNullable<Metadata["robots"]> {
  return {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

function buildImage(pathname: string, alt: string) {
  const url = resolveUrl(pathname);

  return {
    url,
    width: 1200,
    height: 630,
    alt,
  };
}

function buildBreadcrumbList(definition: PageDefinition): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: definition.breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: resolveUrl(item.pathname),
    })),
  };
}

function buildWebPageSchema(definition: PageDefinition): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: definition.title,
    description: definition.description,
    url: resolveUrl(definition.pathname),
    inLanguage: siteConfig.language,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

function buildSpecialSchema(definition: PageDefinition): JsonLdObject | null {
  const url = resolveUrl(definition.pathname);

  switch (definition.schemaKind) {
    case "aboutPage":
      return {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: `${definition.title} | ${siteConfig.name}`,
        description: definition.description,
        url,
      };
    case "contactPage":
      return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: `${definition.title} | ${siteConfig.name}`,
        description: definition.description,
        url,
        mainEntity: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: contactInfo.email,
            telephone: contactInfo.phone,
          },
        },
      };
    case "softwareApplication":
      return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: definition.title,
        description: definition.description,
        url,
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        author: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
      };
    case "creativeWork":
      return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: definition.title,
        description: definition.description,
        url,
        genre: "Drama",
        creator: {
          "@type": "Organization",
          name: "Globe Media",
          parentOrganization: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
        },
      };
    default:
      return null;
  }
}

function buildPageSchemas(definition: PageDefinition): JsonLdObject[] {
  const schemas: JsonLdObject[] = [
    buildWebPageSchema(definition),
    buildBreadcrumbList(definition),
  ];
  const specialSchema = buildSpecialSchema(definition);

  if (specialSchema) {
    schemas.push(specialSchema);
  }

  return schemas;
}

function buildPageMetadata(definition: PageDefinition): Metadata {
  const image = buildImage(definition.image, definition.imageAlt);
  const title = definition.title;

  return {
    metadataBase,
    title,
    description: definition.description,
    keywords: [...definition.keywords],
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    category: definition.category ?? "technology",
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: buildRobots(),
    icons: {
      icon: [{ url: "/icon", type: "image/png" }],
      apple: [{ url: "/apple-icon", type: "image/png" }],
    },
    manifest: siteConfig.manifestPath,
    alternates: {
      canonical: resolveUrl(definition.pathname),
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: definition.description,
      url: resolveUrl(definition.pathname),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description: definition.description,
      images: [image.url],
    },
  };
}

const pageDefinitions = {
  home: {
    pathname: "/",
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    image: "/images/hero/homepage-banner.png",
    imageAlt: "Globe Technologies homepage hero image",
    breadcrumbs: [{ name: siteConfig.name, pathname: "/" }],
    changeFrequency: "weekly",
    priority: 1,
  },
  company: {
    pathname: "/company",
    title: "Company Overview",
    description:
      "Learn how Globe Technologies is structured and how its divisions, products and governance work together.",
    keywords: ["company overview", "Globe Technologies", "governance", "divisions"],
    image: "/images/company/reception.png",
    imageAlt: "Globe Technologies headquarters reception area",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Company Overview", pathname: "/company" },
    ],
    changeFrequency: "monthly",
    priority: 0.9,
  },
  companyAbout: {
    pathname: "/company/about",
    title: "About Us",
    description:
      "Learn about Globe Technologies, its purpose, values and the thinking behind its work.",
    keywords: ["about Globe Technologies", "purpose", "values", "technology company"],
    image: "/images/company/team-collaboration.png",
    imageAlt: "Globe Technologies team collaborating",
    schemaKind: "aboutPage",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Company Overview", pathname: "/company" },
      { name: "About Us", pathname: "/company/about" },
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  companyBrand: {
    pathname: "/company/brand",
    title: "Brand",
    description:
      "Explore the Globe Technologies brand and the standards it represents across the company.",
    keywords: ["brand", "Globe Technologies", "identity", "standards"],
    image: "/images/company/company-overview.png",
    imageAlt: "Globe Technologies brand and company overview",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Company Overview", pathname: "/company" },
      { name: "Brand", pathname: "/company/brand" },
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  companyProfile: {
    pathname: "/company/company-profile",
    title: "Company Profile",
    description:
      "A concise profile of Globe Technologies, including its focus, structure and guiding principles.",
    keywords: ["company profile", "Globe Technologies", "profile", "structure"],
    image: "/images/company/profile.png",
    imageAlt: "Globe Technologies company profile",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Company Overview", pathname: "/company" },
      { name: "Company Profile", pathname: "/company/company-profile" },
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  companyConstitution: {
    pathname: "/company/constitution",
    title: "Constitution",
    description:
      "Learn how the Globe Technologies Constitution protects purpose, governance and continuity.",
    keywords: ["constitution", "governance", "Globe Technologies", "continuity"],
    image: "/images/company/founding-journey.png",
    imageAlt: "The founding journey behind Globe Technologies",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Company Overview", pathname: "/company" },
      { name: "Constitution", pathname: "/company/constitution" },
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  companyGovernance: {
    pathname: "/company/governance",
    title: "Governance",
    description:
      "Review the governance framework that keeps Globe Technologies accountable, resilient and purpose-led.",
    keywords: ["governance", "accountability", "Globe Technologies", "leadership"],
    image: "/images/company/leadership-discussion.png",
    imageAlt: "Globe Technologies leadership in discussion",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Company Overview", pathname: "/company" },
      { name: "Governance", pathname: "/company/governance" },
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  companyLeadership: {
    pathname: "/company/leadership",
    title: "Leadership",
    description:
      "Meet the leadership approach that guides Globe Technologies with stewardship and accountability.",
    keywords: ["leadership", "Globe Technologies", "stewardship", "accountability"],
    image: "/images/company/leadership-discussion.png",
    imageAlt: "Globe Technologies leadership in discussion",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Company Overview", pathname: "/company" },
      { name: "Leadership", pathname: "/company/leadership" },
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  companyMission: {
    pathname: "/company/mission",
    title: "Mission",
    description:
      "Understand how Globe Technologies turns its purpose into practical action.",
    keywords: ["mission", "Globe Technologies", "purpose", "action"],
    image: "/images/company/profile.png",
    imageAlt: "Globe Technologies company profile",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Company Overview", pathname: "/company" },
      { name: "Mission", pathname: "/company/mission" },
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  companyOurStory: {
    pathname: "/company/our-story",
    title: "Our Story",
    description:
      "Explore how Globe Technologies began and how its purpose continues to shape the company.",
    keywords: ["our story", "Globe Technologies", "founding", "purpose"],
    image: "/images/company/founding-journey.png",
    imageAlt: "The founding journey behind Globe Technologies",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Company Overview", pathname: "/company" },
      { name: "Our Story", pathname: "/company/our-story" },
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  companyPurpose: {
    pathname: "/company/purpose",
    title: "Purpose",
    description:
      "Discover why Globe Technologies exists and how purpose guides every decision it makes.",
    keywords: ["purpose", "Globe Technologies", "mission", "vision"],
    image: "/images/company/company-overview.png",
    imageAlt: "Globe Technologies company overview",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Company Overview", pathname: "/company" },
      { name: "Purpose", pathname: "/company/purpose" },
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  companyVision: {
    pathname: "/company/vision",
    title: "Vision",
    description:
      "See the future Globe Technologies is working to help create through research and innovation.",
    keywords: ["vision", "Globe Technologies", "future", "innovation"],
    image: "/images/company/company-overview.png",
    imageAlt: "Globe Technologies company overview",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Company Overview", pathname: "/company" },
      { name: "Vision", pathname: "/company/vision" },
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  careers: {
    pathname: "/careers",
    title: "Careers",
    description:
      "Explore careers at Globe Technologies and learn about culture, growth and recruitment.",
    keywords: ["careers", "Globe Technologies", "jobs", "culture"],
    image: "/images/careers/workplace-culture.png",
    imageAlt: "Globe Technologies workplace culture and collaboration",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Careers", pathname: "/careers" },
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  contact: {
    pathname: "/contact",
    title: "Contact",
    description:
      "Contact Globe Technologies for enquiries, partnerships, careers and collaboration opportunities.",
    keywords: ["contact", "Globe Technologies", "enquiries", "partnerships"],
    image: "/images/contact/remote-collaboration.png",
    imageAlt: "Remote collaboration at Globe Technologies",
    schemaKind: "contactPage",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Contact", pathname: "/contact" },
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  divisions: {
    pathname: "/divisions",
    title: "Divisions",
    description:
      "See how Globe Technologies is organized across its software and media divisions.",
    keywords: ["divisions", "Globe Software", "Globe Media", "Globe Technologies"],
    image: "/images/divisions/divisions-collaboration.png",
    imageAlt: "Globe Technologies divisions collaborating",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Divisions", pathname: "/divisions" },
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  divisionsSoftware: {
    pathname: "/divisions/software",
    title: "Globe Software",
    description:
      "Learn how Globe Software develops digital products and platforms through research and engineering.",
    keywords: ["Globe Software", "software", "engineering", "digital products"],
    image: "/images/divisions/engineering-workspace.png",
    imageAlt: "Globe Software engineering workspace",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Divisions", pathname: "/divisions" },
      { name: "Globe Software", pathname: "/divisions/software" },
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  divisionsMedia: {
    pathname: "/divisions/media",
    title: "Globe Media",
    description:
      "Learn how Globe Media creates educational and creative work through research and storytelling.",
    keywords: ["Globe Media", "media", "storytelling", "publishing"],
    image: "/images/divisions/creative-studio.png",
    imageAlt: "Globe Media creative production studio",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Divisions", pathname: "/divisions" },
      { name: "Globe Media", pathname: "/divisions/media" },
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  news: {
    pathname: "/news",
    title: "News",
    description:
      "Explore Globe Technologies news, updates, releases and events.",
    keywords: ["news", "Globe Technologies", "updates", "events"],
    image: "/logos/logo.png",
    imageAlt: "Globe Technologies logo",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "News", pathname: "/news" },
    ],
    changeFrequency: "weekly",
    priority: 0.5,
  },
  newsCompany: {
    pathname: "/news/company-news",
    title: "Company News",
    description:
      "Read company news and internal updates from Globe Technologies.",
    keywords: ["company news", "Globe Technologies", "updates"],
    image: "/logos/logo.png",
    imageAlt: "Globe Technologies logo",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "News", pathname: "/news" },
      { name: "Company News", pathname: "/news/company-news" },
    ],
    changeFrequency: "monthly",
    priority: 0.4,
  },
  newsEvents: {
    pathname: "/news/events",
    title: "Events",
    description:
      "See events, appearances and company gatherings from Globe Technologies.",
    keywords: ["events", "Globe Technologies", "appearances"],
    image: "/logos/logo.png",
    imageAlt: "Globe Technologies logo",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "News", pathname: "/news" },
      { name: "Events", pathname: "/news/events" },
    ],
    changeFrequency: "monthly",
    priority: 0.4,
  },
  newsPressReleases: {
    pathname: "/news/press-releases",
    title: "Press Releases",
    description: "Read official press releases from Globe Technologies.",
    keywords: ["press releases", "Globe Technologies", "official statements"],
    image: "/logos/logo.png",
    imageAlt: "Globe Technologies logo",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "News", pathname: "/news" },
      { name: "Press Releases", pathname: "/news/press-releases" },
    ],
    changeFrequency: "monthly",
    priority: 0.4,
  },
  newsProductUpdates: {
    pathname: "/news/product-updates",
    title: "Product Updates",
    description:
      "See product updates and release notes from Globe Technologies.",
    keywords: ["product updates", "Globe Technologies", "release notes"],
    image: "/logos/logo.png",
    imageAlt: "Globe Technologies logo",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "News", pathname: "/news" },
      { name: "Product Updates", pathname: "/news/product-updates" },
    ],
    changeFrequency: "monthly",
    priority: 0.4,
  },
  products: {
    pathname: "/products",
    title: "Products",
    description:
      "Explore Globe Technologies products, beginning with Akiba and the work behind it.",
    keywords: ["products", "Globe Technologies", "Akiba", "software"],
    image: "/images/products/product-development.png",
    imageAlt: "Globe Technologies product development in progress",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Products", pathname: "/products" },
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  productsAkiba: {
    pathname: "/products/akiba",
    title: "Akiba",
    description:
      "Akiba is Globe Technologies' collaborative savings platform for families, friends and communities.",
    keywords: ["Akiba", "savings platform", "Globe Technologies", "finance"],
    image: "/images/products/akiba-app-mockup.png",
    imageAlt: "Akiba collaborative savings platform on mobile devices",
    schemaKind: "softwareApplication",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Products", pathname: "/products" },
      { name: "Akiba", pathname: "/products/akiba" },
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  projects: {
    pathname: "/projects",
    title: "Projects",
    description:
      "Explore Globe Technologies projects, beginning with Addam and its long-term creative focus.",
    keywords: ["projects", "Globe Technologies", "Addam", "creative work"],
    image: "/images/projects/storytelling-creative.png",
    imageAlt: "Creative storytelling and production at Globe Technologies",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Projects", pathname: "/projects" },
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
  projectsAddam: {
    pathname: "/projects/addam",
    title: "Addam",
    description:
      "Addam is an original dramatic series from Globe Media exploring identity, purpose and choice.",
    keywords: ["Addam", "Globe Media", "drama", "storytelling"],
    image: "/images/projects/addam.png",
    imageAlt: "Cinematic still from the Addam dramatic series",
    schemaKind: "creativeWork",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Projects", pathname: "/projects" },
      { name: "Addam", pathname: "/projects/addam" },
    ],
    changeFrequency: "monthly",
    priority: 0.7,
  },
  research: {
    pathname: "/research",
    title: "Research",
    description:
      "See how research informs Globe Technologies products, projects and long-term decisions.",
    keywords: ["research", "Globe Technologies", "innovation", "publications"],
    image: "/images/research/research-collaboration.png",
    imageAlt: "Globe Technologies research team collaborating",
    breadcrumbs: [
      { name: siteConfig.name, pathname: "/" },
      { name: "Research", pathname: "/research" },
    ],
    changeFrequency: "monthly",
    priority: 0.8,
  },
} as const satisfies Record<string, PageDefinition>;

export type SeoPageKey = keyof typeof pageDefinitions;

export function createPageMetadata(key: SeoPageKey): Metadata {
  const definition = pageDefinitions[key];

  return buildPageMetadata(definition);
}

export function createPageStructuredData(key: SeoPageKey): JsonLdObject[] {
  const definition = pageDefinitions[key];

  return buildPageSchemas(definition);
}

export function createRootMetadata(): Metadata {
  const image = buildImage(
    "/images/hero/homepage-banner.png",
    "Globe Technologies homepage hero image",
  );

  return {
    metadataBase,
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    category: "technology",
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: buildRobots(),
    icons: {
      icon: [{ url: "/icon", type: "image/png" }],
      apple: [{ url: "/apple-icon", type: "image/png" }],
    },
    manifest: siteConfig.manifestPath,
    openGraph: {
      title: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [image.url],
    },
  };
}

export function createSiteSchemas(): JsonLdObject[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      alternateName: "Globe Technologies Ltd.",
      url: siteConfig.url,
      logo: resolveUrl(siteConfig.logoPath),
      description: siteConfig.description,
      email: contactInfo.email,
      telephone: contactInfo.phone,
      // TODO: add official social profile URLs when they are published.
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: contactInfo.email,
        telephone: contactInfo.phone,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
  ];
}

export function getSitemapEntries(): MetadataRoute.Sitemap {
  return Object.values(pageDefinitions).map((definition) => ({
    url: resolveUrl(definition.pathname),
    lastModified: new Date(),
    changeFrequency: definition.changeFrequency,
    priority: definition.priority,
  }));
}
