"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Cookie } from "lucide-react";

const COOKIE_TYPES = [
  {
    type: "Essential Cookies",
    required: true,
    color: "text-green-400",
    dot: "bg-green-400",
    desc: "These cookies are necessary for the platform to function and cannot be disabled. They are usually set in response to actions you take, such as logging in or setting your preferences. Without these cookies, the services you have asked for cannot be provided.",
    examples: ["session_token", "csrf_protection", "auth_state"],
  },
  {
    type: "Analytics Cookies",
    required: false,
    color: "text-primary",
    dot: "bg-primary",
    desc: "These cookies help us understand how users interact with AIE. We use this information to improve the platform experience. All analytics data is anonymized and aggregated.",
    examples: ["_ga (Google Analytics)", "amplitude_session", "aie_analytics"],
  },
  {
    type: "Marketing Cookies",
    required: false,
    color: "text-purple-400",
    dot: "bg-purple-400",
    desc: "Marketing cookies may be set by our advertising partners to build a profile of your interests and show you relevant ads on other sites. They do not store directly personal information.",
    examples: ["_fbp (Facebook Pixel)", "utm_tracking", "retargeting_id"],
  },
  {
    type: "Preference Cookies",
    required: false,
    color: "text-amber-400",
    dot: "bg-amber-400",
    desc: "These cookies remember your settings and preferences such as language, theme, and dashboard layout. Disabling these may affect your user experience.",
    examples: ["ui_language", "theme_preference", "sidebar_state"],
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <Cookie className="w-5 h-5 text-primary" />
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Legal</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">Cookie <span className="text-primary">Policy</span></h1>
        <p className="text-white/30 text-sm mb-4">Last updated: March 1, 2026</p>
        <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-2xl">
          AIE uses cookies and similar tracking technologies to improve your experience. This policy explains what cookies we use, why we use them, and how you can control them.
        </p>

        <div className="space-y-6">
          {COOKIE_TYPES.map(ct => (
            <div key={ct.type} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${ct.dot}`} />
                  <h2 className={`font-bold ${ct.color}`}>{ct.type}</h2>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${ct.required ? "border-green-400/30 bg-green-400/10 text-green-400" : "border-white/10 bg-white/5 text-white/40"}`}>
                  {ct.required ? "Always Active" : "Optional"}
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{ct.desc}</p>
              <div>
                <p className="text-white/25 text-xs uppercase tracking-widest mb-2">Examples</p>
                <div className="flex flex-wrap gap-2">
                  {ct.examples.map(ex => (
                    <span key={ex} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/40 text-xs font-mono">{ex}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="font-bold text-white mb-3">Managing Cookies</h2>
          <p className="text-white/50 text-sm leading-relaxed mb-4">
            You can control and/or delete cookies from your browser settings. You can delete all cookies already on your computer and you can set most browsers to prevent them from being placed. Disabling cookies may affect platform functionality.
          </p>
          <p className="text-white/50 text-sm">
            For questions, contact us at <a href="mailto:privacy@aie.io" className="text-primary hover:underline">privacy@aie.io</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
