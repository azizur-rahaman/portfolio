import { BookOpen, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" aria-labelledby="heading-education" className="pb-16 sm:pb-20">
      <div id="heading-education" className="sr-only">
        Education
      </div>
      <SectionHeader index="03" title="Education" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {education.map((item, idx) => {
          const Icon = idx === 0 ? GraduationCap : BookOpen;
          return (
            <article
              key={item.degree}
              className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-muted)]"
            >
              <div className="w-9 h-9 rounded-lg bg-[var(--color-surface-strong)] border border-[var(--color-border-default)] flex items-center justify-center shrink-0 text-[var(--color-text-primary)] mt-0.5">
                <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <h3 className="text-[15px] leading-[22px] font-medium text-[var(--color-text-primary)]">
                  {item.degree}
                </h3>
                <p className="text-[13px] leading-[20px] text-[var(--color-text-secondary)] mt-1">
                  {item.institution}
                </p>
                {item.location && (
                  <p className="font-mono text-[11px] leading-[16px] text-[var(--color-text-secondary)] mt-1">
                    {item.location}
                  </p>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
