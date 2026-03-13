"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { FadeIn } from "@/components/ui/Animations";
import { BookOpen, Clock, User, BarChart, Star, Play, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const courses = [
  {
    title: "AI Influencer Masterclass",
    instructor: "Alex Rivera",
    duration: "12 Hours",
    level: "Intermediate",
    price: "$299",
    rating: "4.9",
    modules: 24,
    tag: "Best Seller",
    color: "from-blue-600/20 to-cyan-500/20",
    glow: "rgba(0, 242, 255, 0.15)",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Social Media Automation",
    instructor: "Sarah Chen",
    duration: "8 Hours",
    level: "Advanced",
    price: "$199",
    rating: "4.8",
    modules: 16,
    tag: "High Demand",
    color: "from-purple-600/20 to-pink-500/20",
    glow: "rgba(168, 85, 247, 0.15)",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "AI Avatar Development",
    instructor: "Marcus Vane",
    duration: "15 Hours",
    level: "Beginner",
    price: "$349",
    rating: "5.0",
    modules: 32,
    tag: "New Release",
    color: "from-emerald-600/20 to-teal-500/20",
    glow: "rgba(16, 185, 129, 0.15)",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800"
  },
];

export function CourseMarketplace() {
  return (
    <section className="py-32 bg-black relative border-y border-white/5 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00F2FF_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* Decorative Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-[radial-gradient(circle,rgba(0,242,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-6">
                <BookOpen className="w-3 h-3" />
                <span>Academic Ecosystem</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
                MASTER THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/20 via-white to-white/20 italic font-light pr-4">SYNTHETIC ART</span>
              </h2>
              <p className="text-white/40 text-2xl leading-relaxed max-w-xl font-light">
                Comprehensive training modules designed to take you from beginner to professional AI creator.
              </p>
            </div>
            <PremiumButton variant="glass" className="px-8 border-white/5 hover:border-primary/50 text-white/80 transition-all rounded-2xl group">
              View All Courses <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </PremiumButton>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.map((course, i) => (
            <FadeIn key={course.title} delay={i * 0.1}>
              <div className="group relative h-full">
                {/* Dynamic Glow Background */}
                <div 
                  className="absolute -inset-4 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundColor: course.glow }}
                />

                <GlassCard className="flex flex-col h-full group border-white/5 hover:border-primary/30 transition-all duration-700 p-0 overflow-hidden bg-white/[0.01] rounded-[2.5rem]">
                  {/* Thumbnail Container */}
                  <div className="relative aspect-[16/10] overflow-hidden m-4 rounded-[2rem]">
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br z-10 opacity-60 group-hover:opacity-20 transition-opacity duration-700",
                      course.color
                    )} />
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out grayscale group-hover:grayscale-0"
                    />
                    
                    {/* Floating Level Badge */}
                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-3 py-1 rounded-lg glass border border-white/10 text-[9px] font-black uppercase tracking-widest text-white shadow-xl">
                        {course.level}
                      </span>
                    </div>

                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-500 backdrop-blur-md opacity-0 group-hover:opacity-100">
                        <Play className="w-6 h-6 ml-1 fill-primary text-primary" />
                      </div>
                    </div>

                    {/* Noise Overlay */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-30" />
                  </div>

                  <div className="px-8 pb-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                        {course.tag}
                      </span>
                      <div className="flex items-center gap-1.5 text-white/80 text-xs font-bold bg-white/5 px-2 py-1 rounded-md border border-white/5">
                        <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl font-black mb-6 tracking-tight leading-[1.1] text-white group-hover:text-primary transition-colors duration-500">
                      {course.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-white/5 pt-8 mt-auto">
                      <div className="space-y-1">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 block">Instructor</span>
                        <div className="flex items-center gap-2 text-white/60 text-xs">
                          <User className="w-3.5 h-3.5 text-primary/60" />
                          <span className="font-medium">{course.instructor}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 block">Duration</span>
                        <div className="flex items-center gap-2 text-white/60 text-xs">
                          <Clock className="w-3.5 h-3.5 text-primary/60" />
                          <span className="font-medium">{course.duration}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 block">Curriculum</span>
                        <div className="flex items-center gap-2 text-white/60 text-xs">
                          <BookOpen className="w-3.5 h-3.5 text-primary/60" />
                          <span className="font-medium">{course.modules} Modules</span>
                        </div>
                      </div>
                      <div className="space-y-1 text-right">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20 block">Tuition</span>
                        <span className="text-xl font-black text-white">{course.price}</span>
                      </div>
                    </div>

                    <PremiumButton className="w-full mt-10 py-4 rounded-[1.25rem] bg-white/5 hover:bg-primary border-white/5 hover:border-primary text-white/40 hover:text-black font-black text-[10px] uppercase tracking-[0.3em] transition-all hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]">
                      Enroll Instantly
                    </PremiumButton>
                  </div>
                </GlassCard>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
