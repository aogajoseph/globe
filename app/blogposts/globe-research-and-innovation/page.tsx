import type { Metadata } from "next";

import BlogPost from "../../../components/layout/blog-post";

import { globeResearchBlogpostContent } from "../../../content/blogposts/globe-research-and-innovation";

import {
  createBlogPostMetadata,
  createBlogPostStructuredData,
} from "../../../lib/seo";

const pathname =
  "/blogposts/globe-research-and-innovation";

export const metadata: Metadata = createBlogPostMetadata(
  globeResearchBlogpostContent,
  pathname,
);

export default function BuildingGlobeBlogpostPage() {
  const structuredData = createBlogPostStructuredData(
    globeResearchBlogpostContent,
    pathname,
  );

  return (
    <>
      <BlogPost content={globeResearchBlogpostContent} />

      {structuredData.map((schema, index) => (
        <script
          key={`blogpost-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}