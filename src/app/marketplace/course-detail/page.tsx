"use client";

import { Navbar } from "@/components/layout/Navbar";
import { FadeIn } from "@/components/ui/Animations";
import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { 
  Play, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Users, 
  Star, 
  BookOpen, 
  Clock, 
  ShieldCheck,
  Zap,
  BarChart
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CourseReviews } from "@/components/marketplace/CourseReviews";

const COURSE_DATA = {
  id: 1,
  title: "AI Influencer Masterclass",
  subtitle: "Build, Train, and Deploy Next-Generation Synthetic Personas",
  instructor: {
    name: "Alex Rivera",
    role: "AI Creative Director",
    bio: "Pioneer in synthetic media with over 10 years experience in CG and 3 years specialized in GANs and Diffusion models.",
    image: "/instructors/alex.jpg",
    stats: { students: "12,400", rating: "4.9", courses: "4" }
  },
  stats: { duration: "12 hours", lessons: "48", level: "Intermediate", price: "$299" },
  outcomes: [
    "Master Stable Diffusion for realistic portrait generation",
    "Train custom LoRA models for consistent character DNA",
    "Automate social media content workflows using Python",
    "Implement brand personality through advanced prompting techniques",
    "Navigate ethical and legal considerations of synthetic media"
  ],
  syllabus: [
    {
      title: "Module 1: Foundations of Synthetic Identity",
      lessons: [
        { title: "Introduction to AI Influencers", duration: "15 min", type: "video", free: true },
        { title: "Defining the Persona DNA", duration: "25 min", type: "video", free: false },
        { title: "Market Research for Digital Models", duration: "20 min", type: "video", free: false }
      ]
    },
    {
      title: "Module 2: Advanced Image Synthesis",
      lessons: [
        { title: "Mastering Prompt Engineering", duration: "45 min", type: "video", free: true },
        { title: "Inpainting and Outpainting Realistic Skin", duration: "50 min", type: "video", free: false },
        { title: "Consistent Lighting & Textures", duration: "40 min", type: "video", free: false }
      ]
    },
    {
      title: "Module 3: Motion & Synthesis",
      lessons: [
        { title: "AnimateDiff for Dynamic Content", duration: "35 min", type: "video", free: false },
        { title: "Lip Sync & Voice Synthesis Workflow", duration: "45 min", type: "video", free: false }
      ]
    }
  ]
};

