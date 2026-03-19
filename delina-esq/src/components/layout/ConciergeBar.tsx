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
    <div className="bg-ivory border-b border-steel/25 px-6 lg:px-12 py-5">
      <div className="max-w-[1200px] mx-auto">

        {/* Search row */}
        <form onSubmit={handleSubmit} className="flex items-center gap-5">
          <div className="flex-1 relative pb-2">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="What are you building or protecting?"
              className="bg-transparent w-full outline-none text-ink placeholder:text-ink/35 font-display italic tracking-[-0.01em] transition-all duration-200"
              style={{ fontSize: 'clamp(1rem, 1.4vw, 1.2rem)' }}
            />
            {/* Animated underline */}
            <div className="absolute bottom-0 left-0 right-0 h-px">
              <div className="h-full bg-ink/15" />
              <div
                className={`absolute inset-0 bg-ink/50 transition-transform duration-300 origin-left ${focused ? 'scale-x-100' : 'scale-x-0'}`}
              />
            </div>
          </div>

          <button
            type="submit"
            aria-label="Search"
            className="font-mono text-[13px] text-ink/40 hover:text-ink transition-colors flex-shrink-0 pb-2"
          >
            →
          </button>
        </form>

        {feedback && (
          <p className="mt-1.5 font-mono text-[10px] text-ink/50 uppercase tracking-[0.15em]">
            {feedback}
          </p>
        )}

        {/* Chips — text links with dot separators */}
        <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5 mt-3.5">
          {CHIPS.map((chip, i) => (
            <span key={chip.href} className="flex items-center">
              <button
                onClick={() => router.push(chip.href)}
                className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/40 hover:text-ink transition-colors py-0.5"
              >
                {chip.label}
              </button>
              {i < CHIPS.length - 1 && (
                <span className="font-mono text-[9px] text-ink/20 mx-2.5 select-none">·</span>
              )}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}
