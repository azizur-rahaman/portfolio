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
      <div className="mb-8 pb-6 border-b border-[var(--color-border-muted)]">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <h3 className="text-[17px] leading-[24px] font-medium text-[var(--color-text-primary)]">
            {education.degree}
          </h3>
          <span className="font-mono text-[12px] leading-[18px] text-[var(--color-text-secondary)] shrink-0">
            {education.location}
          </span>
        </div>
        <p className="text-[14px] leading-[22px] text-[var(--color-text-secondary)] mt-1">
          {education.institution}
        </p>
      </div>

      {/* Awards & Competitions List */}
      <div>
        <h3 className="text-[12px] font-medium uppercase tracking-wider text-[var(--color-text-secondary)] mb-4">
          Competitions &amp; Honors
        </h3>
        <ul className="divide-y divide-[var(--color-border-muted)] list-none p-0 m-0">
          {awards.map((award) => (
            <li
              key={`${award.title}-${award.event}-${award.year}`}
              className="py-3 first:pt-0 last:pb-0 flex items-baseline justify-between gap-4"
            >
              <div className="min-w-0">
                <span className="text-[14px] leading-[22px] font-medium text-[var(--color-text-primary)]">
                  {award.title}
                </span>
                <span className="text-[14px] leading-[22px] text-[var(--color-text-secondary)]">
                  {" "}
                  — {award.event}
                </span>
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
