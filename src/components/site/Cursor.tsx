"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

/**
 * A two-part cursor: a precise dot that tracks the pointer almost exactly, and
 * a ring that trails behind and expands over anything interactive.
 *
 * Written with direct style writes on refs inside one rAF loop — putting this
 * through React state would re-render the tree 60 times a second.
 *
 * Disabled entirely on touch devices and under reduced-motion, where the native
 * cursor is left alone.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("has-custom-cursor");

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dotPos = { ...pointer };
    const ringPos = { ...pointer };
    let scale = 1;
    let targetScale = 1;
    let down = false;
    let shown = false;

    const onMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      if (!shown) {
        shown = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }

      // Anything the visitor can act on grows the ring.
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest?.(
        'a, button, [role="button"], input, select, textarea, [data-cursor="hover"]'
      );
      targetScale = interactive ? 2.4 : 1;
    };

    const onDown = () => {
      down = true;
    };
    const onUp = () => {
      down = false;
    };
    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      shown = false;
    };

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);

      dotPos.x += (pointer.x - dotPos.x) * 0.35;
      dotPos.y += (pointer.y - dotPos.y) * 0.35;
      ringPos.x += (pointer.x - ringPos.x) * 0.16;
      ringPos.y += (pointer.y - ringPos.y) * 0.16;

      scale += (targetScale - scale) * 0.14;
      const squash = down ? 0.8 : 1;

      dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) scale(${
        scale * squash
      })`;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[110] hidden lg:block">
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-8 w-8 rounded-full border border-primary/50 opacity-0 transition-opacity duration-300 will-change-transform"
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-primary-deep opacity-0 transition-opacity duration-300 will-change-transform"
      />
    </div>
  );
}
