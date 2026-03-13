"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Search, ChevronDown, BookOpen, MessageCircle, Zap, Shield } from "lucide-react";

const CATEGORIES = [
  { icon: BookOpen, label: "Getting Started", count: 12, color: "text-primary", bg: "bg-primary/10 border-primary/20" },
  { icon: Zap, label: "AI Tools", count: 8, color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20" },
  { icon: MessageCircle, label: "Billing & Plans", count: 6, color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
  { icon: Shield, label: "Account & Security", count: 9, color: "text-green-400", bg: "bg-green-400/10 border-green-400/20" },
];

const FAQS = [
  { q: "How do I generate my first AI Influencer?", a: "Navigate to 'Generate AI Influencer' from your dashboard. Choose a base avatar style, customize appearance attributes, add a personality profile, and click Generate. Your AI influencer will be ready within 2–5 minutes depending on your plan tier." },
  { q: "What are AI Credits and how do I use them?", a: "AI Credits are the currency used across all AI generation tools on AIE. Each generation, video render, or voice synthesis consumes a set amount of credits. You can view your balance in the AI Credits Wallet and purchase top-ups at any time." },
  { q: "Can I switch my subscription plan?", a: "Yes! You can upgrade or downgrade your plan at any time from the Subscription Plans page in your dashboard. Upgrades take effect immediately. Downgrades take effect at the end of your current billing cycle." },
  { q: "How long does it take to complete a course?", a: "Course durations vary from 4 to 20 hours of content. You can learn at your own pace — your progress is automatically saved and you can pick up exactly where you left off across any device." },
  { q: "Is my payment information secure?", a: "Absolutely. All payments are processed through Stripe with 256-bit SSL encryption. We never store your full card details on our servers. AIE is SOC 2 Type II certified and GDPR compliant." },
  { q: "How do I contact a human support agent?", a: "You can reach our support team by visiting the Contact Support page or clicking the live chat icon in the bottom-right corner of any page. Our team is available Mon–Fri, 9 AM – 6 PM EST, with average response times under 2 hours." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-2xl transition-all duration-300 overflow-hidden ${open ? "border-primary/30 bg-primary/5" : "border-white/10 bg-white/[0.02]"}`}>
      <button className="w-full flex items-center justify-between px-6 py-5 text-left gap-4" onClick={() => setOpen(!open)}>
        <span className="font-semibold text-white/90 text-sm">{q}</span>
        <ChevronDown className={`w-4 h-4 flex-shrink-0 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-5 text-white/50 text-sm leading-relaxed border-t border-white/5">{a}</div>
      )}
    </div>
  );
}

export default function HelpCenterPage() {
  const [query, setQuery] = useState("");
  const filtered = FAQS.filter(f => f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-24">
        {/* Hero */}
        <div className="relative text-center px-6 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Help Center</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            How can we <span className="text-primary">help you?</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">Search our knowledge base or browse categories below.</p>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 text-base transition-all"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="container mx-auto px-6 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map(cat => (
              <div key={cat.label} className={`rounded-2xl border p-6 flex flex-col gap-3 cursor-pointer hover:scale-[1.02] transition-all duration-300 ${cat.bg}`}>
                <cat.icon className={`w-6 h-6 ${cat.color}`} />
                <p className="font-bold text-white">{cat.label}</p>
                <p className="text-white/40 text-xs">{cat.count} articles</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {filtered.length > 0 ? filtered.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />) : (
              <p className="text-white/30 text-center py-12">No results found for &ldquo;{query}&rdquo;</p>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="container mx-auto px-6 max-w-3xl mt-16">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <p className="font-bold text-white mb-1">Still need help?</p>
              <p className="text-white/40 text-sm">Our support team is here for you.</p>
            </div>
            <a href="/support/contact" className="px-6 py-3 rounded-xl bg-primary text-black font-bold text-sm hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all duration-300 whitespace-nowrap">
              Contact Support
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
