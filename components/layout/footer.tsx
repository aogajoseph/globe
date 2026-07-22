import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

import { Container } from "./container";
import {
  footerNavigation,
  primaryNavigation,
} from "../../lib/site";
import { contactInfo } from "../../lib/contact-info";

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">
      <Container className="py-16">
        
        {/* Brand */}
        <div className="mb-14 border-b border-[rgb(var(--color-border))] pb-8 text-center">
          <p className="text-caption font-semibold uppercase tracking-[0.24em] text-[rgb(var(--color-primary))]">
            Purpose • Excellence • Stewardship
          </p>
        </div>

        {/* Footer Grid */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <nav
            aria-label="Company"
            className="space-y-3"
          >
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
          
          {/* Explore */}

          <nav
            aria-label="Explore"
            className="space-y-4"
          >
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

          {/* Featured  */}

          <nav
            aria-label="Featured"
            className="space-y-4"
          >

            <h3 className="text-caption font-semibold uppercase tracking-wider text-[rgb(var(--color-muted))]">
              Featured 
            </h3>

            <div className="flex flex-col gap-2">

              <Link 
                href="/company/leadership" 
                className="text-small transition-colors hover:text-[rgb(var(--color-primary))]">
                  Leadership
              </Link>

              <Link 
                href="/company/governance"
                className="text-small transition-colors hover:text-[rgb(var(--color-primary))]">
                  Governance
              </Link>

              <Link 
                href="/company/constitution"
                className="text-small transition-colors hover:text-[rgb(var(--color-primary))]">
                  Constitution
              </Link>

              <Link 
                href="/company/company-profile"
                className="text-small transition-colors hover:text-[rgb(var(--color-primary))]">
                  Profile
              </Link>

              <div className="my-2 border-t border-[rgb(var(--color-border))]" />

              <Link 
                href="/products/akiba"
                className="text-small transition-colors hover:text-[rgb(var(--color-primary))]">
                  Akiba
              </Link>

              <Link 
                href="/projects/addam"
                className="text-small transition-colors hover:text-[rgb(var(--color-primary))]">
                  Addam
              </Link>

            </div>

          </nav>

          {/* Get in Touch */}

          <div className="space-y-10">

            {/* Contact Details */}

            <div className="space-y-4">

              <h3 className="text-caption font-semibold uppercase tracking-wider text-[rgb(var(--color-muted))]">
                Get in Touch
              </h3>

              <div className="space-y-3">

                <div className="flex items-center gap-3">
                  <Mail
                    size={18}
                    className="text-[rgb(var(--color-muted))]"
                  />

                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="text-small transition-colors hover:text-[rgb(var(--color-primary))]"
                  >
                    info@globetechnologies.com
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <Phone
                    size={18}
                    className="text-[rgb(var(--color-muted))]"
                  />

                  <Link
                    href={`tel:${contactInfo.phone}`}
                    className="text-small transition-colors hover:text-[rgb(var(--color-primary))]"
                  >
                    +254 725 406 004
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle
                    size={18}
                    className="text-[rgb(var(--color-muted))]"
                  />

                  <Link
                    href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                    className="text-small transition-colors hover:text-[rgb(var(--color-primary))]"
                  >
                    +254 725 406 004
                  </Link>
                </div>

              </div>

            </div>

            {/* Social Media */}

            <div className="space-y-4">

              <h3 className="text-caption font-semibold uppercase tracking-wider text-[rgb(var(--color-muted))]">
                Connect
              </h3>

              <div className="flex items-center gap-5">

                <Link
                  href={contactInfo.social.linkedin}
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-[rgb(var(--color-primary))]"
                >
                  <Linkedin size={20} />
                </Link>

                <Link
                  href={contactInfo.social.facebook}
                  aria-label="Facebook"
                  className="transition-colors hover:text-[rgb(var(--color-primary))]"
                >
                  <Facebook size={20} />
                </Link>

                <Link
                  href={contactInfo.social.x}
                  aria-label="X"
                  className="transition-colors hover:text-[rgb(var(--color-primary))]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M18.901 2H22l-6.77 7.737L23.2 22h-6.243l-4.89-6.406L6.46 22H3.36l7.237-8.27L.8 2h6.4l4.42 5.842L18.9 2Z" />
                  </svg>
                </Link>

                <Link
                  href={contactInfo.social.youtube}
                  aria-label="YouTube"
                  className="transition-colors hover:text-[rgb(var(--color-primary))]"
                >
                  <Youtube size={20} />
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col gap-4 border-t border-[rgb(var(--color-border))] pt-8 md:flex-row md:items-center md:justify-between">

          <p className="text-small text-[rgb(var(--color-muted))]">
            ©{new Date().getFullYear()} Globe Technologies Ltd. All rights
            reserved.
          </p>

          <p className="text-small text-[rgb(var(--color-muted))]">
            Version: 1.0.0
          </p>

        </div>

      </Container>
    </footer>
  );
}