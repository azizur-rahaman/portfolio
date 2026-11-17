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
  extraLinks?: { label: string; href: string }[];
  highlights?: string[];
  logo?: string;
  logoFullBleed?: boolean;
  iconSymbol?: string;
  category:
    | "Enterprise SaaS"
    | "Mobile App"
    | "Finance & Fintech"
    | "Utilities & Tools"
    | "Productivity & Lifestyle"
    | "Books & Reference"
    | "House & Home"
    | "Education & Campus"
    | "News & Magazines"
    | "Creative & Design";
  releaseYear?: string;
  platforms?: string[];
  rating?: string;
  badge?: string;
  banner?: string;
  screenshots?: string[];
}

export const products: Product[] = [
  {
    id: "a-cloud-planet",
    slug: "a-cloud-planet",
    name: "A Cloud Planet",
    logo: "/images/products/a-cloud-planet-logo.png",
    tagline: "Multi-Tenant Enterprise Data Center Management Platform",
    description:
      "Designed, architected, and delivered a production-grade multi-tenant enterprise SaaS platform powering infrastructure operations, client services, and field workforce management for a 100+ crore BDT enterprise data center. Built four production applications across Flutter, React, and Next.js with a centralized Spring Boot backend, implementing secure tenant isolation, JWT/RBAC authorization, scalable REST APIs, and enterprise-grade workflows.",
    category: "Enterprise SaaS",
    releaseYear: "2026",
    platforms: ["Web", "Android", "iOS", "Backend"],
    badge: "100+ Crore BDT Enterprise",
    techStack: [
      "Spring Boot",
      "Java",
      "Flutter",
      "React",
      "Next.js",
      "Redux",
      "BLoC",
      "Clean Architecture",
      "PostgreSQL",
      "JWT",
      "RBAC",
      "Docker",
      "GitLab CI/CD",
    ],
    highlights: [
      "Engineered scalable multi-tenant architecture supporting multiple organizations with isolated data and permission models.",
      "Developed production features across Flutter, React, and Next.js applications integrated with a centralized Spring Boot backend.",
      "Designed secure authentication and authorization using JWT + RBAC.",
      "Collaborated on enterprise workflows including infrastructure operations, service management, and field activity tracking.",
      "Optimized application performance and deployment using Docker and GitLab CI/CD.",
    ],
    features: [
      {
        title: "Multi-Tenant Isolation & RBAC",
        description:
          "Isolated organization data boundaries paired with fine-grained JWT and role-based access control.",
        icon: "ShieldCheck",
      },
      {
        title: "Four Production Applications",
        description:
          "Three Next.js / React enterprise portals plus a companion Flutter mobile app powered by one Spring Boot core.",
        icon: "Layers",
      },
      {
        title: "Infrastructure & Field Ops",
        description:
          "Streamlined data center operations, client service ticketing, and field workforce tracking.",
        icon: "Cloud",
      },
      {
        title: "Containerized CI/CD Delivery",
        description:
          "Dockerized services and automated GitLab CI/CD pipelines backed by PostgreSQL.",
        icon: "BarChart3",
      },
    ],
    link: "https://acloudplanet.com/",
    extraLinks: [
      { label: "Website", href: "https://acloudplanet.com/" },
      { label: "DCM Portal", href: "https://dcm.acloudplanet.com" },
      { label: "Dev Portal", href: "https://dev.acloudplanet.com" },
      { label: "API", href: "https://api.acloudplanet.com" },
    ],
  },
  {
    id: "good-morning-quotes",
    slug: "good-morning-quotes",
    name: "Good Morning Images and Quotes",
    logo: "/images/products/good-morning-quotes-logo.webp",
    logoFullBleed: true,
    tagline: "100K+ Downloads Daily Quotes, Visual Cards & Offline Content App",
    description:
      "Production mobile application with 100K+ downloads on Google Play, featuring daily quotes, curated image-based content, category browsing, favorites, one-tap sharing, offline caching, and a Next.js admin panel for scheduled publishing and content administration.",
    category: "Productivity & Lifestyle",
    releaseYear: "2021–2026",
    platforms: ["Android", "iOS"],
    rating: "100K+ Downloads",
    badge: "100K+ Play Store Downloads",
    techStack: [
      "Flutter",
      "BLoC",
      "Firebase Firestore",
      "Firebase Storage",
      "Clean Architecture",
      "Responsive UI",
      "Local Storage (Cache)",
      "Push Notifications",
      "CI/CD (Cider, GitHub Actions, Fastlane)",
    ],
    features: [
      {
        title: "Daily Quotes & Visual Feeds",
        description:
          "High-engagement image cards and categorized daily quotes with instant sharing and favorites.",
        icon: "Sparkles",
      },
      {
        title: "Offline Caching & Push Alerts",
        description:
          "Local cache persistence for seamless offline browsing paired with Firebase Cloud Messaging alerts.",
        icon: "Cloud",
      },
      {
        title: "Automated CI/CD Release Pipeline",
        description:
          "Continuous integration and store deployment automated via Cider, GitHub Actions, and Fastlane.",
        icon: "Layers",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.fivestarapp.wishme.motivation.quotes.goodmorning.coffee",
  },
  {
    id: "lenden",
    slug: "lenden",
    name: "Lenden",
    logo: "/images/products/lenden-logo.webp",
    logoFullBleed: true,
    tagline: "Intelligent Peer-to-Peer Finance & Budgeting",
    description:
      "Lenden is an advanced financial ecosystem that goes beyond simple debt tracking. It combines peer-to-peer ledger management with a powerful wallet system and an intelligent budget planner. Featuring real-time income/expense analysis, daily spending allowance calculations, two-way P2P handshakes, and bank-grade PIN & biometric security, Lenden empowers users to take full control of their financial health across devices.",
    category: "Finance & Fintech",
    releaseYear: "2024",
    platforms: ["Android", "iOS"],
    rating: "5.0★ Google Play",
    badge: "Featured Finance App",
    techStack: ["Flutter", "BLoC", "Clean Architecture", "Firebase", "ObjectBox", "Cloudflare R2"],
    banner: "/images/products/lenden/lenden-feature-image.png",
    screenshots: [
      "/images/products/lenden/Untitled design.png",
      "/images/products/lenden/Dashboard.png",
      "/images/products/lenden/lenden-budget.png",
    ],
    features: [
      {
        title: "Biometric & PIN Security",
        description:
          "4-digit security PIN and optional biometric authorization for all sensitive transactions and account access.",
        icon: "ShieldCheck",
      },
      {
        title: "Wallet Management",
        description:
          "Multi-wallet tracking separating income and expenses to give a clear real-time picture of net worth.",
        icon: "Wallet",
      },
      {
        title: "Intelligent Budgeting",
        description:
          "Smart budget planner calculating daily spending allowances so funds stay balanced through the month.",
        icon: "Calendar",
      },
      {
        title: "Dynamic Dashboards",
        description:
          "Real-time net balance tracking, monthly expenditure trends, and source distribution analytics.",
        icon: "BarChart3",
      },
      {
        title: "P2P Ledger & Handshake",
        description:
          "Two-way peer-to-peer debt and credit tracking with verification handshakes and settlement workflows.",
        icon: "Lock",
      },
      {
        title: "Cloud Infrastructure",
        description:
          "Real-time data synchronization and secure cloud backups powered by Firebase and Cloudflare R2.",
        icon: "Cloud",
      },
      {
        title: "Bilingual Localization",
        description:
          "Full English and Bengali language support for a native local financial experience.",
        icon: "Languages",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.algoel.lenden",
  },
  {
    id: "zabihaty",
    slug: "zabihaty",
    name: "Zabihaty",
    tagline: "E-Commerce & Event Catering App | Shopper App",
    description:
      "Zabihaty redefines the meat and catering e-commerce landscape with a seamless cross-platform mobile experience. Engineered with Clean Architecture, JWT refresh-token session management, Stripe payments, WebSocket real-time updates, and push notifications across 90+ Figma-matched screens and 50+ REST APIs.",
    category: "Mobile App",
    releaseYear: "2024–2025",
    platforms: ["Android", "iOS"],
    badge: "Production Client App",
    techStack: [
      "Flutter",
      "Riverpod",
      "REST APIs",
      "JWT",
      "Dio",
      "Refresh-Token Session",
      "Clean Architecture",
      "Stripe",
      "WebSocket",
      "Push Notifications",
    ],
    features: [
      {
        title: "Secure Session Management",
        description:
          "JWT authentication with refresh-token rotation ensuring long-lived yet protected user sessions.",
        icon: "UserCheck",
      },
      {
        title: "Real-Time Order Logistics",
        description:
          "Live order tracking keeping customers informed from catering request placement to final delivery.",
        icon: "ShoppingBag",
      },
      {
        title: "Modular Clean Architecture",
        description:
          "Built with SOLID principles across Data, Domain, and Presentation layers for maintainability across 3 shared apps.",
        icon: "Layers",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.zabihaty.app.zabihaty",
  },
  {
    id: "weightnote",
    slug: "weightnote",
    name: "weightnote (ডিজিটাল ওজন খাতা)",
    logo: "/images/products/weightnote-logo.webp",
    logoFullBleed: true,
    tagline: "Precision Weight Batch Ledger, Auto Maund Conversion & PDF Invoicing",
    description:
      "An offline-first digital weighing ledger built for trade, agriculture, poultry, livestock, and wholesale commodity markets. Operators record serial weight batches on an optimized quick numpad, get live Maund (৪০ কেজি = ১ মণ) & Kg breakdowns, calculate total pricing in Taka (৳), and export multi-page print-ready PDF invoices with zero account registration.",
    category: "Utilities & Tools",
    releaseYear: "2026",
    platforms: ["Android", "Web", "macOS", "iOS"],
    rating: "5.0★ Google Play",
    badge: "100% Offline & Ad-Free",
    techStack: [
      "Flutter 3 & Dart",
      "BLoC",
      "SQLite & WASM",
      "PDF & Printing",
      "GetIt",
      "ScreenUtil",
    ],
    features: [
      {
        title: "Rapid Weight Batch Numpad",
        description:
          "Custom numerical pad with auto-advancing serial numbers, piece counter, and single-tap Save & Next workflow.",
        icon: "Layers",
      },
      {
        title: "Auto Maund (মন) Conversion",
        description:
          "Real-time computation of traditional South Asian Maund & Kg breakdowns alongside metric totals.",
        icon: "BarChart3",
      },
      {
        title: "Live Pricing & Valuation",
        description:
          "Dynamic price-per-kg calculation with instant grand total valuation in Bangladeshi Taka (৳).",
        icon: "Wallet",
      },
      {
        title: "Multi-Page PDF Invoices",
        description:
          "Vector-rendered weighing ledgers with business headers, notes, timestamped logs, and native sharing.",
        icon: "Paperclip",
      },
      {
        title: "100% Offline On-Device Storage",
        description:
          "Powered by sqflite and SQLite3 WebAssembly with zero cloud telemetry or login barriers.",
        icon: "Lock",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.algoel.weightnote",
  },
  {
    id: "bhalo-kaj",
    slug: "bhalo-kaj",
    name: "Bhalo Kaj (ভালো কাজ)",
    logo: "/images/products/bhalo-kaj-logo.webp",
    tagline: "Daily Good Deeds Habit Tracker with GitHub-Style Activity Heatmap & PDF Reports",
    description:
      "A serene, privacy-first habit tracker inspired by GitHub contribution heatmaps. Users log everyday good deeds with custom notes or quick chips, inspect chronological logs for any calendar date, track streaks on a 4-tier heatmap, and export multi-page Bengali PDF reports rendered with Noto Sans Bengali.",
    category: "Productivity & Lifestyle",
    releaseYear: "2026",
    platforms: ["Android", "Web", "macOS"],
    rating: "5.0★ Google Play",
    badge: "100% Offline & Privacy-First",
    techStack: [
      "Flutter 3 & Dart",
      "BLoC",
      "Drift SQLite",
      "GetIt",
      "Noto Sans Bengali",
      "PDF & Printing",
    ],
    features: [
      {
        title: "GitHub-Style Monthly Heatmap",
        description:
          "4-tier color intensity matrix visualizing daily consistency and good-deed frequency at a glance.",
        icon: "Calendar",
      },
      {
        title: "One-Tap Deed Recording",
        description:
          "Quick-suggestion chips and custom note bottom sheet with instant chronological day inspection.",
        icon: "Sparkles",
      },
      {
        title: "Bengali PDF Monthly Reports",
        description:
          "Multi-page vector PDF export using Noto Sans Bengali typography plus shareable social progress cards.",
        icon: "Paperclip",
      },
      {
        title: "Local Drift SQLite Sovereignty",
        description:
          "Zero login, zero ads, and zero cloud tracking—every deed stays strictly private on-device.",
        icon: "Lock",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.algoel.bhalokaj",
  },
  {
    id: "al-quran",
    slug: "al-quran",
    name: "Al Quran - Bangla & Audio",
    logo: "/images/products/al-quran-logo.webp",
    logoFullBleed: true,
    tagline: "Authentic Quran with Bengali Translation, Audio Recitation & Word Meanings",
    description:
      "A distraction-free digital Quran experience offering all 114 Surahs (6,236 Ayahs) with Indo-Pak and Uthmani scripts, authentic Bengali translations, word-by-word root meanings, multi-Qari background audio streaming, and a reverent dark-stone night reading aesthetic.",
    category: "Books & Reference",
    releaseYear: "2026",
    platforms: ["Android", "iOS", "macOS"],
    rating: "5.0★ Google Play",
    badge: "100% Free & Ad-Free",
    techStack: [
      "Flutter 3 & Dart",
      "BLoC",
      "just_audio",
      "audio_session",
      "GoRouter",
      "Material 3",
    ],
    features: [
      {
        title: "Complete 114 Surahs & Word Meanings",
        description:
          "Arabic calligraphy paired with Bengali transliteration, authentic translations, and word-by-word meanings.",
        icon: "BookOpen",
      },
      {
        title: "Multi-Qari Audio Player",
        description:
          "Background recitation streaming and caching with playback speed controls (0.75x–2.0x) and persistent mini-player.",
        icon: "Globe",
      },
      {
        title: "Smart Search & Bookmarks",
        description:
          "Instant Bengali search across surah titles, revelations, and verses, plus automatic last-read resume.",
        icon: "Layers",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.algoel.alquran",
  },
  {
    id: "ghorlagbee",
    slug: "ghorlagbee",
    name: "GhorLagbee",
    logo: "/images/products/ghorlagbee-logo.webp",
    logoFullBleed: true,
    tagline: "Property Rental & To-Let Finding Platform (Client & Owner)",
    description:
      "GhorLagbee removes broker friction from apartment and bachelor room hunting in Bangladesh across both Client and Owner experiences. Built with Flutter, BLoC, Clean Architecture, Firebase (Auth & Firestore), geolocation distance filtering, push notifications, and automated CI/CD pipelines (Cider, GitHub Actions, Fastlane).",
    category: "House & Home",
    releaseYear: "2024",
    platforms: ["Android"],
    rating: "4.6★ Google Play",
    badge: "Zero Broker Commission",
    techStack: [
      "Flutter",
      "BLoC",
      "Firebase (Auth, Firestore)",
      "Clean Architecture",
      "Geolocation & Distance Filtering",
      "Responsive UI",
      "Local Storage",
      "Push Notifications",
      "CI/CD (Cider, GitHub Actions, Fastlane)",
    ],
    features: [
      {
        title: "GPS Nearby Property Radar",
        description:
          "Discover verified family flats, sublets, and bachelor rooms plotted within your radius on Google Maps.",
        icon: "Globe",
      },
      {
        title: "Direct Owner Calling",
        description:
          "Eliminate middlemen with one-tap verified owner calling and real-time listing demand counts.",
        icon: "UserCheck",
      },
      {
        title: "Tailored Rental Filters",
        description:
          "Filter seamlessly by neighborhood, monthly budget, property type, and saved watchlists.",
        icon: "Layers",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.algoel.ghorlagbe",
  },
  {
    id: "classmates",
    slug: "classmates",
    name: "Classmates",
    logo: "/images/products/classmates-logo.webp",
    tagline: "All-in-One UIU Campus Social Platform & AI Study Companion",
    description:
      "Built exclusively for United International University (UIU) students across 12 academic departments, Classmates combines a real-time campus discussion feed, 1-on-1 student messenger, verified university email (@*.uiu.ac.bd) authentication, official UIU notice circulars with an in-app PDF/Excel/Word viewer, a searchable past exam question bank, CGPA & tuition fee planners, referral contests, and 24/7 Professor AI powered by Google Gemini.",
    category: "Education & Campus",
    releaseYear: "2024–2026",
    platforms: ["Android"],
    rating: "4.2★ Google Play",
    badge: "Verified UIU Campus Network",
    techStack: [
      "Flutter",
      "Google Gemini AI",
      "Firebase Realtime Chat",
      "FCM Push Notifications",
      "In-App Document Viewer",
      "Multi-Device Session Auth",
    ],
    features: [
      {
        title: "Professor AI (24/7 Study Assistant)",
        description:
          "Step-by-step math, algorithm, engineering, and coding solver powered by Google Gemini AI.",
        icon: "Sparkles",
      },
      {
        title: "Campus Feed & 1-on-1 Messenger",
        description:
          "Student discussion feed with media compression, emoji reactions, threaded comments, and real-time private chat across 12 departments.",
        icon: "Cloud",
      },
      {
        title: "Official Notices & Question Bank",
        description:
          "Real-time UIU circulars with built-in PDF, Excel, and Word viewer plus searchable mid-term and final exam papers with offline bookmarks.",
        icon: "BookOpen",
      },
      {
        title: "Academic Calendar, CGPA & Tuition Planner",
        description:
          "Trimester deadlines, cumulative CGPA forecaster, and credit tuition estimator supporting 0%–100% scholarship waivers.",
        icon: "BarChart3",
      },
      {
        title: "Refer & Win Referral Leaderboard",
        description:
          "Verified student referral codes with real-time university leaderboard tracking and instant signup push alerts.",
        icon: "UserCheck",
      },
      {
        title: "Verified Security & Session Control",
        description:
          "Official @*.uiu.ac.bd email verification, Midnight Slate dark mode, and remote multi-device session revocation.",
        icon: "ShieldCheck",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.algoel.uiu_students",
  },
  {
    id: "news-app-flash",
    slug: "news-app-flash",
    name: "News App Flash",
    logo: "/images/products/news-app-flash-logo.jpg",
    logoFullBleed: true,
    tagline: "Tinder-Style Flashcard News Reader for Bangladesh",
    description:
      "A fast, distraction-free Bangladesh news reader built with Flutter and BLoC. Replaces cluttered newspaper portals with swipeable flashcards—swipe left to skip, swipe right to bookmark, or tap to read verified national stories in under 60 seconds with zero login.",
    category: "News & Magazines",
    releaseYear: "2026",
    platforms: ["Android"],
    rating: "5.0★ Google Play",
    badge: "Zero Login & Ad-Light",
    techStack: [
      "Flutter 3 & Dart",
      "BLoC",
      "Card Swiper Engine",
      "RSS / XML Parser",
      "Material 3",
    ],
    features: [
      {
        title: "Swipeable Flashcard Deck",
        description:
          "Swipe left to skip, right to save bookmarks, and rewind cards smoothly at 120 FPS.",
        icon: "Layers",
      },
      {
        title: "Curated Bangladesh Headlines",
        description:
          "Aggregates verified national publishers with parsed high-resolution thumbnails and in-app reading.",
        icon: "Globe",
      },
      {
        title: "Zero Account Privacy",
        description:
          "No sign-up, phone number, or tracking required—bookmarks stay cached locally offline.",
        icon: "Lock",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.algoel.news_app_flash",
  },
  {
    id: "safeqr",
    slug: "safeqr",
    name: "SafeQR",
    logo: "/images/products/safeqr-logo.webp",
    logoFullBleed: true,
    tagline: "Fast & Secure Offline QR and Barcode Scanner & Generator",
    description:
      "An offline-first QR and barcode toolkit engineered with Flutter and GetX. SafeQR delivers sub-second viewfinder scanning with haptic confirmation, gallery decoding, custom QR creation (Wi-Fi, URLs, vCards), and an on-device history ledger with JSON import/export.",
    category: "Utilities & Tools",
    releaseYear: "2026",
    platforms: ["Android"],
    rating: "5.0★ Google Play",
    badge: "100% Offline & Private",
    techStack: [
      "Flutter 3 & Dart",
      "GetX",
      "Mobile Scanner",
      "QR Flutter",
      "JSON Backup",
    ],
    screenshots: [
      "/images/products/safeqr/home_dark.png",
      "/images/products/safeqr/scan_dark.png",
    ],
    features: [
      {
        title: "Sub-Second Camera & Gallery Scan",
        description:
          "Instant 1D/2D barcode and QR detection from live camera feed or saved gallery screenshots.",
        icon: "ShieldCheck",
      },
      {
        title: "Universal QR Code Generator",
        description:
          "Create and export high-resolution codes for Wi-Fi networks, URLs, vCards, emails, and plain text.",
        icon: "Layers",
      },
      {
        title: "Private Local Ledger & JSON Sync",
        description:
          "Searchable on-device scan history with one-tap JSON export/import and zero server telemetry.",
        icon: "Lock",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.algoel.safeqr_qr_and_barcode_scanner",
  },
  {
    id: "passport-photo-editor",
    slug: "passport-photo-editor",
    name: "Passport Photo Editor",
    logo: "/images/products/passport-photo-editor-logo.webp",
    logoFullBleed: true,
    tagline: "Privacy-First 300 DPI Biometric Passport, Visa & ID Photo Maker",
    description:
      "Create official passport, visa, and identity photos in seconds with Passport Photo Editor—a fast, privacy-first, zero-bloat mobile tool. Pre-configured with international biometric presets (US, UK/EU Schengen, India, Canada, Australia, China, Japan, Bangladesh MRP & e-Passport, and custom sizes), smart facial alignment guides, 4×6\" & A4 printable sheet tiling, and crisp 300 DPI export with zero accounts or ads.",
    category: "Utilities & Tools",
    releaseYear: "2026",
    platforms: ["Android"],
    badge: "300 DPI · Ad-Free & Offline",
    techStack: [
      "Flutter",
      "Dart",
      "300 DPI Image Engine",
      "Biometric Alignment Guides",
      "4×6\" & A4 Sheet Export",
      "Offline Processing",
    ],
    features: [
      {
        title: "Official International Standards",
        description:
          "Pre-configured presets for US (2×2 in), UK/EU Schengen (35×45 mm), India, Canada, Australia, China, Japan, Bangladesh MRP & e-Passport (40×50 mm), and custom dimensions.",
        icon: "Globe",
      },
      {
        title: "Smart Biometric Alignment Guide",
        description:
          "On-screen crown line, eye-level reference, chin baseline, and facial symmetry axis overlays to help avoid rejected applications.",
        icon: "UserCheck",
      },
      {
        title: "Precision Photo Editing Tools",
        description:
          "Smooth pinch-to-zoom and pan gestures, 90° quick rotation, ±15° horizon straightening, real-time brightness/contrast controls, and composition grid.",
        icon: "Layers",
      },
      {
        title: "Printable 4×6\" & A4 Multi-Photo Sheets",
        description:
          "Tile multiple passport photos onto standard 4×6 inch or A4 sheets with clean dashed cutting guides and mathematical 300 DPI background rendering.",
        icon: "Paperclip",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.algoel.passport_photo_editor",
  },
];
