import { portfolioData } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="heading-skills" className="pb-16 sm:pb-20">
      <div id="heading-skills" className="sr-only">
        Technical Skills
      </div>
      <SectionHeader index="04" title="Skills" />

      <div className="divide-y divide-[var(--color-border-muted)]">
        {portfolioData.skillGroups.map((group) => (
          <div
            key={group.category}
            className="py-3.5 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-2 sm:gap-4 items-baseline"
          >
            <h3 className="text-[13px] leading-[20px] font-medium text-[var(--color-text-secondary)]">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="px-2.5 py-0.5 text-[12px] leading-[20px] text-[var(--color-text-primary)] bg-[var(--color-surface-raised)] border border-[var(--color-border-muted)] rounded-[4px]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
