"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Gift, Star, Zap, Users, CheckCircle2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const rewards = [
  {
    id: 1,
    title: "Synthesizer Pro",
    requirement: "5 Active Referrals",
    reward: "500 AI Credits",
    icon: Zap,
    progress: 80,
    completed: false
  },
  {
    id: 2,
    title: "Neural Ambassador",
    requirement: "10 Active Referrals",
    reward: "Premium Badge + Swag Box",
    icon: Star,
    progress: 40,
    completed: false
  },
  {
    id: 3,
    title: "Platform Architect",
    requirement: "25 Active Referrals",
    reward: "Lifetime Pro Access",
    icon: Users,
    progress: 15,
    completed: false
  },
  {
    id: 4,
    title: "First Synthesis",
    requirement: "1 Referral",
    reward: "100 AI Credits",
    icon: Gift,
    progress: 100,
    completed: true
  }
];

export function RewardsTracker() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Neural Reward Milestones</h3>
        <span className="text-[10px] font-black text-primary uppercase tracking-widest">3 Rewards Pending</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rewards.map((reward, i) => (
          <motion.div
            key={reward.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className={cn(
              "p-6 border-white/5 relative overflow-hidden group hover:border-primary/20 transition-all",
              reward.completed ? "bg-primary/[0.02]" : "bg-white/[0.01]"
            )}>
              <div className="flex items-start justify-between mb-6">
                 <div className={cn(
                   "w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-neon-sm",
                   reward.completed ? "bg-primary/20 text-primary" : "bg-white/5 text-white/20"
                 )}>
                    <reward.icon className="w-6 h-6" />
                 </div>
                 {reward.completed ? (
                   <CheckCircle2 className="w-5 h-5 text-green-400" />
                 ) : (
                   <Lock className="w-4 h-4 text-white/10" />
                 )}
              </div>

              <div className="space-y-1">
                 <h4 className="text-sm font-black text-white">{reward.title}</h4>
                 <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{reward.requirement}</p>
              </div>

              <div className="mt-6 space-y-3">
                 <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest">
                    <span className="text-white/20">Benefit: <span className="text-white/60">{reward.reward}</span></span>
                    <span className={reward.completed ? "text-primary" : "text-white/40"}>{reward.progress}%</span>
                 </div>
                 <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${reward.progress}%` }}
                      transition={{ duration: 1.5, delay: i * 0.2 }}
                      className={cn(
                        "h-full shadow-neon-sm",
                        reward.completed ? "bg-primary" : "bg-white/20"
                      )}
                    />
                 </div>
              </div>
              
              {reward.progress === 100 && !reward.completed && (
                <button className="w-full mt-6 py-3 rounded-xl bg-primary text-black text-[10px] font-black uppercase tracking-widest hover:shadow-neon transition-all">
                   Claim Reward
                </button>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
