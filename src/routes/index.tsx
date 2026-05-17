import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { HowIWork } from "@/components/sections/HowIWork";
import { Services } from "@/components/sections/Services";
import { HowWeHelp } from "@/components/sections/HowWeHelp";
import { Hero } from "@/components/sections/Hero";
import { Founder } from "@/components/sections/Founder";
import { LifestyleBand } from "@/components/sections/LifestyleBand";

import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const WHATSAPP = "https://wa.me/34606899991";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "LevelUp Design Co. — Desarrollo Web & Optimización de Negocios",
      },
      {
        name: "description",
        content:
          "De idea a negocio. Desarrollo web profesional y optimización digital para captar más clientes. Juan Leiva, Málaga.",
      },
      {
        property: "og:title",
        content:
          "LevelUp Design Co. — Desarrollo Web & Optimización de Negocios",
      },
      {
        property: "og:description",
        content:
          "De idea a negocio. Web, redes, Google Business y automatización con WhatsApp.",
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
        <Hero />
        <HowWeHelp />
        <ProblemSolution />
        <Services />
        <Founder />
        <LifestyleBand />
        <HowIWork />
        <CTA />
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
            className="inline-flex items-center gap-2 bg-brand text-brand-foreground px-5 py-3 rounded-md text-sm font-medium shadow-[0_4px_14px_rgba(123,30,43,0.25)] transition-all hover:bg-[oklch(0.32_0.12_18)] hover:shadow-[0_8px_24px_rgba(123,30,43,0.35)]"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar asesoramiento por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}