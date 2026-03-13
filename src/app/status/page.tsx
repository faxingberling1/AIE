"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

const SERVICES = [
  { name: "AI Influencer Generator", status: "operational", uptime: "99.98%", latency: "420ms" },
  { name: "AI Video Creator", status: "operational", uptime: "99.95%", latency: "650ms" },
  { name: "AI Voice Generator", status: "operational", uptime: "99.99%", latency: "210ms" },
  { name: "Content Automation Engine", status: "degraded", uptime: "99.80%", latency: "1.2s" },
  { name: "Course Delivery Network", status: "operational", uptime: "99.97%", latency: "180ms" },
  { name: "Authentication Services", status: "operational", uptime: "100%", latency: "95ms" },
  { name: "Payment Processing", status: "operational", uptime: "100%", latency: "300ms" },
  { name: "AI Credits API", status: "operational", uptime: "99.96%", latency: "150ms" },
];

const INCIDENTS = [
  {
    date: "Mar 10, 2026",
    title: "Content Automation Engine — Elevated Latency",
    status: "Investigating",
    detail: "We are seeing elevated response times from the Content Automation Engine. AI Influencer generation and other services are not affected. Our team is actively investigating.",
    severity: "degraded",
  },
  {
    date: "Mar 8, 2026",
    title: "AI Video Creator — Scheduled Maintenance",
    status: "Resolved",
    detail: "Scheduled maintenance completed successfully. All services fully restored at 03:15 UTC.",
    severity: "maintenance",
  },
  {
    date: "Mar 1, 2026",
    title: "AI Voice Generator — Minor Disruption",
    status: "Resolved",
    detail: "A minor disruption affecting voice synthesis was resolved within 18 minutes. No data was lost.",
    severity: "minor",
  },
];

const statusConfig: Record<string, { icon: React.ReactNode; label: string; color: string; dot: string }> = {
  operational: {
    icon: <CheckCircle className="w-4 h-4" />,
    label: "Operational",
    color: "text-green-400",
    dot: "bg-green-400",
  },
  degraded: {
    icon: <AlertCircle className="w-4 h-4" />,
    label: "Degraded Performance",
    color: "text-yellow-400",
    dot: "bg-yellow-400",
  },
  outage: {
    icon: <AlertCircle className="w-4 h-4" />,
    label: "Outage",
    color: "text-red-400",
    dot: "bg-red-400",
  },
};

const incidentColor: Record<string, string> = {
  degraded: "border-yellow-400/30 bg-yellow-400/5",
  maintenance: "border-blue-400/30 bg-blue-400/5",
  minor: "border-white/10 bg-white/[0.02]",
};

export default function StatusPage() {
  const allOperational = SERVICES.every(s => s.status === "operational");

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Platform Health</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">System <span className="text-primary">Status</span></h1>
            {allOperational ? (
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-green-400/30 bg-green-400/10 text-green-400 font-bold text-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                All Systems Operational
              </div>
            ) : (
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 font-bold text-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse" />
                Partial Degradation Detected
              </div>
            )}
          </div>

          {/* Uptime Bar */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden mb-8">
            <div className="p-6 border-b border-white/5">
              <h2 className="font-bold text-white text-sm uppercase tracking-widest">30-Day Uptime</h2>
            </div>
            <div className="p-6 flex gap-1">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-8 rounded-sm ${i === 22 || i === 9 ? "bg-yellow-400/60" : "bg-green-400/60"} hover:opacity-100 opacity-80 transition-opacity cursor-pointer`}
                  title={`Day ${i + 1}`}
                />
              ))}
            </div>
            <div className="px-6 pb-4 flex justify-between text-white/30 text-xs">
              <span>30 days ago</span>
              <span>Today</span>
            </div>
          </div>

          {/* Services Table */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden mb-10">
            <div className="p-6 border-b border-white/5">
              <h2 className="font-bold text-white text-sm uppercase tracking-widest">Services</h2>
            </div>
            <div className="divide-y divide-white/5">
              {SERVICES.map(svc => {
                const cfg = statusConfig[svc.status];
                return (
                  <div key={svc.name} className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${cfg.dot} ${svc.status !== "operational" ? "animate-pulse" : ""}`} />
                      <span className="text-white/80 text-sm font-medium">{svc.name}</span>
                    </div>
                    <div className="flex items-center gap-6 text-xs">
                      <span className="text-white/30 hidden md:block">Uptime: <span className="text-white/60">{svc.uptime}</span></span>
                      <span className="text-white/30 hidden md:block">Latency: <span className="text-white/60">{svc.latency}</span></span>
                      <div className={`flex items-center gap-1.5 font-semibold ${cfg.color}`}>
                        {cfg.icon}
                        {cfg.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Incidents */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Recent Incidents</h2>
            <div className="space-y-4">
              {INCIDENTS.map(inc => (
                <div key={inc.title} className={`rounded-2xl border p-6 ${incidentColor[inc.severity]}`}>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-bold text-white text-sm">{inc.title}</h3>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded border flex-shrink-0 ${
                      inc.status === "Resolved" ? "border-green-400/30 text-green-400" : "border-yellow-400/30 text-yellow-400"
                    }`}>
                      {inc.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-white/30 text-xs mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    {inc.date}
                  </div>
                  <p className="text-white/40 text-sm">{inc.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
