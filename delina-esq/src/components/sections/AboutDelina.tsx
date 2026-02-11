'use client'

import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionTag } from '@/components/ui/SectionTag'
import { GlassCard } from '@/components/spatial/GlassCard'
import Image from 'next/image'  // ← Added this import

const career = [
  {
    firm: 'SingerLewak',
    description: 'Began her career at SingerLewak, one of the largest accounting and advisory firms on the West Coast, working on the Specialty Tax Advisory team. Advised on complex partnership structures, multi-entity operations, and high-level tax issues across jurisdictions.',
    color: 'neon-pink',
  },
  {
    firm: 'Deloitte M&A Tax Group',
    description: 'Recruited to Deloitte\'s Mergers & Acquisitions Tax Group in Los Angeles, advising private equity firms and corporate buyers on transactions valued in the hundreds of millions. Involved tax due diligence, risk identification, and structural planning.',
    color: 'neon-blue',
  },
  {
    firm: 'PwC Silicon Valley',
    description: 'Focused on tech transactions, IP-heavy acquisitions, and venture-backed deals — working closely with investors, founders, and legal teams on cross-border structuring and multi-jurisdictional tax strategy.',
    color: 'neon-violet',
  },
  {
    firm: 'Litigation Practice',
    description: 'After Big Four tenure, transitioned into litigation, managing over 150 active cases at a high-volume trial firm. Work included hearings, settlement negotiations, and procedural motion practice.',
    color: 'neon-pink',
  },
]

const colorAccent: Record<string, string> = {
  'neon-pink': 'text-neon-pink bg-neon-pink/10 border-neon-pink/20',
  'neon-blue': 'text-electric-blue bg-electric-blue/10 border-electric-blue/20',
  'neon-violet': 'text-cyber-violet bg-cyber-violet/10 border-cyber-violet/20',
}

export function AboutDelina() {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <SectionTag text="ABOUT DELINA" />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-display text-display-lg font-bold mt-8 mb-4">
                <span className="gradient-text">Delina Yasmeh</span>
              </h2>
              <p className="font-mono text-sm tracking-[0.1em] text-slate-400 italic mb-8">
                Attorney | Tax Strategist | Founder
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Delina Yasmeh is the founder and principal attorney of Delina Yasmeh Law, a boutique legal practice delivering high-level legal and tax counsel to founders, operators, and entrepreneurs across industries and jurisdictions.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="h-[1px] bg-gradient-to-r from-neon-pink/50 to-transparent my-8" />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-slate-400 leading-relaxed">
                She holds a Juris Doctor (JD), a Master of Laws in Taxation (LL.M.) — the most advanced academic credential in U.S. tax law — and a degree in accounting. This multidisciplinary background allows her to advise with precision across legal, tax, and financial dimensions.
              </p>
            </ScrollReveal>
          </div>

          {/* Photo – Updated with real image */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.3} direction="right">
              <div className="relative aspect-[3/4] rounded-glass overflow-hidden glass-card">
                <Image
                  src="/delina-yasmeh-attorney.png"  // Path from public/ folder
                  alt="Delina Yasmeh – Attorney, Tax Strategist, and Founder of Delina Yasmeh Law"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]" // subtle hover for engagement
                  priority // Loads faster since it's above-the-fold
                  sizes="(max-width: 1024px) 100vw, 40vw" // Helps with responsive quality
                  quality={85} // Good balance of quality/size
                />

                {/* Keep moody gradient overlay for cyber aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                {/* Optional: remove the line above if you prefer no overlay / clean photo look */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 via-slate-800 to-cyber-violet/5 pointer-events-none" /> // extra subtle tint if desired */}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Career Timeline */}
        <div>
          <ScrollReveal>
            <h3 className="font-display text-display-sm font-bold text-sage-100 mb-10">
              Career Background
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {career.map((item, i) => (
              <ScrollReveal key={item.firm} delay={0.1 + i * 0.1}>
                <GlassCard className="p-8 h-full" glowColor={item.color}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`font-mono text-[10px] tracking-[0.2em] px-3 py-1 rounded-pill border ${colorAccent[item.color]}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className="font-display text-lg font-bold text-sage-100">
                      {item.firm}
                    </h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Current Practice */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 glass-card p-8 md:p-12 max-w-3xl">
            <h3 className="font-display text-xl font-bold text-sage-100 mb-4">
              Delina Yasmeh Law
            </h3>
            <p className="text-slate-300 leading-relaxed">
              She founded Delina Yasmeh Law to offer a rare combination of legal, tax, financial, and litigation expertise. Her practice now supports early-stage founders, multi-entity operators, and high-growth businesses with tailored legal architecture — including entity structuring, tax strategy, contract drafting, and long-range advisory.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}