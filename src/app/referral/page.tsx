"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeIn } from "@/components/ui/Animations";
import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { 
  Users, 
  Zap, 
  TrendingUp, 
  DollarSign, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Globe,
  Handshake,
  BarChart3
} from "lucide-react";
import Link from "next/link";

const PERKS = [
  {
    icon: DollarSign,
    title: "High Earnings",
    desc: "Earn 20% lifetime commission on every referral’s subscription and credit purchases.",
  },
  {
    icon: Zap,
    title: "Bonus Credits",
    desc: "Get extra AI credits instantly when your referral starts creating content.",
  },
  {
    icon: BarChart3,
    title: "Simple Tracking",
    desc: "Monitor your network growth with our high-density partner dashboard. ",
  },
];

const STEPS = [
  {
    tag: "01",
    title: "Get Your Link",
    desc: "Access your unique referral link from your dashboard.",
  },
  {
    tag: "02",
    title: "Share with Others",
    desc: "Invite creators, agencies, and businesses to join AIE.",
  },
  {
    tag: "03",
    title: "Start Earning",
    desc: "Receive real-time payouts as your referred members grow and succeed.",
  },
];

export default function ReferralProgramPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30 selection:text-black">
      <Navbar />

      <main>
        {/* Cinematic Hero */}
        <section className="relative pt-64 pb-32 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] h-[140vw] bg-[radial-gradient(circle,rgba(0,242,255,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-12">
                <Handshake className="w-4 h-4" />
                <span>Ambassador Program</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-12 leading-[0.85]">
                GROW OUR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/20 via-white to-white/20 italic font-light pr-4 uppercase">Creator Network</span>
              </h1>
              <p className="text-white/40 text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-light mb-16">
                Partner with the world&apos;s leading AI platform and earn rewards for every creator you bring to AIE.
              </p>
              
              <Link href="/auth/signup">
                <PremiumButton className="px-12 py-6 rounded-2xl text-xs uppercase tracking-[0.3em] font-black">
                  Start Earning
                </PremiumButton>
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-32 relative border-b border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {PERKS.map((perk, i) => (
                <FadeIn key={perk.title} delay={i * 0.1}>
                  <div className="group relative">
                    <div className="absolute -inset-4 rounded-[3rem] bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <GlassCard className="p-10 h-full border-white/5 hover:border-primary/20 transition-all duration-700 rounded-[2.5rem] bg-white/[0.01]">
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-700">
                        <perk.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors uppercase">{perk.title}</h3>
                      <p className="text-white/40 leading-relaxed font-light text-sm">{perk.desc}</p>
                    </GlassCard>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-48 relative overflow-hidden bg-white/[0.01]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <div className="mb-24 text-center md:text-left">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary block mb-6">Simple Process</span>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-12 uppercase">
                    How You Can <br />Earn More
                  </h2>
                </div>
              </FadeIn>

              <div className="space-y-32">
                {STEPS.map((step, i) => (
                  <FadeIn key={step.tag} delay={i * 0.1}>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start group">
                      <div className="text-primary font-black text-7xl md:text-9xl opacity-10 group-hover:opacity-100 group-hover:italic transition-all duration-700 leading-none">
                        {step.tag}
                      </div>
                      <div className="flex-1 pt-6">
                        <h4 className="text-3xl font-black mb-6 tracking-tight uppercase italic">{step.title}</h4>
                        <p className="text-white/30 text-xl leading-relaxed font-light group-hover:text-white/60 transition-colors">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Trust Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <GlassCard className="p-16 border-primary/20 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent rounded-[4rem] text-center relative overflow-hidden">
              {/* Graphic Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -ml-32 -mb-32" />
              
              <FadeIn>
                <div className="flex justify-center mb-10">
                  <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center animate-pulse">
                    <Sparkles className="w-10 h-10 text-primary shadow-neon" />
                  </div>
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase">
                  Ready to Become an <br />AIE Partner?
                </h2>
                <p className="text-white/40 text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                  Join 5,000+ partners already earning and growing with the world&apos;s leading AI platform.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link href="/auth/signup">
                    <PremiumButton className="px-12 py-5 rounded-2xl text-[10px] uppercase tracking-[0.3em] font-black">
                      Register Now
                    </PremiumButton>
                  </Link>
                  <Link href="/support/contact" className="text-white/30 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 transition-all">
                    Contact Partnerships <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            </GlassCard>
            
            <div className="mt-16 flex flex-wrap justify-center gap-12 opacity-20 grayscale">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-widest">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-widest">Global Payouts</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-[10px] font-black uppercase tracking-widest">Direct Support</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
