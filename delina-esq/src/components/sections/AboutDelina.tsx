'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { motion } from 'framer-motion'
import Image from 'next/image'

const career = [
  {
    firm: 'SingerLewak',
    description: 'Began her career at SingerLewak, one of the largest accounting and advisory firms on the West Coast, working on the Specialty Tax Advisory team. Advised on complex partnership structures, multi-entity operations, and high-level tax issues across jurisdictions.',
    color: 'hot-pink',
    rotate: 0,
  },
  {
    firm: 'Deloitte M&A Tax Group',
    description: 'Recruited to Deloitte\'s Mergers & Acquisitions Tax Group in Los Angeles, advising private equity firms and corporate buyers on transactions valued in the hundreds of millions. Involved tax due diligence, risk identification, and structural planning.',
    color: 'electric',
    rotate: 0,
  },
  {
    firm: 'PwC Silicon Valley',
    description: 'Focused on tech transactions, IP-heavy acquisitions, and venture-backed deals — working closely with investors, founders, and legal teams on cross-border structuring and multi-jurisdictional tax strategy.',
    color: 'cyber-violet',
    rotate: 0,
  },
  {
    firm: 'Litigation Practice',
    description: 'After Big Four tenure, transitioned into litigation, managing over 150 active cases at a high-volume trial firm. Work included hearings, settlement negotiations, and procedural motion practice.',
    color: 'hot-pink',
    rotate: 0,
  },
]

const colorAccent: Record<string, { badge: string; shadow: string }> = {
  'hot-pink': { badge: 'text-hot-pink bg-hot-pink/10 border-hot-pink/30', shadow: '#00FF41' },
  'electric': { badge: 'text-electric bg-electric/10 border-electric/30', shadow: '#00F5FF' },
  'cyber-violet': { badge: 'text-cyber-violet bg-cyber-violet/10 border-cyber-violet/30', shadow: '#BF5AF2' },
}

export function AboutDelina() {
  return (
    <section id="about" className="relative py-32 md:py-40 overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-12 right-12 w-28 h-28 border-t-2 border-r-2 border-electric/15 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-12 left-12 w-28 h-28 border-b-2 border-l-2 border-hot-pink/15 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Header + Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Text — offset in grid */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <SectionTag text="ABOUT DELINA" />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-display-lg font-bold mt-8 mb-2 text-cream italic">
                Delina Yasmeh
              </h2>
              <p className="font-pixel text-[10px] tracking-[0.15em] text-void-400 uppercase mb-8">
                ATTORNEY // TAX STRATEGIST // FOUNDER
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-void-300 text-lg leading-relaxed mb-6 font-body">
                Delina Yasmeh is the founder and principal attorney of Delina Yasmeh Law, a boutique legal practice delivering high-level legal and tax counsel to founders, operators, and entrepreneurs across industries and jurisdictions.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="editorial-divider my-8" />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-void-400 leading-relaxed font-body">
                She holds a Juris Doctor (JD), a Master of Laws in Taxation (LL.M.) — the most advanced academic credential in U.S. tax law — and a degree in accounting. This multidisciplinary background allows her to advise with precision across legal, tax, and financial dimensions.
              </p>
            </ScrollReveal>
          </div>

          {/* Photo — overlapping editorial style */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.3} direction="right">
              <motion.div
                className="relative aspect-[3/4] rounded-retro overflow-hidden border-2 border-void-700"
                whileHover={{ scale: 1.01 }}
                style={{ boxShadow: '6px 6px 0px #00FF41' }}
              >
                <Image
                  src="/delina-yasmeh-attorney.png"
                  alt="Delina Yasmeh – Attorney, Tax Strategist, and Founder of Delina Yasmeh Law"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={85}
                />
                {/* Moody gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-void-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating sticker on photo */}
                <div
                  className="sticker absolute bottom-4 right-4 text-hot-pink border-hot-pink/40 bg-hot-pink/10"
                  style={{ '--sticker-rotate': '-4deg' } as React.CSSProperties}
                >
                  EST. 2024
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>

        {/* Career Timeline — anti-grid staggered cards */}
        <div>
          <ScrollReveal>
            <h3 className="font-pixel text-sm text-hot-pink uppercase tracking-wider mb-10">
              CAREER BACKGROUND
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {career.map((item, i) => (
              <ScrollReveal key={item.firm} delay={0.1 + i * 0.1}>
                <motion.div
                  className="glass-card p-8 h-full border-2 border-void-700"
                  whileHover={{ scale: 1.02 }}
                  style={{ boxShadow: `3px 3px 0px ${colorAccent[item.color].shadow}` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`font-pixel text-[10px] tracking-[0.2em] px-3 py-1 rounded-retro border ${colorAccent[item.color].badge}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className="font-pixel text-sm font-bold text-cream uppercase">
                      {item.firm}
                    </h4>
                  </div>
                  <p className="text-void-400 text-sm leading-relaxed font-body">
                    {item.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Current Practice */}
        <ScrollReveal delay={0.3}>
          <motion.div
            className="mt-20 glass-card p-8 md:p-12 max-w-3xl border-2 border-void-700"
            whileHover={{ scale: 1.01 }}
            style={{ boxShadow: '5px 5px 0px #000' }}
          >
            <h3 className="font-pixel text-sm text-hot-pink uppercase tracking-wider mb-4">
              DELINA YASMEH LAW
            </h3>
            <p className="text-void-300 leading-relaxed font-body">
              She founded Delina Yasmeh Law to offer a rare combination of legal, tax, financial, and litigation expertise. Her practice now supports early-stage founders, multi-entity operators, and high-growth businesses with tailored legal architecture — including entity structuring, tax strategy, contract drafting, and long-range advisory.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
