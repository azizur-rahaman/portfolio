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
    linkedin: "https://linkedin.com/in/azizur_rahaman",
    cvPath: "/Flutter-Developer-Azizur-Rahaman.pdf",
    cvFilename: "Flutter-Developer-Azizur-Rahaman.pdf",
  },

  work: [
    {
      id: "lenden",
      title: "Lenden",
      subtitle: "Peer-to-Peer Finance & Budgeting App",
      status: "Live",
      description:
        "Financial ecosystem combining peer-to-peer debt and credit ledger tracking, multi-wallet analytics, biometric and 4-digit PIN security, and an intelligent daily spending planner with English and Bengali localization.",
      tags: ["Flutter", "BLoC", "Clean Architecture", "Firebase", "ObjectBox", "Cloudflare R2"],
      internalHref: "/products/lenden",
      externalHref: "https://play.google.com/store/apps/details?id=com.algoel.lenden",
      externalLabel: "Google Play",
    },
    {
      id: "zabihaty",
      title: "Zabihaty",
      subtitle: "E-Commerce & Event Catering App",
      status: "Live",
      description:
        "Production cross-platform mobile application for meat e-commerce and event catering, engineered with Clean Architecture, JWT refresh-token session roaming, and real-time order logistics across 90+ Figma screens.",
      tags: ["Flutter", "Riverpod", "REST APIs", "JWT", "Dio", "Clean Architecture"],
      internalHref: "/products/zabihaty",
      externalHref: "https://play.google.com/store/apps/details?id=com.zabihaty.app.zabihaty",
      externalLabel: "Google Play",
    },
    {
      id: "freelance-community",
      title: "Client & Community Flutter Engineering",
      subtitle: "Upwork Top Rated & UIU Developers Hub",
      status: "Active",
      description:
        "Delivered 5+ Flutter applications and production modules for international clients with JWT authentication, real-time updates, and 100% completion—alongside 15+ Flutter tutorial videos on YouTube.",
      tags: ["Flutter", "Dart", "Provider", "SQLite", "Git", "Figma"],
      externalHref: "https://github.com/azizur-rahaman",
      externalLabel: "GitHub",
    },
  ] satisfies WorkItem[],

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
      items: ["Flutter", "Dart", "Responsive UI & Navigation"],
    },
    {
      category: "State Management",
      items: ["Riverpod", "Provider", "BLoC / Cubit"],
    },
    {
      category: "Backend & Auth",
      items: ["REST APIs", "JSON", "Dio", "JWT", "Refresh-Token Session Management"],
    },
    {
      category: "Storage & Cloud",
      items: [
        "Firebase",
        "ObjectBox",
        "Cloudflare R2",
        "flutter_secure_storage",
        "Hive",
        "SharedPreferences",
        "SQLite",
        "Drift (basic)",
      ],
    },
    {
      category: "Architecture & Tools",
      items: ["Clean Architecture", "Clean Code", "Error Handling", "Git", "Postman", "Figma"],
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
