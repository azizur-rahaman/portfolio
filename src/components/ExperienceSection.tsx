import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Cpu,
  GraduationCap,
  Landmark,
  Rocket,
  ShoppingBag,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { portfolioData, type ExperienceItem } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

const EXPERIENCE_ICONS: Record<ExperienceItem["icon"], LucideIcon> = {
  cloud: Cloud,
  code2: Code2,
  shoppingBag: ShoppingBag,
  rocket: Rocket,
  cpu: Cpu,
  landmark: Landmark,
  smartphone: Smartphone,
  briefcase: BriefcaseBusiness,
  graduationCap: GraduationCap,
};

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="heading-experience" className="pb-16 sm:pb-20">
      <div id="heading-experience" className="sr-only">
        Experience
      </div>
      <SectionHeader index="02" title="Experience" />

      <div className="space-y-9">
        {portfolioData.experiences.map((exp) => {
          const RoleIcon = EXPERIENCE_ICONS[exp.icon];

          return (
            <article key={`${exp.company}-${exp.role}-${exp.period}`} className="group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg border border-[var(--color-border-default)] flex items-center justify-center shrink-0 overflow-hidden text-[var(--color-text-primary)] mt-0.5 ${
                      exp.logo && !exp.logoFullBleed
                        ? "bg-white p-1"
                        : "bg-[var(--color-surface-raised)]"
                    }`}
                  >
                    {exp.logo ? (
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={36}
                        height={36}
                        className={
                          exp.logoFullBleed
                            ? "w-full h-full object-cover"
                            : "w-full h-full object-contain"
                        }
                      />
                    ) : (
                      <RoleIcon size={16} strokeWidth={1.75} aria-hidden="true" />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[17px] leading-[24px] font-medium text-[var(--color-text-primary)] hover:underline underline-offset-4"
                        >
                          <h3>{exp.company}</h3>
                          <ArrowUpRight
                            size={14}
                            strokeWidth={1.75}
                            className="text-[var(--color-text-secondary)] transition-transform duration-[var(--motion-duration-instant)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden="true"
                          />
                        </a>
                      ) : (
                        <h3 className="text-[17px] leading-[24px] font-medium text-[var(--color-text-primary)]">
                          {exp.company}
                        </h3>
                      )}
                      {exp.isCurrent && (
                        <span className="inline-flex items-center px-2 py-0.5 text-[11px] leading-[14px] font-medium text-[var(--color-status-live)] bg-[var(--color-pill-green-bg)] border border-[var(--color-pill-green-border)] rounded-full">
                          Current
                        </span>
                      )}
                      {exp.workMode && (
                        <span className="inline-flex items-center px-2 py-0.5 text-[11px] leading-[14px] font-medium text-[var(--color-text-secondary)] bg-[var(--color-surface-raised)] border border-[var(--color-border-muted)] rounded-full">
                          {exp.workMode}
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] leading-[20px] font-medium text-[var(--color-text-secondary)] mt-0.5">
                      {exp.role}
                    </p>
                  </div>
                </div>

                <p className="font-mono text-[12px] leading-[18px] text-[var(--color-text-secondary)] shrink-0 pl-12 sm:pl-0 sm:pt-1">
                  {exp.period} · {exp.location}
                </p>
              </div>

              <div className="sm:pl-12">
                <p className="text-[14px] leading-[22px] text-[var(--color-text-primary)] mt-2.5">
                  {exp.summary}
                </p>

                <ul className="mt-2 space-y-1.5 pl-4 list-disc text-[14px] leading-[21px] text-[var(--color-text-secondary)] marker:text-[var(--color-border-default)]">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
