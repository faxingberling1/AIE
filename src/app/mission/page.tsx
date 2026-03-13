"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/Animations";
import { GlassCard } from "@/components/ui/GlassCard";
import { Sparkles, Target, Zap, Globe, Heart, Rocket, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const MISSION_PILLARS = [
  {
    title: "Empowering Creators",
    desc: "We believe AI is a tool for human enhancement, not replacement. Our mission is to put world-class generative tools in the hands of every visionary.",
    icon: Zap,
    color: "from-blue-500/10 to-cyan-500/10",
    glow: "rgba(0, 242, 255, 0.15)"
  },
  {
    title: "Ethical Innovation",
    desc: "We are committed to building AI that respects privacy, diversity, and intellectual property. Trust is our most valuable asset.",
    icon: Shield,
    color: "from-purple-500/10 to-pink-500/10",
    glow: "rgba(168, 85, 247, 0.15)"
  },
  {
    title: "Global Accessibility",
    desc: "High-end AI shouldn't be a privilege. We build for everyone, everywhere, in every language, ensuring a level playing field.",
    icon: Globe,
    color: "from-emerald-500/10 to-teal-500/10",
    glow: "rgba(16, 185, 129, 0.15)"
  }
];

const VISION_PHASES = [
  {
    tag: "Phase 01",
    title: "Synthetic Foundation",
    desc: "Democratizing access to hyper-realistic AI avatars and natural voice synthesis for solo creators."
  },
  {
    tag: " Phase 02",
    title: "Automated Ecosystems",
    desc: "Building self-sustaining influencer brands that manage content, engagement, and monetization autonomously."
  },
  {
    tag: "Phase 03",
    title: "Universal Intelligence",
    desc: "Bridging the gap between human creativity and machine scale to define the next era of digital culture."
  }
];

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30">
      <Navbar />

      <main>
        {/* Cinematic Hero */}
        <section className="relative pt-64 pb-32 overflow-hidden">
          {/* Atmosphere */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] h-[150vw] bg-[radial-gradient(circle,rgba(0,242,255,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10 text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-12">
                <Target className="w-3 h-3" />
                <span>Our Core Purpose</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-12 leading-[0.85]">
                DEFINING THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/20 via-white to-white/20 italic font-light pr-4">SYNTHETIC ERA</span>
              </h1>
              <p className="text-white/40 text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-light">
                We empower every creator to build, lead, and thrive in a world powered by Artificial Intelligence.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* The Pillar Section */}
        <section className="py-32 border-y border-white/5 relative bg-white/[0.01]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {MISSION_PILLARS.map((pillar, i) => (
                <FadeIn key={pillar.title} delay={i * 0.1}>
                  <div className="group relative">
                    <div 
                      className="absolute -inset-4 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ backgroundColor: pillar.glow }}
                    />
                    <GlassCard className="p-10 h-full border-white/5 hover:border-primary/30 transition-all duration-700 rounded-[2.5rem] bg-white/[0.01]">
                      <div className={cn(
                        "w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 text-white/40 group-hover:text-primary group-hover:border-primary/30 transition-all duration-700",
                        "relative overflow-hidden"
                      )}>
                        <pillar.icon className="w-6 h-6 z-10" />
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                      <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">{pillar.title}</h3>
                      <p className="text-white/40 leading-relaxed font-light">{pillar.desc}</p>
                    </GlassCard>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Timeline */}
        <section className="py-48 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <div className="mb-24">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary block mb-6">Future Roadmap</span>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-12">
                    OUR VISION FOR THE <br />NEXT DECADE
                  </h2>
                </div>
              </FadeIn>

              <div className="space-y-32">
                {VISION_PHASES.map((phase, i) => (
                  <FadeIn key={phase.tag} delay={i * 0.1}>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start group">
                      <div className="text-primary font-black text-6xl md:text-8xl opacity-10 group-hover:opacity-100 group-hover:italic transition-all duration-700 leading-none">
                        {phase.tag.split(' ')[1] || phase.tag}
                      </div>
                      <div className="flex-1 pt-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4 block">{phase.tag}</span>
                        <h4 className="text-3xl font-black mb-6 tracking-tight">{phase.title}</h4>
                        <p className="text-white/30 text-xl leading-relaxed font-light group-hover:text-white/60 transition-colors">
                          {phase.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-32 bg-primary/5 border-y border-primary/10 relative">
          <div className="container mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">
                WE ARE BUILDING THE<br />DEMOCRATIZED FUTURE
              </h2>
              <div className="flex flex-wrap justify-center gap-12 text-center">
                <div>
                  <p className="text-5xl font-black text-white mb-2">50K+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">Creators</p>
                </div>
                <div className="w-px h-16 bg-white/10 hidden md:block" />
                <div>
                  <p className="text-5xl font-black text-white mb-2">120MB</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">Content Hours</p>
                </div>
                <div className="w-px h-16 bg-white/10 hidden md:block" />
                <div>
                  <p className="text-5xl font-black text-white mb-2">$0.0</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">Barrier to Entry</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
