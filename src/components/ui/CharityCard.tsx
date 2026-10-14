import { IconExternalLink, IconMapPin, IconRosette } from "@tabler/icons-react";
import type { Charity } from "@/data/charities";

/**
 * One real organisation, presented as a referral.
 *
 * Deliberately no logo and no partnership language: this demo points people at
 * real charities, it does not claim any relationship with them. The link prints
 * its destination hostname so nobody has to guess where their money is going.
 *
 * Separated from the page by elevation rather than a border.
 */
export default function CharityCard({ charity }: { charity: Charity }) {
  const hostname = new URL(charity.donateUrl).hostname.replace(/^www\./, "");

  return (
    <article className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
      <h3 className="display mb-2 text-xl text-foreground">{charity.name}</h3>
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-deep">
        {charity.legalName}
      </p>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">{charity.focus}</p>

      <ul className="mb-7 space-y-2.5 rounded-xl bg-surface p-4 text-xs">
        <li className="flex items-start gap-2.5 text-muted">
          <IconMapPin size={15} className="mt-0.5 shrink-0 text-primary" />
          <span>{charity.region}</span>
        </li>
        <li className="flex items-start gap-2.5 text-muted">
          <IconRosette size={15} className="mt-0.5 shrink-0 text-primary" />
          <span>{charity.registration}</span>
        </li>
      </ul>

      <a
        href={charity.donateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-deep px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow transition-colors duration-300 hover:bg-primary"
      >
        Donate on their site
        <IconExternalLink size={16} />
      </a>

      <p className="mt-3 text-center text-[11px] text-faint">
        Opens <span className="font-semibold text-muted">{hostname}</span> in a new tab
      </p>
    </article>
  );
}
