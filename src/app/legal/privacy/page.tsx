"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Shield } from "lucide-react";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us when you create an account, purchase a subscription, or contact us for support. This includes your name, email address, payment information (processed securely via Stripe), and usage preferences.\n\nWe also automatically collect certain technical data when you use our platform, including IP address, browser type, operating system, referring URLs, and activity logs. This data helps us maintain platform security and improve performance.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `AIE uses the information we collect to provide, maintain, and improve our services. Specifically, we use your data to: process transactions and send transaction confirmations; send technical notices and support messages; respond to your comments and questions; send marketing communications, subject to your opt-in preferences; and monitor and analyze usage trends.`,
  },
  {
    title: "3. Data Sharing and Disclosure",
    content: `We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share your data with trusted third-party service providers who assist us in operating our platform (such as Stripe for payments and AWS for hosting), subject to confidentiality agreements.\n\nWe may also disclose your information if required by law, to enforce our Terms of Service, or to protect the rights and safety of AIE and our users.`,
  },
  {
    title: "4. Data Retention",
    content: `We retain your personal data for as long as your account is active or as needed to provide services. You may request deletion of your account and associated personal data at any time by contacting our support team. Certain data may be retained for legal or business compliance purposes.`,
  },
  {
    title: "5. Security",
    content: `We implement industry-standard security measures to protect your personal information, including 256-bit SSL encryption, SOC 2 Type II compliance, and regular security audits. While we strive to protect your data, no method of electronic transmission is 100% secure.`,
  },
  {
    title: "6. Your Rights (GDPR & CCPA)",
    content: `If you are located in the European Economic Area or California, you have the right to access, correct, or delete your personal data. You also have the right to object to processing, restrict processing, and request data portability. To exercise any of these rights, contact us at privacy@aie.io.`,
  },
  {
    title: "7. Cookies",
    content: `We use cookies and similar tracking technologies to track activity on our platform and hold certain information. See our Cookie Policy for full details. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`,
  },
  {
    title: "8. Contact Us",
    content: `If you have any questions about this Privacy Policy, please contact us at:\n\nAIE Privacy Team\nprivacy@aie.io\n123 Innovation Drive, San Francisco, CA 94105`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-5 h-5 text-primary" />
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Legal</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">Privacy <span className="text-primary">Policy</span></h1>
        <p className="text-white/30 text-sm mb-12">Last updated: March 1, 2026 · Effective: March 13, 2026</p>

        <div className="space-y-8">
          {SECTIONS.map(s => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h2 className="font-bold text-white mb-4">{s.title}</h2>
              <div className="text-white/50 text-sm leading-relaxed whitespace-pre-line">{s.content}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
