"use client";

import { FadeIn } from "@/components/ui/Animations";
import { GlassCard } from "@/components/ui/GlassCard";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Marcus Vane",
      role: "Creative Director",
      text: "AIE transformed how we handle brand ambassadors. We created our first AI persona in a week, and the results have been staggering.",
      avatar: "M",
    },
    {
      name: "Sarah Chen",
      role: "Marketing Head",
      text: "The credit system is incredibly fair and powerful. Scaling our content production has never been this cost-effective.",
      avatar: "S",
    },
    {
      name: "Alex Rivera",
      role: "Independent Creator",
      text: "As a solo creator, AIE gave me the tools to build a virtual agency that works while I sleep. A literal game-changer.",
      avatar: "A",
    },
  ];

  return (
    <section className="py-24 container mx-auto px-4">
      <FadeIn>
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">What Creators Say</h2>
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <GlassCard className="relative pt-12">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
              <p className="text-white/70 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full glass border border-primary/20 flex items-center justify-center text-primary font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </GlassCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
