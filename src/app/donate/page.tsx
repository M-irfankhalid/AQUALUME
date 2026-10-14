import Link from "next/link";
import {
  IconExternalLink,
  IconShieldCheck,
  IconCheck,
  IconArrowLeft,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { charities, VERIFIED_ON } from "@/data/charities";
import CharityCard from "@/components/ui/CharityCard";
import DemoNotice from "@/components/ui/DemoNotice";
import { Reveal, MaskedHeading } from "@/components/site/Reveal";
import Caustics from "@/components/site/Caustics";

export const metadata = {
  title: "Giving notes",
  description:
    "Aqualume Foundation is fictional. Donate instead to one of six real, verified water and sanitation charities, each linked straight to its own donation page.",
};

export default function DonatePage() {
  return (
    <div className="pt-32 pb-28 sm:pt-40">
      {/* Lead */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <Caustics className="absolute inset-0 h-full w-full opacity-55 blur-[46px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>

        <div className="container">
          <Reveal>
            <Link
              href="/"
              className="group mb-12 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted shadow-soft transition-colors hover:text-primary-deep"
            >
              <IconArrowLeft
                size={15}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to the site
            </Link>
          </Reveal>

          <div className="max-w-4xl">
            <Reveal>
              <p className="eyebrow mb-8 text-primary-deep">Giving notes</p>
            </Reveal>
            <MaskedHeading
              lines={["There is nothing", "here to donate to"]}
              as="h1"
              autoPlay
              className="display mb-10 text-[clamp(2.2rem,6.4vw,5.4rem)] text-foreground"
            />
            <Reveal delay={0.1}>
              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted">
                Aqualume Foundation is a portfolio piece, not a charity. So rather than a
                fake payment form, this page points you at six real organisations doing
                this work &mdash; each linked straight to its own donation page.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <DemoNotice />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why this page looks like this */}
      <section className="container mt-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="display mb-8 text-[clamp(1.7rem,3.4vw,2.6rem)] text-foreground">
                Why this page looks like this
              </h2>
            </Reveal>

            <div className="space-y-5 leading-relaxed text-muted">
              <Reveal y={20}>
                <p>
                  A convincing <em className="text-foreground not-italic">Donate</em>{" "}
                  button on a website that does not exist is the one part of a project
                  like this that could genuinely mislead someone. So this site does not
                  have one. There is no payment form, no card fields and no wallet
                  address &mdash; and the disclaimer follows every donation link on the
                  site rather than hiding in the footer.
                </p>
              </Reveal>
              <Reveal y={20} delay={0.05}>
                <p>
                  What it has instead is a list. The organisations below are real and
                  independent. We take no cut, they have not endorsed this page, and in
                  most cases they do not know it exists. Every link goes directly to their
                  own site.
                </p>
              </Reveal>
              <Reveal y={20} delay={0.1}>
                <p>
                  If this demo made you think about water at all, the useful thing to do
                  next is to give to one of them &mdash; or to look up a water charity
                  working where you live.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="rounded-2xl bg-white p-8 shadow-soft">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-surface-2 text-primary-deep">
                <IconShieldCheck size={22} />
              </div>

              <h3 className="display mb-5 text-xl text-foreground">
                How these were verified
              </h3>

              <ul className="space-y-4 text-sm leading-relaxed text-muted">
                <li className="flex items-start gap-3">
                  <IconCheck size={16} className="mt-1 shrink-0 text-primary" />
                  <span>
                    Each organisation was checked on{" "}
                    <strong className="font-semibold text-foreground">
                      {VERIFIED_ON}
                    </strong>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <IconCheck size={16} className="mt-1 shrink-0 text-primary" />
                  <span>
                    Legal name, registration number and donation link were read from the
                    organisation&apos;s own website &mdash; not from a search result or a
                    directory listing.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <IconCheck size={16} className="mt-1 shrink-0 text-primary" />
                  <span>
                    Two organisations we would have liked to include, water.org and
                    WaterAid, could not be verified from here, so they are deliberately
                    absent rather than guessed at.
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The directory */}
      <section className="mt-28 bg-surface py-24">
        <div className="container">
          <div className="mb-14 max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-8 text-primary-deep">The directory</p>
            </Reveal>
            <MaskedHeading
              lines={["Six real", "organisations"]}
              className="display text-[clamp(2rem,5vw,4rem)] text-foreground"
            />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
                Five work internationally and one works inside the United States. Every
                button below opens the organisation&apos;s own donation page in a new tab.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {charities.map((charity, i) => (
              <Reveal key={charity.name} y={30} delay={(i % 3) * 0.07} className="h-full">
                <CharityCard charity={charity} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <p className="flex items-start gap-2 text-xs leading-relaxed text-faint">
              <IconExternalLink size={14} className="mt-0.5 shrink-0" />
              <span>
                These links leave this site. Aqualume Foundation receives nothing from
                them and has no relationship with these organisations.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Close */}
      <section className="container mt-28">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-white px-8 py-12 shadow-soft sm:px-12 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="display mb-4 text-[clamp(1.6rem,3vw,2.4rem)] text-foreground">
                Not in a position to give?
              </h2>
              <p className="leading-relaxed text-muted">
                That is a fine answer. The rest of the site explains how the work is done
                &mdash; and why the unglamorous half of it is the half that matters.
              </p>
            </div>

            <Link
              href="/#approach"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-surface-2 px-7 py-4 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-primary-deep hover:text-white"
            >
              How the work is done
              <IconArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
