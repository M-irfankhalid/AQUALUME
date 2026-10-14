import Link from "next/link";
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react";
import { charities, VERIFIED_ON } from "@/data/charities";
import CharityCard from "@/components/ui/CharityCard";
import DemoNotice from "@/components/ui/DemoNotice";
import { Reveal, MaskedHeading } from "./Reveal";

const checks = [
  {
    title: "Check the registration",
    body: "Every organisation below is a registered nonprofit. Look the number up yourself — a real charity will never mind being checked.",
  },
  {
    title: "Ask what happens after handover",
    body: "Building a water point is the easy half. Ask who repairs it in year three, and who pays for the part.",
  },
  {
    title: "Prefer unrestricted giving",
    body: "Money with no strings attached is the most useful kind, because maintenance and salaries are rarely anyone's favourite appeal.",
  },
];

export default function Give() {
  return (
    <section id="give" className="relative bg-surface py-28 sm:py-36">
      <div className="container">
        <div className="mb-14 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-8 text-primary-deep">Where the money goes</p>
            </Reveal>
            <MaskedHeading
              lines={["We have no way", "to take your donation"]}
              className="display text-[clamp(2rem,5.2vw,4.6rem)] text-foreground"
            />
          </div>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <p className="text-lg leading-relaxed text-muted">
              Aqualume is a fictional organisation, so there is no payment form on this
              site and there never will be. What we can do is point you at organisations
              that are real, registered, and already doing this work &mdash; and then get
              out of the way.
            </p>
          </Reveal>
        </div>

        <Reveal className="mb-14">
          <DemoNotice />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {charities.map((charity, i) => (
            <Reveal key={charity.name} y={30} delay={(i % 3) * 0.07} className="h-full">
              <CharityCard charity={charity} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-relaxed text-faint">
              Full notes on each organisation, including legal names and registration
              numbers, are on the giving page. Every link was checked by hand on{" "}
              {VERIFIED_ON} and opens the charity&apos;s own site in a new tab.
            </p>
            <Link
              href="/donate"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:text-primary-deep hover:shadow-lift"
            >
              The full giving directory
              <IconArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </Reveal>

        <div className="mt-28 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h3 className="display text-2xl text-foreground">Before you give</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Three things worth doing, whether you give through one of these or anywhere
              else.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <ul className="grid gap-5 sm:grid-cols-3">
              {checks.map((check, i) => (
                <Reveal key={check.title} y={24} delay={i * 0.07} className="h-full">
                  <li className="h-full rounded-2xl bg-white p-6 shadow-soft">
                    <IconCheck size={18} className="mb-4 text-primary" />
                    <h4 className="mb-2 text-base font-semibold text-foreground">
                      {check.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted">{check.body}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
