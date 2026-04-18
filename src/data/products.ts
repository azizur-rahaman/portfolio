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
    tagline: "Simplified Peer-to-Peer Financial Ecosystem",
    description: "Lenden is a high-performance financial management application designed for the modern user. It streamlines personal lending, borrowing, and savings tracking with a focus on bank-grade security and intuitive data visualization. Built with Flutter and a robust cloud architecture, Lenden ensures your financial records are always secure and accessible.",
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
        title: "Intelligent Analytics",
        description: "Dynamic dashboards with real-time net balance tracking, monthly expenditure trends, and source distribution analytics.",
        icon: "BarChart3"
      },
      {
        title: "Ledger Management",
        description: "Effortless tracking of peer-to-peer debts and credits with automated reminders and settlement workflows.",
        icon: "Lock"
      },
      {
        title: "Smart Savings Vault",
        description: "Goal-oriented savings module that categorizes your sources (Salary, Business, Investments) for better visibility.",
        icon: "Vault"
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
      },
      {
        title: "Smart Attachments",
        description: "Digitalize your records by attaching photos and documents to any transaction via Cloudflare R2.",
        icon: "Paperclip"
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
