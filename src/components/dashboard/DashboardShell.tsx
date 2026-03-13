"use client";

import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { AdvancedSidebar } from "./AdvancedSidebar";
import { Breadcrumbs } from "./Breadcrumbs";
import { DashboardHeader } from "./DashboardHeader";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <AdvancedSidebar />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col overflow-hidden noise-bg">
        <DashboardHeader />

        {/* Dynamic Content */}
        <div className="flex-grow overflow-y-auto p-8 relative">
          <Breadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 max-w-7xl mx-auto"
          >
            {children}
          </motion.div>
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             {[...Array(20)].map((_, i) => (
               <motion.div
                 key={i}
                 initial={{ 
                   opacity: Math.random() * 0.3, 
                   x: Math.random() * 100 + "%", 
                   y: Math.random() * 100 + "%" 
                 }}
                 animate={{ 
                   y: [null, Math.random() * -100 - 50 + "px"],
                   opacity: [null, 0]
                 }}
                 transition={{ 
                   duration: Math.random() * 10 + 10, 
                   repeat: Infinity, 
                   ease: "linear",
                   delay: Math.random() * 10
                 }}
                 className="absolute w-1 h-1 bg-primary/20 rounded-full blur-[1px]"
               />
             ))}
          </div>
        </div>
      </main>
    </div>
  );
}
