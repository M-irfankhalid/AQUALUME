import Link from "next/link";
import {
  IconBuildingSkyscraper,
  IconHome,
  IconPaint,
  IconTool,
  IconRuler,
  IconBuildingFactory,
  IconArrowRight,
} from "@tabler/icons-react";

const services = [
  {
    title: "General Contracting",
    description:
      "Full-service general contracting for commercial, industrial, and institutional projects of every scale.",
    icon: <IconBuildingSkyscraper size={30} />,
  },
  {
    title: "Residential Building",
    description:
      "Custom homes, multi-family developments, and residential communities built to exacting standards.",
    icon: <IconHome size={30} />,
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Transform existing spaces with structural renovations, modern upgrades, and complete remodels.",
    icon: <IconPaint size={30} />,
  },
  {
    title: "Design-Build Services",
    description:
      "Streamlined design-build delivery that reduces risk, cost, and schedule across the project lifecycle.",
    icon: <IconRuler size={30} />,
  },
  {
    title: "Industrial Construction",
    description:
      "Warehouses, manufacturing plants, and industrial facilities engineered for durability and efficiency.",
    icon: <IconBuildingFactory size={30} />,
  },
  {
    title: "Project Management",
    description:
      "Expert oversight of budgets, schedules, subcontractors, and safety from groundbreaking to handover.",
    icon: <IconTool size={30} />,
  },
];

export default function Services() {
  return (
    <section className="section">
      <div className="text-center mb-12">
        <span className="inline-block rounded-md bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4">
          What We Do
        </span>
        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl mb-4">
          Construction Services
        </h2>
        <p className="mx-auto max-w-2xl text-muted">
          Comprehensive construction services backed by decades of hands-on experience
          and a commitment to doing the job right the first time.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:border-primary hover:shadow-lg"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-white transition-transform group-hover:scale-110">
              {service.icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/service"
          className="inline-flex items-center gap-2 rounded-md border-2 border-primary px-8 py-3.5 text-base font-bold uppercase tracking-wide text-primary transition-all hover:bg-primary hover:text-white"
        >
          Explore All Services
          <IconArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
