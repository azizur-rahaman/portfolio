import { products } from "@/data/products";
import { ArrowLeft, Trash2, Mail, Settings, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DeleteAccountPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product || slug !== "lenden") {
    notFound();
  }

  const lastUpdated = "April 13, 2026";

  return (
    <div className="min-h-screen bg-white text-gray-800 font-inter">
      {/* Navigation */}
      <nav className="border-b border-gray-100 py-4 px-6 fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href={`/products/${slug}`} className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-navy transition-colors">
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Return to {product.name}
          </Link>
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Data Safety Request</div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-16">
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6">
              <Trash2 size={32} />
            </div>
            <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Account Deletion Request</h1>
            <p className="text-gray-500 font-medium">Last Updated: {lastUpdated}</p>
          </header>

          {/* Content */}
          <div className="space-y-12">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Settings className="text-navy" size={24} /> 1. In-App Deletion (Fastest)
              </h2>
              <p className="leading-relaxed text-gray-600 mb-6">
                We recommend deleting your account directly within the <strong>{product.name}</strong> app. This process is automated and takes effect immediately.
              </p>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                <ol className="list-decimal pl-6 space-y-4 text-gray-700 font-medium">
                  <li>Open the <strong>{product.name}</strong> app on your mobile device.</li>
                  <li>Navigate to the <strong>Settings</strong> screen from the main dashboard.</li>
                  <li>Scroll to the bottom of the page.</li>
                  <li>Tap on <span className="text-red-600 underline">Delete Account</span>.</li>
                  <li>Confirm your choice in the dialog. For security, if you haven't logged in recently, you may be asked to re-authenticate first.</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Mail className="text-navy" size={24} /> 2. Manual Deletion Request
              </h2>
              <p className="leading-relaxed text-gray-600 mb-4">
                If you no longer have access to the app or prefer to request deletion manually, please send an email to our support team:
              </p>
              <div className="p-6 bg-[#001f3f] text-white rounded-2xl shadow-xl shadow-navy/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-blue-100 text-sm font-bold uppercase tracking-wider mb-1">Support Email</p>
                  <p className="text-xl font-mono font-bold">frazizur.rahaman@gmail.com</p>
                </div>
                <a href="mailto:frazizur.rahaman@gmail.com" className="bg-white text-[#001f3f] px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                  Send Request
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500 italic">
                Note: Manual requests are typically processed within 7 business days. You must send the request from the email address associated with your account.
              </p>
            </section>

            <section className="bg-orange-50 border border-orange-100 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-3">
                <ShieldAlert size={24} /> What data will be deleted?
              </h2>
              <p className="text-orange-800 mb-6 font-medium">
                When you delete your account, the following information is <strong>permanently purged</strong> from our servers:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Firebase Authentication Records",
                  "Historical Peer-to-Peer Transactions",
                  "Personal Biographical Profile Data",
                  "Uploaded Profile Avatars (Storage)",
                  "FCM Push Notification Tokens",
                  "Transaction Notes & Metadata"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-orange-800/80 text-sm font-semibold">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-orange-200">
                <p className="text-sm font-bold text-orange-900 uppercase tracking-widest mb-2">Retention Period</p>
                <p className="text-orange-800 leading-relaxed">
                  We do not retain any of the above data after account deletion. Once the command is executed, all associations between your identity and the ledger data are destroyed. This action is **irreversible**.
                </p>
              </div>
            </section>

          </div>

          <footer className="mt-24 pt-12 border-t border-gray-100 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} {product.name}. Built by Azizur Rahaman.
          </footer>
        </article>
      </main>
    </div>
  );
}
