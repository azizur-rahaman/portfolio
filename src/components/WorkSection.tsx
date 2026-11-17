import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import { AppIcon } from "./AppIcon";

export default function WorkSection() {
  return (
    <section id="work" aria-labelledby="heading-work" className="pb-16 sm:pb-20">
      <div id="heading-work" className="sr-only">
        Selected Work and Shipped Apps
      </div>
      <SectionHeader
        index="01"
        title="Work"
        actionLabel="All 12 products"
        actionHref="/products"
      />

      {/* Featured Flagship Apps */}
      <div className="space-y-9">
        {portfolioData.work.map((item) => {
          const isLive = item.status === "Live";
          const primaryHref = item.internalHref ?? item.externalHref;
          const primaryIsExternal = !item.internalHref;

          return (
            <article key={item.id} className="group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-xl border border-[var(--color-border-default)] flex items-center justify-center shrink-0 overflow-hidden text-[var(--color-text-primary)] mt-0.5 ${
                      item.logo && !item.logoFullBleed
                        ? "bg-white p-1"
                        : "bg-[var(--color-surface-raised)]"
                    }`}
                  >
                    {item.logo ? (
                      <Image
                        src={item.logo}
                        alt={`${item.title} icon`}
                        width={40}
                        height={40}
                        className={
                          item.logoFullBleed
                            ? "w-full h-full object-cover"
                            : "w-full h-full object-contain"
                        }
                      />
                    ) : (
                      <AppIcon name={item.icon} size={18} />
                    )}
                  </div>

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
                            strokeWidth={1.75}
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
                            strokeWidth={1.75}
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
                          <ArrowUpRight size={11} strokeWidth={1.75} aria-hidden="true" />
                        </a>
                      )}
                    </div>

                    <p className="text-[12px] leading-[18px] text-[var(--color-text-secondary)] mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--color-text-secondary)] shrink-0 pt-1">
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

              <p className="text-[14px] leading-[22px] text-[var(--color-text-secondary)] mt-3 sm:pl-[54px]">
                {item.description}
              </p>

              <ul
                aria-label={`${item.title} technologies`}
                className="flex flex-wrap gap-1.5 mt-3 sm:pl-[54px] list-none p-0 m-0"
              >
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="px-2.5 py-0.5 text-[11px] leading-[18px] font-medium text-[var(--color-text-secondary)] bg-[var(--color-surface-raised)] border border-[var(--color-border-muted)] rounded-[5px]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      {/* Complete Index of Remaining Shipped Apps */}
      <div className="mt-12 pt-8 border-t border-[var(--color-border-muted)]">
        <div className="flex items-baseline justify-between gap-4 mb-4">
          <h3 className="text-[12px] font-medium uppercase tracking-wider text-[var(--color-text-secondary)]">
            More Shipped Apps — Algoel Studio
          </h3>
          <a
            href={portfolioData.profile.googlePlayDev}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[12px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <span>Google Play</span>
            <ArrowUpRight size={11} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>

        <ul className="divide-y divide-[var(--color-border-muted)] list-none p-0 m-0">
          {portfolioData.moreApps.map((app) => (
            <li
              key={app.slug}
              className="py-3.5 first:pt-1 last:pb-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4"
            >
              <div className="flex items-start sm:items-center gap-3 min-w-0">
                <div
                  className={`w-8 h-8 rounded-lg border border-[var(--color-border-default)] flex items-center justify-center shrink-0 overflow-hidden text-[var(--color-text-primary)] mt-0.5 sm:mt-0 ${
                    app.logo && !app.logoFullBleed
                      ? "bg-white p-0.5"
                      : "bg-[var(--color-surface-raised)]"
                  }`}
                >
                  {app.logo ? (
                    <Image
                      src={app.logo}
                      alt={`${app.name} icon`}
                      width={32}
                      height={32}
                      className={
                        app.logoFullBleed
                          ? "w-full h-full object-cover"
                          : "w-full h-full object-contain"
                      }
                    />
                  ) : (
                    <AppIcon name={app.icon} size={15} />
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Link
                      href={`/products/${app.slug}`}
                      className="inline-flex items-center gap-1 text-[15px] leading-[22px] font-medium text-[var(--color-text-primary)] hover:underline underline-offset-4"
                    >
                      <span>{app.name}</span>
                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.75}
                        className="text-[var(--color-text-secondary)]"
                        aria-hidden="true"
                      />
                    </Link>
                    <span className="font-mono text-[11px] text-[var(--color-text-secondary)]">
                      {app.stack}
                    </span>
                  </div>
                  <p className="text-[13px] leading-[20px] text-[var(--color-text-secondary)] mt-0.5">
                    {app.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 pl-11 sm:pl-0">
                <a
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 text-[12px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                  <span>Play</span>
                  <ArrowUpRight size={11} strokeWidth={1.75} aria-hidden="true" />
                </a>
                <span className="font-mono text-[12px] text-[var(--color-text-secondary)] tabular-nums">
                  {app.year}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
