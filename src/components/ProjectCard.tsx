import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ProjectCard({
  title,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col h-full overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-brand/50 hover:shadow-[0_24px_48px_rgba(123,30,43,0.15)]"
    >
      {/* Imagen */}
      <div className="relative h-72 md:h-80 w-full overflow-hidden bg-slate-900">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Botón flotante al hover */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-brand/0 group-hover:bg-brand text-white/0 group-hover:text-white shadow-lg transition-all duration-500 group-hover:shadow-[0_12px_32px_rgba(123,30,43,0.4)]">
            <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <h3 className="font-serif text-2xl md:text-2xl text-white transition-colors group-hover:text-brand">
          {title}
        </h3>

        <p className="mt-3 text-sm md:text-base leading-relaxed text-white/70 flex-1">
          {description}
        </p>

        {/* Botón visible */}
        <div className="mt-6 flex items-center gap-3 text-sm font-medium text-brand border-b border-brand/30 w-fit pb-1 transition-all group-hover:border-brand group-hover:gap-4">
          Ver proyecto
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      {/* Borde interactivo */}
      <div className="absolute inset-0 rounded-3xl border border-brand/0 group-hover:border-brand/30 pointer-events-none transition-colors duration-500" />
    </a>
  );
}
