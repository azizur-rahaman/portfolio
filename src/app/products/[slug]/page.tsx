import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Calendar,
  Cloud,
  Globe,
  Languages,
  Layers,
  Lock,
  Paperclip,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  UserCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { products } from "@/data/products";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

const IconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  BarChart3,
  BookOpen,
  Lock,
  Wallet,
  Calendar,
  UserCheck,
  ShoppingBag,
  Sparkles,
  Layers,
  Cloud,
  Languages,
  Paperclip,
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />

      <main id="main-content" className="editorial-container flex-1 pt-8 pb-20">
        <div className="flex items-center justify-between gap-4 mb-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            <span>All Products</span>
          </Link>

          {product.link && (
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[6px] bg-[var(--color-surface-inverse)] text-[var(--color-text-inverse)] text-[13px] font-medium hover:opacity-90 transition-opacity"
            >
              <span>View on Google Play</span>
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          )}
        </div>

        {/* Product Header */}
        <header className="pb-10 border-b border-[var(--color-border-default)]">
          <div className="flex items-center gap-4 mb-6">
            {product.logo && (
              <div className="w-16 h-16 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] p-2.5 flex items-center justify-center shrink-0 overflow-hidden">
                <Image
                  src={product.logo}
                  alt={`${product.name} Logo`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            )}

            <div>
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-secondary)]">
                <span className="inline-flex items-center gap-1">
                  <Smartphone size={12} aria-hidden="true" />
                  {product.category}
                </span>
                {product.releaseYear && <span>· {product.releaseYear}</span>}
                {product.rating && <span>· {product.rating}</span>}
              </div>
              <h1 className="text-[30px] sm:text-[40px] leading-[1.1] font-medium tracking-[-0.03em] text-[var(--color-text-primary)] mt-1">
                {product.name}
              </h1>
            </div>
          </div>

          <p className="text-[18px] leading-[26px] font-medium text-[var(--color-text-primary)] mb-3">
            {product.tagline}
          </p>
          <p className="text-[15px] leading-[24px] text-[var(--color-text-secondary)]">
            {product.description}
          </p>

          {(product.platforms || product.badge) && (
            <div className="flex flex-wrap items-center gap-2 mt-5">
              {product.badge && (
                <span className="px-2.5 py-1 text-[11px] font-medium text-[var(--color-status-live)] bg-[var(--color-pill-green-bg)] border border-[var(--color-pill-green-border)] rounded-[4px]">
                  {product.badge}
                </span>
              )}
              {product.platforms?.map((platform) => (
                <span
                  key={platform}
                  className="px-2.5 py-1 text-[11px] font-mono text-[var(--color-text-secondary)] bg-[var(--color-surface-raised)] border border-[var(--color-border-muted)] rounded-[4px]"
                >
                  {platform}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Visual Showcase */}
        {(product.banner || (product.screenshots && product.screenshots.length > 0)) && (
          <section className="py-12">
            <SectionHeader index="01" title="Interface" />

            <div className="rounded-xl overflow-hidden border border-[var(--color-border-default)] bg-[var(--color-surface-raised)]">
              {product.banner && (
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={product.banner}
                    alt={`${product.name} feature overview`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {product.screenshots && product.screenshots.length > 0 && (
                <div
                  className={`grid grid-cols-1 ${
                    product.screenshots.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
                  } ${product.banner ? "border-t border-[var(--color-border-muted)]" : ""}`}
                >
                  {product.screenshots.map((screenshot, index) => (
                    <div
                      key={screenshot}
                      className="relative aspect-[9/16] border-b sm:border-b-0 sm:border-r last:border-b-0 last:border-r-0 border-[var(--color-border-muted)] overflow-hidden"
                    >
                      <Image
                        src={screenshot}
                        alt={`${product.name} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Core Features */}
        <section className="py-10">
          <SectionHeader index="02" title="Capabilities" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {product.features.map((feature) => {
              const Icon = IconMap[feature.icon] ?? Globe;
              return (
                <div
                  key={feature.title}
                  className="p-5 rounded-xl bg-[var(--color-surface-raised)] border border-[var(--color-border-muted)]"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon
                      size={16}
                      className="text-[var(--color-text-primary)] shrink-0"
                      aria-hidden="true"
                    />
                    <h2 className="text-[15px] font-medium text-[var(--color-text-primary)]">
                      {feature.title}
                    </h2>
                  </div>
                  <p className="text-[13px] leading-[21px] text-[var(--color-text-secondary)]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-10">
          <SectionHeader index="03" title="Architecture & Stack" />

          <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
            {product.techStack.map((tech) => (
              <li
                key={tech}
                className="px-3 py-1.5 text-[13px] font-medium text-[var(--color-text-primary)] bg-[var(--color-surface-raised)] border border-[var(--color-border-default)] rounded-[6px]"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* Footer Links */}
        <div className="pt-8 border-t border-[var(--color-border-muted)] flex flex-wrap items-center justify-between gap-4 text-[13px]">
          <Link
            href="/#contact"
            className="text-[var(--color-text-primary)] font-medium hover:underline underline-offset-4"
          >
            Contact Developer →
          </Link>

          {slug === "lenden" && (
            <div className="flex items-center gap-4 text-[var(--color-text-secondary)]">
              <Link
                href={`/products/${slug}/privacy-policy`}
                className="hover:text-[var(--color-text-primary)] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href={`/products/${slug}/delete-account`}
                className="hover:text-[var(--color-text-primary)] transition-colors"
              >
                Delete Account
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
