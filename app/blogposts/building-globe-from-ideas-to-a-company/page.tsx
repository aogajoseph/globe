import type { Metadata } from "next";

import BlogPost from "../../../components/layout/blog-post";

import { buildingGlobeBlogpostContent } from "../../../content/blogposts/building-globe-from-ideas-to-a-company";

import {
  createBlogPostMetadata,
  createBlogPostStructuredData,
} from "../../../lib/seo";

const pathname =
  "/blogposts/building-globe-from-ideas-to-a-company";

export const metadata: Metadata = createBlogPostMetadata(
  buildingGlobeBlogpostContent,
  pathname,
);

export default function BuildingGlobeBlogpostPage() {
  const structuredData = createBlogPostStructuredData(
    buildingGlobeBlogpostContent,
    pathname,
  );

  return (
    <>
      <BlogPost content={buildingGlobeBlogpostContent} />

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