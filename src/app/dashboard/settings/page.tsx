"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { UserProfile } from "@/components/dashboard/UserProfile";
import { Settings, Shield } from "lucide-react";

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div className="space-y-12">
        <div className="border-b border-white/5 pb-10">
          <div className="flex items-center gap-3 text-primary mb-4">
             <Settings className="w-6 h-6" />
             <span className="text-xs font-black uppercase tracking-[0.4em]">Protocol Management</span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter">System Settings</h1>
          <p className="text-white/40 mt-3 text-lg font-light max-w-2xl">Configure your neural interface parameters, communication protocols, and security layers.</p>
        </div>

        <UserProfile />
      </div>
    </DashboardShell>
  );
}
