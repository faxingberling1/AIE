"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { AdminAnalytics } from "@/components/admin/AdminAnalytics";
import { AdminUserList } from "@/components/admin/AdminUserList";
import { AdminPricingManager } from "@/components/admin/AdminPricingManager";
import { AdminSecurityPanel } from "@/components/admin/AdminSecurityPanel";
import { ShieldAlert, BarChart3, Users, Settings, Database } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function AdminDashboardPage() {
  const [activeView, setActiveView] = useState("analytics");

  return (
    <DashboardShell>
      <div className="space-y-12">
        {/* Admin Header */}
        <div className="flex justify-between items-end border-b border-white/5 pb-10">
          <div>
            <div className="flex items-center gap-3 text-red-500 mb-4">
               <ShieldAlert className="w-6 h-6" />
               <span className="text-xs font-black uppercase tracking-[0.4em]">Super Admin Control</span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter">SaaS Command Center</h1>
            <p className="text-white/40 mt-3 text-lg font-light">Global platform governance, financial oversight, and system scalability management.</p>
          </div>
          
          <div className="flex gap-2 glass p-1.5 rounded-[1.5rem] border-white/5">
             {[
               { id: "analytics", icon: BarChart3 },
               { id: "users", icon: Users },
               { id: "pricing", icon: Database },
               { id: "settings", icon: Settings },
             ].map((btn) => (
               <button
                 key={btn.id}
                 onClick={() => setActiveView(btn.id)}
                 className={cn(
                    "p-4 rounded-xl transition-all duration-300",
                    activeView === btn.id ? "bg-white/10 text-white" : "text-white/20 hover:text-white/40"
                 )}
               >
                 <btn.icon className="w-5 h-5" />
               </button>
             ))}
          </div>
        </div>

        {activeView === "analytics" && <AdminAnalytics />}
        {activeView === "users" && <AdminUserList />}
        {activeView === "pricing" && <AdminPricingManager />}
        {activeView === "settings" && <AdminSecurityPanel />}
        
        {activeView !== "analytics" && activeView !== "users" && activeView !== "pricing" && activeView !== "settings" && (
            <div className="py-24 text-center glass border-dashed border-white/10 rounded-[3rem]">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                    <Database className="w-8 h-8 text-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white/40 uppercase tracking-widest">Module Segment Initiating</h3>
                <p className="text-sm text-white/20 mt-2">Expansion for {activeView} is currently being synthesized...</p>
            </div>
        )}
      </div>
    </DashboardShell>
  );
}
