"use client";

import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Awards", href: "/#recognition" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

const THEME_KEY = "portfolio-theme";
const THEME_EVENT = "portfolio-theme-change";

function subscribeTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(THEME_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(THEME_EVENT, callback);
  };
}

function getThemeSnapshot(): "light" | "dark" {
  const stored = window.localStorage.getItem(THEME_KEY);
  return stored === "dark" ? "dark" : "light";
}

function getServerThemeSnapshot(): "light" | "dark" {
  return "light";
}

export default function TopNav() {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    window.localStorage.setItem(THEME_KEY, next);
    document.documentElement.setAttribute("data-theme", next);
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <header className="editorial-container pt-7 pb-4 no-print">
      <nav
        aria-label="Primary navigation"
        className="flex items-center justify-between gap-4"
      >
        <Link
          href="/"
          className="text-[17px] font-medium tracking-[-0.02em] text-[var(--color-text-primary)] hover:opacity-75 transition-opacity duration-[var(--motion-duration-instant)]"
        >
          {portfolioData.profile.shortName}
        </Link>

        <div className="flex items-center gap-4 sm:gap-5 flex-wrap justify-end">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] sm:text-[14px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--motion-duration-instant)] py-1"
            >
              {item.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
            aria-pressed={theme === "dark"}
            className="inline-flex items-center justify-center w-8 h-8 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-raised)] transition-colors duration-[var(--motion-duration-instant)] cursor-pointer"
          >
            {theme === "light" ? <Moon size={15} aria-hidden="true" /> : <Sun size={15} aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
