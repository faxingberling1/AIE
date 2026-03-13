"use client";

import { PremiumButton } from "@/components/ui/PremiumButton";
import { Bot, Menu, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Courses", href: "/marketplace" },
  { label: "Mission", href: "/mission" },
  { label: "Influencers", href: "/influencers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Referral", href: "/dashboard/referrals" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none">
      <div
        className={cn(
          "mt-8 mx-4 px-4 py-2 transition-all duration-700 flex items-center justify-between rounded-full border pointer-events-auto relative overflow-hidden",
          isScrolled
            ? "max-w-5xl w-full bg-black/40 backdrop-blur-3xl border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8),0_0_20px_rgba(0,242,255,0.05)]"
            : "max-w-[1100px] w-full bg-white/[0.02] backdrop-blur-xl border-white/5"
        )}
      >
        {/* Interior Glow Effect */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {/* Brand (Left) */}
        <div className="flex-1 flex items-center">
          <Link href="/" className="flex items-center gap-3 group ml-4">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-all duration-500 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <span className="text-[14px] font-black tracking-tighter text-white uppercase group-hover:text-primary transition-colors">AIE</span>
          </Link>
        </div>

        {/* Centered Navigation (Center) */}
        <div className="hidden lg:flex items-center justify-center gap-1 px-8 py-1.5 bg-white/[0.03] rounded-full border border-white/5 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-5 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white/30 hover:text-white transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-primary group-hover:w-1/3 transition-all duration-500" />
            </Link>
          ))}
        </div>

        {/* Actions (Right) */}
        <div className="flex-1 flex items-center justify-end">
          <div className="hidden md:flex items-center gap-6 mr-2">
            {status === "authenticated" ? (
              <div className="flex items-center gap-6">
                <Link
                  href={(session?.user as any)?.role === "ADMIN" ? "/admin/dashboard" : "/dashboard"}
                  className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary/80 hover:text-primary transition-colors"
                >
                  Dashboard
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
                <button onClick={() => signOut()} className="text-[9px] font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors">
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/auth/login" className="px-4 py-2 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                  Login
                </Link>
                <Link href="/auth/signup">
                  <PremiumButton size="sm" className="px-6 py-2.5 text-[10px] uppercase font-black tracking-widest rounded-full shadow-neon-sm">
                    Get Started
                  </PremiumButton>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white w-8 h-8 mr-2 flex items-center justify-center glass rounded-full border-white/10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-28 left-4 right-4 bg-black/95 backdrop-blur-3xl border border-white/5 p-8 rounded-[2.5rem] flex flex-col gap-6 animate-in slide-in-from-top-4 duration-500 pointer-events-auto shadow-[0_0_100px_rgba(0,0,0,0.9)]">
          <div className="space-y-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-3xl font-black tracking-tighter italic text-white/90 hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="h-[1px] w-full bg-white/5" />
          {status === "authenticated" ? (
            <Link
              href={(session?.user as any)?.role === "ADMIN" ? "/admin/dashboard" : "/dashboard"}
              className="text-primary font-black uppercase tracking-[0.2em] flex items-center justify-between group"
            >
              Dashboard <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          ) : (
            <Link href="/auth/signup">
              <PremiumButton className="w-full py-6 rounded-2xl text-[12px]">Get Started</PremiumButton>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
