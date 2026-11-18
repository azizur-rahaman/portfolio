import Link from "next/link";
import Image from "next/image";
import {
  ArrowDownToLine,
  ArrowUpRight,
  Blocks,
  FileDown,
  GraduationCap,
  Layers,
  LayoutGrid,
  Server,
  Smartphone,
  Trophy,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { BRAND_SKILL_ICONS } from "@/data/skillIcons";
import LocalTime from "./LocalTime";

function GitHubLogo() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d={BRAND_SKILL_ICONS.GitHub.path} />
    </svg>
  );
}

function LinkedInLogo() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#FFFFFF"
        d="M7.05 9.65H4.38v8.6h2.67v-8.6ZM5.72 5.4a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1Zm13.9 7.82c0-2.55-1.36-3.74-3.18-3.74-1.47 0-2.13.81-2.49 1.38v-1.2h-2.67c.04.78 0 8.59 0 8.59h2.67v-4.8c0-.26.02-.52.1-.7.21-.52.68-1.06 1.48-1.06 1.04 0 1.46.8 1.46 1.97v4.59h2.63v-5.03Z"
      />
    </svg>
  );
}

function GmailLogo() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="shrink-0"
    >
      <path fill="#4285F4" d="M22 6.25V18a1.5 1.5 0 0 1-1.5 1.5H18V9.9l-6 4.5-6-4.5v9.6H3.5A1.5 1.5 0 0 1 2 18V6.25a2.25 2.25 0 0 1 3.6-1.8L12 9.25l6.4-4.8A2.25 2.25 0 0 1 22 6.25Z" />
      <path fill="#34A853" d="M18 9.9v9.6h2.5A1.5 1.5 0 0 0 22 18V6.9l-4 3Z" />
      <path fill="#FBBC05" d="M2 6.9V18a1.5 1.5 0 0 0 1.5 1.5H6V9.9l-4-3Z" />
      <path fill="#EA4335" d="M18 9.9V4.45L12 8.95 6 4.45V9.9l6 4.5 6-4.5Z" />
      <path fill="#C5221F" d="M2 6.25v.65l4 3V4.45a2.25 2.25 0 0 0-4 1.8Zm20 0a2.25 2.25 0 0 0-4-1.8V9.9l4-3v-.65Z" />
    </svg>
  );
}

