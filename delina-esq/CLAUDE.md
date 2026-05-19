# CLAUDE.md — Delina.ESQ 2.0 Redesign Battle Plan
*Prada Minimalism × Vogue Editorial × High-Converting Legal SEO*

---

## Project Context

**Client:** Delina Yasmeh, Esq. — Boutique Tax & Legal Strategy Attorney
**Domain:** delina.esq
**Stack:** Next.js 14, Tailwind CSS, Framer Motion, Three.js
**Audience:** $250K–$2M earners — Founders, Creators, Entrepreneurs, HNWIs
**SEO Mission:** 16 content "Lands" × ~1,046 articles. Every design decision must serve organic ranking and conversion.

**Current state:** Y2K neon retrofuture aesthetic (`globals.css` says "wealthy chaos, not corporate clean"). This is being replaced entirely.
**New direction:** Prada-level minimalism × Vogue editorial authority × 2026 agentic UX.

---

## Phase 0 — Before You Write a Single Component

### Read these files first
- `src/app/globals.css` — you are replacing the entire design system
- `src/app/layout.tsx` — font imports live here; you will swap fonts
- `tailwind.config.ts` — you will replace the color palette and typography scale
- `src/components/layout/Navbar.tsx` — being replaced with Concierge Nav
- `src/components/hero/HeroSection.tsx` — being replaced with Cinematic Hero
- `src/app/page.tsx` — the homepage composition; you will rebuild the section order

### Install required packages
```bash
npm install @next/font sharp
npm install gsap  # for ScrollTrigger / kinetic text if Framer Motion isn't sufficient
```

### Google Fonts to add via `next/font/google`
- **Cormorant Garamond** — weights 300, 400, 600 (primary serif, headlines)
- **EB Garamond** — weight 400, 500 (body editorial)
- **Space Grotesk** — weights 300, 400, 500 (UI labels, nav)
- **JetBrains Mono** — weight 400 (technical mono labels, tag lines)

> **Why these:** Cormorant Garamond is the closest free equivalent to Didot. It has the extreme thick-thin contrast that reads as "magazine authority." EB Garamond is for long-form editorial body copy — it breathes. Space Grotesk is clean but has personality. JetBrains Mono signals "technical builder."

---

## Phase 1 — Global Design System

### 1A. Replace `tailwind.config.ts`

Replace the entire theme with the Prada Palette. Keep the structure but change all values:

```typescript
colors: {
  // THE PRADA PALETTE — Strict monochrome base
  ink:    '#0A0A0A',   // near-black (replaces void-950)
  smoke:  '#111111',   // dark surface
  ash:    '#1C1C1C',   // card backgrounds
  steel:  '#2A2A2A',   // borders, dividers
  mist:   '#666666',   // muted text
  silver: '#999999',   // secondary text
  bone:   '#CCCCCC',   // body text on dark
  ivory:  '#F0EDE8',   // warm off-white (editorial sections)
  parchment: '#F9F7F4', // hero backgrounds, paper sections
  white:  '#FAFAFA',   // pure near-white

  // DOPAMINE POPS — used ONLY for CTAs, highlights, accents
  cobalt:  '#0047FF',  // electric cobalt — primary CTA
  lemon:   '#F5E642',  // acid lemon — highlight / hover state
  blush:   '#FF2D55',  // neon blush — urgent CTA / alerts
  sage:    '#00C896',  // cool sage — success / confirmation
}
```

```typescript
fontFamily: {
  display: ['var(--font-cormorant)', 'Georgia', 'serif'],
  editorial: ['var(--font-eb-garamond)', 'Georgia', 'serif'],
  sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
  mono: ['var(--font-jetbrains)', 'monospace'],
}
```

```typescript
fontSize: {
  // Vogue-scale editorial type
  'headline':    ['clamp(5rem, 13vw, 11rem)', { lineHeight: '0.88', letterSpacing: '-0.04em' }],
  'title':       ['clamp(3rem, 7vw, 6.5rem)', { lineHeight: '0.92', letterSpacing: '-0.03em' }],
  'subhead':     ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  'eyebrow':     ['0.6875rem',                   { lineHeight: '1', letterSpacing: '0.2em' }],
  'body-lg':     ['clamp(1.0625rem, 1.5vw, 1.25rem)', { lineHeight: '1.75', letterSpacing: '0.01em' }],
  'body':        ['1rem',                         { lineHeight: '1.7', letterSpacing: '0.005em' }],
  'caption':     ['0.8125rem',                    { lineHeight: '1.5', letterSpacing: '0.03em' }],
}
```

