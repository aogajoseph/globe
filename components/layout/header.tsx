"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Menu, X } from "lucide-react";
import {
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

import {
  contactLink,
  navigationGroups,
  primaryNavigation,
  type NavigationChild,
} from "../../lib/site";
import { cn } from "../../lib/utils";
import { Container } from "./container";

type NavigationGroup = (typeof navigationGroups)[number];

const homeLink = primaryNavigation.find((item) => item.label === "Home")!;
const blogLink = primaryNavigation.find((item) => item.label === "Blog")!;

const desktopNavItemClass = (isActive: boolean) =>
  cn(
    "flex h-full items-center px-4 text-small font-medium transition-colors",
    isActive
      ? "bg-[rgb(var(--color-primary-soft))] text-[rgb(var(--color-primary))]"
      : "text-[rgb(var(--color-secondary))] hover:bg-[rgb(var(--color-primary-soft))] hover:text-[rgb(var(--color-primary))]",
  );

const mobileTopLevelNavClass = (isActive: boolean) =>
  cn(
    "block w-full rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] px-5 py-4 text-left text-h3 transition-colors",
    isActive
      ? "bg-[rgb(var(--color-primary-soft))] text-[rgb(var(--color-primary))]"
      : "hover:bg-[rgb(var(--color-primary-soft))] hover:text-[rgb(var(--color-primary))]",
  );

function isNavigationItemActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopNavigationItems({
  items,
  pathname,
  depth = 0,
  enableFlyouts = false,
}: {
  items: readonly NavigationChild[];
  pathname: string;
  depth?: number;
  enableFlyouts?: boolean;
}) {
  return (
    <>
      {items.map((item) => {
        const isActive = isNavigationItemActive(pathname, item.href);
        const hasChildren =
          Boolean(item.children && item.children.length > 0);

        /*
         * IPs only:
         * Categories with children become hoverable flyout triggers.
         *
         * Software     → Akiba
         * Media        → Addam
         * Merchandise  → Globe Store
         */
        if (enableFlyouts && hasChildren) {
          return (
            <div
              key={item.href}
              className="group relative"
            >
              <Link
                href={item.href}
                role="menuitem"
                aria-haspopup="menu"
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex touch-manipulation items-center justify-between gap-4 border-b border-[rgb(var(--color-border))]/45 border-l-2 px-4 py-2.5 text-small leading-relaxed text-[rgb(var(--color-secondary))] transition-colors duration-200 ease-out last:border-b-0",
                  isActive
                    ? "border-l-[rgb(var(--color-primary))] bg-[rgb(var(--color-primary-soft))] font-medium text-[rgb(var(--color-primary))]"
                    : "border-l-transparent hover:bg-[rgb(var(--color-primary-soft))]/70 hover:text-[rgb(var(--color-primary))]",
                )}
              >
                <span>{item.label}</span>

                <ChevronRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0 text-[rgb(var(--color-secondary))]/45 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[rgb(var(--color-primary))]"
                  strokeWidth={1.75}
                />
              </Link>

              <div
                className="pointer-events-none absolute left-full top-0 z-[70] min-56 opacity-0 transition-all duration-150 ease-out group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100"
                role="menu"
                aria-label={item.label}
              >
                <div className="border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] shadow-[0_6px_20px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.03)]">
                  <div className="py-1">
                    {item.children?.map((child) => {
                      const childIsActive =
                        isNavigationItemActive(
                          pathname,
                          child.href,
                        );

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          aria-current={
                            childIsActive ? "page" : undefined
                          }
                          className={cn(
                            "block touch-manipulation whitespace-nowrap border-b border-[rgb(var(--color-border))]/45 border-l-2 px-4 py-2 text-small leading-relaxed text-[rgb(var(--color-secondary))] transition-colors duration-200 ease-out last:border-b-0",
                            childIsActive
                              ? "border-l-[rgb(var(--color-primary))] bg-[rgb(var(--color-primary-soft))] font-medium text-[rgb(var(--color-primary))]"
                              : "border-l-transparent hover:bg-[rgb(var(--color-primary-soft))]/70 hover:text-[rgb(var(--color-primary))]",
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

        /*
         * Existing behavior remains completely unchanged
         * for every other desktop navigation group.
         */
        return (
          <div key={item.href}>
            <Link
              href={item.href}
              role="menuitem"
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "block touch-manipulation border-b border-[rgb(var(--color-border))]/45 border-l-2 px-4 py-2.5 text-small leading-relaxed text-[rgb(var(--color-secondary))] transition-colors duration-200 ease-out last:border-b-0",
                depth > 0 && "pl-8",
                isActive
                  ? "border-l-[rgb(var(--color-primary))] bg-[rgb(var(--color-primary-soft))] font-medium text-[rgb(var(--color-primary))]"
                  : "border-l-transparent hover:bg-[rgb(var(--color-primary-soft))]/70 hover:text-[rgb(var(--color-primary))]",
              )}
            >
              {item.label}
            </Link>

            {hasChildren && (
              <DesktopNavigationItems
                items={item.children!}
                pathname={pathname}
                depth={depth + 1}
              />
            )}
          </div>
        );
      })}
    </>
  );
}

function MobileNavigationItems({
  items,
  pathname,
  depth = 0,
}: {
  items: readonly NavigationChild[];
  pathname: string;
  depth?: number;
}) {
  return (
    <>
      {items.map((item) => {
        const isActive = isNavigationItemActive(pathname, item.href);

        return (
          <div key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "block touch-manipulation px-5 py-3 text-[0.8125rem] leading-5 transition-colors",
                depth > 0 && "pl-9",
                isActive
                  ? "bg-[rgb(var(--color-primary-soft))] font-medium text-[rgb(var(--color-primary))]"
                  : "text-[rgb(var(--color-secondary))] hover:bg-[rgb(var(--color-primary-soft))] hover:text-[rgb(var(--color-primary))]",
              )}
            >
              {item.label}
            </Link>

            {item.children && item.children.length > 0 && (
              <MobileNavigationItems
                items={item.children}
                pathname={pathname}
                depth={depth + 1}
              />
            )}
          </div>
        );
      })}
    </>
  );
}

function DesktopDropdown({
  group,
  isOpen,
  onOpen,
  onClose,
  onCloseImmediate,
  panelRef,
  onKeyboardOpen,
  pathname,
  headerRef,
}: {
  group: NavigationGroup;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onCloseImmediate: () => void;
  panelRef: (node: HTMLDivElement | null) => void;
  onKeyboardOpen: (direction?: "first" | "last") => void;
  pathname: string;
  headerRef: RefObject<HTMLElement | null>;
}) {
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const internalPanelRef = useRef<HTMLDivElement | null>(null);

  const [submenuPosition, setSubmenuPosition] = useState({
    top: 0,
    left: 0,
  });

  const [opensAboveHeader, setOpensAboveHeader] = useState(false);

  const isGroupActive =
    pathname === group.href ||
    group.children.some((child) =>
      isNavigationItemActive(pathname, child.href),
    );

  useLayoutEffect(() => {
    if (!isOpen) {
      return;
    }

    const updatePosition = () => {
      const header = headerRef.current;
      const trigger = triggerRef.current;
      const panel = internalPanelRef.current;

      if (!header || !trigger || !panel) {
        return;
      }

      const headerRect = header.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();
      const panelHeight = panel.getBoundingClientRect().height;
      const viewportHeight = window.innerHeight;

      const belowTop = headerRect.bottom;
      const fitsBelow = belowTop + panelHeight <= viewportHeight;
      const aboveTop = headerRect.top - panelHeight;

      if (fitsBelow || aboveTop < 0) {
        setOpensAboveHeader(false);

        setSubmenuPosition({
          top: fitsBelow
            ? belowTop
            : Math.max(0, viewportHeight - panelHeight),
          left: triggerRect.left,
        });

        return;
      }

      setOpensAboveHeader(true);

      setSubmenuPosition({
        top: aboveTop,
        left: triggerRect.left,
      });
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [headerRef, isOpen, group.children.length]);

  return (
    <div
      className="relative flex h-full items-stretch"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocusCapture={onOpen}
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget as Node | null,
          )
        ) {
          onClose();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className={cn(
          desktopNavItemClass(isOpen || isGroupActive),
          "touch-manipulation",
        )}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => (isOpen ? onCloseImmediate() : onOpen())}
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
        ref={(node) => {
          internalPanelRef.current = node;
          panelRef(node);
        }}
        style={{
          top: submenuPosition.top,
          left: submenuPosition.left,
        }}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        className={cn(
          "fixed z-[60] hidden min-w-[13rem] transition-opacity duration-150 ease-out motion-reduce:transition-none lg:block",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-label={group.label}
        role="menu"
      >
        <div
          className={cn(
            "border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] shadow-[0_6px_20px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.03)]",
            opensAboveHeader
              ? "rounded-t-sm border-b-0"
              : "rounded-b-sm border-t-0",
          )}
        >
          <div className="py-1">
            <DesktopNavigationItems
              items={group.children}
              pathname={pathname}
              enableFlyouts={group.label === "IPs"}
            />
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
    group.children.some((child) =>
      isNavigationItemActive(pathname, child.href),
    );

  return (
    <div
      className={cn(
        "rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))]",
        isOpen ? "overflow-visible" : "overflow-hidden",
      )}
    >
      <button
        type="button"
        className={cn(
          mobileTopLevelNavClass(isGroupActive),
          "touch-manipulation rounded-none border-0",
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
          "grid transition-all duration-200 motion-reduce:transition-none",
          isOpen
            ? "grid-rows-[1fr] overflow-visible"
            : "grid-rows-[0fr] overflow-hidden",
        )}
      >
        <div className="min-h-0 divide-y divide-[rgb(var(--color-border))] border-t border-[rgb(var(--color-border))]">
          <MobileNavigationItems
            items={group.children}
            pathname={pathname}
          />
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();

  const headerRef = useRef<HTMLElement | null>(null);
  const openMenuTimerRef = useRef<number | null>(null);

  const desktopPanelRefs = useRef<
    Record<string, HTMLDivElement | null>
  >({});

  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [mobileSectionsOpen, setMobileSectionsOpen] = useState<
    Record<string, boolean>
  >({});

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

  const closeDesktopGroupImmediate = () => {
    clearOpenTimer();
    setOpenGroup(null);
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
      const target = event.target as Node;
      const mobileNavigation =
        document.getElementById("mobile-navigation");

      if (mobileOpen) {
        if (
          headerRef.current?.contains(target) ||
          mobileNavigation?.contains(target)
        ) {
          return;
        }

        setMobileOpen(false);
        return;
      }

      if (openGroup) {
        const openPanel = Object.values(
          desktopPanelRefs.current,
        ).find((panel) => panel?.contains(target));

        if (
          openPanel ||
          headerRef.current?.contains(target)
        ) {
          return;
        }

        setOpenGroup(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      if (mobileOpen) {
        document.body.style.overflow = previousOverflow;
      }

      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );
    };
  }, [mobileOpen, openGroup]);

  useEffect(() => {
    return () => {
      clearOpenTimer();
    };
  }, []);

  const blogIsActive = isNavigationItemActive(
    pathname,
    blogLink.href,
  );

  const contactIsActive = isNavigationItemActive(
    pathname,
    contactLink.href,
  );

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-40 overflow-visible border-b border-[rgb(var(--color-border))]/80 bg-[rgb(var(--color-surface))]/90 backdrop-blur"
      >
        <Container className="flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Globe Technologies home"
          >
            <Image
              src="/logos/logo.png"
              alt="Globe Technologies"
              width={260}
              height={71}
              priority
              className="h-16 w-auto"
            />
          </Link>

          <nav
            className="hidden h-full self-stretch items-stretch overflow-visible lg:flex"
            aria-label="Primary"
          >
            <Link
              href={homeLink.href}
              aria-current={
                pathname === homeLink.href ? "page" : undefined
              }
              className={desktopNavItemClass(
                pathname === homeLink.href,
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
                  headerRef={headerRef}
                  onOpen={() => openDesktopGroup(group.label)}
                  onClose={closeDesktopGroup}
                  onCloseImmediate={closeDesktopGroupImmediate}
                  panelRef={(node) => {
                    desktopPanelRefs.current[group.label] = node;
                  }}
                  onKeyboardOpen={(direction = "first") => {
                    window.requestAnimationFrame(() => {
                      const panelRef =
                        desktopPanelRefs.current[group.label];

                      if (!panelRef) {
                        return;
                      }

                      const links = Array.from(
                        panelRef.querySelectorAll<HTMLElement>(
                          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
                        ),
                      ).filter(
                        (element) =>
                          !element.hasAttribute("disabled"),
                      );

                      const target =
                        direction === "last"
                          ? links.at(-1)
                          : links[0];

                      target?.focus();
                    });
                  }}
                />
              );
            })}

            <Link
              href={blogLink.href}
              aria-current={
                blogIsActive ? "page" : undefined
              }
              className={desktopNavItemClass(blogIsActive)}
            >
              {blogLink.label}
            </Link>

            <Link
              href={contactLink.href}
              aria-current={
                contactIsActive ? "page" : undefined
              }
              className={desktopNavItemClass(contactIsActive)}
            >
              {contactLink.label}
            </Link>
          </nav>

          <button
            type="button"
            onClick={() =>
              setMobileOpen((current) => !current)
            }
            className="relative z-[60] inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-full border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] text-[rgb(var(--color-primary))] lg:hidden"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </Container>
      </header>

      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        className={cn(
          "fixed inset-0 flex flex-col bg-[rgb(var(--color-background))] px-6 py-8 transition-transform duration-300 motion-reduce:transition-none lg:hidden",
          mobileOpen
            ? "pointer-events-auto z-50 translate-x-0"
            : "pointer-events-none invisible z-20 translate-x-full",
        )}
      >
        <div className="mb-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="relative z-[60] touch-manipulation rounded-full border border-[rgb(var(--color-border))] bg-[rgb(var(--color-surface))] p-3 text-[rgb(var(--color-primary))]"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav
          className="flex flex-1 flex-col gap-4 overflow-y-auto"
          aria-label="Mobile primary"
        >
          <Link
            href={homeLink.href}
            aria-current={
              pathname === homeLink.href ? "page" : undefined
            }
            className={mobileTopLevelNavClass(
              pathname === homeLink.href,
            )}
          >
            {homeLink.label}
          </Link>

          {navigationGroups.map((group) => (
            <MobileAccordion
              key={group.label}
              group={group}
              isOpen={Boolean(
                mobileSectionsOpen[group.label],
              )}
              pathname={pathname}
              onToggle={() =>
                toggleMobileSection(group.label)
              }
            />
          ))}

          <Link
            href={blogLink.href}
            aria-current={
              blogIsActive ? "page" : undefined
            }
            className={mobileTopLevelNavClass(blogIsActive)}
          >
            {blogLink.label}
          </Link>

          <Link
            href={contactLink.href}
            aria-current={
              contactIsActive ? "page" : undefined
            }
            className={mobileTopLevelNavClass(
              contactIsActive,
            )}
          >
            {contactLink.label}
          </Link>
        </nav>
      </div>
    </>
  );
}