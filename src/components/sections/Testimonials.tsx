"use client";

import { FadeIn } from "@/components/ui/Animations";
import { motion } from "framer-motion";
import { Star, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const testimonials = [
    { quote: "AIE didn't just give us tools, they gave us a competitive edge. The ROI was visible within the first month.", author: "Sarah Chen", role: "CMO @ TechFlow", stars: 5 },
    { quote: "The Custom AI Agent add-on is a game changer. It's like having a 24/7 expert employee that never sleeps.", author: "Marcus Thorne", role: "Founder, Alpha Media", stars: 5 },
    { quote: "Launch times for our campaigns dropped by 70%. The realism of the AI influencers is unmatched.", author: "Elena Rodriguez", role: "Creative Director", stars: 4 },
    { quote: "Seamless integration with our existing workflows. The business plan paid for itself in two weeks.", author: "David Park", role: "E-comm Owner", stars: 5 },
    { quote: "The community and support are top-notch. Best investment we've made this year for our social strategy.", author: "Jordan Miles", role: "Digital Marketer", stars: 5 },
    // Duplicate for seamless loop
    { quote: "AIE didn't just give us tools, they gave us a competitive edge. The ROI was visible within the first month.", author: "Sarah Chen", role: "CMO @ TechFlow", stars: 5 },
    { quote: "The Custom AI Agent add-on is a game changer. It's like having a 24/7 expert employee that never sleeps.", author: "Marcus Thorne", role: "Founder, Alpha Media", stars: 5 },
    { quote: "Launch times for our campaigns dropped by 70%. The realism of the AI influencers is unmatched.", author: "Elena Rodriguez", role: "Creative Director", stars: 4 },
  ];

  return (
    <section className="py-24 container mx-auto px-4 relative overflow-hidden">
      <FadeIn>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side: Impact Image */}
          <div className="lg:w-1/2 relative group">
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 glass p-3">
              <img 
                src="/influencers/Business Coach.png" 
                alt="Success Story" 
                className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-2 block">Success Stories</span>
                <h4 className="text-2xl font-black text-white tracking-tight leading-tight">
                  JOIN THE NEW ERA OF <br /> <span className="italic">DIGITAL CONTENT.</span>
                </h4>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-primary/20 rounded-[3.5rem] blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          </div>

          {/* Right Side: Scrolling Testimonials */}
          <div className="lg:w-1/2 h-[600px] relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: "-50%" }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="space-y-6 py-10"
            >
              {testimonials.map((t, idx) => (
                <div key={idx} className="glass p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={cn("w-3 h-3", i < t.stars ? "text-primary fill-primary/20" : "text-white/10")} />
                    ))}
                  </div>
                  <p className="text-lg font-light text-white/80 leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-white/10 flex items-center justify-center text-primary text-[10px] font-black">
                      {t.author[0]}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white tracking-tight">{t.author}</p>
                      <p className="text-[9px] uppercase font-black tracking-[0.2em] text-primary/60">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
