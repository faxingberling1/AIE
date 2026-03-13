"use client";

import { PremiumButton } from "@/components/ui/PremiumButton";
import { FadeIn, Reveal } from "@/components/ui/Animations";
import { ArrowRight, Bot, Sparkles, Zap, Shield, Globe } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";


export function Hero() {
  return (
    <section className="relative min-h-[110vh] flex flex-col items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Cinematic Background Layer - Static */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[180px]" />
      </div>

      {/* Grid Pattern Layer - Static */}
      <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150" />
        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center">
        <div 
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-10 border border-primary/30 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_0_20px_rgba(0,242,255,0.2)]"
        >
          <Sparkles className="w-4 h-4" />
          <span>Join the Next Wave of Content</span>
        </div>

        <h1 
          className="text-7xl md:text-[11rem] font-black tracking-tighter mb-10 leading-[0.85] perspective-2000"
        >
          <span className="block text-white/90 drop-shadow-2xl uppercase">Create AI</span>
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary drop-shadow-[0_0_30px_rgba(0,242,255,0.4)]">
            INFLUENCERS
          </span>
        </h1>

        <p className="text-xl md:text-3xl text-white/40 mb-14 max-w-4xl mx-auto leading-tight font-light tracking-tight italic">
          Build your own digital personality in minutes. <br />
          Launch 24/7 <span className="text-primary font-bold not-italic">AI Creators</span> that go viral.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Link href="/auth/signup">
            <PremiumButton size="lg" className="group px-12 py-6 text-xl shadow-neon hover:shadow-neon-strong transition-all duration-700 bg-primary text-black border-none relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Get Started
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </span>
            </PremiumButton>
          </Link>

          <PremiumButton variant="glass" size="lg" className="px-12 py-6 text-xl border-white/5 hover:border-white/20 hover:bg-white/[0.02] transition-all">
            View Showcase
          </PremiumButton>
        </div>

        {/* Floating Icons - Now Static */}
        <div className="mt-24 flex justify-center gap-16 opacity-30 select-none">
          {[
            { Icon: Zap, color: "text-primary" },
            { Icon: Globe, color: "text-blue-400" },
            { Icon: Shield, color: "text-primary" }
          ].map(({ Icon, color }, i) => (
            <div
              key={i}
              className={cn(
                "w-20 h-20 rounded-[2rem] glass border-white/10 flex items-center justify-center p-5 shadow-2xl translate-y-0",
                color
              )}
            >
              <Icon className="w-full h-full drop-shadow-[0_0_10px_currentColor]" />
            </div>
          ))}
        </div>
      </div>

      {/* Static Line Indicator instead of animated divider */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/10">
        <div className="w-[1px] h-32 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>
    </section>
  );
}

