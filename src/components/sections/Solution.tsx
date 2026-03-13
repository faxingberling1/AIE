"use client";

import { FadeIn } from "@/components/ui/Animations";
import { GlassCard } from "@/components/ui/GlassCard";
import { Sparkles, Zap, Shield, Bot } from "lucide-react";
import { motion } from "framer-motion";

export function Solution() {
  const solutions = [
    {
      title: "Non-Stop Publishing",
      desc: "Your AI Creator never sleeps. Automated posts for non-stop social presence.",
      icon: Zap,
      stats: "24/7 Active"
    },
    {
      title: "Matches Your Style",
      desc: "Complete control over personality and appearance to match your unique brand.",
      icon: Sparkles,
      stats: "0.1s Fast"
    },
    {
      title: "Save Big",
      desc: "Create once, use everywhere. Reduce content costs by up to 90%.",
      icon: Shield,
      stats: "Huge Value"
    },
  ];

  return (
    <section className="py-40 bg-black relative overflow-hidden">
      {/* Background Tech elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center mb-32">
            <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Our Process</span>
            <h2 className="text-7xl md:text-8xl font-black tracking-tighter mt-4 leading-[1.05]">
              HOW IT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary/50">WORKS</span>
            </h2>
          </div>
        </FadeIn>

        {/* Central Synthesis Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <FadeIn>
            <div className="relative aspect-square group">
              {/* Glow Frame Effect */}
              <div className="absolute -inset-4 bg-primary/20 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-primary/10 rounded-[3rem] border border-primary/20 shadow-[0_0_50px_rgba(0,242,255,0.15)] group-hover:shadow-[0_0_80px_rgba(0,242,255,0.3)] transition-all duration-700" />

              <div className="relative h-full w-full rounded-[3rem] overflow-hidden border border-white/10 glass p-3">
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden">
                  <img
                    src="/influencers/Gemini_Generated_Image_vjfxaivjfxaivjfx.png"
                    alt="AI Creation Process"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  {/* Animated Scanning Line */}
                  <motion.div
                    initial={{ top: "-10%" }}
                    animate={{ top: "110%" }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_#00F2FF] z-20"
                  />

                  {/* Badge */}
                  <div className="absolute bottom-8 left-8 flex items-center gap-3 px-4 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Neural Synthesis Active</span>
                  </div>
                </div>
              </div>

              {/* Decorative Tech Corners */}
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-primary/40 rounded-br-2xl pointer-events-none" />
            </div>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn delay={0.2}>
              <h3 className="text-4xl font-black tracking-tight text-white mb-6">Create Your AI Brand.</h3>
              <p className="text-white/40 text-xl font-light leading-relaxed mb-10">
                Our platform builds <span className="text-white">Consistent AI Creators</span> that maintain the same look and personality across every single post.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-10">
                <div>
                  <span className="text-3xl font-black text-white">90%</span>
                  <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Cheaper Content</p>
                </div>
                <div>
                  <span className="text-3xl font-black text-primary">Instant</span>
                  <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Growth Boost</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {solutions.map((sol, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <GlassCard className="h-full p-12 group border-white/5 hover:border-primary/20 transition-all duration-500 rounded-[2rem] bg-white/[0.01] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-[10px] font-black text-primary/20 uppercase tracking-widest">{sol.stats}</div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 text-primary group-hover:scale-110 transition-transform border border-primary/20 shadow-[0_0_20px_rgba(0,242,255,0.1)]">
                  <sol.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-6 tracking-tight text-white">{sol.title}</h3>
                <p className="text-white/40 leading-relaxed font-light">{sol.desc}</p>
                <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
