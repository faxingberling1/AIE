"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Zap, Info, TrendingDown, Layers, Video, Mic } from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

const services = [
  { id: "influence", name: "AI Influencer", icon: Layers, rate: 25, unit: "per synthesis" },
  { id: "video", name: "Video Gen", icon: Video, rate: 40, unit: "per minute" },
  { id: "voice", name: "Voice Clone", icon: Mic, rate: 15, unit: "per model" },
];

export function CreditSimulator() {
  const [activeService, setActiveService] = useState(services[0]);
  const [volume, setVolume] = useState(5);

  const estimatedCost = useMemo(() => {
    return activeService.rate * volume;
  }, [activeService, volume]);

  return (
    <GlassCard className="p-10 border-primary/10 bg-gradient-to-br from-primary/[0.01] to-transparent relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="flex flex-col xl:flex-row items-center gap-12 relative z-10">
        <div className="flex-grow space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[9px] font-black text-primary uppercase tracking-[0.2em]">
            <Zap className="w-3 h-3" />
            Neural Capacity Simulator
          </div>
          <h3 className="text-3xl font-black text-white tracking-tighter">Plan Your <span className="text-primary italic text-stroke-sm">Synthesis</span></h3>
          <p className="text-white/40 text-sm max-w-lg leading-relaxed font-medium italic">
            Estimate credit requirements for your next major campaign. Calculate costs for rendering, cloning, and neural processing in real-time.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-2">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveService(s)}
                className={cn(
                  "flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all duration-500 group",
                  activeService.id === s.id 
                    ? "bg-primary border-primary text-black shadow-neon-sm" 
                    : "bg-white/5 border-white/5 text-white/40 hover:bg-white/10"
                )}
              >
                <s.icon className={cn("w-4 h-4", activeService.id === s.id ? "text-black" : "text-primary")} />
                <span className="text-[11px] font-black uppercase tracking-widest">{s.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full xl:w-[450px] space-y-8 bg-black/40 backdrop-blur-xl p-8 rounded-[32px] border border-white/5 shadow-2xl">
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Production Volume</label>
              <span className="text-2xl font-black text-primary italic">{volume} <span className="text-[10px] uppercase tracking-widest text-white/20">Units</span></span>
            </div>
            
            <div className="relative h-12 flex items-center">
              <input 
                type="range" 
                min="1" 
                max="50" 
                value={volume}
                onChange={(e) => setVolume(parseInt(e.target.value))}
                className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-primary hover:accent-primary/80 transition-all"
              />
              <div 
                className="absolute h-1.5 bg-primary rounded-full pointer-events-none shadow-neon-sm" 
                style={{ width: `${(volume / 50) * 100}%` }}
              />
            </div>
            
            <div className="flex justify-between text-[9px] font-black text-white/10 uppercase tracking-widest">
              <span>Standard Dev</span>
              <span>Enterprise Scale</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-between group/result hover:border-primary/20 transition-all">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Projected Synthesis Cost</p>
              <p className="text-3xl font-black text-white tracking-tighter group-hover:text-primary transition-colors">
                {estimatedCost.toFixed(2)} <span className="text-xs text-primary/40">CR</span>
              </p>
            </div>
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
               <Layers className="w-10 h-10 text-primary/10 group-hover:text-primary/40 transition-all" />
            </motion.div>
          </div>

          <div className="flex items-center gap-3 text-[9px] font-black text-white/20 uppercase tracking-[0.2em] justify-center italic bg-white/[0.01] py-2 rounded-lg">
            <Info className="w-3 h-3 text-primary animate-pulse" />
            Rate: {activeService.rate} Credits {activeService.unit}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
