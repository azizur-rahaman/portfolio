export interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  status: "Live" | "Active";
  description: string;
  tags: string[];
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
  playStoreUrl: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent?: boolean;
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
  items: string[];
}

export const portfolioData = {
  profile: {
    name: "Azizur Rahaman",
    shortName: "Azizur",
    initials: "AR",
    role: "Flutter Developer · Mobile Product Engineer",
    location: "Dhaka, Bangladesh",
    timeZone: "Asia/Dhaka",
    email: "frazizur.rahaman@gmail.com",
    phone: "+880-186-290-0625",
    phoneHref: "tel:+8801862900625",
    website: "https://azizurrahaman.com",
    github: "https://github.com/azizur-rahaman",
    algoelGithub: "https://github.com/azizur-rahaman/algoel",
    googlePlayDev: "https://play.google.com/store/apps/dev?id=5083898539193320748",
    linkedin: "https://linkedin.com/in/azizur_rahaman",
    cvPath: "/Flutter-Developer-Azizur-Rahaman.pdf",
    cvFilename: "Flutter-Developer-Azizur-Rahaman.pdf",
  },

  work: [
    {
      id: "lenden",
      title: "Lenden",
      subtitle: "Peer-to-Peer Finance & Budgeting App · Algoel Studio",
      status: "Live",
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
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.bhalokaj",
    },
    {
      slug: "al-quran",
      name: "Al-Qur'an Bangla",
      tagline: "114 Surahs with Bengali translation, word meanings & multi-Qari audio streaming",
      stack: "Flutter · BLoC · just_audio",
      year: "2026",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.alquran",
    },
    {
      slug: "news-app-flash",
      name: "News App Flash",
      tagline: "Tinder-style swipeable flashcard news reader curated for Bangladesh",
      stack: "Flutter · BLoC · RSS",
      year: "2026",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.news_app_flash",
    },
    {
      slug: "safeqr",
      name: "SafeQR",
      tagline: "Offline QR & barcode scanner/generator with encrypted local JSON ledger",
      stack: "Flutter · GetX · Mobile Scanner",
      year: "2026",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.safeqr_qr_and_barcode_scanner",
    },
    {
      slug: "ghorlagbee",
      name: "GhorLagbee",
      tagline: "Zero-brokerage GPS To-Let discovery with Google Maps & direct owner calls",
      stack: "Flutter · Google Maps · Firebase",
      year: "2024",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.ghorlagbe",
    },
    {
      slug: "classmates",
      name: "Classmates",
      tagline: "University campus social network, exam bank & Gemini-powered Professor AI",
      stack: "Flutter · Gemini AI · Firebase",
      year: "2024",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.algoel.uiu_students",
    },
    {
      slug: "frametastic",
      name: "FrameTastic",
      tagline: "Native photo frame designer with 100+ borders and lossless Canvas 2D filters",
      stack: "Kotlin · Canvas 2D",
      year: "2023",
      playStoreUrl: "https://play.google.com/store/apps/details?id=xyz.quantumsoftwares.frametastic",
    },
    {
      slug: "colorful-calculator",
      name: "ColorFul Calculator",
      tagline: "Lightweight (<10MB) themeable calculator with haptic feedback & history log",
      stack: "Kotlin · Android Jetpack",
      year: "2023",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.quantumsoft.colorfulcalculator",
    },
  ] satisfies CompactAppItem[],

  experiences: [
    {
      company: "Zabihaty LLC",
      role: "Flutter Developer",
      period: "May 2023 – Dec 2025",
      location: "USA Remote",
      summary:
        "Developed and maintained 3 cross-platform Flutter applications with shared codebases across e-commerce and catering workflows.",
      highlights: [
        "Implemented 90+ responsive UI screens from Figma across multiple device sizes.",
        "Integrated 15+ REST API endpoints for authentication, product catalog, orders, and notifications.",
        "Managed state across 10+ feature modules with Riverpod, Provider, and Bloc while resolving 30+ UI, API, and state bugs.",
      ],
    },
    {
      company: "Algoel",
      role: "Founder & Mobile Product Engineer",
      period: "2023 – Present",
      location: "Dhaka, Bangladesh",
      isCurrent: true,
      summary:
        "Independent mobile product studio designing, engineering, and publishing high-utility Android and Flutter applications on Google Play.",
      highlights: [
        "Built and shipped 10 utility, fintech, rental, campus, and Bengali-first apps including Lenden, weightnote, Bhalo Kaj, Al-Qur'an Bangla, GhorLagbee, Classmates, SafeQR, and News App Flash.",
        "Engineered offline-first local persistence (Drift SQLite, ObjectBox, SQLite WASM), vector PDF invoicing, and privacy-focused architectures.",
      ],
    },
    {
      company: "UIU Developers Hub",
      role: "Flutter Developer",
      period: "Feb 2024 – Present",
      location: "United International University",
      isCurrent: true,
      summary:
        "Collaborating in a 5–6 member engineering team to design and build Flutter-based academic and demonstration applications.",
      highlights: [
        "Built modular UI features using structured widgets, navigation flows, and state management.",
        "Maintained Git-based workflows for version control, pull requests, and peer code reviews.",
      ],
    },
    {
      company: "Upwork",
      role: "Flutter Developer (Freelance – Top Rated)",
      period: "Sep 2019 – Present",
      location: "Remote",
      isCurrent: true,
      summary:
        "Partnering with international clients to ship reliable cross-platform mobile apps and feature integrations.",
      highlights: [
        "Delivered 5+ Flutter applications and features with 100% client delivery completion.",
        "Implemented JWT authentication, REST API integration, and real-time updates with clean, documented code.",
      ],
    },
    {
      company: "YouTube",
      role: "Instructor & Content Creator",
      period: "May 2025 – Present",
      location: "Bangladesh",
      isCurrent: true,
      summary:
        "Teaching beginner-to-intermediate Flutter development to hundreds of learners through practical video walkthroughs.",
      highlights: [
        "Created 15+ Flutter tutorial videos covering widgets, state management, and scalable app structure.",
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
      category: "Mobile & UI",
      items: ["Flutter", "Dart", "Kotlin", "Android Jetpack", "Responsive UI & Navigation"],
    },
    {
      category: "State Management",
      items: ["BLoC / Cubit", "Riverpod", "Provider", "GetX"],
    },
    {
      category: "APIs, AI & Maps",
      items: [
        "REST APIs",
        "JSON",
        "Dio",
        "JWT & Refresh-Token Sessions",
        "Google Gemini AI",
        "Google Maps SDK",
      ],
    },
    {
      category: "Storage & Media",
      items: [
        "Firebase",
        "Drift SQLite",
        "sqflite / SQLite WASM",
        "ObjectBox",
        "Cloudflare R2",
        "flutter_secure_storage",
        "Hive",
        "just_audio",
        "PDF & Printing",
      ],
    },
    {
      category: "Architecture & Tools",
      items: ["Clean Architecture", "GetIt", "GoRouter", "Clean Code", "Git", "Postman", "Figma"],
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
