import { createFileRoute } from "@tanstack/react-router";

import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { HowIWork } from "@/components/sections/HowIWork";
import { Services } from "@/components/sections/Services";
import { HowWeHelp } from "@/components/sections/HowWeHelp";
import { Hero } from "@/components/sections/Hero";
import { Founder } from "@/components/sections/Founder";
import { LifestyleBand } from "@/components/sections/LifestyleBand";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { MessageCircle } from "lucide-react";

const workspaceBackground =
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80";
import lifestyleWalking from "@/assets/lifestyle-walking.png";

const WHATSAPP = "https://wa.me/34606899991";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "LevelUp Design Co. — Desarrollo Web & Optimización de Empresas",
      },
      {
        name: "description",
        content:
          "Web, automatización, Google Business y presencia digital.",
      },
      {
        property: "og:title",
        content:
          "LevelUp Design Co. — Desarrollo Web & Optimización de Empresas",
      },
      {
        property: "og:description",
        content:
          "Web, automatización, Google Business y presencia digital.",
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        {/* WALKING (Hero + Founder + Construyendo marcas digitales + Cómo trabajo) */}
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

        {/* HOME DESK (Secciones siguientes) */}
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
            <Services />
            <CTA />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-9">
      <div className="rounded-2xl border border-border bg-gradient-to-br from-brand-soft to-background p-7 md:p-9 text-center">
        <h2 className="font-serif text-2xl md:text-[1.85rem] text-ink max-w-2xl mx-auto leading-tight">
          Empieza a mejorar tu negocio desde hoy
        </h2>

        <div className="mt-5 flex justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-5 py-3 rounded-md text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar asesoramiento por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}