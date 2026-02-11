# Implementation Plan: Matrix Green Swap + Accessibility Toolbar

## Task 1: Swap hot-pink (#FF006E) to Matrix Green (#00FF41)

### Approach: Change hex value in config files + hardcoded inline styles
Keep class name `hot-pink` everywhere (89 references, no risk of breakage). Just change the VALUE.

**Files to edit (8 files, ~27 edits):**

1. `tailwind.config.ts` — Change `'hot-pink': '#FF006E'` → `'#00FF41'`, update `bevel-pink` and `glow-pink` shadow hex/rgba values
2. `globals.css` — Change `--hot-pink`, `::selection`, `.glass-card::before`, `.btn-bevel-pink`, `.tag-label`, `.gradient-text`, `.neon-underline` hex/rgba values
3. `HeroSection.tsx` — Update inline `textShadow` rgba
4. `Philosophy.tsx` — Update inline `boxShadow` hex
5. `AboutDelina.tsx` — Update shadow map hex + inline boxShadow
6. `FloatingPortals.tsx` — Update colorMap shadow hex
7. `GlowInput.tsx` — Update inline gradient/boxShadow hex/rgba
8. `ParticleField.tsx` — Update 4 Three.js `color` props

All 73 Tailwind class references (`text-hot-pink`, `border-hot-pink/40`, etc.) automatically render the new color with zero changes.

---

## Task 2: Accessibility Toolbar (ported from vanilla JS)

### Architecture
- **`useAccessibility.ts`** — Custom hook: state + localStorage persistence + applies CSS classes to `<html>`
- **`AccessibilityToolbar.tsx`** — 'use client' component: fixed bottom-right toggle button + slide-out panel
- **`globals.css`** additions — CSS classes for text size, grayscale, high contrast, invert, light bg, underline links, readable font
- **`layout.tsx`** — Mount `<AccessibilityToolbar />` after Footer

### Features (matching original):
1. Text size cycling (default → large → extra-large → default)
2. Grayscale toggle
3. High contrast toggle
4. Negative contrast (invert) toggle
5. Light background toggle
6. Underline links toggle
7. Readable font toggle
8. Reset all

### Design decisions:
- Floating button at bottom-right (conventional a11y pattern), not in Navbar
- Y2K styling: `rounded-retro`, `font-pixel`, beveled shadows, glass panel
- `z-index: 9997` (below grain/scanline overlays which are pointer-events:none)
- `isLoaded` guard prevents SSR hydration mismatch
- Theme switcher deferred (would require 4 full theme color schemes — out of scope)

### Implementation order:
1. Color swap (Task 1)
2. Create useAccessibility hook
3. Create AccessibilityToolbar component
4. Add accessibility CSS to globals.css
5. Mount in layout.tsx
6. Build test
