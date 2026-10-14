# 🏗️ Cornerstone Construction

A modern, responsive website for a **construction company** — built with Next.js and Tailwind CSS. Designed to showcase services, completed projects, company credibility, and drive inbound quote requests.

> **⚠️ Demo project — not a real business.** "Cornerstone Construction" is a fictional company. This site was built for **practice and portfolio purposes** only. No services are offered, and every contact detail, statistic, testimonial, project case study, license number, and location on it is invented.
>
> Designed &amp; developed by **[irfankhalid.com](https://irfankhalid.com)**.

---

## ✨ Overview

This site presents a full-service construction firm across five pages:

- **Home** — hero, key stats, services, why-choose-us, featured projects, about, partners, testimonials
- **About** — company story, mission & vision, core values, leadership team
- **Services** — six service offerings, each with feature highlights, plus a "how we work" process
- **Projects** — filterable-by-category portfolio grid with project details
- **Contact** — detailed quote request form with project type, plus contact information

---

## 🛠️ Tech Stack

- **Next.js 16** — App Router, React Server Components
- **Tailwind CSS v4** — CSS-based theme configuration
- **TypeScript** — type-safe components
- **Framer Motion** — scroll animations and animated counters
- **Tabler Icons** — consistent, modern icon set

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `primary` | `#ea580c` | Safety orange — CTAs, accents |
| `accent` | `#f59e0b` | Amber highlights |
| `dark` | `#0f172a` | Charcoal sections (footer, stats) |
| `surface` | `#f8fafc` | Card / section backgrounds |
| `muted` | `#64748b` | Secondary text |

An industrial amber-and-charcoal palette with strong uppercase typography gives the site a credible, construction-industry feel.

---

## 📂 Project Structure

```plaintext
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout (navbar, footer, font)
│   ├── page.tsx              # Homepage
│   ├── about/page.tsx        # About page
│   ├── service/page.tsx      # Services page
│   ├── project/page.tsx      # Projects portfolio
│   └── contact/page.tsx      # Contact & quote request
├── components/
│   ├── home/                 # Homepage sections
│   │   ├── Header.tsx
│   │   ├── Stats.tsx
│   │   ├── Services.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Projects.tsx
│   │   ├── AboutUs.tsx
│   │   ├── support-our-company.tsx
│   │   └── parallax-scroll.tsx
│   └── ui/                   # Shared components
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── Button.tsx
├── data/
│   └── client-text.json      # Testimonials
└── styles/
    └── globals.css           # Theme, base styles, animations
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ Customizing

- **Content** — edit the page files in `src/app/` and the section components in `src/components/home/`
- **Brand colors** — update the CSS variables in `src/styles/globals.css` (the `@theme` block)
- **Testimonials** — edit `src/data/client-text.json`
- **Images** — replace files in `public/images/`

---

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Accessible semantic markup
- ✅ Animated stat counters on scroll
- ✅ Scroll-aware sticky navigation
- ✅ Mobile drawer menu
- ✅ Reusable, typed component architecture