export default function Hero() {
  const { profile, stats } = portfolioData;

  return (
    <section aria-label="Introduction" className="pt-10 pb-16 sm:pt-14 sm:pb-20">
      {/* Identity Block */}
      <div className="flex items-center gap-4 sm:gap-5 mb-7">
        <div className="w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] rounded-full bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] overflow-hidden shrink-0">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={80}
            height={80}
            priority
            className="w-full h-full object-cover"
          />
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

      {/* Achievement Highlights Strip */}
      <ul
        aria-label="Key highlights"
        className="flex flex-wrap items-center gap-2 mb-6 list-none p-0 m-0"
      >
        <li className="inline-chip inline-chip--amber text-[13px] py-1 px-2.5">
          <Trophy size={13} strokeWidth={2} aria-hidden="true" />
          <span>2× National Hackathon Winner</span>
        </li>
        <li className="inline-chip inline-chip--green text-[13px] py-1 px-2.5">
          <ArrowDownToLine size={13} strokeWidth={2} className="text-[var(--color-status-live)]" aria-hidden="true" />
          <span>Built products with 110K+ total downloads</span>
        </li>
        <li className="inline-chip inline-chip--blue text-[13px] py-1 px-2.5">
          <GraduationCap size={13} strokeWidth={2} className="text-[var(--color-status-active)]" aria-hidden="true" />
          <span>Mentored 150+ students through Flutter training</span>
        </li>
      </ul>

      {/* Structured Bio Paragraphs */}
      <div className="space-y-4 text-[16px] leading-[26px] text-[var(--color-text-primary)]">
        <p>
          <span className="font-medium">Product Engineer</span> with{" "}
          <span className="font-medium">5+ years of software engineering experience</span>{" "}
          and <span className="font-medium">10+ years of programming experience</span>,
          building and shipping scalable digital products from idea to production.
        </p>

        <p>
          Experienced across mobile, web, backend, and cloud, delivering enterprise
          platforms using{" "}
          <span className="inline-chip inline-chip--blue">
            <Smartphone size={12} strokeWidth={2} className="text-[var(--color-status-active)]" aria-hidden="true" />
            Flutter
          </span>{" "}
          <span className="inline-chip">
            <Layers size={12} strokeWidth={2} aria-hidden="true" />
            Next.js
          </span>{" "}
          <span className="inline-chip inline-chip--green">
            <Server size={12} strokeWidth={2} className="text-[var(--color-status-live)]" aria-hidden="true" />
            Spring Boot
          </span>{" "}
          <span className="inline-chip inline-chip--amber">
            Java
          </span>
          , and modern web technologies.
        </p>

        <p>
          Skilled in product architecture, system design, REST APIs, JWT &amp; RBAC
          security, CI/CD,{" "}
          <span className="inline-chip inline-chip--violet">
            <Blocks size={12} strokeWidth={2} aria-hidden="true" />
            Clean Architecture
          </span>
          , and full-stack application development. Passionate about solving real user
          problems through rapid iteration, high-quality engineering, and end-to-end
          product ownership.
        </p>
      </div>

      {/* Key Experience & Impact Stats */}
      <dl
        aria-label="Key metrics"
        className="mt-8 pt-7 border-t border-[var(--color-border-muted)] grid grid-cols-3 gap-4 sm:gap-0 sm:divide-x sm:divide-[var(--color-border-muted)]"
      >
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col-reverse justify-end ${
              idx === 0 ? "sm:pr-6" : idx === 1 ? "sm:px-6" : "sm:pl-6"
            }`}
          >
            <dt className="text-[12px] sm:text-[13px] leading-[18px] text-[var(--color-text-secondary)] mt-1.5">
              {stat.label}
            </dt>
            <dd className="text-[26px] sm:text-[32px] leading-[1.1] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)] tabular-nums m-0">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* Quick Action Links */}
      <nav
        aria-label="Social and profile links"
        className="w-full grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-2.5 mt-7"
      >
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:flex-auto inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-[14px] font-medium text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] transition-colors duration-[var(--motion-duration-instant)] whitespace-nowrap"
        >
          <GitHubLogo />
          <span>GitHub</span>
          <ArrowUpRight size={13} strokeWidth={1.75} className="text-[var(--color-text-secondary)]" aria-hidden="true" />
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:flex-auto inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-[14px] font-medium text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] transition-colors duration-[var(--motion-duration-instant)] whitespace-nowrap"
        >
          <LinkedInLogo />
          <span>LinkedIn</span>
          <ArrowUpRight size={13} strokeWidth={1.75} className="text-[var(--color-text-secondary)]" aria-hidden="true" />
        </a>

        <Link
          href="/products"
          className="sm:flex-auto inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-[14px] font-medium text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] transition-colors duration-[var(--motion-duration-instant)] whitespace-nowrap"
        >
          <LayoutGrid size={17} strokeWidth={1.85} className="text-[#4F46E5] shrink-0" aria-hidden="true" />
          <span>All 12 Products</span>
          <ArrowUpRight size={13} strokeWidth={1.75} className="text-[var(--color-text-secondary)]" aria-hidden="true" />
        </Link>

        <a
          href={`mailto:${profile.email}`}
          className="sm:flex-auto inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-[14px] font-medium text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] transition-colors duration-[var(--motion-duration-instant)] whitespace-nowrap"
        >
          <GmailLogo />
          <span>Email</span>
          <ArrowUpRight size={13} strokeWidth={1.75} className="text-[var(--color-text-secondary)]" aria-hidden="true" />
        </a>

        <a
          href={profile.cvPath}
          download={profile.cvFilename}
          className="col-span-2 sm:col-span-1 sm:flex-auto inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] text-[14px] font-medium text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] transition-colors duration-[var(--motion-duration-instant)] whitespace-nowrap"
        >
          <FileDown size={17} strokeWidth={1.85} className="text-[var(--color-status-live)] shrink-0" aria-hidden="true" />
          <span>Download CV</span>
        </a>
      </nav>
    </section>
  );
}
