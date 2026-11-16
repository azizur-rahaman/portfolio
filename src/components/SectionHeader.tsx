import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface SectionHeaderProps {
  index: string;
  title: string;
  actionLabel?: string;
  actionHref?: string;
  external?: boolean;
}

export default function SectionHeader({
  index,
  title,
  actionLabel,
  actionHref,
  external = false,
}: SectionHeaderProps) {
  return (
    <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-[var(--color-border-default)] mb-7">
      <div className="flex items-baseline gap-2.5">
        <span
          className="font-mono text-[11px] font-medium text-[var(--color-text-secondary)] tracking-wider"
          aria-hidden="true"
        >
          {index}
        </span>
        <h2 className="text-[25.6px] leading-[32px] font-medium tracking-[-0.02em] text-[var(--color-text-primary)]">
          {title}
        </h2>
      </div>

      {actionLabel && actionHref && (
        external ? (
          <a
            href={actionHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[12px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--motion-duration-instant)] shrink-0"
          >
            {actionLabel}
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        ) : (
          <Link
            href={actionHref}
            className="inline-flex items-center gap-1 text-[12px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-[var(--motion-duration-instant)] shrink-0"
          >
            {actionLabel}
            <ArrowUpRight size={13} aria-hidden="true" />
          </Link>
        )
      )}
    </div>
  );
}
