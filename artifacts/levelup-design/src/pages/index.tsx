import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { HowIWork } from "@/components/sections/HowIWork";
import { Services } from "@/components/sections/Services";
import { HowWeHelp } from "@/components/sections/HowWeHelp";
import { ForWhom } from "@/components/sections/ForWhom";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Founder } from "@/components/sections/Founder";
import { LifestyleBand } from "@/components/sections/LifestyleBand";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import lifestyleWalking from "@/assets/lifestyle-walking.png";

const workspaceBackground =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80";

export default function IndexPage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section
          className="relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${lifestyleWalking})`,
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,160,90,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,120,60,0.08),transparent_22%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/35 to-slate-950/90" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent"
          />
          <div className="relative z-10">
            <Hero />
            <Founder />
            <LifestyleBand />
            <HowIWork />
          </div>
        </section>

        <section
          className="relative overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${workspaceBackground})`,
            backgroundPosition: "center 30%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/75 to-slate-950/98" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,160,90,0.08),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(255,120,60,0.06),transparent_22%)]" />
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative z-10">
            <HowWeHelp />
            <ProblemSolution />
            <ForWhom />
            <Services />
            <FinalCTA />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
