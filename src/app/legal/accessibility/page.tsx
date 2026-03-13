"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Eye } from "lucide-react";

const FEATURES = [
  {
    title: "Keyboard Navigation",
    desc: "All interactive elements on AIE — including navigation, forms, modals, dashboards, and AI tools — are fully accessible via keyboard. Focus states are clearly visible with a high-contrast primary color ring.",
  },
  {
    title: "Screen Reader Support",
    desc: "We use semantic HTML5 and ARIA attributes throughout the platform to ensure compatibility with leading screen readers including NVDA, JAWS, and VoiceOver. All images include meaningful alt text.",
  },
  {
    title: "Colour Contrast",
    desc: "AIE maintains a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text, meeting WCAG 2.1 AA standards. Our dark-mode-first design is optimized for readability across all conditions.",
  },
  {
    title: "Responsive & Magnification",
    desc: "Our platform is fully responsive and supports browser-level text magnification up to 200% without loss of functionality. All layouts reflow gracefully for assistive technology users.",
  },
  {
    title: "Captions & Transcripts",
    desc: "All course videos on AIE include closed captions. AI-generated video content includes caption generation as an optional feature. Transcripts are available for all audio content.",
  },
  {
    title: "Form Accessibility",
    desc: "All forms include visible labels, descriptive error messages, and proper input types. We avoid relying solely on color to convey form validation states.",
  },
];

const STANDARDS = [
  { label: "WCAG 2.1 Level AA", status: "Conformant" },
  { label: "ADA Title III", status: "Compliant" },
  { label: "Section 508", status: "Compliant" },
  { label: "EN 301 549", status: "Targeted" },
];

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <Eye className="w-5 h-5 text-primary" />
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Legal</p>
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">Accessibility <span className="text-primary">Statement</span></h1>
        <p className="text-white/30 text-sm mb-6">Last updated: March 1, 2026</p>
        <p className="text-white/50 text-sm leading-relaxed mb-12 max-w-2xl">
          AIE is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.
        </p>

        {/* Standards compliance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {STANDARDS.map(s => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center">
              <p className="text-primary font-black text-xs mb-1">{s.status}</p>
              <p className="text-white/40 text-xs">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Accessibility Features</h2>
        <div className="space-y-4 mb-12">
          {FEATURES.map(f => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="font-bold text-white mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Feedback */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <h2 className="font-bold text-white mb-2">Report an Accessibility Issue</h2>
          <p className="text-white/50 text-sm leading-relaxed mb-4">
            We welcome your feedback on the accessibility of AIE. If you experience any barriers, please let us know and we will work to resolve the issue within 2 business days.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/support/contact" className="px-5 py-2.5 rounded-xl bg-primary text-black font-bold text-sm hover:shadow-[0_0_25px_rgba(0,242,255,0.4)] transition-all">
              Report an Issue
            </a>
            <a href="mailto:accessibility@aie.io" className="px-5 py-2.5 rounded-xl border border-white/10 text-white/60 font-bold text-sm hover:text-white transition-colors">
              accessibility@aie.io
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
