import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    subtitle,
    description,
    image,
    imagePosition,
    imageAlt,
    link,
  } = project;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] text-left backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_24px_48px_rgba(123,30,43,0.2),0_0_0_1px_rgba(123,30,43,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c0a0b]">
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className={cn(
            "h-full w-full scale-[1.02] object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]",
            imagePosition,
          )}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-slate-950/5"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(123,30,43,0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950/50 text-white/90 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
          {subtitle}
        </p>

        <h3 className="mt-2 font-serif text-2xl leading-tight text-white transition-colors duration-300 group-hover:text-brand md:text-[1.7rem]">
          {title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65 md:text-[0.95rem]">
          {description}
        </p>

        <div className="mt-7 inline-flex w-fit items-center gap-2.5 text-sm font-medium text-brand">
          <span className="border-b border-brand/35 pb-0.5 transition-all duration-300 group-hover:border-brand">
            Ver proyecto
          </span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </a>
  );
}
