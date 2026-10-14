"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";
import { INTRO_DONE } from "@/lib/intro";
import Caustics from "./Caustics";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const q = gsap.utils.selector(root);
    const lines = q<HTMLElement>(".hero-line > span");
    const fades = q<HTMLElement>(".hero-fade");

    if (prefersReducedMotion()) return;

    // Set the hidden state here rather than in CSS, so a failure to load GSAP
    // leaves the headline readable instead of invisible.
    gsap.set(lines, { yPercent: 112 });
    gsap.set(fades, { opacity: 0, y: 26 });

    let tl: gsap.core.Timeline | null = null;
    let played = false;

    const play = () => {
      if (played) return;
      played = true;
      tl = gsap
        .timeline()
        .to(lines, { yPercent: 0, duration: 1.35, ease: "expo.out", stagger: 0.1 })
        .to(
          fades,
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.12 },
          "-=0.95"
        );
    };

    window.addEventListener(INTRO_DONE, play);
    // Safety net: if the preloader never announces, the hero still appears.
    const fallback = window.setTimeout(play, 2800);

    // Gentle parallax: content drifts up and dissolves as the hero leaves.
    const parallax = gsap.to(q<HTMLElement>(".hero-parallax"), {
      yPercent: -14,
      opacity: 0.25,
      ease: "none",
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener(INTRO_DONE, play);
      window.clearTimeout(fallback);
      tl?.kill();
      parallax.scrollTrigger?.kill();
      parallax.kill();
    };
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-svh flex-col justify-end overflow-hidden"
    >
      {/* Generative water light — no image file behind this */}
      <Caustics
        className="pointer-events-none absolute inset-0 h-full w-full scale-110 blur-[34px]"
        opacity={0.62}
      />

      {/* Vignette keeps the type legible over the brightest filaments */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(130%_90%_at_50%_8%,transparent_0%,rgba(2,10,9,0.6)_52%,rgba(2,10,9,0.96)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-abyss to-transparent"
      />

      <div className="container relative z-10 pb-24 pt-36">
        <div className="hero-parallax">
          <p className="hero-fade eyebrow mb-8 text-primary-light">
            Aqualume Foundation &middot; Water &amp; Sanitation
          </p>

          <h1 className="display-tight text-[clamp(2.6rem,8.6vw,8.6rem)] text-foreground">
            <span className="line-mask hero-line">
              <span>2.2 billion</span>
            </span>
            <span className="line-mask hero-line">
              <span>people live without</span>
            </span>
            <span className="line-mask hero-line">
              <span>
                safe <em className="serif-accent text-primary-light">water</em>
              </span>
            </span>
          </h1>

          <div className="mt-12 grid gap-10 border-t border-border pt-10 lg:grid-cols-12">
            <div className="hero-fade lg:col-span-5">
              <p className="max-w-md text-lg leading-relaxed text-muted">
                We build water systems designed for their tenth year, not their launch
                day &mdash; local committees, funded repairs, and field teams who go back
                and check.
              </p>
              <p className="mt-4 text-xs text-faint">
                Figure: WHO/UNICEF Joint Monitoring Programme, 2022.
              </p>
            </div>

            <div className="hero-fade lg:col-span-4 lg:col-start-7">
              <div className="flex flex-wrap gap-4">
                <a
                  href="#give"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-bold uppercase tracking-wide text-abyss transition-colors hover:bg-amber-400"
                >
                  Where to actually give
                </a>
                <a
                  href="#approach"
                  className="inline-flex items-center gap-2 rounded-full border border-border-hover px-7 py-4 text-sm font-bold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary-light"
                >
                  Our approach
                </a>
              </div>
              <p className="mt-5 max-w-xs text-xs leading-relaxed text-faint">
                Aqualume is a fictional organisation built as a portfolio piece. This
                site cannot accept money &mdash; the giving section points to real
                charities that can.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-6 hidden flex-col items-center gap-3 lg:flex">
        <span className="eyebrow [writing-mode:vertical-rl] text-faint">Scroll</span>
        <span className="relative h-16 w-px overflow-hidden bg-border">
          <span className="animate-scroll-pulse absolute inset-x-0 h-1/2 bg-primary" />
        </span>
      </div>
    </section>
  );
}
