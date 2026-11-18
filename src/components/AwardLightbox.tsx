"use client";

import { useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { AwardItem } from "@/data/portfolio";

interface AwardLightboxProps {
  awards: AwardItem[];
  selectedIndex: number | null;
  onSelectIndex: (index: number | null) => void;
}

export default function AwardLightbox({
  awards,
  selectedIndex,
  onSelectIndex,
}: AwardLightboxProps) {
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onSelectIndex(null);
      } else if (e.key === "ArrowRight") {
        onSelectIndex((selectedIndex + 1) % awards.length);
      } else if (e.key === "ArrowLeft") {
        onSelectIndex((selectedIndex - 1 + awards.length) % awards.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, awards.length, onSelectIndex]);

  if (selectedIndex === null) return null;
  const selectedAward = awards[selectedIndex];
  if (!selectedAward) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${selectedAward.title} — ${selectedAward.event}`}
      onClick={() => onSelectIndex(null)}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden bg-[var(--color-surface-strong)] border border-[var(--color-border-default)] shadow-2xl"
      >
        <div className="relative w-full aspect-[4/3] bg-black">
          <Image
            src={selectedAward.image}
            alt={`${selectedAward.title} — ${selectedAward.event} (${selectedAward.year})`}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-contain"
            priority
          />

          <button
            type="button"
            onClick={() => onSelectIndex(null)}
            aria-label="Close photo preview"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-black flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={18} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() =>
              onSelectIndex((selectedIndex - 1 + awards.length) % awards.length)
            }
            aria-label="Previous achievement photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-black flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => onSelectIndex((selectedIndex + 1) % awards.length)}
            aria-label="Next achievement photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-black flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="p-4 flex items-center justify-between gap-4 bg-[var(--color-surface-strong)]">
          <div>
            <p className="text-[15px] font-medium text-[var(--color-text-primary)]">
              {selectedAward.title} — {selectedAward.event}
            </p>
            <p className="font-mono text-[12px] text-[var(--color-text-secondary)] mt-0.5">
              {selectedAward.year} · {selectedIndex + 1} / {awards.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
