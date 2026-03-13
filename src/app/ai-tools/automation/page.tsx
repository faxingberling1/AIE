"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Zap, Plus, Trash2, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const PLATFORMS = ["Instagram", "TikTok", "Twitter/X", "YouTube", "LinkedIn", "Facebook"];
const TRIGGERS = ["Every Day", "Every 3 Days", "Weekly", "Monthly", "On New Follower"];

type Workflow = { platform: string; trigger: string; action: string };

export default function ContentAutomationPage() {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [platform, setPlatform] = useState(PLATFORMS[0]);
  const [trigger, setTrigger] = useState(TRIGGERS[0]);
  const [action, setAction] = useState("");
  const [saved, setSaved] = useState(false);

  const addWorkflow = () => {
    if (!action.trim()) return;
    setWorkflows(prev => [...prev, { platform, trigger, action }]);
    setAction("");
    setSaved(false);
  };

  const removeWorkflow = (i: number) => setWorkflows(prev => prev.filter((_, idx) => idx !== i));

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">AI Tools</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">Content <span className="text-primary">Automation</span></h1>
          <p className="text-white/40 text-lg mb-12">Build automated content pipelines for your AI influencer. Set it and forget it.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Builder */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-5">
              <h2 className="font-bold text-lg mb-2">Build a Workflow</h2>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-3">Platform</label>
                <div className="flex flex-wrap gap-2">
                  {PLATFORMS.map(p => (
                    <button key={p} onClick={() => setPlatform(p)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${platform === p ? "border-primary bg-primary/10 text-primary" : "border-white/10 bg-white/5 text-white/40 hover:border-white/20"}`}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-3">Trigger</label>
                <div className="flex flex-wrap gap-2">
                  {TRIGGERS.map(t => (
                    <button key={t} onClick={() => setTrigger(t)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${trigger === t ? "border-primary bg-primary/10 text-primary" : "border-white/10 bg-white/5 text-white/40 hover:border-white/20"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-2">Action / Content Prompt</label>
                <textarea
                  rows={3}
                  value={action}
                  onChange={e => setAction(e.target.value)}
                  placeholder="e.g. Post a motivational fitness reel featuring APEX on Instagram"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-primary/50 transition-all resize-none"
                />
              </div>

              <button onClick={addWorkflow} className="w-full py-3 rounded-xl bg-primary text-black font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all">
                <Plus className="w-4 h-4" /> Add to Pipeline
              </button>
            </div>

            {/* Pipeline Preview */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <h2 className="font-bold text-lg mb-4">Your Pipeline</h2>
              {workflows.length === 0 ? (
                <div className="text-center py-12 text-white/20">
                  <Zap className="w-10 h-10 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">No workflows yet. Build one on the left.</p>
                </div>
              ) : (
                <div className="space-y-3 mb-6">
                  {workflows.map((wf, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-2xl border border-white/10 bg-white/5">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-primary text-xs font-bold">{wf.platform}</span>
                          <span className="text-white/20 text-xs">·</span>
                          <span className="text-white/40 text-xs">{wf.trigger}</span>
                        </div>
                        <p className="text-white/70 text-sm">{wf.action}</p>
                      </div>
                      <button onClick={() => removeWorkflow(i)} className="text-white/20 hover:text-red-400 transition-colors mt-0.5">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {workflows.length > 0 && (
                saved ? (
                  <div className="flex items-center gap-2 text-green-400 font-bold text-sm py-3">
                    <CheckCircle className="w-5 h-5" /> Pipeline Saved & Active!
                  </div>
                ) : (
                  <button onClick={() => setSaved(true)}
                    className="w-full py-3 rounded-xl bg-primary text-black font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all">
                    Activate Pipeline <ArrowRight className="w-4 h-4" />
                  </button>
                )
              )}
              <p className="text-white/20 text-xs mt-3 flex items-center gap-1.5"><Zap className="w-3 h-3 text-primary" /> Each automation run costs 15 AI Credits.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
