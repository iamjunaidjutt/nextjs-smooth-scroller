# Next.js Smooth Scroller & Parallax

A modern Next.js 14 showcase featuring smooth momentum scrolling with Lenis and scroll-triggered parallax image effects powered by GSAP.

---

## Overview

This project demonstrates how to combine Lenis smooth momentum scrolling with GSAP ScrollTrigger to build fluid, high-performance web experiences. It features a synchronized parallax image gallery where different columns scroll at distinct speeds without causing layout shifts or frame drops.

---

## Key Features

- **Lenis Smooth Scroll**: Hardware-accelerated inertial momentum scrolling.
- **GSAP ScrollTrigger**: Scroll-linked velocity and transform calculations applied smoothly to visual layers.
- **Parallax Image Columns**: Multi-column image showcase scrolling at varied rates for an immersive 3D depth effect.
- **Performance Optimized**: Frame-synced render loop ensuring fluid 60fps animations across modern browsers.
- **Responsive Layout**: Adapts gracefully across desktop, tablet, and mobile screens.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Smooth Scrolling**: Lenis (`lenis`)
- **Animation Engine**: GSAP (`gsap`)
- **Styling**: Tailwind CSS
- **Language**: JavaScript (React 18)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/iamjunaidjutt/nextjs-smooth-scroller.git
cd nextjs-smooth-scroller
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
# or
pnpm dev
```

Open `http://localhost:3000` in your browser to experience the smooth scroll and parallax animations.

---

## Available Scripts

- `npm run dev` — Starts the local Next.js development server.
- `npm run build` — Compiles and optimizes production assets.
- `npm run start` — Runs the compiled production build locally.
- `npm run lint` — Runs ESLint checks.

---

## Project Structure

```
nextjs-smooth-scroller/
├── src/
│   ├── app/
│   │   ├── layout.js              # Root HTML and font layout
│   │   ├── page.js                # Main page rendering the gallery
│   │   └── globals.css            # Base stylesheet
│   └── components/
│       ├── SmoothScroller.jsx     # Lenis smooth scroll initialization
│       ├── Parallax.jsx           # Parallax container and animation logic
│       └── ImageList.jsx          # Gallery columns and image presentation
├── public/                        # Static assets
└── package.json                   # Dependencies and scripts
```

---

## License

This project is open-source and available under the [MIT License](LICENSE).
