"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Pricing } from "@/components/sections/Pricing";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30 selection:text-primary pt-20">
      {/* Global Aesthetics */}
      <div className="fixed inset-0 z-[99] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <Navbar />

      <div className="relative">
        <Pricing />
      </div>

      <Footer />
    </main>
  );
}