### 1B. Rewrite `globals.css`

Strip out all Y2K/neon rules. Replace with:

```css
/* ══════════════════════════════════════════════
   DELINA.ESQ 2.0 — PRADA MINIMALISM × VOGUE EDITORIAL
   "Clarity is protection. Structure is self-respect."
   ══════════════════════════════════════════════ */

@layer base {
  :root {
    --ink:        #0A0A0A;
    --parchment:  #F9F7F4;
    --cobalt:     #0047FF;
    --lemon:      #F5E642;
    --blush:      #FF2D55;
  }

  html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
  body { @apply bg-ink text-bone font-sans; overflow-x: hidden; }

  ::selection { background: var(--cobalt); color: #fff; }

  ::-webkit-scrollbar { width: 2px; }
  ::-webkit-scrollbar-track { background: var(--ink); }
  ::-webkit-scrollbar-thumb { background: var(--steel); }
}

@layer components {
  /* ── PAPER GRAIN (subtle — editorial warmth) ── */
  .grain {
    position: relative;
  }
  .grain::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.025;
    background-image: url("data:image/svg+xml,...");  /* fractalNoise SVG */
    background-size: 180px 180px;
    mix-blend-mode: overlay;
  }

  /* ── FROSTED GLASS ── */
  .glass {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
  .glass-light {
    background: rgba(249, 247, 244, 0.85);
    backdrop-filter: blur(20px) saturate(150%);
    border: 1px solid rgba(0, 0, 0, 0.06);
  }

  /* ── EYEBROW LABEL ── */
  .eyebrow {
    @apply font-mono text-eyebrow uppercase tracking-widest text-mist;
  }

  /* ── SERIF HEADLINE ── */
  .headline {
    @apply font-display text-headline text-white;
  }

  /* ── COBALT CTA BUTTON ── */
  .btn-primary {
    @apply inline-flex items-center gap-2 px-8 py-4 bg-cobalt text-white font-sans text-caption uppercase tracking-widest;
    transition: background 0.2s ease, transform 0.15s ease;
  }
  .btn-primary:hover {
    background: var(--lemon);
    color: var(--ink);
    transform: translateY(-1px);
  }

  /* ── MINIMAL GHOST BUTTON ── */
  .btn-ghost {
    @apply inline-flex items-center gap-2 px-8 py-4 border border-steel text-bone font-sans text-caption uppercase tracking-widest;
    transition: border-color 0.2s, color 0.2s;
  }
  .btn-ghost:hover { border-color: white; color: white; }

  /* ── HORIZONTAL RULE ── */
  .rule { @apply border-t border-steel w-full; }
}
```

### 1C. Update `src/app/layout.tsx`

Swap font imports:
```tsx
import { Cormorant_Garamond, EB_Garamond, Space_Grotesk, JetBrains_Mono } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})
const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-eb-garamond',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-space-grotesk',
  display: 'swap',
})
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains',
  display: 'swap',
})
```

Body className: `${cormorant.variable} ${ebGaramond.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`

---

## Phase 2 — Concierge Navigation

**File:** `src/components/layout/Navbar.tsx` (full replacement)

### Behavior
- **Desktop:** Fixed top bar, 52px tall, `bg-ink/90 backdrop-blur-md`. Left: wordmark `DELINA.ESQ` in Cormorant 400, tracked wide. Right: 4 nav links in Space Grotesk 300 uppercase 11px + cobalt "Book Intake" button.
- **Scroll state:** On scroll past 80px, border-bottom `1px solid steel` fades in.
- **Mobile (< 768px):** Wordmark left, hamburger right. Drawer slides in from top (not side), full-width, black bg.

### Concierge Bar (below main nav on homepage only)
This is the agentic routing feature. A single input with placeholder:

