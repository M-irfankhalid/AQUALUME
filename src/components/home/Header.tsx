import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconShieldCheck, IconAward, IconClock } from "@tabler/icons-react";

export default function Header() {
  const badges = [
    { icon: <IconShieldCheck size={20} />, label: "Licensed & Insured" },
    { icon: <IconClock size={20} />, label: "On-Time Delivery" },
    { icon: <IconAward size={20} />, label: "25+ Years Experience" },
  ];

  return (
    <section className="relative overflow-hidden rounded-2xl">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/header-image.jpg"
          alt="Construction site"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/60" />
      </div>

      <div className="relative z-10 px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white mb-6">
            Building Excellence Since 1998
          </span>

          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl mb-6">
            We Build Structures That
            <span className="block text-primary">Stand the Test of Time</span>
          </h1>

          <p className="max-w-2xl text-lg text-slate-300 mb-9">
            From commercial developments to residential communities, Cornerstone
            Construction delivers projects on time, on budget, and to the highest
            standards of quality and safety.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:bg-primary-hover hover:shadow-xl"
            >
              Request a Free Quote
              <IconArrowRight size={20} />
            </Link>
            <Link
              href="/project"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/30 px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition-all hover:border-white hover:bg-white/10"
            >
              View Our Projects
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {badges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <span className="text-primary">{badge.icon}</span>
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
