"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Crown, 
  Zap, 
  Check, 
  ShieldCheck, 
  Star, 
  Sparkles,
  Info,
  Clock,
  CreditCard,
  Download,
  AlertCircle,
  FileText,
  ChevronRight,
  ArrowUpRight,
  Gem
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PremiumButton } from "@/components/ui/PremiumButton";

const PLANS = [
  {
    id: "standard",
    name: "Bio-Cell",
    price: "$0",
    period: "/mo",
    description: "Ideal for exploring neural synthesis foundations.",
    features: [
      "Access to Beginner Courses",
      "50 Neural Credits / Month",
      "Community Forum Access",
      "Standard Synthesis Support"
    ],
    cta: "Current Identity",
    current: true,
    color: "from-blue-500/20"
  },
  {
    id: "pro",
    name: "Neural-Core",
    price: "$99",
    period: "/mo",
    description: "Unleash agency-level professional synthesis power.",
    features: [
      "All Masterclass Courses",
      "500 Neural Credits / Month",
      "AI Influencer Accelerator",
      "Priority Neural Support",
      "LoRA Training Access",
      "Advanced 4K Rendering"
    ],
    cta: "Synthesize Pro",
    current: false,
    popular: true,
    color: "from-primary/20"
  },
  {
    id: "agency",
    name: "Aether-Sys",
    price: "$499",
    period: "/mo",
    description: "The ultimate solution for high-volume enterprise scale.",
    features: [
      "Full Marketplace Master Access",
      "5,000 Neural Credits / Month",
      "Custom Identity Consultation",
      "Dedicated Neural Architect",
      "White-label Reports",
      "Early Beta Features"
    ],
    cta: "Scale Universe",
    current: false,
    color: "from-purple-500/20"
  }
];

const billingHistory = [
  { id: "inv_9012", date: "Mar 01, 2024", amount: "$99.00", plan: "Neural-Core", status: "Paid" },
  { id: "inv_8723", date: "Feb 01, 2024", amount: "$99.00", plan: "Neural-Core", status: "Paid" },
  { id: "inv_8412", date: "Jan 01, 2024", amount: "$99.00", plan: "Neural-Core", status: "Paid" },
];

