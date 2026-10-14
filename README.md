# 💧 Aqualume Foundation

A single-page site for a **fictional water charity** — built with Next.js, GSAP and Lenis. Designed as an Awwwards-style portfolio piece: one continuous scroll, no photography, all imagery generated in the browser.

> **⚠️ Demo project — not a real charity.** "Aqualume Foundation" is an invented organisation. This site exists for **practice and portfolio purposes** only. It is not a registered nonprofit, it has no affiliation with any organisation named on it, and **it cannot accept donations.**
>
> The Donate button does not lead to a payment flow. It leads to a list of **real, independently verified water charities**, each linked to that charity's own donation page. Full notes on how those were checked are on the [giving page](src/app/donate/page.tsx).
>
> Designed &amp; developed by **[irfankhalid.com](https://irfankhalid.com)**.

---

## ✨ Overview

One page, read top to bottom:

| Section | What it does |
|---|---|
| **Hero** | "2.2 billion people live without safe water" over a live caustics field |
| **Manifesto** | Word-by-word illuminated statement, scrubbed to scroll |
| **Crisis** | A held full-viewport figure — `1 in 3` — that resolves as you scroll through |
| **Marquee** | The things the work is judged on, looping |
| **Approach** | Four unglamorous principles |
| **Programs** | Six programs, editorial rows |
| **Impact** | Counters that run on entry, plus three typographic field notes |
| **Give** | Six real charities, plus three things to check before giving |
| **Closing** | Final statement and the way out |
| **/donate** | The long-form giving notes and verification record |

---

## 🛠️ Tech Stack

- **Next.js 16** — App Router, static-rendered throughout
- **Tailwind CSS v4** — CSS-only theme configuration (no `tailwind.config.js`)
- **TypeScript**
- **GSAP 3** + **ScrollTrigger** — scrubbed reveals, counters, parallax
- **Lenis** — smooth scroll, driven by GSAP's ticker so both advance on one frame
- **Tabler Icons**

---

## 🎨 Design System

A light water surface. The organising rule is that **the site has no borders** — everything that needs separating is separated by a tonal step, a soft shadow, or a gradient mask.

| Token | Value | Usage |
|---|---|---|
| `background` | `#fafcfb` | Page — barely-teal white |
| `surface` | `#f1f7f5` | Tonal band |
| `surface-2` | `#e6f1ee` | Deeper band |
| `shallow` | `#d8ebe6` | Deepest step (footer) |
| `foreground` | `#06231f` | Deep teal, not black |
| `muted` | `#4a6b65` | Body text |
| `faint` | `#5f7a74` | Meta text |
| `primary` | `#0d9488` | Teal — fills, icons, rules |
| `primary-deep` | `#0f766e` | The only teal safe for small text |
| `accent` | `#c2410c` | Burnt orange, used sparingly |

Elevation replaces line work, via three `@theme` shadow tokens: `shadow-soft` (resting cards), `shadow-lift` (hover), `shadow-glow` (the teal CTA).

Two contrast rules are load-bearing: **`primary` is never used for small text** (it lands near 3.6:1 on this ground — `primary-deep` is the text-safe teal), and **amber is gone from the CTA entirely**, because `#f59e0b` on a light ground is about 2:1. The Donate path is deep teal with white type.

---

## 🌊 No photography, no borders

There is not a single image file in this project. Everything visual is computed at runtime:

- **`Caustics.tsx`** — a 2D canvas sine-interference field evaluated at 150px wide and CSS-upscaled under a blur. Thin bright ridges come from `Math.pow(1 - Math.abs(v), 7)`. The ramp runs pale-to-white, so the troughs sit just below the page background and the ridges bloom to pure white: sunlight refracting across the floor of a clear pool.
- **`Grain.tsx`** — SVG `feTurbulence` film grain, multiplied rather than soft-lit, so it reads as paper stock instead of washing the page out.
- **Field-note cards** — layered CSS gradients and a repeating tint.

Both canvas components pause when off-screen or when the tab is hidden, and render a single static frame under `prefers-reduced-motion`.

---

## 📂 Project Structure

```plaintext
src/
├── app/
│   ├── layout.tsx            # Fonts, preloader, smooth scroll, grain, cursor, nav
│   ├── page.tsx              # The single page, composed
│   ├── icon.svg
│   └── donate/page.tsx       # Giving notes + verified charity directory
├── components/
│   ├── site/                 # Page sections and motion primitives
│   │   ├── Hero.tsx  Manifesto.tsx  Crisis.tsx  Marquee.tsx
│   │   ├── Approach.tsx  Programs.tsx  Impact.tsx
│   │   ├── Give.tsx  Closing.tsx  Nav.tsx  Footer.tsx
│   │   ├── Caustics.tsx  Grain.tsx  Cursor.tsx  Preloader.tsx
│   │   ├── Reveal.tsx        # Reveal, MaskedHeading, ScrollWords
│   │   └── SmoothScroll.tsx  # Lenis ↔ GSAP ticker
│   └── ui/
│       ├── CharityCard.tsx   # One real charity, linked out
│       └── DemoNotice.tsx    # The disclaimer, mandatory near any giving CTA
├── data/
│   └── charities.ts          # Verified real charities
├── lib/
│   ├── gsap.ts               # Single plugin registration
│   └── intro.ts              # Preloader → Hero handshake
└── styles/
    └── globals.css           # Theme, base styles, keyframes
```

---

## ♿ Accessibility

- **Nothing is hidden in CSS.** Animated elements render visible and are hidden by GSAP in a *layout* effect, before paint. If the animation library fails to load, the page is still fully readable.
- **`prefers-reduced-motion` short-circuits to the final state** rather than skipping the animation, so nothing is ever left mid-transform. Lenis, the cursor and the preloader all bail out entirely.
- **The custom cursor only engages on a fine pointer**, and the native one is never hidden otherwise.
- **Headings pass their lines in as an authored array** rather than being split at runtime, so they hold at every viewport and across font swaps.
- **Body and meta text clear 4.5:1** against the surface it sits on — which is why `faint` is not used in the footer, where the ground is deepest.

---

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # all routes render static
```

---

## ✏️ Customizing

- **Copy** — the section components in `src/components/site/`
- **Colour and type** — the `@theme` block in `src/styles/globals.css`; there is no `tailwind.config.js` and there must not be one
- **Charities** — `src/data/charities.ts`. Verify any replacement by hand before adding it.
