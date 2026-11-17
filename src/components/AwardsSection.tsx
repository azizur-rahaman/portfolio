import { Award, Trophy } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function AwardsSection() {
  const { awards } = portfolioData;

  return (
    <section id="awards" aria-labelledby="heading-awards" className="pb-16 sm:pb-20">
      <div id="heading-awards" className="sr-only">
        Awards and Achievements
      </div>
      <SectionHeader index="04" title="Awards & Achievements" />

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
            <div className="flex items-baseline gap-2.5 min-w-0">
              <Award
                size={14}
                strokeWidth={1.75}
                className="text-[var(--color-text-secondary)] shrink-0 translate-y-[2px]"
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
    </section>
  );
}
