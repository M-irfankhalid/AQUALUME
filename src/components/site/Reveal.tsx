"use client";

import { Fragment, useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Reveal primitives for scroll-triggered entrances.
 *
 * Two deliberate decisions:
 *
 * 1. Nothing is hidden in CSS. Elements render visible and GSAP hides them in a
 *    *layout* effect, which runs before paint. If the animation library ever
 *    fails to load, the page is still fully readable rather than blank.
 * 2. Reduced motion short-circuits to the final state instead of skipping the
 *    animation, so nothing is left mid-transform.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/** Fades and lifts a block as it enters the viewport. */
export function Reveal({
  children,
  className = "",
  y = 40,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) return;

    const anim = gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay,
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [y, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Masked line-by-line heading reveal.
 *
 * Lines are passed in explicitly rather than split at runtime: real line
 * splitting needs text measurement and breaks on resize and on font swap, while
 * an authored array is exact at every viewport.
 */
export function MaskedHeading({
  lines,
  className = "",
  as: Tag = "h2",
  delay = 0,
  autoPlay = false,
}: {
  lines: ReactNode[];
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
  autoPlay?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const spans = el.querySelectorAll<HTMLElement>(".line-mask > span");
    if (!spans.length) return;

    if (prefersReducedMotion()) return;

    const anim = gsap.fromTo(
      spans,
      { yPercent: 112 },
      {
        yPercent: 0,
        duration: 1.15,
        ease: "expo.out",
        stagger: 0.085,
        delay,
        scrollTrigger: autoPlay ? undefined : { trigger: el, start: "top 85%", once: true },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [delay, autoPlay]);

  return (
    <Tag ref={ref as never} className={className}>
      {lines.map((line, index) => (
        <span key={index} className="line-mask">
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

/**
 * Illuminates a paragraph word by word as it crosses the viewport.
 *
 * Splitting on spaces is safe where splitting into lines is not: a word never
 * breaks across a line, so this survives resizing and font swaps untouched.
 * Wrapping stays natural because the spans are inline-block with real spaces
 * between them.
 */
export function ScrollWords({
  text,
  className = "",
  as: Tag = "p",
}: {
  text: string;
  className?: string;
  as?: "p" | "h2" | "h3" | "blockquote";
}) {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLElement>(".sw");
    if (!words.length) return;

    if (prefersReducedMotion()) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 82%",
        end: "bottom 58%",
        scrub: true,
      },
    });

    tl.fromTo(
      words,
      { opacity: 0.13 },
      { opacity: 1, ease: "none", duration: 1, stagger: 0.4 }
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [text]);

  return (
    <Tag ref={ref as never} className={className}>
      {text.split(" ").map((word, index) => (
        <Fragment key={index}>
          {/* Re-insert the space that inline-block would otherwise collapse. */}
          {index > 0 ? " " : null}
          <span className="sw inline-block">
            {word}
          </span>
        </Fragment>
      ))}
    </Tag>
  );
}
