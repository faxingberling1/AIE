"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Zap, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Layers,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const KPI_DATA = [
  { label: "Monthly Recurring Revenue", value: "$42,850", trend: "+14.2%", up: true, icon: DollarSign },
  { label: "Daily Active Users", value: "3,142", trend: "+8.4%", up: true, icon: Users },
  { label: "Credit Consumption", value: "842k", trend: "-2.1%", up: false, icon: Zap },
  { label: "Churn Rate", value: "2.4%", trend: "-0.5%", up: true, icon: Activity },
];

const GROWTH_CHART = [
  { month: "Oct", mrr: 12000 },
  { month: "Nov", mrr: 18000 },
  { month: "Dec", mrr: 24000 },
  { month: "Jan", mrr: 31000 },
  { month: "Feb", mrr: 38000 },
  { month: "Mar", mrr: 42850 },
];

export function AdminAnalytics() {
  const maxMRR = Math.max(...GROWTH_CHART.map(d => d.mrr));

  return (
    <div className="space-y-12">
      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {KPI_DATA.map((kpi, i) => (
           <GlassCard key={i} className="p-8 border-white/5 relative group overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                 <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-white/20 group-hover:text-primary transition-all">
                    <kpi.icon className="w-6 h-6" />
                 </div>
                 <div className={cn(
                    "flex items-center gap-1 text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg",
                    kpi.up ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                 )}>
                    {kpi.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {kpi.trend}
                 </div>
              </div>
              <div>
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-1">{kpi.label}</p>
                 <div className="text-3xl font-black tracking-tighter">{kpi.value}</div>
              </div>
              {/* Background Accent */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors" />
           </GlassCard>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Main Revenue Chart */}
         <GlassCard className="lg:col-span-2 p-10 border-white/5 bg-white/[0.01]">
            <div className="flex justify-between items-end mb-12">
               <div>
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/20 mb-2">Revenue Synthesis</h3>
                  <h2 className="text-4xl font-black tracking-tighter">Scale Projection</h2>
               </div>
               <div className="flex gap-2">
                 <button className="px-4 py-2 glass rounded-lg text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white">6 Months</button>
                 <button className="px-4 py-2 glass rounded-lg border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary">1 Year</button>
               </div>
            </div>
            
            <div className="h-72 flex items-end gap-6 px-4">
               {GROWTH_CHART.map((d, i) => (
                 <div key={i} className="flex-1 flex flex-col items-center gap-6 relative group/chart">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${(d.mrr / maxMRR) * 100}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="w-full bg-gradient-to-t from-primary/5 via-primary/20 to-primary rounded-t-2xl shadow-neon relative z-10"
                    />
                    <div className="absolute -top-12 opacity-0 group-hover/chart:opacity-100 transition-all duration-300 bg-white text-black text-[10px] font-black px-3 py-1.5 rounded-lg shadow-2xl z-20">
                      ${d.mrr.toLocaleString()}
                    </div>
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">{d.month}</span>
                 </div>
               ))}
            </div>
         </GlassCard>

         {/* Distribution / Health */}
         <div className="space-y-8">
            <GlassCard className="p-8 border-white/5">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-8">User Tiers</h3>
                <div className="space-y-6">
                   {[
                     { label: "Creator Pro", value: "42%", color: "bg-primary" },
                     { label: "Enterprise", value: "18%", color: "bg-white" },
                     { label: "Standard", value: "40%", color: "bg-white/20" },
                   ].map((tier, i) => (
                     <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                           <span className="text-white/40">{tier.label}</span>
                           <span className="text-white">{tier.value}</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                           <div className={cn("h-full rounded-full", tier.color)} style={{ width: tier.value }} />
                        </div>
                     </div>
                   ))}
                </div>
            </GlassCard>

            <GlassCard className="p-8 border-primary/10 bg-primary/5">
               <div className="flex items-center gap-4 mb-6">
                  <Globe className="w-5 h-5 text-primary shadow-neon" />
                  <h4 className="text-xs font-black uppercase tracking-widest">Global Load</h4>
               </div>
               <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-black">1.2ms</span>
                  <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">OPTIMAL</span>
               </div>
               <p className="text-[10px] text-white/40 leading-relaxed font-light uppercase tracking-widest">Multi-region synthesis cluster is operating within normal parameters. No edge latency detected.</p>
            </GlassCard>
         </div>
      </div>
    </div>
  );
}
