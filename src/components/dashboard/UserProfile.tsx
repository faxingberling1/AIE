"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { 
  User, 
  Shield, 
  Key, 
  Mail, 
  MapPin, 
  Globe, 
  Camera, 
  Bell, 
  Lock,
  Smartphone,
  Eye,
  LogOut,
  Github,
  Twitter,
  Linkedin,
  Zap,
  CheckCircle2,
  Trash2,
  ShieldAlert,
  Fingerprint
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";

export function UserProfile() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState<"identity" | "security" | "protocols" | "danger">("identity");
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  const tabs = [
    { id: "identity", label: "Neural Identity", icon: User },
    { id: "security", label: "Access Security", icon: Shield },
    { id: "protocols", label: "Neural Protocols", icon: Zap },
    { id: "danger", label: "Terminal Zone", icon: ShieldAlert },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Profile Header Block */}
      <GlassCard className="p-10 border-primary/20 bg-primary/[0.02] overflow-hidden relative group">
         <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
         
         <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="relative group/avatar">
               <div className="w-40 h-40 rounded-[3rem] glass border-2 border-primary/30 overflow-hidden shadow-neon group-hover:scale-105 transition-all duration-700 bg-black">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-black to-purple-500/10 flex items-center justify-center text-primary">
                     {session?.user?.image ? (
                        <img src={session.user.image} alt="Avatar" className="w-full h-full object-cover" />
                     ) : (
                        <User className="w-20 h-20 opacity-20" />
                     )}
                  </div>
               </div>
               <button className="absolute -bottom-3 -right-3 w-12 h-12 rounded-2xl glass border border-white/20 flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all shadow-2xl group/cam">
                  <Camera className="w-5 h-5 group-hover/cam:scale-110 transition-transform" />
               </button>
            </div>
            
            <div className="text-center md:text-left space-y-4">
               <div>
                  <h2 className="text-5xl font-black tracking-tighter text-white">{session?.user?.name || "Neural Creator"}</h2>
                  <p className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mt-2">Primary Node • Tokyo Sector</p>
               </div>
               
               <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <div className="px-5 py-2 glass rounded-2xl border-primary/20 text-[9px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                     <Zap className="w-3 h-3" /> Creator Pro
                  </div>
                  <div className="px-5 py-2 glass rounded-2xl border-white/5 text-[9px] font-black uppercase tracking-widest text-white/40">Verified Since 2024</div>
                  <div className="px-5 py-2 glass rounded-2xl border-green-500/20 text-[9px] font-black uppercase tracking-widest text-green-400">Node Active</div>
               </div>
            </div>
         </div>
      </GlassCard>

      {/* Navigation Matrix */}
      <div className="flex flex-wrap gap-2 p-1.5 glass border-white/5 rounded-[2rem] max-w-fit mx-auto md:mx-0">
         {tabs.map((tab) => (
           <button
             key={tab.id}
             onClick={() => setActiveTab(tab.id as any)}
             className={cn(
               "flex items-center gap-3 px-8 py-4 rounded-[1.5rem] transition-all duration-500 relative group",
               activeTab === tab.id ? "bg-primary text-black shadow-neon" : "text-white/40 hover:text-white"
             )}
           >
              <tab.icon className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">{tab.label}</span>
           </button>
         ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
         {/* Configuration Matrix */}
         <div className="xl:col-span-2 space-y-8">
            <AnimatePresence mode="wait">
               {activeTab === "identity" && (
                 <motion.div
                   key="identity"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   className="space-y-8"
                 >
                    <GlassCard className="p-10 border-white/5 space-y-10">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="space-y-3">
                             <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Full Legal Identity</label>
                             <input type="text" defaultValue={session?.user?.name || ""} className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold text-white" />
                          </div>
                          <div className="space-y-3">
                             <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Synthesizer Pseudonym</label>
                             <input type="text" defaultValue="Marcus_X" className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold text-white" />
                          </div>
                          <div className="space-y-3">
                             <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Neural Sector (Location)</label>
                             <div className="relative">
                                <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                <input type="text" defaultValue="Tokyo, Japan" className="w-full bg-white/[0.02] border border-white/10 rounded-2xl pl-16 pr-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold text-white" />
                             </div>
                          </div>
                          <div className="space-y-3">
                             <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Portfolio Protocol (URL)</label>
                             <div className="relative">
                                <Globe className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                                <input type="text" defaultValue="synthesis.agency" className="w-full bg-white/[0.02] border border-white/10 rounded-2xl pl-16 pr-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold text-white" />
                             </div>
                          </div>
                       </div>
                       
                       <div className="pt-6 border-t border-white/5">
                          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-8">Social Amplifiers</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                             {[
                               { icon: Twitter, label: "X-Neural", value: "@marcus_synthesis" },
                               { icon: Github, label: "Git-Stack", value: "marcus_rivera" },
                               { icon: Linkedin, label: "Connect-Net", value: "marcusrivera" },
                             ].map((social, i) => (
                               <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-primary/20 transition-all">
                                  <social.icon className="w-5 h-5 text-white/20 group-hover:text-primary transition-colors" />
                                  <div className="truncate">
                                     <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">{social.label}</p>
                                     <p className="text-xs font-bold text-white/80 truncate">{social.value}</p>
                                  </div>
                               </div>
                             ))}
                          </div>
                       </div>

                       <div className="pt-8 flex justify-end">
                          <PremiumButton className="px-12 py-5 shadow-neon">
                             Synchronize Identity
                          </PremiumButton>
                       </div>
                    </GlassCard>
                 </motion.div>
               )}

               {activeTab === "security" && (
                 <motion.div
                   key="security"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   className="space-y-8"
                 >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <GlassCard className="p-8 border-white/5 bg-primary/[0.01]">
                          <div className="flex justify-between items-start mb-8">
                             <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-neon-sm">
                                <Smartphone className="w-6 h-6" />
                             </div>
                             <div className={cn(
                               "px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest",
                               is2FAEnabled ? "bg-green-500/20 text-green-400 border border-green-500/20" : "bg-red-500/20 text-red-400 border border-red-500/20"
                             )}>
                                {is2FAEnabled ? "Active" : "Bypassed"}
                             </div>
                          </div>
                          <h4 className="text-xl font-black text-white mb-2">Multi-Factor Synthesis</h4>
                          <p className="text-sm text-white/40 leading-relaxed italic mb-8">Require a secondary neural confirmation for every login attempt.</p>
                          <PremiumButton 
                            variant={is2FAEnabled ? "outline" : "primary"} 
                            className="w-full"
                            onClick={() => setIs2FAEnabled(!is2FAEnabled)}
                          >
                             {is2FAEnabled ? "Deactivate protocol" : "Initialize 2FA"}
                          </PremiumButton>
                       </GlassCard>

                       <GlassCard className="p-8 border-white/5">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 mb-8">
                             <Fingerprint className="w-6 h-6" />
                          </div>
                          <h4 className="text-xl font-black text-white mb-2">Biometric Passkeys</h4>
                          <p className="text-sm text-white/40 leading-relaxed italic mb-8">Utilize hardware-level fingerprint or face recognition for instant entry.</p>
                          <PremiumButton variant="outline" className="w-full border-white/10">
                             Register Device
                          </PremiumButton>
                       </GlassCard>
                    </div>

                    <GlassCard className="p-10 border-white/5">
                       <div className="flex items-center gap-4 mb-10">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/20">
                             <Key className="w-6 h-6" />
                          </div>
                          <h4 className="text-2xl font-black text-white">Access Key Rotation</h4>
                       </div>
                       <div className="space-y-6">
                          <div className="space-y-3">
                             <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Current Access Key</label>
                             <input type="password" placeholder="••••••••••••••••" className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none" />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">New Access Key</label>
                                <input type="password" placeholder="Min. 12 characters" className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none" />
                             </div>
                             <div className="space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Verify Key</label>
                                <input type="password" placeholder="Match new key" className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none" />
                             </div>
                          </div>
                          <PremiumButton variant="outline" className="w-full py-5 border-white/10 mt-6 uppercase font-black tracking-widest text-xs">
                             Update Master Security Key
                          </PremiumButton>
                       </div>
                    </GlassCard>
                 </motion.div>
               )}

               {activeTab === "protocols" && (
                 <motion.div
                   key="protocols"
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: 20 }}
                   className="space-y-8"
                 >
                    <GlassCard className="p-10 border-white/5">
                       <h3 className="text-2xl font-black text-white mb-8">Neural Communication Layers</h3>
                       <div className="space-y-4">
                          {[
                             { label: "Synthesis Status Reports", desc: "Weekly analytics of your neural network growth.", active: true },
                             { label: "Credit Depletion Alerts", desc: "Instant warning when fuel drops below threshold.", active: true },
                             { label: "Community Synthesis", desc: "News about global creator collaborations and tools.", active: false },
                             { label: "Security Protocol Logs", desc: "Detailed records of all access attempts.", active: true },
                          ].map((pref, i) => (
                            <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all">
                               <div className="space-y-1">
                                  <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{pref.label}</p>
                                  <p className="text-xs text-white/40 italic">{pref.desc}</p>
                                </div>
                                <button className={cn(
                                  "w-12 h-6 rounded-full relative transition-all duration-500",
                                  pref.active ? "bg-primary shadow-neon" : "bg-white/10"
                                )}>
                                   <div className={cn(
                                     "absolute top-1 w-4 h-4 rounded-full bg-black transition-all duration-500",
                                     pref.active ? "right-1" : "left-1"
                                   )} />
                                </button>
                            </div>
                          ))}
                       </div>
                    </GlassCard>
                 </motion.div>
               )}

               {activeTab === "danger" && (
                 <motion.div
                   key="danger"
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   className="space-y-8"
                 >
                    <GlassCard className="p-12 border-red-500/20 bg-red-500/[0.02] relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-8">
                          <ShieldAlert className="w-20 h-20 text-red-500/10" />
                       </div>
                       <div className="relative z-10 space-y-8">
                          <div>
                             <h3 className="text-3xl font-black text-white tracking-tighter mb-4">Identity Deletion</h3>
                             <p className="text-white/40 max-w-xl leading-relaxed italic">
                                Termination of your neural node is permanent. All credits, courses, and referral networks will be purged from the synthesis collective.
                             </p>
                          </div>
                          <button className="px-10 py-5 bg-red-500 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:bg-red-600 transition-all active:scale-95">
                             Terminate Primary Node
                          </button>
                       </div>
                    </GlassCard>
                 </motion.div>
               )}
            </AnimatePresence>
         </div>

         {/* Sidebar Reconnaissance */}
         <div className="space-y-8">
            <GlassCard className="p-8 border-white/5 bg-white/[0.01]">
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-8 flex items-center gap-3">
                <Eye className="w-4 h-4 text-primary" />
                Active Node Replicas
               </h3>
               <div className="space-y-8">
                  {[
                    { device: "Chrome / Windows 11", location: "Tokyo, JP • 192.168.1.1", status: "Active Now" },
                    { device: "AIE iOS Neural App", location: "Osaka, JP • 4G Network", status: "2 hrs ago" },
                    { device: "Safari / MacOS", location: "London, UK • VPN Proxy", status: "Yesterday" },
                  ].map((session, i) => (
                    <div key={i} className="flex justify-between items-start group">
                       <div className="space-y-1">
                          <p className="text-sm font-bold text-white/60 group-hover:text-primary transition-colors">{session.device}</p>
                          <p className="text-[9px] text-white/20 uppercase font-black tracking-widest">{session.location}</p>
                       </div>
                       <div className={cn(
                        "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border transition-all",
                        session.status === "Active Now" ? "text-primary border-primary/20 bg-primary/5" : "text-white/20 border-white/5 bg-white/5"
                       )}>
                        {session.status}
                       </div>
                    </div>
                  ))}
               </div>
               <button className="w-full mt-12 py-4 rounded-xl border border-white/5 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-red-400 hover:border-red-400/20 transition-all flex items-center justify-center gap-3">
                  <LogOut className="w-4 h-4" />
                  Flush All Replicas
               </button>
            </GlassCard>

            <GlassCard className="p-8 border-primary/10 bg-gradient-to-br from-primary/[0.02] to-transparent">
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-6 font-mono">Neural Integrity</h3>
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin-slow flex items-center justify-center">
                     <span className="text-xs font-black text-primary animate-none">94%</span>
                  </div>
                  <div className="space-y-1">
                     <p className="text-xs font-bold text-white">Trust Score</p>
                     <p className="text-[10px] text-white/40 italic">Account verified & active</p>
                  </div>
               </div>
            </GlassCard>
         </div>
      </div>
    </div>
  );
}
