"use client";

import { FadeIn } from "@/components/ui/Animations";
import { GlassCard } from "@/components/ui/GlassCard";
import { TrendingDown, Clock, Wallet } from "lucide-react";

export function ProblemStatement() {
  const problems = [
    {
      title: "Exploding Costs",
      desc: "Traditional influencers and content creators demand huge fees and complex contracts.",
      icon: Wallet,
    },
    {
      title: "Brand Inconsistency",
      desc: "Maintaining a consistent brand voice across multiple human creators is nearly impossible.",
      icon: TrendingDown,
    },
    {
      title: "Manual Overload",
      desc: "Creating daily high-quality content 24/7 is exhausting and unscalable for humans.",
      icon: Clock,
    },
  ];

  return (
    <section className="py-24 container mx-auto px-4 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <div className="space-y-6 text-left">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">The Challenge</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Why Traditional Marketing <br />
              <span className="text-white/40 font-light italic">Is Breaking</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              In a digital-first world, businesses are struggling with the scaling limits of human-based content production.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {problems.map((problem, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <GlassCard className="flex items-start gap-6 border-white/5 hover:bg-white/5">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <problem.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{problem.desc}</p>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
