import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Globe Technologies",
    template: "%s | Globe Technologies",
  },
  description:
    "Official institutional website foundation for Globe Technologies.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
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
