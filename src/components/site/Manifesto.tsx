import { ScrollWords, Reveal } from "./Reveal";

export default function Manifesto() {
  return (
    <section className="py-28 sm:py-36">
      <div className="container">
        <Reveal>
          <p className="eyebrow mb-12 text-primary-light">The problem</p>
        </Reveal>

        <ScrollWords
          as="h2"
          text="A well is not the achievement. A well still running ten years later is."
          className="display max-w-5xl text-[clamp(1.9rem,4.6vw,4.1rem)] text-foreground"
        />

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5" y={30}>
            <p className="text-lg leading-relaxed text-muted">
              Estimates put roughly a third of hand pumps across rural sub-Saharan Africa
              out of action at any given moment. Almost none of them failed because the
              drilling was wrong.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" y={30} delay={0.1}>
            <p className="text-lg leading-relaxed text-muted">
              They failed because nobody was set up to maintain them &mdash; no trained
              mechanic, no spare parts within reach, no money set aside for the repair,
              and no one whose job it was to notice.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
