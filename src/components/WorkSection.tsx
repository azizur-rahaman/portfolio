import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";

export default function WorkSection() {
  return (
    <section id="work" aria-labelledby="heading-work" className="pb-16 sm:pb-20">
      <div id="heading-work" className="sr-only">
        Selected Work
      </div>
      <SectionHeader
        index="01"
        title="Work"
        actionLabel="All products"
        actionHref="/products"
      />

      <div className="space-y-9">
        {portfolioData.work.map((item) => {
          const isLive = item.status === "Live";
          const primaryHref = item.internalHref ?? item.externalHref;
          const primaryIsExternal = !item.internalHref;

          return (
            <article key={item.id} className="group">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    {primaryIsExternal ? (
                      <a
                        href={primaryHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[17px] leading-[24px] font-medium text-[var(--color-text-primary)] hover:underline underline-offset-4"
                      >
                        <h3>{item.title}</h3>
                        <ArrowUpRight
                          size={14}
                          className="text-[var(--color-text-secondary)] transition-transform duration-[var(--motion-duration-instant)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    ) : (
                      <Link
                        href={primaryHref}
                        className="inline-flex items-center gap-1 text-[17px] leading-[24px] font-medium text-[var(--color-text-primary)] hover:underline underline-offset-4"
                      >
                        <h3>{item.title}</h3>
                        <ArrowUpRight
                          size={14}
                          className="text-[var(--color-text-secondary)] transition-transform duration-[var(--motion-duration-instant)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    )}

                    {item.internalHref && (
                      <a
                        href={item.externalHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-0.5 text-[12px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--motion-duration-instant)]"
                      >
                        <span>{item.externalLabel}</span>
                        <ArrowUpRight size={11} aria-hidden="true" />
                      </a>
                    )}
                  </div>

                  <p className="text-[12px] leading-[18px] text-[var(--color-text-secondary)] mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--color-text-secondary)] shrink-0 pt-0.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isLive
                        ? "bg-[var(--color-status-live)]"
                        : "bg-[var(--color-status-active)]"
                    }`}
                    aria-hidden="true"
                  />
                  {item.status}
                </span>
              </div>

              <p className="text-[14px] leading-[22px] text-[var(--color-text-secondary)] mt-2.5">
                {item.description}
              </p>

              <ul
                aria-label={`${item.title} technologies`}
                className="flex flex-wrap gap-1.5 mt-3 list-none p-0 m-0"
              >
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="px-2.5 py-0.5 text-[11px] leading-[18px] font-medium text-[var(--color-text-secondary)] bg-[var(--color-surface-raised)] border border-[var(--color-border-muted)] rounded-[4px]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
