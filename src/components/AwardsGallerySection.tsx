"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import AwardLightbox from "./AwardLightbox";

const COLLAGE_SPANS = [
  "col-span-2 sm:col-span-6 row-span-2", // 1: National Signature Hackathon (landscape hero)
  "col-span-1 sm:col-span-6 row-span-1", // 2: GBV Hackathon (landscape)
  "col-span-1 sm:col-span-6 row-span-1", // 3: IUT Hackathon 2025 (landscape)
  "col-span-1 sm:col-span-4 row-span-2", // 4: IUT Hackathon 2024 (portrait)
  "col-span-1 sm:col-span-4 row-span-2", // 5: NCPC 2023 (portrait/square)
  "col-span-1 sm:col-span-4 row-span-1", // 6: Science Week Champion (landscape)
  "col-span-1 sm:col-span-4 row-span-1", // 7: Science Week 2nd Champion (landscape)
];

export default function AwardsGallerySection() {
  const { awards } = portfolioData;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section aria-label="Competition and achievement highlights" className="pb-16 sm:pb-20">
      <div className="flex items-baseline justify-between gap-4 mb-3.5">
        <h2 className="text-[12px] font-medium uppercase tracking-wider text-[var(--color-text-secondary)]">
          Hackathons &amp; Achievements
        </h2>
        <a
          href="#awards"
          className="text-[12px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
        >
          View full list →
        </a>
      </div>

      <div
        aria-label="Awards photo collage"
        className="grid grid-cols-2 sm:grid-cols-12 auto-rows-[120px] sm:auto-rows-[132px] gap-2.5"
      >
        {awards.map((award, idx) => (
          <button
            key={`${award.image}-${idx}`}
            type="button"
            onClick={() => setSelectedIndex(idx)}
            aria-label={`View photo: ${award.title} — ${award.event} (${award.year})`}
            className={`group relative rounded-xl overflow-hidden border border-[var(--color-border-default)] hover:border-[var(--color-text-primary)] transition-all duration-[var(--motion-duration-instant)] cursor-pointer text-left bg-[var(--color-surface-raised)] ${
              COLLAGE_SPANS[idx] ?? "col-span-1 sm:col-span-4 row-span-1"
            }`}
          >
            <Image
              src={award.image}
              alt={`${award.title} — ${award.event} (${award.year})`}
              fill
              sizes="(max-width: 640px) 50vw, 360px"
              style={{ objectPosition: award.imagePosition ?? "50% 30%" }}
              className="object-cover transition-transform duration-[var(--motion-duration-fast)] group-hover:scale-[1.03]"
            />

            <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-[var(--motion-duration-instant)]">
              <p className="text-[12px] font-medium leading-[16px] text-white truncate">
                {award.title}
              </p>
              <p className="text-[11px] leading-[15px] text-white/80 truncate">
                {award.event} · {award.year}
              </p>
            </div>
          </button>
        ))}
      </div>

      <AwardLightbox
        awards={awards}
        selectedIndex={selectedIndex}
        onSelectIndex={setSelectedIndex}
      />
    </section>
  );
}
