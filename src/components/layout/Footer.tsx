"use client";

import { useState, useCallback } from "react";

// ── Icons ─────────────────────────────────────────────────────────────────────

const IconDiscord = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconTwitterX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.23H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const IconHelp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 flex-shrink-0">
    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
);
const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 flex-shrink-0">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const IconBook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 flex-shrink-0">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const IconStatus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 flex-shrink-0">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);
const IconArrowUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <path d="m18 15-6-6-6 6" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 flex-shrink-0 text-primary/60">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────

const platformLinks = {
  "Courses & Learning": [
    { label: "All Courses", href: "/marketplace" },
    { label: "Popular Courses", href: "/marketplace?filter=popular" },
    { label: "New Releases", href: "/marketplace?filter=new" },
  ],
  "AI Tools": [
    { label: "Generate AI Influencer", href: "/ai-tools/influencer" },
    { label: "AI Video Creator", href: "/ai-tools/video" },
    { label: "AI Voice Generator", href: "/ai-tools/voice" },
    { label: "Content Automation", href: "/ai-tools/automation" },
  ],
  "Account": [
    { label: "My Dashboard", href: "/dashboard" },
    { label: "Subscription Plans", href: "/dashboard/subscription" },
    { label: "AI Credits Wallet", href: "/dashboard/wallet" },
  ],
};

const supportLinks = [
  { label: "Help Center", href: "/support", icon: <IconHelp /> },
  { label: "Contact Support", href: "/support/contact", icon: <IconChat /> },
  { label: "Tutorials & Guides", href: "/tutorials", icon: <IconBook /> },
  { label: "System Status", href: "/status", icon: <IconStatus /> },
];

const socialLinks = [
  { label: "Discord", href: "#", icon: <IconDiscord />, color: "hover:text-indigo-400 hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]", border: "hover:border-indigo-400/50" },
  { label: "LinkedIn", href: "#", icon: <IconLinkedIn />, color: "hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]", border: "hover:border-blue-400/50" },
  { label: "Twitter/X", href: "#", icon: <IconTwitterX />, color: "hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]", border: "hover:border-white/40" },
  { label: "YouTube", href: "#", icon: <IconYouTube />, color: "hover:text-red-400 hover:shadow-[0_0_20px_rgba(248,113,113,0.5)]", border: "hover:border-red-400/50" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Accessibility", href: "/legal/accessibility" },
];

const languages = ["EN", "ES", "FR", "DE", "PT", "AR"];

// ── Sub-components ────────────────────────────────────────────────────────────

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-white/50 hover:text-primary transition-all duration-300 text-sm leading-relaxed relative group inline-block"
      >
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
      </a>
    </li>
  );
}

