'use client'

import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    title: 'Book Your Intake',
    body: 'Sixty minutes. Your situation, your strategy. Not a free call, a focused session with an attorney who has specific opinions about your structure.',
  },
  {
    number: '02',
    title: 'Receive a Legal Roadmap',
    body: 'A written plan built for your entity, your income, and your actual risk exposure. Not a template. Not a checklist.',
  },
  {
    number: '03',
    title: 'Execute with Precision',
    body: 'Formation documents, operating agreements, contracts, and filings, reviewed and structured for enforceability.',
  },
  {
    number: '04',
    title: 'Retain Strategic Access',
    body: "The questions don\u2019t stop after formation. Retained clients get Delina when the decisions actually need to be made.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="bg-ink py-24 px-6 scroll-mt-[52px]">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto mb-16">
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-mist block mb-4">
          THE PROCESS
        </span>
        <h2
          className="font-display font-light text-white leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)' }}
        >
          What working with Delina looks like.
        </h2>
      </div>

      {/* Steps */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-steel">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="bg-ink px-8 py-12 relative"
          >
            {/* Background number */}
            <span
              className="absolute top-4 right-6 font-mono leading-none text-white/[0.04] select-none pointer-events-none"
              style={{ fontSize: '6rem' }}
              aria-hidden="true"
            >
              {step.number}
            </span>

            {/* Step number */}
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-mist/60 block">
              {step.number}
            </span>

            {/* Title */}
            <h3
              className="font-sans font-medium text-white mt-3 mb-3 leading-tight"
              style={{ fontSize: '1.6rem' }}
            >
              {step.title}
            </h3>

            {/* Body */}
            <p className="font-sans text-[16px] text-silver leading-relaxed">
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
