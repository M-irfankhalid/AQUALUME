import Image from "next/image";
import Link from "next/link";
import {
  IconBuildingSkyscraper,
  IconHome,
  IconPaint,
  IconRuler,
  IconBuildingFactory,
  IconTool,
  IconCheck,
} from "@tabler/icons-react";

const services = [
  {
    title: "General Contracting",
    description:
      "Full-service general contracting for commercial, industrial, and institutional projects. We manage every trade, every schedule, and every detail.",
    icon: <IconBuildingSkyscraper size={30} />,
    features: ["Single point of accountability", "Full trade coordination", "Permitting & compliance"],
  },
  {
    title: "Residential Building",
    description:
      "Custom homes, townhomes, and multi-family developments built with the craftsmanship your family or residents deserve.",
    icon: <IconHome size={30} />,
    features: ["Custom home construction", "Multi-family developments", "Turnkey delivery"],
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Structural renovations, tenant improvements, and complete remodels that modernize and add lasting value to your property.",
    icon: <IconPaint size={30} />,
    features: ["Structural upgrades", "Tenant improvements", "Historic restoration"],
  },
  {
    title: "Design-Build Services",
    description:
      "A streamlined design-build approach that unifies design and construction under one contract, reducing risk and compressing schedules.",
    icon: <IconRuler size={30} />,
    features: ["Unified design & build", "Faster project delivery", "Cost certainty"],
  },
  {
    title: "Industrial Construction",
    description:
      "Warehouses, manufacturing plants, and distribution facilities engineered for durability, efficiency, and operational performance.",
    icon: <IconBuildingFactory size={30} />,
    features: ["Warehouse & distribution", "Manufacturing facilities", "Cold storage"],
  },
  {
    title: "Project Management",
    description:
      "Expert oversight of budgets, schedules, subcontractors, and safety — from pre-construction planning through final handover.",
    icon: <IconTool size={30} />,
    features: ["Budget management", "Schedule control", "Safety oversight"],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <Image src="/images/header-image.jpg" alt="Construction services" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 to-dark/70" />
        </div>
        <div className="relative z-10 px-8 py-20 text-center sm:px-12 sm:py-24">
          <span className="mb-4 inline-block rounded-md bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            Our Services
          </span>
          <h1 className="mx-auto mb-5 max-w-3xl text-4xl font-black text-white sm:text-5xl">
            Construction Services Built Around Your Project
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            From ground-up construction to complex renovations, we bring the expertise,
            equipment, and people to get it done right.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:border-primary hover:shadow-lg"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-white">
              {service.icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-foreground">{service.title}</h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
            <ul className="space-y-2 border-t border-border pt-5">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                  <IconCheck size={16} className="shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="rounded-2xl border border-border bg-surface p-8 sm:p-12">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-extrabold sm:text-4xl">How We Work</h2>
          <p className="mx-auto max-w-2xl text-muted">
            A clear, proven process that keeps you informed at every stage.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "01", title: "Consultation", text: "We listen to your goals, assess the site, and define scope and budget." },
            { step: "02", title: "Planning", text: "Detailed drawings, permits, scheduling, and material sourcing." },
            { step: "03", title: "Construction", text: "Skilled crews build to spec with rigorous quality and safety checks." },
            { step: "04", title: "Handover", text: "Final inspection, walkthrough, and warranty — we stand behind our work." },
          ].map((item) => (
            <div key={item.step}>
              <span className="mb-3 block text-4xl font-black text-primary/25">{item.step}</span>
              <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl bg-dark px-8 py-14 text-center sm:px-12">
        <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
          Have a Project in Mind?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-slate-400">
          Tell us about your build and we&apos;ll provide a detailed, no-obligation estimate.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:bg-primary-hover"
        >
          Request a Free Estimate
        </Link>
      </section>
    </div>
  );
}
