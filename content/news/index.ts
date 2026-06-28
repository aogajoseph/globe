import type { PageContent } from "../../types/content";

export const newsLandingContent: PageContent = {
  eyebrow: "News",
  title: "News and Updates",
  intro:
    "A static news architecture designed so a future CMS can replace the content layer with minimal restructuring.",
  sections: [
    {
      title: "News Areas",
      cards: [
        {
          title: "Company News",
          description: "Company-wide announcements and updates.",
          href: "/news/company-news",
        },
        {
          title: "Product Updates",
          description: "Release and product-related updates.",
          href: "/news/product-updates",
        },
        {
          title: "Press Releases",
          description: "Formal external communications.",
          href: "/news/press-releases",
        },
        {
          title: "Events",
          description: "Events, appearances, and company gatherings.",
          href: "/news/events",
        },
      ],
    },
  ],
  related: [
    { label: "Research", href: "/research" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ],
};

export const newsCategoryContent = {
  companyNews: {
    eyebrow: "News",
    title: "Company News",
    intro: "Static placeholder space for Globe Technologies company news.",
    sections: [
      { title: "Latest Updates", paragraphs: ["Future company news items will appear here."] },
    ],
    related: [
      { label: "News Landing Page", href: "/news" },
      { label: "Product Updates", href: "/news/product-updates" },
      { label: "Press Releases", href: "/news/press-releases" },
    ],
  } as PageContent,
  productUpdates: {
    eyebrow: "News",
    title: "Product Updates",
    intro: "Static placeholder space for product release updates.",
    sections: [
      { title: "Release Notes", paragraphs: ["Future product update entries will appear here."] },
    ],
    related: [
      { label: "News Landing Page", href: "/news" },
      { label: "Company News", href: "/news/company-news" },
      { label: "Events", href: "/news/events" },
    ],
  } as PageContent,
  pressReleases: {
    eyebrow: "News",
    title: "Press Releases",
    intro: "Static placeholder space for formal press communications.",
    sections: [
      { title: "Official Statements", paragraphs: ["Future press releases will appear here."] },
    ],
    related: [
      { label: "News Landing Page", href: "/news" },
      { label: "Company News", href: "/news/company-news" },
      { label: "Events", href: "/news/events" },
    ],
  } as PageContent,
  events: {
    eyebrow: "News",
    title: "Events",
    intro: "Static placeholder space for events and company appearances.",
    sections: [
      { title: "Upcoming and Past Events", paragraphs: ["Future event listings will appear here."] },
    ],
    related: [
      { label: "News Landing Page", href: "/news" },
      { label: "Company News", href: "/news/company-news" },
      { label: "Product Updates", href: "/news/product-updates" },
    ],
  } as PageContent,
};
