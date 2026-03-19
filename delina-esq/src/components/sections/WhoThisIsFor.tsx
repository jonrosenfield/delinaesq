'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const AUDIENCE = [
  {
    label: 'THE CREATOR',
    body: 'Six figures from brand deals and zero legal infrastructure. You\u2019ve been running a business without the structure to protect it.',
  },
  {
    label: 'THE FOUNDER',
    body: 'Building something real. The cap table is set up wrong and you don\u2019t know it yet.',
  },
  {
    label: 'THE ENTREPRENEUR',
    body: 'Two LLCs, one S-Corp, and a CPA who says everything\u2019s fine. It usually isn\u2019t.',
  },
  {
    label: 'THE HIGH EARNER',
    body: 'In the top 1% for California income. Your tax strategy should reflect that.',
  },
  {
    label: 'THE COUPLE',
    body: 'Building businesses together or protecting what you built before. Either way, the agreement matters.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export function WhoThisIsFor() {
  return (
    <section id="about" className="bg-parchment py-24 px-6">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[60fr_40fr] gap-16 items-start">
        {/* Left Column */}
        <div>
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-mist block mb-6">
            FOR THE ONES WHO&apos;VE OUTGROWN GENERIC ADVICE
          </span>
          <h2
            className="font-display font-light text-ink mb-12 leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
          >
            Delina works with people<br />who&apos;ve already done the work.
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {AUDIENCE.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="border-t border-steel/30 pt-5 pb-5"
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist/70 block mb-1">
                  {item.label}
                </span>
                <p className="font-sans text-[14px] text-ink/70 leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column — Delina's photo */}
        <div className="sticky top-24 aspect-[3/4] relative overflow-hidden">
          <Image
            src="/delina-yasmeh-attorney.png"
            alt="Delina Yasmeh, Esq. — California Attorney"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
          {/* Subtle gradient at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-parchment/30 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
