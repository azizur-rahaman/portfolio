import { portfolioData } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="heading-experience" className="pb-16 sm:pb-20">
      <div id="heading-experience" className="sr-only">
        Experience
      </div>
      <SectionHeader index="02" title="Experience" />

      <div className="space-y-9">
        {portfolioData.experiences.map((exp) => (
          <article key={`${exp.company}-${exp.role}`}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-[17px] leading-[24px] font-medium text-[var(--color-text-primary)]">
                  {exp.company}
                </h3>
                {exp.isCurrent && (
                  <span className="inline-flex items-center px-2 py-0.5 text-[11px] leading-[14px] font-medium text-[var(--color-status-live)] bg-[var(--color-pill-green-bg)] border border-[var(--color-pill-green-border)] rounded-full">
                    Current
                  </span>
                )}
              </div>

              <p className="font-mono text-[12px] leading-[18px] text-[var(--color-text-secondary)] shrink-0">
                {exp.period} · {exp.location}
              </p>
            </div>

            <p className="text-[13px] leading-[20px] font-medium text-[var(--color-text-secondary)] mt-0.5">
              {exp.role}
            </p>

            <p className="text-[14px] leading-[22px] text-[var(--color-text-primary)] mt-2.5">
              {exp.summary}
            </p>

            <ul className="mt-2 space-y-1.5 pl-4 list-disc text-[14px] leading-[21px] text-[var(--color-text-secondary)] marker:text-[var(--color-border-default)]">
              {exp.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
