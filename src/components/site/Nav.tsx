"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconDroplet, IconMenu, IconX } from "@tabler/icons-react";
import { setScrollLocked } from "./SmoothScroll";

const links = [
  { label: "Approach", href: "#approach" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Give", href: "#give" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Freeze the page while the mobile overlay is open. The overflow lock covers
  // reduced-motion and no-JS cases, where there is no Lenis instance to stop.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    setScrollLocked(open);
    return () => {
      document.documentElement.style.overflow = "";
      setScrollLocked(false);
    };
  }, [open]);

  return (
    <>
      {/* No rule under the bar — a soft shadow does the separating once scrolled */}
      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
          scrolled ? "bg-background/80 shadow-soft backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between py-4">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="Aqualume Foundation, home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white shadow-glow transition-transform duration-500 group-hover:rotate-[14deg]">
              <IconDroplet size={19} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[15px] font-extrabold tracking-tight text-foreground">
                AQUALUME
              </span>
              <span className="text-[9px] font-semibold tracking-[0.24em] text-primary-deep">
                FOUNDATION
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:bg-surface-2 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              aria-label="Donate — opens a list of real, independent charities"
              className="hidden rounded-full bg-primary-deep px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary sm:inline-flex"
            >
              Donate
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="rounded-full p-2 text-foreground transition-colors hover:bg-surface-2 lg:hidden"
            >
              <IconMenu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay — separated by spacing, not by rules */}
      <div
        className={`fixed inset-0 z-[90] bg-background transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <span className="font-display text-[15px] font-extrabold tracking-tight text-foreground">
            AQUALUME
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="rounded-full p-2 text-foreground transition-colors hover:bg-surface-2"
          >
            <IconX size={24} />
          </button>
        </div>

        <div className="container mt-10 flex flex-col">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-5 py-5 transition-colors"
              style={{ transitionDelay: open ? `${index * 60}ms` : "0ms" }}
            >
              <span className="font-display text-xs tabular-nums text-faint">
                0{index + 1}
              </span>
              <span className="display text-4xl text-foreground transition-colors group-hover:text-primary-deep">
                {link.label}
              </span>
            </a>
          ))}

          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-primary-deep px-8 py-5 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-glow"
          >
            Donate to a real charity
          </Link>
        </div>
      </div>
    </>
  );
}
