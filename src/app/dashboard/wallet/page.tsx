"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CreditCard, 
  History, 
  Zap, 
  TrendingUp, 
  TrendingDown,
  ArrowUpRight,
  Plus,
  Filter,
  Download,
  Search,
  ChevronDown,
  Info,
  Clock
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { CreditWallet } from "@/components/dashboard/CreditWallet";
import { TopUpModal } from "@/components/dashboard/TopUpModal";
import { CreditSimulator } from "@/components/dashboard/CreditSimulator";

const transactions = [
  { id: "tx_1289", type: "Usage", service: "AI Influencer Synthesis", amount: -25, date: "2024-03-12", status: "Completed" },
  { id: "tx_1290", type: "Top Up", service: "Platform Credits", amount: 200, date: "2024-03-10", status: "Completed" },
  { id: "tx_1291", type: "Usage", service: "Video Generation", amount: -40, date: "2024-03-09", status: "Completed" },
  { id: "tx_1292", type: "Usage", service: "Voice Cloning", amount: -15, date: "2024-03-08", status: "Completed" },
  { id: "tx_1293", type: "Referral", service: "Bonus Credits", amount: 50, date: "2024-03-07", status: "Completed" },
];

export default function WalletPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentCredits = 370;
  const totalLimit = 500;
  const percentage = (currentCredits / totalLimit) * 100;

  return (
    <DashboardShell>
      <div className="space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <CreditCard className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Internal Economy</span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-white">AI Credit <span className="text-primary/80 text-stroke-sm">Wallet</span></h1>
            <p className="text-white/40 max-w-md italic">Manage your synthesis fuel and track neural generation costs.</p>
          </div>

          <PremiumButton size="lg" className="px-10 shadow-neon-strong" onClick={() => setIsModalOpen(true)}>
            <Plus className="w-5 h-5 mr-3" />
            Buy Credits
          </PremiumButton>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Balance Ring */}
          <GlassCard className="lg:col-span-1 p-8 border-primary/20 bg-primary/[0.01] flex flex-col items-center justify-center relative group min-h-[340px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative w-52 h-52 mb-6">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="104"
                  cy="104"
                  r="96"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-white/5"
                />
                <motion.circle
                  cx="104"
                  cy="104"
                  r="96"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray={603.18}
                  initial={{ strokeDashoffset: 603.18 }}
                  animate={{ strokeDashoffset: 603.18 - (603.18 * percentage) / 100 }}
                  transition={{ duration: 2, ease: "circOut" }}
                  strokeLinecap="round"
                  className="text-primary drop-shadow-[0_0_12px_rgba(0,242,255,0.4)]"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-5xl font-black text-white"
                >
                  {currentCredits}
                </motion.span>
                <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mt-1">Available CR</span>
              </div>
            </div>

            <div className="text-center space-y-1 relative z-10">
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Total Capacity: {totalLimit}</p>
              <div className="flex items-center gap-2 justify-center text-primary">
                 <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-neon" />
                 <span className="text-[9px] font-black uppercase tracking-widest">Auto-Refill On</span>
              </div>
            </div>
          </GlassCard>

          {/* Flow Analytics */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
             <GlassCard className="p-8 border-white/5 flex flex-col justify-between group">
                <div>
                   <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-green-500/10 rounded-2xl text-green-400 group-hover:bg-green-500/20 transition-all">
                         <TrendingUp className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                         <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Inflow Velocity</p>
                         <p className="text-sm font-black text-green-400">+12.5%</p>
                      </div>
                   </div>
                   <h3 className="text-4xl font-black text-white tracking-tighter mb-2">850.00</h3>
                   <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">Cumulative Credits Acquired</p>
                </div>
                <div className="pt-8 border-t border-white/5 flex items-center justify-between mt-8">
                   <span className="text-[9px] font-black text-white/20 uppercase">Last Load: 2 days ago</span>
                   <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-primary transition-all" />
                </div>
             </GlassCard>

             <GlassCard className="p-8 border-white/5 flex flex-col justify-between group">
                <div>
                   <div className="flex items-center justify-between mb-6">
                      <div className="p-3 bg-red-500/10 rounded-2xl text-red-400 group-hover:bg-red-500/20 transition-all">
                         <TrendingDown className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                         <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Burn Velocity</p>
                         <p className="text-sm font-black text-red-400">-4.2%</p>
                      </div>
                   </div>
                   <h3 className="text-4xl font-black text-white tracking-tighter mb-2">480.00</h3>
                   <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">Net Neural Consumption</p>
                </div>
                <div className="pt-8 border-t border-white/5 flex items-center justify-between mt-8">
                   <span className="text-[9px] font-black text-white/20 uppercase">Active Cycles: 12</span>
                   <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-primary transition-all" />
                </div>
             </GlassCard>
          </div>
        </div>

        {/* Transaction History Workspace */}
        <div className="space-y-6 pt-4">
           <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1">
                 <h3 className="text-2xl font-black tracking-tight text-white flex items-center gap-3">
                    <History className="w-6 h-6 text-primary" />
                    Ledger <span className="text-white/40 font-light">History</span>
                 </h3>
                 <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Chronological Neural logs</p>
              </div>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                 <div className="relative flex-grow sm:w-72">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-primary transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Filter by Reference ID..." 
                      className="w-full bg-white/5 border border-white/5 rounded-2xl pl-12 pr-4 py-3 text-xs focus:outline-none focus:border-primary/30 transition-all text-white/60 placeholder:text-white/10"
                    />
                 </div>
                 <button className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white hover:border-white/10 transition-all">
                    <Filter className="w-3 h-3" />
                    Sort
                 </button>
                 <button className="p-3 bg-white/5 border border-white/5 rounded-2xl text-white/40 hover:text-white hover:border-white/10 transition-all">
                    <Download className="w-5 h-5" />
                 </button>
              </div>
           </div>

           <GlassCard className="p-0 overflow-hidden border-white/5 divide-y divide-white/5">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="bg-white/[0.02]">
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/20 text-center">Operation</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/20">Resource Reference</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/20">Timestamp</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/20 text-right">Delta CR</th>
                          <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-white/20 text-center">Status</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                       {transactions.map((tx) => (
                         <tr key={tx.id} className="hover:bg-white/[0.02] transition-colors group">
                            <td className="px-8 py-5">
                               <div className={cn(
                                 "w-16 mx-auto py-1.5 rounded-xl text-[9px] font-black uppercase text-center border",
                                 tx.type === "Usage" 
                                   ? "bg-red-500/10 text-red-400 border-red-500/20" 
                                   : "bg-green-500/10 text-green-400 border-green-500/20"
                               )}>
                                  {tx.type}
                               </div>
                            </td>
                            <td className="px-8 py-5">
                               <p className="text-xs font-bold text-white/80 transition-colors group-hover:text-primary">{tx.service}</p>
                               <p className="text-[10px] text-white/20 font-mono tracking-tighter mt-1">{tx.id}</p>
                            </td>
                            <td className="px-8 py-5">
                               <div className="flex items-center gap-2 text-xs font-bold text-white/40">
                                  <Clock className="w-3 h-3" />
                                  {tx.date}
                               </div>
                            </td>
                            <td className={cn(
                              "px-8 py-5 text-sm font-black text-right",
                              tx.amount > 0 ? "text-green-400" : "text-red-400"
                            )}>
                               {tx.amount > 0 ? `+${tx.amount}` : tx.amount} <span className="text-[10px] opacity-40">CR</span>
                            </td>
                            <td className="px-8 py-5">
                               <div className="flex items-center justify-center gap-2.5">
                                  <div className="w-2 h-2 bg-green-500 rounded-full animate-glow-slow" />
                                  <span className="text-[10px] font-black uppercase text-white/40 tracking-widest">{tx.status}</span>
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
              <div className="p-6 bg-white/[0.01] flex justify-center">
                 <button className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 hover:text-primary transition-all flex items-center gap-3 group/stmt">
                    Access Neural Cloud Statements
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/stmt:-translate-y-1 group-hover/stmt:translate-x-1" />
                 </button>
              </div>
           </GlassCard>
        </div>

        {/* Credit Simulator Workspace */}
        <section className="pt-12">
            <CreditSimulator />
        </section>

        <TopUpModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </DashboardShell>
  );
}
