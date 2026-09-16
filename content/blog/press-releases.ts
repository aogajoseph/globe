import type { PageContent } from "../../types/content";

export const pressReleasesCategoryContent: PageContent = {
eyebrow: "Blog",
title: "Press Releases",
intro:
"Official communication and announcements from Globe Technologies, covering significant company developments, initiatives and intellectual properties.",

sections: [
{
title: "Latest Press Releases",
cards: [
{
title: "Globe Technologies Announces Its Current Intellectual Property Portfolio",
description:
"An overview of Globe Technologies' current intellectual property portfolio, including Akiba, Addam and Research Publications.",
href: "/blog/press/globe-intellectual-property-portfolio",
},
],
},

{
  title: "About Press Releases",
  paragraphs: [
    "Press Releases provide formal announcements from Globe Technologies. They document significant developments, initiatives, launches and other information the company formally communicates to its audiences.",
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
label: "Product Updates",
href: "/blog/product-updates",
description:
"Follow updates on Globe's products and intellectual properties.",
},
{
label: "Events",
href: "/blog/events",
description:
"Explore events, discussions and activities involving Globe Technologies.",
},
],
};
