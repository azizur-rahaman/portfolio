"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, Trophy } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SectionHeader from "./SectionHeader";
import AwardLightbox from "./AwardLightbox";

export default function AwardsSection() {
  const { awards } = portfolioData;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const hoveredAward = hoveredIndex !== null ? awards[hoveredIndex] : null;

  return (
    <section id="awards" aria-labelledby="heading-awards" className="pb-16 sm:pb-20">
      <div id="heading-awards" className="sr-only">
        Awards and Achievements
      </div>
      <SectionHeader index="04" title="Awards & Achievements" />

      <div className="flex items-center justify-between gap-4 mb-4">
        <h3 className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-wider text-[var(--color-text-secondary)]">
          <Trophy size={13} strokeWidth={1.75} aria-hidden="true" />
          <span>Competitions &amp; Honors</span>
        </h3>
        <span className="text-[11px] text-[var(--color-text-secondary)] hidden sm:inline">
          Hover to preview · Click to expand
        </span>
      </div>

      {/* Interactive List + Desktop Hover Preview Card */}
      <div
        className="relative"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <ul className="divide-y divide-[var(--color-border-muted)] list-none p-0 m-0">
          {awards.map((award, idx) => {
            const isActive = hoveredIndex === idx;

            return (
              <li key={`${award.title}-${award.event}-${award.year}`}>
                <button
                  type="button"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onFocus={() => setHoveredIndex(idx)}
                  onBlur={() => setHoveredIndex(null)}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full text-left py-2.5 px-2.5 -mx-2.5 rounded-lg flex items-center justify-between gap-4 transition-colors duration-[var(--motion-duration-instant)] cursor-pointer ${
                    isActive
                      ? "bg-[var(--color-surface-raised)]"
                      : "hover:bg-[var(--color-surface-raised)]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-9 h-7 rounded-[4px] overflow-hidden border border-[var(--color-border-default)] shrink-0 bg-[var(--color-surface-raised)]">
                      <Image
                        src={award.image}
                        alt={`${award.title} — ${award.event}`}
                        fill
                        sizes="36px"
                        style={{ objectPosition: award.imagePosition ?? "50% 30%" }}
                        className="object-cover"
                      />
                    </div>

                    <div className="flex items-baseline gap-2 min-w-0">
                      <Award
                        size={13}
                        strokeWidth={1.75}
                        className="text-[var(--color-text-secondary)] shrink-0 hidden sm:inline translate-y-[1.5px]"
                        aria-hidden="true"
                      />
                      <div className="min-w-0 truncate sm:whitespace-normal">
                        <span className="text-[14px] leading-[22px] font-medium text-[var(--color-text-primary)]">
                          {award.title}
                        </span>
                        <span className="text-[14px] leading-[22px] text-[var(--color-text-secondary)]">
                          {" "}
                          — {award.event}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-[12px] leading-[18px] text-[var(--color-text-secondary)] shrink-0 tabular-nums">
                    {award.year}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Floating Hover Preview Popup (Desktop) */}
        {hoveredAward && (
          <div
            aria-hidden="true"
            className="hidden md:block pointer-events-none absolute right-14 top-1/2 -translate-y-1/2 z-20 w-[250px] rounded-xl overflow-hidden bg-[var(--color-surface-strong)] border border-[var(--color-border-default)] shadow-[var(--shadow-1)]"
          >
            <div className="relative w-full aspect-[4/3] bg-[var(--color-surface-raised)]">
              <Image
                src={hoveredAward.image}
                alt=""
                fill
                sizes="250px"
                style={{ objectPosition: hoveredAward.imagePosition ?? "50% 30%" }}
                className="object-cover"
              />
            </div>
            <div className="p-3 border-t border-[var(--color-border-muted)]">
              <p className="text-[13px] font-medium leading-[18px] text-[var(--color-text-primary)]">
                {hoveredAward.title}
              </p>
              <p className="text-[12px] leading-[17px] text-[var(--color-text-secondary)] mt-0.5">
                {hoveredAward.event} · {hoveredAward.year}
              </p>
            </div>
          </div>
        )}
      </div>

      <AwardLightbox
        awards={awards}
        selectedIndex={selectedIndex}
        onSelectIndex={setSelectedIndex}
      />
    </section>
  );
}
