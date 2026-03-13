"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/Animations";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const influences = [
  {
    name: "Aria",
    role: "Fashion AI",
    image: "/influencers/Gemini_Generated_Image_3uonyc3uonyc3uon.png",
    color: "from-pink-500/40",
    tag: "Trendsetter",
    useCase: "Digital Brand Ambassador for High-End Fashion",
    grid: "lg:col-span-2 lg:row-span-2",
    position: "object-center"
  },
  {
    name: "Leo",
    role: "Tech Visionary",
    image: "/influencers/Gemini_Generated_Image_bgwoo4bgwoo4bgwo.png",
    color: "from-blue-500/40",
    tag: "Innovator",
    useCase: "Virtual Spokesperson for AI Startups",
    grid: "lg:col-span-1 lg:row-span-1",
    position: "object-center"
  },
  {
    name: "Maya",
    role: "Fitness Coach",
    image: "/influencers/Gemini_Generated_Image_m9r228m9r228m9r2.png",
    color: "from-green-500/40",
    tag: "Coach",
    useCase: "24/7 Virtual Trainer & Wellness Guide",
    grid: "lg:col-span-1 lg:row-span-2",
    position: "object-top" // Use object-top to ensure face/top body is visible in tall card
  },
  {
    name: "Kai",
    role: "Digital Artist",
    image: "/influencers/Gemini_Generated_Image_x1qt09x1qt09x1qt.png",
    color: "from-purple-500/40",
    tag: "Creator",
    useCase: "Visual Identity for Social Media & Brand Projects",
    grid: "lg:col-span-1 lg:row-span-1",
    position: "object-center"
  },
];

export function Showcase() {
  return (
    <section className="py-40 container mx-auto px-4 relative overflow-hidden bg-black">
      {/* Decorative Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-[radial-gradient(circle,rgba(0,242,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <FadeIn>
        <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-12 border-b border-white/5 pb-20">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Meet the Future
            </div>
            <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              THESE ARE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/20 via-white to-white/20 italic font-light pr-4">AI TALENTS</span>
            </h2>
            <p className="text-white/40 text-2xl leading-relaxed font-light max-w-2xl">
              Beautifully crafted for realism. Our AI characters are ready to represent your brand or scale your content 24/7.
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="text-right">
              <span className="text-4xl font-black text-white/90">04</span>
              <span className="text-sm font-bold text-white/20 uppercase tracking-widest block">Core Characters</span>
            </div>
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent to-primary/50" />
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {influences.map((inf, i) => (
          <FadeIn key={inf.name} delay={i * 0.15}>
            <GlassCard className="h-[600px] relative group p-0 overflow-hidden border-white/5 hover:border-primary/50 transition-all duration-700 cursor-pointer rounded-[2.5rem] bg-white/[0.01]">
              {/* Image Container with Zoom effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 z-10",
                  "group-hover:via-primary/5 group-hover:to-black transition-all duration-700"
                )} />

                {/* Placeholder for Influencer Image */}
                <div className={cn(
                  "w-full h-full bg-zinc-900 group-hover:scale-110 transition-transform duration-[2s] ease-out flex items-center justify-center border-b border-white/5",
                  `bg-gradient-to-br ${inf.color}`
                )}>
                  {inf.image ? (
                    <img
                      src={inf.image}
                      alt={inf.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  ) : (
                    <Sparkles className="w-12 h-12 text-white/5 animate-pulse" />
                  )}
                </div>
              </div>

              {/* Noise Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-20" />

              <div className="absolute inset-0 p-10 flex flex-col justify-end z-30">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-[9px] font-black uppercase tracking-widest border border-white/10 backdrop-blur-md">
                      {inf.tag}
                    </span>
                    <div className="h-[1px] flex-grow bg-white/10" />
                  </div>

                  <div>
                    <span className="text-[10px] font-black text-primary/60 uppercase tracking-[0.3em] block mb-2">
                      {inf.role}
                    </span>
                    <h3 className="text-5xl font-black text-white tracking-tighter group-hover:text-primary transition-colors duration-500 leading-tight">
                      {inf.name}
                    </h3>
                  </div>

                  <div className="h-0 group-hover:h-auto group-hover:max-h-32 overflow-hidden transition-all duration-700 opacity-0 group-hover:opacity-100">
                    <p className="text-sm text-white/40 leading-relaxed font-light mt-4">
                      {inf.useCase}
                    </p>
                    <div className="mt-6 flex items-center gap-3 text-primary font-black text-[10px] uppercase tracking-[0.2em]">
                      View Profile <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Identity Token Hover Effect */}
              <div className="absolute top-10 right-10 w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-40 scale-50 group-hover:scale-100">
                <div className="w-2 h-2 rounded-full bg-primary shadow-neon" />
              </div>
            </GlassCard>
          </FadeIn>
        ))}
      </div>

    </section>
  );
}
