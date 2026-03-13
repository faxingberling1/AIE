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
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter mt-4 leading-[0.85]">
              HOW IT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary/50">WORKS</span>
            </h2>
          </div>
        </FadeIn>

        {/* Central Synthesis Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
           <FadeIn>
              <div className="relative aspect-square glass rounded-[3rem] border-white/5 p-12 overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                 
                 {/* Mock UI */}
                 <div className="relative h-full border border-white/10 rounded-2xl flex items-center justify-center bg-black/40 backdrop-blur-xl">
                    <div className="flex flex-col gap-8 w-full max-w-xs scale-90 md:scale-100">
                       {[1,2,3].map((i) => (
                          <div key={i} className="space-y-3">
                             <div className="flex justify-between text-[10px] font-black tracking-widest text-primary/40 uppercase">
                                <span>Step 0{i} Creation</span>
                                <span>{95 + i}%</span>
                             </div>
                             <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${95 + i}%` }}
                                  transition={{ duration: 2, delay: i * 0.2 }}
                                  className="h-full bg-gradient-to-r from-primary to-blue-500 shadow-neon"
                                />
                             </div>
                          </div>
                       ))}
                       <div className="mt-8 flex justify-center">
                          <div className="w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center relative">
                             <div className="absolute inset-0 border-2 border-primary rounded-full animate-ping opacity-20" />
                             <Bot className="w-10 h-10 text-primary animate-pulse" />
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Decorative Info */}
                 <div className="absolute bottom-6 right-8 text-[8px] font-mono text-white/10 text-right leading-tight uppercase">
                    Core_Active <br />
                    Identity_Linked <br />
                    System_Ready
                 </div>
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
