"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { FadeIn } from "@/components/ui/Animations";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { useState } from "react";

interface Question {
  id: number;
  text: string;
  options: string[];
  correct: number;
}

const quizData: Question[] = [
  {
    id: 1,
    text: "Which of the following is crucial for maintaining skin texture realism in AI renders?",
    options: ["Subsurface Scattering", "High Contrast Filters", "Motion Blurr", "Flat Lighting"],
    correct: 0,
  },
  {
    id: 2,
    text: "True representation of a brand's voice requires constant parameter tuning.",
    options: ["True", "False"],
    correct: 0,
  },
];

export function QuizSystem() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    if (selected === quizData[currentStep].correct) {
      setScore(score + 1);
    }
    
    if (currentStep < quizData.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    const passed = score >= quizData.length * 0.7;
    return (
      <FadeIn>
        <GlassCard className="text-center py-12">
          <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${passed ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>
            {passed ? <CheckCircle2 className="w-10 h-10" /> : <Circle className="w-10 h-10" />}
          </div>
          <h2 className="text-3xl font-bold mb-2">{passed ? "Quiz Passed!" : "Try Again"}</h2>
          <p className="text-white/40 mb-8">Your score: {score} out of {quizData.length}</p>
          {passed ? (
            <PremiumButton>Claim Certificate</PremiumButton>
          ) : (
            <PremiumButton variant="outline" onClick={() => { setFinished(false); setCurrentStep(0); setScore(0); }}>Retake Quiz</PremiumButton>
          )}
        </GlassCard>
      </FadeIn>
    );
  }

  const q = quizData[currentStep];

  return (
    <FadeIn>
      <GlassCard className="p-8">
        <div className="flex justify-between items-center mb-8">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">Knowledge Check</span>
          <span className="text-xs text-white/40">Step {currentStep + 1} of {quizData.length}</span>
        </div>

        <h3 className="text-2xl font-bold mb-8">{q.text}</h3>

        <div className="space-y-4 mb-10">
          {q.options.map((option, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={cn(
                "w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between group",
                selected === i ? "bg-primary text-black border-primary" : "glass border-white/5 hover:bg-white/5"
              )}
            >
              <span className="font-medium">{option}</span>
              {selected === i && <CheckCircle2 className="w-5 h-5" />}
            </button>
          ))}
        </div>

        <div className="flex justify-end">
          <PremiumButton onClick={handleNext} disabled={selected === null} className="gap-2">
            Next Question
            <ArrowRight className="w-4 h-4" />
          </PremiumButton>
        </div>
      </GlassCard>
    </FadeIn>
  );
}

import { cn } from "@/lib/utils";
