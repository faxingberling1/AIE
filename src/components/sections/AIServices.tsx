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
  MousePointer2
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
    color: "from-pink-500/20 to-rose-500/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.3)]"
  },
  {
    id: "video-content",
    title: "AI Video & Content Generation",
    description: "Automatically generate short videos, product demos, ads, and tutorials using AI avatars with natural voiceovers.",
    icon: Video,
    features: ["Automated product demos", "Natural AI voiceovers", "Branding overlays"],
    credits: "20 credits/min",
    color: "from-blue-500/20 to-cyan-500/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
  },
  {
    id: "voice-audio",
    title: "AI Voice & Audio Generation",
    description: "Generate human-like AI voices for influencer videos. Choose tone, language, accent, and style for automated campaigns.",
    icon: Mic2,
    features: ["Multiple accents & styles", "Natural voice modulation", "Seamless integration"],
    credits: "5 credits/100 words",
    color: "from-purple-500/20 to-indigo-500/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]"
  },
  {
    id: "content-automation",
    title: "AI Content Automation",
    description: "Auto-generate social media posts, captions, blog content, and ad copy optimized for engagement and brand consistency.",
    icon: FileText,
    features: ["Auto-captioning", "Brand-consistent copy", "Engagement optimized"],
    credits: "2 credits/post",
    color: "from-amber-500/20 to-orange-500/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
  },
  {
    id: "brand-persona",
    title: "AI Brand & Persona Designer",
    description: "Build a consistent AI brand persona. Define personality traits, tone, visual style, and messaging across all campaigns.",
    icon: Palette,
    features: ["Consistent brand identity", "Visual style definition", "Cross-platform persona"],
    credits: "100 credits",
    color: "from-emerald-500/20 to-teal-500/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
  },
  {
    id: "campaign-simulator",
    title: "AI Marketing Campaign Simulator",
    description: "Test campaigns using AI-generated influencers before going live. Analytics preview for engagement, reach, and predicted ROI.",
    icon: BarChart3,
    features: ["Predictive analytics", "A/B testing avatars", "ROI forecasting"],
    credits: "30 credits/sim",
    color: "from-violet-500/20 to-fuchsia-500/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
  },
  {
    id: "credit-system",
    title: "AI Credit System Integration",
    description: "All premium services are powered by AI credits. Transparent cost per service with real-time usage monitoring in your dashboard.",
    icon: Zap,
    features: ["Transparent cost structure", "Real-time monitoring", "Easy credit top-up"],
    credits: "Platform Foundation",
    color: "from-primary/20 to-cyan-400/20",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,242,255,0.3)]"
  }
];

export function AIServices() {
  return (
    <section className="py-32 bg-black relative overflow-hidden" id="services">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            <Sparkles className="w-3 h-3" />
            <span>Premium AI Services</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic mb-8">
            Empower Your <span className="text-primary">Brand</span>
          </h2>
          <p className="text-white/40 max-w-3xl mx-auto text-xl leading-relaxed">
            From hyper-realistic AI avatars to automated influencer campaigns, 
            AIE offers advanced AI services designed to supercharge your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className={cn(
                "group h-full p-8 border-white/5 hover:border-primary/30 transition-all duration-500 relative overflow-hidden",
                service.glow
              )}>
                {/* Visual Accent */}
                <div className={cn(
                  "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700",
                  service.color
                )} />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-500 shadow-xl">
                    <service.icon className="w-7 h-7 text-white/40 group-hover:text-primary transition-colors duration-500" />
                  </div>

                  <h3 className="text-2xl font-black tracking-tight mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/40 mb-8 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-white/30">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-2">
                       <Zap className="w-3 h-3 text-primary" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">
                         {service.credits}
                       </span>
                    </div>
                    
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">
                      Demo <Play className="w-3 h-3" />
                    </button>
                  </div>
                </div>
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
