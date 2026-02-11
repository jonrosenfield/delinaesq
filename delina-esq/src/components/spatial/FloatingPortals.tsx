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
    color: 'neon-pink',
    icon: '&#9670;',
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
    color: 'neon-blue',
    icon: '&#9632;',
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
    color: 'neon-violet',
    icon: '&#9650;',
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
    color: 'neon-pink',
    icon: '&#9673;',
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
    color: 'neon-blue',
    icon: '&#9733;',
  },
]

const colorMap: Record<string, { accent: string; bg: string; border: string }> = {
  'neon-pink': { accent: 'text-neon-pink', bg: 'bg-neon-pink/10', border: 'border-neon-pink/20' },
  'neon-blue': { accent: 'text-electric-blue', bg: 'bg-electric-blue/10', border: 'border-electric-blue/20' },
  'neon-violet': { accent: 'text-cyber-violet', bg: 'bg-cyber-violet/10', border: 'border-cyber-violet/20' },
}

export function FloatingPortals() {
  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="tag-label mb-6 inline-block">SERVICES</span>
            <h2 className="font-display text-display-lg font-bold mt-6 mb-4 text-sage-100">
              Core <span className="gradient-text">Services</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-lg mx-auto">
              Four areas where we align legal and tax strategy:
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Card */}
        <ScrollReveal delay={0.1}>
          <GlassCard
            className="p-8 md:p-12 mb-8 max-w-4xl mx-auto"
            glowColor={services[0].color}
            depth={5}
          >
            <div className="flex items-start gap-6">
              <div className={`w-14 h-14 rounded-glass ${colorMap[services[0].color].bg} flex items-center justify-center flex-shrink-0`}>
                <span className={`${colorMap[services[0].color].accent} text-2xl`} dangerouslySetInnerHTML={{ __html: services[0].icon }} />
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-sage-100 mb-3">
                  {services[0].title}
                </h3>
                <p className="text-slate-400 mb-6">{services[0].description}</p>
                <ul className="space-y-2">
                  {services[0].items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                      <span className={`${colorMap[services[0].color].accent} mt-1.5 text-[8px]`}>&#9632;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        {/* Grid of remaining services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto" style={{ perspective: '1200px' }}>
          {services.slice(1).map((service, i) => (
            <ScrollReveal key={service.title} delay={0.15 + i * 0.1}>
              <GlassCard
                className="p-8 h-full"
                glowColor={service.color}
                depth={i + 1}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-11 h-11 rounded-glass ${colorMap[service.color].bg} flex items-center justify-center flex-shrink-0`}>
                    <span className={`${colorMap[service.color].accent} text-lg`} dangerouslySetInnerHTML={{ __html: service.icon }} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-sage-100">
                    {service.title}
                  </h3>
                </div>
                <p className="text-slate-400 text-sm mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-400 text-xs">
                      <span className={`${colorMap[service.color].accent} mt-1 text-[6px]`}>&#9632;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
