import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ClientTicker } from "@/components/sections/ClientTicker";
import { AIServices } from "@/components/sections/AIServices";
import { Showcase } from "@/components/sections/Showcase";
import { CourseMarketplace } from "@/components/sections/CourseMarketplace";
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

        <div id="marketplace" className="relative z-10 bg-black">
          <CourseMarketplace />
        </div>

        <div id="testimonials" className="relative z-10 bg-black">
          <Testimonials />
        </div>
      </div>

      <Footer />
    </main>
  );
}
