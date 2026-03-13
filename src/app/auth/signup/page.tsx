"use client";

import { PremiumButton } from "@/components/ui/PremiumButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { UserPlus, Mail, Lock, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        router.push("/auth/login?message=Account created successfully");
      } else {
        const data = await res.json();
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      alert("Failed to register");
    } finally {
      setLoading(false);
    }
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
                Join the Elite
              </div>
              
              <h2 className="text-5xl font-black leading-tight mb-6 tracking-tighter">
                Scale Your Creativity with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Advanced AI Agency Tools.</span>
              </h2>
              
              <p className="text-lg text-white/40 leading-relaxed mb-12">
                Create your account in seconds and unlock the full power of hyper-realistic 
                AI influencers, automated content generation, and global campaign management.
              </p>

              {/* Social Proof Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="glass p-4 rounded-2xl border-white/5 bg-white/5">
                  <p className="text-2xl font-black text-primary mb-1">2,500+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Active Agencies</p>
                </div>
                <div className="glass p-4 rounded-2xl border-white/5 bg-white/5">
                  <p className="text-2xl font-black text-primary mb-1">1M+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Daily AI Generations</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Elements for Premium Feel */}
          <div className="absolute top-1/4 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Right Side: Auth Form */}
        <div className="flex-1 flex items-center justify-center p-6 pt-32 lg:pt-0 relative z-10 bg-black">
          {/* Subtle mobile background blur */}
          <div className="lg:hidden absolute top-0 right-0 w-full h-[300px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-md w-full"
          >
            <div className="mb-10 lg:hidden text-center lg:text-left">
               <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/20 mb-4 mx-auto lg:mx-0">
                <UserPlus className="w-6 h-6" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-2 tracking-tight">Create Account</h1>
            <p className="text-white/40 mb-10 text-sm">Start your journey into the future of digital influence.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-[#111] border border-white/5 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary/50 transition-all text-sm text-white placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-[#111] border border-white/5 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary/50 transition-all text-sm text-white placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#111] border border-white/5 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary/50 transition-all text-sm text-white placeholder:text-white/10"
                  />
                </div>
              </div>

              <PremiumButton type="submit" className="w-full py-4 text-sm font-bold mt-4" disabled={loading}>
                {loading ? "Initializing..." : "Complete Registration"}
              </PremiumButton>
            </form>

            <div className="mt-10 pt-6 text-center border-t border-white/5">
              <p className="text-white/40 text-sm">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-primary font-bold hover:underline ml-1">
                  Sign In
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
