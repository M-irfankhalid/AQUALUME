import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Meridian Office Tower",
    category: "Commercial",
    location: "Denver, CO",
    description:
      "A 14-story Class A office tower with LEED Gold certification, completed three weeks ahead of schedule.",
    image: "/images/projects/project-1.jpg",
  },
  {
    id: 2,
    title: "Riverside Residential Complex",
    category: "Residential",
    location: "Boulder, CO",
    description:
      "A 180-unit residential community featuring modern amenities and sustainable building systems.",
    image: "/images/projects/project-2.jpg",
  },
  {
    id: 3,
    title: "Northgate Distribution Center",
    category: "Industrial",
    location: "Aurora, CO",
    description:
      "A 420,000 sq ft distribution facility engineered for high-throughput logistics operations.",
    image: "/images/projects/project-3.jpg",
  },
  {
    id: 4,
    title: "Summit Medical Center",
    category: "Healthcare",
    location: "Lakewood, CO",
    description:
      "A 90,000 sq ft outpatient medical facility built to strict healthcare compliance standards.",
    image: "/images/header-image.jpg",
  },
  {
    id: 5,
    title: "Cornerstone Corporate Campus",
    category: "Corporate",
    location: "Centennial, CO",
    description:
      "A multi-building corporate campus with collaborative workspaces for 2,000 employees.",
    image: "/images/projects/project-2.jpg",
  },
  {
    id: 6,
    title: "Highlands Mixed-Use Development",
    category: "Mixed-Use",
    location: "Denver, CO",
    description:
      "A vibrant mixed-use development combining retail, residential, and public plaza space.",
    image: "/images/projects/project-1.jpg",
  },
];

export default function ProjectPage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <Image src="/images/projects/project-1.jpg" alt="Featured project" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 to-dark/70" />
        </div>
        <div className="relative z-10 px-8 py-20 text-center sm:px-12 sm:py-24">
          <span className="mb-4 inline-block rounded-md bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            Our Portfolio
          </span>
          <h1 className="mx-auto mb-5 max-w-3xl text-4xl font-black text-white sm:text-5xl">
            Projects That Speak for Themselves
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            More than 850 completed projects across commercial, residential, industrial,
            and healthcare sectors.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-surface p-8 lg:grid-cols-4">
        {[
          { value: "850+", label: "Projects Completed" },
          { value: "12M+", label: "Sq Ft Built" },
          { value: "98%", label: "On-Time Delivery" },
          { value: "25+", label: "Years Experience" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-black text-primary">{stat.value}</p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-primary hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                {project.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="mb-1 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
                {project.location}
              </p>
              <p className="text-sm leading-relaxed text-muted">{project.description}</p>
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-dark px-8 py-14 text-center sm:px-12">
        <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
          Let&apos;s Build Your Next Project
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-slate-400">
          Ready to break ground? Contact our team for a detailed consultation and estimate.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:bg-primary-hover"
        >
          Start Your Project
        </Link>
      </section>
    </div>
  );
}
