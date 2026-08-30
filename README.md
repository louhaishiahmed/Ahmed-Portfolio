# Ahmed Louhaichi — portfolio

Single continuous scroll-driven narrative. No navbar — a minimal side
progress-dot indicator instead. Dark-mode-first, kinetic, bold type.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build && npm run preview
```

## Stack

- React 18 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`, CSS-first config in `src/index.css`)
- framer-motion (scroll/load animations, reduced-motion aware)
- Google Fonts: **Bricolage Grotesque** (display) + **Inter** (body)

## Deciding the visual direction

**Accent colour** — three candidates. Preview them live with the swatches
at the bottom-left of the screen (that `AccentSwitcher` is a temporary
review aid — delete `src/components/AccentSwitcher.jsx` and its usage in
`App.jsx` before launch). To lock one in, set `:root { --accent }` in
`src/index.css`:

| option    | hex       | feel                                  |
| --------- | --------- | ------------------------------------- |
| amber     | `#f5a524` | warm, confident, high energy (default) |
| coral     | `#ff6f5e` | bolder, more personality              |
| deep teal | `#17b8a6` | cooler, more "engineered", calmer     |

**Signature motif** — a very faint chessboard grid (`.chess-grid` in
`index.css`), tuned to read as texture only. Adjust the alpha in that
rule to make it more/less present.

## Structure

```
src/
  App.jsx                     narrative assembly + nav wiring
  data/
    sections.js               single source of truth for the scroll sections
    content.js                projects / toolkit / beyond-work copy + numbers
  hooks/
    useActiveSection.js       IntersectionObserver → active dot
    usePrefersReducedMotion.js
  components/
    ProgressDots.jsx          side dots (desktop) / bottom pill (mobile)
    Reveal.jsx                shared scroll-in fade/slide (hero easing)
    Section.jsx               section shell (texture + glow) + SectionHeading
    PhotoPlaceholder.jsx      framed image slot — renders `src`, else a labelled stand-in
    StatCounter.jsx           count-up on scroll-in, reduced-motion aware (lg / sm)
    Hero.jsx                  name, positioning line, subtext, 4 counters, portrait
    About.jsx                 short narrative + ABOUT_PHOTO_SUIT
    SelectedWork.jsx          5 expandable project cards (AIVA featured)
    ProjectCard.jsx           collapsed summary + numbers → challenge/action/result
    Toolkit.jsx               3 skill clusters as a tag field
    BeyondWork.jsx            chess / magic / sailing — lighter cards
    Contact.jsx               email, LinkedIn, Download CV
    BackToTop.jsx             appears after ~1 screen; bottom-right
    CommandPalette.jsx        "/" overlay — section jumps + a hidden Easter egg
    AccentSwitcher.jsx        TEMP review aid — remove before launch
```

All six sections are built: `hero`, `about`, `work`, `toolkit`,
`beyond`, `contact`. Scroll-in animations use `Reveal` (shared easing
with the hero); project cards expand on click/tap/Enter.

## Easter egg

Press `/` (or tap the `/` button, bottom-right) to open a small command
palette. Typing a section name jumps there. Typing something like
"are these real", "fake", or "magic" gets an on-brand confession that
the portraits are AI-generated. `Esc` or a click outside dismisses it.

## Assets

All seven images are in `src/assets/images/`, imported (Vite hashes +
bundles them). If a file is removed, that frame falls back to a labelled
stand-in — search the mono label (`WORK_PHOTO_*`) to find where it's used.

| label                         | file                     | crop | rendered as        |
| ----------------------------- | ------------------------ | ---- | ------------------ |
| `HERO_PHOTO_HOODIE`           | `hero-hoodie.jpg`        | 4:5  | eager, high-prio   |
| `ABOUT_PHOTO_SUIT`            | `about-suit.jpg`         | 4:5  | lazy               |
| `WORK_PHOTO_TUNISIAN_ARTISTS` | `tunisian-artists.jpg`   | 3:2  | lazy               |
| `WORK_PHOTO_WAY_CONNECT`      | `way-connect.jpg`        | 3:2  | lazy               |
| `WORK_PHOTO_AIVA`             | `aiva-robot.jpg`         | 1:1  | lazy (featured)    |
| `WORK_PHOTO_ORATO`            | `orato.jpg`              | 3:2  | lazy, focus 30%    |
| `WORK_PHOTO_CHESS`            | `chess-tournaments.jpg`  | 3:2  | lazy               |

To swap one: drop the file in `src/assets/images/`, update its `import`
in `src/data/content.js`. Per-card framing lives on the project object
(`image`, optional `imagePosition`).

**Image sizes** — the source files for AIVA / OratO / Chess came in at
1.5–4.7 MB; they were downscaled in place to ~1500 px long edge, JPEG
q78–82 (now 125–260 KB each) with `sharp-cli` via `npx`. Total image
weight is ~740 KB. If you replace one with a fresh high-res export, run
it through the same step.

Also in `Contact.jsx`: `LINKEDIN_PLACEHOLDER` (profile URL) and
`CV_PLACEHOLDER` (hosted PDF).

## Accessibility

- `prefers-reduced-motion` respected globally: `<MotionConfig
  reducedMotion="user">` covers every `<motion.*>` (incl. `whileInView`),
  explicit `reduced` guards in `Reveal` / `StatCounter` / `ProjectCard` /
  overlays, and a CSS fallback zeroes animation + smooth-scroll.
- Keyboard: skip link; every progress dot is a real `<button>` in DOM
  order (Tab top-to-bottom) with a visible focus ring, `aria-current`,
  and its label shown on focus; activating one moves focus to the target
  section. Project cards are `<button>` with `aria-expanded` /
  `aria-controls`. The command palette is a focus-trapped `role="dialog"`
  with `Esc` + click-outside to close and focus restore.
- Contrast: body and label text sits at/above WCAG AA (4.5:1) on
  `#08080a`; the smallest meta text and UI dots clear 3:1. Accent
  (`amber` / `coral` / `teal`) as text clears 7:1.
- Low-power: animations are transform/opacity only; the per-section glow
  is a plain radial-gradient (no blur filter) so 6 of them don't stack
  up a compositing cost while scrolling.
