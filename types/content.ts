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

export type PageSection = {
  id?: string;
  title: string;
  description?: string;
  paragraphs?: string[];
  items?: string[];
  cards?: PageCard[];
};

export type PageContent = {
  eyebrow?: string;
  title: string;
  intro?: string;
  sections: PageSection[];
  related?: RelatedLink[];
  cta?: RelatedLink & {
    description?: string;
  };
};
