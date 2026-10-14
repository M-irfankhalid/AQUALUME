"use client";

import { useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { Reveal, MaskedHeading, useIsomorphicLayoutEffect } from "./Reveal";

const stats = [
  { value: 1240, label: "water points built", note: "Each one with a funded repair account." },
  { value: 412000, label: "people within a 15-minute walk", note: "Counted at the standpipe, not at the district line." },
  { value: 94, suffix: "%", label: "still working after five years", note: "Independently verified on re-visit." },
  { value: 38, label: "districts, four countries", note: "We work where we can keep coming back." },
];

const fieldNotes = [
  {
    index: "01",
    kicker: "Maintenance",
    kickerClass: "text-primary-deep",
    title: "The repair fund",
    body: "Every water point opens with money already set aside for its first failure. It is small, it is boring, and it is the single reason a pump is still running in year ten.",
    surface:
      "radial-gradient(120% 80% at 20% 0%, rgba(13,148,136,0.18), transparent 62%), linear-gradient(160deg, #e9f6f3, #f9fcfb)",
  },
  {
    index: "02",
    kicker: "Monitoring",
    kickerClass: "text-accent",
    title: "The sensor",
    body: "Flow sensors report daily. When a pump goes quiet the alert reaches a local technician before it reaches a donor report, which is the only ordering that matters.",
    surface:
      "radial-gradient(100% 70% at 82% 8%, rgba(194,65,12,0.12), transparent 62%), linear-gradient(160deg, #fdf4ee, #fcfbfa)",
  },
  {
    index: "03",
    kicker: "Ownership",
    kickerClass: "text-primary-deep",
    title: "The committee",
    body: "Nine people from the village, trained and elected, holding the spare parts and the ledger. We are guests at that table, and eventually we stop attending it.",
    surface:
      "radial-gradient(115% 78% at 50% 104%, rgba(94,234,212,0.34), transparent 62%), linear-gradient(160deg, #e7f6f4, #fafcfc)",
  },
];

/** Counts up once, the first time it is scrolled into view. */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const format = (n: number) => `${Math.round(n).toLocaleString("en-US")}${suffix}`;

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Readable without JS, and the final state under reduced motion.
    if (prefersReducedMotion()) return;

    // Set to zero before paint so the final value never flashes first.
    el.textContent = format(0);

    const counter = { v: 0 };
    const anim = gsap.to(counter, {
      v: value,
      duration: 2.1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => {
        el.textContent = format(counter.v);
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, suffix]);

  return <span ref={ref}>{format(value)}</span>;
}

export default function Impact() {
  return (
    <section id="impact" className="py-28 sm:py-36">
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-8 text-primary-deep">Impact</p>
          </Reveal>
          <MaskedHeading
            lines={["Counted at the tap,", "not in the press release"]}
            className="display text-[clamp(2rem,5.2vw,4.6rem)] text-foreground"
          />
        </div>

        {/* Four cards floating on the page rather than a ruled grid */}
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} y={20} delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-white p-8 shadow-soft transition-shadow duration-500 hover:shadow-lift">
                <dd className="display-tight text-[clamp(2.6rem,5vw,4rem)] tabular-nums text-primary-deep">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
                <dt>
                  <span className="block text-base text-foreground">{stat.label}</span>
                  <span className="mt-2 block text-xs leading-relaxed text-faint">
                    {stat.note}
                  </span>
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>

        <div className="mt-24">
          <Reveal>
            <p className="eyebrow mb-10 text-primary-deep">Field notes</p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {fieldNotes.map((note, i) => (
              <Reveal key={note.index} y={34} delay={i * 0.08} className="h-full">
                <article className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  {/* Generated surface — gradients and hairlines, no photograph. */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{ backgroundImage: note.surface }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, rgba(13,148,136,0.07) 0 1px, transparent 1px 15px)",
                    }}
                  />

                  <div className="relative flex items-start justify-between">
                    <p className={`eyebrow ${note.kickerClass}`}>{note.kicker}</p>
                    <span className="font-display text-sm tabular-nums text-faint">
                      {note.index}
                    </span>
                  </div>

                  <div className="relative">
                    <h3 className="display mb-4 text-[clamp(1.6rem,2.4vw,2.1rem)] text-foreground">
                      {note.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">{note.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