> *"Tell me what you're building..."*

Below the input: 4–6 quick-route chips (Space Grotesk mono, 10px, border-steel):
- `I'M STARTING AN LLC` → `/entity-structuring`
- `I NEED A PRENUP` → `/prenup`
- `I'M A CONTENT CREATOR` → `/creator`
- `I HAVE A TAX PROBLEM` → `/tax-strategy`
- `I'M RAISING FUNDING` → `/startup`
- `I NEED A CONTRACT REVIEWED` → `/contract-drafting`

**Implementation:** The input is purely cosmetic routing — map common phrases to Land URLs using a simple keyword match. No AI needed. On submit, route with `router.push()`.

```tsx
// Keyword routing map — expand as Lands are built
const INTENT_MAP: [RegExp, string][] = [
  [/llc|structure|entity/i,     '/entity-structuring'],
  [/prenup|marriage|marital/i,  '/prenup'],
  [/creator|influencer|brand/i, '/creator'],
  [/tax|irs|s.?corp/i,          '/tax-strategy'],
  [/startup|founder|raise/i,    '/startup'],
  [/contract|agreement|deal/i,  '/contract-drafting'],
]
```

### Schema Markup
Add JSON-LD `Organization` schema to `layout.tsx`:
```json
{
  "@context": "https://schema.org",
  "@type": ["LegalService", "ProfessionalService"],
  "name": "Delina Yasmeh, Esq.",
  "url": "https://delina.esq",
  "areaServed": "California",
  "priceRange": "$$$$"
}
```

---

## Phase 3 — Cinematic Hero Section

**File:** `src/components/hero/HeroSection.tsx` (full replacement)

### Layout (desktop)
Full viewport. Black background. No nav overlap — use `pt-[52px]`.

**Left column (55%):**
- Eyebrow label: `CALIFORNIA LEGAL STRATEGY` in mono, top-left
- Headline: Two-line oversized Cormorant, white, `clamp(5rem, 11vw, 10rem)`, letter-spacing -0.04em. The headline assembles on load using Framer Motion `staggerChildren`:
  - Line 1: **"Protect"** (italic, Cormorant Light)
  - Line 2: **"What You've Built."** (Cormorant SemiBold)
- Sub-headline: 1 sentence, Space Grotesk 300, 18px, `text-silver`, max-width 420px
- CTA row: `[Book a Paid Intake →]` (cobalt button) + `[How It Works]` (ghost)
- Below CTA: 3 proof chips in mono 10px, border-steel, inline: `CALIFORNIA LICENSED` · `PAID INTAKE ONLY` · `EST. 2019`

**Right column (45%):**
- High-contrast editorial photography. **Ken Burns effect:** on mount, image slowly scales 1.0 → 1.06 over 8s, `ease-in-out`. Use `overflow-hidden` clip on the container.
- Apply `mix-blend-mode: luminosity` to desaturate slightly — keeps the Prada monochrome feel even if the photo has color.

**Framer Motion animation sequence (stagger):**
```
0ms    — eyebrow fades up (opacity 0→1, y: 12→0)
150ms  — headline line 1 slides up
300ms  — headline line 2 slides up
450ms  — subheadline fades in
600ms  — CTA row fades in
750ms  — proof chips fade in
800ms  — image begins Ken Burns
```

### Mobile Hero
Stack: image top (40vh, Ken Burns still active), text below. Headline reduces to `clamp(3rem, 10vw, 4.5rem)`.

---

## Phase 4 — Homepage Section Architecture

**File:** `src/app/page.tsx`

Rebuild the section order:

```tsx
// Homepage composition
<Navbar />
<HeroSection />           // Phase 3 above
<LogoStrip />             // Phase 4A
<PhilosophyStatement />   // Phase 4B
<ServicesGrid />          // Phase 4C — Bento + Glassmorphism
<WhoThisIsFor />          // Phase 4D — editorial with image
<ProcessSection />        // Phase 4E — numbered, minimal
<ScrollingTestimonial />  // Phase 4F — horizontal scroll
<CTABanner />             // Phase 4G — full-width cobalt
<Footer />                // Phase 4H
```

