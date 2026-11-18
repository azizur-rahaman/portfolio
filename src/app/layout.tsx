import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-noto-bengali",
  display: "swap",
});

const SITE_URL = "https://azizurrahaman.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Azizur Rahaman — Product Engineer (Flutter, Next.js, Spring Boot)",
    template: "%s — Azizur Rahaman",
  },
  description:
    "Product Engineer with 5+ years of software engineering experience building scalable digital products across mobile, web, backend, and cloud using Flutter, Next.js, Spring Boot, and Java.",
  keywords: [
    "Azizur Rahaman",
    "Product Engineer",
    "Flutter Developer",
    "Next.js Developer",
    "Spring Boot",
    "Java",
    "Clean Architecture",
    "Algoel",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: "Azizur Rahaman", url: SITE_URL }],
  creator: "Azizur Rahaman",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/avatar.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Azizur Rahaman",
    title: "Azizur Rahaman — Product Engineer",
    description:
      "Product Engineer with 5+ years of experience shipping scalable products across mobile, web, backend, and cloud (110K+ total downloads).",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azizur Rahaman — Product Engineer",
    description:
      "Product Engineer with 5+ years of experience shipping scalable products across mobile, web, backend, and cloud (110K+ downloads).",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansBengali.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
