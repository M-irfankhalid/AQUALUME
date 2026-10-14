import {
  IconUsersGroup,
  IconTools,
  IconClipboardCheck,
  IconChartBar,
} from "@tabler/icons-react";
import { Reveal, MaskedHeading } from "./Reveal";

const principles = [
  {
    index: "01",
    title: "Community-led from the start",
    body: "The community chooses the site, shares the labour and sets the rules for the water point. Nothing is imposed from outside, because a system nobody asked for is a system nobody maintains.",
    icon: <IconUsersGroup size={22} />,
  },
  {
    index: "02",
    title: "Maintenance, not quick fixes",
    body: "Spare parts, a trained local technician and a funded repair reserve are in place before the rig leaves. This is the unglamorous part, and it is the whole difference.",
    icon: <IconTools size={22} />,
  },
  {
    index: "03",
    title: "Independently monitored",
    body: "Field teams revisit every water point on a schedule and record what they find, including the ones that have stopped working. Failures are data, not embarrassments.",
    icon: <IconClipboardCheck size={22} />,
  },
  {
    index: "04",
    title: "Results published openly",
    body: "Water-quality tests, uptime figures and spending are reported in public, so anyone can judge the work rather than take our word for it.",
    icon: <IconChartBar size={22} />,
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-28 sm:py-36">
      <div className="container">
        <div className="mb-20 max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-8 text-primary-light">Our approach</p>
          </Reveal>
          <MaskedHeading
            lines={["Four principles,", "all of them boring"]}
            className="display text-[clamp(2rem,5.2vw,4.6rem)] text-foreground"
          />
        </div>

        <div className="border-t border-border">
          {principles.map((item, i) => (
            <Reveal key={item.index} y={24} delay={i * 0.05}>
              <div className="group grid items-start gap-6 border-b border-border py-10 transition-colors duration-500 hover:bg-surface/50 lg:grid-cols-12 lg:gap-10">
                <span className="font-display text-sm tabular-nums text-faint lg:col-span-1">
                  {item.index}
                </span>

                <h3 className="display text-2xl text-foreground transition-colors duration-300 group-hover:text-primary-light lg:col-span-4 lg:text-3xl">
                  {item.title}
                </h3>

                <p className="max-w-2xl leading-relaxed text-muted lg:col-span-6">
                  {item.body}
                </p>

                <span className="hidden justify-self-end text-faint transition-colors duration-300 group-hover:text-primary lg:col-span-1 lg:block">
                  {item.icon}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
