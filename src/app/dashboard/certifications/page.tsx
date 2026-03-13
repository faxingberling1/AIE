"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Award, 
  Download, 
  Share2, 
  Search, 
  Filter,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Star
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const EARNED_CERTIFICATES = [
  {
    id: "CERT-001",
    title: "AI Influencer Modeling Mastery",
    date: "March 12, 2024",
    grade: "98%",
    type: "Elite",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "CERT-005",
    title: "Neural Texturing Protocols",
    date: "February 28, 2024",
    grade: "92%",
    type: "Professional",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
  },
];

const AVAILABLE_CERTIFICATIONS = [
  {
    title: "Campaign Orchestration Specialist",
    description: "Master the art of high-volume social media synthesis.",
    status: "In Progress",
    progress: 45,
  },
  {
    title: "Aether-Sys Logic Architect",
    description: "Deep dive into multi-agent systems and enterprise AI.",
    status: "Locked",
    progress: 0,
  }
];

export default function CertificationsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardShell>
      <div className="space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Award className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Validation Protocols</span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-white">Identity <span className="text-primary italic text-stroke-sm">Certifications</span></h1>
            <p className="text-white/40 max-w-2xl text-lg font-light leading-relaxed">View, download, and share your blockchain-verified mastery credentials across the neural network.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-primary transition-colors" />
              <input 
                type="text"
                placeholder="Search credentials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/5 rounded-2xl pl-12 pr-6 py-3 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-primary/30 transition-all w-64"
              />
            </div>
            <button className="p-3 rounded-2xl bg-white/5 border border-white/5 text-white/40 hover:text-white transition-all">
               <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Earned Certificates Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black text-white italic">Earned Credentials</h2>
            <span className="text-[10px] font-black text-primary uppercase tracking-widest">{EARNED_CERTIFICATES.length} Verified</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {EARNED_CERTIFICATES.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="p-0 overflow-hidden border-white/5 group hover:border-primary/20 transition-all duration-500">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Visual Preview */}
                    <div className="md:w-48 h-48 md:h-auto relative overflow-hidden shrink-0">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r" />
                      <div className="absolute top-4 left-4 p-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow p-8 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black text-primary uppercase tracking-widest">{cert.type} Master</span>
                          <span className="text-[9px] font-mono text-white/20">{cert.id}</span>
                        </div>
                        <h3 className="text-xl font-black text-white group-hover:text-primary transition-colors">{cert.title}</h3>
                        <div className="flex items-center gap-6">
                           <div className="flex items-center gap-2">
                             <Calendar className="w-3 h-3 text-white/20" />
                             <span className="text-[10px] font-bold text-white/40">{cert.date}</span>
                           </div>
                           <div className="flex items-center gap-2">
                             <Star className="w-3 h-3 text-amber-500" />
                             <span className="text-[10px] font-bold text-white/40">Grade: {cert.grade}</span>
                           </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-8">
                        <button className="flex-grow py-3 rounded-xl bg-primary text-black text-[10px] font-black uppercase tracking-widest hover:shadow-neon transition-all flex items-center justify-center gap-2">
                           <Download className="w-3 h-3" />
                           Download JSON-LD
                        </button>
                        <button className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all">
                           <Share2 className="w-4 h-4" />
                        </button>
                        <button className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all">
                           <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Roadmap / Coming Soon */}
        <section className="pt-12">
           <GlassCard className="p-12 border-white/5 bg-white/[0.01]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                 <div className="space-y-6 max-w-xl">
                    <div className="space-y-2">
                       <h3 className="text-2xl font-black text-white flex items-center gap-3 italic">
                          Credential <span className="text-white/20">Roadmap</span>
                       </h3>
                       <p className="text-white/40 text-sm leading-relaxed">
                          Your neural footprint is expanding. Complete ongoing masterclasses to secure enterprise-grade certifications and unlock exclusive platform features.
                       </p>
                    </div>

                    <div className="space-y-4">
                       {AVAILABLE_CERTIFICATIONS.map((item, i) => (
                         <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer group">
                            <div className="flex justify-between items-center">
                               <p className="text-xs font-bold text-white group-hover:text-primary transition-colors">{item.title}</p>
                               <span className="text-[9px] font-black uppercase tracking-widest text-white/20">{item.status}</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                               <div className="h-full bg-primary/20" style={{ width: `${item.progress}%` }} />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="shrink-0">
                    <div className="w-64 h-64 rounded-[40px] border-2 border-dashed border-white/10 flex flex-col items-center justify-center text-center p-8 space-y-4 group hover:border-primary/20 transition-all cursor-pointer">
                       <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/10 group-hover:text-primary group-hover:scale-110 transition-all">
                          <CheckCircle2 className="w-8 h-8" />
                       </div>
                       <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Partner Integration</p>
                       <p className="text-[9px] text-white/10 italic">Connect your LinkedIn for auto-synchronization of neural badges.</p>
                       <button className="text-[10px] font-black text-primary/40 group-hover:text-primary transition-colors uppercase tracking-widest">
                          Initialize Sync
                       </button>
                    </div>
                 </div>
              </div>
           </GlassCard>
        </section>
      </div>
    </DashboardShell>
  );
}
