export type AppIconName =
  | "cloud"
  | "sun"
  | "wallet"
  | "shoppingBag"
  | "scale"
  | "heartHandshake"
  | "bookOpen"
  | "newspaper"
  | "qrCode"
  | "building2"
  | "graduationCap";

export interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  status: "Live" | "Active";
  description: string;
  tags: string[];
  logo?: string;
  logoFullBleed?: boolean;
  icon: AppIconName;
  internalHref?: string;
  externalHref: string;
  externalLabel: string;
}

export interface CompactAppItem {
  slug: string;
  name: string;
  tagline: string;
  stack: string;
  year: string;
  logo?: string;
  logoFullBleed?: boolean;
  icon: AppIconName;
  playStoreUrl: string;
}

export interface ExperienceItem {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  workMode?: "Onsite" | "Remote";
  isCurrent?: boolean;
  logo?: string;
  logoFullBleed?: boolean;
  icon:
    | "cloud"
    | "code2"
    | "shoppingBag"
    | "rocket"
    | "cpu"
    | "landmark"
    | "smartphone"
    | "briefcase"
    | "graduationCap";
  summary: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
}

export interface AwardItem {
  title: string;
  event: string;
  year: string;
}

export interface SkillGroup {
  category: string;
  icon:
    | "code2"
    | "smartphone"
    | "server"
    | "blocks"
    | "database"
    | "container"
    | "workflow"
    | "wrench"
    | "compass";
  items: string[];
}

