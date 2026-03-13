"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { PremiumButton } from "@/components/ui/PremiumButton";
import { 
  Database, 
  Plus, 
  Trash2, 
  Edit3, 
  Zap, 
  TrendingUp, 
  Save,
  Globe,
  Settings
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const INITIAL_PLANS = [
  { id: 1, name: "Standard", price: 0, credits: 50, featured: false },
  { id: 2, name: "Creator Pro", price: 99, credits: 500, featured: true },
  { id: 3, name: "Enterprise", price: 499, credits: 5000, featured: false },
];

const INITIAL_CREDIT_PACKS = [
  { id: 1, name: "Starter Kit", credits: 500, price: 49 },
  { id: 2, name: "Creator Pro", credits: 2500, price: 199 },
  { id: 3, name: "Studio Elite", credits: 10000, price: 699 },
];

export function AdminPricingManager() {
  const [plans, setPlans] = useState(INITIAL_PLANS);
  const [packs, setPacks] = useState(INITIAL_CREDIT_PACKS);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         {/* Subscription Tiers */}
         <div className="space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40 flex items-center gap-2">
                 <Settings className="w-4 h-4" />
                 Subscription Tiers
               </h3>
               <PremiumButton variant="outline" className="text-[10px] py-2 border-white/5">
                  <Plus className="w-3 h-3 mr-2" />
                  New Tier
               </PremiumButton>
            </div>

            <div className="space-y-4">
               {plans.map((plan) => (
                 <GlassCard key={plan.id} className="p-6 border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all">
                    <div className="flex justify-between items-center">
                       <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-primary">
                             <TrendingUp className="w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="font-bold text-lg">{plan.name}</h4>
                             <p className="text-[10px] text-white/20 uppercase font-black tracking-widest">{plan.credits} Monthly Credits</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-8">
                          <div className="text-right">
                             <div className="text-xl font-black">${plan.price}</div>
                             <div className="text-[9px] text-white/20 uppercase font-bold tracking-widest">Per Month</div>
                          </div>
                          <div className="flex gap-2">
                             <button className="p-2 hover:bg-white/5 rounded-lg text-white/20 hover:text-white transition-all"><Edit3 className="w-4 h-4" /></button>
                             <button className="p-2 hover:bg-white/5 rounded-lg text-white/20 hover:text-red-400 transition-all"><Trash2 className="w-4 h-4" /></button>
                          </div>
                       </div>
                    </div>
                 </GlassCard>
               ))}
            </div>
         </div>

         {/* Credit Packages */}
         <div className="space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40 flex items-center gap-2">
                 <Zap className="w-4 h-4 text-primary" />
                 Standalone Credits
               </h3>
               <PremiumButton variant="outline" className="text-[10px] py-2 border-white/5 text-primary border-primary/20">
                  <Plus className="w-3 h-3 mr-2" />
                  Add Package
               </PremiumButton>
            </div>

            <div className="space-y-4">
               {packs.map((pack) => (
                 <GlassCard key={pack.id} className="p-6 border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all">
                    <div className="flex justify-between items-center">
                       <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-primary/40">
                             <Database className="w-5 h-5" />
                          </div>
                          <div>
                             <h4 className="font-bold text-lg">{pack.name}</h4>
                             <p className="text-[10px] text-white/20 uppercase font-black tracking-widest">{pack.credits} Credits</p>
                          </div>
                       </div>
                       <div className="flex items-center gap-8">
                          <div className="text-right">
                             <div className="text-xl font-black">${pack.price}</div>
                             <div className="text-[9px] text-white/20 uppercase font-bold tracking-widest">One-time</div>
                          </div>
                          <div className="flex gap-2">
                             <button className="p-2 hover:bg-white/5 rounded-lg text-white/20 hover:text-white transition-all"><Edit3 className="w-4 h-4" /></button>
                             <button className="p-2 hover:bg-white/5 rounded-lg text-white/20 hover:text-red-400 transition-all"><Trash2 className="w-4 h-4" /></button>
                          </div>
                       </div>
                    </div>
                 </GlassCard>
               ))}
            </div>
         </div>
      </div>

      {/* Global Modifiers */}
      <GlassCard className="p-10 border-primary/20 bg-primary/5">
         <div className="flex items-center gap-3 text-primary mb-8">
            <Globe className="w-5 h-5 shadow-neon" />
            <h3 className="text-xs font-black uppercase tracking-[0.4em]">Global Economic Modifiers</h3>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Referral Multiplier", value: "20%", hint: "Default rev-share %" },
              { label: "Model Training Tax", value: "1.2x", hint: "Multiplier on credit usage" },
              { label: "Retention Bonus", value: "50", hint: "Credits awarded for renewals" },
            ].map((mod, i) => (
              <div key={i} className="space-y-3">
                 <label className="text-[10px] font-black uppercase tracking-widest text-white/40">{mod.label}</label>
                 <div className="flex gap-4">
                    <input type="text" defaultValue={mod.value} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-lg font-black tracking-tighter" />
                    <PremiumButton variant="outline" className="px-5 border-white/5"><Save className="w-4 h-4" /></PremiumButton>
                 </div>
                 <p className="text-[9px] text-white/20 font-bold uppercase tracking-widest">{mod.hint}</p>
              </div>
            ))}
         </div>
      </GlassCard>
    </div>
  );
}
