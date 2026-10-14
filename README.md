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

The whole site is dark — the palette is a depth scale rather than a light/dark pair.

| Token | Value | Usage |
|---|---|---|
| `abyss` | `#020a09` | Deepest ground |
| `background` | `#04120f` | Page |
| `surface` | `#071c18` | Cards |
| `surface-2` | `#0a2721` | Raised cards |
| `foreground` | `#e9f6f3` | Primary text |
| `muted` | `#7fa39c` | Body text |
| `faint` | `#4d6b66` | Meta text |
| `primary` | `#14b8a6` | Teal — accents, rules |
| `primary-light` | `#5eead4` | Teal for text on dark |
| `accent` | `#f59e0b` | Amber — the Donate path only |

Two contrast rules are load-bearing: `primary` is never used for text on dark (it lands near 2:1), and anything sitting on `accent` uses `text-dark`.

---

## 🌊 No photography

There is not a single image file in this project. Everything visual is computed at runtime:

- **`Caustics.tsx`** — a 2D canvas sine-interference field evaluated at 150px wide and CSS-upscaled under a blur. Thin bright ridges come from `Math.pow(1 - Math.abs(v), 7)`.
- **`Grain.tsx`** — SVG `feTurbulence` film grain, `mix-blend-soft-light`.
- **Field-note cards** — layered CSS gradients and a repeating hairline.

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
