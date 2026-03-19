import { ReactNode } from 'react'

interface LandingSectionProps {
  eyebrow?: string
  headline?: string
  children: ReactNode
  dark?: boolean
  className?: string
}

export function LandingSection({ eyebrow, headline, children, dark = false, className = '' }: LandingSectionProps) {
  return (
    <section className={`${dark ? 'bg-ink' : 'bg-parchment'} py-20 px-6 ${className}`}>
      <div className="max-w-[1000px] mx-auto">
        {eyebrow && (
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-mist block mb-4">
            {eyebrow}
          </span>
        )}
        {headline && (
          <h2
            className={`font-display font-light leading-[1.05] tracking-[-0.02em] mb-10 ${dark ? 'text-white' : 'text-ink'}`}
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
          >
            {headline}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
