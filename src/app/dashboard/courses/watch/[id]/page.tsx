"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Breadcrumbs } from "@/components/dashboard/Breadcrumbs";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  ChevronRight, 
  CheckCircle2, 
  Lock, 
  FileText, 
  HelpCircle,
  Clock,
  Settings,
  Maximize2,
  Volume2,
  Subtitles,
  Download,
  Award,
  PlayCircle,
  Brain
} from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { CourseQuiz } from "@/components/dashboard/CourseQuiz";
import { CertificateGenerator } from "@/components/dashboard/CertificateGenerator";

const courseData = {
  id: "ai-modeling-mastery",
  title: "AI Influencer Modeling Mastery",
  instructor: "AIE Labs",
  modules: [
    {
      id: "m1",
      title: "Foundations of AI Identity",
      lessons: [
        { id: "l1", title: "Introduction to AI Synthesis", duration: "12:45", completed: true, type: "video" },
        { id: "l2", title: "Conceptualizing Your AI Persona", duration: "18:20", completed: true, type: "video" },
        { id: "l3", title: "Identity DNA Mapping", duration: "05:10", completed: false, type: "text" },
      ]
    },
    {
      id: "m2",
      title: "Neural Texturing & Realism",
      lessons: [
        { id: "l4", title: "Stable Diffusion Setup", duration: "22:15", completed: false, type: "video" },
        { id: "l5", title: "Mastering Skin Textures", duration: "25:40", completed: false, type: "video" },
        { id: "l6", title: "Lighting & Composition", duration: "15:30", completed: false, type: "video" },
      ]
    },
    {
      id: "m3",
      title: "Campaign Orchestration",
      lessons: [
        { id: "l7", title: "Animated Video Generation", duration: "30:00", completed: false, type: "video" },
        { id: "l8", title: "Social Media Integration", duration: "12:00", completed: false, type: "video" },
        { id: "l9", title: "Final Certification Quiz", duration: "45:00", completed: false, type: "quiz" },
      ]
    }
  ]
};

