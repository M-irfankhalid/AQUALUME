import { IconShieldCheck, IconClock, IconUsers, IconAward } from "@tabler/icons-react";

const features = [
  {
    title: "Safety First, Always",
    description:
      "An industry-leading safety record with rigorous protocols, ongoing training, and full OSHA compliance on every site.",
    icon: <IconShieldCheck size={30} />,
  },
  {
    title: "On Time, On Budget",
    description:
      "Detailed scheduling and transparent cost management mean your project is delivered when promised, at the agreed price.",
    icon: <IconClock size={30} />,
  },
  {
    title: "Skilled Craftsmanship",
    description:
      "A dedicated team of licensed tradespeople, engineers, and project managers who take pride in quality work.",
    icon: <IconUsers size={30} />,
  },
  {
    title: "Built to Last",
    description:
      "We use premium materials and proven construction methods so your investment performs for decades to come.",
    icon: <IconAward size={30} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left: heading */}
        <div>
          <span className="inline-block rounded-md bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Why Cornerstone
          </span>
          <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            A Construction Partner You Can Trust
          </h2>
          <p className="mb-8 text-muted leading-relaxed">
            For over 25 years we&apos;ve built our reputation one project at a time —
            by showing up, doing exceptional work, and standing behind everything we
            build. When you choose Cornerstone, you choose accountability.
          </p>
          <div className="flex items-center gap-6 rounded-xl border border-border bg-surface p-6">
            <div className="text-4xl font-black text-primary">25+</div>
            <p className="text-sm text-muted">
              Years of delivering complex construction projects across commercial,
              residential, and industrial sectors.
            </p>
          </div>
        </div>

        {/* Right: feature grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
