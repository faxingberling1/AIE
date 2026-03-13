"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileText } from "lucide-react";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the AIE platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services. AIE reserves the right to update these terms at any time.`,
  },
  {
    title: "2. Eligibility",
    content: `You must be at least 18 years of age to use AIE. By using our services, you represent and warrant that you meet this age requirement and that all registration information you provide is accurate and truthful.`,
  },
  {
    title: "3. Account Responsibilities",
    content: `You are responsible for maintaining the confidentiality of your account credentials. You agree to immediately notify AIE of any unauthorized use of your account. AIE is not liable for any loss or damage arising from your failure to protect your credentials.`,
  },
  {
    title: "4. Permitted Use",
    content: `You may use AIE solely for lawful purposes and in accordance with these Terms. You agree not to use AIE to: generate content that is illegal, defamatory, or infringes intellectual property; attempt to gain unauthorized access to our systems; use our AI tools to impersonate real individuals without consent; or engage in any activity that disrupts the platform.`,
  },
  {
    title: "5. AI-Generated Content",
    content: `Content generated using AIE tools is owned by you, subject to any third-party rights. You grant AIE a non-exclusive license to use generated content for the purpose of improving our models. You are solely responsible for ensuring that generated content does not infringe on third-party rights.`,
  },
  {
    title: "6. Subscriptions and Payments",
    content: `Paid plans are billed in advance on a monthly or annual basis. All payments are processed securely via Stripe. Refunds are provided within 7 days of purchase for annual plans if you have not generated more than 5 AI assets. Monthly plans are non-refundable once consumed.`,
  },
  {
    title: "7. Termination",
    content: `AIE reserves the right to suspend or terminate your account at any time for violation of these Terms. You may cancel your account at any time from your dashboard settings. Upon termination, your right to use the platform ceases immediately.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, AIE shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — arising from your use of the platform.`,
  },
  {
    title: "9. Governing Law",
    content: `These Terms are governed by the laws of the State of California, United States. Any disputes shall be resolved in the state or federal courts located in San Francisco County, California.`,
  },
  {
    title: "10. Contact",
    content: `For any questions regarding these Terms, contact us at legal@aie.io or AIE Legal, 123 Innovation Drive, San Francisco, CA 94105.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-5 h-5 text-primary" />
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Legal</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">Terms of <span className="text-primary">Service</span></h1>
        <p className="text-white/30 text-sm mb-12">Last updated: March 1, 2026 · Effective: March 13, 2026</p>

        <div className="space-y-8">
          {SECTIONS.map(s => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h2 className="font-bold text-white mb-4">{s.title}</h2>
              <p className="text-white/50 text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
