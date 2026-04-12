import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header / Nav */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-navy transition-colors font-medium">
            <ChevronLeft size={20} /> Back to CV
          </Link>
          <div className="text-xl font-bold text-navy tracking-tight">Showcase</div>
        </div>
      </header>
      <div className="h-[73px]" /> {/* Spacer for fixed header */}

      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Digital Products <span className="text-gold">&</span> Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            A selection of apps and platforms I've designed and developed. 
            Focused on clean code, secure architecture, and user-centric design.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <main className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          
          {/* Empty Placeholder for Future */}
          <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col justify-center items-center text-center opacity-40">
            <div className="w-12 h-12 rounded-full bg-gray-100 mb-4" />
            <h3 className="font-bold text-gray-400">Next Project</h3>
            <p className="text-xs text-gray-400 mt-1 italic">Cooking something new...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
