"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/Animations";
import { 
  Users, 
  BookOpen, 
  CreditCard, 
  Activity, 
  Search,
  MoreVertical,
  Plus
} from "lucide-react";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { cn } from "@/lib/utils";

const adminStats = [
  { name: "Total Revenue", value: "$45,290", icon: Activity, color: "text-green-400" },
  { name: "Total Users", value: "1,204", icon: Users, color: "text-blue-400" },
  { name: "Course Enrollments", value: "3,482", icon: BookOpen, color: "text-purple-400" },
  { name: "Active Credits", value: "245k", icon: CreditCard, color: "text-primary" },
];

export default function AdminDashboardPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold">Admin Control Center</h1>
            <p className="text-white/40 mt-1">Full platform overview and management.</p>
          </div>
          <div className="flex gap-4">
            <PremiumButton variant="glass" size="sm">Download Report</PremiumButton>
            <PremiumButton size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              New Course
            </PremiumButton>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminStats.map((stat, i) => (
            <FadeIn key={stat.name} delay={i * 0.1}>
              <GlassCard className="flex items-center gap-4">
                <div className={cn("p-3 rounded-xl bg-white/5", stat.color)}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-white/40">{stat.name}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        {/* Recent Users Table */}
        <FadeIn delay={0.4}>
          <div className="space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Recent User Activity
            </h2>
            <div className="glass rounded-2xl overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-white/5 border-b border-white/10 text-white/40 text-sm">
                  <tr>
                    <th className="px-6 py-4 font-medium">User</th>
                    <th className="px-6 py-4 font-medium">Role</th>
                    <th className="px-6 py-4 font-medium">Plan</th>
                    <th className="px-6 py-4 font-medium">Credits</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { name: "John Doe", email: "john@example.com", role: "USER", plan: "Creator", credits: 500 },
                    { name: "Sarah Smith", email: "sarah@example.com", role: "USER", plan: "Business", credits: 2000 },
                    { name: "Admin One", email: "admin@aie.com", role: "ADMIN", plan: "Enterprise", credits: "∞" },
                  ].map((user, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="font-medium">{user.name}</div>
                        <div className="text-xs text-white/40">{user.email}</div>
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-white/60">{user.role}</td>
                      <td className="px-6 py-4 text-sm">{user.plan}</td>
                      <td className="px-6 py-4 text-sm text-primary font-bold">{user.credits}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 hover:text-primary transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
        {/* Management Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn delay={0.5}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Course Management
            </h2>
            <div className="space-y-4">
              {[
                { name: "AI Influencer Masterclass", status: "Published", revenue: "$12.4k" },
                { name: "Social Media Automation", status: "Published", revenue: "$8.2k" },
                { name: "Brand Voice Training", status: "Draft", revenue: "$0" },
              ].map((c, i) => (
                <GlassCard key={i} className="flex items-center justify-between p-4 border-white/5">
                  <div>
                    <p className="font-medium">{c.name}</p>
                    <span className={cn(
                      "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full",
                      c.status === "Published" ? "bg-green-500/10 text-green-400" : "bg-white/10 text-white/40"
                    )}>{c.status}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-primary">{c.revenue}</p>
                    <button className="text-[10px] text-white/40 hover:text-white transition-colors">Edit Course</button>
                  </div>
                </GlassCard>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              Subscription Plans
            </h2>
            <div className="space-y-4">
              {[
                { name: "Starter", active: "452 users", price: "$49/mo" },
                { name: "Creator", active: "612 users", price: "$99/mo" },
                { name: "Business", active: "140 users", price: "$249/mo" },
              ].map((p, i) => (
                <GlassCard key={i} className="flex items-center justify-between p-4 border-white/5">
                  <div>
                    <p className="font-medium">{p.name}</p>
                    <span className="text-xs text-white/40">{p.active}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-primary">{p.price}</p>
                    <button className="text-[10px] text-white/40 hover:text-white transition-colors">Manage Plan</button>
                  </div>
                </GlassCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </DashboardShell>
  );
}
