# DELINA.ESQ 2.0 — Project Standards & Battle Plan

## Identity
**Client:** Delina Yasmeh, Esq. — Boutique Tax & Legal Strategy Firm
**Target:** Wealthy Millennials, Founders, Creators, Influencers ($250K+ earners)
**Domain:** delina.esq
**Vibe:** Y2K Retrofuture meets Liquid Glass meets Neo-Minimalist Luxury

---

## Tech Stack
- **Framework:** Next.js 14+ (App Router, RSC)
- **Styling:** Tailwind CSS 3.4+
- **Animation:** Framer Motion 11+
- **3D/Spatial:** Three.js + @react-three/fiber + @react-three/drei
- **Fonts:** Space Grotesk (body), Clash Display (headings), JetBrains Mono (accents)
- **Deployment:** Vercel / Netlify
- **Forms:** Netlify Forms or custom API route

---

## Aesthetic Identity: Y2K Retrofuture & Tactile Maximalism

### Color System
```
// Dopamine Accents
--neon-pink:      #FF2D78
--electric-blue:  #0066FF
--cyber-violet:   #8B5CF6
--acid-green:     #39FF14

// Neo-Minimalist Neutrals
--slate-950:      #0A0A0F
--slate-900:      #12121A
--slate-800:      #1E1E2A
--sage-100:       #E8EDE6
--sage-200:       #D1DBC9
--warm-white:     #FAFAF8

// Glass
--glass-white:    rgba(255, 255, 255, 0.06)
--glass-border:   rgba(255, 255, 255, 0.08)
--glass-glow:     rgba(255, 45, 120, 0.15)
```

### Typography Scale
- **Display:** Clash Display — 72-120px, kinetic scroll-reactive
- **H1:** 48-72px, bold, letter-spacing: -0.02em
- **H2:** 36-48px, medium
- **Body:** Space Grotesk 16-18px, 1.7 line-height
- **Mono:** JetBrains Mono — tags, labels, metadata

### Design Tokens
- Border radius: 16px (cards), 999px (pills)
- Glass blur: backdrop-blur(20px)
- Shadow depth: 0 8px 32px rgba(0,0,0,0.3)
- Transition default: 300ms cubic-bezier(0.4, 0, 0.2, 1)

---

## Architecture

### Page Structure
```
/                   → Homepage (scrollytelling narrative)
/terms              → Terms & Conditions
/thank-you          → Form submission confirmation
```

### Component Tree
```
app/
├── layout.tsx              → Root layout, fonts, metadata
├── page.tsx                → Homepage
├── terms/page.tsx          → Terms
├── thank-you/page.tsx      → Thank you
├── globals.css             → Base styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── hero/
│   │   ├── HeroSection.tsx
│   │   └── KineticText.tsx
│   ├── sections/
│   │   ├── WhoThisIsFor.tsx
│   │   ├── Philosophy.tsx
│   │   ├── Services.tsx
│   │   ├── OurApproach.tsx
│   │   ├── AboutDelina.tsx
│   │   └── ContactSection.tsx
│   ├── agentic/
│   │   └── AgenticFinder.tsx
│   ├── spatial/
│   │   ├── FloatingPortals.tsx
│   │   └── GlassCard.tsx
│   ├── ui/
│   │   ├── ScrollReveal.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── GlowInput.tsx
│   │   └── SectionTag.tsx
│   └── three/
│       └── ParticleField.tsx
```

---

## 2026 UX Patterns

### Agentic Finder
- Natural language input replacing traditional nav
- "Tell us what you need" → routes to relevant section
- Keyword matching: tax, entity, contract, M&A, strategy → scroll to service
- Glassmorphism container with neon glow on focus

### Floating Portals
- Service cards on staggered Z-axis planes
- Parallax depth on scroll
- Hover: card lifts + glass glow intensifies
- Mobile: horizontal scroll carousel with snap

### Scrollytelling
- Each section reveals on scroll with Framer Motion
- Staggered children animations
- Parallax backgrounds
- Progress indicator in navbar

### Micro-interactions
- All buttons: magnetic cursor pull (300ms)
- Form inputs: neon underline glow on focus
- Cards: tilt on hover (subtle 3D)
- Page transitions: fade + slide

---

## Performance Targets
- LCP < 2.0s
- FID < 100ms
- CLS < 0.1
- Three.js canvas: lazy loaded, <2s texture load
- Images: next/image with blur placeholders
- Fonts: display=swap, preloaded

## Accessibility
- WCAG 2.2 AA minimum
- All animations respect prefers-reduced-motion
- Focus indicators on all interactive elements
- Semantic HTML throughout
- aria-labels on spatial/3D elements
- Color contrast: 4.5:1 minimum for body text

## SEO / Machine Experience
- Schema.org: LegalService, Attorney, LocalBusiness
- Open Graph + Twitter Cards
- Semantic headings hierarchy
- Structured contact data
- Meta descriptions per page

---

## Content Source
All legal content extracted from original DelinaESQ site.
Do NOT alter legal disclaimers, terms, or professional credentials.
Creative license on presentation, layout, and copy styling only.
