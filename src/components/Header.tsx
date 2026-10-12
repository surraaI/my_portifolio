// components/Header.tsx
'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { CONTACT } from "@/utils/constants";

const NAV_ITEMS = ["work", "skills", "about", "contact"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for whichever section sits in the middle band of the viewport
  useEffect(() => {
    const sections = NAV_ITEMS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        setActiveSection(NAV_ITEMS.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-colors duration-300 ${
        scrolled || menuOpen ? "border-border" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="display text-xl text-foreground"
          onClick={() => setMenuOpen(false)}
        >
          Sura Itana
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={`/#${item}`}
              aria-current={activeSection === item ? "true" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors duration-200 ${
                activeSection === item
                  ? "bg-foreground/[0.08] text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.cv}
            download
            className="hidden h-10 items-center rounded-full border border-border px-4 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-secondary sm:inline-flex"
          >
            Download CV
          </a>
          <DarkModeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label="Primary" className="flex flex-col border-t border-border px-5 py-3 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={`/#${item}`}
              className="display py-3 text-2xl capitalize text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <a
            href={CONTACT.cv}
            download
            className="display py-3 text-2xl text-foreground sm:hidden"
            onClick={() => setMenuOpen(false)}
          >
            Download CV
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
