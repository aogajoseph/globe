import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";
import { createRootMetadata, createSiteSchemas } from "../lib/seo";
import "./globals.css";

export const metadata: Metadata = createRootMetadata();
export const viewport: Viewport = {
  themeColor: "#0f172a",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const siteSchemas = createSiteSchemas();

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {siteSchemas.map((schema, index) => (
          <Script
            key={`${schema["@type"]}-${index}`}
            id={`site-schema-${index}`}
            type="application/ld+json"
            strategy="afterInteractive"
          >
            {JSON.stringify(schema)}
          </Script>
        ))}
        <div className="flex min-h-dvh flex-col bg-[rgb(var(--color-background))] text-[rgb(var(--color-foreground))]">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
