"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Award, Target, Trophy, Star, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MILESTONES = [
  { id: 1, title: "Syllabus Pioneer", description: "Complete the first module of any course.", icon: Target, completed: true, points: 100 },
  { id: 2, title: "Deep Synthesis", description: "Maintain a 100% completion rate for 3 consecutive lessons.", icon: Zap, completed: true, points: 250 },
  { id: 3, title: "Master Creator", description: "Pass the AI Influencer Certification exam with 95%+ score.", icon: Trophy, completed: false, points: 1000 },
  { id: 4, title: "Social Architect", description: "Complete the Social Media Automation track.", icon: Award, completed: false, points: 500 },
];

export function LearningMilestones() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">Learning Milestones</h2>
          <p className="text-white/40 text-sm">Track your progress and unlock premium creator badges.</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black text-primary shadow-neon">1,350</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Total XP Earned</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MILESTONES.map((m, i) => (
          <GlassCard 
            key={m.id} 
            className={cn(
              "p-6 border-white/5 relative overflow-hidden group transition-all duration-500",
              m.completed ? "bg-primary/5 border-primary/20" : "bg-white/[0.01] hover:bg-white/[0.03]"
            )}
          >
            {m.completed && (
              <div className="absolute top-0 right-0 p-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
            )}
            
            <div className="flex gap-5 items-start">
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110",
                m.completed ? "glass border-primary/40 text-primary shadow-neon" : "glass border-white/10 text-white/10"
              )}>
                <m.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className={cn("font-bold mb-1", m.completed ? "text-white" : "text-white/40")}>{m.title}</h3>
                <p className="text-xs text-white/30 leading-relaxed mb-4">{m.description}</p>
                <div className="flex items-center gap-2">
                   <div className={cn("text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded", m.completed ? "bg-primary/10 text-primary" : "bg-white/5 text-white/20")}>
                    +{m.points} XP
                   </div>
                   {!m.completed && (
                     <div className="flex-grow bg-white/5 h-0.5 rounded-full overflow-hidden">
                        <div className="bg-white/10 h-full w-1/3" />
                     </div>
                   )}
                </div>
              </div>
            </div>

            {/* Background Glow */}
            {m.completed && (
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 blur-[80px] pointer-events-none" />
            )}
          </GlassCard>
        ))}
      </div>

      <div className="glass p-6 rounded-3xl border-dashed border-white/10 flex items-center justify-between">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
               <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
               <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Next Achievement</p>
               <h4 className="font-bold text-sm">The 24-Hour Grind (50% Complete)</h4>
            </div>
         </div>
         <div className="text-xs font-mono text-white/20">12 / 24 Hours</div>
      </div>
    </div>
  );
}
