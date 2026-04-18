'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const INTENT_MAP: [RegExp, string][] = [
  [/llc|structure|entity|formation/i, '/business-structure-attorney'],
  [/prenup|marriage|marital/i, '/prenuptial-agreement-attorney'],
  [/postnup/i, '/postnuptial-agreement-lawyer'],
  [/creator|influencer|brand deal|content/i, '/creator-attorney'],
  [/s.?corp|s corp/i, '/s-corp-attorney'],
  [/tax|irs/i, '/tax-attorney-small-business'],
  [/startup|founder|raise|funding|investor/i, '/startup-attorney-california'],
  [/contract|agreement|deal|review/i, '/business-contract-attorney'],
  [/trademark/i, '/trademark-attorney'],
  [/nonprofit|501/i, '/nonprofit-attorney'],
  [/ecommerce|e.?commerce|shopify|online store/i, '/ecommerce-business-attorney'],
]

const CHIPS = [
  { label: 'LLC Formation', href: '/business-structure-attorney' },
  { label: 'Prenuptial Agreement', href: '/prenuptial-agreement-attorney' },
  { label: 'Tax Strategy', href: '/tax-attorney-small-business' },
  { label: 'Creator Business', href: '/creator-attorney' },
  { label: 'S-Corp Election', href: '/s-corp-attorney' },
  { label: 'Contract Review', href: '/business-contract-attorney' },
]

export function ConciergeBar() {
  const router = useRouter()
  const [value, setValue] = useState('')
  const [focused, setFocused] = useState(false)
  const [feedback, setFeedback] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!value.trim()) return

    for (const [pattern, path] of INTENT_MAP) {
      if (pattern.test(value)) {
        router.push(path)
        return
      }
    }

    setFeedback('Finding the right page for you →')
    setTimeout(() => router.push('/services'), 1200)
  }

  return (
    <div className="bg-ink border-t border-white/8 border-b border-white/5 px-6 lg:px-12 py-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Search row */}
        <form onSubmit={handleSubmit} className="flex items-center gap-5 group cursor-text" onClick={(e) => { if (e.target === e.currentTarget) e.currentTarget.querySelector('input')?.focus() }}>
          <div className="flex-1 relative pb-2">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Tell us what you need help with."
              className="bg-transparent w-full outline-none text-white placeholder:text-white/55 group-hover:placeholder:text-white/75 font-display italic tracking-[-0.01em] transition-all duration-300"
              style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)' }}
            />
            {/* Animated underline — partial on hover, full on focus */}
            <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
              <div className="h-full bg-white/10" />
              <div
                className={`absolute inset-0 bg-white/40 transition-transform duration-500 origin-left ${focused ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-[0.4]'}`}
              />
            </div>
          </div>

          <button
            type="submit"
            aria-label="Search"
            className="font-mono text-[16px] text-white/55 group-hover:text-white/80 hover:text-white transition-colors flex-shrink-0 pb-2"
          >
            →
          </button>
        </form>

        {feedback && (
          <p className="mt-1.5 font-mono text-[13px] text-white/40 uppercase tracking-[0.15em]">
            {feedback}
          </p>
        )}

        {/* Chips, text links with dot separators */}
        <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5 mt-3.5">
          {CHIPS.map((chip, i) => (
            <span key={chip.href} className="flex items-center">
              <button
                onClick={() => router.push(chip.href)}
                className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/50 hover:text-white transition-colors py-0.5"
              >
                {chip.label}
              </button>
              {i < CHIPS.length - 1 && (
                <span className="font-mono text-[12px] text-white/25 mx-2.5 select-none">·</span>
              )}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}