### 4A. Logo Strip
Thin horizontal band. `bg-ash border-y border-steel`. Marquee scroll (CSS animation, no JS lib). 6–8 entity types or trust signals: `CALIFORNIA BAR ASSOCIATION` · `IRS ENROLLED` · `FEATURED IN FORBES` · etc. Font: mono 9px, letter-spacing 0.25em, `text-mist`.

### 4B. Philosophy Statement
**This is a Scrollytelling section.**

Full-width. Alternating `bg-ink` / `bg-parchment` — the parchment section has the paper grain overlay.

Large pull-quote in Cormorant Italic, centered:
> *"The moment your business starts making real money, the question is no longer whether you need legal structure. The question is how long you're willing to risk everything you've built on a handshake."*
> — Delina Yasmeh

Use Framer Motion `useInView` + `useTransform` so each word of the quote assembles as the user scrolls down. Each word: `opacity: 0.15 → 1` triggered by scroll position. This is the "kinetic typography" requirement.

### 4C. Services Grid — Bento + Liquid Glass
**File:** `src/components/services/` (new or replace existing)

**Layout:** CSS Grid bento layout. Not equal cards — varied sizes to create editorial tension.

```
[  LARGE CARD (Prenup/Postnup)  ] [ SMALL CARD (LLC)   ]
[ SMALL CARD (Tax Strategy)     ] [  LARGE CARD (Creator Land)  ]
[  FULL-WIDTH CARD (Contract/Startup)                   ]
```

**Each card:**
- `glass` class (frosted, dark bg)
- Eyebrow: Land name in mono
- Headline: Service title in Cormorant 300, ~2rem
- 1-sentence value prop, editorial body
- Bottom: `[Explore →]` in mono with cobalt arrow
- **On hover:** Card lifts on Z axis (Framer Motion `whileHover: { y: -8, scale: 1.01 }`), blur behind it deepens, border transitions from `steel` to `cobalt/30`
- **Background distortion:** Each card has a faint background image (abstract texture or photography). On hover the image `scale(1.05)` behind the frosted glass — creates the "liquid glass distortion" effect without WebGL.

### 4D. Who This Is For
Asymmetric layout: 60/40. Left: large Cormorant headline + 4–6 audience descriptors. Right: editorial photography (black and white, portrait orientation).

Audience items animate in with stagger on scroll. Each item: eyebrow-style mono label + 1-sentence description. Not a bullet list — visually separated by `border-t border-steel` lines.

### 4E. Process Section
Numbered 01–04. Horizontal on desktop, vertical on mobile. Each step:
- Large mono number in `text-steel`, `7rem`, overlapping the heading
- Heading in Cormorant 300
- Body in editorial sans
- No icons. The numbers are the design.

Steps:
1. **Book a Paid Intake** — 60 minutes, $[X]. Your situation, your strategy.
2. **Receive a Legal Roadmap** — Not a template. A plan written for your specific entity, income, and risk.
3. **Execute with Confidence** — Implementation documents, reviewed and signed.
4. **Ongoing Advisory** — Retained access for the questions that come up at 11pm.

### 4F. Scrolling Testimonial
Horizontal scroll on desktop (overflow-x: auto, snap), stack on mobile. 3–5 quote cards, `glass` style, Cormorant italic for the quote, Space Grotesk for attribution. Quantified where possible: `"Saved us $43,000 in unnecessary tax liability."`

### 4G. CTA Banner
Full-width. `bg-cobalt`. No image, no texture. White text.
- Large Cormorant: **"Ready to protect what you've built?"**
- Space Grotesk body: one sentence
- White button with cobalt text (inverted), hover → lemon

### 4H. Footer
Minimal. Three columns: Left wordmark + tagline. Center: Land links (these are the SEO Land URLs). Right: contact + legal. Bottom bar: copyright in mono 10px.

**The footer Land links are critical for SEO.** All 12–16 Land landing pages must be linked in the footer once built. This passes PageRank to every Land from every page on the site.

---

## Phase 5 — Landing Page Template (SEO Lands)

**File:** `src/app/[land]/page.tsx` or individual route files

Every Land has a landing page. The template must be reusable.

