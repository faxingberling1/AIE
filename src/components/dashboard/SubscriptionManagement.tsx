"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { 
  Check, 
  Zap, 
  ShieldCheck, 
  Crown, 
  Star, 
  Sparkles,
  Info
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const PLANS = [
  {
    id: "free",
    name: "Standard",
    price: "$0",
    period: "/mo",
    description: "Perfect for exploring the fundamentals of AI Creation.",
    features: [
      "Access to Beginner Courses",
      "50 Credits / month",
      "Community Forum Access",
      "Standard Support"
    ],
    cta: "Current Plan",
    current: true,
    color: "white"
  },
  {
    id: "pro",
    name: "Creator Pro",
    price: "$99",
    period: "/mo",
    description: "Advanced tools and training for professional growth.",
    features: [
      "All Beginner & Intermediate Courses",
      "500 Credits / month",
      "AI Influencer Accelerator",
      "Priority Discord Support",
      "LoRA Training Access"
    ],
    cta: "Upgrade to Pro",
    current: false,
    popular: true,
    color: "primary"
  },
  {
    id: "agency",
    name: "Enterprise",
    price: "$499",
    period: "/mo",
    description: "The ultimate solution for agencies and scale.",
    features: [
      "Full Marketplace Access",
      "5,000 Credits / month",
      "One-on-One Mentorship",
      "Dedicated Account Manager",
      "Early Beta Access",
      "White-label Reports"
    ],
    cta: "Contact Sales",
    current: false,
    color: "white"
  }
];

export function SubscriptionManagement() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="space-y-12">
      {/* Current Status Header */}
      <GlassCard className="p-8 border-primary/20 bg-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-3xl glass border border-primary/30 flex items-center justify-center text-primary shadow-neon">
               <Crown className="w-8 h-8" />
            </div>
            <div>
               <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-black uppercase tracking-tighter">Standard Access</h3>
                  <span className="text-[10px] font-black bg-white/10 px-2 py-0.5 rounded tracking-widest text-white/60">ACTIVE</span>
               </div>
               <p className="text-sm text-white/40">Your next 50 credits will be added on <span className="text-white font-bold">April 1, 2026</span></p>
            </div>
         </div>
         <div className="flex gap-4">
            <PremiumButton variant="outline" className="border-white/5 opacity-50 cursor-not-allowed">Cancel Plan</PremiumButton>
            <PremiumButton onClick={() => {}} className="shadow-neon-strong">Boost Account</PremiumButton>
         </div>
      </GlassCard>

      {/* Plans Selection */}
      <div className="text-center space-y-6">
         <div className="inline-flex glass p-1.5 rounded-2xl border-white/5">
            <button 
              onClick={() => setBillingCycle("monthly")}
              className={cn("px-8 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all", billingCycle === "monthly" ? "bg-primary text-black" : "text-white/40 hover:text-white")}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingCycle("yearly")}
              className={cn("px-8 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all relative", billingCycle === "yearly" ? "bg-primary text-black" : "text-white/40 hover:text-white")}
            >
              Yearly
              <span className="absolute -top-1 -right-4 text-[8px] font-black bg-primary/20 text-primary px-1.5 py-0.5 rounded border border-primary/20">Save 20%</span>
            </button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {PLANS.map((plan) => (
           <GlassCard 
            key={plan.id} 
            className={cn(
              "p-10 border-white/5 flex flex-col relative group transition-all duration-500",
              plan.popular ? "bg-primary/5 border-primary/20 ring-1 ring-primary/20" : "bg-white/[0.01] hover:bg-white/[0.03]"
            )}
           >
              {plan.popular && (
                <div className="absolute -top-4 left-10 bg-primary text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-neon">
                  Recommended Path
                </div>
              )}

              <div className="mb-10">
                 <h4 className="text-2xl font-black tracking-tighter mb-4 flex items-center gap-3">
                   {plan.name}
                   {plan.id === "pro" && <Sparkles className="w-5 h-5 text-primary" />}
                 </h4>
                 <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black">{plan.price}</span>
                    <span className="text-white/40 font-bold uppercase tracking-widest text-xs">{plan.period}</span>
                 </div>
                 <p className="text-white/40 text-sm mt-6 leading-relaxed font-light">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                 {plan.features.map((feature, i) => (
                    <div key={i} className="flex gap-4 items-start group/feat">
                       <Check className={cn("w-4 h-4 mt-0.5 transition-colors", plan.id === "pro" ? "text-primary" : "text-white/20")} />
                       <span className="text-sm text-white/60 group-hover/feat:text-white transition-colors">{feature}</span>
                    </div>
                 ))}
              </div>

              <PremiumButton 
                variant={plan.current ? "glass" : plan.popular ? "primary" : "outline"}
                className={cn("w-full py-5 text-sm uppercase font-black tracking-[0.2em]", plan.current && "opacity-50 cursor-default")}
              >
                 {plan.cta}
              </PremiumButton>
           </GlassCard>
         ))}
      </div>

      <div className="text-center pt-8">
         <p className="text-xs text-white/20 flex items-center justify-center gap-2">
            <Info className="w-3.5 h-3.5" />
            Switching plans will take effect at the start of your next billing cycle.
         </p>
      </div>
    </div>
  );
}
