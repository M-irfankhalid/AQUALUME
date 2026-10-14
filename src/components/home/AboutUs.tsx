import Image from "next/image";
import Link from "next/link";
import { IconCheck } from "@tabler/icons-react";

export default function AboutUs() {
  const points = [
    "Fully licensed, bonded, and insured",
    "In-house engineering and design teams",
    "Transparent pricing with no hidden costs",
    "Dedicated project manager on every job",
  ];

  return (
    <section className="section">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/about-us.jpg"
              alt="Cornerstone Construction team on site"
              fill
              className="object-cover"
            />
          </div>
          {/* Floating stat */}
          <div className="absolute -bottom-6 -right-4 rounded-xl bg-primary p-6 text-white shadow-xl sm:-right-6">
            <p className="text-3xl font-black">850+</p>
            <p className="text-sm font-medium">Projects Delivered</p>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="inline-block rounded-md bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4">
            About Us
          </span>
          <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Building Trust Through Quality Construction
          </h2>
          <p className="mb-5 leading-relaxed text-muted">
            Cornerstone Construction has been a trusted name in the building industry
            since 1998. What began as a small family contracting business has grown into
            a full-service construction firm serving clients across the region.
          </p>
          <p className="mb-7 leading-relaxed text-muted">
            We combine old-school craftsmanship with modern construction technology to
            deliver projects that are safe, sustainable, and built to last. Every
            project — large or small — gets the same level of care and attention.
          </p>

          <ul className="mb-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <IconCheck size={15} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg"
          >
            More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}
