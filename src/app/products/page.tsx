import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";
import { portfolioData } from "@/data/portfolio";
import ProductCard from "@/components/ProductCard";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Products & Shipped Apps",
  description:
    "Explore 12 production mobile and enterprise web products engineered by Azizur Rahaman—including A Cloud Planet, Lenden, Zabihaty, GhorLagbee, weightnote, Bhalo Kaj, and Classmates.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products & Shipped Apps — Azizur Rahaman",
    description:
      "12 production mobile and enterprise SaaS products built with Flutter, Next.js, Spring Boot, and Clean Architecture.",
    url: "/products",
  },
};

export default function ProductsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Products & Shipped Apps — Azizur Rahaman",
    url: "https://azizurrahaman.com/products",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `https://azizurrahaman.com/products/${product.slug}`,
      })),
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={structuredData} />
      <TopNav />

      <main id="main-content" className="editorial-container flex-1 pt-8 pb-20">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            <span>Back to Portfolio</span>
          </Link>

          <a
            href={portfolioData.profile.googlePlayDev}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[12px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <span>Algoel on Google Play</span>
            <ArrowUpRight size={12} aria-hidden="true" />
          </a>
        </div>

        <header className="mb-12">
          <h1 className="text-[32px] sm:text-[40px] leading-[1.1] font-medium tracking-[-0.03em] text-[var(--color-text-primary)]">
            Products &amp; Shipped Apps
          </h1>
          <p className="text-[15px] leading-[24px] text-[var(--color-text-secondary)] mt-3 max-w-xl">
            All {products.length} products and applications I architected and shipped across Plexus Cloud, FSA Digital Labs, Zabihaty LLC, and Algoel Studio—spanning enterprise multi-tenant SaaS, fintech, offline trade ledgers, rental discovery, campus AI, and privacy-first utilities.
          </p>
        </header>

        <section aria-labelledby="heading-products">
          <SectionHeader
            index="01"
            title={`All Applications (${products.length})`}
            headingId="heading-products"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
