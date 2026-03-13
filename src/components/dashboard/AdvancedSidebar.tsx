"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  BookOpen, 
  CreditCard, 
  Users, 
  TrendingUp, 
  Settings, 
  Bell,
  ChevronLeft,
  Search,
  LogOut,
  LayoutDashboard,
  User,
  Zap,
  Ticket,
  Award
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";

const menuItems = [
  { name: "Home", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Courses", icon: BookOpen, href: "/dashboard/courses" },
  { name: "AI Credits", icon: CreditCard, href: "/dashboard/wallet" },
  { name: "Subscriptions", icon: Ticket, href: "/dashboard/subscription" },
  { name: "Referrals", icon: Users, href: "/dashboard/referrals" },
  { name: "Certifications", icon: Award, href: "/dashboard/certifications" },
  { name: "Analytics", icon: TrendingUp, href: "/dashboard/analytics" },
  { name: "Profile", icon: User, href: "/dashboard/profile" },
  { name: "Notifications", icon: Bell, href: "/dashboard/notifications" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export function AdvancedSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 280 }}
      className="h-screen sticky top-0 bg-[#050505] border-r border-white/5 flex flex-col z-[60] transition-all duration-500 ease-in-out relative group"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      {/* Brand Header */}
      <div className="h-24 flex items-center px-6 mb-4 relative z-10">
        <Link href="/dashboard" className="flex items-center group/logo">
          <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover/logo:shadow-neon transition-all duration-500">
            <span className="text-xl font-black text-primary italic">A</span>
          </div>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="ml-4"
            >
              <span className="text-xl font-black tracking-tighter text-white block leading-none">AIE</span>
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60 block mt-1">Platform</span>
            </motion.div>
          )}
        </Link>
      </div>

      {/* Sidebar Content Scroll Area */}
      <div className="flex-grow overflow-y-auto overflow-x-hidden custom-scrollbar px-3 relative z-10">
        <div className="space-y-1.5 pt-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} href={item.href}>
                <div className={cn(
                  "group relative flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-500",
                  isActive 
                    ? "bg-primary/5 text-primary" 
                    : "text-white/30 hover:bg-white/[0.03] hover:text-white"
                )}>
                  <div className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500",
                    isActive ? "bg-primary shadow-neon text-black" : "bg-white/5 group-hover:bg-white/10"
                  )}>
                    <item.icon className="w-4 h-4 shrink-0" />
                  </div>

                  {!isCollapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[13px] font-bold tracking-tight"
                    >
                      {item.name}
                    </motion.span>
                  )}

                  {isActive && !isCollapsed && (
                    <motion.div 
                      layoutId="sidebar-bubble"
                      className="absolute left-0 w-1 h-6 bg-primary rounded-full shadow-[0_0_15px_#00F2FF]"
                    />
                  )}
                  
                  {/* Tooltip for collapsed state */}
                  {isCollapsed && (
                    <div className="absolute left-20 px-3 py-2 bg-[#0A0A0A] border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-all translate-x-4 group-hover:translate-x-0 shadow-2xl z-[100] whitespace-nowrap">
                      {item.name}
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-white/5 relative z-10 bg-black/40 backdrop-blur-md">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/5 py-3 rounded-2xl hover:bg-white/10 transition-all group"
        >
          <motion.div animate={{ rotate: isCollapsed ? 180 : 0 }}>
            <ChevronLeft className="w-4 h-4 text-white/40 group-hover:text-primary transition-all" />
          </motion.div>
          {!isCollapsed && <span className="text-[10px] font-black text-white/40 group-hover:text-white uppercase tracking-widest">Minimize</span>}
        </button>
        
        <button 
          onClick={() => signOut()}
          className="w-full mt-4 flex items-center justify-center gap-3 py-3 text-red-500/40 hover:text-red-500 hover:bg-red-500/5 rounded-2xl transition-all group"
        >
          <LogOut className="w-4 h-4" />
          {!isCollapsed && <span className="text-[10px] font-black uppercase tracking-widest">Sign Out</span>}
        </button>
      </div>
    </motion.aside>
  );
}
