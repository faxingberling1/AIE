"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  Video,
  Mic2,
  FileText,
  Palette,
  BarChart3,
  Zap,
  Sparkles,
  Play,
  Volume2,
  MousePointer2,
  BookOpen
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";

const services = [
  {
    id: "influencer-creation",
    title: "AI Influencer Creation",
    description: "Generate hyper-realistic male & female AI influencers for marketing or branding. Customize appearance, style, tone, voice, and personality.",
    icon: UserPlus,
    features: ["Hyper-realistic avatars", "Custom personality & tone", "Ready for social campaigns"],
    credits: "50 credits",
    color: "from-pink-500/10 to-rose-500/10",
    glow: "rgba(244, 63, 94, 0.15)"
  },
  {
    id: "video-content",
    title: "AI Video & Content Generation",
    description: "Automatically generate short videos, product demos, ads, and tutorials using AI avatars with natural voiceovers.",
    icon: Video,
    features: ["Automated product demos", "Natural AI voiceovers", "Branding overlays"],
    credits: "20 credits/min",
    color: "from-blue-500/10 to-cyan-500/10",
    glow: "rgba(6, 182, 212, 0.15)"
  },
  {
    id: "voice-audio",
    title: "AI Voice & Audio Generation",
    description: "Generate human-like AI voices for influencer videos. Choose tone, language, accent, and style for automated campaigns.",
    icon: Mic2,
    features: ["Multiple accents & styles", "Natural voice modulation", "Seamless integration"],
    credits: "5 credits/100 words",
    color: "from-purple-500/10 to-indigo-500/10",
    glow: "rgba(99, 102, 241, 0.15)"
  },
  {
    id: "content-automation",
    title: "AI Content Automation",
    description: "Auto-generate social media posts, captions, blog content, and ad copy optimized for engagement and brand consistency.",
    icon: FileText,
    features: ["Auto-captioning", "Brand-consistent copy", "Engagement optimized"],
    credits: "2 credits/post",
    color: "from-amber-500/10 to-orange-500/10",
    glow: "rgba(245, 158, 11, 0.15)"
  },
  {
    id: "brand-persona",
    title: "AI Brand & Persona Designer",
    description: "Build a consistent AI brand persona. Define personality traits, tone, visual style, and messaging across all campaigns.",
    icon: Palette,
    features: ["Consistent brand identity", "Visual style definition", "Cross-platform persona"],
    credits: "100 credits",
    color: "from-emerald-500/10 to-teal-500/10",
    glow: "rgba(16, 185, 129, 0.15)"
  },
  {
    id: "campaign-simulator",
    title: "AI Marketing Campaign Simulator",
    description: "Test campaigns using AI-generated influencers before going live. Analytics preview for engagement, reach, and predicted ROI.",
    icon: BarChart3,
    features: ["Predictive analytics", "A/B testing avatars", "ROI forecasting"],
    credits: "30 credits/sim",
    color: "from-violet-500/10 to-fuchsia-500/10",
    glow: "rgba(139, 92, 246, 0.15)"
  },
  {
    id: "credit-system",
    title: "AI Credit System Integration",
    description: "All premium services are powered by AI credits. Transparent cost per service with real-time usage monitoring in your dashboard.",
    icon: Zap,
    features: ["Transparent cost structure", "Real-time monitoring", "Easy credit top-up"],
    credits: "Platform Foundation",
    color: "from-primary/10 to-cyan-400/10",
    glow: "rgba(0, 242, 255, 0.15)"
  }
];

export function AIServices() {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="services">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8">
            <Sparkles className="w-3 h-3" />
            <span>Premium AI Services</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            EMPOWER YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/20 via-white to-white/20 italic font-light pr-4">DIGITAL BRAND</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-2xl leading-relaxed font-light">
            From hyper-realistic AI avatars to automated influencer campaigns,
            AIE offers advanced AI services designed to supercharge your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-full"
            >
              {/* Dynamic Glow Background */}
              <div 
                className="absolute -inset-4 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"
                style={{ backgroundColor: service.glow }}
              />

              <GlassCard className="h-full p-10 border-white/5 hover:border-primary/30 transition-all duration-700 relative overflow-hidden bg-white/[0.01] rounded-[2.5rem]">
                {/* Visual Accent */}
                <div className={cn(
                  "absolute top-0 right-0 w-48 h-48 bg-gradient-to-br blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000",
                  service.color
                )} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-700 shadow-2xl relative overflow-hidden">
                    <service.icon className="w-8 h-8 text-white/40 group-hover:text-primary transition-colors duration-700 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  <h3 className="text-3xl font-black tracking-tight mb-6 group-hover:text-primary transition-colors duration-500 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-white/40 mb-10 leading-relaxed text-base font-light">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-12 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs font-bold text-white/30 group-hover:text-white/50 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,242,255,1)]" />
                        <span className="tracking-wide uppercase font-black text-[9px]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-8 border-t border-white/5 mt-auto">
                    <div className="flex flex-col gap-1">
                      <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/20">Operational Cost</span>
                      <div className="flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5 text-primary shadow-neon" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                          {service.credits}
                        </span>
                      </div>
                    </div>

                    <button className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-white/10 glass text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 group/btn">
                      Live Demo <Play className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 fill-white/20 group-hover/btn:fill-primary text-transparent group-hover/btn:text-primary" />
                    </button>
                  </div>
                </div>

                {/* Noise Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-20" />
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <PremiumButton className="px-12 py-6 text-xl rounded-full">
            Generate Your AI Influencer
          </PremiumButton>
        </div>
      </div>
    </section>
  );
}
