"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

/**
 * Animated water caustics, generated entirely in code.
 *
 * The trick is to compute the field at a deliberately low internal resolution
 * (~150px wide) and let CSS scale it up with a blur. The result reads as soft,
 * organic underwater light — and costs a few thousand sin() calls per frame
 * rather than a per-pixel shader or a megabyte of video.
 *
 * The ramp runs pale-to-white: troughs sit just below the page background and
 * the interference ridges bloom to pure white. That is sunlight refracting
 * across the floor of a clear pool, and it is why this reads as a water surface
 * rather than as bioluminescence in the dark.
 *
 * There is no image file behind this. Nothing here can 404, and nothing here
 * carries a licence.
 */

const DEEP: [number, number, number] = [216, 238, 233]; // trough, a hair off background
const MID: [number, number, number] = [176, 220, 211]; // mid-water
const BRIGHT: [number, number, number] = [255, 255, 255]; // focused filament

const FIELD_WIDTH = 150; // internal render width; CSS does the upscaling

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function Caustics({
  className = "",
  opacity = 0.55,
  speed = 1,
}: {
  className?: string;
  opacity?: number;
  speed?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const reduced = prefersReducedMotion();
    const size = { w: FIELD_WIDTH, h: 84 };
    canvas.width = size.w;
    canvas.height = size.h;

    const image = ctx.createImageData(size.w, size.h);
    const px = image.data;

    // Pointer parallax, eased toward the target each frame.
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

    const onPointerMove = (event: PointerEvent) => {
      pointer.tx = event.clientX / window.innerWidth;
      pointer.ty = event.clientY / window.innerHeight;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let visible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    let raf = 0;
    let last = 0;
    // Caustics drift slowly; 30fps is imperceptible and halves the cost.
    const FRAME_MS = 1000 / 30;

    const draw = (time: number) => {
      raf = requestAnimationFrame(draw);
      if (!visible || document.hidden) return;
      if (time - last < FRAME_MS) return;
      last = time;

      const t = (time / 1000) * speed;
      pointer.x = lerp(pointer.x, pointer.tx, 0.04);
      pointer.y = lerp(pointer.y, pointer.ty, 0.04);

      const ox = (pointer.x - 0.5) * 0.22;
      const oy = (pointer.y - 0.5) * 0.22;

      let i = 0;
      for (let y = 0; y < size.h; y++) {
        // Normalised, aspect-corrected coordinates
        const fy = y / size.h;
        for (let x = 0; x < size.w; x++) {
          const fx = x / size.w;

          const cx = fx + ox;
          const cy = fy + oy;

          // Interfering wave fronts. Where they cancel (v ≈ 0) the light
          // focuses into a bright filament — that is the caustic.
          const v =
            (Math.sin(cx * 5.2 + t * 0.55) +
              Math.sin(cy * 4.1 - t * 0.42) +
              Math.sin((cx * 0.7 + cy * 0.9) * 3.6 + t * 0.71) +
              Math.sin(Math.hypot(cx - 0.5, cy - 0.5) * 11 - t * 1.05)) /
            4;

          // High exponent => thin, sharp ridges rather than broad blobs.
          let ridge = Math.pow(1 - Math.abs(v), 7);

          // Large-scale modulation so the field breathes instead of tiling.
          const mod = 0.55 + 0.45 * Math.sin(fx * 1.6 + fy * 1.1 + t * 0.23);
          ridge *= mod;

          // Fade toward the edges so there is never a hard seam at the viewport.
          const edge =
            Math.min(1, Math.sin(Math.PI * fx) * 2.2) *
            Math.min(1, Math.sin(Math.PI * fy) * 2.2);
          ridge *= edge;

          let r: number, g: number, b: number;
          if (ridge < 0.5) {
            const k = ridge * 2;
            r = lerp(DEEP[0], MID[0], k);
            g = lerp(DEEP[1], MID[1], k);
            b = lerp(DEEP[2], MID[2], k);
          } else {
            const k = (ridge - 0.5) * 2;
            r = lerp(MID[0], BRIGHT[0], k);
            g = lerp(MID[1], BRIGHT[1], k);
            b = lerp(MID[2], BRIGHT[2], k);
          }

          px[i++] = r;
          px[i++] = g;
          px[i++] = b;
          px[i++] = 255;
        }
      }

      ctx.putImageData(image, 0, 0);
    };

    if (reduced) {
      // One static frame is enough when motion is unwanted.
      draw(0);
      cancelAnimationFrame(raf);
      raf = 0;
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [speed]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    />
  );
}
