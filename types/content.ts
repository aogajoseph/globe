export type RelatedLink = {
    label: string;
    href: string;
    description?: string;
  };
  
  export type PageCard = {
    title: string;
    description: string;
    href?: string;
  };
  
  export type PageContentSection = {
    type?: "content";
    id?: string;
    title: string;
    description?: string;
    paragraphs?: string[];
    items?: string[];
    cards?: PageCard[];
  };
  
  export type PageImageVariant = "panoramic" | "editorial" | "feature";
  
  export type PageImageSection = {
    type: "image";
    id?: string;
    src: string;
    alt?: string;
    caption?: string;
    variant?: PageImageVariant;
    fullBleed?: boolean;
  };
  
  export type PageSection = PageContentSection | PageImageSection;
  
  export function isPageImageSection(
    section: PageSection,
    ): section is PageImageSection {
    return section.type === "image";
  }
  
  export type PageContent = {
    eyebrow?: string;
    title: string;
    intro?: string;
    heroImage?: string;
    sections: PageSection[];
    related?: RelatedLink[];
    cta?: RelatedLink & {
      description?: string;
    };
  };
  
  /* Blog */
  
  export type BlogCategory =
  | "Company News"
  | "Product Updates"
  | "Press Releases"
  | "Events";
  
  export type BlogPostMetadata = {
    publishedAt: string;
    author: string;
    category: BlogCategory;
    readTime?: string;
    tags?: string[];
  };
  
  export type BlogPostParagraph = {
    type: "paragraph";
    text: string;
  };
  
  export type BlogPostImage = {
    type: "image";
    src: string;
    alt?: string;
    caption?: string;
  };
  
  export type BlogPostQuote = {
    type: "quote";
    text: string;
    attribution?: string;
  };
  
  export type BlogPostBlock =
  | BlogPostParagraph
  | BlogPostImage
  | BlogPostQuote;
  
  export type BlogPostContent = {
    eyebrow?: string;
    title: string;
    intro?: string;
    heroImage?: string;
    metadata: BlogPostMetadata;
    blocks: BlogPostBlock[];
    related?: RelatedLink[];
  };
  