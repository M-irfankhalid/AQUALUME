import Link from "next/link";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import Caustics from "./Caustics";
import { Reveal, ScrollWords } from "./Reveal";

export default function Closing() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Caustics className="absolute inset-0 h-full w-full scale-110 opacity-70 blur-[42px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/45 to-background" />
      </div>

      <div className="container relative py-32 sm:py-44">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="eyebrow mb-12 text-primary-deep">The point</p>
          </Reveal>

          <ScrollWords
            as="h2"
            text="Clean water is not a gift we give. It is the thing everyone else already has."
            className="display text-[clamp(1.9rem,5vw,4.4rem)] text-foreground"
          />

          <Reveal delay={0.15}>
            <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#give"
                className="group inline-flex items-center gap-3 rounded-full bg-primary-deep px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary"
              >
                Give through a real charity
                <IconArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/donate"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:text-primary-deep hover:shadow-lift"
              >
                Read the giving notes
                <IconArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
