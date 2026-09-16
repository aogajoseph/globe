import type { Metadata } from "next";

import BlogPost from "../../../components/layout/blog-post";

import { akibaBlogpostContent } from "../../../content/blogposts/akiba-shared-finance";

import {
  createBlogPostMetadata,
  createBlogPostStructuredData,
} from "../../../lib/seo";

const pathname =
  "/blogposts/akiba-shared-finance";

export const metadata: Metadata = createBlogPostMetadata(
  akibaBlogpostContent,
  pathname,
);

export default function BuildingGlobeBlogpostPage() {
  const structuredData = createBlogPostStructuredData(
    akibaBlogpostContent,
    pathname,
  );

  return (
    <>
      <BlogPost content={akibaBlogpostContent} />

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