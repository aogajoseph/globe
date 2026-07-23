import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { contactInfo } from "../../lib/contact-info";
import { footerNavigation, primaryNavigation } from "../../lib/site";
import { Container } from "./container";

function isHttpUrl(value: string): boolean {
  return value.startsWith("http://") || value.startsWith("https://");
}

export function Footer() {
  const socialLinks = [
    { href: contactInfo.social.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: contactInfo.social.facebook, label: "Facebook", icon: Facebook },
    { href: contactInfo.social.x, label: "X", icon: Twitter },
    { href: contactInfo.social.youtube, label: "YouTube", icon: Youtube },
  ].filter((link) => isHttpUrl(link.href));

  return (
    <footer className="border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">
      <Container className="py-16">
        <div className="mb-14 border-b border-[rgb(var(--color-border))] pb-8 text-center">
          <p className="text-caption font-semibold uppercase tracking-[0.24em] text-[rgb(var(--color-primary))]">
            Purpose • Excellence • Stewardship
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Company" className="space-y-3">
            <div>
              <Image
                src="/logos/logo.png"
                alt="Globe Technologies"
                width={160}
                height={80}
                className="-ml-8 -mt-8 block h-auto w-52"
              />

              <h2 className="mt-2 text-md font-semibold tracking-tight text-[rgb(var(--color-primary))]">
                Inventing the Future.
              </h2>

              <p className="mt-2 max-w-sm text-body leading-relaxed text-[rgb(var(--color-primary))]">
                Researching, developing and delivering innovative solutions that
                contribute to a better future.
              </p>
            </div>
          </nav>

          <nav aria-label="Explore" className="space-y-4">
            <h3 className="text-caption font-semibold uppercase tracking-wider text-[rgb(var(--color-muted))]">
              Explore
            </h3>

            <div className="flex flex-col gap-2">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-small transition-colors hover:text-[rgb(var(--color-primary))]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Featured" className="space-y-4">
            <h3 className="text-caption font-semibold uppercase tracking-wider text-[rgb(var(--color-muted))]">
              Featured
            </h3>

            <div className="flex flex-col gap-2">
              {footerNavigation.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-small transition-colors hover:text-[rgb(var(--color-primary))]"
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-2 border-t border-[rgb(var(--color-border))]" />

              <Link
                href="/products/akiba"
                className="text-small transition-colors hover:text-[rgb(var(--color-primary))]"
              >
                Akiba
              </Link>

              <Link
                href="/projects/addam"
                className="text-small transition-colors hover:text-[rgb(var(--color-primary))]"
              >
                Addam
              </Link>
            </div>
          </nav>

          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-caption font-semibold uppercase tracking-wider text-[rgb(var(--color-muted))]">
                Get in Touch
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[rgb(var(--color-muted))]" />
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="text-small transition-colors hover:text-[rgb(var(--color-primary))]"
                  >
                    {contactInfo.email}
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[rgb(var(--color-muted))]" />
                  <Link
                    href={`tel:${contactInfo.phone}`}
                    className="text-small transition-colors hover:text-[rgb(var(--color-primary))]"
                  >
                    {contactInfo.phone}
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-[rgb(var(--color-muted))]" />
                  <Link
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                    className="text-small transition-colors hover:text-[rgb(var(--color-primary))]"
                  >
                    {contactInfo.whatsapp}
                  </Link>
                </div>
              </div>
            </div>

            {socialLinks.length ? (
              <div className="space-y-4">
                <h3 className="text-caption font-semibold uppercase tracking-wider text-[rgb(var(--color-muted))]">
                  Connect
                </h3>

                <div className="flex items-center gap-5">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        className="transition-colors hover:text-[rgb(var(--color-primary))]"
                      >
                        <Icon size={20} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[rgb(var(--color-border))] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-small text-[rgb(var(--color-muted))]">
            ©{new Date().getFullYear()} Globe Technologies Ltd. All rights reserved.
          </p>

          <p className="text-small text-[rgb(var(--color-muted))]">Version: 1.0.0</p>
        </div>
      </Container>
    </footer>
  );
}
