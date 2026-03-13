"use client";

import { Bell, Search, Plus, User as UserIcon, LogOut, Settings, CreditCard, ArrowUpRight } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function DashboardHeader() {
  const { data: session } = useSession();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="sticky top-0 z-[50] w-full bg-black/40 backdrop-blur-xl border-b border-white/5 px-8 py-4 flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-primary transition-colors" />
        <input 
          type="text" 
          placeholder="Search courses, tools, or analytics..." 
          className="w-full bg-white/5 border border-white/5 rounded-2xl pl-12 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary/30 transition-all placeholder:text-white/10"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        {/* Quick Add / Generate */}
        <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-xl text-primary text-[10px] font-black uppercase tracking-widest hover:bg-primary/20 transition-all shadow-[0_0_15px_rgba(0,242,255,0.1)]">
          <Plus className="w-3 h-3" />
          Generate AI
        </button>

        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-white hover:border-white/10 transition-all relative"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#00F2FF]" />
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-4 w-96 bg-[#0A0A0A] border border-white/10 rounded-[2rem] shadow-2xl p-6 overflow-hidden z-[100]"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Neural Notifications</h3>
                  <button className="text-[9px] font-black text-primary uppercase tracking-widest hover:text-white transition-colors">Mark all read</button>
                </div>

                <div className="flex gap-2 mb-6">
                   {["All", "Alerts", "Progress"].map((cat) => (
                     <button key={cat} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all">
                        {cat}
                     </button>
                   ))}
                </div>

                <div className="space-y-1 max-h-[320px] overflow-y-auto custom-scrollbar pr-2">
                  {[
                    { title: "Synthesis Complete", desc: "AI Persona 'Elysia' neural mapping 100% verified.", time: "2m ago", type: "success" },
                    { title: "Credit Depletion", desc: "Synthesis fuel below 15% threshold. Refill recommended.", time: "1h ago", type: "warning" },
                    { title: "New Node Linked", desc: "Referral 'Creator_X' joined your neural network.", time: "5h ago", type: "info" },
                    { title: "Security protocol", desc: "New login detected from Tokyo, Japan.", time: "Yesterday", type: "security" },
                  ].map((notif, i) => (
                    <div key={i} className="p-4 rounded-2xl hover:bg-white/[0.03] transition-colors cursor-pointer group border border-transparent hover:border-white/5 flex gap-4">
                      <div className={cn(
                        "w-2 h-2 rounded-full mt-1.5 shrink-0 shadow-neon-sm",
                        notif.type === "success" ? "bg-green-500" : 
                        notif.type === "warning" ? "bg-amber-500" :
                        notif.type === "security" ? "bg-red-500" : "bg-primary"
                      )} />
                      <div className="space-y-1">
                        <p className="text-xs font-black text-white group-hover:text-primary transition-colors">{notif.title}</p>
                        <p className="text-[11px] text-white/40 leading-relaxed font-medium">{notif.desc}</p>
                        <p className="text-[9px] text-white/10 mt-2 font-black uppercase tracking-widest">{notif.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 mt-4 border-t border-white/5">
                   <button className="w-full py-3 rounded-xl bg-white/5 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                     View All Activity
                     <ArrowUpRight className="w-3 h-3" />
                   </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Profile / Menu */}
        <div className="relative">
          <button 
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full bg-white/5 border border-white/5 hover:border-white/10 transition-all group"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center overflow-hidden">
               {session?.user?.image ? (
                 <img src={session.user.image} alt="Avatar" className="w-full h-full object-cover" />
               ) : (
                 <UserIcon className="w-4 h-4 text-primary" />
               )}
            </div>
            <div className="text-left hidden lg:block">
              <p className="text-xs font-bold text-white leading-none">{session?.user?.name || "Creator"}</p>
              <p className="text-[9px] font-black uppercase tracking-widest text-white/20 mt-1 leading-none">
                {(session?.user as any)?.role || "User"}
              </p>
            </div>
          </button>

          <AnimatePresence>
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-4 w-56 bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl p-2 overflow-hidden"
              >
                {[
                  { label: "Profile", icon: UserIcon, href: "/dashboard/profile" },
                  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
                  { label: "Billing", icon: CreditCard, href: "/dashboard/subscription" },
                ].map((item) => (
                  <button key={item.label} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-white/60 hover:text-white transition-all group">
                    <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                    <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                  </button>
                ))}
                <div className="h-[1px] w-full bg-white/5 my-2" />
                <button 
                  onClick={() => signOut()}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-500/10 text-red-500/60 hover:text-red-500 transition-all group"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Sign Out</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
