"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { FadeIn } from "@/components/ui/Animations";
import { 
  Play, 
  SkipForward, 
  SkipBack, 
  FileText, 
  CheckCircle, 
  Settings, 
  Subtitles, 
  Bookmark, 
  Maximize, 
  Volume2,
  ListMusic,
  ChevronDown,
  Save,
  Download,
  Trash2
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const TRANSCRIPT_DATA = [
  { time: "00:00", text: "Welcome to the Advanced Model Training module." },
  { time: "00:45", text: "In this session, we will explore the depths of skin texture synthesis." },
  { time: "02:15", text: "Notice how the diffusion parameters affect the pores and subtle lighting." },
];

import { NotesSystem } from "./NotesSystem";

export function CoursePlayer() {
  const [activeModule, setActiveModule] = useState(1);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 noise-bg p-2">
      {/* Video Player Area */}
      <div className="lg:col-span-3 space-y-8">
        <div className="aspect-video glass rounded-[2rem] overflow-hidden relative group border-white/5 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent flex items-center justify-center">
            <div className="w-24 h-24 rounded-full glass border border-primary/20 text-primary flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-neon animate-glow">
              <Play className="w-10 h-10 fill-current ml-1" />
            </div>
          </div>
          
          {/* Advanced Controls */}
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-white/10 rounded-full cursor-pointer relative group/progress">
              <div className="absolute left-0 top-0 h-full w-2/5 bg-primary shadow-neon" />
              <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <SkipBack className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                <Play className="w-6 h-6 cursor-pointer hover:text-primary transition-colors fill-current text-white" />
                <SkipForward className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                <div className="flex items-center gap-2 ml-4">
                   <Volume2 className="w-5 h-5 text-white/60" />
                   <div className="w-20 h-1 bg-white/10 rounded-full">
                      <div className="w-3/4 h-full bg-white/40" />
                   </div>
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-white/40">12:45 / 35:20</span>
              </div>

              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setShowTranscript(!showTranscript)}
                  className={cn("text-[10px] font-black uppercase tracking-widest transition-colors", showTranscript ? "text-primary" : "text-white/40 hover:text-white")}
                >
                  Transcript
                </button>
                <div className="relative group/speed">
                  <button className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white">
                    {playbackSpeed}x
                  </button>
                  <div className="absolute bottom-full right-0 mb-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 hidden group-hover/speed:block min-w-[80px]">
                    {[0.5, 1.0, 1.5, 2.0].map(speed => (
                      <button 
                        key={speed}
                        onClick={() => setPlaybackSpeed(speed)}
                        className="block w-full text-left px-3 py-1.5 text-[10px] font-bold hover:bg-white/10 rounded-lg"
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>
                </div>
                <Subtitles className="w-5 h-5 text-white/40 hover:text-white cursor-pointer" />
                <Settings className="w-5 h-5 text-white/40 hover:text-white cursor-pointer" />
                <Maximize className="w-5 h-5 text-white/40 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-start pt-4 border-b border-white/5 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-primary font-black text-xs uppercase tracking-widest">Currently Watching</span>
              <div className="h-px w-12 bg-primary/20" />
            </div>
            <h1 className="text-4xl font-black tracking-tighter">Module {activeModule}: DNA Structure Synthesis</h1>
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-3xl">
              Learn the mathematical ratios behind realistic facial structures and how to translate them into diffusion prompts that maintain 100% character consistency across frames.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setBookmarked(!bookmarked)}
              className={cn(
                "w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center transition-all",
                bookmarked ? "text-primary border-primary/40 shadow-neon" : "text-white/40 hover:text-white"
              )}
            >
              <Bookmark className={cn("w-5 h-5", bookmarked && "fill-current")} />
            </button>
            <PremiumButton variant="outline" className="px-8 border-white/10">Mark Complete</PremiumButton>
          </div>
        </div>

        {/* Dynamic Content Tabs (Transcript / Notes) */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {showTranscript && (
            <FadeIn>
              <GlassCard className="p-8 border-white/5 bg-white/[0.01]">
                 <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-6 text-primary flex items-center gap-2">
                  <ListMusic className="w-4 h-4" />
                  Live Transcript
                 </h3>
                 <div className="space-y-6">
                   {TRANSCRIPT_DATA.map((item, i) => (
                     <div key={i} className="flex gap-6 group cursor-pointer hover:bg-white/5 p-3 rounded-xl transition-all">
                        <span className="text-[10px] font-mono text-primary/40 group-hover:text-primary font-bold">{item.time}</span>
                        <p className="text-sm text-white/60 group-hover:text-white leading-relaxed">{item.text}</p>
                     </div>
                   ))}
                 </div>
              </GlassCard>
            </FadeIn>
          )}
          
          <FadeIn delay={0.1}>
            <NotesSystem lessonId={activeModule.toString()} />
          </FadeIn>
        </div>
      </div>

      {/* Course Content Sidebar Upgrade */}
      <div className="lg:col-span-1 space-y-8 pl-4">
        <div className="flex items-center justify-between mb-2">
           <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white/40">Syllabus</h2>
           <span className="text-[10px] font-bold text-primary">24% COMPLETE</span>
        </div>
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mb-8">
           <div className="w-1/4 h-full bg-primary shadow-neon" />
        </div>
        
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="space-y-2">
              <button
                onClick={() => setActiveModule(num)}
                className={cn(
                  "w-full text-left p-5 rounded-2xl transition-all duration-300 group flex items-center justify-between border",
                  activeModule === num ? "glass border-primary/20 bg-primary/5 shadow-neon" : "border-transparent bg-white/[0.02] hover:bg-white/5"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-8 h-8 rounded-xl border flex items-center justify-center text-[10px] font-black tracking-tighter transition-all",
                    activeModule === num ? "border-primary text-primary shadow-neon" : "border-white/10 text-white/20 group-hover:border-white/30"
                  )}>
                    {num < 2 ? <CheckCircle className="w-4 h-4 text-primary" /> : `0${num}`}
                  </div>
                  <div>
                    <span className={cn(
                      "text-sm font-bold block transition-colors",
                      activeModule === num ? "text-white" : "text-white/30 group-hover:text-white/60"
                    )}>
                      Module Sequence {num}
                    </span>
                    <span className="text-[9px] text-white/20 uppercase tracking-widest font-black">24:12 • Video</span>
                  </div>
                </div>
                {activeModule === num && <motion.div layoutId="active" className="w-1.5 h-1.5 rounded-full bg-primary shadow-neon" />}
              </button>
            </div>
          ))}
        </div>

        <GlassCard className="mt-12 border-dashed border-white/10 text-center py-8">
           <Bookmark className="w-6 h-6 text-white/10 mx-auto mb-4" />
           <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Saved Bookmarks (3)</p>
        </GlassCard>
      </div>
    </div>
  );
}

