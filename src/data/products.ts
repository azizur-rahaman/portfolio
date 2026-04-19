export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  link?: string;
  logo?: string;
  category: "Mobile App" | "Web App" | "SaaS";
  banner?: string;
  screenshots?: string[];
}

export const products: Product[] = [
  {
    id: "lenden",
    slug: "lenden",
    name: "Lenden",
    logo: "/images/products/lenden-logo.png",
    tagline: "Intelligent Peer-to-Peer Finance & Budgeting",
    description: "Lenden is an advanced financial ecosystem that goes beyond simple debt tracking. It combines peer-to-peer ledger management with a powerful wallet system and an intelligent budget planner. Featuring real-time income/expense analysis, daily spending allowance calculations, and bank-grade security, Lenden empowers users to take full control of their financial health across multiple devices.",
    category: "Mobile App",
    techStack: ["Flutter", "BLoC", "Clean Architecture", "Firebase", "ObjectBox", "Cloudflare R2"],
    banner: "/images/products/lenden/lenden-feature-image.png",
    screenshots: [
      "/images/products/lenden/Untitled design.png",
      "/images/products/lenden/Dashboard.png",
      "/images/products/lenden/lenden-budget.png"
    ],
    features: [
      {
        title: "Biometric Security",
        description: "Advanced 4-digit PIN and optional biometric authorization for all sensitive transactions and account access.",
        icon: "ShieldCheck"
      },
      {
        title: "Wallet Management",
        description: "Sophisticated wallet system with separate tracking for income and expenses, providing a clear picture of your net worth.",
        icon: "Wallet"
      },
      {
        title: "Intelligent Budgeting",
        description: "A smart budget planner that calculates your daily spending allowance to ensure your funds last through the month.",
        icon: "Calendar"
      },
      {
        title: "Dynamic Dashboards",
        description: "Real-time net balance tracking, monthly expenditure trends, and source distribution analytics with high-performance visualization.",
        icon: "BarChart3"
      },
      {
        title: "Ledger Management",
        description: "Effortless tracking of peer-to-peer debts and credits with automated reminders and settlement workflows.",
        icon: "Lock"
      },
      {
        title: "Cloud Infrastructure",
        description: "Seamless real-time data synchronization and secure cloud backups powered by Firebase.",
        icon: "Cloud"
      },
      {
        title: "Localization",
        description: "Full multi-language support (English & Bengali) for a truly native financial experience.",
        icon: "Languages"
      }
    ],
    link: "https://play.google.com/store/apps/details?id=com.algoel.lenden"
  },
  {
    id: "zabihaty",
    slug: "zabihaty",
    name: "Zabihaty",
    tagline: "Premium E-Commerce & Catering Experience",
    description: "Zabihaty redefines the meat and catering e-commerce landscape with a seamless mobile experience. It leverages clean architecture and advanced session management to provide users with a secure and fluid ordering process for premium products and events.",
    category: "Mobile App",
    techStack: ["Flutter", "Riverpod", "REST APIs", "JWT", "Dio", "Clean Architecture"],
    features: [
      {
        title: "Secure Session Roaming",
        description: "Advanced JWT authentication with secure refresh-token rotation ensuring long-lived yet protected user sessions.",
        icon: "UserCheck"
      },
      {
        title: "Real-time Logistics",
        description: "Live order tracking system that keeps users informed from the moment of catering request to final delivery.",
        icon: "ShoppingBag"
      },
      {
        title: "Scalable Architecture",
        description: "Built using SOLID principles and Clean Architecture (Data, Domain, Presentation) for maximum maintainability.",
        icon: "Layers"
      }
    ],
    link: "https://play.google.com/store/apps/details?id=com.zabihaty.app.zabihaty"
  }
];
