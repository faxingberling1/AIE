"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { 
  Users, 
  Link as LinkIcon, 
  Copy, 
  TrendingUp, 
  DollarSign, 
  Share2,
  Trophy,
  Zap,
  CheckCircle2
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const REFERRAL_STATS = [
  { label: "Total Clicks", value: "1,248", icon: LinkIcon, trend: "+12%" },
  { label: "Signups", value: "84", icon: Users, trend: "+5%" },
  { label: "Earnings", value: "$1,420", icon: DollarSign, trend: "+18%" },
];

const LEADERBOARD = [
  { rank: 1, user: "Alex R.", earnings: "$8,420", referrals: 152 },
  { rank: 2, user: "Sarah K.", earnings: "$5,200", referrals: 98 },
  { rank: 3, user: "James M.", earnings: "$4,150", referrals: 74 },
];

export function ReferralDashboard() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://aie.platform/ref/marcus_j_82";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Link Generation Card */}
      <GlassCard className="p-10 border-primary/20 bg-primary/5 relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div>
              <div className="flex items-center gap-3 text-primary mb-4">
                 <Share2 className="w-5 h-5 shadow-neon" />
                 <span className="text-xs font-black uppercase tracking-[0.4em]">Viral Expansion</span>
              </div>
              <h2 className="text-4xl font-black tracking-tighter mb-4">Share the Synthesis</h2>
              <p className="text-white/40 leading-relaxed font-light">
                Invite fellow creators to AIE and earn <span className="text-primary font-bold">20% lifetime commission</span> on all their credit purchases and subscription renewals.
              </p>
           </div>
           <div className="space-y-4">
              <div className="flex gap-4">
                 <div className="flex-grow glass border-white/10 rounded-2xl px-6 flex items-center text-sm font-mono text-white/60 truncate">
                    {referralLink}
                 </div>
                 <PremiumButton onClick={copyToClipboard} className="px-8 shadow-neon">
                    {copied ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                 </PremiumButton>
              </div>
              <div className="flex gap-2">
                 {["Twitter", "LinkedIn", "Telegram"].map((social) => (
                    <button key={social} className="flex-1 py-3 glass rounded-xl border-white/5 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-all">
                       {social}
                    </button>
                 ))}
              </div>
           </div>
        </div>
        
        {/* Abstract Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px] -mr-32 -mt-32" />
      </GlassCard>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {REFERRAL_STATS.map((stat, i) => (
           <GlassCard key={i} className="p-8 border-white/5 group hover:bg-white/[0.03] transition-all duration-500">
              <div className="flex justify-between items-start mb-6">
                 <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-white/20 group-hover:text-primary transition-colors">
                    <stat.icon className="w-6 h-6" />
                 </div>
                 <div className="text-[10px] font-black text-green-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {stat.trend}
                 </div>
              </div>
              <div>
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-1">{stat.label}</p>
                 <div className="text-3xl font-black tracking-tight">{stat.value}</div>
              </div>
           </GlassCard>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Commission History / Chart Placeholder */}
         <GlassCard className="lg:col-span-2 p-8 border-white/5">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40 mb-10 flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Conversion Funnel
            </h3>
            <div className="space-y-8">
               {[
                 { label: "Total Reach", value: "24,500", progress: 100 },
                 { label: "Link Clicks", value: "1,248", progress: 35 },
                 { label: "Successful Signups", value: "84", progress: 12 },
                 { label: "Paid Conversions", value: "12", progress: 4 },
               ].map((item, i) => (
                 <div key={i} className="space-y-3">
                    <div className="flex justify-between items-end">
                       <span className="text-xs font-bold text-white/60">{item.label}</span>
                       <span className="text-sm font-black">{item.value}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.progress}%` }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="h-full bg-primary shadow-neon"
                       />
                    </div>
                 </div>
               ))}
            </div>
         </GlassCard>

         {/* Leaderboard */}
         <GlassCard className="p-8 border-white/5 bg-white/[0.01]">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40 mb-8 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-500" />
              Top Affiliates
            </h3>
            <div className="space-y-6">
               {LEADERBOARD.map((item) => (
                 <div key={item.rank} className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                       <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black",
                        item.rank === 1 ? "bg-yellow-500/10 text-yellow-500" : "bg-white/5 text-white/40"
                       )}>
                        {item.rank}
                       </div>
                       <div>
                          <p className="text-sm font-bold group-hover:text-primary transition-colors">{item.user}</p>
                          <p className="text-[9px] text-white/20 font-black uppercase tracking-widest">{item.referrals} Sales</p>
                       </div>
                    </div>
                    <div className="text-sm font-black text-white/60">{item.earnings}</div>
                 </div>
               ))}
            </div>
            <PremiumButton variant="outline" className="w-full mt-10 border-white/5 text-[10px] uppercase font-black tracking-[0.2em]">
              View Full Standings
            </PremiumButton>
         </GlassCard>
      </div>
    </div>
  );
}
