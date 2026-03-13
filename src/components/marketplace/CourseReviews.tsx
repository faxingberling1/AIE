"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { Star, ThumbsUp, MessageSquare, ShieldCheck, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const REVIEWS_DATA = [
  {
    id: 1,
    user: "Marcus J.",
    rating: 5,
    date: "2 days ago",
    comment: "Absolutely game-changing. The LoRA training module alone saved me weeks of trial and error. My AI models are finally looking consistent!",
    likes: 24,
    verified: true
  },
  {
    id: 2,
    user: "Sarah L.",
    rating: 4,
    date: "1 week ago",
    comment: "Very high quality production. The sections on ethical deepfakes were really enlightening. Coding parts were a bit fast but manageable.",
    likes: 12,
    verified: true
  }
];

export function CourseReviews() {
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-10">
        <div>
           <h2 className="text-3xl font-black mb-4 tracking-tighter uppercase inline-flex items-center gap-4">
            Student Feedback
            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-bold tracking-widest uppercase">Verified Only</span>
          </h2>
          <div className="flex items-center gap-6">
            <div className="text-5xl font-black text-white">4.9</div>
            <div className="space-y-1">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-xs text-white/40 font-medium tracking-widest uppercase">Based on 1,248 reviews</div>
            </div>
          </div>
        </div>
        <PremiumButton 
          onClick={() => setShowForm(!showForm)}
          variant={showForm ? "glass" : "primary"}
        >
          {showForm ? "Cancel Review" : "Write a Review"}
        </PremiumButton>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass p-8 rounded-3xl border-primary/20 bg-primary/5"
          >
            <h3 className="text-xl font-bold mb-6">Leave Your Feedback</h3>
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3 block">Overall Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(s => (
                    <button
                      key={s}
                      onMouseEnter={() => setHoverRating(s)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(s)}
                      className="transition-all"
                    >
                      <Star className={cn(
                        "w-8 h-8 transition-all hover:scale-125",
                        (hoverRating || rating) >= s ? "fill-primary text-primary" : "text-white/10"
                      )} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-3 block">Your Experience</label>
                <textarea 
                  rows={4}
                  placeholder="What did you learn? How has this changed your workflow?"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl p-6 focus:outline-none focus:border-primary/50 text-white leading-relaxed"
                />
              </div>
              <div className="flex justify-between items-center">
                 <p className="text-[10px] text-white/30 italic flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3" />
                  Review will be sent to moderation queue.
                 </p>
                 <PremiumButton className="px-10">Submit Review</PremiumButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {REVIEWS_DATA.map((review, i) => (
          <GlassCard key={review.id} className="p-8 border-white/5 bg-white/[0.01] flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-primary font-bold">
                  {review.user.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm flex items-center gap-2">
                    {review.user}
                    {review.verified && <ShieldCheck className="w-3 h-3 text-primary" />}
                  </h4>
                  <p className="text-[10px] text-white/40 font-medium tracking-widest uppercase">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn(
                    "w-3 h-3",
                    i < review.rating ? "fill-primary text-primary" : "text-white/10"
                  )} />
                ))}
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
              "{review.comment}"
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
              <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors">
                <ThumbsUp className="w-3.5 h-3.5" />
                Helpful ({review.likes})
              </button>
              <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                <MessageSquare className="w-3.5 h-3.5" />
                Reply
              </button>
            </div>
          </GlassCard>
        ))}
      </div>
      
      <div className="text-center">
        <button className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60 hover:text-primary transition-all pb-1 border-b-2 border-primary/20 hover:border-primary">
          View All 1,248 Reviews
        </button>
      </div>
    </div>
  );
}
