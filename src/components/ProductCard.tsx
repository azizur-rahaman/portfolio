import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Smartphone, Monitor, Cpu } from "lucide-react";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const Icon = product.category === "Mobile App" ? Smartphone : product.category === "Web App" ? Monitor : Cpu;

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-navy-50 rounded-xl text-navy overflow-hidden">
          {product.logo ? (
            <Image 
              src={product.logo} 
              alt={`${product.name} Logo`} 
              width={24} 
              height={24} 
              className="object-contain"
            />
          ) : (
            <Icon size={24} />
          )}
        </div>
        <span className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-full border border-gray-100 uppercase tracking-wider">
          {product.category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold transition-colors">
        {product.name}
      </h3>
      
      <p className="text-gray-600 text-sm line-clamp-2 mb-6">
        {product.tagline}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {product.techStack.slice(0, 3).map((tech) => (
          <span key={tech} className="text-[10px] bg-gray-50 text-gray-600 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
        {product.techStack.length > 3 && (
          <span className="text-[10px] text-gray-400">+{product.techStack.length - 3} more</span>
        )}
      </div>

      <Link 
        href={`/products/${product.slug}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:gap-3 transition-all"
      >
        Explore Product <ArrowRight size={16} />
      </Link>
    </div>
  );
}
