"use client";

import { motion } from "framer-motion";
import { 
  Cloud, 
  Dribbble, 
  Figma, 
  Github, 
  Instagram, 
  Twitter, 
  Zap,
  Cpu,
  Globe,
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";

const brands = [
  { name: "Synthetic", icon: Cpu },
  { name: "NeuralStream", icon: Zap },
  { name: "GridCore", icon: Layers },
  { name: "AtlasAI", icon: Globe },
  { name: "CloudScale", icon: Cloud },
  { name: "VisualFlow", icon: Figma },
  { name: "OpenBuild", icon: Github },
  { name: "SocialGraph", icon: Instagram },
  { name: "EchoNetwork", icon: Twitter },
  { name: "DesignLabs", icon: Dribbble },
];

export function ClientTicker() {
  // Triple the brands to ensure seamless looping
  const tickerBrands = [...brands, ...brands, ...brands];

  return (
    <div className="relative py-12 bg-black overflow-hidden border-y border-white/5">
      {/* Side Fades for smooth entry/exit */}
      <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-black to-transparent z-10" />

      <div className="container mx-auto px-4 mb-4">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 text-center">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="flex overflow-hidden">
        <motion.div 
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: [0, -1920] }} // Adjust based on content width
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {tickerBrands.map((brand, i) => (
            <div 
              key={`${brand.name}-${i}`} 
              className="flex items-center gap-3 group px-4 py-2 hover:bg-white/[0.02] rounded-xl transition-all duration-500"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/20 group-hover:text-primary group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500">
                <brand.icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-black tracking-tight text-white/20 group-hover:text-white transition-colors duration-500 uppercase italic">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Sub-line glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
}
