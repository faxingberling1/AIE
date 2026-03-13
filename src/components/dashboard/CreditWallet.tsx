"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { 
  Plus, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Calendar, 
  CreditCard,
  Zap,
  TrendingUp,
  History
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const USAGE_DATA = [
  { day: "Mon", used: 120 },
  { day: "Tue", used: 340 },
  { day: "Wed", used: 210 },
  { day: "Thu", used: 560 },
  { day: "Fri", used: 420 },
  { day: "Sat", used: 150 },
  { day: "Sun", used: 90 },
];

const TRANSACTIONS = [
  { id: 1, type: "charge", amount: 500, label: "Token Package (Lite)", date: "Mar 11, 2026", status: "completed" },
  { id: 2, type: "usage", amount: 12, label: "AI Image Generation (8x)", date: "Mar 12, 2026", status: "completed" },
  { id: 3, type: "usage", amount: 45, label: "LoRA Model Training", date: "Mar 12, 2026", status: "completed" },
  { id: 4, type: "referral", amount: 100, label: "Referral Bonus (Sarah L.)", date: "Mar 13, 2026", status: "completed" },
];

export function CreditWallet() {
  const maxUsage = Math.max(...USAGE_DATA.map(d => d.used));

  return (
    <div className="space-y-8">
      {/* Balance Summary Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="md:col-span-2 p-10 border-primary/20 bg-primary/5 relative overflow-hidden group">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 mb-2">Available Balance</p>
                <h2 className="text-6xl font-black tracking-tighter text-white">2,450 <span className="text-xl text-primary font-bold">Credits</span></h2>
              </div>
              <PremiumButton className="shadow-neon-strong px-8" onClick={() => {}}>
                <Plus className="w-4 h-4 mr-2" />
                Top Up
              </PremiumButton>
            </div>
            
            <div className="mt-12 flex items-center gap-12">
               <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">MTD Usage</p>
                  <p className="text-xl font-bold">1,842 <span className="text-xs text-white/20">Credits</span></p>
               </div>
               <div className="h-10 w-px bg-white/5" />
               <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Est. Runtime</p>
                  <p className="text-xl font-bold">14 <span className="text-xs text-white/20">Days Left</span></p>
               </div>
            </div>
          </div>
          
          {/* Abstract Graph BG */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 flex items-end justify-end p-4">
             <div className="flex items-end gap-1 h-3/4">
                {USAGE_DATA.map((d, i) => (
                   <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${(d.used / maxUsage) * 100}%` }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                    className="w-4 bg-primary rounded-t-sm"
                   />
                ))}
             </div>
          </div>
        </GlassCard>

        <GlassCard className="p-8 border-white/5 flex flex-col justify-between group">
           <div>
              <div className="w-12 h-12 rounded-2xl glass mb-6 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                 <Zap className="w-6 h-6 fill-current" />
              </div>
              <h3 className="text-xl font-black tracking-tight mb-2 uppercase">Usage Velocity</h3>
              <p className="text-xs text-white/40 leading-relaxed">System load is stable. Efficiency score is 98% this session.</p>
           </div>
           <div className="flex items-center gap-2 text-primary font-bold text-sm mt-8">
              <TrendingUp className="w-4 h-4" />
              +12% efficiency increase
           </div>
        </GlassCard>
      </div>

      {/* Analytics & Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Usage Chart Large */}
         <GlassCard className="lg:col-span-2 p-8 border-white/5">
            <div className="flex justify-between items-center mb-10">
               <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Usage Analytics (7 Days)
               </h3>
               <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-primary">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Actual
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-white/20">
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    Forecast
                  </div>
               </div>
            </div>
            
            <div className="h-64 flex items-end justify-between px-4 pb-2 border-b border-white/5 relative">
               {/* Grid Lines */}
               <div className="absolute inset-x-0 top-0 h-full flex flex-col justify-between opacity-5 pointer-events-none">
                  {[...Array(4)].map((_, i) => <div key={i} className="w-full h-px bg-white" />)}
               </div>

               {USAGE_DATA.map((d, i) => (
                 <div key={i} className="flex flex-col items-center gap-4 flex-1">
                    <div className="relative group/bar w-full flex justify-center">
                       <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${(d.used / maxUsage) * 200}px` }}
                        className="w-10 bg-gradient-to-t from-primary/5 to-primary rounded-t-xl shadow-neon relative z-10"
                       />
                       {/* Label on Hover */}
                       <div className="absolute -top-10 bg-white text-black text-[9px] font-black px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap z-20">
                        {d.used} Credits
                       </div>
                    </div>
                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">{d.day}</span>
                 </div>
               ))}
            </div>
         </GlassCard>

         {/* Transactions */}
         <GlassCard className="p-8 border-white/5">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40 mb-8 flex items-center gap-2">
              <History className="w-4 h-4" />
              History
            </h3>
            <div className="space-y-6">
               {TRANSACTIONS.map((tx) => (
                 <div key={tx.id} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-4">
                       <div className={cn(
                        "w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110",
                        tx.type === "charge" ? "bg-green-500/10 text-green-400" : 
                        tx.type === "referral" ? "bg-primary/10 text-primary" : "bg-white/5 text-white/40"
                       )}>
                        {tx.type === "charge" ? <Plus className="w-5 h-5" /> : 
                         tx.type === "referral" ? <Zap className="w-5 h-5" /> : <CreditCard className="w-4 h-4" />}
                       </div>
                       <div>
                          <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{tx.label}</p>
                          <p className="text-[10px] text-white/20 font-medium tracking-widest">{tx.date}</p>
                       </div>
                    </div>
                    <div className={cn(
                      "text-sm font-black tracking-tighter",
                      tx.type === "charge" || tx.type === "referral" ? "text-green-400" : "text-white/40"
                    )}>
                       {tx.type === "charge" || tx.type === "referral" ? "+" : "-"}{tx.amount}
                    </div>
                 </div>
               ))}
            </div>
            <PremiumButton variant="outline" className="w-full mt-10 border-white/5 text-[10px] uppercase font-black tracking-[0.2em] py-4">
              View Detailed Ledger
            </PremiumButton>
         </GlassCard>
      </div>
    </div>
  );
}
