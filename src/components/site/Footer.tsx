import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const explore = [
  { label: "The problem", href: "#top" },
  { label: "Our approach", href: "#approach" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Give", href: "#give" },
];

const elsewhere = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "Newsletter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-abyss">
      <div className="container py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="display mb-4 text-3xl text-foreground">
              Aqualume
              <span className="serif-accent ml-2 text-primary-light">Foundation</span>
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Water points built to still be running in ten years &mdash; with the
              maintenance, the spare parts and the local committee funded from day one.
            </p>
          </div>

          <nav className="lg:col-span-3" aria-label="Sections">
            <h2 className="eyebrow mb-6 text-faint">Explore</h2>
            <ul className="space-y-3">
              {explore.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-primary-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="eyebrow mb-6 text-faint">Elsewhere</h2>
            <ul className="space-y-3">
              {elsewhere.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-primary-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="eyebrow mb-6 text-faint">Giving</h2>
            <Link
              href="/donate"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light transition-colors hover:text-foreground"
            >
              Real charities
              <IconArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* The honest bit — stated plainly, not buried. */}
        <div className="mt-16 rounded-xl border border-border bg-surface/60 p-6">
          <p className="text-xs leading-relaxed text-muted">
            <strong className="font-semibold text-foreground">
              This is a demonstration site.
            </strong>{" "}
            Aqualume Foundation is a fictional organisation created as a portfolio piece.
            It is not a registered charity, it has no affiliation with any organisation
            named on this site, and it cannot accept donations. Every donation link leads
            to a real, independent charity on that charity&apos;s own website.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Aqualume Foundation &mdash; a fictional entity.</p>
          <p>
            Designed &amp; developed by{" "}
            <a
              href="https://irfankhalid.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-light transition-colors hover:text-foreground"
            >
              irfankhalid.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
