"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { navigationGroups, primaryNavigation } from "../../lib/site";
import { cn } from "../../lib/utils";
import { Container } from "./container";

type NavigationGroup = (typeof navigationGroups)[number];

const homeLink = primaryNavigation[0];
const researchLink = primaryNavigation[5];
const contactLink = primaryNavigation[6];

function DesktopDropdown({
  group,
  isOpen,
  onOpen,
  onClose,
  panelRef,
  onKeyboardOpen,
  pathname,
}: {
  group: NavigationGroup;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  panelRef: (node: HTMLDivElement | null) => void;
  onKeyboardOpen: (direction?: "first" | "last") => void;
  pathname: string;
}) {
  const menuId = useId();
  const isGroupActive =
    pathname === group.href ||
    group.children.some(
      (child) => pathname === child.href || pathname.startsWith(`${child.href}/`),
    );

  return (
    <div
      className="relative flex items-stretch"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocusCapture={onOpen}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          onClose();
        }
      }}
    >
      <button
        type="button"
        className={cn(
          "inline-flex items-center gap-1 rounded-full px-4 py-2 text-small font-medium transition-colors",
          isOpen || isGroupActive
            ? "bg-[rgb(var(--color-primary))] text-white"
            : "text-[rgb(var(--color-secondary))] hover:bg-[rgb(var(--color-primary-soft))] hover:text-[rgb(var(--color-primary))]",
        )}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => (isOpen ? onClose() : onOpen())}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            onClose();
            return;
          }

          if (event.key === "ArrowDown") {
            event.preventDefault();
            onOpen();
            onKeyboardOpen("first");
            return;
          }

          if (event.key === "ArrowUp") {
            event.preventDefault();
            onOpen();
            onKeyboardOpen("last");
          }
        }}
      >
        {group.label}
      </button>

      <div
        id={menuId}
        ref={panelRef}
        className={cn(
          "absolute left-0 top-full z-50 min-w-[11rem] transition-opacity duration-150 ease-out motion-reduce:transition-none",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-label={group.label}
      >
        <div className="border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">
          <div className="divide-y divide-[rgb(var(--color-border))]">
            {group.children.map((child) => {
              const isChildActive = pathname === child.href;

              return (
                <Link
                  key={child.href}
                  href={child.href}
                  className={cn(
                    "block px-3 py-1.5 text-[0.8125rem] leading-5 text-[rgb(var(--color-secondary))] transition-colors",
                    isChildActive
                      ? "bg-[rgb(var(--color-primary-soft))] font-medium text-[rgb(var(--color-primary))]"
                      : "hover:bg-[rgb(var(--color-primary-soft))] hover:text-[rgb(var(--color-primary))]",
                  )}
                >
                  {child.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  group,
  isOpen,
  onToggle,
  pathname,
}: {
  group: NavigationGroup;
  isOpen: boolean;
  onToggle: () => void;
  pathname: string;
}) {
  const sectionId = useId();
  const isGroupActive =
    pathname === group.href ||
    group.children.some(
      (child) => pathname === child.href || pathname.startsWith(`${child.href}/`),
    );

  return (
    <div className="border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]">
      <button
        type="button"
        className={cn(
          "flex w-full items-center justify-between border-b border-[rgb(var(--color-border))] px-4 py-3 text-left text-small font-semibold transition-colors",
          isGroupActive
            ? "bg-[rgb(var(--color-primary-soft))] text-[rgb(var(--color-primary))]"
            : "text-[rgb(var(--color-secondary))] hover:bg-[rgb(var(--color-primary-soft))] hover:text-[rgb(var(--color-primary))]",
        )}
        aria-expanded={isOpen}
        aria-controls={sectionId}
        onClick={onToggle}
      >
        {group.label}
      </button>

      <div
        id={sectionId}
        className={cn(
          "grid overflow-hidden transition-all duration-200 motion-reduce:transition-none",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 divide-y divide-[rgb(var(--color-border))]">
          <Link
            href={group.href}
            className={cn(
              "block px-4 py-2 text-[0.8125rem] leading-5 transition-colors",
              pathname === group.href
                ? "bg-[rgb(var(--color-primary-soft))] font-medium text-[rgb(var(--color-primary))]"
                : "text-[rgb(var(--color-secondary))] hover:bg-[rgb(var(--color-primary-soft))] hover:text-[rgb(var(--color-primary))]",
            )}
          >
            {group.label}
          </Link>
          {group.children.map((child) => {
            const isChildActive = pathname === child.href;

            return (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "block px-4 py-2 text-[0.8125rem] leading-5 transition-colors",
                  isChildActive
                    ? "bg-[rgb(var(--color-primary-soft))] font-medium text-[rgb(var(--color-primary))]"
                    : "text-[rgb(var(--color-secondary))] hover:bg-[rgb(var(--color-primary-soft))] hover:text-[rgb(var(--color-primary))]",
                )}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const openMenuTimerRef = useRef<number | null>(null);
  const desktopPanelRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSectionsOpen, setMobileSectionsOpen] = useState<Record<string, boolean>>({});

  const clearOpenTimer = () => {
    if (openMenuTimerRef.current !== null) {
      window.clearTimeout(openMenuTimerRef.current);
      openMenuTimerRef.current = null;
    }
  };

  const openDesktopGroup = (label: string) => {
    clearOpenTimer();
    setOpenGroup(label);
  };

  const closeDesktopGroup = () => {
    clearOpenTimer();
    openMenuTimerRef.current = window.setTimeout(() => {
      setOpenGroup(null);
    }, 120);
  };

  const toggleMobileSection = (label: string) => {
    setMobileSectionsOpen((current) => ({
      ...current,
      [label]: !current[label],
    }));
  };

  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
    setMobileSectionsOpen({});
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen && !openGroup) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    }

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenGroup(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      if (mobileOpen) {
        document.body.style.overflow = previousOverflow;
      }
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [mobileOpen, openGroup]);

  useEffect(() => {
    return () => {
      clearOpenTimer();
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-40 overflow-visible border-b border-[rgb(var(--color-border))]/80 bg-[rgb(var(--color-surface))]/90 backdrop-blur"
      >
        <Container className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/logo.png"
              alt="Globe Technologies Logo"
              width={260}
              height={71}
              priority
              className="h-16 w-auto"
            />
          </Link>

          <nav className="hidden items-stretch gap-1 overflow-visible lg:flex" aria-label="Primary">
            <Link
              href={homeLink.href}
              className={cn(
                "inline-flex items-center rounded-full px-4 py-2 text-small font-medium transition-colors",
                pathname === homeLink.href
                  ? "bg-[rgb(var(--color-primary))] text-white"
                  : "text-[rgb(var(--color-secondary))] hover:bg-[rgb(var(--color-primary-soft))] hover:text-[rgb(var(--color-primary))]",
              )}
            >
              {homeLink.label}
            </Link>

            {navigationGroups.map((group) => {
              const isOpen = openGroup === group.label;
              return (
                <DesktopDropdown
                  key={group.label}
                  group={group}
                  isOpen={isOpen}
                  pathname={pathname}
                  onOpen={() => openDesktopGroup(group.label)}
                  onClose={closeDesktopGroup}
                  panelRef={(node) => {
                    desktopPanelRefs.current[group.label] = node;
                  }}
                  onKeyboardOpen={(direction = "first") => {
                    window.requestAnimationFrame(() => {
                      const panelRef = desktopPanelRefs.current[group.label];
                      if (panelRef) {
                        const links = Array.from(
                          panelRef.querySelectorAll<HTMLElement>(
                            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
                          ),
                        ).filter((element) => !element.hasAttribute("disabled"));
                        const target = direction === "last" ? links.at(-1) : links[0];
                        target?.focus();
                      }
                    });
                  }}
                />
              );
            })}

            <Link
              href={researchLink.href}
              className={cn(
                "inline-flex items-center rounded-full px-4 py-2 text-small font-medium transition-colors",
                pathname === researchLink.href || pathname.startsWith(`${researchLink.href}/`)
                  ? "bg-[rgb(var(--color-primary))] text-white"
                  : "text-[rgb(var(--color-secondary))] hover:bg-[rgb(var(--color-primary-soft))] hover:text-[rgb(var(--color-primary))]",
              )}
            >
              {researchLink.label}
            </Link>

            <Link
              href={contactLink.href}
              className={cn(
                "inline-flex items-center rounded-full px-4 py-2 text-small font-medium transition-colors",
                pathname === contactLink.href || pathname.startsWith(`${contactLink.href}/`)
                  ? "bg-[rgb(var(--color-primary))] text-white"
                  : "text-[rgb(var(--color-secondary))] hover:bg-[rgb(var(--color-primary-soft))] hover:text-[rgb(var(--color-primary))]",
              )}
            >
              {contactLink.label}
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] text-[rgb(var(--color-primary))] lg:hidden"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
      </header>

      <div 
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-[rgb(var(--color-background))] px-6 py-8 transition-transform duration-300 motion-reduce:transition-none lg:hidden",
          mobileOpen ? "translate-x-0" : "pointer-events-none translate-x-full",
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="text-small font-semibold tracking-[0.18em] uppercase text-[rgb(var(--color-primary))]">
            Navigation
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="rounded-full border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] p-3 text-[rgb(var(--color-primary))]"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-4 overflow-y-auto" aria-label="Mobile primary">
          <Link
            href={homeLink.href}
            className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] px-5 py-4 text-h3"
          >
            {homeLink.label}
          </Link>

          {navigationGroups.map((group) => (
            <MobileAccordion
              key={group.label}
              group={group}
              isOpen={Boolean(mobileSectionsOpen[group.label])}
              pathname={pathname}
              onToggle={() => toggleMobileSection(group.label)}
            />
          ))}

          <Link
            href={researchLink.href}
            className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] px-5 py-4 text-h3"
          >
            {researchLink.label}
          </Link>

          <Link
            href={contactLink.href}
            className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] px-5 py-4 text-h3"
          >
            {contactLink.label}
          </Link>
        </nav>
      </div>
    </>
  );
}
