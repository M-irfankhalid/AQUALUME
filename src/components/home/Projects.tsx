import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

const projects = [
  {
    title: "Meridian Office Tower",
    category: "Commercial",
    image: "/images/projects/project-1.jpg",
  },
  {
    title: "Riverside Residential Complex",
    category: "Residential",
    image: "/images/projects/project-2.jpg",
  },
  {
    title: "Northgate Distribution Center",
    category: "Industrial",
    image: "/images/projects/project-3.jpg",
  },
  {
    title: "Summit Medical Center",
    category: "Healthcare",
    image: "/images/header-image.jpg",
  },
];

export default function Projects() {
  return (
    <section className="section">
      <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-block rounded-md bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>
        </div>
        <Link
          href="/project"
          className="inline-flex items-center gap-2 self-start rounded-md border-2 border-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary transition-all hover:bg-primary hover:text-white sm:self-auto"
        >
          All Projects
          <IconArrowRight size={18} />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <Link
            key={project.title}
            href="/project"
            className="group relative block overflow-hidden rounded-xl border border-border"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="mb-2 inline-block rounded bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                {project.category}
              </span>
              <h3 className="text-lg font-bold leading-tight text-white">
                {project.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
