"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check, Zap, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Starter",
    monthly: 29,
    annual: 23,
    description: "Perfect for individual creators just getting started.",
    features: [
      "5 AI Influencer Generations / mo",
      "500 AI Credits / mo",
      "3 Active Courses",
      "Basic Voice Generator",
      "Community Access",
      "Email Support",
    ],
    cta: "Get Started",
    highlight: false,
    color: "border-white/10",
  },
  {
    name: "Creator Pro",
    monthly: 79,
    annual: 63,
    description: "For professional creators scaling their AI operation.",
    features: [
      "30 AI Influencer Generations / mo",
      "2,000 AI Credits / mo",
      "Unlimited Courses",
      "Advanced Voice & Video Creator",
      "Content Automation (10 workflows)",
      "Priority Support",
      "AI Credits Wallet",
      "Referral Commissions",
    ],
    cta: "Start Pro Trial",
    highlight: true,
    badge: "Most Popular",
    color: "border-primary/40",
  },
  {
    name: "Agency",
    monthly: 199,
    annual: 159,
    description: "Built for agencies and teams managing multiple AI personas.",
    features: [
      "Unlimited AI Influencer Generations",
      "10,000 AI Credits / mo",
      "Unlimited Courses & Certifications",
      "Full AI Tools Suite",
      "Unlimited Content Automation",
      "Dedicated Account Manager",
      "Custom Integrations",
      "White-label Options",
    ],
    cta: "Contact Sales",
    highlight: false,
    color: "border-white/10",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-40 pb-24">
        {/* Header */}
        <div className="text-center container mx-auto px-6 mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Pricing</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">Simple, <span className="text-primary">Transparent</span><br />Pricing</h1>
          <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">No hidden fees. No surprises. Scale as you grow.</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1 rounded-full border border-white/10 bg-white/5">
            <button
              onClick={() => setAnnual(false)}
              className={cn("px-5 py-2 rounded-full text-sm font-bold transition-all duration-300", !annual ? "bg-white text-black" : "text-white/40")}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn("px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2", annual ? "bg-white text-black" : "text-white/40")}
            >
              Annual
              <span className="px-1.5 py-0.5 rounded bg-primary text-black text-[10px] font-black">–20%</span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PLANS.map(plan => (
              <div
                key={plan.name}
                className={cn(
                  "relative rounded-3xl border p-8 flex flex-col transition-all duration-300",
                  plan.highlight
                    ? "bg-primary/5 border-primary/40 shadow-[0_0_60px_rgba(0,242,255,0.08)]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20"
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-black text-xs font-black uppercase tracking-widest whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={cn("text-sm font-black uppercase tracking-widest mb-2", plan.highlight ? "text-primary" : "text-white/60")}>{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-5xl font-black text-white">${annual ? plan.annual : plan.monthly}</span>
                    <span className="text-white/30 mb-2">/mo</span>
                  </div>
                  {annual && <p className="text-white/30 text-xs">Billed annually</p>}
                  <p className="text-white/40 text-sm mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                      <Check className={cn("w-4 h-4 flex-shrink-0 mt-0.5", plan.highlight ? "text-primary" : "text-white/40")} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="/auth/signup"
                  className={cn(
                    "flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-sm transition-all duration-300",
                    plan.highlight
                      ? "bg-primary text-black hover:shadow-[0_0_30px_rgba(0,242,255,0.5)]"
                      : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                  )}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Credit Top-Up Note */}
        <div className="container mx-auto px-6 mt-12 max-w-5xl">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex items-center gap-4">
            <Zap className="w-6 h-6 text-primary flex-shrink-0" />
            <p className="text-white/50 text-sm">
              <span className="text-white font-semibold">Need more AI Credits?</span> Purchase credits anytime from your{" "}
              <a href="/dashboard/wallet" className="text-primary hover:underline">AI Credits Wallet</a> without upgrading your plan.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
