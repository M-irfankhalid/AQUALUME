import Image from "next/image";
import { IconTarget, IconEye, IconShieldCheck, IconAward, IconUsers, IconLeaf } from "@tabler/icons-react";

const values = [
  {
    title: "Integrity",
    description: "We do what we say we'll do — every quote, every schedule, every promise.",
    icon: <IconShieldCheck size={26} />,
  },
  {
    title: "Craftsmanship",
    description: "Skilled tradespeople who take genuine pride in the quality of their work.",
    icon: <IconAward size={26} />,
  },
  {
    title: "Safety",
    description: "Every worker goes home safe. No exceptions, no shortcuts, ever.",
    icon: <IconUsers size={26} />,
  },
  {
    title: "Sustainability",
    description: "Responsible building practices that reduce waste and environmental impact.",
    icon: <IconLeaf size={26} />,
  },
];

const leadership = [
  { name: "James Whitfield", role: "President & CEO", image: "/images/team/lee-robinson.png" },
  { name: "Maria Delgado", role: "Chief Operating Officer", image: "/images/team/amy-burns.png" },
  { name: "Kevin O'Brien", role: "Director of Construction", image: "/images/team/michael-novotny.png" },
  { name: "Priya Raman", role: "Chief Engineer", image: "/images/team/delba-de-oliveira.png" },
];

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          <Image src="/images/about-us.jpg" alt="Construction team" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 to-dark/70" />
        </div>
        <div className="relative z-10 px-8 py-20 text-center sm:px-12 sm:py-24">
          <span className="mb-4 inline-block rounded-md bg-primary px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            About Cornerstone
          </span>
          <h1 className="mx-auto mb-5 max-w-3xl text-4xl font-black text-white sm:text-5xl">
            Building the Communities Where People Live and Work
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            For more than 25 years, Cornerstone Construction has delivered projects that
            stand as landmarks of quality, safety, and craftsmanship.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">Our Story</h2>
          <p className="mb-4 leading-relaxed text-muted">
            Cornerstone Construction was founded in 1998 by James Whitfield, a site
            foreman with a simple conviction: that buildings should be constructed with
            honesty and care, not shortcuts. That first crew of six has grown into a
            team of more than 1,200 tradespeople, engineers, and project managers.
          </p>
          <p className="mb-4 leading-relaxed text-muted">
            Today we operate across commercial, residential, healthcare, and industrial
            sectors, completing more than 850 projects to date. Along the way, one thing
            has never changed — we still build every project as if our own name is on
            the door.
          </p>
          <p className="leading-relaxed text-muted">
            We are fully licensed, bonded, and insured, and we maintain an
            industry-leading safety record that reflects our genuine commitment to the
            people who build with us.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
          <Image
            src="/images/medium-shot-low-angle-view-smiling-engineer.jpg"
            alt="Cornerstone engineer on site"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-surface p-8">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
            <IconTarget size={24} />
          </div>
          <h3 className="mb-3 text-xl font-bold text-foreground">Our Mission</h3>
          <p className="leading-relaxed text-muted">
            To deliver construction projects of exceptional quality, on time and within
            budget, while maintaining the highest standards of safety and integrity —
            creating lasting value for our clients and communities.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-8">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
            <IconEye size={24} />
          </div>
          <h3 className="mb-3 text-xl font-bold text-foreground">Our Vision</h3>
          <p className="leading-relaxed text-muted">
            To be the region&apos;s most trusted construction partner — recognized for
            building excellence, innovation in sustainable construction, and a
            workplace where skilled trades can build lasting careers.
          </p>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-extrabold sm:text-4xl">Our Core Values</h2>
          <p className="mx-auto max-w-2xl text-muted">
            The principles that guide every decision we make on and off the job site.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-xl border border-border bg-surface p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {value.icon}
              </div>
              <h3 className="mb-2 font-bold text-foreground">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="rounded-2xl bg-dark p-8 sm:p-12">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-extrabold text-white sm:text-4xl">
            Our Leadership
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Experienced professionals who have spent their careers in construction.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto mb-4 size-28">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover ring-4 ring-dark-2"
                />
              </div>
              <h3 className="font-bold text-white">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
