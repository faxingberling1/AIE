"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { 
  Search, 
  MoreVertical, 
  Shield, 
  User, 
  Activity, 
  Ban, 
  CheckCircle2, 
  Clock,
  Filter
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const USERS_DATA = [
  { id: 1, name: "Sarah Jenkins", email: "sarah@design.ai", role: "Creator Pro", status: "Active", lastSeen: "2 mins ago" },
  { id: 2, name: "Marcus Rivera", email: "marcus@synthesis.agency", role: "Enterprise", status: "Active", lastSeen: "Online" },
  { id: 3, name: "Lena Thorne", email: "lena@creators.io", role: "Standard", status: "Suspended", lastSeen: "1 week ago" },
  { id: 4, name: "David Choi", email: "david@vc.com", role: "Creator Pro", status: "Active", lastSeen: "14 mins ago" },
];

export function AdminUserList() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8">
      {/* Table Filters */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
         <div className="relative flex-grow max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input 
              type="text" 
              placeholder="Filter by name, email or role..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/40 border border-white/5 rounded-2xl pl-12 pr-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all font-light"
            />
         </div>
         <div className="flex gap-4">
            <button className="px-6 py-4 glass rounded-2xl border-white/10 text-xs font-black uppercase tracking-widest text-white/40 hover:text-white flex items-center gap-3">
               <Filter className="w-4 h-4" />
               Category
            </button>
            <PremiumButton className="px-10">Export Users</PremiumButton>
         </div>
      </div>

      {/* User Table */}
      <GlassCard className="border-white/5 bg-white/[0.01] overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                     <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">User</th>
                     <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Role</th>
                     <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Status</th>
                     <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Last Synthesis</th>
                     <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">Actions</th>
               </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {USERS_DATA.map((user) => (
                    <tr key={user.id} className="group hover:bg-white/[0.02] transition-colors">
                       <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-white/20 group-hover:text-primary transition-colors">
                                <User className="w-5 h-5" />
                             </div>
                             <div>
                                <p className="font-bold text-sm text-white/80">{user.name}</p>
                                <p className="text-[10px] text-white/20 font-medium">{user.email}</p>
                             </div>
                          </div>
                       </td>
                       <td className="px-8 py-6">
                          <span className={cn(
                            "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border",
                            user.role === "Enterprise" ? "border-primary/20 text-primary" : "border-white/5 text-white/40"
                          )}>
                             {user.role}
                          </span>
                       </td>
                       <td className="px-8 py-6">
                          <div className="flex items-center gap-2">
                             <div className={cn(
                                "w-2 h-2 rounded-full",
                                user.status === "Active" ? "bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]" : "bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]"
                             )} />
                             <span className={cn(
                                "text-[10px] font-black uppercase tracking-widest",
                                user.status === "Active" ? "text-green-400" : "text-red-400"
                             )}>
                                {user.status}
                             </span>
                          </div>
                       </td>
                       <td className="px-8 py-6">
                          <div className="flex items-center gap-2 text-white/40 text-xs">
                             <Clock className="w-3.5 h-3.5" />
                             {user.lastSeen}
                          </div>
                       </td>
                       <td className="px-8 py-6">
                          <div className="flex items-center gap-2">
                             <button className="p-2 hover:bg-white/5 rounded-lg text-white/20 hover:text-primary transition-all">
                                <Shield className="w-4 h-4" />
                             </button>
                             <button className="p-2 hover:bg-white/5 rounded-lg text-white/20 hover:text-red-400 transition-all">
                                <Ban className="w-4 h-4" />
                             </button>
                             <button className="p-2 hover:bg-white/5 rounded-lg text-white/20 hover:text-white transition-all">
                                <MoreVertical className="w-4 h-4" />
                             </button>
                          </div>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </GlassCard>

      {/* Pagination Placeholder */}
      <div className="flex justify-between items-center">
         <p className="text-xs text-white/20">Showing 1 to 4 of 24,502 Users</p>
         <div className="flex gap-2">
            <button className="px-4 py-2 glass rounded-xl border-white/5 text-xs text-white/40 hover:text-white">Previous</button>
            <button className="px-4 py-2 glass rounded-xl border-primary/20 text-xs text-primary">Next</button>
         </div>
      </div>
    </div>
  );
}
