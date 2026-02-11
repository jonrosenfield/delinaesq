'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { GlassCard } from './GlassCard'
import { motion } from 'framer-motion'

interface ServiceData {
  title: string
  description: string
  items: string[]
  color: string
  icon: string
  rotate: number
}

const services: ServiceData[] = [
  {
    title: 'Business Diagnostics & Strategy',
    description: 'Deep-dive business analysis combining tax planning with legal review.',
    items: [
      'Review formation documents, tax elections, contracts, payment flows, and intellectual property',
      'Identify risks, inefficiencies, and opportunities',
      'Multi-entity planning and optimization',
      'Cross-jurisdictional compliance review',
      'Strategic roadmap development',
    ],
    color: 'hot-pink',
    icon: '◆',
    rotate: 0,
  },
  {
    title: 'Entity Structuring',
    description: 'Formation and restructuring for liability protection and tax efficiency.',
    items: [
      'LLCs, corporations, and S-Corps',
      'S-Corp election and retroactive filings',
      'Multi-entity planning and holding companies',
      'State registrations and compliance',
      'Legal structure reviews and conversions',
    ],
    color: 'electric',
    icon: '■',
    rotate: 0,
  },
  {
    title: 'Contract Drafting & Advisory',
    description: 'Legal agreements that reflect your actual business operations and protect income.',
    items: [
      'Operating agreements and partnership terms',
      'Independent contractor and employment contracts',
      'Licensing, brand, and service agreements',
      'NDAs, IP assignments, and disclaimers',
      'Contract audits and revisions',
    ],
    color: 'cyber-violet',
    icon: '▲',
    rotate: 0,
  },
  {
    title: 'Tax Strategy & Planning',
    description: 'Tax optimization aligned with your legal structure and revenue model.',
    items: [
      'S-Corp compensation strategy',
      'Deduction and expense planning',
      'Tax review of business operations and agreements',
      'Multi-entity and pass-through alignment',
      'Ongoing legal-tax advisory',
    ],
    color: 'hot-pink',
    icon: '◉',
    rotate: 0,
  },
  {
    title: 'Transactions & M&A',
    description: 'Business sales, purchases, and exits with integrated legal and tax support.',
    items: [
      'Legal due diligence and risk assessment',
      'Transaction structuring and documentation',
      'Post-deal integration and compliance',
      'Internal exits and partnership transitions',
      'Tax-aware deal structuring',
    ],
    color: 'electric',
    icon: '★',
    rotate: 0,
  },
]

const colorMap: Record<string, { accent: string; bg: string; border: string; shadow: string }> = {
  'hot-pink': { accent: 'text-hot-pink', bg: 'bg-hot-pink/10', border: 'border-hot-pink/30', shadow: '#00FF41' },
  'electric': { accent: 'text-electric', bg: 'bg-electric/10', border: 'border-electric/30', shadow: '#00F5FF' },
  'cyber-violet': { accent: 'text-cyber-violet', bg: 'bg-cyber-violet/10', border: 'border-cyber-violet/30', shadow: '#BF5AF2' },
}

export function FloatingPortals() {
  return (
    <section id="services" className="relative py-32 md:py-40 overflow-hidden">
      {/* Decorative rectangles */}
      <div className="absolute top-16 left-8 w-36 h-36 border border-hot-pink/8 rounded-retro -rotate-6 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-24 right-12 w-28 h-28 border border-electric/8 rounded-retro rotate-12 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header — editorial centered */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="tag-label mb-6 inline-block">SERVICES</span>
            <h2 className="font-serif text-display-lg font-bold mt-6 mb-3 text-cream italic">
              Core <span className="font-pixel not-italic text-hot-pink uppercase">Services</span>
            </h2>
            <p className="text-void-400 text-lg max-w-lg mx-auto font-body">
              Five areas where we align legal and tax strategy:
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Card — full width, beveled */}
        <ScrollReveal delay={0.1}>
          <motion.div
            className="glass-card p-8 md:p-12 mb-10 max-w-4xl mx-auto border-2 border-void-700"
            whileHover={{ scale: 1.01 }}
            style={{ boxShadow: `4px 4px 0px ${colorMap[services[0].color].shadow}` }}
          >
            <div className="flex items-start gap-6">
              <div className={`w-14 h-14 rounded-retro ${colorMap[services[0].color].bg} border ${colorMap[services[0].color].border} flex items-center justify-center flex-shrink-0`}>
                <span className={`${colorMap[services[0].color].accent} text-2xl`}>{services[0].icon}</span>
              </div>
              <div>
                <h3 className="font-pixel text-lg md:text-xl font-bold text-cream mb-3 uppercase">
                  {services[0].title}
                </h3>
                <p className="text-void-400 mb-6 font-body">{services[0].description}</p>
                <ul className="space-y-2">
                  {services[0].items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-void-300 text-sm font-body">
                      <span className={`${colorMap[services[0].color].accent} mt-1.5 text-[8px]`}>■</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Anti-grid: 2-col with tilted cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.slice(1).map((service, i) => (
            <ScrollReveal key={service.title} delay={0.15 + i * 0.1}>
              <motion.div
                className="glass-card p-8 h-full border-2 border-void-700"
                whileHover={{ scale: 1.02 }}
                style={{ boxShadow: `3px 3px 0px ${colorMap[service.color].shadow}` }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-11 h-11 rounded-retro ${colorMap[service.color].bg} border ${colorMap[service.color].border} flex items-center justify-center flex-shrink-0`}>
                    <span className={`${colorMap[service.color].accent} text-lg`}>{service.icon}</span>
                  </div>
                  <h3 className="font-pixel text-sm font-bold text-cream uppercase">
                    {service.title}
                  </h3>
                </div>
                <p className="text-void-400 text-sm mb-5 font-body">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-void-400 text-xs font-body">
                      <span className={`${colorMap[service.color].accent} mt-1 text-[6px]`}>■</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
