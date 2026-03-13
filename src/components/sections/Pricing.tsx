"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { FadeIn } from "@/components/ui/Animations";
import { motion } from "framer-motion";
import { Check, Zap, Sparkles, Shield, Bot, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";


import { useState } from "react";

const plans = {
  monthly: [
    {
      name: "Starter",
      price: "$0",
      features: ["Trial of AIE AI Assistants", "Basic course access", "Limited analytics", "Community access"],
      cta: "Sign Up Free",
      description: "Individuals exploring AI",
      icon: Zap,
    },
    {
      name: "Pro",
      price: "$15",
      features: ["Everything in Starter +", "Unlimited courses", "Advanced AI assistants", "Custom AI recommendations", "Priority email support"],
      cta: "Get Started",
      description: "Freelancers / small teams",
      icon: Sparkles,
    },
    {
      name: "Business",
      price: "$30",
      features: ["Everything in Pro +", "Team workspace & collaboration", "AI-generated reports", "Slack/Notion/email integrations", "Premium support"],
      cta: "Get Started",
      popular: true,
      description: "Growing teams",
      icon: Shield,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Everything in Business +", "Dedicated AI agent support", "Security & compliance controls", "Custom integrations & AI workflows", "Account manager"],
      cta: "Contact Sales",
      description: "Large organizations",
      icon: Bot,
    },
  ],
  yearly: [
    {
      name: "Starter",
      price: "$0",
      features: ["Trial of AIE AI Assistants", "Basic course access", "Limited analytics", "Community access"],
      cta: "Sign Up Free",
      description: "Individuals exploring AI",
      icon: Zap,
    },
    {
      name: "Pro",
      price: "$12",
      features: ["Everything in Starter +", "Unlimited courses", "Advanced AI assistants", "Custom AI recommendations", "Priority email support"],
      cta: "Get Started",
      description: "Freelancers / small teams",
      icon: Sparkles,
    },
    {
      name: "Business",
      price: "$24",
      features: ["Everything in Pro +", "Team workspace & collaboration", "AI-generated reports", "Slack/Notion/email integrations", "Premium support"],
      cta: "Get Started",
      popular: true,
      description: "Growing teams",
      icon: Shield,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Everything in Business +", "Dedicated AI agent support", "Security & compliance controls", "Custom integrations & AI workflows", "Account manager"],
      cta: "Contact Sales",
      description: "Large organizations",
      icon: Bot,
    },
  ]
};

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const currentPlans = plans[billingCycle];
  return (
    <section id="pricing" className="py-40 bg-black relative overflow-hidden">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-600/5 rounded-full blur-[180px]" />
      </div>

      {/* Grid Pattern Layer */}
      <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150" />
        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 1. Hero Section (Split Layout) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-40">
          <div className="flex-1 text-left">
            <FadeIn>
              <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-6 block">Transparent Pricing</span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] text-white mb-8">
                ONE TOOL TO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary/50 italic pr-4">POWER</span> YOUR AI WORLD.
              </h1>
              <p className="text-white/40 text-xl font-light leading-relaxed mb-10 max-w-xl">
                Trusted by creators, businesses, and influencers to automate, scale, and succeed with professional AI tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <PremiumButton size="lg" className="px-8 py-4 text-base shadow-neon hover:shadow-neon-strong">
                  Get Started Free
                </PremiumButton>
                <PremiumButton variant="glass" size="lg" className="px-8 py-4 text-base border-white/5 hover:border-white/10" onClick={() => document.getElementById('plans-grid')?.scrollIntoView({ behavior: 'smooth' })}>
                  View Plans
                </PremiumButton>
              </div>
            </FadeIn>
          </div>

          <div className="flex-1 relative">
            <FadeIn delay={0.2}>
              <div className="relative aspect-video lg:aspect-square w-full rounded-[3rem] overflow-hidden border border-white/10 glass p-4 group">
                {/* AI Influencer Image */}
                <div className="relative h-full w-full rounded-[2.5rem] bg-zinc-950 overflow-hidden border border-white/5 shadow-2xl">
                <img 
                   src="/influencers/Tennis Coach.png" 
                   alt="Tennis Coach AI" 
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Visual Identity Decor - Minimalist overlay */}
                <div className="absolute top-8 left-8 p-4 glass rounded-xl border-white/10 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                     <Zap className="w-4 h-4 text-primary" />
                   </div>
                   <div className="flex flex-col">
                     <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Live Agent</span>
                      <span className="text-xs font-bold text-white">Coach Performance</span>
                   </div>
                </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* 2. Logos / Trusted By Section */}
        <div className="mb-40 py-12 border-y border-white/5 overflow-hidden">
          <div className="container mx-auto">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 text-center mb-10">Trusted by Global Teams</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30">
               {["OpenAI", "Figma", "Volvo", "Ramp", "Cursor"].map((logo) => (
                 <div key={logo} className="group cursor-pointer">
                    <span className="text-xl font-bold tracking-tighter text-white group-hover:text-primary group-hover:drop-shadow-neon transition-all duration-500 transform group-hover:scale-110 block">
                      {logo}
                    </span>
                    <div className="h-px w-0 bg-primary group-hover:w-full transition-all duration-500 mt-1" />
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* 3. Pricing Toggle Section */}
        <div id="plans-grid" className="text-center mb-24">
          <FadeIn>
            <div className="inline-flex items-center p-1 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md mb-8">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500",
                  billingCycle === "monthly" ? "bg-primary text-black shadow-neon-sm" : "text-white/40 hover:text-white"
                )}
              >
                Monthly
              </button>
              <div className="relative">
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={cn(
                    "px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-500",
                    billingCycle === "yearly" ? "bg-primary text-black shadow-neon-sm" : "text-white/40 hover:text-white"
                  )}
                >
                  Yearly
                </button>
                {billingCycle === "yearly" && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-[9px] font-black rounded-full animate-bounce">
                      SAVE 20%
                    </span>
                )}
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentPlans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.15}>
              <GlassCard className={cn(
                "relative flex flex-col h-[750px] p-10 overflow-hidden transition-all duration-700 group cursor-pointer rounded-[3rem] bg-white/[0.01]",
                plan.popular ? "border-primary/40 shadow-[0_0_80px_rgba(0,242,255,0.08)] scale-105 z-20" : "border-white/5 hover:border-white/20"
              )}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30">
                    <span className="px-4 py-1.5 bg-primary text-black text-[9px] font-black uppercase tracking-[0.2em] rounded-full shadow-neon-sm">
                      Recommended
                    </span>
                  </div>
                )}

                {/* Visual Identity Decor */}
                <div className="absolute top-0 right-0 p-8">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-500",
                    plan.popular ? "bg-primary/10 border-primary/30 text-primary shadow-[0_0_20px_rgba(0,242,255,0.15)]" : "bg-white/5 border-white/10 text-white/20 group-hover:text-white/40"
                  )}>
                    <plan.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="mb-10 relative">
                  <span className="text-[10px] font-black text-primary/60 uppercase tracking-[0.3em] block mb-4 italic pr-2">
                    {plan.name}
                  </span>
                  <p className="text-white/40 text-xs font-medium mb-6">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white tracking-tighter">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-sm font-bold text-white/20 uppercase tracking-widest">/ Month</span>
                    )}
                  </div>
                </div>

                <div className="space-y-8 flex-grow">
                  <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-4 text-white/40 group-hover:text-white/60 transition-colors">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shadow-neon" />
                        <span className="text-[12px] font-light leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 space-y-4 relative z-10">
                  <Link href="/auth/signup">
                    <PremiumButton 
                      variant={plan.popular ? "primary" : "glass"} 
                      className={cn(
                        "w-full py-6 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500",
                        plan.popular ? "shadow-neon hover:shadow-neon-strong hover:scale-[1.02]" : "hover:bg-white/5"
                      )}
                    >
                      {plan.cta}
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
        {/* 4. Feature Comparison Table */}
        <div className="mt-40 mb-40">
          <FadeIn>
            <div className="text-center mb-20">
              <h3 className="text-3xl font-black text-white tracking-tight mb-4">COMPARE FEATURES</h3>
              <p className="text-white/40 text-sm">Deep dive into every capability of the AIE platform.</p>
            </div>
            
            <div className="glass rounded-[2rem] border border-white/5 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.02]">
                      <th className="p-8 text-[10px] font-black uppercase tracking-widest text-white/60">Feature</th>
                      <th className="p-8 text-[10px] font-black uppercase tracking-widest text-white/60 text-center">Starter</th>
                      <th className="p-8 text-[10px] font-black uppercase tracking-widest text-primary text-center">Pro</th>
                      <th className="p-8 text-[10px] font-black uppercase tracking-widest text-white/60 text-center">Business</th>
                      <th className="p-8 text-[10px] font-black uppercase tracking-widest text-white/60 text-center">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "AI Assistants", starter: "2", pro: "Unlimited", business: "Unlimited", enterprise: "Custom" },
                      { name: "Credits / Month", starter: "100", pro: "1,000", business: "Unlimited", enterprise: "Unlimited" },
                      { name: "Course Library", starter: "Basic", pro: "All Access", business: "All Access", enterprise: "White-label" },
                      { name: "Custom Avatars", starter: "—", pro: "✓", business: "✓", enterprise: "✓" },
                      { name: "API Access", starter: "—", pro: "—", business: "✓", enterprise: "Full" },
                      { name: "Support", starter: "Discord", pro: "Email", business: "Priority", enterprise: "Dedicated" },
                    ].map((row, i) => (
                      <tr key={row.name} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors group">
                        <td className="p-8">
                          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{row.name}</span>
                        </td>
                        <td className="p-8 text-center text-white/40 text-[13px]">{row.starter}</td>
                        <td className="p-8 text-center text-primary/80 font-bold text-[13px]">{row.pro}</td>
                        <td className="p-8 text-center text-white/40 text-[13px]">{row.business}</td>
                        <td className="p-8 text-center text-white/40 text-[13px]">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 5. Custom AI Agent Add-on Section */}
        <FadeIn>
          <div className="relative mb-40 rounded-[3rem] overflow-hidden border border-primary/20 bg-primary/[0.02] p-12 lg:p-20 group">
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-1000" />
             <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl">
                  <span className="px-3 py-1 bg-primary text-black text-[9px] font-black uppercase tracking-widest rounded-md mb-6 inline-block">Special Add-on</span>
                  <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-tight">
                    NEED A CUSTOM <span className="text-primary italic pr-4">AI AGENT?</span>
                  </h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                    Hire our expert team to build, train, and deploy a custom AI automation agent tailored specifically for your brand workflows.
                  </p>
                  <div className="flex flex-wrap gap-6 text-sm text-white/40 font-medium">
                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Done-for-you</span>
                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> 24/7 Monitoring</span>
                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> Lifetime Updates</span>
                  </div>
                </div>
                <div className="shrink-0">
                  <Link href="/contact">
                    <PremiumButton size="lg" className="px-12 py-6 text-lg shadow-neon group-hover:shadow-neon-strong transform group-hover:scale-105 transition-all duration-500">
                      Request Custom Build
                    </PremiumButton>
                  </Link>
                </div>
             </div>
          </div>
        </FadeIn>
        {/* 6. Testimonials Highlight (Brief) */}
        <div className="mb-40 text-center">
          <FadeIn>
             <div className="max-w-2xl mx-auto">
               <div className="flex justify-center gap-1 mb-6">
                 {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
               </div>
               <p className="text-2xl font-light text-white italic leading-relaxed mb-8">
                 "AIE didn't just give us tools, they gave us a competitive edge. The ROI was visible within the first month."
               </p>
               <div className="flex items-center justify-center gap-4">
                 <div className="w-10 h-10 rounded-full bg-primary/10 border border-white/10 flex items-center justify-center text-primary text-[10px] font-black">
                   S
                 </div>
                 <div className="text-left">
                   <p className="text-xs font-bold text-white tracking-tight">Sarah Chen</p>
                   <p className="text-[9px] uppercase font-black tracking-[0.2em] text-primary/60">CMO @ TechFlow</p>
                 </div>
               </div>
             </div>
          </FadeIn>
        </div>

        {/* 7. Sticky CTA Footer */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
           <FadeIn delay={1}>
             <div className="glass-strong border border-white/10 rounded-full p-2 pl-8 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
                <div className="hidden md:flex items-center gap-12">
                   <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Ready to scale?</span>
                      <span className="text-xs font-bold text-white">Join 10k+ creators today.</span>
                   </div>
                   <div className="h-8 w-px bg-white/10" />
                   <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-zinc-800 border border-black" />)}
                      </div>
                      <span className="text-[10px] text-white/40 font-bold uppercase tracking-tighter">Trusted by experts</span>
                   </div>
                </div>
                <Link href="/auth/signup">
                  <PremiumButton className="rounded-full px-8 py-3 text-xs font-black uppercase tracking-widest shadow-neon-sm hover:shadow-neon">
                    Get Started Free
                  </PremiumButton>
                </Link>
             </div>
           </FadeIn>
        </div>
      </div>
    </section>
  );
}
