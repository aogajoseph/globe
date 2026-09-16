import type { Metadata } from "next";

import BlogPost from "../../../components/layout/blog-post";

import { globeIPsBlogpostContent } from "../../../content/blogposts/globe-intellectual-property-portfolio";

import {
  createBlogPostMetadata,
  createBlogPostStructuredData,
} from "../../../lib/seo";

const pathname =
  "/blogposts/globe-intellectual-property-portfolio";

export const metadata: Metadata = createBlogPostMetadata(
  globeIPsBlogpostContent,
  pathname,
);

export default function BuildingGlobeBlogpostPage() {
  const structuredData = createBlogPostStructuredData(
    globeIPsBlogpostContent,
    pathname,
  );

  return (
    <>
      <BlogPost content={globeIPsBlogpostContent} />

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