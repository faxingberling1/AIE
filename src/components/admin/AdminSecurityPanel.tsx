"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  AlertTriangle, 
  History, 
  Globe, 
  Smartphone,
  ShieldAlert,
  Terminal,
  Server
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AUDIT_LOGS = [
  { id: 1, event: "Admin Login", user: "Admin (System)", ip: "10.0.0.1", time: "Just now", status: "Success" },
  { id: 2, event: "Plan Expansion", user: "Sarah J. (User)", ip: "192.168.1.45", time: "14 mins ago", status: "Success" },
  { id: 3, event: "Failed Auth", user: "Unknown", ip: "45.12.33.1", time: "1 hour ago", status: "Blocked" },
  { id: 4, event: "API Key Revoke", user: "James M. (Admin)", ip: "10.0.0.5", time: "3 hours ago", status: "Success" },
];

export function AdminSecurityPanel() {
  return (
    <div className="space-y-12">
      {/* Security KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <GlassCard className="p-8 border-primary/20 bg-primary/5">
            <div className="flex justify-between items-start mb-6">
               <div className="w-12 h-12 rounded-2xl glass border border-primary/20 flex items-center justify-center text-primary shadow-neon">
                  <ShieldCheck className="w-6 h-6" />
               </div>
               <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">High Health</span>
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-1">Global 2FA Adoption</h3>
            <div className="text-4xl font-black">74.2%</div>
            <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
               <div className="h-full bg-primary w-[74.2%] shadow-neon" />
            </div>
         </GlassCard>

         <GlassCard className="p-8 border-white/5 bg-white/[0.01]">
            <div className="flex justify-between items-start mb-6">
               <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-red-500">
                  <ShieldAlert className="w-6 h-6" />
               </div>
               <span className="text-[10px] font-black text-red-400 uppercase tracking-[0.2em]">12 Blocked</span>
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-1">Live Threat Alerts</h3>
            <div className="text-4xl font-black">Minimal</div>
            <p className="mt-4 text-[10px] text-white/20 font-bold uppercase tracking-widest">No active DDoS or Brute-force detected.</p>
         </GlassCard>

         <GlassCard className="p-8 border-white/5 bg-white/[0.01]">
            <div className="flex justify-between items-start mb-6">
               <div className="w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center text-white/40">
                  <Server className="w-6 h-6" />
               </div>
               <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Encryption: AES-256</span>
            </div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-1">DB Connection Integrity</h3>
            <div className="text-4xl font-black">100%</div>
            <p className="mt-4 text-[10px] text-green-400 font-black uppercase tracking-widest">All clusters verified.</p>
         </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Live Audit Log */}
         <GlassCard className="lg:col-span-2 p-8 border-white/5 bg-white/[0.01]">
            <div className="flex justify-between items-center mb-10">
               <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40 flex items-center gap-2">
                 <Terminal className="w-4 h-4" />
                 Global Security Audit
               </h3>
               <button className="text-[10px] font-black uppercase tracking-widest text-primary/60 hover:text-primary transition-all">Clear Filter</button>
            </div>
            
            <div className="space-y-4">
               {AUDIT_LOGS.map((log) => (
                 <div key={log.id} className="flex items-center justify-between p-4 glass border-white/5 rounded-2xl group hover:bg-white/[0.03] transition-all">
                    <div className="flex items-center gap-4">
                       <div className={cn(
                        "w-2 h-2 rounded-full",
                        log.status === "Success" ? "bg-green-400" : "bg-red-400 shadow-neon"
                       )} />
                       <div>
                          <p className="text-sm font-bold text-white/80">{log.event}</p>
                          <p className="text-[10px] text-white/20 font-medium uppercase tracking-widest">{log.user} • {log.ip}</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-black uppercase tracking-widest text-white/20">{log.time}</p>
                       <p className={cn("text-[8px] font-black uppercase tracking-widest", log.status === "Success" ? "text-green-500/40" : "text-red-500/60")}>{log.status}</p>
                    </div>
                 </div>
               ))}
            </div>
            <PremiumButton variant="outline" className="w-full mt-8 border-white/5 text-[10px] uppercase font-black tracking-[0.2em] py-4">Download Full Audit Report (.CSV)</PremiumButton>
         </GlassCard>

         {/* Security Policy Controls */}
         <GlassCard className="p-8 border-white/5 bg-white/[0.01] space-y-8">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/20 flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Policy Governance
            </h3>
            
            <div className="space-y-8">
               {[
                 { label: "Enforce 2FA for Admin", enabled: true },
                 { label: "Allow Multi-Session", enabled: false },
                 { label: "IP Rate Limiting", enabled: true },
                 { label: "Geographic Fencing", enabled: false },
               ].map((policy, i) => (
                 <div key={i} className="flex justify-between items-center">
                    <span className="text-xs font-bold text-white/60">{policy.label}</span>
                    <button className={cn(
                      "w-10 h-5 rounded-full transition-all relative border border-white/10",
                      policy.enabled ? "bg-primary shadow-neon" : "bg-white/5"
                    )}>
                       <div className={cn(
                        "absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full transition-all",
                        policy.enabled ? "right-1 bg-black" : "left-1 bg-white/20"
                       )} />
                    </button>
                 </div>
               ))}
            </div>

            <div className="pt-8 border-t border-white/5">
                <div className="p-4 glass rounded-2xl border-yellow-500/20 bg-yellow-500/5">
                    <div className="flex items-center gap-3 text-yellow-500 mb-2">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Maintenance Mode</span>
                    </div>
                    <p className="text-[9px] text-white/40 leading-relaxed font-light mb-4">Temporarily restrict all non-admin access for scheduled maintenance.</p>
                    <button className="w-full py-2 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 text-[10px] font-black rounded-lg transition-all uppercase tracking-widest border border-yellow-500/20">Initiate Lockout</button>
                </div>
            </div>
         </GlassCard>
      </div>
    </div>
  );
}
