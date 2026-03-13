"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { FadeIn } from "@/components/ui/Animations";
import { BookOpen, Clock, User, BarChart, Star, Play, ChevronRight } from "lucide-react";

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
    color: "from-blue-500"
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
    color: "from-cyan-500"
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
    color: "from-primary"
  },
];

export function CourseMarketplace() {
  return (
    <section className="py-32 bg-black relative border-y border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00F2FF_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-3xl">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Academic Ecosystem</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight">
                Master the Art of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Synthetic Creation</span>
              </h2>
              <p className="text-white/50 text-xl leading-relaxed max-w-xl">
                Comprehensive training modules designed to take you from beginner to professional AI creator.
              </p>
            </div>
            <PremiumButton variant="outline" className="px-8 border-white/10 hover:border-primary/50 text-white/80 transition-all">
              View All Courses <ChevronRight className="w-4 h-4 ml-2" />
            </PremiumButton>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {courses.map((course, i) => (
            <FadeIn key={course.title} delay={i * 0.1}>
              <GlassCard className="flex flex-col h-full group border-white/5 hover:border-primary/20 transition-all duration-500 p-0 overflow-hidden bg-white/[0.02] hover:bg-white/[0.04]">
                {/* Course Header with Card-like visual */}
                <div className="p-8 pb-0">
                   <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 rounded-full glass border border-white/10 text-[10px] font-bold uppercase tracking-widest text-primary shadow-[0_0_10px_rgba(0,242,255,0.1)]">
                      {course.tag}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500/80 text-sm font-bold">
                      <Star className="w-4 h-4 fill-yellow-500 shadow-yellow-500" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-8 group-hover:text-primary transition-colors line-clamp-2 h-16 leading-tight">
                    {course.title}
                  </h3>
                </div>

                {/* Course Media Placeholder / Visual */}
                <div className="px-8 mb-8 relative">
                  <div className={`h-40 rounded-2xl bg-gradient-to-br ${course.color} to-black/60 relative overflow-hidden group/thumb cursor-pointer`}>
                    <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center text-white/80 scale-90 group-hover/thumb:scale-110 transition-transform duration-500 backdrop-blur-md">
                        <Play className="w-5 h-5 ml-1 fill-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="px-8 pb-8 flex-grow">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 border-y border-white/5 py-6">
                    <div className="flex items-center gap-3 text-white/40 text-sm">
                      <div className="p-2 rounded-lg bg-white/5">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="truncate">{course.instructor}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/40 text-sm">
                      <div className="p-2 rounded-lg bg-white/5">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/40 text-sm">
                      <div className="p-2 rounded-lg bg-white/5">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <span>{course.modules} Modules</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/40 text-sm">
                      <div className="p-2 rounded-lg bg-white/5">
                        <BarChart className="w-4 h-4" />
                      </div>
                      <span>{course.level}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0 mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Tuition</span>
                    <span className="text-2xl font-black text-white">{course.price}</span>
                  </div>
                  <PremiumButton className="px-6 rounded-xl hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-all">
                    Enroll Now
                  </PremiumButton>
                </div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
