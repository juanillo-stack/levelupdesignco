import { ProjectCard } from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";

function ProjectsBackdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-slate-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0c0610] to-slate-950"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_15%_-10%,rgba(123,30,43,0.22),transparent_55%),radial-gradient(ellipse_60%_45%_at_90%_110%,rgba(123,30,43,0.14),transparent_50%),radial-gradient(circle_at_50%_40%,rgba(255,160,90,0.05),transparent_40%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[linear-gradient(115deg,transparent_42%,rgba(123,30,43,0.08)_50%,transparent_58%)]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        <defs>
          <linearGradient id="projects-neon-a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(123,30,43,0)" />
            <stop offset="45%" stopColor="rgba(123,30,43,0.55)" />
            <stop offset="100%" stopColor="rgba(123,30,43,0)" />
          </linearGradient>
          <linearGradient id="projects-neon-b" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,160,90,0)" />
            <stop offset="50%" stopColor="rgba(255,140,80,0.35)" />
            <stop offset="100%" stopColor="rgba(255,160,90,0)" />
          </linearGradient>
        </defs>
        <path
          d="M-40 520 C 180 380, 320 640, 520 480 S 880 300, 1240 420"
          fill="none"
          stroke="url(#projects-neon-a)"
          strokeWidth="1.2"
        />
        <path
          d="M-20 180 C 240 320, 420 80, 640 220 S 960 380, 1220 260"
          fill="none"
          stroke="url(#projects-neon-b)"
          strokeWidth="0.9"
        />
        <path
          d="M80 720 L 420 580 L 760 660 L 1120 520"
          fill="none"
          stroke="rgba(123,30,43,0.25)"
          strokeWidth="0.6"
          strokeDasharray="6 14"
        />
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/35 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="relative w-full overflow-hidden">
      <ProjectsBackdrop />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mb-14 max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
            Mis proyectos
          </div>

          <h2 className="mt-2 font-serif text-4xl text-white md:text-5xl">
            Clientes destacados
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Proyectos reales con diseño, desarrollo y optimización. Haz clic en
            una tarjeta para visitar la web en vivo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
