"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  BookOpen, 
  Users, 
  CreditCard, 
  CheckCircle2, 
  Zap,
  PlayCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const activities = [
  {
    id: 1,
    type: "course",
    title: "AI Modeling Part 2 Completed",
    desc: "You've mastered neural texturing fundamentals.",
    time: "15m ago",
    icon: CheckCircle2,
    color: "text-green-400",
    bgColor: "bg-green-400/10"
  },
  {
    id: 2,
    type: "ai",
    title: "Influencer 'Aria' Generated",
    desc: "High-fidelity campaign assets are ready.",
    time: "2h ago",
    icon: Bot,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    id: 3,
    type: "referral",
    title: "New Affiliate Join",
    desc: "User 'alex_m' joined via your link.",
    time: "5h ago",
    icon: Users,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10"
  },
  {
    id: 4,
    type: "wallet",
    title: "Credits Topped Up",
    desc: "+500 AI credits added to wallet.",
    time: "Yesterday",
    icon: Zap,
    color: "text-amber-400",
    bgColor: "bg-amber-400/10"
  },
];

export function ActivityFeed() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40">Recent Activity</h3>
        <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">View All</button>
      </div>

      <div className="space-y-3">
        {activities.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group glass p-4 rounded-2xl border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all flex items-center gap-4 cursor-pointer"
          >
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/5 shadow-inner", item.bgColor, item.color)}>
              <item.icon className="w-5 h-5" />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-bold text-white group-hover:text-primary transition-colors truncate">
                {item.title}
              </p>
              <p className="text-[11px] text-white/30 truncate mt-0.5">{item.desc}</p>
            </div>

            <div className="text-right shrink-0">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/10 group-hover:text-white/20 transition-colors">
                {item.time}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