export default function CourseDetailPage() {
  const [expandedModules, setExpandedModules] = useState<number[]>([0]);

  const toggleModule = (index: number) => {
    setExpandedModules(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-black text-white noise-bg">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] pointer-events-none -mr-64 -mt-64" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Elite Curriculum</span>
                <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                  {COURSE_DATA.title}
                </h1>
                <p className="text-xl text-white/50 mb-10 leading-relaxed font-light italic">
                  "{COURSE_DATA.subtitle}"
                </p>
                <div className="flex flex-wrap gap-6 mb-12">
                   <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl text-sm border-white/5">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{COURSE_DATA.stats.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl text-sm border-white/5">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span>{COURSE_DATA.stats.lessons} Lessons</span>
                  </div>
                   <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl text-sm border-white/5">
                    <BarChart className="w-4 h-4 text-primary" />
                    <span>{COURSE_DATA.stats.level}</span>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <PremiumButton size="lg" className="px-10 py-5 text-xl font-bold shadow-neon">
                    Enroll for {COURSE_DATA.stats.price}
                  </PremiumButton>
                  <button className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center border-white/10 group-hover:border-primary/50 group-hover:text-primary transition-all">
                      <Play className="w-5 h-5 ml-1 fill-current" />
                    </div>
                    <span className="font-bold text-sm tracking-widest uppercase">Watch Preview</span>
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <GlassCard className="aspect-video p-0 relative group overflow-hidden border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                  <div className="w-full h-full flex items-center justify-center relative z-20">
                    <div className="w-20 h-20 rounded-full glass flex items-center justify-center text-primary animate-pulse-slow border-primary/30">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-[40px]" />
                </GlassCard>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Left: Syllabus & Content */}
            <div className="lg:col-span-2 space-y-24">
              {/* Learning Outcomes & Syllabus */}
              <div className="space-y-16">
                <FadeIn>
                  <h2 className="text-3xl font-black mb-8 tracking-tighter uppercase border-b border-primary/20 pb-4 inline-block">Learning Outcomes</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {COURSE_DATA.outcomes.map((outcome, i) => (
                      <div key={i} className="flex gap-4 group">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <p className="text-white/60 leading-relaxed text-sm">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <h2 className="text-3xl font-black mb-8 tracking-tighter uppercase border-b border-primary/20 pb-4 inline-block">Course Syllabus</h2>
                  <div className="space-y-4">
                    {COURSE_DATA.syllabus.map((mod, i) => (
                      <div key={i} className="glass rounded-2xl overflow-hidden border-white/5 transition-all">
                        <PremiumButton 
                          onClick={() => toggleModule(i)}
                          variant={expandedModules.includes(i) ? "glass" : "primary"}
                          className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors"
                        >
                          <div className="flex items-center gap-4 text-left">
                            <span className="text-primary font-black text-sm">0{i+1}</span>
                            <h3 className="font-bold text-lg">{mod.title}</h3>
                          </div>
                          {expandedModules.includes(i) ? <ChevronUp className="w-5 h-5 text-white/40" /> : <ChevronDown className="w-5 h-5 text-white/40" />}
                        </PremiumButton>

                        {expandedModules.includes(i) && (
                          <div className="p-6 pt-0 space-y-2">
                            {mod.lessons.map((lesson, j) => (
                              <div key={j} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5">
                                <div className="flex items-center gap-4">
                                  <div className={cn(
                                    "w-8 h-8 rounded-lg glass flex items-center justify-center",
                                    lesson.free ? "text-primary border-primary/30" : "text-white/20 border-white/5"
                                  )}>
                                    {lesson.free ? <Play className="w-3.5 h-3.5 fill-current" /> : <ShieldCheck className="w-4 h-4" />}
                                  </div>
                                  <span className={cn("text-sm", lesson.free ? "text-white" : "text-white/40")}>{lesson.title}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <span className="text-[10px] text-white/20 font-mono tracking-widest">{lesson.duration}</span>
                                  {lesson.free && <span className="text-[10px] font-black uppercase text-primary tracking-widest bg-primary/10 px-2 py-0.5 rounded">Preview</span>}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* Reviews Section */}
              <FadeIn delay={0.3}>
                <CourseReviews />
              </FadeIn>
            </div>

            {/* Right: Instructor & Sidebar */}
            <aside className="space-y-12">
              <FadeIn delay={0.4}>
                <GlassCard className="p-8 border-primary/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-primary" />
                  <h2 className="text-xl font-black mb-8 tracking-widest uppercase text-primary/60">Instructor</h2>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 rounded-2xl glass border-white/10 flex items-center justify-center text-primary font-bold text-3xl shadow-neon overflow-hidden">
                      {/* image placeholder */}
                      {COURSE_DATA.instructor.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{COURSE_DATA.instructor.name}</h3>
                      <p className="text-xs text-primary font-medium tracking-widest uppercase">{COURSE_DATA.instructor.role}</p>
                    </div>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 italic">
                    "{COURSE_DATA.instructor.bio}"
                  </p>
                  <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
                    <div className="text-center">
                      <p className="text-lg font-black text-white">{COURSE_DATA.instructor.stats.students}</p>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">Students</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-black text-white">{COURSE_DATA.instructor.stats.rating}</p>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">Rating</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-black text-white">{COURSE_DATA.instructor.stats.courses}</p>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">Courses</p>
                    </div>
                  </div>
                </GlassCard>
              </FadeIn>

              <FadeIn delay={0.6}>
                 <GlassCard className="p-8 bg-primary/5 border-primary/20">
                    <h2 className="text-lg font-black mb-6 tracking-widest uppercase">Certification</h2>
                    <p className="text-sm text-white/60 mb-8 leading-relaxed">
                      Complete all 48 lessons and pass the final exam to receive your official AIE Practitioner ID and unique verifiable certificate.
                    </p>
                    <div className="flex items-center gap-4 text-primary mb-8 bg-white/5 p-4 rounded-xl border border-primary/20">
                      <ShieldCheck className="w-8 h-8" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Globally Verifiable <br /> Practitioner ID</span>
                    </div>
                    <PremiumButton variant="outline" className="w-full">Download Syllabus PDF</PremiumButton>
                 </GlassCard>
              </FadeIn>
            </aside>

          </div>
        </div>
      </section>

      {/* Course Detail Footer - CTA */}
      <section className="py-24 text-center glass border-y border-white/5 relative z-20">
         <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10">Start Your Synthesis Journey</h2>
            <PremiumButton size="lg" className="px-16 py-6 text-2xl shadow-neon-strong animate-glow">
              Enroll Unlimited Access
            </PremiumButton>
            <p className="text-white/40 mt-8 text-sm">30-day money-back guarantee. Lifetime access to updates.</p>
         </div>
      </section>

    </div>
  );
}
