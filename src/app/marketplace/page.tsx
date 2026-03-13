"use client";

import { Navbar } from "@/components/layout/Navbar";
import { FadeIn } from "@/components/ui/Animations";
import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { 
  Search, 
  Filter, 
  ChevronDown, 
  BarChart, 
  Clock, 
  User, 
  Star,
  Zap,
  LayoutGrid,
  List
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ALL_COURSES = [
  {
    id: 1,
    title: "AI Influencer Masterclass",
    instructor: "Alex Rivera",
    duration: "12 Hours",
    level: "Intermediate",
    price: "$299",
    rating: "4.9",
    category: "Influencer Creation",
    tools: ["Stable Diffusion", "Midjourney"],
    image: "/courses/ai-influencer.jpg"
  },
  {
    id: 2,
    title: "Social Media Automation",
    instructor: "Sarah Chen",
    duration: "8 Hours",
    level: "Advanced",
    price: "$199",
    rating: "4.8",
    category: "Automation",
    tools: ["Python", "OpenAI"],
    image: "/courses/automation.jpg"
  },
  {
    id: 3,
    title: "AI Avatar Development",
    instructor: "Marcus Vane",
    duration: "15 Hours",
    level: "Beginner",
    price: "$349",
    rating: "5.0",
    category: "Modeling",
    tools: ["Blender", "Runway"],
    image: "/courses/avatar.jpg"
  },
  {
    id: 4,
    title: "Synthetic Content Strategy",
    instructor: "Elena Thorne",
    duration: "6 Hours",
    level: "Intermediate",
    price: "$149",
    rating: "4.7",
    category: "Strategy",
    tools: ["Jasper", "ElevenLabs"],
    image: "/courses/strategy.jpg"
  }
];

const CATEGORIES = ["All", "Influencer Creation", "Automation", "Modeling", "Strategy"];
const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];

export default function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = ALL_COURSES.filter(course => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesLevel = activeLevel === "All" || course.level === activeLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white noise-bg">
      <Navbar />
      
      <div className="pt-32 pb-24 container mx-auto px-4">
        <FadeIn>
          <header className="mb-16">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 underline decoration-primary/20 decoration-8 underline-offset-[12px]">
              DIGITAL <br />
              <span className="text-primary">MARKETPLACE</span>
            </h1>
            <p className="text-xl text-white/40 max-w-2xl font-light">
              Explore professional-grade training and tools to dominate the synthetic influencer era.
            </p>
          </header>
        </FadeIn>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center">
          <div className="relative flex-grow w-full">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 w-5 h-5" />
            <input 
              type="text"
              placeholder="Search courses, instructors, tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-16 pr-6 focus:outline-none focus:border-primary/50 text-lg transition-all"
            />
          </div>
          
          <div className="flex gap-4 w-full lg:w-auto">
            <PremiumButton variant="outline" className="flex-grow lg:flex-grow-0 gap-2 border-white/5 bg-white/5 py-4">
              <Filter className="w-4 h-4" />
              Filters
            </PremiumButton>
            <div className="h-14 w-px bg-white/10 hidden lg:block" />
            <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl text-white/40">
              <LayoutGrid className="w-5 h-5 text-primary" />
              <List className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <aside className="space-y-10 hidden lg:block">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-6 text-primary/60">Category</h3>
              <div className="space-y-3">
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "block text-lg transition-all",
                      activeCategory === cat ? "text-primary font-bold pl-2 border-l-2 border-primary" : "text-white/40 hover:text-white"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] mb-6 text-primary/60">Difficulty</h3>
              <div className="space-y-3">
                {LEVELS.map(lvl => (
                  <button 
                    key={lvl}
                    onClick={() => setActiveLevel(lvl)}
                    className={cn(
                      "block text-lg transition-all",
                      activeLevel === lvl ? "text-primary font-bold pl-2 border-l-2 border-primary" : "text-white/40 hover:text-white"
                    )}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <GlassCard className="bg-primary/5 border-primary/20 mt-12">
              <h4 className="font-bold mb-2">Platform Credits</h4>
              <p className="text-xs text-white/60 mb-4 tracking-tight">Purchase specialized bundles to unlock premium avatars faster.</p>
              <PremiumButton size="sm" className="w-full">Top Up Wallet</PremiumButton>
            </GlassCard>
          </aside>

          {/* Course Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredCourses.map((course, i) => (
                <FadeIn key={course.id} delay={i * 0.1}>
                  <GlassCard className="p-0 overflow-hidden group border-white/5 hover:border-primary/20 transition-all duration-500 bg-white/[0.02] flex flex-col h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                      <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                        {course.tools.map(tool => (
                          <span key={tool} className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[9px] font-black uppercase tracking-widest text-white/60 border border-white/10">
                            {tool}
                          </span>
                        ))}
                      </div>
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-500/20 group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute top-4 right-4 z-20 glass px-2 py-1 rounded-lg flex items-center gap-1 text-xs">
                        <Star className="w-3 h-3 fill-primary text-primary" />
                        <span className="font-bold">{course.rating}</span>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                         <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">{course.category}</span>
                         <span className="text-xl font-black">{course.price}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors leading-tight">{course.title}</h3>
                      
                      <div className="grid grid-cols-2 gap-4 mt-auto border-t border-white/5 pt-6">
                        <div className="flex items-center gap-2 text-white/40 text-[11px] font-medium uppercase tracking-widest">
                          <User className="w-3.5 h-3.5" />
                          {course.instructor}
                        </div>
                        <div className="flex items-center gap-2 text-white/40 text-[11px] font-medium uppercase tracking-widest">
                          <Clock className="w-3.5 h-3.5" />
                          {course.duration}
                        </div>
                      </div>

                      <PremiumButton variant="glass" className="mt-8 w-full group-hover:bg-primary group-hover:text-black transition-all">
                        View Enrollment Details
                      </PremiumButton>
                    </div>
                  </GlassCard>
                </FadeIn>
              ))}
            </div>
            
            {filteredCourses.length === 0 && (
              <div className="text-center py-32 glass rounded-3xl border-dashed border-white/10">
                <Zap className="w-12 h-12 text-white/10 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white/40 tracking-tight">No courses found matching your criteria.</h3>
                <button 
                  onClick={() => { setActiveCategory("All"); setActiveLevel("All"); setSearchQuery(""); }}
                  className="mt-4 text-primary font-bold hover:underline"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
