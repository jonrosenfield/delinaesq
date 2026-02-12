'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { motion } from 'framer-motion'
import { services, colorMap } from '@/lib/services'

export function FloatingPortals() {
  const featured = services[0]
  const grid = services.slice(1)
  const featuredColors = colorMap[featured.color]

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
          <Link href={`/${featured.slug}`} className="block group">
            <motion.div
              className="glass-card p-8 md:p-12 mb-10 max-w-4xl mx-auto border-2 border-void-700 transition-colors duration-300 group-hover:border-void-600"
              whileHover={{ scale: 1.01 }}
              style={{ boxShadow: `4px 4px 0px ${featuredColors.shadow}` }}
            >
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-retro ${featuredColors.bg} border ${featuredColors.border} flex items-center justify-center flex-shrink-0`}>
                  <span className={`${featuredColors.accent} text-2xl`}>{featured.icon}</span>
                </div>
                <div>
                  <h3 className="font-pixel text-lg md:text-xl font-bold text-cream mb-3 uppercase group-hover:text-hot-pink transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-void-400 mb-6 font-body">{featured.description}</p>
                  <ul className="space-y-2">
                    {featured.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-void-300 text-sm font-body">
                        <span className={`${featuredColors.accent} mt-1.5 text-[8px]`}>&#9632;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className={`inline-block mt-6 font-pixel text-[10px] tracking-[0.15em] uppercase ${featuredColors.accent}`}>
                    Learn More &#8594;
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        </ScrollReveal>

        {/* Anti-grid: 2-col cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {grid.map((service, i) => {
            const colors = colorMap[service.color]
            return (
              <ScrollReveal key={service.title} delay={0.15 + i * 0.1}>
                <Link href={`/${service.slug}`} className="block group h-full">
                  <motion.div
                    className="glass-card p-8 h-full border-2 border-void-700 transition-colors duration-300 group-hover:border-void-600"
                    whileHover={{ scale: 1.02 }}
                    style={{ boxShadow: `3px 3px 0px ${colors.shadow}` }}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-11 h-11 rounded-retro ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
                        <span className={`${colors.accent} text-lg`}>{service.icon}</span>
                      </div>
                      <h3 className="font-pixel text-sm font-bold text-cream uppercase group-hover:text-hot-pink transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-void-400 text-sm mb-5 font-body">{service.description}</p>
                    <ul className="space-y-2">
                      {service.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-void-400 text-xs font-body">
                          <span className={`${colors.accent} mt-1 text-[6px]`}>&#9632;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className={`inline-block mt-5 font-pixel text-[10px] tracking-[0.15em] uppercase ${colors.accent}`}>
                      Learn More &#8594;
                    </span>
                  </motion.div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
