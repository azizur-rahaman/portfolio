import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />

      <main id="main-content" className="editorial-container flex-1 pt-8 pb-20">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="text-[32px] sm:text-[40px] leading-[1.1] font-medium tracking-[-0.03em] text-[var(--color-text-primary)]">
            Products &amp; Case Studies
          </h1>
          <p className="text-[15px] leading-[24px] text-[var(--color-text-secondary)] mt-3 max-w-xl">
            Production mobile applications built with Flutter, Clean Architecture, and scalable state management.
          </p>
        </header>

        <section aria-labelledby="heading-products">
          <div id="heading-products" className="sr-only">
            Products
          </div>
          <SectionHeader index="01" title="Shipped Applications" />

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
