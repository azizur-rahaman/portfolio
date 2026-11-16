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
  title: "Azizur Rahaman — Flutter Developer & Mobile Product Engineer",
  description:
    "Flutter Developer in Dhaka with hands-on experience delivering 3+ production-ready cross-platform applications. Strong in Clean Architecture, Riverpod, BLoC, and REST API integration.",
  keywords: [
    "Azizur Rahaman",
    "Flutter Developer",
    "Mobile Product Engineer",
    "Dart",
    "Clean Architecture",
    "Riverpod",
    "BLoC",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: "Azizur Rahaman", url: "https://azizurrahaman.com" }],
  openGraph: {
    title: "Azizur Rahaman — Flutter Developer & Mobile Product Engineer",
    description:
      "Flutter Developer in Dhaka delivering production-ready cross-platform mobile applications with Clean Architecture, Riverpod, and BLoC.",
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
