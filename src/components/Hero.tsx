import Link from "next/link";
import {
  ArrowUpRight,
  Blocks,
  BriefcaseBusiness,
  FileDown,
  LayoutGrid,
  Mail,
  Rocket,
  ShoppingBag,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import LocalTime from "./LocalTime";

function GitHubMark() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedInMark() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Hero() {
  const { profile } = portfolioData;

  return (
    <section aria-label="Introduction" className="pt-10 pb-16 sm:pt-14 sm:pb-20">
      {/* Identity Block */}
      <div className="flex items-center gap-4 sm:gap-5 mb-8">
        <div
          aria-hidden="true"
          className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-center shrink-0 select-none"
        >
          <span className="font-mono text-[20px] font-semibold tracking-tight text-[var(--color-text-primary)]">
            {profile.initials}
          </span>
        </div>

        <div className="min-w-0">
          <h1 className="text-[32px] sm:text-[40px] leading-[1.1] font-medium tracking-[-0.03em] text-[var(--color-text-primary)]">
            {profile.name}
          </h1>
          <p className="text-[14px] leading-[20px] text-[var(--color-text-secondary)] mt-1.5">
            {profile.role}
          </p>
          <LocalTime location={profile.location} timeZone={profile.timeZone} />
        </div>
      </div>

      {/* Structured Bio Paragraphs */}
      <div className="space-y-4 text-[16px] leading-[26px] text-[var(--color-text-primary)]">
        <p>
          I&apos;m a Flutter developer in Dhaka shipping production mobile applications.
          Previously at{" "}
          <span className="inline-chip inline-chip--green">
            <ShoppingBag size={12} strokeWidth={2} className="text-[var(--color-status-live)]" aria-hidden="true" />
            Zabihaty LLC
          </span>
          , I maintained 3 cross-platform apps, implemented{" "}
          <span className="font-medium">90+ Figma UI screens</span>, and integrated{" "}
          <span className="font-medium">15+ REST APIs</span>.
        </p>

        <p>
          Under{" "}
          <a
            href={profile.googlePlayDev}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-chip inline-chip--blue hover:opacity-85 transition-opacity"
          >
            <Rocket size={12} strokeWidth={2} className="text-[var(--color-status-active)]" aria-hidden="true" />
            Algoel
          </a>
          , I have built and published <span className="font-medium">10 Android &amp; Flutter apps</span> on
          Google Play—including{" "}
          <Link href="/products/lenden" className="underline underline-offset-4 decoration-[var(--color-border-default)] hover:decoration-[var(--color-text-primary)]">
            Lenden
          </Link>
          ,{" "}
          <Link href="/products/weightnote" className="underline underline-offset-4 decoration-[var(--color-border-default)] hover:decoration-[var(--color-text-primary)]">
            weightnote
          </Link>
          ,{" "}
          <Link href="/products/bhalo-kaj" className="underline underline-offset-4 decoration-[var(--color-border-default)] hover:decoration-[var(--color-text-primary)]">
            Bhalo Kaj
          </Link>
          , and{" "}
          <Link href="/products/classmates" className="underline underline-offset-4 decoration-[var(--color-border-default)] hover:decoration-[var(--color-text-primary)]">
            Classmates
          </Link>
          . On{" "}
          <span className="inline-chip inline-chip--amber">
            <BriefcaseBusiness size={12} strokeWidth={2} aria-hidden="true" />
            Upwork
          </span>
          , I am a Top Rated freelancer with 5+ international apps delivered at 100% completion.
        </p>

        <p>
          I study Computer Science &amp; Engineering at{" "}
          <span className="font-medium">United International University</span>, build with{" "}
          <span className="inline-chip inline-chip--violet">
            <Blocks size={12} strokeWidth={2} aria-hidden="true" />
            Clean Architecture
          </span>{" "}
          at <span className="font-medium">UIU Developers Hub</span>, and share Flutter
          engineering tutorials on YouTube (15+ lessons).
        </p>
      </div>

      {/* Quick Action Links */}
      <nav
        aria-label="Social and profile links"
        className="flex flex-wrap items-center gap-x-5 gap-y-2.5 mt-8 pt-2"
      >
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-text-secondary)] transition-colors duration-[var(--motion-duration-instant)] py-1"
        >
          <GitHubMark />
          <span>GitHub</span>
          <ArrowUpRight size={12} strokeWidth={1.75} className="text-[var(--color-text-secondary)]" aria-hidden="true" />
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-text-secondary)] transition-colors duration-[var(--motion-duration-instant)] py-1"
        >
          <LinkedInMark />
          <span>LinkedIn</span>
          <ArrowUpRight size={12} strokeWidth={1.75} className="text-[var(--color-text-secondary)]" aria-hidden="true" />
        </a>

        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-text-secondary)] transition-colors duration-[var(--motion-duration-instant)] py-1"
        >
          <LayoutGrid size={14} strokeWidth={1.75} aria-hidden="true" />
          <span>All 11 Apps</span>
          <ArrowUpRight size={12} strokeWidth={1.75} className="text-[var(--color-text-secondary)]" aria-hidden="true" />
        </Link>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-text-secondary)] transition-colors duration-[var(--motion-duration-instant)] py-1"
        >
          <Mail size={14} strokeWidth={1.75} aria-hidden="true" />
          <span>Email</span>
          <ArrowUpRight size={12} strokeWidth={1.75} className="text-[var(--color-text-secondary)]" aria-hidden="true" />
        </a>

        <a
          href={profile.cvPath}
          download={profile.cvFilename}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-text-secondary)] transition-colors duration-[var(--motion-duration-instant)] py-1"
        >
          <FileDown size={14} strokeWidth={1.75} aria-hidden="true" />
          <span>Download CV</span>
        </a>
      </nav>
    </section>
  );
}
