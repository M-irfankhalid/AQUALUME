"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { INTRO_DONE } from "@/lib/intro";

/**
 * The opening curtain: a counting progress readout on the abyss, then the whole
 * panel lifts away to reveal the hero.
 *
 * Scroll is locked while it runs, and it removes itself from the DOM entirely
 * once finished so it can never trap focus or intercept a click.
 */
export default function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const announce = () => window.dispatchEvent(new Event(INTRO_DONE));

    if (prefersReducedMotion()) {
      announce();
      setDone(true);
      return;
    }

    const root = document.documentElement;
    root.style.overflow = "hidden";

    const value = { n: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        root.style.overflow = "";
        setDone(true);
      },
    });

    tl.to(
      value,
      {
        n: 100,
        duration: 1.4,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = String(Math.round(value.n)).padStart(3, "0");
          }
        },
      },
      0
    )
      .fromTo(barRef.current, { scaleX: 0 }, { scaleX: 1, duration: 1.4, ease: "power2.inOut" }, 0)
      .to(contentRef.current, { opacity: 0, y: -24, duration: 0.4, ease: "power2.in" }, "+=0.1")
      // The label must exist before anything references it — GSAP resolves a
      // position string at the moment the tween is added to the timeline.
      .addLabel("exit")
      // Hand off to the hero just as the curtain starts moving.
      .call(announce)
      .to(rootRef.current, { yPercent: -100, duration: 0.9, ease: "expo.inOut" }, "exit");

    return () => {
      tl.kill();
      root.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div
      id="aqualume-preloader"
      ref={rootRef}
      className="fixed inset-0 z-[200] flex flex-col justify-between bg-abyss px-6 py-8 sm:px-10 sm:py-10"
    >
      {/* If JavaScript never runs, the curtain must not become a wall. */}
      <noscript>
        <style>{`#aqualume-preloader{display:none !important}`}</style>
      </noscript>

      <div ref={contentRef} className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="eyebrow text-faint">Aqualume Foundation</span>
          <span className="eyebrow text-faint">Est. 2011</span>
        </div>

        <div className="flex items-end justify-between gap-6">
          <p className="serif-accent max-w-xs text-xl text-muted sm:text-2xl">
            Water, kept running.
          </p>
          <span
            ref={counterRef}
            className="display-tight text-6xl tabular-nums text-foreground sm:text-8xl"
          >
            000
          </span>
        </div>
      </div>

      {/* Progress hairline pinned to the bottom edge */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-border">
        <div ref={barRef} className="h-full w-full origin-left bg-primary" />
      </div>
    </div>
  );
}
