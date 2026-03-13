"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle2, XCircle, ArrowRight, Brain, Trophy, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface CourseQuizProps {
  questions: Question[];
  onComplete: (score: number) => void;
}

export function CourseQuiz({ questions, onComplete }: CourseQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerClick = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      onComplete(score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0));
    }
  };

  if (showResults) {
    const finalScore = score;
    const percentage = Math.round((finalScore / questions.length) * 100);
    const passed = percentage >= 70;

    return (
      <GlassCard className="p-12 text-center space-y-8 border-primary/20 bg-primary/[0.02]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto"
        >
          {passed ? (
            <Trophy className="w-12 h-12 text-primary shadow-neon-sm" />
          ) : (
            <AlertCircle className="w-12 h-12 text-amber-500" />
          )}
        </motion.div>

        <div className="space-y-2">
          <h3 className="text-3xl font-black text-white italic">Neural Evaluation Complete</h3>
          <p className="text-white/40 uppercase text-[10px] font-black tracking-[0.4em]">Synthesis Verification Score</p>
        </div>

        <div className="text-6xl font-black text-primary italic">
          {percentage}%
        </div>

        <div className="max-w-md mx-auto">
          {passed ? (
            <p className="text-sm text-green-400 font-bold bg-green-500/10 py-4 px-6 rounded-2xl border border-green-500/20">
              Identity Verified. You have demonstrated mastery of AI Synthesis protocols. Certificate unlocked.
            </p>
          ) : (
            <p className="text-sm text-amber-500 font-bold bg-amber-500/10 py-4 px-6 rounded-2xl border border-amber-500/20">
              Protocol Desync. Your score is below the verification threshold. Review the modules and resynchronize.
            </p>
          )}
        </div>

        <button 
          onClick={() => window.location.reload()}
          className="px-10 py-4 rounded-2xl bg-white text-black text-[11px] font-black uppercase tracking-widest hover:bg-primary transition-all shadow-neon-sm"
        >
          {passed ? "Claim Certificate" : "Retake Evaluation"}
        </button>
      </GlassCard>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white tracking-tight">Certification Quiz</h3>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/20">Module 03 Verification</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-primary font-black italic">{currentQuestionIndex + 1}</span>
          <span className="text-white/20 font-black italic"> / {questions.length}</span>
        </div>
      </div>

      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          className="h-full bg-primary shadow-neon-sm"
        />
      </div>

      <GlassCard className="p-10 border-white/5">
        <h4 className="text-lg font-bold text-white mb-10 leading-relaxed">
          {currentQuestion.text}
        </h4>

        <div className="grid grid-cols-1 gap-4">
          {currentQuestion.options.map((option, index) => {
            const isCorrect = index === currentQuestion.correctAnswer;
            const isSelected = index === selectedAnswer;

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={isAnswered}
                className={cn(
                  "group relative p-6 rounded-2xl border transition-all duration-300 text-left flex items-center justify-between",
                  !isAnswered && "bg-white/5 border-white/5 hover:border-primary/30 hover:bg-white/[0.08]",
                  isAnswered && isCorrect && "bg-green-500/10 border-green-500/50 text-green-400",
                  isAnswered && isSelected && !isCorrect && "bg-red-500/10 border-red-500/50 text-red-500",
                  isAnswered && !isSelected && !isCorrect && "opacity-40 border-white/5 bg-white/5"
                )}
              >
                <div className="flex items-center gap-4">
                  <span className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black border transition-colors",
                    isAnswered && isCorrect ? "bg-green-500 text-black border-green-500" :
                    isAnswered && isSelected && !isCorrect ? "bg-red-500 text-black border-red-500" :
                    "bg-white/10 border-white/10 text-white/40"
                  )}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-sm font-bold">{option}</span>
                </div>
                
                {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-400" />}
                {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
              </button>
            );
          })}
        </div>
      </GlassCard>

      <div className="flex justify-end pt-4">
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className={cn(
            "px-10 py-4 rounded-2xl bg-primary text-black text-[11px] font-black uppercase tracking-widest transition-all flex items-center gap-3",
            !isAnswered ? "opacity-30 cursor-not-allowed" : "hover:shadow-neon shadow-neon-sm"
          )}
        >
          {currentQuestionIndex === questions.length - 1 ? "Complete Verification" : "Synchronize Next"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
