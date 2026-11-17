export type AppIconName =
  | "wallet"
  | "shoppingBag"
  | "scale"
  | "heartHandshake"
  | "bookOpen"
  | "newspaper"
  | "qrCode"
  | "building2"
  | "graduationCap"
  | "frame"
  | "calculator";

export interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  status: "Live" | "Active";
  description: string;
  tags: string[];
  logo?: string;
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
  icon: AppIconName;
  playStoreUrl: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  workMode?: "Onsite" | "Remote";
  isCurrent?: boolean;
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

export interface AwardItem {
  title: string;
  event: string;
  year: string;
}

export interface SkillGroup {
  category: string;
  icon: "smartphone" | "workflow" | "sparkles" | "database" | "layers";
  items: string[];
}

export const portfolioData = {
  profile: {
    name: "Azizur Rahaman",
    shortName: "Azizur",
    initials: "AR",
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
      id: "lenden",
      title: "Lenden",
      subtitle: "Peer-to-Peer Finance & Budgeting App · Algoel Studio",
      status: "Live",
      logo: "/images/products/lenden-logo.png",
      icon: "wallet",
      description:
        "Financial ecosystem combining two-way P2P debt/credit handshakes, multi-wallet analytics, biometric & 4-digit PIN security, and an intelligent daily spending planner with English and Bengali localization.",
      tags: ["Flutter", "BLoC", "Clean Architecture", "Firebase", "ObjectBox", "Cloudflare R2"],
      internalHref: "/products/lenden",
      externalHref: "https://play.google.com/store/apps/details?id=com.algoel.lenden",
      externalLabel: "Google Play",
    },
    {
      id: "zabihaty",
      title: "Zabihaty",
      subtitle: "E-Commerce & Event Catering App · Zabihaty LLC",
      status: "Live",
      icon: "shoppingBag",
      description:
        "Production cross-platform mobile application for meat e-commerce and event catering, engineered with Clean Architecture, JWT refresh-token session roaming, and real-time order logistics across 90+ Figma screens.",
      tags: ["Flutter", "Riverpod", "REST APIs", "JWT", "Dio", "Clean Architecture"],
      internalHref: "/products/zabihaty",
      externalHref: "https://play.google.com/store/apps/details?id=com.zabihaty.app.zabihaty",
      externalLabel: "Google Play",
    },
    {
      id: "weightnote",
      title: "weightnote (ডিজিটাল ওজন খাতা)",
      subtitle: "Offline Weight Batch Ledger & PDF Invoicing · Algoel Studio",
      status: "Live",
      icon: "scale",
      description:
        "Offline-first digital weighing ledger for wholesale markets and agriculture featuring a custom batch numpad, live Maund (৪০ কেজি = ১ মণ) & Kg conversion, real-time pricing in Taka (৳), and multi-page PDF invoicing.",
      tags: ["Flutter", "BLoC", "SQLite / WASM", "PDF & Printing", "GetIt"],
      internalHref: "/products/weightnote",
      externalHref: "https://play.google.com/store/apps/details?id=com.algoel.weightnote",
      externalLabel: "Google Play",
    },
  ] satisfies WorkItem[],

  moreApps: [
    {
      slug: "bhalo-kaj",
      name: "Bhalo Kaj (ভালো কাজ)",
      tagline: "Daily good-deeds habit tracker with GitHub-style heatmap & Bengali PDF reports",
      stack: "Flutter · BLoC · Drift SQLite",
      year: "2026",
      icon: "heartHandshake",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.bhalokaj",
    },
    {
      slug: "al-quran",
      name: "Al-Qur'an Bangla",
      tagline: "114 Surahs with Bengali translation, word meanings & multi-Qari audio streaming",
      stack: "Flutter · BLoC · just_audio",
      year: "2026",
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
      logo: "/images/products/safeqr/icon.png",
      icon: "qrCode",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.safeqr_qr_and_barcode_scanner",
    },
    {
      slug: "ghorlagbee",
      name: "GhorLagbee",
      tagline: "Zero-brokerage GPS To-Let discovery with Google Maps & direct owner calls",
      stack: "Flutter · Google Maps · Firebase",
      year: "2024",
      icon: "building2",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.ghorlagbe",
    },
    {
      slug: "classmates",
      name: "Classmates",
      tagline: "University campus social network, exam bank & Gemini-powered Professor AI",
      stack: "Flutter · Gemini AI · Firebase",
      year: "2024",
      icon: "graduationCap",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.uiu_students",
    },
    {
      slug: "frametastic",
      name: "FrameTastic",
      tagline: "Native photo frame designer with 100+ borders and lossless Canvas 2D filters",
      stack: "Kotlin · Canvas 2D",
      year: "2023",
      icon: "frame",
      playStoreUrl: "https://play.google.com/store/apps/details?id=xyz.quantumsoftwares.frametastic",
    },
    {
      slug: "colorful-calculator",
      name: "ColorFul Calculator",
      tagline: "Lightweight (<10MB) themeable calculator with haptic feedback & history log",
      stack: "Kotlin · Android Jetpack",
      year: "2023",
      icon: "calculator",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.quantumsoft.colorfulcalculator",
    },
  ] satisfies CompactAppItem[],

  experiences: [
    {
      company: "Plexus Cloud",
      role: "Product Engineer (Full Stack Flutter & Web)",
      period: "Apr 2026 – Present",
      location: "Dhaka, Bangladesh",
      workMode: "Onsite",
      isCurrent: true,
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
      role: "Flutter Developer (Full Stack)",
      period: "Jan 2026 – Mar 2026",
      location: "Dhaka, Bangladesh",
      workMode: "Remote",
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
      role: "Founder & Mobile Product Engineer",
      period: "2023 – Present",
      location: "Dhaka, Bangladesh",
      isCurrent: true,
      icon: "rocket",
      summary:
        "Independent mobile product studio designing, building, and publishing 10 Android and Flutter apps on Google Play with 110K+ total downloads across products.",
      highlights: [
        "Shipped Lenden, weightnote, Bhalo Kaj, Al-Qur'an Bangla, GhorLagbee, Classmates, SafeQR, News App Flash, FrameTastic, and ColorFul Calculator.",
        "Engineered offline-first persistence (Drift SQLite, ObjectBox, SQLite WASM), vector PDF invoicing, and privacy-first architectures.",
      ],
    },
    {
      company: "Focal Point Technology USA",
      role: "Flutter Developer (Full Stack)",
      period: "Mar 2023 – Jul 2024",
      location: "USA",
      workMode: "Remote",
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
      role: "Flutter Developer (Full Stack)",
      period: "Oct 2022 – Feb 2023",
      location: "Nigeria",
      workMode: "Remote",
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
      role: "Android Developer (Full Stack)",
      period: "Apr 2021 – Jan 2022",
      location: "Dhaka, Bangladesh",
      workMode: "Remote",
      icon: "smartphone",
      summary:
        "Developed, published, and maintained a production-ready native Android application on the Google Play Store.",
      highlights: [
        "Implemented daily quotes, image-based content feeds, category browsing, favorites, sharing, and offline caching.",
      ],
    },
    {
      company: "Upwork",
      role: "Flutter Developer (Freelance – Top Rated)",
      period: "Sep 2019 – 2022",
      location: "Remote",
      workMode: "Remote",
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

  education: {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "United International University",
    location: "Dhaka, Bangladesh",
  },

  awards: [
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
      category: "Mobile & Frontend",
      icon: "smartphone",
      items: ["Flutter", "Dart", "Next.js", "React", "TypeScript", "Kotlin", "Android Jetpack"],
    },
    {
      category: "Backend & Cloud",
      icon: "workflow",
      items: ["Spring Boot", "Java", "REST APIs", "JWT & RBAC Security", "CI/CD", "Cloudflare R2"],
    },
    {
      category: "State, AI & Maps",
      icon: "sparkles",
      items: [
        "BLoC / Cubit",
        "Riverpod",
        "Provider",
        "GetX",
        "Google Gemini AI",
        "Google Maps SDK",
      ],
    },
    {
      category: "Storage & Media",
      icon: "database",
      items: [
        "Firebase",
        "Drift SQLite",
        "sqflite / SQLite WASM",
        "ObjectBox",
        "flutter_secure_storage",
        "Hive",
        "just_audio",
        "PDF & Printing",
      ],
    },
    {
      category: "Architecture & Tools",
      icon: "layers",
      items: [
        "System Design",
        "Product Architecture",
        "Clean Architecture",
        "GetIt",
        "GoRouter",
        "Git",
        "Postman",
        "Figma",
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
