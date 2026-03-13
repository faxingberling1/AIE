"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { 
  Bot, 
  BookOpen, 
  CreditCard, 
  Users, 
  TrendingUp, 
  PlayCircle,
  Calendar,
  Zap,
  ArrowUpRight,
  TrendingDown,
  Sparkles,
  Award
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { OverviewCharts } from "@/components/dashboard/OverviewCharts";
import { AchievementBadges } from "@/components/dashboard/AchievementBadges";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { data: session } = useSession();
  const [greeting, setGreeting] = useState("Welcome back");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  const summaryCards = [
    {
      title: "Current Plan",
      value: "Creator Pro",
      sub: "Next billing: Oct 24",
      icon: TrendingUp,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      action: "Upgrade",
      progress: 0,
      detail: "Annual Plan"
    },
    {
      title: "AI Credits",
      value: "740 / 1,000",
      sub: "74% remaining",
      icon: Zap,
      color: "text-primary",
      bgColor: "bg-primary/10",
      action: "Refill",
      progress: 74,
      detail: "Refills in 12 days"
    },
    {
      title: "Active Courses",
      value: "3 Ongoing",
      sub: "2 Modules left today",
      icon: BookOpen,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      action: "Resume",
      progress: 65,
      detail: "Next: AI Viral Hooks"
    },
    {
      title: "Referral Stats",
      value: "$142.50 Earned",
      sub: "12 Total joins",
      icon: Users,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      action: "Share",
      progress: 45,
      detail: "Top 5% Referrer"
    }
  ];

  return (
    <DashboardShell>
      <div className="space-y-12">
        {/* Welcome Header */}
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary animate-pulse">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Dashboard Overview</span>
                <h1 className="text-4xl font-black tracking-tighter text-white">
                  {greeting}, <span className="text-primary">{session?.user?.name?.split(' ')[0] || "Creator"}!</span>
                </h1>
              </div>
            </div>
            <p className="text-white/40 max-w-lg leading-relaxed italic">
              "The best way to predict the future is to create it." — Your AI systems are active and performing at <span className="text-primary font-bold">98.2% efficiency</span>.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-6 py-3 rounded-2xl bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-primary transition-all shadow-neon-sm">
              Start New Course
            </button>
            <button className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all">
              Generate AI
            </button>
          </div>
        </section>

        {/* Summary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-6 h-full flex flex-col group cursor-pointer hover:border-primary/30 transition-all border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center border border-white/5", card.bgColor, card.color)}>
                    <card.icon className="w-5 h-5" />
                  </div>
                  <button className="p-2 rounded-lg bg-white/5 text-white/20 group-hover:text-primary transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-1">{card.title}</h3>
                <p className="text-xl font-black tracking-tight text-white mb-1">{card.value}</p>
                <p className="text-[11px] font-medium text-white/40 mb-6">{card.sub}</p>

                <div className="mt-auto space-y-4">
                  {card.progress > 0 && (
                    <div className="space-y-2">
                       <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest">
                          <span className="text-white/20">{card.detail}</span>
                          <span className={card.color}>{card.progress}%</span>
                       </div>
                       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${card.progress}%` }}
                            className={cn("h-full shadow-neon-sm", card.color.replace('text', 'bg'))} 
                          />
                       </div>
                    </div>
                  )}
                  <button className={cn(
                    "w-full py-2.5 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all",
                    card.progress > 0 
                      ? "bg-white/5 border-white/5 text-white/40 hover:text-white hover:border-white/20" 
                      : "bg-primary border-primary text-black shadow-neon-sm"
                  )}>
                    {card.action}
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Gamification / Achievements */}
        <section className="space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-white/40 flex items-center gap-2">
                 <Award className="w-4 h-4 text-primary" />
                 Neural Achievements
              </h2>
              <button className="text-[9px] font-black text-primary uppercase tracking-[0.2em] hover:text-white transition-colors">View All Badges</button>
           </div>
           <AchievementBadges />
        </section>

        {/* Analytics & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <OverviewCharts />
          </div>
          <div className="lg:col-span-1">
            <GlassCard className="p-8 h-full border-white/5 bg-white/[0.01]">
              <ActivityFeed />
            </GlassCard>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
