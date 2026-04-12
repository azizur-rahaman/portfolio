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
}

export const products: Product[] = [
  {
    id: "lenden",
    slug: "lenden",
    name: "Lenden",
    logo: "/images/products/lenden-logo.png",
    tagline: "Secure Peer-to-Peer Financial Management",
    description: "A minimalist yet powerful Flutter application designed to simplify personal lending, borrowing, and savings tracking. Lenden combines bank-grade security with an intuitive financial dashboard.",
    category: "Mobile App",
    techStack: ["Flutter", "Riverpod", "Firebase", "Isar DB", "Cloudflare R2", "Brevo API"],
    features: [
      {
        title: "Secure PIN Reset",
        description: "Robust 3-step security flow featuring email OTP verification via Brevo and 4-digit code lifecycle management.",
        icon: "ShieldCheck"
      },
      {
        title: "Smart Analytics",
        description: "Real-time Net Balance calculation, monthly trends visualization, and detailed saving source distribution charts.",
        icon: "BarChart3"
      },
      {
        title: "Transaction Security",
        description: "Mandatory PIN authorization for all peer-to-peer transfers, ensuring every transaction is explicitly verified.",
        icon: "Lock"
      },
      {
        title: "Vault Savings",
        description: "Specialized savings module with category-based tracking (Salary, Business, Investment) and goals.",
        icon: "Vault"
      }
    ],
    link: "https://github.com/azizur-rahaman/lenden"
  },
  {
    id: "zabihaty",
    slug: "zabihaty",
    name: "Zabihaty",
    tagline: "E-Commerce & Event Catering Redefined",
    description: "A comprehensive e-commerce solution specialized in meat products and event catering. Built with a focus on session security and clean architecture.",
    category: "Mobile App",
    techStack: ["Flutter", "Riverpod", "REST APIs", "JWT", "Dio", "Clean Architecture"],
    features: [
      {
        title: "Session Management",
        description: "Advanced JWT authentication with secure Refresh-Token rotation for long-lived user sessions.",
        icon: "UserCheck"
      },
      {
        title: "Order Tracking",
        description: "Real-time status updates for catering orders and product deliveries.",
        icon: "ShoppingBag"
      },
      {
        title: "Clean Architecture",
        description: "Highly maintainable solid code structure separated by Data, Domain, and Presentation layers.",
        icon: "Layers"
      }
    ],
    link: "https://play.google.com/store/apps/details?id=com.zabihaty.app.zabihaty"
  }
];
