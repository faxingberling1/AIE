"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { CoursePlayer } from "@/components/lms/CoursePlayer";
import { QuizSystem } from "@/components/lms/QuizSystem";

export default function CoursePlayerPage() {
  return (
    <DashboardShell>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Course Player</h1>
        <p className="text-white/40 mt-1">AI Influencer Masterclass • Chapter 4</p>
      </header>
      <div className="space-y-12">
        <CoursePlayer />
        <QuizSystem />
      </div>
    </DashboardShell>
  );
}
