import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ClientTicker } from "@/components/sections/ClientTicker";
import { AIServices } from "@/components/sections/AIServices";
import { Showcase } from "@/components/sections/Showcase";
import { CourseMarketplace } from "@/components/sections/CourseMarketplace";
import { Pricing } from "@/components/sections/Pricing";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { Solution } from "@/components/sections/Solution";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30 selection:text-primary">
      {/* Global Aesthetics */}
      <div className="fixed inset-0 z-[99] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <Navbar />
      
      <div className="relative">
        <Hero />
        <ClientTicker />
        <AIServices />
        
        <div id="influencers" className="relative z-10 bg-black">
          <Showcase />
        </div>

        <div id="solution" className="relative z-10 bg-black">
          <Solution />
        </div>

        <div id="courses" className="relative z-10 bg-black">
          <ProblemStatement />
        </div>

        <div id="pricing" className="relative z-10 bg-black">
          <CourseMarketplace />
          <Pricing />
        </div>

        <div id="testimonials" className="relative z-10 bg-black">
          <Testimonials />
        </div>
      </div>

      <footer className="py-24 border-t border-white/10 bg-black">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">AIE</h2>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              We provide the tools and education you need to dominate the synthetic media landscape. 
              Join thousands of creators building the future today.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-primary uppercase text-xs tracking-widest">Resources</h3>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI Models</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-6 text-primary uppercase text-xs tracking-widest">Company</h3>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-24 pt-8 border-t border-white/5 text-center text-white/20 text-xs">
          <p>&copy; 2026 AIE Platform. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
