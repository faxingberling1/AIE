"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/ui/Animations";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointer2,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";

const data = [
  { name: "Mon", views: 4000, reach: 2400 },
  { name: "Tue", views: 3000, reach: 1398 },
  { name: "Wed", views: 2000, reach: 9800 },
  { name: "Thu", views: 2780, reach: 3908 },
  { name: "Fri", views: 1890, reach: 4800 },
  { name: "Sat", views: 2390, reach: 3800 },
  { name: "Sun", views: 3490, reach: 4300 },
];

const stats = [
  { name: "Total Views", value: "124.5K", change: "+12%", trend: "up", icon: Eye },
  { name: "Engagement Rate", value: "8.2%", change: "+2.4%", trend: "up", icon: MousePointer2 },
  { name: "Active Followers", value: "45.2K", change: "-0.8%", trend: "down", icon: Users },
  { name: "Predictive Reach", value: "240K", change: "+18%", trend: "up", icon: TrendingUp },
];

const AreaChartCont = AreaChart as any;
const AreaCont = Area as any;
const XAxisCont = XAxis as any;
const YAxisCont = YAxis as any;
const CartesianGridCont = CartesianGrid as any;
const TooltipCont = Tooltip as any;
const ResponsiveContainerCont = ResponsiveContainer as any;
const LineChartCont = LineChart as any;
const LineCont = Line as any;

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <div className="space-y-12">
        <div className="border-b border-white/5 pb-10">
          <div className="flex items-center gap-3 text-primary mb-4">
             <BarChart3 className="w-6 h-6" />
             <span className="text-xs font-black uppercase tracking-[0.4em]">Neural Insights</span>
          </div>
          <h1 className="text-5xl font-black tracking-tighter">Growth Analytics</h1>
          <p className="text-white/40 mt-3 text-lg font-light max-w-2xl">Monitor your AI Influencer's performance and predictive reach across the neural landscape.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <FadeIn key={stat.name} delay={i * 0.1}>
              <GlassCard className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className={cn(
                    "flex items-center gap-1 text-xs font-bold",
                    stat.trend === "up" ? "text-green-400" : "text-red-400"
                  )}>
                    {stat.change}
                    {stat.trend === "up" ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  </div>
                </div>
                <p className="text-sm text-white/40">{stat.name}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn delay={0.4}>
            <GlassCard className="p-0 overflow-hidden">
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <h3 className="font-bold">Growth Overview</h3>
                <div className="flex gap-2">
                   <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary">
                      <div className="w-2 h-2 rounded-full bg-primary" /> Views
                   </div>
                   <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/20">
                      <div className="w-2 h-2 rounded-full bg-white/20" /> Reach
                   </div>
                </div>
              </div>
              <div className="h-[300px] w-full p-6">
                <ResponsiveContainerCont width="100%" height="100%">
                  <AreaChartCont data={data}>
                    <defs>
                      <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00F2FF" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#00F2FF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGridCont strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                    <XAxisCont 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10 }}
                    />
                    <YAxisCont 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10 }}
                    />
                    <TooltipCont 
                      contentStyle={{ backgroundColor: '#09090b', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      itemStyle={{ color: '#00F2FF' }}
                    />
                    <AreaCont type="monotone" dataKey="views" stroke="#00F2FF" fillOpacity={1} fill="url(#colorViews)" />
                  </AreaChartCont>
                </ResponsiveContainerCont>
              </div>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={0.5}>
            <GlassCard className="p-0 overflow-hidden">
              <div className="p-6 border-b border-white/5">
                <h3 className="font-bold">Conversion Analytics</h3>
              </div>
              <div className="h-[300px] w-full p-6">
                <ResponsiveContainerCont width="100%" height="100%">
                  <LineChartCont data={data}>
                    <CartesianGridCont strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                    <XAxisCont 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10 }}
                    />
                    <YAxisCont 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10 }}
                    />
                    <TooltipCont 
                      contentStyle={{ backgroundColor: '#09090b', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      itemStyle={{ color: '#A855F7' }}
                    />
                    <LineCont type="monotone" dataKey="reach" stroke="#A855F7" strokeWidth={3} dot={{ fill: '#A855F7', strokeWidth: 2, r: 4 }} activeDot={{ r: 6, strokeWidth: 0 }} />
                  </LineChartCont>
                </ResponsiveContainerCont>
              </div>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </DashboardShell>
  );
}

import { cn } from "@/lib/utils";