export default function CourseWatchPage({ params }: { params: { id: string } }) {
  const [activeLesson, setActiveLesson] = useState(courseData.modules[0].lessons[0]);
  const [expandedModules, setExpandedModules] = useState<string[]>(["m1", "m2", "m3"]);
  const [notes, setNotes] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      text: "Which neural architecture is primarily responsible for generating consistent skin textures in high-fidelity AI influencers?",
      options: [
        "GAN (Generative Adversarial Network)",
        "Stable Diffusion with ControlNet",
        "Linear Regression Models",
        "LSTM (Long Short-Term Memory)"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      text: "What is the primary function of 'Identity DNA Mapping' in the synthesis process?",
      options: [
        "To track user login locations",
        "To compute credit usage benchmarks",
        "To define the core visual and personality parameters of an AI persona",
        "To export video files to social media"
      ],
      correctAnswer: 2
    },
    {
      id: "q3",
      text: "Which lighting technique is most effective for achieving 'cinematic' realism in AI-generated portraits?",
      options: [
        "Flat Frontal Lighting",
        "Ambient Occlusion Only",
        "Rembrandt Lighting Synthesis",
        "Random Noise Distribution"
      ],
      correctAnswer: 2
    }
  ];

  const toggleModule = (id: string) => {
    setExpandedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  return (
    <DashboardShell>
      <div className="flex flex-col xl:flex-row gap-8 h-full min-h-[calc(100vh-160px)]">
        {/* Main Player Area */}
        <div className="flex-grow space-y-6">
          {activeLesson.type === "quiz" && !showCertificate ? (
             <div className="overflow-hidden">
                {!quizStarted ? (
                   <GlassCard className="aspect-video flex flex-col items-center justify-center text-center space-y-8 p-12 border-primary/20 bg-primary/[0.02]">
                      <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shadow-neon-sm">
                         <Brain className="w-10 h-10" />
                      </div>
                      <div className="space-y-2">
                         <h3 className="text-3xl font-black text-white italic">Ready for Synthesis?</h3>
                         <p className="text-white/40 max-w-sm mx-auto text-sm leading-relaxed">
                            Complete the final evaluation to verify your neural mapping skills and unlock your Elite Certification.
                         </p>
                      </div>
                      <button 
                        onClick={() => setQuizStarted(true)}
                        className="px-12 py-4 rounded-2xl bg-primary text-black text-xs font-black uppercase tracking-widest hover:shadow-neon transition-all"
                      >
                         Initialize Evaluation
                      </button>
                   </GlassCard>
                ) : (
                   <CourseQuiz 
                     questions={quizQuestions} 
                     onComplete={(score) => {
                       if (score >= 2) setShowCertificate(true);
                     }} 
                   />
                )}
             </div>
          ) : showCertificate ? (
             <CertificateGenerator 
               courseTitle={courseData.title} 
               completionDate={new Date().toLocaleDateString()} 
             />
          ) : (
            <div className="relative aspect-video bg-black rounded-3xl overflow-hidden border border-white/5 shadow-2xl group">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center animate-pulse">
                     <Play className="w-8 h-8 text-primary fill-primary" />
                  </div>
               </div>
               
               {/* Player Controls Overlay */}
               <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-4">
                     <Play className="w-4 h-4 text-white hover:text-primary cursor-pointer" />
                     <div className="h-1 w-64 bg-white/20 rounded-full relative overflow-hidden">
                        <div className="absolute h-full w-[45%] bg-primary shadow-neon-sm" />
                     </div>
                     <span className="text-[10px] font-black text-white/60">12:45 / 25:00</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <Volume2 className="w-4 h-4 text-white/60 hover:text-white cursor-pointer" />
                     <Subtitles className="w-4 h-4 text-white/60 hover:text-white cursor-pointer" />
                     <Settings className="w-4 h-4 text-white/60 hover:text-white cursor-pointer" />
                     <Maximize2 className="w-4 h-4 text-white/60 hover:text-white cursor-pointer" />
                  </div>
               </div>
            </div>
          )}

          <div className="flex items-center justify-between">
             <div className="space-y-1">
                <h2 className="text-2xl font-black tracking-tight text-white">{activeLesson.title}</h2>
                <p className="text-sm text-white/40">{courseData.title} • {courseData.instructor}</p>
             </div>
             <button className="px-6 py-3 bg-primary text-black rounded-xl text-xs font-black uppercase tracking-widest hover:shadow-neon-sm transition-all flex items-center gap-2">
                Mark as Complete
                <CheckCircle2 className="w-4 h-4" />
             </button>
          </div>

          {/* Tab Content (Notes etc) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
             <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                   <h3 className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                      <FileText className="w-3 h-3" />
                      Lesson Notes
                   </h3>
                   <span className="text-[9px] text-white/20 uppercase font-black">Autosaved</span>
                </div>
                <textarea 
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Take notes for this lesson..."
                  className="w-full h-40 bg-transparent border-none outline-none text-sm text-white/60 placeholder:text-white/10 resize-none custom-scrollbar"
                />
             </GlassCard>

             <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                   <h3 className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                      <HelpCircle className="w-3 h-3" />
                      Lesson Assets
                   </h3>
                </div>
                <div className="space-y-3">
                   {[
                     { name: "Identity Mapping Sheet.pdf", size: "1.2 MB" },
                     { name: "Stable Diffusion Prompt Pack.txt", size: "45 KB" },
                   ].map((file, i) => (
                     <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-pointer group">
                        <div className="flex items-center gap-3">
                           <Download className="w-4 h-4 text-white/20 group-hover:text-primary" />
                           <span className="text-xs font-bold text-white/60 group-hover:text-white truncate max-w-[150px]">{file.name}</span>
                        </div>
                        <span className="text-[9px] font-black text-white/20 uppercase">{file.size}</span>
                     </div>
                   ))}
                </div>
             </GlassCard>
          </div>
        </div>

        {/* Lesson Sidebar */}
        <aside className="w-full xl:w-[380px] space-y-6">
          <GlassCard className="p-6 h-full flex flex-col border-white/5 bg-white/[0.01]">
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-white/20 mb-6 flex items-center justify-between">
               Course Content
               <span className="text-primary">45% Done</span>
            </h3>

            <div className="flex-grow space-y-4 overflow-y-auto custom-scrollbar pr-2">
              {courseData.modules.map((module, i) => (
                <div key={module.id} className="space-y-2">
                  <button 
                    onClick={() => toggleModule(module.id)}
                    className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                       <span className="text-[10px] font-black text-white/20">0{i+1}</span>
                       <span className="text-xs font-bold tracking-tight text-white/80 group-hover:text-white">{module.title}</span>
                    </div>
                    <ChevronRight className={cn("w-4 h-4 text-white/20 transition-transform", expandedModules.includes(module.id) ? "rotate-90" : "")} />
                  </button>

                  <AnimatePresence>
                    {expandedModules.includes(module.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden space-y-1 pl-4"
                      >
                        {module.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => {
                              setActiveLesson(lesson);
                              setQuizStarted(false);
                              if (lesson.type !== "quiz") setShowCertificate(false);
                            }}
                            className={cn(
                              "w-full flex items-center justify-between p-3 rounded-xl transition-all group",
                              activeLesson.id === lesson.id 
                                ? "bg-primary/10 border-l-2 border-primary text-primary" 
                                : "hover:bg-white/[0.03] text-white/40 hover:text-white"
                            )}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                               {lesson.completed ? (
                                 <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                               ) : (
                                 <PlayCircle className="w-4 h-4 shrink-0 opacity-40 group-hover:opacity-100" />
                               )}
                               <span className="text-[11px] font-bold truncate">{lesson.title}</span>
                            </div>
                            <span className="text-[9px] font-black opacity-40">{lesson.duration}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Certification Unlock */}
              <div className="pt-8 mt-8 border-t border-white/5">
                 <div className="p-6 rounded-3xl bg-primary/5 border border-primary/20 text-center space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto">
                       <Award className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="text-sm font-black text-white italic">Elite Certification</h4>
                       <p className="text-[10px] text-white/40 mt-1">Complete all modules to unlock your blockchain-verified certificate.</p>
                    </div>
                    <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white/20 text-[10px] font-black uppercase tracking-widest cursor-not-allowed">
                       Locked
                    </button>
                 </div>
              </div>
            </div>
          </GlassCard>
        </aside>
      </div>
    </DashboardShell>
  );
}
