"use client";

import { motion } from "framer-motion";
import { Award, Zap, Target, Star, Trophy, Rocket, ShieldCheck, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const ACHIEVEMENTS = [
  { id: 1, name: "Neural Pioneer", icon: Zap, color: "text-primary", bg: "bg-primary/10", tier: "Bronze", progress: 100 },
  { id: 2, name: "Master Synthesizer", icon: Target, color: "text-purple-400", bg: "bg-purple-400/10", tier: "Silver", progress: 65 },
  { id: 3, name: "Platform Architect", icon: ShieldCheck, color: "text-green-400", bg: "bg-green-400/10", tier: "Core", progress: 80 },
  { id: 4, name: "Elite Creator", icon: Trophy, color: "text-amber-400", bg: "bg-amber-400/10", tier: "Gold", progress: 30 },
];

export function AchievementBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {ACHIEVEMENTS.map((ach, i) => (
        <motion.div
          key={ach.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="glass border border-white/5 rounded-3xl p-6 relative group overflow-hidden hover:border-primary/20 transition-all cursor-default"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5 overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: `${ach.progress}%` }}
               transition={{ duration: 1.5, delay: i * 0.2 }}
               className={cn("h-full", ach.color.replace("text-", "bg-"))}
             />
          </div>

          <div className="flex flex-col items-center text-center space-y-4 pt-2">
             <div className={cn(
               "w-14 h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-neon-sm",
               ach.bg, ach.color
             )}>
                <ach.icon className="w-7 h-7" />
             </div>
             <div>
                <h4 className="text-xs font-black text-white tracking-tight">{ach.name}</h4>
                <p className="text-[9px] font-black uppercase tracking-widest text-white/20 mt-1">{ach.tier} Identity</p>
             </div>
          </div>
          
          {ach.progress === 100 && (
            <div className="absolute top-2 right-2">
               <Star className="w-3 h-3 text-primary animate-pulse" fill="currentColor" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
