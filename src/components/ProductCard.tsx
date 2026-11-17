import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Monitor } from "lucide-react";
import { Product } from "@/data/products";
import { AppIcon } from "./AppIcon";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] p-6 transition-all duration-[var(--motion-duration-instant)] hover:shadow-[var(--shadow-1)] flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-11 h-11 rounded-xl bg-[var(--color-surface-strong)] border border-[var(--color-border-default)] flex items-center justify-center overflow-hidden text-[var(--color-text-primary)] shrink-0">
            {product.logo ? (
              <Image
                src={product.logo}
                alt={`${product.name} Logo`}
                width={28}
                height={28}
                className="object-contain"
              />
            ) : (
              <AppIcon name={product.slug} size={20} />
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-end">
            {product.releaseYear && (
              <span className="font-mono text-[11px] text-[var(--color-text-secondary)] tabular-nums">
                {product.releaseYear}
              </span>
            )}
            <span className="px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-[var(--color-text-secondary)] bg-[var(--color-surface-strong)] border border-[var(--color-border-muted)] rounded-[5px]">
              {product.category}
            </span>
          </div>
        </div>

        <h2 className="text-[19px] leading-[26px] font-medium tracking-[-0.01em] text-[var(--color-text-primary)]">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 hover:underline underline-offset-4"
          >
            <span>{product.name}</span>
            <ArrowUpRight
              size={15}
              strokeWidth={1.75}
              className="text-[var(--color-text-secondary)] transition-transform duration-[var(--motion-duration-instant)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
              aria-hidden="true"
            />
          </Link>
        </h2>

        <p className="text-[14px] leading-[21px] text-[var(--color-text-secondary)] mt-2 line-clamp-2">
          {product.tagline}
        </p>

        <ul
          aria-label={`${product.name} tech stack`}
          className="flex flex-wrap gap-1.5 mt-4 mb-6 list-none p-0 m-0"
        >
          {product.techStack.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="px-2 py-0.5 text-[11px] leading-[18px] text-[var(--color-text-secondary)] bg-[var(--color-surface-strong)] border border-[var(--color-border-muted)] rounded-[5px]"
            >
              {tech}
            </li>
          ))}
          {product.techStack.length > 4 && (
            <li className="px-2 py-0.5 text-[11px] leading-[18px] text-[var(--color-text-secondary)]">
              +{product.techStack.length - 4}
            </li>
          )}
        </ul>
      </div>

      <div className="pt-3 border-t border-[var(--color-border-muted)] flex items-center justify-between gap-4">
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-1 text-[13px] font-medium text-[var(--color-text-primary)] hover:underline underline-offset-4"
        >
          View Case Study
          <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden="true" />
        </Link>

        {product.link ? (
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[12px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            Google Play
            <ArrowUpRight size={12} strokeWidth={1.75} aria-hidden="true" />
          </a>
        ) : (
          <Monitor size={14} strokeWidth={1.75} className="text-[var(--color-text-secondary)]" aria-hidden="true" />
        )}
      </div>
    </article>
  );
}
