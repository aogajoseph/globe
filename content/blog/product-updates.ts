import type { PageContent } from "../../types/content";

export const productUpdatesCategoryContent: PageContent = {
eyebrow: "Blog",
title: "Product Updates",
intro:
"Updates on Globe Technologies' products and intellectual properties, covering development, progress, releases and significant changes.",

sections: [
{
title: "Latest Updates",
cards: [
{
title: "Akiba: Building a Better Way for Groups to Manage Shared Money",
description:
"An introduction to Akiba and the problem it is designed to solve for groups coordinating contributions, goals and shared finances.",
href: "/blog/product/akiba-shared-finance",
},
],
},

{
  title: "About Product Updates",
  paragraphs: [
    "Product Updates document the development of Globe Technologies' products and intellectual properties. They provide a record of new products, development progress, releases, improvements and other changes as the company's work evolves.",
  ],
},

],

related: [
{
label: "Company News",
href: "/blog/company-news",
description:
"Read announcements and developments from across Globe Technologies.",
},
{
label: "Press Releases",
href: "/blog/press-releases",
description:
"Read official announcements from Globe Technologies.",
},
{
label: "Events",
href: "/blog/events",
description:
"Explore events, discussions and activities involving Globe Technologies.",
},
],
};