// ── Main Footer ───────────────────────────────────────────────────────────────

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [lang, setLang] = useState("EN");

  const handleSubscribe = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (email.trim()) {
        setSubscribed(true);
        setEmail("");
      }
    },
    [email]
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none" />

      {/* ── CTA Newsletter Bar ────────────────────────────────────────────── */}
      <div className="relative border-b border-white/[0.07]">
        <div className="container mx-auto px-6 py-12">
          <div className="relative rounded-2xl overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-white/[0.05] to-primary/[0.04] backdrop-blur-xl border border-white/10">
            {/* decorative line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="flex-1 text-center md:text-left">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Stay ahead of the curve</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Stay Updated with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-purple">
                  AIE Premium Tools &amp; Courses
                </span>
              </h3>
              <p className="text-white/40 text-sm mt-2">No spam. Unsubscribe at any time.</p>
            </div>

            <div className="w-full md:w-auto flex-shrink-0">
              {subscribed ? (
                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-primary/10 border border-primary/30 text-primary font-medium text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  You&apos;re subscribed!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <div className="relative flex-1 md:w-64">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-primary/50 focus:shadow-neon transition-all duration-300"
                      style={{ paddingLeft: "2.5rem" }}
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <IconMail />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl font-semibold text-sm bg-primary text-black hover:shadow-neon-strong transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Grid ──────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* ── Col 1: Brand ─────────────────────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5 group cursor-pointer" onClick={scrollToTop}>
              <div className="relative w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:shadow-neon transition-all duration-500">
                <span className="text-primary font-black text-lg group-hover:drop-shadow-[0_0_8px_rgba(0,242,255,0.9)] transition-all duration-300">A</span>
                <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              </div>
              <span className="text-xl font-black tracking-tight text-white group-hover:text-primary transition-colors duration-300">AIE</span>
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering creators and businesses with AI influencers &amp; premium learning.
            </p>

            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Mission", href: "/mission" },
                { label: "Careers", href: "/careers" },
                { label: "Referral Program", href: "/referral" },
              ].map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* ── Col 2: Platform Links ─────────────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Platform</h3>
            <div className="grid grid-cols-1 gap-6">
              {Object.entries(platformLinks).map(([category, links]) => (
                <div key={category}>
                  <p className="text-white/25 text-[10px] uppercase tracking-widest font-semibold mb-2">{category}</p>
                  <ul className="space-y-1.5">
                    {links.map((link) => (
                      <FooterLink key={link.label} href={link.href}>
                        {link.label}
                      </FooterLink>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Col 3: Support ───────────────────────────────────────────── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2.5 text-white/50 hover:text-primary transition-all duration-300 text-sm group"
                  >
                    <span className="text-white/30 group-hover:text-primary transition-colors duration-300">
                      {link.icon}
                    </span>
                    <span className="relative">
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* ── Community / Social ───────────────────────────────────── */}
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mt-10 mb-5">Community</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50 transition-all duration-300 ${social.color} ${social.border} hover:scale-110 hover:-translate-y-0.5`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-3 space-y-1">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} className="block text-white/30 hover:text-white/60 text-xs transition-colors duration-200">
                  {s.label === "Discord" && "Join Discord →"}
                  {s.label === "LinkedIn" && "Follow on LinkedIn →"}
                  {s.label === "Twitter/X" && "Follow on Twitter/X →"}
                  {s.label === "YouTube" && "Follow on YouTube →"}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 4: Legal ─────────────────────────────────────────────── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>

            {/* ── Trust signals ────────────────────────────────────────── */}
            <div className="mt-8 space-y-2">
              <div className="flex items-center gap-2 text-white/20 text-xs">
                <svg className="w-3.5 h-3.5 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                SOC 2 Type II Certified
              </div>
              <div className="flex items-center gap-2 text-white/20 text-xs">
                <svg className="w-3.5 h-3.5 text-primary/60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                256-bit SSL Encryption
              </div>
              <div className="flex items-center gap-2 text-white/20 text-xs">
                <svg className="w-3.5 h-3.5 text-primary/60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                GDPR Compliant
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Neon Divider ──────────────────────────────────────────────────── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* ── Bottom Bar ────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-white/25 text-xs">
          &copy; 2026 AIE. All Rights Reserved.
        </p>

        {/* Language selector */}
        <div className="flex items-center gap-2 text-white/30">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-transparent text-white/30 hover:text-white/60 text-xs focus:outline-none cursor-pointer transition-colors duration-200 appearance-none pr-1"
          >
            {languages.map((l) => (
              <option key={l} value={l} className="bg-black text-white">
                {l}
              </option>
            ))}
          </select>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-2 text-white/30 hover:text-primary text-xs transition-all duration-300 group hover:drop-shadow-[0_0_6px_rgba(0,242,255,0.6)]"
        >
          <span className="group-hover:-translate-y-0.5 transition-transform duration-300">Back to top</span>
          <div className="w-6 h-6 rounded-lg border border-white/10 group-hover:border-primary/50 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10">
            <IconArrowUp />
          </div>
        </button>
      </div>
    </footer>
  );
}
