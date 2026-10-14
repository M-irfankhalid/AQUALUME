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
      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-abyss/70 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between py-4">
          <Link href="/" className="group flex items-center gap-2.5" aria-label="Aqualume Foundation, home">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-abyss transition-transform duration-500 group-hover:rotate-[14deg]">
              <IconDroplet size={19} />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[15px] font-extrabold tracking-tight text-foreground">
                AQUALUME
              </span>
              <span className="text-[9px] font-semibold tracking-[0.24em] text-primary-light">
                FOUNDATION
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              aria-label="Donate — opens a list of real, independent charities"
              className="hidden rounded-full bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-abyss transition-colors hover:bg-amber-400 sm:inline-flex"
            >
              Donate
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="p-2 text-foreground transition-colors hover:text-primary-light lg:hidden"
            >
              <IconMenu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-abyss transition-opacity duration-500 lg:hidden ${
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
            className="p-2 text-foreground transition-colors hover:text-primary-light"
          >
            <IconX size={24} />
          </button>
        </div>

        <div className="container mt-12 flex flex-col">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="display border-b border-border py-6 text-4xl text-foreground transition-colors hover:text-primary-light"
              style={{
                transitionDelay: open ? `${index * 60}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-8 py-5 text-sm font-bold uppercase tracking-[0.16em] text-abyss"
          >
            Donate to a real charity
          </Link>
        </div>
      </div>
    </>
  );
}
