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

export const metadata: Metadata = {
  title: "Azizur Rahaman — Product Engineer (Flutter, Next.js, Spring Boot)",
  description:
    "Product Engineer with 5+ years of software engineering experience building scalable digital products across mobile, web, backend, and cloud using Flutter, Next.js, Spring Boot, and Java.",
  keywords: [
    "Azizur Rahaman",
    "Product Engineer",
    "Flutter Developer",
    "Next.js",
    "Spring Boot",
    "Java",
    "Clean Architecture",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: "Azizur Rahaman", url: "https://azizurrahaman.com" }],
  openGraph: {
    title: "Azizur Rahaman — Product Engineer",
    description:
      "Product Engineer with 5+ years of experience shipping scalable products across mobile, web, backend, and cloud (110K+ downloads).",
    type: "website",
    url: "https://azizurrahaman.com",
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
