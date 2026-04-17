'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ServiceCard } from './ServiceCard'

// ── Accent colors by practice area group ──────────────────────────────────
const CRIMSON = '#9B1527'  // Family / Brand law
const CHROME  = '#8090A8'  // Entity / Structure
const NAVY    = '#1A3A6E'  // Tax / Compliance
const COBALT  = '#2255CC'  // Contracts / Deals

// Primary 6 — shown by default. 2-column grid: 3 rows × 2 cards each.
const PRIMARY = [
  {
    eyebrow: 'FAMILY WEALTH PROTECTION',
    title: 'Prenuptial & Postnuptial Agreements',
    body: 'California family law moves fast. A well-drafted agreement protects your business assets, your equity, and the work you did before you said yes.',
    href: '/prenuptial-agreement-attorney',
    accent: CRIMSON,
  },
  {
    eyebrow: 'CREATOR ECONOMY',
    title: 'Creator & Influencer Counsel',
    body: "Brand deals, IP ownership, LLC structuring, content licensing — built for the business you're actually running, not the one your CPA imagines you have.",
    href: '/creator-attorney',
    accent: CRIMSON,
  },
  {
    eyebrow: 'ENTITY STRATEGY',
    title: 'LLC Formation & Structuring',
    body: 'Not just formation — strategy. The right entity type, at the right time, structured for the way you actually make money.',
    href: '/business-structure-attorney',
    accent: CHROME,
  },
  {
    eyebrow: 'CONTRACT ADVISORY',
    title: 'Contract Drafting & Review',
    body: "A contract that doesn't hold up in court is just paper. Every agreement Delina touches is built to be enforced.",
    href: '/business-contract-attorney',
    accent: COBALT,
  },
  {
    eyebrow: 'TAX OPTIMIZATION',
    title: 'S-Corp Election & Tax Strategy',
    body: 'California charges S-corps a 1.5% franchise tax on top of the $800 minimum. Delina gives you the whole picture before you make the election.',
    href: '/tax-attorney-small-business',
    accent: NAVY,
  },
  {
    eyebrow: 'FOUNDER STRATEGY',
    title: 'Startup & Founder Advisory',
    body: 'Cap table structure, investor agreements, co-founder splits — the legal decisions you make in year one will cost or save you in year three.',
    href: '/startup-attorney-california',
    accent: COBALT,
  },
]

// Secondary 5 — revealed on expand. 2-col rows + 1 full-width closer.
const SECONDARY = [
  {
    eyebrow: 'TAX STRATEGY',
    title: 'Tax Attorney — Small Business',
    body: 'The difference between a CPA and a tax attorney is the difference between recording history and building a different future. Delina focuses on the second problem.',
    href: '/tax-attorney-small-business',
    accent: NAVY,
    full: false,
  },
  {
    eyebrow: 'S-CORP STRATEGY',
    title: 'S-Corp Attorney',
    body: 'The election looks simple. The California-specific math is not. 1.5% franchise tax, reasonable salary requirements, and FTB compliance — modeled before you commit.',
    href: '/s-corp-attorney',
    accent: CHROME,
    full: false,
  },
  {
    eyebrow: 'IP PROTECTION',
    title: 'Trademark Attorney',
    body: 'A name, a logo, or a phrase that builds brand equity deserves federal protection. Delina handles trademark registration and enforcement for California businesses.',
    href: '/trademark-attorney',
    accent: CRIMSON,
    full: false,
  },
  {
    eyebrow: 'MISSION-DRIVEN',
    title: 'Nonprofit Attorney',
    body: '501(c)(3) formation, governance documents, compliance, and board structure — for founders building organizations around a purpose, not a profit.',
    href: '/nonprofit-attorney',
    accent: NAVY,
    full: false,
  },
  {
    eyebrow: 'DIGITAL COMMERCE',
    title: 'E-Commerce Business Attorney',
    body: 'LLC formation, sales tax compliance, supplier contracts, and consumer protection — for online store owners who have outgrown the template approach.',
    href: '/ecommerce-business-attorney',
    accent: CHROME,
    full: true, // full-width closer card
  },
]

export function BentoGrid() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      {/* Primary — clean 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
        {PRIMARY.map((service, i) => (
          <motion.div
            key={service.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>

      {/* Expand trigger */}
      <div className="flex items-center gap-5 my-8">
        <div className="flex-1 h-px bg-steel/20" />
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-3 group"
        >
          <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-ink/40 group-hover:text-ink transition-colors">
            {expanded ? 'Show less' : '5 more practice areas'}
          </span>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="font-mono text-[12px] text-ink/30 group-hover:text-ink transition-colors leading-none"
          >
            ↓
          </motion.span>
        </button>
        <div className="flex-1 h-px bg-steel/20" />
      </div>

      {/* Secondary — animated reveal */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
              {SECONDARY.map((service, i) => (
                <motion.div
                  key={service.href}
                  className={service.full ? 'md:col-span-2' : ''}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
