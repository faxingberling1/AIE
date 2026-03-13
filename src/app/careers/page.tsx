"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Briefcase, Globe, Zap } from "lucide-react";

const PERKS = [
  { icon: Globe, label: "100% Remote", desc: "Work from anywhere in the world." },
  { icon: Zap, label: "AI Credits", desc: "Unlimited access to all AIE tools." },
  { icon: Briefcase, label: "Equity", desc: "Meaningful ownership in the company." },
];

const ROLES = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", type: "Full-time · Remote", tags: ["Next.js", "Prisma", "AI"] },
  { title: "AI/ML Engineer", team: "AI Research", type: "Full-time · Remote", tags: ["Python", "PyTorch", "LLMs"] },
  { title: "Product Designer (UI/UX)", team: "Design", type: "Full-time · Remote", tags: ["Figma", "Motion", "Systems"] },
  { title: "Head of Growth", team: "Marketing", type: "Full-time · Remote", tags: ["SEO", "Paid", "Analytics"] },
  { title: "Creator Success Manager", team: "Operations", type: "Full-time · Remote", tags: ["Support", "Education", "Community"] },
  { title: "Curriculum Developer", team: "Education", type: "Contract · Remote", tags: ["AI", "Course Design", "Video"] },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-400/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Join the Team</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            Build the <br /><span className="text-primary">Future</span> with Us
          </h1>
          <p className="text-white/40 text-xl max-w-xl mx-auto">
            We&apos;re a remote-first team building the world&apos;s most advanced AI creator platform. Come shape the future.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-12 border-y border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
          {PERKS.map(p => (
            <div key={p.label} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <p.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">{p.label}</p>
                <p className="text-white/40 text-xs">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 container mx-auto px-6 max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-10">Open Positions</p>
        <div className="space-y-4">
          {ROLES.map(role => (
            <a
              key={role.title}
              href="#"
              className="block rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-white group-hover:text-primary transition-colors mb-1">{role.title}</h3>
                  <p className="text-white/40 text-sm mb-3">{role.team} · {role.type}</p>
                  <div className="flex flex-wrap gap-2">
                    {role.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-lg bg-white/5 border border-white/10 text-white/40 text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <p className="font-bold text-white mb-2">Don&apos;t see your role?</p>
          <p className="text-white/40 text-sm mb-6">We&apos;re always looking for exceptional talent. Send us your resume.</p>
          <a href="/support/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-black font-bold text-sm hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all duration-300">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
