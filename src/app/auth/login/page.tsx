"use client";

import { PremiumButton } from "@/components/ui/PremiumButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { Bot, Shield } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.ok) {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side: Cinematic Visuals (Visible on lg+) */}
        <div className="hidden lg:flex lg:w-3/5 relative bg-[#020617] items-center justify-center p-12 overflow-hidden border-r border-white/5">
          {/* Background Image/Visual */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-black opacity-60 z-10" />
            <img 
              src="/auth-bg.jpg" 
              alt="AI Innovation" 
              className="w-full h-full object-cover opacity-40 scale-110 animate-slow-zoom"
            />
          </div>

          <div className="relative z-20 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                The Future of Influence
              </div>
              
              <h2 className="text-5xl font-black leading-tight mb-6 tracking-tighter">
                Empower Your Brand with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Next-Gen AI Systems.</span>
              </h2>
              
              <p className="text-lg text-white/40 leading-relaxed mb-12">
                Join 2,500+ agencies and creators using AIE to automate influence, 
                generate viral content, and scale digital presence at the speed of thought.
              </p>

              {/* Testimonial/Social Proof */}
              <div className="glass p-6 rounded-2xl border-white/5 bg-white/5 relative">
                <p className="text-sm italic text-white/60 mb-4 font-medium leading-relaxed">
                  "AIE has completely redefined how we manage our influencer network. 
                  The AI generation tools are simply light years ahead of anything else."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-bold text-primary">
                    JD
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">James Dalton</p>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest font-black">Creative Director, NeoAgency</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Elements for Premium Feel */}
          <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Right Side: Auth Form */}
        <div className="flex-1 flex items-center justify-center p-6 pt-32 lg:pt-0 relative z-10 bg-black">
          {/* Subtle mobile background blur */}
          <div className="lg:hidden absolute top-0 left-0 w-full h-[300px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-md w-full"
          >
            <div className="mb-10 lg:hidden">
               <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/20 mb-4">
                <Bot className="w-6 h-6" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-2 tracking-tight">Login to AIE</h1>
            <p className="text-white/40 mb-10 text-sm">Enter your credentials to access your command center.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-4 focus:outline-none focus:border-primary/50 transition-all text-sm text-white placeholder:text-white/10"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-xs font-black uppercase tracking-widest text-white/40">Password</label>
                  <Link href="/auth/forgot-password" hidden className="text-xs text-primary/60 hover:text-primary transition-colors">
                    Forgot?
                  </Link>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-4 focus:outline-none focus:border-primary/50 transition-all text-sm text-white placeholder:text-white/10"
                />
              </div>

              <PremiumButton type="submit" className="w-full py-4 text-sm font-bold mt-2" disabled={loading}>
                {loading ? "Authorizing..." : "Continue to Dashboard"}
              </PremiumButton>
            </form>

            {/* Quick Access Section */}
            <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 text-center">Developer Quick-Access</p>
               <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => { setEmail("user@aie.com"); setPassword("user123"); }}
                    className="flex items-center justify-center gap-2 py-3 bg-white/5 rounded-xl border border-white/5 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:border-white/20 transition-all"
                  >
                     <Bot className="w-3 h-3" />
                     Demo User
                  </button>
                  <button 
                    onClick={() => { setEmail("admin@aie.com"); setPassword("admin313"); }}
                    className="flex items-center justify-center gap-2 py-3 bg-primary/5 rounded-xl border border-primary/10 text-[9px] font-black uppercase tracking-widest text-primary/40 hover:text-primary hover:border-primary/30 transition-all"
                  >
                     <Shield className="w-3 h-3" />
                     Super Admin
                  </button>
               </div>
            </div>

            <div className="mt-10 pt-6 text-center border-t border-white/5">
              <p className="text-white/40 text-sm">
                New to the platform?{" "}
                <Link href="/auth/signup" className="text-primary font-bold hover:underline ml-1">
                  Get Started Free
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

import { motion } from "framer-motion";
