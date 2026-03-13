"use client";

import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { GlassCard } from "@/components/ui/GlassCard";

const creditData = [
  { name: 'Mon', used: 120, limit: 500 },
  { name: 'Tue', used: 190, limit: 500 },
  { name: 'Wed', used: 440, limit: 500 },
  { name: 'Thu', used: 310, limit: 500 },
  { name: 'Fri', used: 480, limit: 500 },
  { name: 'Sat', used: 220, limit: 500 },
  { name: 'Sun', used: 150, limit: 500 },
];

const courseData = [
  { name: 'AI Models', progress: 85 },
  { name: 'Automation', progress: 45 },
  { name: 'Referrals', progress: 65 },
  { name: 'Agency Ops', progress: 20 },
];

export function OverviewCharts() {
  const RespCont = ResponsiveContainer as any;
  const AChart = AreaChart as any;
  const BChart = BarChart as any;
  const XA = XAxis as any;
  const YA = YAxis as any;
  const CGrid = CartesianGrid as any;
  const TT = Tooltip as any;
  const Ar = Area as any;
  const Br = Bar as any;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
      {/* Credit Usage Over Time */}
      <GlassCard className="p-8 border-white/5 bg-white/[0.01]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-1">AI Credit Usage</h3>
            <p className="text-2xl font-black tracking-tighter text-white">Consumption Curve</p>
          </div>
          <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-black text-primary uppercase tracking-widest">
            Weekly
          </div>
        </div>

        <div className="h-[250px] w-full">
          <RespCont width="100%" height="100%">
            <AChart data={creditData}>
              <defs>
                <linearGradient id="colorUsed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00F2FF" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00F2FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
              <XA 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#ffffff20', fontSize: 10, fontWeight: 700 }} 
                dy={10}
              />
              <YA hide />
              <TT 
                contentStyle={{ 
                  backgroundColor: '#0A0A0A', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  fontSize: '11px',
                  fontWeight: 'bolder'
                }}
                itemStyle={{ color: '#00F2FF' }}
              />
              <Ar 
                type="monotone" 
                dataKey="used" 
                stroke="#00F2FF" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorUsed)" 
                animationDuration={2000}
              />
            </AChart>
          </RespCont>
        </div>
      </GlassCard>

      {/* Course Completion Rates */}
      <GlassCard className="p-8 border-white/5 bg-white/[0.01]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 mb-1">Learning Progress</h3>
            <p className="text-2xl font-black tracking-tighter text-white">Completion Stats</p>
          </div>
          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-white/40 uppercase tracking-widest">
            Active
          </div>
        </div>

        <div className="h-[250px] w-full">
          <RespCont width="100%" height="100%">
            <BChart data={courseData}>
              <CGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
              <XA 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#ffffff20', fontSize: 10, fontWeight: 700 }}
                dy={10}
              />
              <YA hide />
              <TT 
                contentStyle={{ 
                  backgroundColor: '#0A0A0A', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  fontSize: '11px'
                }}
              />
              <Br 
                dataKey="progress" 
                fill="#8B5CF6" 
                radius={[6, 6, 0, 0]} 
                barSize={40}
                animationDuration={1500}
              />
            </BChart>
          </RespCont>
        </div>
      </GlassCard>
    </div>
  );
}
