"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Filter, 
  BookOpen, 
  Clock, 
  Star, 
  PlayCircle,
  CheckCircle2,
  TrendingUp,
  SlidersHorizontal,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const courses = [
  {
    id: "ai-modeling-mastery",
    title: "AI Influencer Modeling Mastery",
    desc: "Create hyper-realistic virtual personas from scratch using Stable Diffusion and Midjourney.",
    progress: 85,
    modules: 12,
    completed: 10,
    rating: 4.8,
    duration: "12h 45m",
    category: "AI Creation",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "viral-automation",
    title: "Viral Content Automation",
    desc: "Automate your short-form content pipeline using GPT-4 and custom AI video tools.",
    progress: 45,
    modules: 8,
    completed: 3,
    rating: 4.9,
    duration: "6h 20m",
    category: "Marketing",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "agency-ops",
    title: "AI Agency Operations",
    desc: "Scale your AI services agency to $10k/month with automated onboarding and billing.",
    progress: 15,
    modules: 15,
    completed: 2,
    rating: 4.7,
    duration: "20h 10m",
    category: "Business",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "neural-texturing",
    title: "Advanced Neural Texturing",
    desc: "Master the art of realistic skin and clothing textures for digital AI influencers.",
    progress: 0,
    modules: 10,
    completed: 0,
    rating: 5.0,
    duration: "15h 30m",
    category: "AI Creation",
    level: "Expert",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800"
  }
];

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "All" || 
                         (activeFilter === "Active" && course.progress > 0 && course.progress < 100) ||
                         (activeFilter === "Completed" && course.progress === 100) ||
                         (course.category === activeFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <DashboardShell>
      <div className="space-y-12">
        {/* Header Section */}
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <BookOpen className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Knowledge Portal</span>
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-white">My <span className="text-primary/80 text-stroke-sm">Courses</span></h1>
            <p className="text-white/40 max-w-md italic">Enhance your AI capabilities with our professional-grade curriculums.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search courses..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/5 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-primary/30 transition-all w-64 placeholder:text-white/10"
              />
            </div>
            <button className="p-3 bg-white/5 border border-white/5 rounded-2xl text-white/40 hover:text-white hover:border-white/10 transition-all group">
              <SlidersHorizontal className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
            </button>
          </div>
        </section>

        {/* Filters Tab */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {["All", "Active", "Completed", "AI Creation", "Marketing", "Business"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all whitespace-nowrap border",
                activeFilter === filter 
                  ? "bg-primary border-primary text-black shadow-neon-sm" 
                  : "bg-white/5 border-white/5 text-white/40 hover:bg-white/10"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, i) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="p-0 overflow-hidden group hover:border-primary/30 transition-all border-white/5 relative">
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-lg border border-white/10 text-[9px] font-black uppercase tracking-widest text-primary">
                      {course.category}
                    </div>
                    {course.progress === 100 && (
                      <div className="absolute top-4 right-4 text-green-400">
                        <CheckCircle2 className="w-6 h-6 drop-shadow-neon" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-white/20">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        {course.rating}
                      </div>
                    </div>

                    <h3 className="text-lg font-black tracking-tight text-white group-hover:text-primary transition-colors line-clamp-1">
                      {course.title}
                    </h3>
                    
                    <p className="text-xs text-white/40 line-clamp-2 leading-relaxed h-8">
                      {course.desc}
                    </p>

                    {/* Progress */}
                    <div className="pt-2 space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/20">
                        <span>{course.completed}/{course.modules} Modules</span>
                        <span className="text-primary">{course.progress}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${course.progress}%` }}
                          className="h-full bg-primary shadow-neon-sm" 
                        />
                      </div>
                    </div>

                    <Link href={`/dashboard/courses/watch/${course.id}`} className="block">
                      <button className="w-full mt-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:bg-primary hover:border-primary hover:text-black hover:shadow-neon-sm transition-all font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 group/btn">
                        {course.progress > 0 ? (course.progress === 100 ? "Review Course" : "Resume Learning") : "Start Course"}
                        <PlayCircle className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </Link>
                  </div>

                  {/* Hover Overlay Detail */}
                  <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
                    <h4 className="text-black font-black text-xl mb-4 leading-tight">{course.title}</h4>
                    <p className="text-black/70 text-sm font-bold mb-6 italic">"Master the full lifecycle of AI influence."</p>
                    <div className="flex gap-4">
                       <span className="px-3 py-1 bg-black text-white text-[9px] font-black uppercase rounded-full">{course.level}</span>
                       <span className="px-3 py-1 bg-black text-white text-[9px] font-black uppercase rounded-full">{course.modules} Modules</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </DashboardShell>
  );
}
