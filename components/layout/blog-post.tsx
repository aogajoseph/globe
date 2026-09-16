import type { BlogPostBlock, BlogPostContent } from "@/types/content";

type BlogPostProps = {
  content: BlogPostContent;
};

function renderBlock(block: BlogPostBlock, index: number) {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={`paragraph-${index}`}>
          {block.text}
        </p>
      );

    case "image":
      return (
        <figure key={`image-${index}`}>
          <img
            src={block.src}
            alt={block.alt ?? ""}
          />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );

    case "quote":
      return (
        <blockquote key={`quote-${index}`}>
          <p>{block.text}</p>
          {block.attribution && (
            <cite>— {block.attribution}</cite>
          )}
        </blockquote>
      );

    default:
      return null;
  }
}

export default function BlogPost({ content }: BlogPostProps) {
  const { metadata } = content;

  return (
    <article className="blog-post">
      <header className="blog-post__header">
        {content.eyebrow && (
          <p className="blog-post__eyebrow">
            {content.eyebrow}
          </p>
        )}

        <h1 className="blog-post__title">
          {content.title}
        </h1>

        {content.intro && (
          <p className="blog-post__intro">
            {content.intro}
          </p>
        )}

        <div className="blog-post__metadata">
          <span>{metadata.author}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={metadata.publishedAt}>
            {new Date(metadata.publishedAt).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            )}
          </time>

          {metadata.readTime && (
            <>
              <span aria-hidden="true">·</span>
              <span>{metadata.readTime}</span>
            </>
          )}
        </div>

        {metadata.tags && metadata.tags.length > 0 && (
          <div className="blog-post__tags" aria-label="Tags">
            {metadata.tags.map((tag) => (
              <span key={tag} className="blog-post__tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {content.heroImage && (
          <figure className="blog-post__hero">
            <img
              src={content.heroImage}
              alt={content.title}
            />
          </figure>
        )}
      </header>

      <div className="blog-post__body">
        {content.blocks.map(renderBlock)}
      </div>

      {metadata.tags && metadata.tags.length > 0 && (
        <footer className="blog-post__footer">
          <div className="blog-post__tags" aria-label="Tags">
            {metadata.tags.map((tag) => (
              <span key={tag} className="blog-post__tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="blog-post__byline">
            <span>{metadata.author}</span>
            <time dateTime={metadata.publishedAt}>
              {new Date(metadata.publishedAt).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              )}
            </time>
          </div>
        </footer>
      )}

      {content.related && content.related.length > 0 && (
        <section className="blog-post__related" aria-labelledby="related-heading">
          <h2 id="related-heading">Related Pages</h2>

          <div className="blog-post__related-grid">
            {content.related.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="blog-post__related-card"
              >
                <span>{link.label}</span>

                {link.description && (
                  <p>{link.description}</p>
                )}
              </a>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}