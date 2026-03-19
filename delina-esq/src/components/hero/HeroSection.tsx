'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

const STATS = [
  { value: '127+', label: 'Clients Structured' },
  { value: '$2M+', label: 'Tax Liability Saved' },
  { value: '8', label: 'Practice Areas' },
]

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-52px)] bg-ink flex flex-col relative overflow-hidden">
      {/* Main hero content — vertically centered */}
      <motion.div
        className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.span
          variants={itemVariants}
          className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist mb-10"
        >
          California Legal Strategy · Est. 2019
        </motion.span>

        {/* Headline — full editorial width */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-white max-w-[1000px] mx-auto"
          style={{ fontSize: 'clamp(4.5rem, 11vw, 10.5rem)', lineHeight: 0.88, letterSpacing: '-0.04em' }}
        >
          <span className="block italic font-light">Protect</span>
          <span className="block font-semibold">What You&apos;ve Built.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="font-sans font-light text-[17px] text-silver max-w-[500px] mt-8 leading-relaxed"
        >
          Delina Yasmeh is a California attorney who works exclusively with entrepreneurs,
          creators, and high-net-worth individuals who&apos;ve outgrown generic legal advice.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 mt-9 flex-wrap"
        >
          <Link
            href="/book"
            className="btn-primary text-[10px] font-mono uppercase tracking-[0.2em] py-4 px-8"
          >
            Book Your Intake →
          </Link>
          <a
            href="#services"
            className="btn-ghost text-[10px] font-mono uppercase tracking-[0.2em] py-4 px-8"
          >
            How It Works
          </a>
        </motion.div>

        {/* Proof Chips */}
        <motion.div
          variants={itemVariants}
          className="flex gap-3 mt-6 justify-center flex-wrap"
        >
          {['California Licensed', 'JD + LL.M. Taxation', 'S-Corp & LLC Strategy'].map((chip) => (
            <span
              key={chip}
              className="text-[9px] font-mono uppercase tracking-[0.2em] text-mist border border-steel/50 px-3 py-1.5"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Stats strip — pinned to bottom of hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="border-t border-steel/40 grid grid-cols-3"
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`py-6 px-8 text-center ${i < STATS.length - 1 ? 'border-r border-steel/40' : ''}`}
          >
            <span
              className="font-display text-white font-light block"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1 }}
            >
              {stat.value}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-mist block mt-1.5">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