### Structure (follow `WORKFLOWS.md` Workflow 7)

```
<LandingHero />          — H1 = primary keyword, CA-specific. White serif on dark.
<WhatItActuallyMeans />  — H2. The reframe. Not a definition.
<WhoNeedsThis />         — H2. Audience signals. California numbers.
<BentoFeatures />        — H2. 3–6 glass bento cards. Key service features.
<PAASection />           — H2. 2–3 PAA questions. FAQPage schema.
<RelatedPosts />         — H2. Links to supporting blog posts for this Land.
<LandingCTA />           — H2 "Ready to [action]?". Paid intake button.
```

### SEO Frontmatter (each landing page must export)
```tsx
export const metadata: Metadata = {
  title: '[Primary Keyword] | Delina Yasmeh, Esq.',
  description: '[Under 155 chars, action signal, primary keyword]',
  // NO trailing slash — the site standardized on slash-less canonical
  // URLs (see commit "remove trailing slashes from all site URLs").
  // Netlify 301s the trailing-slash variant to this form; the canonical
  // MUST match the served URL or you reintroduce duplicate-canonical issues.
  alternates: { canonical: 'https://delina.esq/[slug]' },
  openGraph: { ... },
}
```

### Schema (add to each landing page)
```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Delina Yasmeh, Esq.",
  "serviceType": "[Land service name]",
  "areaServed": {
    "@type": "State",
    "name": "California"
  },
  "url": "https://delina.esq/[slug]"
}
```

---

## Phase 6 — Blog Post Template

**File:** `src/app/blog/[slug]/page.tsx`

### Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[post title]",
  "author": {
    "@type": "Person",
    "name": "Delina Yasmeh",
    "jobTitle": "Attorney"
  },
  "publisher": { "@type": "Organization", "name": "Delina Yasmeh, Esq." },
  "datePublished": "[ISO date]"
}
```

For PAA posts, use `FAQPage` schema with `mainEntity` array of Q&A pairs.

### Typography rules (prose)
- Article body: `font-editorial` (EB Garamond), `text-body-lg`, `text-ivory`
- Article H1: Cormorant, headline scale, center-aligned on desktop
- Article H2: Cormorant 300, `text-subhead`, margin-top 3rem
- Article H3: Space Grotesk 500, 1.125rem, uppercase, letter-spacing 0.1em
- Paragraphs: max-width 680px, centered

### Internal Link Styling
Every internal link: `text-cobalt` underline on hover, never `text-blue-500`. Consistent anchor text = the keyword phrase.

---

## Phase 7 — Performance

### Image Optimization
- All images: Next.js `<Image>` component. Never raw `<img>`.
- Hero image: `priority={true}`, `sizes="(max-width: 768px) 100vw, 50vw"`
- All other images: lazy load default

### Font Loading
- All fonts declared with `display: 'swap'` (already specified above)
- Font variables injected at `<html>` level in `layout.tsx`

### Core Web Vitals targets
- LCP < 2.0s (hero image preloaded, font swap)
- CLS < 0.05 (explicit image dimensions, no layout shift)
- INP < 100ms (no heavy JS on interaction path)

### Framer Motion
- Wrap all animation components in `<LazyMotion features={domAnimation}>` to reduce bundle
- Use `viewport={{ once: true }}` on all scroll-triggered animations — don't re-animate on scroll up
- Disable animations if `prefers-reduced-motion` is set:

```tsx
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
// Pass as prop to motion components, set duration to 0 if true
```

---

## Phase 8 — Responsive Breakpoints

| Breakpoint | Width | Key changes |
|---|---|---|
| `sm` | 640px | Hero stacks, concierge chips wrap |
| `md` | 768px | Hamburger nav, bento 1-col |
| `lg` | 1024px | Full bento grid, side-by-side hero |
| `xl` | 1280px | Max content width caps at 1200px |
| `2xl` | 1536px | Headline scales up, wider margins |

Max content width: `max-w-[1200px] mx-auto px-6 lg:px-12`

---

## Execution Order

Work in this exact sequence:

```
[ ] Phase 1  — tailwind.config.ts (colors + fonts)
[ ] Phase 1  — globals.css (design system utilities)
[ ] Phase 1  — layout.tsx (font imports + JSON-LD)
[ ] Phase 2  — Navbar.tsx (concierge nav + intent routing)
[ ] Phase 3  — HeroSection.tsx (cinematic hero)
[ ] Phase 4A — LogoStrip.tsx (new component)
[ ] Phase 4B — PhilosophyStatement.tsx (kinetic text)
[ ] Phase 4C — ServicesGrid.tsx (bento + glassmorphism)
[ ] Phase 4D — WhoThisIsFor.tsx (update existing)
[ ] Phase 4E — ProcessSection.tsx (new or update OurApproach.tsx)
[ ] Phase 4F — ScrollingTestimonial.tsx (new component)
[ ] Phase 4G — CTABanner.tsx (new component)
[ ] Phase 4H — Footer.tsx (update with Land links)
[ ] Phase 5  — Landing page template
[ ] Phase 6  — Blog post template
[ ] Phase 7  — Performance audit (Lighthouse ≥ 90 on all metrics)
```

Do not move to the next phase until the current phase renders cleanly with no console errors and passes a visual check.

---

## What Not To Do

- **No Y2K / neon / glow effects.** The `glow-*` and `scanline` utilities are gone.
- **No bullet points in editorial copy.** Use prose and line separators.
- **No free consult CTAs.** Every CTA leads to a paid intake booking.
- **No pricing on any page.** Pricing is discussed in intake.
- **No placeholder copy like "Lorem ipsum."** Use real Delina voice copy from `VOICE_GUIDE.md`.
- **No `<img>` tags.** Always `next/image`.
- **No animation on every element.** Restraint is the aesthetic. Animate maximum 2–3 elements per section.
- **No gradient backgrounds.** Monochrome only. The dopamine pops are solid colors.
- **Never link to an internal page that doesn't exist yet.** Use `href="#"` and a comment for planned pages.

---

## Voice Rules (apply to all copy in components)

Pull from `OPENCLAW/VOICE_GUIDE.md`. Key constraints:
- First sentence of every section = the most important sentence
- H2s are statements or questions, never labels
- Dollar amounts and California statute references build trust
- CTAs: "Book a paid intake" — never "reach out," "contact us," "get in touch"
- Em dash is Delina's punctuation of choice

---

## File Naming Convention

```
src/
  app/
    page.tsx                          ← homepage
    [land-slug]/
      page.tsx                        ← landing page
    blog/
      [slug]/
        page.tsx                      ← blog post
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      ConciergeBar.tsx               ← intent routing bar
    hero/
      HeroSection.tsx
      KineticHeadline.tsx            ← animated headline component
    sections/
      LogoStrip.tsx
      PhilosophyStatement.tsx
      ServicesGrid.tsx
      WhoThisIsFor.tsx
      ProcessSection.tsx
      ScrollingTestimonial.tsx
      CTABanner.tsx
    services/
      ServiceCard.tsx                 ← glass bento card
      BentoGrid.tsx
    blog/
      ArticleLayout.tsx
      InternalLink.tsx
    ui/
      Button.tsx                      ← btn-primary + btn-ghost
      Eyebrow.tsx
      SectionWrapper.tsx              ← max-width container
      GrainOverlay.tsx
```

---

## Design Validation Checklist (run before marking any phase complete)

- [ ] Headline font is Cormorant Garamond — visible thick-thin contrast
- [ ] Background is true near-black `#0A0A0A`, not dark grey
- [ ] The only cobalt on screen is on interactive elements
- [ ] Body text is legible at 16px on mobile (check contrast ratio ≥ 4.5:1)
- [ ] No neon glow effects visible anywhere
- [ ] Paper grain overlay present but subtle (opacity ≤ 0.03)
- [ ] CTA button color is cobalt `#0047FF`, hover state is lemon `#F5E642`
- [ ] No bullet point lists in editorial sections
- [ ] All images use `next/image`
- [ ] Lighthouse Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95

---

*Last updated: 2026-03-19 | Owner: Jonathan Rosenfield | Aesthetic direction: Prada × Vogue × 2026 Agentic UX*
