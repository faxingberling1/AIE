"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Award, ShieldCheck, Download, Share2, Globe, Cpu } from "lucide-react";
import { useSession } from "next-auth/react";

interface CertificateGeneratorProps {
  courseTitle: string;
  completionDate: string;
}

export function CertificateGenerator({ courseTitle, completionDate }: CertificateGeneratorProps) {
  const { data: session } = useSession();
  const certId = "AIE-" + Math.random().toString(36).substring(2, 10).toUpperCase();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-black text-white italic">Identity Validated</h3>
          <p className="text-xs text-white/40 mt-1 uppercase tracking-[0.2em]">Neural Certification Protocol Active</p>
        </div>
        <div className="flex gap-4">
           <button className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white transition-all">
              <Download className="w-5 h-5" />
           </button>
           <button className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white transition-all">
              <Share2 className="w-5 h-5" />
           </button>
        </div>
      </div>

      <GlassCard className="p-0 overflow-hidden relative group">
         {/* Atmospheric Effects */}
         <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
         <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/20 transition-all duration-1000" />
         
         <div className="relative z-10 p-12 md:p-20 flex flex-col items-center text-center border-2 border-primary/20 m-4 rounded-[2rem] bg-black/40 backdrop-blur-xl shadow-neon-sm">
            {/* Holographic Header */}
            <div className="mb-12 relative">
               <div className="absolute inset-0 bg-primary/20 blur-2xl animate-pulse" />
               <Award className="w-20 h-20 text-primary relative z-10" />
            </div>

            <div className="space-y-4 mb-16">
               <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Certificate of Excellence</h4>
               <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Neural Mastery</h1>
               <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
            </div>

            <div className="space-y-4 mb-16">
               <p className="text-sm font-medium text-white/40 uppercase tracking-widest">This certifies that</p>
               <h2 className="text-3xl md:text-5xl font-black italic text-primary drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">
                  {session?.user?.name || "Neural Creator"}
               </h2>
               <p className="text-sm font-medium text-white/40 max-w-lg mx-auto leading-relaxed">
                  Has successfully synthesized the neural protocols required for 
                  <span className="text-white block font-black mt-2 underline decoration-primary/50 underline-offset-8">
                     {courseTitle}
                  </span>
               </p>
            </div>

            {/* Blockchain Footer */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5 mt-auto">
               <div className="flex flex-col items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary/40" />
                  <div>
                     <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Protocol ID</p>
                     <p className="text-[10px] font-mono font-bold text-white/60">{certId}</p>
                  </div>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <Globe className="w-5 h-5 text-primary/40" />
                  <div>
                     <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Validation Date</p>
                     <p className="text-[10px] font-mono font-bold text-white/60">{completionDate}</p>
                  </div>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <Cpu className="w-5 h-5 text-primary/40" />
                  <div>
                     <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">Neural Hash</p>
                     <p className="text-[10px] font-mono font-bold text-white/60 truncate max-w-[120px]">0x7F2...B9E4</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Corner Decorative Elements */}
         <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-[3rem] m-2 pointer-events-none" />
         <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/20 rounded-br-[3rem] m-2 pointer-events-none" />
      </GlassCard>

      <div className="bg-primary/10 border border-primary/20 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
               <Globe className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
               <p className="text-sm font-black text-white italic">Synced to Neural Network</p>
               <p className="text-[10px] text-white/40 uppercase tracking-widest">Credential publicly verifiable via platform registry</p>
            </div>
         </div>
         <button className="px-8 py-3 bg-white text-black text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-primary transition-all">
            View on Registry
         </button>
      </div>
    </div>
  );
}
