import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, subtitle, description, image, imagePosition, imageAlt, link } =
    project;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver proyecto: ${title}`}
      className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] text-left backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_12px_28px_rgba(123,30,43,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
    >
      <div className="relative aspect-[5/3] w-full overflow-hidden rounded-t-2xl bg-[#0c0a0b]">
        <img
          src={image}
          alt={imageAlt}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: imagePosition }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-slate-950/55 text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100"
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
          {subtitle}
        </p>

        <h3 className="mt-1.5 font-serif text-lg leading-tight text-white transition-colors duration-300 group-hover:text-brand md:text-xl">
          {title}
        </h3>

        <p className="mt-2 flex-1 text-xs leading-relaxed text-white/65 md:text-sm">
          {description}
        </p>

        <div className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-medium text-brand md:text-sm">
          <span className="border-b border-brand/35 pb-0.5 transition-all duration-300 group-hover:border-brand">
            Ver proyecto
          </span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </a>
  );
}
