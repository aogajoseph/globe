# SEO Architecture

This project uses the Next.js App Router metadata system as the primary SEO layer.

## Core Principles

- Keep metadata close to the route that owns the content.
- Avoid duplicated title, description, canonical, Open Graph and Twitter logic.
- Use a single site configuration source for brand name, origin and shared defaults.
- Generate structured data from reusable helpers instead of hand-writing scripts per page.

## `lib/seo.ts`

`lib/seo.ts` is the shared SEO utility for the site.

It provides:

- typed metadata factories for each public route
- a shared root metadata factory
- canonical URL generation from `NEXT_PUBLIC_SITE_URL`
- Open Graph and Twitter metadata
- robots directives
- icon and manifest references
- JSON-LD helpers for page-level structured data
- sitemap entry generation

## Metadata Conventions

- Home uses an absolute title of `Globe Technologies`.
- All other public pages use a route-specific title with the global title template.
- Every public page gets:
  - a unique title
  - a unique description
  - a canonical URL
  - Open Graph metadata
  - Twitter/X card metadata
  - robots directives

Descriptions are kept concise and under 160 characters.

## Structured Data

JSON-LD is rendered from reusable helpers and injected by the route shell.

Implemented schema types:

- Organization
- WebSite
- WebPage
- AboutPage
- ContactPage
- BreadcrumbList
- SoftwareApplication for Akiba
- CreativeWork for Addam

## Robots and Sitemap

- `app/robots.ts` allows the full public site and declares the sitemap location.
- `app/sitemap.ts` is generated from the canonical route registry in `lib/seo.ts`.

## Icons and Manifest

- `app/icon.tsx` provides the primary app icon.
- `app/apple-icon.tsx` provides the Apple touch icon.
- `app/manifest.ts` defines the web manifest and theme color.

## AI Search Readiness

- `public/llms.txt` provides a concise site summary for AI systems.
- `public/llms-full.txt` provides a fuller factual map of the public site.

## Adding SEO to a New Page

1. Add the new route to `lib/seo.ts`.
2. Define the route title, description, canonical path, image and breadcrumb trail.
3. Export `metadata` from the route file using `createPageMetadata(...)`.
4. Pass `createPageStructuredData(...)` into `CompanyPage` when the route uses that shell.
5. Verify the sitemap includes the new route.

## Open Graph Image Strategy

- Prefer a page-relevant public image when one already exists.
- Use a consistent 1200x630 presentation target in metadata.
- Keep the image choice aligned with the page topic and avoid inventing new marketing art.

## Deployment Notes

- Set `NEXT_PUBLIC_SITE_URL` in production to the final canonical domain.
- Run linting and build validation before release.

