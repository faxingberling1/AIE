"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Play, Star, Users, Zap } from "lucide-react";

const INFLUENCERS = [
  { name: "LUNA", niche: "Fashion & Lifestyle", followers: "2.4M", rate: "4.98", gradient: "from-pink-500/30 to-purple-500/30", accent: "text-pink-400" },
  { name: "APEX", niche: "Fitness & Wellness", followers: "1.8M", rate: "4.95", gradient: "from-primary/30 to-blue-500/30", accent: "text-primary" },
  { name: "NOVA", niche: "Tech & Innovation", followers: "3.1M", rate: "5.0", gradient: "from-purple-400/30 to-primary/30", accent: "text-purple-400" },
  { name: "RIO", niche: "Food & Travel", followers: "1.2M", rate: "4.92", gradient: "from-amber-400/30 to-orange-500/30", accent: "text-amber-400" },
  { name: "SAGE", niche: "Personal Finance", followers: "900K", rate: "4.97", gradient: "from-green-400/30 to-teal-500/30", accent: "text-green-400" },
  { name: "ECHO", niche: "Gaming & Esports", followers: "2.9M", rate: "4.99", gradient: "from-red-400/30 to-pink-500/30", accent: "text-red-400" },
];

const STATS = [
  { value: "50K+", label: "AI Influencers Created" },
  { value: "120+", label: "Countries" },
  { value: "4.97", label: "Avg. Engagement Rate" },
];

export default function AIInfluencersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-40 right-0 w-96 h-96 bg-purple-400/5 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">AI Influencers</p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
              Meet Your<br /><span className="text-primary">AI Creators</span>
            </h1>
            <p className="text-white/40 text-xl max-w-2xl mb-10 leading-relaxed">
              Build and deploy photorealistic AI influencers that post, engage, and grow audiences 24/7. No cameras. No schedules. Pure reach.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/ai-tools/influencer" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-black font-bold hover:shadow-[0_0_40px_rgba(0,242,255,0.4)] transition-all duration-300">
                Generate AI Influencer <Zap className="w-4 h-4" />
              </a>
              <a href="/marketplace" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-all duration-300">
                Browse Courses <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/5 py-8">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 text-center">
          {STATS.map(s => (
            <div key={s.label}>
              <p className="text-3xl font-black text-primary">{s.value}</p>
              <p className="text-white/40 text-xs uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Featured Influencers</p>
          <a href="/ai-tools/influencer" className="text-white/40 hover:text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1 transition-colors">
            Create Yours <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INFLUENCERS.map(inf => (
            <div key={inf.name} className="group rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-all duration-500 cursor-pointer">
              {/* Avatar placeholder */}
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${inf.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="text-7xl font-black text-white/10">{inf.name[0]}</span>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-xs">
                    <Users className="w-3 h-3 text-white/60" />
                    <span className="text-white/80 font-semibold">{inf.followers}</span>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Play className="w-3.5 h-3.5 text-white fill-white" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className={`text-2xl font-black tracking-tight ${inf.accent}`}>{inf.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-white/40">
                    <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                    {inf.rate}
                  </div>
                </div>
                <p className="text-white/40 text-sm">{inf.niche}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black tracking-tight mb-4">Ready to create your first AI influencer?</h2>
          <p className="text-white/40 mb-8">It takes less than 5 minutes. No design skills needed.</p>
          <a href="/ai-tools/influencer" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-black font-bold hover:shadow-[0_0_40px_rgba(0,242,255,0.4)] transition-all duration-300">
            Start Generating <Zap className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
