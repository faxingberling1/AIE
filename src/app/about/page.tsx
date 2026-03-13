"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Users, Zap, Globe, Award, ArrowRight } from "lucide-react";

const STATS = [
  { value: "50K+", label: "Active Creators" },
  { value: "120+", label: "Countries Reached" },
  { value: "$2.4M", label: "Creator Earnings" },
  { value: "99.9%", label: "Platform Uptime" },
];

const TEAM = [
  { name: "Alex Rivera", role: "CEO & Co-Founder", bio: "Former AI Research Lead at a Fortune 500. Passionate about democratizing AI for creators worldwide." },
  { name: "Sarah Chen", role: "CTO & Co-Founder", bio: "Built ML infrastructure at scale. Expert in generative models and real-time media synthesis." },
  { name: "Marcus Vane", role: "Head of Product", bio: "10+ years in product design, previously led creator tools at major social platforms." },
  { name: "Elena Thorne", role: "Head of Education", bio: "Curriculum designer and former AI educator. Architect of the AIE course framework." },
];

const VALUES = [
  { icon: Zap, title: "Creator-First", desc: "Every product decision starts with the creator. We build tools that unlock human potential, not replace it." },
  { icon: Globe, title: "Globally Inclusive", desc: "AI should be accessible to every creator on Earth, regardless of location, language, or budget." },
  { icon: Users, title: "Community-Driven", desc: "Our roadmap is shaped by our community. Your feedback directly influences what we build next." },
  { icon: Award, title: "Excellence in Quality", desc: "We hold our AI outputs and educational content to the highest industry standards." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">About AIE</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
            The Future of<br /><span className="text-primary">AI Influence</span>
          </h1>
          <p className="text-white/40 text-xl max-w-2xl mx-auto leading-relaxed">
            AIE is the world&apos;s leading platform for AI influencer creation, automation, and education. We empower creators and businesses to build, grow, and monetize with AI.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map(s => (
            <div key={s.label}>
              <p className="text-4xl md:text-5xl font-black text-primary mb-2">{s.value}</p>
              <p className="text-white/40 text-sm uppercase tracking-widest font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-24 container mx-auto px-6 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Our Mission</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">
          Empowering every creator to<br /><span className="text-primary">build with AI.</span>
        </h2>
        <p className="text-white/40 text-lg leading-relaxed mb-6">
          We started AIE with a single belief: the next generation of digital media will be built by people who harness AI, not by AI alone. Our platform provides the tools, education, and community to make that vision real for every creator — from solo solopreneurs to global enterprises.
        </p>
        <p className="text-white/40 text-lg leading-relaxed">
          From photorealistic AI influencers to automated content pipelines, AIE gives you a competitive edge in the rapidly evolving synthetic media landscape — backed by the best courses, real-world tools, and a thriving global community.
        </p>
      </section>

      {/* Values */}
      <section className="py-16 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-12 text-center">Our Values</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(v => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white mb-2 group-hover:text-primary transition-colors">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 container mx-auto px-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-12 text-center">The Team</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map(m => (
            <div key={m.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-400/20 border border-white/10 mb-5 flex items-center justify-center text-2xl font-black text-primary">
                {m.name[0]}
              </div>
              <h3 className="font-bold text-white mb-0.5">{m.name}</h3>
              <p className="text-primary text-xs font-semibold mb-3">{m.role}</p>
              <p className="text-white/40 text-sm leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black tracking-tight mb-4">Ready to build with AI?</h2>
          <p className="text-white/40 mb-8">Join 50,000+ creators already using AIE.</p>
          <a href="/auth/signup" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-black font-bold hover:shadow-[0_0_40px_rgba(0,242,255,0.4)] transition-all duration-300">
            Get Started Free <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
