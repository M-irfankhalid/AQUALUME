import {
  IconDroplet,
  IconRipple,
  IconBucketDroplet,
  IconSchool,
  IconStethoscope,
  IconUsersGroup,
} from "@tabler/icons-react";
import { Reveal, MaskedHeading } from "./Reveal";

const programs = [
  {
    index: "01",
    title: "Community Wells",
    body: "Borehole wells with hand or solar pumps, sited with the community and tested before handover.",
    icon: <IconDroplet size={22} />,
  },
  {
    index: "02",
    title: "Piped Water Networks",
    body: "Gravity-fed and solar-pumped systems that bring standpipes within a few minutes of home.",
    icon: <IconRipple size={22} />,
  },
  {
    index: "03",
    title: "Hygiene & Sanitation",
    body: "Latrines, handwashing stations and household training, because water alone does not stop disease.",
    icon: <IconBucketDroplet size={22} />,
  },
  {
    index: "04",
    title: "Water in Schools",
    body: "Taps and sanitation blocks inside school compounds, so children stop leaving lessons to fetch water.",
    icon: <IconSchool size={22} />,
  },
  {
    index: "05",
    title: "Health & Nutrition",
    body: "Work with local clinics to pair clean water with the nutrition and care that keeps children well.",
    icon: <IconStethoscope size={22} />,
  },
  {
    index: "06",
    title: "Local Water Committees",
    body: "Committees trained and equipped to collect fees, hold spare parts and carry out repairs themselves.",
    icon: <IconUsersGroup size={22} />,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-28 sm:py-36">
      <div className="container">
        <div className="mb-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-8 text-primary-light">Programs</p>
            </Reveal>
            <MaskedHeading
              lines={["What we build,", "and what we hand over"]}
              className="display text-[clamp(2rem,5.2vw,4.6rem)] text-foreground"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Every program ends the same way: with a trained committee, a stock of spare
              parts and a repair fund in place before we leave.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-border">
          {programs.map((program, i) => (
            <Reveal key={program.index} y={24} delay={i * 0.04}>
              <div className="group grid items-start gap-5 border-b border-border py-9 transition-colors duration-500 hover:bg-surface/50 lg:grid-cols-12 lg:gap-10">
                <span className="font-display text-sm tabular-nums text-faint lg:col-span-1">
                  {program.index}
                </span>

                <h3 className="display flex items-center gap-3 text-2xl text-foreground transition-colors duration-300 group-hover:text-primary-light lg:col-span-4 lg:text-3xl">
                  <span className="text-faint transition-colors duration-300 group-hover:text-primary">
                    {program.icon}
                  </span>
                  {program.title}
                </h3>

                <p className="max-w-2xl leading-relaxed text-muted lg:col-span-7">
                  {program.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
