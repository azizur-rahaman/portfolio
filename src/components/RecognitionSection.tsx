import { Award, GraduationCap, Trophy } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function RecognitionSection() {
  const { education, awards } = portfolioData;

  return (
    <section id="recognition" aria-labelledby="heading-recognition" className="pb-16 sm:pb-20">
      <div id="heading-recognition" className="sr-only">
        Education and Awards
      </div>
      <SectionHeader index="03" title="Education & Awards" />

      {/* Education Block */}
      <div className="mb-8 pb-6 border-b border-[var(--color-border-muted)] flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] flex items-center justify-center shrink-0 text-[var(--color-text-primary)] mt-0.5">
          <GraduationCap size={16} strokeWidth={1.75} aria-hidden="true" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-[17px] leading-[24px] font-medium text-[var(--color-text-primary)]">
              {education.degree}
            </h3>
            <span className="font-mono text-[12px] leading-[18px] text-[var(--color-text-secondary)] shrink-0">
              {education.location}
            </span>
          </div>
          <p className="text-[14px] leading-[22px] text-[var(--color-text-secondary)] mt-0.5">
            {education.institution}
          </p>
        </div>
      </div>

      {/* Awards & Competitions List */}
      <div>
        <h3 className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-wider text-[var(--color-text-secondary)] mb-4">
          <Trophy size={13} strokeWidth={1.75} aria-hidden="true" />
          <span>Competitions &amp; Honors</span>
        </h3>
        <ul className="divide-y divide-[var(--color-border-muted)] list-none p-0 m-0">
          {awards.map((award) => (
            <li
              key={`${award.title}-${award.event}-${award.year}`}
              className="py-3 first:pt-0 last:pb-0 flex items-baseline justify-between gap-4"
            >
              <div className="flex items-baseline gap-2 min-w-0">
                <Award
                  size={13}
                  strokeWidth={1.75}
                  className="text-[var(--color-text-secondary)] shrink-0 translate-y-[1.5px]"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <span className="text-[14px] leading-[22px] font-medium text-[var(--color-text-primary)]">
                    {award.title}
                  </span>
                  <span className="text-[14px] leading-[22px] text-[var(--color-text-secondary)]">
                    {" "}
                    — {award.event}
                  </span>
                </div>
              </div>
              <span className="font-mono text-[12px] leading-[18px] text-[var(--color-text-secondary)] shrink-0 tabular-nums">
                {award.year}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
