"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PlayCircle, BookOpen, Clock, Star, ChevronRight } from "lucide-react";

const TUTORIALS = [
  {
    category: "Getting Started",
    color: "text-primary",
    bg: "bg-primary/10 border-primary/20",
    items: [
      { title: "Setting Up Your AIE Account", duration: "5 min", level: "Beginner", rating: "4.9" },
      { title: "Navigating the Dashboard", duration: "8 min", level: "Beginner", rating: "4.8" },
      { title: "Understanding AI Credits", duration: "4 min", level: "Beginner", rating: "5.0" },
    ]
  },
  {
    category: "AI Influencer Creation",
    color: "text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/20",
    items: [
      { title: "Generate Your First AI Influencer", duration: "12 min", level: "Beginner", rating: "5.0" },
      { title: "Advanced Avatar Customization", duration: "18 min", level: "Intermediate", rating: "4.9" },
      { title: "Creating Consistent Personas", duration: "15 min", level: "Intermediate", rating: "4.7" },
    ]
  },
  {
    category: "AI Tools Deep Dive",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
    items: [
      { title: "AI Video Creator Walkthrough", duration: "20 min", level: "Intermediate", rating: "4.8" },
      { title: "AI Voice Generator Basics", duration: "10 min", level: "Beginner", rating: "4.9" },
      { title: "Content Automation Workflows", duration: "25 min", level: "Advanced", rating: "4.8" },
    ]
  },
  {
    category: "Courses & Certifications",
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/20",
    items: [
      { title: "Enrolling in a Course", duration: "3 min", level: "Beginner", rating: "5.0" },
      { title: "Earning Certificates", duration: "6 min", level: "Beginner", rating: "4.9" },
      { title: "Tracking Learning Progress", duration: "5 min", level: "Beginner", rating: "4.8" },
    ]
  },
];

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-32 pb-24 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Learning Hub</p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">Tutorials <span className="text-primary">&amp; Guides</span></h1>
            <p className="text-white/40 text-lg max-w-2xl">Step-by-step walkthroughs to master every feature of the AIE platform.</p>
          </div>

          <div className="space-y-12">
            {TUTORIALS.map(section => (
              <div key={section.category}>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-bold uppercase tracking-widest mb-6 ${section.bg} ${section.color}`}>
                  <BookOpen className="w-3.5 h-3.5" />
                  {section.category}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {section.items.map(item => (
                    <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className={`text-[10px] font-bold uppercase tracking-widest ${section.color}`}>{item.level}</span>
                        </div>
                        <div className="flex items-center gap-1 text-white/30 text-xs">
                          <Star className="w-3 h-3 fill-primary text-primary" />
                          {item.rating}
                        </div>
                      </div>
                      <h3 className="font-bold text-white mb-4 group-hover:text-primary transition-colors leading-snug">{item.title}</h3>
                      <div className="flex items-center justify-between text-white/30 text-xs">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration} read
                        </div>
                        <div className="flex items-center gap-1 group-hover:text-primary transition-colors">
                          <PlayCircle className="w-3.5 h-3.5" />
                          Watch
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
