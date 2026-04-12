import { products } from "@/data/products";
import { 
  ArrowLeft, 
  Github, 
  Globe, 
  ShieldCheck, 
  BarChart3, 
  Lock, 
  Vault, 
  UserCheck, 
  ShoppingBag, 
  Layers,
  Smartphone
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Dynamic Icon Mapper
const IconMap: Record<string, any> = {
  ShieldCheck,
  BarChart3,
  Lock,
  Vault,
  UserCheck,
  ShoppingBag,
  Layers
};

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="border-b border-gray-100 py-4 px-6 fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/products" className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-navy transition-colors">
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Back to Products
          </Link>
          <div className="flex items-center gap-4">
            {product.link?.includes("github") && (
              <a href={product.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-navy transition-colors">
                <Github size={20} />
              </a>
            )}
            <a href={product.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold px-4 py-2 bg-navy text-white rounded-lg hover:bg-gold transition-colors">
               Visit Project <Globe size={14} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            {product.logo && (
              <div className="w-20 h-20 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
                <Image 
                  src={product.logo} 
                  alt={`${product.name} Logo`} 
                  width={64} 
                  height={64} 
                  className="object-contain"
                />
              </div>
            )}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-navy mb-3">
                <Smartphone size={12} /> {product.category.toUpperCase()}
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight">
                {product.name}
              </h1>
            </div>
          </div>
          <p className="text-2xl text-gold font-bold mb-8">
            {product.tagline}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            {product.description}
          </p>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {product.features.map((feature) => {
              const Icon = IconMap[feature.icon] || Globe;
              return (
                <div key={feature.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-50 rounded-2xl flex items-center justify-center text-navy">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 bg-navy text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-black mb-12">Technology Stack</h2>
          <div className="flex flex-wrap gap-4">
            {product.techStack.map((tech) => (
              <span key={tech} className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-medium hover:bg-white/20 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Background Decals */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-3xl -mr-32 -mt-32 rounded-full" />
      </section>

      {/* Call to Action */}
      <footer className="py-32 px-6 text-center">
        <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Interested in this project?</h2>
        <div className="flex justify-center gap-4">
           {product.link && (
             <a href={product.link} target="_blank" rel="noreferrer" className="px-8 py-4 bg-navy text-white font-bold rounded-2xl hover:bg-gold transition-colors shadow-lg shadow-navy/20">
               View Live Version
             </a>
           )}
           <Link href="/" className="px-8 py-4 border border-gray-200 font-bold rounded-2xl hover:bg-gray-50 transition-colors">
             Contact Developer
           </Link>
        </div>
        <div className="mt-12 text-center">
          <Link href={`/products/${slug}/privacy-policy`} className="text-sm font-medium text-gray-400 hover:text-navy hover:underline transition-all">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
