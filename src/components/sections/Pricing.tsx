"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { FadeIn } from "@/components/ui/Animations";
import { Check, Zap, Sparkles, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";


const plans = [
  {
    name: "Starter",
    price: "$49",
    features: ["Basic AI Training", "100 AI Credits", "Discord Access", "Community Support"],
  },
  {
    name: "Creator",
    price: "$99",
    features: ["Advanced Training", "500 AI Credits", "All Course Access", "Priority Support", "Custom Avatars"],
    popular: true,
  },
  {
    name: "Business",
    price: "$249",
    features: ["Team Training", "2000 AI Credits", "API Integration", "Dedicated Manager", "White-label options"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-40 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center mb-32">
            <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Simple Pricing</span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              CHOOSE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/20 via-white to-white/20 italic font-light">PLAN</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.15}>
              <GlassCard className={cn(
                "relative flex flex-col h-[700px] p-12 overflow-hidden transition-all duration-700 group cursor-pointer rounded-[3rem] bg-white/[0.01]",
                plan.popular ? "border-primary/40 shadow-[0_0_80px_rgba(0,242,255,0.08)] scale-105 z-20" : "border-white/5 hover:border-white/20"
              )}>
                {/* Visual Identity Decor */}
                <div className="absolute top-0 right-0 p-8">
                   <div className={cn(
                     "w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500",
                     plan.popular ? "bg-primary/10 border-primary/30 text-primary" : "bg-white/5 border-white/10 text-white/20 group-hover:text-white/40"
                   )}>
                      {i === 0 ? <Zap className="w-5 h-5" /> : i === 1 ? <Sparkles className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
                   </div>
                </div>

                <div className="mb-12 relative">
                  <span className="text-[10px] font-black text-primary/60 uppercase tracking-[0.3em] block mb-4 italic">
                    {plan.popular ? "Most Popular" : `Plan 0${i + 1}`}
                  </span>
                  <h3 className="text-4xl font-black text-white tracking-tighter mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white tracking-tighter">{plan.price}</span>
                    <span className="text-sm font-bold text-white/20 uppercase tracking-widest">/ Month</span>
                  </div>
                </div>
                
                <div className="space-y-8 flex-grow">
                   <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />
                   <ul className="space-y-5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-4 text-white/40 group-hover:text-white/60 transition-colors">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shadow-neon" />
                        <span className="text-[13px] font-light leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 space-y-4">
                  <Link href="/auth/signup">
                    <PremiumButton variant={plan.popular ? "primary" : "glass"} className="w-full py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em]">
                      Get Started
                    </PremiumButton>
                  </Link>

                  <p className="text-[9px] text-center font-bold text-white/10 uppercase tracking-widest">
                     Simple Terms Apply
                  </p>
                </div>

                {/* Technical Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