export const portfolioData = {
  profile: {
    name: "Azizur Rahaman",
    shortName: "Azizur",
    initials: "AR",
    avatar: "/images/avatar.png",
    role: "Product Engineer · Flutter, Next.js, Spring Boot & Cloud",
    location: "Dhaka, Bangladesh",
    timeZone: "Asia/Dhaka",
    email: "frazizur.rahaman@gmail.com",
    phone: "+880-186-290-0625",
    phoneHref: "tel:+8801862900625",
    website: "https://azizurrahaman.com",
    github: "https://github.com/azizur-rahaman",
    algoelGithub: "https://github.com/azizur-rahaman/algoel",
    googlePlayDev: "https://play.google.com/store/apps/dev?id=5083898539193320748",
    linkedin: "https://linkedin.com/in/azizur-rahaman",
    cvPath: "/Flutter-Developer-Azizur-Rahaman.pdf",
    cvFilename: "Flutter-Developer-Azizur-Rahaman.pdf",
  },

  work: [
    {
      id: "a-cloud-planet",
      title: "A Cloud Planet",
      subtitle: "Multi-Tenant Enterprise Data Center Management Platform · Plexus Cloud",
      status: "Live",
      logo: "/images/products/a-cloud-planet-logo.png",
      icon: "cloud",
      description:
        "Production-grade multi-tenant enterprise SaaS platform powering infrastructure operations, client services, and field workforce management for a 100+ crore BDT data center—spanning four apps across Flutter, React, and Next.js with a centralized Spring Boot backend, JWT + RBAC security, Docker, and GitLab CI/CD.",
      tags: [
        "Spring Boot",
        "Java",
        "Flutter",
        "React",
        "Next.js",
        "PostgreSQL",
        "JWT",
        "RBAC",
        "Docker",
        "GitLab CI/CD",
      ],
      internalHref: "/products/a-cloud-planet",
      externalHref: "https://acloudplanet.com/",
      externalLabel: "Live Site",
    },
    {
      id: "good-morning-quotes",
      title: "Good Morning Images and Quotes",
      subtitle: "100K+ Downloads · Visual Quotes & Offline Content App",
      status: "Live",
      logo: "/images/products/good-morning-quotes-logo.webp",
      logoFullBleed: true,
      icon: "sun",
      description:
        "Production Google Play app with 100K+ downloads featuring daily quotes, image-based content, category browsing, favorites, sharing, local cache persistence, push notifications, and automated CI/CD releases.",
      tags: [
        "Flutter",
        "BLoC",
        "Firebase Firestore",
        "Clean Architecture",
        "Local Cache",
        "GitHub Actions",
        "Fastlane",
      ],
      internalHref: "/products/good-morning-quotes",
      externalHref:
        "https://play.google.com/store/apps/details?id=com.fivestarapp.wishme.motivation.quotes.goodmorning.coffee",
      externalLabel: "Google Play",
    },
    {
      id: "zabihaty",
      title: "Zabihaty",
      subtitle: "E-Commerce & Event Catering App | Shopper App · Zabihaty LLC",
      status: "Live",
      icon: "shoppingBag",
      description:
        "Production cross-platform mobile application for meat e-commerce and event catering across 90+ Figma screens and 50+ REST APIs, featuring Clean Architecture, JWT refresh-token session management, Stripe payments, WebSocket updates, and push notifications.",
      tags: [
        "Flutter",
        "Riverpod",
        "REST APIs",
        "JWT",
        "Stripe",
        "WebSocket",
        "Clean Architecture",
      ],
      internalHref: "/products/zabihaty",
      externalHref: "https://play.google.com/store/apps/details?id=com.zabihaty.app.zabihaty",
      externalLabel: "Google Play",
    },
    {
      id: "lenden",
      title: "Lenden",
      subtitle: "Peer-to-Peer Finance & Budgeting App · Algoel Studio",
      status: "Live",
      logo: "/images/products/lenden-logo.webp",
      logoFullBleed: true,
      icon: "wallet",
      description:
        "Financial ecosystem combining two-way P2P debt/credit handshakes, multi-wallet analytics, biometric & 4-digit PIN security, and an intelligent daily spending planner with English and Bengali localization.",
      tags: ["Flutter", "BLoC", "Clean Architecture", "Firebase", "ObjectBox", "Cloudflare R2"],
      internalHref: "/products/lenden",
      externalHref: "https://play.google.com/store/apps/details?id=com.algoel.lenden",
      externalLabel: "Google Play",
    },
    {
      id: "ghorlagbee",
      title: "GhorLagbee",
      subtitle: "Property Rental & To-Let Finding Platform (Client & Owner) · Algoel Studio",
      status: "Live",
      logo: "/images/products/ghorlagbee-logo.webp",
      logoFullBleed: true,
      icon: "building2",
      description:
        "Zero-brokerage rental discovery platform connecting clients and property owners with geolocation & distance filtering, Google Maps integration, Firebase Auth & Firestore, push notifications, and automated CI/CD.",
      tags: [
        "Flutter",
        "BLoC",
        "Firebase",
        "Clean Architecture",
        "Geolocation",
        "GitHub Actions",
        "Fastlane",
      ],
      internalHref: "/products/ghorlagbee",
      externalHref: "https://play.google.com/store/apps/details?id=com.algoel.ghorlagbe&hl=en",
      externalLabel: "Google Play",
    },
  ] satisfies WorkItem[],

  moreApps: [
    {
      slug: "weightnote",
      name: "weightnote (ডিজিটাল ওজন খাতা)",
      tagline:
        "Offline weight batch ledger with auto Maund (৪০ কেজি = ১ মণ) conversion & PDF invoicing",
      stack: "Flutter · BLoC · SQLite / WASM",
      year: "2026",
      logo: "/images/products/weightnote-logo.webp",
      logoFullBleed: true,
      icon: "scale",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.weightnote",
    },
    {
      slug: "bhalo-kaj",
      name: "Bhalo Kaj (ভালো কাজ)",
      tagline: "Daily good-deeds habit tracker with GitHub-style heatmap & Bengali PDF reports",
      stack: "Flutter · BLoC · Drift SQLite",
      year: "2026",
      logo: "/images/products/bhalo-kaj-logo.webp",
      icon: "heartHandshake",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.bhalokaj",
    },
    {
      slug: "al-quran",
      name: "Al Quran - Bangla & Audio",
      tagline: "114 Surahs with Bengali translation, word meanings & multi-Qari audio streaming",
      stack: "Flutter · BLoC · just_audio",
      year: "2026",
      logo: "/images/products/al-quran-logo.webp",
      logoFullBleed: true,
      icon: "bookOpen",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.alquran",
    },
    {
      slug: "news-app-flash",
      name: "News App Flash",
      tagline: "Tinder-style swipeable flashcard news reader curated for Bangladesh",
      stack: "Flutter · BLoC · RSS",
      year: "2026",
      icon: "newspaper",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.news_app_flash",
    },
    {
      slug: "safeqr",
      name: "SafeQR",
      tagline: "Offline QR & barcode scanner/generator with encrypted local JSON ledger",
      stack: "Flutter · GetX · Mobile Scanner",
      year: "2026",
      logo: "/images/products/safeqr-logo.webp",
      logoFullBleed: true,
      icon: "qrCode",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.safeqr_qr_and_barcode_scanner",
    },
    {
      slug: "classmates",
      name: "Classmates",
      tagline: "University campus social network, exam bank & Gemini-powered Professor AI",
      stack: "Flutter · Gemini AI · Firebase",
      year: "2024",
      logo: "/images/products/classmates-logo.webp",
      icon: "graduationCap",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.uiu_students",
    },
  ] satisfies CompactAppItem[],

  experiences: [
    {
      company: "Plexus Cloud",
      companyUrl: "https://plexuscloud.com.bd/",
      role: "Product Engineer (Full Stack Flutter & Web)",
      period: "Apr 2026 – Present",
      location: "Dhaka, Bangladesh",
      workMode: "Onsite",
      isCurrent: true,
      logo: "/images/companies/plexus-cloud.png",
      icon: "cloud",
      summary:
        "Owned the architecture, engineering, and delivery of a production-grade multi-tenant enterprise Data Center Management Platform for a 100+ crore BDT enterprise.",
      highlights: [
        "Built a Spring Boot backend, three Next.js web portals, and a companion Flutter application end to end.",
        "Streamlined infrastructure operations, client services, and field workforce management across multi-tenant workflows.",
      ],
    },
    {
      company: "FSA Digital Labs",
      companyUrl: "https://play.google.com/store/apps/dev?id=8359579686827520274",
      role: "Flutter Developer (Full Stack)",
      period: "Jan 2026 – Mar 2026",
      location: "Dhaka, Bangladesh",
      workMode: "Remote",
      logo: "/images/companies/fsa-digital-labs.webp",
      logoFullBleed: true,
      icon: "code2",
      summary:
        "Migrated an existing native Android application to a cross-platform Flutter app paired with a full-stack web administration portal.",
      highlights: [
        "Integrated Firebase, push notifications, and cloud image management inside the Flutter client.",
        "Built a Next.js admin panel for category management, content publishing, scheduled uploads, and app administration.",
      ],
    },
    {
      company: "Zabihaty LLC",
      role: "Product Engineer",
      period: "Aug 2024 – Dec 2025",
      location: "USA",
      workMode: "Remote",
      icon: "shoppingBag",
      summary:
        "Engineered and maintained 3 cross-platform Flutter applications powering e-commerce and event catering workflows.",
      highlights: [
        "Implemented 90+ responsive Figma UI screens and integrated 50+ REST API endpoints.",
        "Managed state across 10+ modules with Riverpod, Provider, and Bloc while resolving 30+ UI and API bugs and improving screen performance.",
      ],
    },
    {
      company: "Algoel",
      companyUrl: "https://play.google.com/store/apps/dev?id=5083898539193320748",
      role: "Founder & Mobile Product Engineer",
      period: "2023 – Present",
      location: "Dhaka, Bangladesh",
      isCurrent: true,
      icon: "rocket",
      summary:
        "Independent mobile product studio designing, building, and publishing Android and Flutter apps on Google Play with 110K+ total downloads across products.",
      highlights: [
        "Shipped Lenden, weightnote, Bhalo Kaj, Al Quran - Bangla & Audio, GhorLagbee, Classmates, SafeQR, and News App Flash.",
        "Engineered offline-first persistence (Drift SQLite, ObjectBox, SQLite WASM), vector PDF invoicing, and privacy-first architectures.",
      ],
    },
    {
      company: "Focal Point Technology USA",
      role: "Flutter Developer (Full Stack)",
      period: "Mar 2023 – Jul 2024",
      location: "USA",
      workMode: "Remote",
      logo: "/images/companies/focal-point.png",
      icon: "cpu",
      summary:
        "Built a cross-platform Flutter productivity application integrated with a Bluetooth-enabled IoT Pomodoro hardware device.",
      highlights: [
        "Implemented customizable focus sessions, productivity analytics, Firebase authentication, and real-time BLE device synchronization.",
        "Optimized application performance and scalable client architecture.",
      ],
    },
    {
      company: "Standard Chartered | Nigeria",
      companyUrl: "https://www.sc.com/ng/",
      role: "Flutter Developer (Full Stack)",
      period: "Oct 2022 – Feb 2023",
      location: "Nigeria",
      workMode: "Remote",
      logo: "/images/companies/standard-chartered.png",
      icon: "landmark",
      summary:
        "Developed a QR code-based giveaway application for Standard Chartered Bank (Nigeria) internal employee campaigns.",
      highlights: [
        "Implemented QR code scanning, randomized winner selection, and real-time prize validation.",
        "Added device fingerprinting to prevent duplicate campaign participation.",
      ],
    },
    {
      company: "FSA Digital Labs",
      companyUrl: "https://play.google.com/store/apps/dev?id=8359579686827520274",
      role: "Android Developer (Full Stack)",
      period: "Apr 2021 – Jan 2022",
      location: "Dhaka, Bangladesh",
      workMode: "Remote",
      logo: "/images/companies/fsa-digital-labs.webp",
      logoFullBleed: true,
      icon: "smartphone",
      summary:
        "Developed, published, and maintained a production-ready native Android application on the Google Play Store.",
      highlights: [
        "Implemented daily quotes, image-based content feeds, category browsing, favorites, sharing, and offline caching.",
      ],
    },
    {
      company: "Upwork",
      companyUrl: "https://www.upwork.com",
      role: "Flutter Developer (Freelance – Top Rated)",
      period: "Sep 2019 – 2022",
      location: "Remote",
      workMode: "Remote",
      logo: "/images/companies/upwork.jpg",
      logoFullBleed: true,
      icon: "briefcase",
      summary:
        "Delivered 10+ Flutter applications for international clients while maintaining 100% client delivery completion.",
      highlights: [
        "Implemented JWT authentication, REST API integrations, and real-time updates with clean, documented code.",
      ],
    },
    {
      company: "Flutter Training & Community",
      role: "Instructor & Mentor · YouTube & UIU Developers Hub",
      period: "2024 – Present",
      location: "Dhaka, Bangladesh",
      isCurrent: true,
      icon: "graduationCap",
      summary:
        "Mentored 150+ students through structured Flutter training, collaborative team projects, and 15+ practical video tutorials.",
      highlights: [
        "Guided student developers at UIU Developers Hub across Git workflows, pull requests, state management, and Clean Architecture.",
      ],
    },
  ] satisfies ExperienceItem[],

  education: [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "United International University",
      location: "Dhaka, Bangladesh",
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "Khagrachhari Cantonment Public School & College",
    },
  ] satisfies EducationItem[],

  awards: [
    {
      title: "2nd Runner-Up",
      event: "Technology-Facilitated GBV Hackathon",
      year: "2026",
    },
    {
      title: "1st Runner-Up",
      event: "National Signature Hackathon",
      year: "2025",
    },
    {
      title: "7th Place",
      event: "IUT Hackathon",
      year: "2025",
    },
    {
      title: "4th Place",
      event: "IUT Hackathon",
      year: "2024",
    },
    {
      title: "Finalist",
      event: "National Collegiate Programming Contest (NCPC)",
      year: "2023",
    },
    {
      title: "District 2nd Champion",
      event: "National Science & Technology Week",
      year: "2021",
    },
    {
      title: "Champion (District)",
      event: "National Science & Technology Week",
      year: "2020",
    },
  ] satisfies AwardItem[],

  skillGroups: [
    {
      category: "Languages",
      icon: "code2",
      items: ["Java", "TypeScript", "Dart", "Python", "SQL"],
    },
    {
      category: "Frontend & Mobile",
      icon: "smartphone",
      items: ["Flutter", "React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: "server",
      items: ["Spring Boot", "NestJS", "REST APIs", "Spring Security", "JPA / Hibernate"],
    },
    {
      category: "Architecture",
      icon: "blocks",
      items: [
        "Clean Architecture",
        "Domain-Driven Design",
        "Modular Architecture",
        "JWT",
        "RBAC",
        "REST API Design",
      ],
    },
    {
      category: "Databases",
      icon: "database",
      items: ["PostgreSQL", "MySQL", "Firebase", "SQLite", "MongoDB"],
    },
    {
      category: "DevOps",
      icon: "container",
      items: ["Docker", "Fastlane", "GitHub Actions", "GitLab CI/CD"],
    },
    {
      category: "State Management",
      icon: "workflow",
      items: ["Bloc / Cubit", "Riverpod", "Provider", "Redux Toolkit"],
    },
    {
      category: "Tools",
      icon: "wrench",
      items: [
        "Claude",
        "Antigravity",
        "Git",
        "GitLab",
        "GitHub",
        "Postman",
        "Figma",
        "Stitch",
        "Figma Make",
      ],
    },
    {
      category: "Practices",
      icon: "compass",
      items: [
        "System Design",
        "Agile / Scrum",
        "Product Development",
        "Performance Optimization",
        "Responsive UI",
      ],
    },
  ] satisfies SkillGroup[],

  contact: {
    prompt:
      "Hiring a Flutter developer, building a mobile product, or looking to collaborate? My inbox is open.",
    email: "frazizur.rahaman@gmail.com",
    phone: "+880-186-290-0625",
    location: "Dhaka District, Bangladesh",
  },
};
