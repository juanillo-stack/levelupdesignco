import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { HowIWork } from "@/components/sections/HowIWork";
import { Services } from "@/components/sections/Services";
import { HowWeHelp } from "@/components/sections/HowWeHelp";
import { ForWhom } from "@/components/sections/ForWhom";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Founder } from "@/components/sections/Founder";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { site } from "@/lib/site";
import heroOffice from "@/assets/hero-office.jpg";

const sectionBackground =
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1600&q=75";
const workspaceBackground =
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=1600&q=75";

export default function IndexPage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SEO
        title={site.defaultTitle}
        description={site.defaultDescription}
        path="/"
      />
      <Header />
      <main className="pt-16">
        <section
          className="relative overflow-hidden"
          aria-label="Portada y quiénes somos de LevelUp Design Co."
        >
          <img
            src={heroOffice}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,30,43,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.35),transparent_40%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/55 to-slate-950/88" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent"
          />
          <div className="relative z-10">
            <Hero />
            <Founder />
          </div>
        </section>

        <section
          className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${sectionBackground})`,
            backgroundPosition: "center 35%",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,30,43,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(123,30,43,0.1),transparent_24%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/78 to-slate-950/96" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent"
          />
          <div className="relative z-10">
            <HowIWork />
          </div>
        </section>

        <section
          className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${workspaceBackground})`,
            backgroundPosition: "center 30%",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/92 via-slate-950/82 to-slate-950/98" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(123,30,43,0.14),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(123,30,43,0.08),transparent_24%)]" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative z-10">
            <HowWeHelp />
            <ProblemSolution />
            <Services />
            <ForWhom />
            <FinalCTA />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
