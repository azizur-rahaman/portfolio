import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const BASE_URL = "https://azizurrahaman.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...productRoutes,
    {
      url: `${BASE_URL}/products/lenden/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
