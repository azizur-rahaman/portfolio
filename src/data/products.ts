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
  category:
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
    id: "lenden",
    slug: "lenden",
    name: "Lenden",
    logo: "/images/products/lenden-logo.png",
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
    tagline: "Premium E-Commerce & Event Catering Experience",
    description:
      "Zabihaty redefines the meat and catering e-commerce landscape with a seamless cross-platform mobile experience. Engineered with Clean Architecture and robust JWT refresh-token session management across 90+ Figma-matched screens and 15+ REST APIs, it delivers secure ordering for premium products and event catering.",
    category: "Mobile App",
    releaseYear: "2023–2025",
    platforms: ["Android", "iOS"],
    badge: "Production Client App",
    techStack: ["Flutter", "Riverpod", "REST APIs", "JWT", "Dio", "Clean Architecture"],
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
    name: "Al-Qur'an Bangla",
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
    tagline: "Verified To-Let & Smart Property Rental Discovery",
    description:
      "GhorLagbee removes broker friction from apartment and bachelor room hunting in Bangladesh. Built with Flutter, Google Maps SDK, and Firebase, it connects renters directly with verified property owners through GPS nearby discovery and one-tap calling.",
    category: "House & Home",
    releaseYear: "2024",
    platforms: ["Android"],
    rating: "4.6★ Google Play",
    badge: "Zero Broker Commission",
    techStack: [
      "Flutter",
      "Google Maps SDK",
      "Geolocation",
      "Firebase Realtime DB",
      "Cloud Storage",
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
    tagline: "All-in-One Campus Social Platform & AI Study Companion",
    description:
      "Built for the United International University student community, Classmates unifies 12 academic departments with real-time 1-on-1 chat, campus feeds, past trimester question banks, CGPA & tuition calculators, and Professor AI powered by Google Gemini.",
    category: "Education & Campus",
    releaseYear: "2024",
    platforms: ["Android"],
    rating: "4.2★ Google Play",
    badge: "AI Study Assistant",
    techStack: [
      "Flutter",
      "Google Gemini AI",
      "Firebase Realtime Chat",
      "FCM",
      "Secure Auth",
    ],
    features: [
      {
        title: "Professor AI Study Hub",
        description:
          "24/7 Gemini-powered coursework assistant providing step-by-step math, algorithm, and coding explanations.",
        icon: "Sparkles",
      },
      {
        title: "Campus Messenger & Feed",
        description:
          "Real-time private student chat and discussion feeds spanning 12 university departments.",
        icon: "Cloud",
      },
      {
        title: "Exam Bank & CGPA Tools",
        description:
          "Past trimester question archive, official academic notices, CGPA planner, and credit tuition calculator.",
        icon: "BarChart3",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.algoel.uiu_students",
  },
  {
    id: "news-app-flash",
    slug: "news-app-flash",
    name: "News App Flash",
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
    logo: "/images/products/safeqr/icon.png",
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
    id: "frametastic",
    slug: "frametastic",
    name: "FrameTastic",
    tagline: "Personalized Photo Frame Designer & Creative Studio",
    description:
      "An Android native photo framing and creative editing studio built with Kotlin and Canvas 2D graphics. Combines 100+ designer borders, vintage polaroid layouts, brightness/contrast adjustments, and lossless high-resolution export for direct social sharing.",
    category: "Creative & Design",
    releaseYear: "2023",
    platforms: ["Android"],
    rating: "4.2★ Google Play",
    badge: "100+ Designer Frames",
    techStack: [
      "Kotlin",
      "Android Native",
      "Canvas 2D Graphics",
      "Image Processing",
    ],
    features: [
      {
        title: "100+ Designer Borders",
        description:
          "Classic, polaroid, and contemporary frame layouts with customizable stroke and corner styling.",
        icon: "Layers",
      },
      {
        title: "Lossless Image Pipeline",
        description:
          "Crop, rotate, color-grade, and export at full camera sensor clarity.",
        icon: "Sparkles",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=xyz.quantumsoftwares.frametastic",
  },
  {
    id: "colorful-calculator",
    slug: "colorful-calculator",
    name: "ColorFul Calculator",
    tagline: "Vibrant Themeable Calculator & Fast Math Utility",
    description:
      "A lightweight (<10MB) Android calculator crafted with Kotlin and Android Jetpack, pairing high-contrast customizable color themes with tactile haptic feedback, calculation history logging, and an ad-free offline experience.",
    category: "Utilities & Tools",
    releaseYear: "2023",
    platforms: ["Android"],
    rating: "4.2★ Google Play",
    badge: "Lightweight & Ad-Free",
    techStack: ["Kotlin", "Android Jetpack", "Vector Graphics", "Local Cache"],
    features: [
      {
        title: "Themeable Color Palettes",
        description:
          "High-contrast customizable themes built for visual comfort and instant touch feedback.",
        icon: "Sparkles",
      },
      {
        title: "Persistent Calculation History",
        description:
          "Review and recall prior equations offline inside a compact, battery-friendly binary.",
        icon: "BarChart3",
      },
    ],
    link: "https://play.google.com/store/apps/details?id=com.quantumsoft.colorfulcalculator",
  },
];
