import { products } from "@/data/products";
import { ArrowLeft, Shield } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product || slug !== "lenden") {
    notFound();
  }

  const lastUpdated = "April 12, 2026";

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navigation */}
      <nav className="border-b border-gray-100 py-4 px-6 fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href={`/products/${slug}`} className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-navy transition-colors">
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Return to {product.name}
          </Link>
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Legal Document</div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-16">
            <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center text-navy mb-6">
              <Shield size={32} />
            </div>
            <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-gray-500 font-medium">Last Updated: {lastUpdated}</p>
          </header>

          {/* Content */}
          <div className="space-y-12 prose prose-gray max-w-none">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to <strong>{product.name}</strong>. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="mb-4">To provide our peer-to-peer financial services, we collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, and phone number provided during registration (Verified via OTP).</li>
                <li><strong>Transaction Data:</strong> Records of lending and borrowing, including amounts, dates, participant names, and optional notes.</li>
                <li><strong>User Media:</strong> Profile pictures or avatars uploaded by the user.</li>
                <li><strong>Device Information:</strong> Unique device identifiers and operating system version for security and messaging purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the collected data for the following essential purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To maintain your personal lending and borrowing ledger.</li>
                <li>To facilitate secure peer-to-peer transactions.</li>
                <li>To send security codes (OTPs) and critical account notifications.</li>
                <li>To provide financial analytics and insights through our dashboard.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
              <p className="mb-4">We integrate with a limited number of trusted third-party providers to ensure app functionality:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Firebase:</strong> Used for authentication, cloud database (Firestore), and push notifications.</li>
                <li><strong>Cloudflare R2:</strong> Used for secure storage of user-uploaded images and avatars.</li>
                <li><strong>Brevo (formerly Sendinblue):</strong> Used for delivering transactional emails and security OTPs.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Deletion and Retention</h2>
              <p className="leading-relaxed">
                We believe you should have full control over your data. You may delete your account and all associated personal and transactional data at any time through the app settings. Once deleted, this data is <strong>permanently removed</strong> from our servers and cannot be recovered.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Security</h2>
              <p className="leading-relaxed">
                We implement bank-grade security measures, including 4-digit PIN protection for transactions and encrypted transport for all data. However, please note that no method of electronic transmission or storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="font-bold text-gray-900">Azizur Rahaman</p>
                <p className="text-navy font-semibold">frazizur.rahaman@gmail.com</p>
              </div>
            </section>

          </div>

          <footer className="mt-24 pt-12 border-t border-gray-100 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Lenden. All rights reserved.
          </footer>
        </article>
      </main>
    </div>
  );
}
