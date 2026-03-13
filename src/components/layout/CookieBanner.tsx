"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ── Types ────────────────────────────────────────────────────────────────────

type CookiePrefs = {
  essential: boolean;   // always true, non-negotiable
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

const DEFAULT_PREFS: CookiePrefs = {
  essential: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

const STORAGE_KEY = "aie_cookie_consent";

// ── Helpers ───────────────────────────────────────────────────────────────────

function getStoredConsent(): CookiePrefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function storeConsent(prefs: CookiePrefs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

// ── Toggle ────────────────────────────────────────────────────────────────────

function Toggle({
  checked,
  onChange,
  disabled = false,
}: {
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative inline-flex h-5 w-9 flex-shrink-0 rounded-full border transition-all duration-300 focus:outline-none ${
        disabled
          ? "border-white/10 bg-white/10 cursor-not-allowed"
          : checked
          ? "border-primary/60 bg-primary/20 cursor-pointer"
          : "border-white/10 bg-white/5 cursor-pointer hover:border-white/20"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-4 w-4 rounded-full shadow transition-all duration-300 mt-0.5 ${
          checked
            ? "translate-x-4 bg-primary"
            : "translate-x-0.5 bg-white/30"
        }`}
      />
    </button>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>(DEFAULT_PREFS);
  const [saving, setSaving] = useState(false);

  // Only show if no consent stored yet
  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      // Small delay so it doesn't flash immediately on first load
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (finalPrefs: CookiePrefs) => {
    setSaving(true);
    storeConsent(finalPrefs);
    setTimeout(() => {
      setSaving(false);
      setVisible(false);
      setShowPanel(false);
    }, 400);
  };

  const acceptAll = () =>
    save({ essential: true, analytics: true, marketing: true, preferences: true });

  const declineAll = () =>
    save({ essential: true, analytics: false, marketing: false, preferences: false });

  const saveCustom = () => save(prefs);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop blur overlay when panel is open */}
      {showPanel && (
        <div
          className="fixed inset-0 z-[199] bg-black/40 backdrop-blur-sm"
          onClick={() => setShowPanel(false)}
        />
      )}

      {/* Main Banner / Panel */}
      <div
        className={`fixed z-[200] transition-all duration-500 ${
          showPanel
            ? "inset-4 md:inset-auto md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:w-[540px]"
            : "bottom-5 left-4 right-4 md:bottom-6 md:left-1/2 md:-translate-x-1/2 md:w-[680px]"
        }`}
        style={{
          animation: "slideUpFade 0.45s cubic-bezier(0.16, 1, 0.3, 1) both",
        }}
      >
        <div className="relative rounded-2xl border border-white/[0.12] bg-black/80 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.8),0_0_20px_rgba(0,242,255,0.06)] overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          {/* ── Simple Banner ── */}
          {!showPanel && (
            <div className="p-5 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Icon + Text */}
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4 text-primary">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                      <circle cx="12" cy="8" r="1" fill="currentColor" />
                      <circle cx="8" cy="13" r="1" fill="currentColor" />
                      <circle cx="16" cy="14" r="1" fill="currentColor" />
                      <circle cx="12" cy="17" r="0.8" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight mb-0.5">
                      We use cookies 🍪
                    </p>
                    <p className="text-white/40 text-xs leading-relaxed">
                      To enhance your experience, analyze traffic, and personalize content. By clicking{" "}
                      <span className="text-white/70">Accept All</span>, you agree to our{" "}
                      <Link href="/legal/cookies" className="text-primary hover:underline underline-offset-2">
                        Cookie Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
                  <button
                    onClick={() => setShowPanel(true)}
                    className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white/50 text-xs font-bold hover:text-white hover:border-white/20 transition-all duration-200 whitespace-nowrap"
                  >
                    Manage
                  </button>
                  <button
                    onClick={declineAll}
                    className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white/50 text-xs font-bold hover:text-white hover:border-white/20 transition-all duration-200"
                  >
                    Decline
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-5 py-2 rounded-xl bg-primary text-black text-xs font-black hover:shadow-[0_0_25px_rgba(0,242,255,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── Preferences Panel ── */}
          {showPanel && (
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-black text-white text-lg tracking-tight">Cookie Preferences</h2>
                  <p className="text-white/40 text-xs mt-0.5">Choose which cookies you allow.</p>
                </div>
                <button
                  onClick={() => setShowPanel(false)}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Cookie categories */}
              <div className="space-y-3 mb-6">
                {/* Essential */}
                <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      <span className="font-bold text-white text-sm">Essential</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-green-400 font-bold uppercase tracking-wider">Always On</span>
                      <Toggle checked={true} disabled />
                    </div>
                  </div>
                  <p className="text-white/35 text-xs leading-relaxed">
                    Required for the platform to function — login sessions, security, and form handling.
                  </p>
                </div>

                {/* Analytics */}
                <div className={`rounded-xl border p-4 transition-all duration-200 ${prefs.analytics ? "border-primary/25 bg-primary/[0.04]" : "border-white/[0.08] bg-white/[0.03]"}`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full transition-colors ${prefs.analytics ? "bg-primary" : "bg-white/20"}`} />
                      <span className="font-bold text-white text-sm">Analytics</span>
                    </div>
                    <Toggle
                      checked={prefs.analytics}
                      onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
                    />
                  </div>
                  <p className="text-white/35 text-xs leading-relaxed">
                    Helps us understand how users interact with AIE so we can improve the platform.
                  </p>
                </div>

                {/* Marketing */}
                <div className={`rounded-xl border p-4 transition-all duration-200 ${prefs.marketing ? "border-purple-400/25 bg-purple-400/[0.04]" : "border-white/[0.08] bg-white/[0.03]"}`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full transition-colors ${prefs.marketing ? "bg-purple-400" : "bg-white/20"}`} />
                      <span className="font-bold text-white text-sm">Marketing</span>
                    </div>
                    <Toggle
                      checked={prefs.marketing}
                      onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
                    />
                  </div>
                  <p className="text-white/35 text-xs leading-relaxed">
                    Used to show relevant ads and measure campaign effectiveness across platforms.
                  </p>
                </div>

                {/* Preferences */}
                <div className={`rounded-xl border p-4 transition-all duration-200 ${prefs.preferences ? "border-amber-400/25 bg-amber-400/[0.04]" : "border-white/[0.08] bg-white/[0.03]"}`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full transition-colors ${prefs.preferences ? "bg-amber-400" : "bg-white/20"}`} />
                      <span className="font-bold text-white text-sm">Preferences</span>
                    </div>
                    <Toggle
                      checked={prefs.preferences}
                      onChange={(v) => setPrefs((p) => ({ ...p, preferences: v }))}
                    />
                  </div>
                  <p className="text-white/35 text-xs leading-relaxed">
                    Remembers your settings like language, theme, and dashboard layout across visits.
                  </p>
                </div>
              </div>

              {/* Panel Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={declineAll}
                  className="flex-1 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white/50 text-xs font-bold hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  Decline All
                </button>
                <button
                  onClick={saveCustom}
                  disabled={saving}
                  className="flex-1 py-2.5 rounded-xl border border-primary/40 bg-primary/10 text-primary text-xs font-black hover:bg-primary/20 transition-all duration-200 disabled:opacity-50"
                >
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  disabled={saving}
                  className="flex-1 py-2.5 rounded-xl bg-primary text-black text-xs font-black hover:shadow-[0_0_25px_rgba(0,242,255,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                >
                  Accept All
                </button>
              </div>

              {/* Footer note */}
              <p className="text-white/20 text-[10px] text-center mt-4 leading-relaxed">
                You can change your preferences at any time in our{" "}
                <Link href="/legal/cookies" className="text-white/40 hover:text-primary transition-colors underline underline-offset-2">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Slide-up animation */}
      <style jsx global>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
