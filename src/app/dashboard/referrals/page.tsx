"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Link as LinkIcon, 
  Copy, 
  TrendingUp, 
  Award, 
  BadgeCheck, 
  Trophy,
  Share2,
  DollarSign,
  Zap,
  ChevronRight,
  Target,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { RewardsTracker } from "@/components/dashboard/RewardsTracker";

const leaderboard = [
  { rank: 1, name: "NeuralCreator_01", referrals: 156, earned: 4250, avatar: "N" },
  { rank: 2, name: "SynthAgency_X", referrals: 142, earned: 3800, avatar: "S" },
  { rank: 3, name: "AIVisionary", referrals: 128, earned: 3100, avatar: "A" },
  { rank: 4, name: "DigitalNomad_AI", referrals: 89, earned: 1950, avatar: "D" },
  { rank: 5, name: "MetaSynthesizer", referrals: 76, earned: 1500, avatar: "M" },
];

const rewards = [
  { id: "r1", title: "Silver Pioneer", goal: 10, current: 8, reward: "500 Bonus Credits", status: "Active" },
  { id: "r2", title: "Gold Synthesizer", goal: 50, current: 8, reward: "$250 Cash Bonus", status: "Locked" },
  { id: "r3", title: "Elite Ambassador", goal: 100, current: 8, reward: "10% Lifetime RevShare", status: "Locked" },
];

