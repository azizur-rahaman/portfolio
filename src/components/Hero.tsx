import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Layers,
  Linkedin,
  Mail,
  FileText,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import LocalTime from "./LocalTime";

export default function Hero() {
  const { profile } = portfolioData;

  return (
    <section aria-label="Introduction" className="pt-10 pb-16 sm:pt-14 sm:pb-20">
      {/* Identity Block */}
      <div className="flex items-center gap-4 sm:gap-5 mb-8">
        <div
          aria-hidden="true"
          className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-center shrink-0 select-none"
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
          I&apos;m a Flutter developer in Dhaka with hands-on experience shipping{" "}
          <span className="font-medium">3+ production-ready mobile applications</span>.
          Previously at{" "}
          <span className="inline-chip inline-chip--green">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-status-live)]" aria-hidden="true" />
            Zabihaty LLC
          </span>
          , I engineered cross-platform apps with shared codebases, implemented{" "}
          <span className="font-medium">90+ Figma UI screens</span>, and integrated{" "}
          <span className="font-medium">15+ REST APIs</span>.
        </p>

        <p>
          I built{" "}
          <Link
            href="/products/lenden"
            className="inline-chip inline-chip--blue hover:opacity-85 transition-opacity"
          >
            Lenden
          </Link>
          , a peer-to-peer finance and budgeting app on Google Play powered by{" "}
          <span className="inline-chip inline-chip--violet">Clean Architecture</span>,{" "}
          BLoC, Firebase, and ObjectBox. On{" "}
          <span className="inline-chip inline-chip--amber">Upwork</span>, I hold Top Rated
          status with 5+ client applications delivered at 100% completion.
        </p>

        <p>
          I study Computer Science &amp; Engineering at{" "}
          <span className="font-medium">United International University</span>, build with{" "}
          <span className="font-medium">UIU Developers Hub</span>, and share practical
          Flutter engineering tutorials on YouTube (15+ lessons).
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
          <Github size={14} aria-hidden="true" />
          <span>GitHub</span>
          <ArrowUpRight size={12} className="text-[var(--color-text-secondary)]" aria-hidden="true" />
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-text-secondary)] transition-colors duration-[var(--motion-duration-instant)] py-1"
        >
          <Linkedin size={14} aria-hidden="true" />
          <span>LinkedIn</span>
          <ArrowUpRight size={12} className="text-[var(--color-text-secondary)]" aria-hidden="true" />
        </a>

        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-text-secondary)] transition-colors duration-[var(--motion-duration-instant)] py-1"
        >
          <Layers size={14} aria-hidden="true" />
          <span>Products</span>
          <ArrowUpRight size={12} className="text-[var(--color-text-secondary)]" aria-hidden="true" />
        </Link>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-text-secondary)] transition-colors duration-[var(--motion-duration-instant)] py-1"
        >
          <Mail size={14} aria-hidden="true" />
          <span>Email</span>
          <ArrowUpRight size={12} className="text-[var(--color-text-secondary)]" aria-hidden="true" />
        </a>

        <a
          href={profile.cvPath}
          download={profile.cvFilename}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-primary)] hover:text-[var(--color-text-secondary)] transition-colors duration-[var(--motion-duration-instant)] py-1"
        >
          <FileText size={14} aria-hidden="true" />
          <span>CV</span>
          <ArrowDown size={12} className="text-[var(--color-text-secondary)]" aria-hidden="true" />
        </a>
      </nav>
    </section>
  );
}
