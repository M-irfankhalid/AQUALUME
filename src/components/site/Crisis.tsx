"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * A held statement: the section is 220vh tall while its contents stay stuck to
 * the viewport, so the figure has room to resolve as you scroll through it.
 *
 * This uses CSS `position: sticky` for the hold and ScrollTrigger only for the
 * scrubbed tween. ScrollTrigger's own pinning is more fragile here — it breaks
 * when an ancestor gains a transform, and it fights resize.
 */
export default function Crisis() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (prefersReducedMotion()) return;

    const q = gsap.utils.selector(root);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.fromTo(
      q(".crisis-number"),
      { scale: 0.74, opacity: 0.18 },
      { scale: 1, opacity: 1, ease: "none", duration: 1 }
    )
      .fromTo(
        q(".crisis-rule"),
        { scaleX: 0 },
        { scaleX: 1, ease: "none", duration: 0.4 },
        "-=0.5"
      )
      .fromTo(
        q(".crisis-caption"),
        { opacity: 0, y: 34 },
        { opacity: 1, y: 0, ease: "none", duration: 0.6 },
        "-=0.4"
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={rootRef} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-svh items-center overflow-hidden bg-gradient-to-b from-abyss via-surface to-abyss">
        <div className="container text-center">
          <p className="eyebrow mb-10 text-primary-light">The sector&apos;s blind spot</p>

          <p className="crisis-number display-tight text-[clamp(5rem,26vw,22rem)] leading-[0.8] text-foreground">
            1 in 3
          </p>

          <div className="crisis-rule mx-auto my-12 h-px w-40 origin-center bg-primary" />

          <p className="crisis-caption mx-auto max-w-xl text-lg leading-relaxed text-muted">
            hand pumps across rural sub-Saharan Africa are estimated to be out of action
            right now. The drilling was rarely the problem. The maintenance was.
          </p>
        </div>
      </div>
    </section>
  );
}