export default function SubscriptionPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <DashboardShell>
      <div className="space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Crown className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Membership Protocols</span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-white">Your Neural <span className="text-primary italic text-stroke-sm">Subscription</span></h1>
            <p className="text-white/40 max-w-2xl text-lg font-light leading-relaxed">Upgrade your identity status to unlock advanced synthesis cycles and premium neural masterclasses.</p>
          </div>

          <div className="flex items-center gap-6 bg-white/5 border border-white/5 p-1.5 rounded-2xl">
              <button 
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all",
                  billingCycle === "monthly" ? "bg-primary text-black shadow-neon" : "text-white/30 hover:text-white"
                )}
              >
                 Monthly
              </button>
              <button 
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                  "px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all relative",
                  billingCycle === "yearly" ? "bg-primary text-black shadow-neon" : "text-white/30 hover:text-white"
                )}
              >
                 Annually
                 <span className="absolute -top-3 -right-3 px-2 py-0.5 bg-primary/20 text-primary text-[8px] font-black rounded-lg border border-primary/20">SAVE 20%</span>
              </button>
          </div>
        </div>

        {/* Current Plan Overview */}
        <GlassCard className="p-10 border-primary/20 bg-primary/[0.02] flex flex-col xl:flex-row items-center justify-between gap-10 relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
           
           <div className="flex items-center gap-8 relative z-10">
              <div className="w-20 h-20 rounded-[32px] bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary shadow-neon-sm animate-pulse">
                 <Gem className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                 <div className="flex items-center gap-3">
                    <h2 className="text-3xl font-black tracking-tighter text-white">Standard Access</h2>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] font-black text-white/40 rounded-full tracking-widest uppercase">Active Protocol</span>
                 </div>
                 <p className="text-white/40 text-sm italic">Next neural injection: <span className="text-white font-bold">April 01, 2024</span> (50 Credits)</p>
              </div>
           </div>

           <div className="flex flex-wrap gap-4 relative z-10">
              <PremiumButton variant="outline" className="border-white/10 opacity-40 hover:opacity-100 transition-opacity">
                 Cancel Protocol
              </PremiumButton>
              <PremiumButton className="px-10 shadow-neon-strong">
                 Instant Neural Boost
              </PremiumButton>
           </div>
        </GlassCard>

        {/* Plan Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {PLANS.map((plan) => (
             <GlassCard 
               key={plan.id}
               className={cn(
                 "p-12 border-white/5 flex flex-col relative group transition-all duration-700 hover:-translate-y-2",
                 plan.popular ? "bg-primary/[0.03] border-primary/30 ring-1 ring-primary/20 shadow-2xl" : "bg-white/[0.01] hover:bg-white/[0.03]"
               )}
             >
                <div className={`absolute top-0 left-0 w-full h-48 bg-gradient-to-b ${plan.color} to-transparent opacity-30 pointer-events-none`} />
                
                {plan.popular && (
                  <div className="absolute top-0 left-12 -translate-y-1/2 bg-primary text-black text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.3em] shadow-neon">
                     Architects Choice
                  </div>
                )}

                <div className="mb-12 relative z-10">
                   <h4 className="text-2xl font-black tracking-tighter text-white mb-2 flex items-center gap-3">
                      {plan.name}
                      {plan.popular && <Sparkles className="w-5 h-5 text-primary animate-pulse" />}
                   </h4>
                   <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-black text-white tracking-tighter">{plan.price}</span>
                      <span className="text-white/20 font-black uppercase tracking-widest text-xs">{plan.period}</span>
                   </div>
                   <p className="text-white/40 text-sm mt-6 leading-relaxed italic pr-4">{plan.description}</p>
                </div>

                <div className="space-y-5 mb-14 flex-grow relative z-10">
                   {plan.features.map((feature, i) => (
                      <div key={i} className="flex gap-4 items-start group/feat">
                         <div className={cn(
                           "w-5 h-5 rounded-full flex items-center justify-center transition-all",
                           plan.popular ? "bg-primary/20 text-primary" : "bg-white/5 text-white/20"
                         )}>
                            <Check className="w-3 h-3 group-hover/feat:scale-110 transition-transform" />
                         </div>
                         <span className="text-[13px] font-bold text-white/40 group-hover/feat:text-white transition-colors tracking-tight">{feature}</span>
                      </div>
                   ))}
                </div>

                <div className="relative z-10">
                   <button 
                     disabled={plan.current}
                     className={cn(
                        "w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] transition-all",
                        plan.current 
                          ? "bg-white/5 border border-white/5 text-white/20 cursor-default" 
                          : plan.popular 
                            ? "bg-primary text-black shadow-neon hover:scale-[1.03] active:scale-95" 
                            : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                     )}
                   >
                      {plan.cta}
                   </button>
                </div>
             </GlassCard>
           ))}
        </div>

        {/* Billing Ledger Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
           <div className="lg:col-span-1 space-y-6">
              <div className="space-y-1">
                 <h2 className="text-2xl font-black tracking-tight text-white flex items-center gap-3">
                    <FileText className="w-6 h-6 text-primary" />
                    Billing <span className="text-white/40 font-light">Environment</span>
                 </h2>
                 <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Neural Protocol Ledger</p>
              </div>
              
              <GlassCard className="p-8 border-white/5 space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/20">
                       <CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Active Synthesis Method</p>
                       <p className="text-sm font-black text-white">Visa •••• 4242</p>
                    </div>
                 </div>
                 
                 <div className="pt-6 border-t border-white/5 space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/20">
                       <span>Tax Identity</span>
                       <span className="text-white/40">Not Verified</span>
                    </div>
                    <button className="text-[10px] font-black text-primary hover:text-white transition-colors uppercase tracking-widest">
                       Update Payment Parameters
                    </button>
                 </div>
              </GlassCard>

              <div className="p-6 rounded-[32px] bg-red-500/5 border border-red-500/10 flex items-center gap-4">
                 <AlertCircle className="w-8 h-8 text-red-500/20" />
                 <p className="text-[10px] text-white/40 italic leading-relaxed">
                    Protocols will be downgraded if synthesis fails on the next billing injection.
                 </p>
              </div>
           </div>

           <div className="lg:col-span-2 space-y-6">
              <GlassCard className="p-0 overflow-hidden border-white/5">
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="bg-white/[0.02] border-b border-white/5">
                             <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/20">Protocol / Invoice</th>
                             <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/20">Timestamp</th>
                             <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/20 text-right">Yield Info</th>
                             <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/20 text-center">Status</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-white/5">
                          {billingHistory.map((invoice) => (
                            <tr key={invoice.id} className="hover:bg-white/[0.015] transition-colors group">
                               <td className="px-8 py-5">
                                  <div className="flex items-center gap-4">
                                     <div className="p-2 bg-white/5 rounded-xl text-white/20 group-hover:text-primary transition-colors">
                                        <FileText className="w-4 h-4" />
                                     </div>
                                     <div className="space-y-0.5">
                                        <p className="text-xs font-bold text-white group-hover:text-primary transition-colors">{invoice.plan}</p>
                                        <p className="text-[10px] font-mono text-white/10 tracking-tighter">{invoice.id}</p>
                                     </div>
                                  </div>
                               </td>
                               <td className="px-8 py-5">
                                  <div className="flex items-center gap-2 text-xs font-bold text-white/40">
                                     <Clock className="w-3 h-3" />
                                     {invoice.date}
                                  </div>
                               </td>
                               <td className="px-8 py-5 text-right">
                                  <span className="text-sm font-black text-white/60">{invoice.amount}</span>
                               </td>
                               <td className="px-8 py-5">
                                  <div className="flex items-center justify-center gap-2">
                                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                     <span className="text-[10px] font-black uppercase text-white/40">{invoice.status}</span>
                                  </div>
                               </td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
                 <div className="p-4 bg-white/[0.01] border-t border-white/5 flex justify-center">
                    <button className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-all flex items-center gap-2 group/all">
                       Download Cloud Statement
                       <Download className="w-3 h-3 group-hover/all:translate-y-0.5 transition-transform" />
                    </button>
                 </div>
              </GlassCard>
           </div>
        </div>
      </div>
    </DashboardShell>
  );
}
