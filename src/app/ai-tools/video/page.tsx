"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Video, Upload, Zap, ArrowRight } from "lucide-react";
import { useState } from "react";

const FORMATS = ["Short-form (60s)", "Long-form (10 min)", "Story (15s)", "Reel (30s)", "Podcast Clip"];
const STYLES_V = ["Talking Head", "Cinematic", "Animated", "Documentary", "Social Native"];

export default function AIVideoCreatorPage() {
  const [format, setFormat] = useState("");
  const [styleV, setStyleV] = useState("");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">AI Tools</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">AI Video <span className="text-primary">Creator</span></h1>
          <p className="text-white/40 text-lg mb-12">Transform scripts into studio-quality AI videos with your influencer persona — no camera required.</p>

          {!done ? (
            <form onSubmit={handle} className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 space-y-8">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-4">Video Format</label>
                <div className="flex flex-wrap gap-3">
                  {FORMATS.map(f => (
                    <button type="button" key={f} onClick={() => setFormat(f)}
                      className={`px-4 py-2 rounded-xl border text-sm font-bold transition-all ${format === f ? "border-primary bg-primary/10 text-primary" : "border-white/10 bg-white/5 text-white/50 hover:border-white/20"}`}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-4">Visual Style</label>
                <div className="flex flex-wrap gap-3">
                  {STYLES_V.map(s => (
                    <button type="button" key={s} onClick={() => setStyleV(s)}
                      className={`px-4 py-2 rounded-xl border text-sm font-bold transition-all ${styleV === s ? "border-primary bg-primary/10 text-primary" : "border-white/10 bg-white/5 text-white/50 hover:border-white/20"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-3">Script / Prompt</label>
                <textarea
                  rows={5}
                  value={script}
                  onChange={e => setScript(e.target.value)}
                  placeholder="Enter your video script or a brief prompt. AIE will generate the full video automatically."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-primary/50 transition-all resize-none"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white/50 text-sm font-bold cursor-pointer hover:border-white/20 transition-all">
                  <Upload className="w-4 h-4" /> Upload Audio Track (optional)
                </label>
                <button
                  type="submit"
                  disabled={!format || !styleV || !script || loading}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-black font-bold disabled:opacity-30 hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all"
                >
                  {loading ? <><Zap className="w-4 h-4 animate-spin" /> Rendering…</> : <><Video className="w-4 h-4" /> Create Video</>}
                </button>
              </div>

              <p className="text-white/20 text-xs flex items-center gap-1.5"><Zap className="w-3 h-3 text-primary" /> Costs 120 AI Credits per generation.</p>
            </form>
          ) : (
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-12 text-center">
              <Video className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
              <h2 className="text-3xl font-black mb-3">Your Video is Being Rendered!</h2>
              <p className="text-white/40 mb-8">Your AI video will be ready in your dashboard within 5–10 minutes.</p>
              <div className="flex justify-center gap-4">
                <a href="/dashboard" className="px-6 py-3 rounded-xl bg-primary text-black font-bold flex items-center gap-2">
                  Go to Dashboard <ArrowRight className="w-4 h-4" />
                </a>
                <button onClick={() => { setDone(false); setFormat(""); setStyleV(""); setScript(""); }}
                  className="px-6 py-3 rounded-xl border border-white/10 text-white/60 font-bold hover:text-white transition-colors">
                  Create Another
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
