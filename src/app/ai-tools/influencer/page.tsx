"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Bot, Zap, Sparkles, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const STYLES = ["Photorealistic", "Anime", "3D CGI", "Illustrated", "Cyberpunk"];
const NICHES = ["Fashion", "Fitness", "Tech", "Finance", "Gaming", "Food & Travel", "Lifestyle"];

export default function AIInfluencerGeneratorPage() {
  const [step, setStep] = useState(1);
  const [style, setStyle] = useState("");
  const [niche, setNiche] = useState("");
  const [name, setName] = useState("");
  const [generating, setGenerating] = useState(false);
  const [done, setDone] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => { setGenerating(false); setDone(true); }, 2800);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">AI Tools</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
              Generate AI <span className="text-primary">Influencer</span>
            </h1>
            <p className="text-white/40 text-lg">Create a photorealistic AI persona in minutes. Fully customizable, endlessly scalable.</p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center gap-3 mb-10">
            {[1, 2, 3].map(s => (
              <div key={s} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-all duration-300 ${step >= s ? "bg-primary border-primary text-black" : "border-white/10 text-white/30"}`}>
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                {s < 3 && <div className={`h-px w-12 transition-all duration-300 ${step > s ? "bg-primary" : "bg-white/10"}`} />}
              </div>
            ))}
            <span className="text-white/30 text-xs ml-2">{["Style & Look", "Niche & Persona", "Generate"][step - 1]}</span>
          </div>

          {!done ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
              {step === 1 && (
                <div>
                  <h2 className="font-bold text-xl mb-6">Choose Visual Style</h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
                    {STYLES.map(s => (
                      <button
                        key={s}
                        onClick={() => setStyle(s)}
                        className={`p-4 rounded-2xl border text-sm font-bold transition-all duration-200 ${style === s ? "border-primary bg-primary/10 text-primary" : "border-white/10 bg-white/5 text-white/50 hover:border-white/20"}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <button disabled={!style} onClick={() => setStep(2)} className="px-8 py-3 rounded-xl bg-primary text-black font-bold disabled:opacity-30 transition-all">
                    Next →
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="font-bold text-xl mb-6">Choose Niche & Set Name</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {NICHES.map(n => (
                      <button
                        key={n}
                        onClick={() => setNiche(n)}
                        className={`p-3 rounded-xl border text-sm font-bold transition-all duration-200 ${niche === n ? "border-primary bg-primary/10 text-primary" : "border-white/10 bg-white/5 text-white/50 hover:border-white/20"}`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                  <div className="mb-8">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-2">Influencer Name (optional)</label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. NOVA, LUNA, APEX…"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-primary/50 transition-all max-w-xs"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(1)} className="px-6 py-3 rounded-xl border border-white/10 text-white/50 hover:text-white font-bold transition-all">← Back</button>
                    <button disabled={!niche} onClick={() => setStep(3)} className="px-8 py-3 rounded-xl bg-primary text-black font-bold disabled:opacity-30 transition-all">Next →</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="font-bold text-xl mb-6">Review & Generate</h2>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-8 space-y-3">
                    <div className="flex justify-between text-sm"><span className="text-white/40">Style</span><span className="font-bold">{style}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-white/40">Niche</span><span className="font-bold">{niche}</span></div>
                    {name && <div className="flex justify-between text-sm"><span className="text-white/40">Name</span><span className="font-bold">{name}</span></div>}
                    <div className="flex justify-between text-sm"><span className="text-white/40">Credit Cost</span><span className="text-primary font-bold">50 Credits</span></div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setStep(2)} className="px-6 py-3 rounded-xl border border-white/10 text-white/50 hover:text-white font-bold transition-all">← Back</button>
                    <button
                      onClick={handleGenerate}
                      disabled={generating}
                      className="px-8 py-3 rounded-xl bg-primary text-black font-bold hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all flex items-center gap-2 disabled:opacity-70"
                    >
                      {generating ? (
                        <><Sparkles className="w-4 h-4 animate-spin" /> Generating…</>
                      ) : (
                        <><Bot className="w-4 h-4" /> Generate Influencer</>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-primary animate-pulse" />
              </div>
              <h2 className="text-3xl font-black mb-3">Your AI Influencer is Ready!</h2>
              <p className="text-white/40 mb-8">{name || "Your influencer"} has been created and added to your dashboard.</p>
              <div className="flex justify-center gap-4">
                <a href="/dashboard" className="px-6 py-3 rounded-xl bg-primary text-black font-bold flex items-center gap-2">
                  View in Dashboard <ArrowRight className="w-4 h-4" />
                </a>
                <button onClick={() => { setDone(false); setStep(1); setStyle(""); setNiche(""); setName(""); }}
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
