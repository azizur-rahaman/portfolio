import {
  Blocks,
  Code2,
  Compass,
  Container,
  Database,
  Server,
  Smartphone,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { portfolioData, type SkillGroup } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import { SkillLogo } from "./SkillLogo";

const SKILL_CATEGORY_ICONS: Record<SkillGroup["icon"], LucideIcon> = {
  code2: Code2,
  smartphone: Smartphone,
  server: Server,
  blocks: Blocks,
  database: Database,
  container: Container,
  workflow: Workflow,
  wrench: Wrench,
  compass: Compass,
};

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="heading-skills" className="pb-16 sm:pb-20">
      <SectionHeader index="05" title="Skills" headingId="heading-skills" />

      <div className="divide-y divide-[var(--color-border-muted)]">
        {portfolioData.skillGroups.map((group) => {
          const GroupIcon = SKILL_CATEGORY_ICONS[group.icon];

          return (
            <div
              key={group.category}
              className="py-3.5 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-[185px_1fr] gap-2 sm:gap-4 items-baseline"
            >
              <h3 className="inline-flex items-center gap-2 text-[13px] leading-[20px] font-medium text-[var(--color-text-secondary)]">
                <GroupIcon size={14} strokeWidth={1.75} aria-hidden="true" />
                <span>{group.category}</span>
              </h3>
              <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[12px] leading-[18px] font-medium text-[var(--color-text-primary)] bg-[var(--color-surface-raised)] border border-[var(--color-border-muted)] rounded-[6px]"
                  >
                    <SkillLogo skill={skill} />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
