"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Lenis smooth scrolling, driven by GSAP's ticker so that Lenis and
 * ScrollTrigger advance on the same frame. Without this the two run on
 * separate rAF loops and pinned/scrubbed sections visibly lag the scroll.
 *
 * Lenis moves the real window scroll position (it does not fake it with
 * transforms), so ScrollTrigger needs no scrollerProxy — only the update hook.
 */
/**
 * The live Lenis instance, so other components can pause it.
 *
 * Setting `overflow: hidden` on <html> is not enough on its own: Lenis drives
 * the scroll position itself, so a modal has to stop the instance rather than
 * just hide the scrollbar.
 */
let instance: Lenis | null = null;

export function setScrollLocked(locked: boolean) {
  if (!instance) return;
  if (locked) instance.stop();
  else instance.start();
}

export default function SmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.05,
      // Expo-out: quick to respond, long settle. Reads as "heavy water".
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    instance = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP's ticker passes seconds; Lenis.raf expects milliseconds.
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Any in-page anchor click should travel on the smooth scroller.
    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest?.('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -72 });
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
      instance = null;
    };
  }, []);

  return null;
}
