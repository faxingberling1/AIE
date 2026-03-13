"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { UserProfile } from "@/components/dashboard/UserProfile";
import { User, Shield } from "lucide-react";

export default function ProfilePage() {
  return (
    <DashboardShell>
      <div className="space-y-12">
        <div className="border-b border-white/5 pb-10">
          <div className="flex items-center gap-3 text-primary mb-4">
             <Shield className="w-6 h-6" />
             <span className="text-xs font-black uppercase tracking-[0.4em]">Identity Shield</span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter">Account Hub</h1>
          <p className="text-white/40 mt-3 text-lg font-light max-w-2xl">Configure your professional creator identity and manage ultra-secure account access.</p>
        </div>

        <UserProfile />
      </div>
    </DashboardShell>
  );
}
