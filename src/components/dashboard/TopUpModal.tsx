"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { X, Zap, CreditCard, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const packages = [
  { id: "starter", name: "Bio-Cell", credits: 100, price: 29, color: "from-blue-500/20" },
  { id: "pro", name: "Neural-Core", credits: 500, price: 99, color: "from-primary/20", popular: true },
  { id: "elite", name: "Aether-Sys", credits: 2500, price: 399, color: "from-purple-500/20" },
];

export function TopUpModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedPack, setSelectedPack] = useState(packages[1]);
  const [step, setStep] = useState(1); // 1: Select, 2: Checkout, 3: Success

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md" 
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="w-full max-w-2xl bg-black border border-white/10 rounded-[40px] shadow-2xl relative overflow-hidden p-1"
      >
        <div className="absolute inset-0 noise-bg opacity-10" />
        <div className={`absolute top-0 left-0 w-full h-64 bg-gradient-to-b ${selectedPack.color} to-transparent pointer-events-none opacity-50`} />

        <div className="relative z-10 p-8 md:p-12">
          {/* Close Header */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                 <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                 <h2 className="text-2xl font-black tracking-tighter text-white">Synthesize <span className="text-primary italic">Credits</span></h2>
                 <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">Universal Exchange Hub</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all group"
            >
              <X className="w-5 h-5 text-white/40 group-hover:text-white" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {packages.map((pkg) => (
                       <button
                          key={pkg.id}
                          onClick={() => setSelectedPack(pkg)}
                          className={cn(
                             "relative p-6 rounded-3xl border transition-all duration-500 text-left overflow-hidden group",
                             selectedPack.id === pkg.id 
                               ? "bg-white/5 border-primary/50 shadow-neon-sm" 
                               : "bg-white/[0.02] border-white/5 hover:border-white/20"
                          )}
                       >
                          {pkg.popular && (
                             <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-black text-[8px] font-black uppercase tracking-widest rounded-bl-xl">
                                Popular
                             </div>
                          )}
                          <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">{pkg.name}</p>
                          <h4 className="text-xl font-black text-white mb-4">{pkg.credits} <span className="text-xs text-primary/60">CR</span></h4>
                          <p className="text-2xl font-black text-white tracking-tighter">${pkg.price}</p>
                          
                          <div className={cn(
                             "absolute bottom-4 right-4 w-6 h-6 rounded-full border flex items-center justify-center transition-all",
                             selectedPack.id === pkg.id ? "bg-primary border-primary" : "border-white/10"
                          )}>
                             {selectedPack.id === pkg.id && <CheckCircle2 className="w-4 h-4 text-black" />}
                          </div>
                       </button>
                    ))}
                 </div>

                 <div className="bg-white/5 border border-white/5 rounded-3xl p-6 space-y-4">
                    <div className="flex justify-between items-center px-2">
                       <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Subtotal</span>
                       <span className="text-lg font-black text-white">${selectedPack.price}.00</span>
                    </div>
                    <button 
                      onClick={() => setStep(2)}
                      className="w-full py-4 bg-primary text-black rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-neon hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                    >
                       Initialize Secure Checkout
                       <ArrowRight className="w-4 h-4" />
                    </button>
                 </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                 <div className="space-y-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-white/20 uppercase tracking-widest ml-1">Card Details</label>
                       <div className="relative group">
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary transition-colors" />
                          <input 
                            type="text" 
                            placeholder="4242 4242 4242 4242"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all text-white/80"
                          />
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <input 
                          type="text" 
                          placeholder="MM / YY"
                          className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all text-white/80"
                       />
                       <input 
                          type="text" 
                          placeholder="CVC"
                          className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-primary/50 transition-all text-white/80"
                       />
                    </div>
                 </div>

                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[10px] font-black text-white/20 uppercase tracking-widest justify-center">
                       <ShieldCheck className="w-4 h-4 text-primary" />
                       AES-256 Cloud Encrypted Synthesis
                    </div>
                    <button 
                      onClick={() => setStep(3)}
                      className="w-full py-4 bg-primary text-black rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-neon hover:scale-[1.02] transition-all"
                    >
                       Confirm & Synthesize ${selectedPack.price}.00
                    </button>
                    <button 
                       onClick={() => setStep(1)}
                       className="w-full text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors"
                    >
                       Go Back
                    </button>
                 </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8 py-10"
              >
                 <div className="relative w-24 h-24 mx-auto">
                    <motion.div 
                       initial={{ scale: 0 }}
                       animate={{ scale: 1 }}
                       transition={{ type: "spring", damping: 12 }}
                       className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" 
                    />
                    <motion.div 
                       initial={{ scale: 0 }}
                       animate={{ scale: 1 }}
                       className="relative w-full h-full bg-primary rounded-full flex items-center justify-center shadow-neon"
                    >
                       <CheckCircle2 className="w-12 h-12 text-black" />
                    </motion.div>
                 </div>

                 <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white tracking-tighter">Synthesis <span className="text-primary italic">Successful</span></h3>
                    <p className="text-white/40 text-sm max-w-xs mx-auto leading-relaxed italic">
                       {selectedPack.credits} Neural Credits have been injected into your cloud wallet. Let the creation begin.
                    </p>
                 </div>

                 <button 
                   onClick={onClose}
                   className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all flex items-center gap-3 mx-auto"
                 >
                    Return to Dashboard
                    <Sparkles className="w-4 h-4 text-primary" />
                 </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