export default function ReferralsPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = "https://aie-platform.com/ref/user_9821";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <DashboardShell>
      <div className="space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Users className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Internal Growth Engine</span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-white">Network <span className="text-primary italic text-stroke-sm">Referrals</span></h1>
            <p className="text-white/40 max-w-2xl text-lg font-light leading-relaxed">Scale our collective intelligence and earn <span className="text-primary font-black italic">20% lifetime commission</span> for every new neural connection.</p>
          </div>

          <div className="flex flex-col gap-3">
             <div className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-2xl pl-4 pr-2 py-2 min-w-[340px] group focus-within:border-primary/30 transition-all">
                <LinkIcon className="w-4 h-4 text-white/20 group-focus-within:text-primary transition-colors" />
                <span className="text-[11px] font-mono text-white/40 truncate flex-growSelection">{referralLink}</span>
                <button 
                  onClick={handleCopy}
                  className={cn(
                    "px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                    copied ? "bg-green-500 text-white" : "bg-primary text-black hover:shadow-neon"
                  )}
                >
                   {copied ? "Copied!" : "Copy Link"}
                </button>
             </div>
             <p className="text-[9px] font-black text-white/10 uppercase tracking-[0.2em] text-center">Your unique neural invite code</p>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { label: "Total Yield", value: "$1,420.00", icon: DollarSign, color: "text-green-400", trend: "+12%" },
             { label: "Neural Nodes", value: "84", icon: Users, color: "text-primary", trend: "+5%" },
             { label: "Conversion Rate", value: "14.2%", icon: Target, color: "text-purple-400", trend: "+2%" },
             { label: "Active Rewards", value: "2", icon: Zap, color: "text-amber-400", trend: "MAX" },
           ].map((stat, i) => (
             <GlassCard key={i} className="p-8 border-white/5 group hover:border-primary/20 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                   <div className="text-[9px] font-black text-white/20 uppercase bg-white/5 px-2 py-0.5 rounded-md group-hover:text-primary transition-colors">
                      {stat.trend}
                   </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                   <div className={cn("p-3 bg-white/5 rounded-2xl group-hover:scale-110 group-hover:bg-white/10 transition-all", stat.color)}>
                      <stat.icon className="w-6 h-6" />
                   </div>
                </div>
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white/20 mb-2">{stat.label}</p>
                <h3 className="text-3xl font-black text-white tracking-tighter">{stat.value}</h3>
             </GlassCard>
           ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
           {/* Leaderboard Section */}
           <div className="xl:col-span-2 space-y-8">
              <div className="flex items-center justify-between">
                 <div className="space-y-1">
                    <h2 className="text-3xl font-black tracking-tighter text-white flex items-center gap-3">
                       <Trophy className="w-8 h-8 text-amber-500 drop-shadow-neon" />
                       Elite <span className="text-white/40 font-light">Ambassadors</span>
                    </h2>
                    <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Global Synthesis Leaderboard</p>
                 </div>
                 <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-all group">
                    View Enterprise Rankings
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>

              <GlassCard className="p-0 overflow-hidden border-white/5 shadow-2xl">
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="bg-white/[0.02] border-b border-white/5">
                             <th className="px-10 py-6 text-[11px] font-black uppercase tracking-[0.2em] text-white/20 text-center">Rank</th>
                             <th className="px-10 py-6 text-[11px] font-black uppercase tracking-[0.2em] text-white/20">Synthesizer Identity</th>
                             <th className="px-10 py-6 text-[11px] font-black uppercase tracking-[0.2em] text-white/20 text-center">Impact (Nodes)</th>
                             <th className="px-10 py-6 text-[11px] font-black uppercase tracking-[0.2em] text-white/20 text-right">Yield (Earned)</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-white/5">
                          {leaderboard.map((user) => (
                            <tr key={user.rank} className="hover:bg-white/[0.015] transition-colors group">
                               <td className="px-10 py-6">
                                  <div className={cn(
                                    "w-10 h-10 mx-auto rounded-xl border-2 flex items-center justify-center text-sm font-black transition-all group-hover:scale-110",
                                    user.rank === 1 ? "bg-amber-500/10 border-amber-500/50 text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]" :
                                    user.rank === 2 ? "bg-slate-300/10 border-slate-300/50 text-slate-300 shadow-[0_0_20px_rgba(203,213,225,0.2)]" :
                                    user.rank === 3 ? "bg-amber-800/20 border-amber-800/50 text-amber-800 shadow-[0_0_15px_rgba(146,64,14,0.1)]" :
                                    "bg-white/5 border-white/10 text-white/40"
                                  )}>
                                     {user.rank}
                                  </div>
                               </td>
                               <td className="px-10 py-6">
                                  <div className="flex items-center gap-5">
                                     <div className="w-12 h-12 rounded-2xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary font-black shadow-neon-sm group-hover:border-primary/50 group-hover:shadow-neon transition-all">
                                        {user.avatar}
                                     </div>
                                     <div className="space-y-1">
                                        <span className="text-[14px] font-black text-white group-hover:text-primary transition-colors block">{user.name}</span>
                                        <div className="flex items-center gap-2">
                                           <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                           <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Active Partner</span>
                                        </div>
                                     </div>
                                  </div>
                               </td>
                               <td className="px-10 py-6 text-center">
                                  <span className="text-[15px] font-black text-white/60 font-mono tracking-tighter">{user.referrals}</span>
                               </td>
                               <td className="px-10 py-6 text-right">
                                  <div className="space-y-1">
                                     <span className="text-lg font-black text-primary">${user.earned.toLocaleString()}</span>
                                     <p className="text-[9px] font-black text-white/10 uppercase tracking-widest">USDT Verified</p>
                                  </div>
                               </td>
                            </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
                 <div className="p-6 bg-white/[0.01] flex justify-center border-t border-white/5">
                    <button className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-primary transition-all flex items-center gap-3 group/full">
                       Access Historical Leaderboard
                       <ArrowUpRight className="w-4 h-4 group-hover/full:translate-x-1 group-hover/full:-translate-y-1 transition-transform" />
                    </button>
                 </div>
              </GlassCard>
           </div>

           {/* Rewards & Milestones */}
           <div className="space-y-8">
              <div className="space-y-1">
                 <h2 className="text-3xl font-black tracking-tighter text-white flex items-center gap-3">
                    <BadgeCheck className="w-8 h-8 text-primary" />
                    Neural <span className="text-white/40 font-light">Rewards</span>
                 </h2>
                 <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Growth Achievement Tracking</p>
              </div>

              <div className="space-y-8">
                 <RewardsTracker />
                 
                 <div className="p-10 rounded-[40px] border border-dashed border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-all flex flex-col items-center text-center space-y-6 group cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                       <Share2 className="w-8 h-8 text-white/10 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="space-y-2">
                       <p className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Ambassador Toolkit</p>
                       <p className="text-[10px] text-white/20 italic font-medium">Locked until Silver Pioneer status</p>
                    </div>
                    <button className="text-[10px] font-black text-primary/40 group-hover:text-primary transition-colors flex items-center gap-2">
                       Preview Marketing Assets
                       <ExternalLink className="w-3 h-3" />
                    </button>
                 </div>
              </div>
           </div>
        </div>

        {/* Neural Sharing Infrastructure */}
        <section className="pt-16">
           <GlassCard className="p-16 border-primary/20 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
              
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="mb-8"
              >
                 <Sparkles className="w-16 h-16 text-primary" />
              </motion.div>
              
              <h3 className="text-4xl font-black text-white tracking-tighter mb-6">Neural <span className="text-primary italic text-stroke-sm">Amplification</span> Toolkit</h3>
              <p className="text-white/40 text-lg max-w-2xl leading-relaxed italic mb-12 font-light">
                 Spread the synthesis across the digital landscape. Utilize our high-conversion sharing modules to attract neural nodes and scale your impact.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8">
                 {[
                   { name: "Twitter", color: "hover:bg-[#1DA1F2] hover:shadow-[0_0_30px_rgba(29,161,242,0.4)]" },
                   { name: "LinkedIn", color: "hover:bg-[#0A66C2] hover:shadow-[0_0_30px_rgba(10,102,194,0.4)]" },
                   { name: "Discord", color: "hover:bg-[#5865F2] hover:shadow-[0_0_30px_rgba(88,101,242,0.4)]" },
                   { name: "Telegram", color: "hover:bg-[#0088CC] hover:shadow-[0_0_30px_rgba(0,136,204,0.4)]" },
                 ].map((social) => (
                   <button 
                     key={social.name}
                     className={cn(
                       "px-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:scale-110 active:scale-95",
                       social.color
                     )}
                   >
                      Share on {social.name}
                   </button>
                 ))}
              </div>
           </GlassCard>
        </section>
      </div>
    </DashboardShell>
  );
}
