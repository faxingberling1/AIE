"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mic, Play, ArrowRight, Zap } from "lucide-react";
import { useState } from "react";

const VOICES = [
  { id: "nova", name: "Nova", desc: "Confident & Modern Female", sample: "120Hz" },
  { id: "apex", name: "Apex", desc: "Deep & Authoritative Male", sample: "80Hz" },
  { id: "sage", name: "Sage", desc: "Calm & Trustworthy Neutral", sample: "100Hz" },
  { id: "rio", name: "Rio", desc: "Energetic & Youthful", sample: "140Hz" },
];

const LANGUAGES = ["English", "Spanish", "French", "German", "Portuguese", "Arabic", "Japanese"];

export default function AIVoiceGeneratorPage() {
  const [voice, setVoice] = useState("");
  const [lang, setLang] = useState("English");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setDone(true); }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">AI Tools</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">AI Voice <span className="text-primary">Generator</span></h1>
          <p className="text-white/40 text-lg mb-12">Turn any text into ultra-realistic AI voiceovers — in seconds, in any language.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Voice selection */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-5">Choose Voice</h2>
              <div className="space-y-3">
                {VOICES.map(v => (
                  <button
                    key={v.id}
                    onClick={() => setVoice(v.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 text-left ${voice === v.id ? "border-primary bg-primary/10" : "border-white/10 bg-white/5 hover:border-white/20"}`}
                  >
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${voice === v.id ? "border-primary bg-primary/20 text-primary" : "border-white/10 bg-white/5 text-white/40"}`}>
                      <Mic className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className={`font-bold text-sm ${voice === v.id ? "text-primary" : "text-white"}`}>{v.name}</p>
                      <p className="text-white/40 text-xs">{v.desc}</p>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Play className="w-3 h-3 text-white/60 fill-white/60" />
                    </button>
                  </button>
                ))}
              </div>
            </div>

            {/* Text & Generate */}
            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Language</h2>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map(l => (
                    <button key={l} onClick={() => setLang(l)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${lang === l ? "border-primary bg-primary/10 text-primary" : "border-white/10 bg-white/5 text-white/40 hover:border-white/20"}`}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handle} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Script</h2>
                <textarea
                  rows={6}
                  value={text}
                  onChange={e => setText(e.target.value)}
                  placeholder="Enter the text you want to convert to voice…"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-primary/50 transition-all resize-none"
                />
                {!done ? (
                  <button
                    type="submit"
                    disabled={!voice || !text || loading}
                    className="w-full py-4 rounded-xl bg-primary text-black font-bold flex items-center justify-center gap-2 disabled:opacity-30 hover:shadow-[0_0_30px_rgba(0,242,255,0.5)] transition-all"
                  >
                    {loading ? <><Zap className="w-4 h-4 animate-spin" /> Generating</> : <><Mic className="w-4 h-4" /> Generate Voice</>}
                  </button>
                ) : (
                  <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 flex items-center justify-between">
                    <div>
                      <p className="text-primary font-bold text-sm">✓ Audio Ready</p>
                      <p className="text-white/40 text-xs">voice_{voice}_output.mp3</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 rounded-lg bg-primary text-black font-bold text-xs">Download</button>
                      <button onClick={() => { setDone(false); setText(""); }} className="px-4 py-2 rounded-lg border border-white/10 text-white/50 font-bold text-xs hover:text-white transition-colors">New</button>
                    </div>
                  </div>
                )}
                <p className="text-white/20 text-xs flex items-center gap-1.5"><Zap className="w-3 h-3 text-primary" /> Costs 30 AI Credits per generation.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
