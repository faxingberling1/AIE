"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/Animations";
import { GlassCard } from "@/components/ui/GlassCard";
import { Sparkles, ArrowRight, Timer, Bell, MoveRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CareersPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 selection:text-black overflow-hidden">
      <Navbar />

      <main className="relative flex flex-col items-center justify-center pt-48 pb-32">
        {/* Background Atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] bg-[radial-gradient(circle,rgba(0,242,255,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.5em] mb-12 shadow-[0_0_20px_rgba(0,242,255,0.1)]">
              <Timer className="w-3.5 h-3.5" />
              <span>Expansion in Progress</span>
            </div>

            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter mb-8 leading-[0.8] relative">
              JOIN THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/20 via-white to-white/20 italic font-light pr-4">NUCLEUS</span>
              {/* Decorative Pulsar */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none hidden md:block"
              />
            </h1>

            <p className="text-white/40 text-2xl md:text-3xl max-w-2xl mx-auto leading-relaxed font-light mb-16">
              Our scouting phase is currently closed as we integrate our first cohort of AI researchers and creators.
            </p>

            <div className="max-w-xl mx-auto mb-24">
              <GlassCard className="p-8 md:p-12 border-white/5 bg-white/[0.01] rounded-[3rem] relative overflow-hidden group">
                {/* Internal Glow */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                
                <h3 className="text-xl font-black mb-6 tracking-widest uppercase italic">Get notified when we scale</h3>
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-4 py-4 text-primary"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <Send className="w-6 h-6" />
                    </div>
                    <span className="font-bold tracking-widest uppercase text-xs">Transmission Received</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ENTER FREQUENCY (EMAIL)"
                      className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-xs font-bold tracking-widest uppercase focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                      required
                    />
                    <button 
                      type="submit"
                      className="px-8 py-4 rounded-2xl bg-white text-black font-black text-[10px] uppercase tracking-[0.3em] hover:bg-primary transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] whitespace-nowrap group-hover:scale-[1.02]"
                    >
                      Alert Me
                    </button>
                  </form>
                )}
              </GlassCard>
            </div>

            {/* Values / Teaser */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <div className="flex flex-col items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">01 // RESEARCH</span>
                <p className="text-xs font-light text-white/60">Exploring the boundaries of synthetic consciousness.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">02 // SCALE</span>
                <p className="text-xs font-light text-white/60">Automating the world&apos;s most influential brands.</p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">03 // UNITY</span>
                <p className="text-xs font-light text-white/60">Synchronizing human vision with machine scale.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>

      <Footer />
    </div>
  );
}
