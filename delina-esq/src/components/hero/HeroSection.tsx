'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const ParticleField = dynamic(
  () => import('@/components/three/ParticleField').then(mod => ({ default: mod.ParticleField })),
  { ssr: false }
)

const stickers = [
  { text: 'TAX EXPERT', color: 'hot-pink', rotate: '-3deg', top: '12%', right: '8%' },
  { text: 'EST. 2024', color: 'electric', rotate: '2deg', bottom: '28%', right: '5%' },
  { text: 'BIG FOUR', color: 'cyber-violet', rotate: '-1.5deg', top: '35%', left: '3%' },
  { text: 'JD + LL.M.', color: 'slime', rotate: '3deg', bottom: '18%', left: '6%' },
]

const tagline = ['CONTRACT', 'TAX STRATEGY', 'ENTITY FORMATION', 'M&A']

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden dot-pattern">
      {/* Three.js Background */}
      <ParticleField />

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-950/30 via-transparent to-void-950 z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-void-950 to-transparent z-[1]" />

      {/* Floating Y2K stickers */}
      {stickers.map((s, i) => (
        <motion.div
          key={s.text}
          className="absolute z-10 hidden lg:block"
          style={{
            top: s.top, bottom: s.bottom, left: s.left, right: s.right,
            rotate: s.rotate,
          } as any}
          initial={{ opacity: 0, scale: 0.7, rotate: parseInt(s.rotate) * 2 }}
          animate={{ opacity: 1, scale: 1, rotate: parseInt(s.rotate) }}
          transition={{ duration: 0.6, delay: 1.2 + i * 0.15, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <span
            className={`sticker text-${s.color} border-${s.color}/50 bg-${s.color}/[0.06]`}
            style={{ ['--sticker-rotate' as any]: s.rotate }}
          >
            {s.text}
          </span>
        </motion.div>
      ))}

      {/* Content — ASYMMETRIC: pushed left */}
      <div className="relative z-10 section-container pb-32 pt-40 lg:pb-40 lg:pt-48">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.a
            href="#contact"
            className="tag-label inline-block mb-8 cursor-pointer hover:shadow-glow-pink transition-shadow duration-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          >
            Make an Appointment
          </motion.a>

          {/* Headline — mixed fonts, asymmetric */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="mb-2">
              <span className="block font-serif text-hero text-void-100 italic">
                Tax Attorney
              </span>
              <span className="block font-serif text-hero text-void-100 italic -mt-2 md:-mt-4">
                for{' '}
                <span className="font-pixel not-italic text-hot-pink inline-block" style={{ textShadow: '0 0 30px rgba(255,0,110,0.5), 0 0 60px rgba(255,0,110,0.2)' }}>
                  Businesses
                </span>
              </span>
              <span className="block font-serif text-display-lg text-void-300 italic mt-1 md:ml-2">
                and Individuals
              </span>
            </h1>
          </motion.div>

          {/* Tagline Pills — with retro separators */}
          <motion.div
            className="flex flex-wrap items-center gap-3 mb-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {tagline.map((tag, i) => (
              <motion.span
                key={tag}
                className="font-pixel text-[9px] tracking-[0.2em] text-void-500"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              >
                {i > 0 && <span className="text-hot-pink mr-3">//</span>}
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Subline — editorial serif */}
          <motion.p
            className="font-serif text-xl md:text-2xl text-void-400 italic max-w-lg mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Lawyers don&apos;t know tax. Accountants don&apos;t know law.
            <span className="text-void-200"> We know both.</span>
          </motion.p>

          {/* CTA Buttons — Y2K beveled, chunky */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <a href="tel:818-888-6060" className="btn-bevel btn-bevel-pink">
              &#9743; Call Now
            </a>
            <a href="mailto:info@delina.esq" className="btn-bevel btn-bevel-cyan">
              &#9993; Email Us
            </a>
            <a href="#contact" className="btn-bevel btn-bevel-white">
              Schedule Consultation
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator — retro */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-pixel text-[8px] tracking-[0.4em] uppercase text-void-600">
          Scroll
        </span>
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-hot-pink/60 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Decorative corner borders */}
      <div className="absolute top-24 left-6 w-20 h-20 border-l border-t border-hot-pink/10 z-[2] hidden lg:block" />
      <div className="absolute bottom-24 right-6 w-20 h-20 border-r border-b border-electric/10 z-[2] hidden lg:block" />
    </section>
  )
}
