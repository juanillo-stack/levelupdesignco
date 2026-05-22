import { ProjectCard } from "@/components/ProjectCard";

const homeLevelupInteriores =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

const PROJECTS: Project[] = [
  {
    id: "levelup-interiores",
    title: "LevelUp Interiores",
    description:
      "Proyecto digital para una empresa especializada en reformas de cocinas, baños y reformas integrales en Málaga.",
    image: homeLevelupInteriores,
    link: "https://levelup-interiores-fullstack.vercel.app",
    tags: ["Web profesional", "Diseño", "Málaga"],
  },
  // Más proyectos pueden agregarse aquí siguiendo el mismo formato
];

export function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="max-w-3xl mb-14">
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
          Nuestros trabajos
        </div>

        <h2 className="mt-2 font-serif text-4xl md:text-5xl text-white">
          Proyectos destacados
        </h2>

        <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed">
          Diseño, desarrollo y optimización digital de proyectos reales que
          generan resultados.
        </p>
      </div>

      {/* Grid de proyectos */}
      <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>

      {/* Mensaje cuando hay pocos proyectos */}
      {PROJECTS.length === 1 && (
        <div className="mt-16 text-center">
          <p className="text-white/50 text-sm">
            Nuevos proyectos digitales premium en desarrollo.
          </p>
        </div>
      )}
    </section>
  );
}
