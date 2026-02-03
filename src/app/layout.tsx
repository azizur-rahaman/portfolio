import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azizur Rahaman | Flutter Developer",
  description: "Flutter Developer with hands-on experience delivering 3+ production-ready Flutter applications. Strong in responsive UI, REST API integration, and state management.",
  keywords: ["Flutter Developer", "Dart", "Mobile App Developer", "Azizur Rahaman", "Bangladesh"],
  authors: [{ name: "Azizur Rahaman" }],
  openGraph: {
    title: "Azizur Rahaman | Flutter Developer",
    description: "Flutter Developer with hands-on experience delivering 3+ production-ready Flutter applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
