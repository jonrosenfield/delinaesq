'use client'

import { useState } from 'react'
import Link from 'next/link'
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
  { label: 'Trademark Law', href: '/trademark-attorney' },
  { label: 'Tax Strategy', href: '/tax-attorney-small-business' },
  { label: 'Creator Business', href: '/creator-attorney' },
  { label: 'S-Corp Election', href: '/s-corp-attorney' },
  { label: 'Contract Review', href: '/business-contract-attorney' },
]

const TICKER = [
  { label: 'Prenuptial Agreements', href: '/prenuptial-agreement-attorney' },
  { label: 'LLC Formation', href: '/business-structure-attorney' },
  { label: 'S-Corp Strategy', href: '/s-corp-attorney' },
  { label: 'Creator Counsel', href: '/creator-attorney' },
  { label: 'Trademark Protection', href: '/trademark-attorney' },
  { label: 'Contract Advisory', href: '/business-contract-attorney' },
  { label: 'Tax Optimization', href: '/tax-attorney-small-business' },
  { label: 'Startup Structuring', href: '/startup-attorney-california' },
  { label: 'Nonprofit Formation', href: '/nonprofit-attorney' },
  { label: 'E-Commerce Law', href: '/ecommerce-business-attorney' },
]

const DOUBLED = [...TICKER, ...TICKER]

export function HeroSection() {
  const [searchValue, setSearchValue] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [tickerPaused, setTickerPaused] = useState(false)
  const router = useRouter()

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!searchValue.trim()) return
    for (const [pattern, path] of INTENT_MAP) {
      if (pattern.test(searchValue)) {
        router.push(path)
        return
      }
    }
    setFeedback('Finding the right page for you →')
    setTimeout(() => router.push('/business-structure-attorney'), 1200)
  }

  return (
    <section className="min-h-[calc(100vh-52px)] md:h-[calc(100vh-52px)] flex flex-col relative overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/delina-hero-test.mp4"
      />

      {/* Dark blur overlay, always on */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(10,10,10,0.65)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
      />

      {/* Main hero content — pb clears the pinned ticker */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-8 md:pt-6" style={{ paddingBottom: '72px' }}>
        {/* Eyebrow */}
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.25em] text-white mb-4 md:mb-6">
          Legal Strategy · Est. 2019
        </span>

        {/* Headline */}
        <h1
          className="font-display text-white max-w-[1100px] mx-auto"
          style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)',
            lineHeight: 1.0,
            letterSpacing: '0.03em',
          }}
        >
          <span className="block font-medium uppercase">A Lawyer for</span>
          <span className="block font-medium uppercase">Every Stage of</span>
          <span className="block font-medium uppercase">Your Business.</span>
        </h1>

        {/* Concierge Search */}
        <div className="w-full max-w-[560px] mt-5 md:mt-7">
          <form onSubmit={handleSearchSubmit} className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80"
              width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
              placeholder="Tell us what you need help with."
              className={`w-full border-2 text-white placeholder:text-white/70 font-sans text-[15px] md:text-[16px] pl-11 pr-12 py-3.5 md:py-4 outline-none transition-all duration-300 ${searchFocused ? '' : 'search-pulse'}`}
              style={{
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                borderColor: searchFocused ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.75)',
                boxShadow: searchFocused
                  ? '0 0 0 3px rgba(255,255,255,0.15), 0 0 50px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                  : 'inset 0 1px 0 rgba(255,255,255,0.15)',
              }}
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors font-mono text-lg"
              aria-label="Search"
            >
              →
            </button>
          </form>

          {feedback && (
            <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.15em] text-white/60 text-left pl-1">
              {feedback}
            </p>
          )}

          {/* Quick-route grid */}
          <div className="grid grid-cols-3 gap-px mt-3 md:mt-4 bg-white/10">
            {CHIPS.map((chip) => (
              <button
                key={chip.href}
                onClick={() => router.push(chip.href)}
                className="bg-black/30 hover:bg-white/15 text-white/60 hover:text-white font-mono text-[9px] md:text-[10px] uppercase tracking-[0.10em] md:tracking-[0.12em] px-2 md:px-3 py-2.5 md:py-3 text-left transition-all duration-200 flex items-center justify-between gap-1 md:gap-2 group"
                style={{ backdropFilter: 'blur(8px)' }}
              >
                <span>{chip.label}</span>
                <span className="text-white/30 group-hover:text-white/70 transition-colors flex-shrink-0">→</span>
              </button>
            ))}
          </div>
        </div>

        {/* Subheadline, hidden on small screens to preserve fit */}
        <p className="hidden sm:block font-sans font-light text-[17px] md:text-[19px] text-white max-w-[500px] mt-4 md:mt-6 leading-relaxed">
          Delina Yasmeh is an attorney who works exclusively with entrepreneurs,
          creators, and high-net-worth individuals who&apos;ve outgrown generic legal advice.
        </p>

        {/* CTA Row */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mt-4 md:mt-7 flex-wrap">
          <Link
            href="/book"
            className="btn-primary text-[12px] md:text-[13px] font-mono uppercase tracking-[0.2em] py-3.5 md:py-4 px-6 md:px-8"
          >
            Get Started →
          </Link>
          <a
            href="#services"
            className="btn-ghost text-[12px] md:text-[13px] font-mono uppercase tracking-[0.2em] py-3.5 md:py-4 px-6 md:px-8"
          >
            How It Works
          </a>
        </div>

      </div>

      {/* Scrolling ticker — absolutely pinned to bottom of hero */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/15 overflow-x-auto lg:overflow-hidden no-scrollbar"
        style={{ backgroundColor: 'rgba(10,10,10,0.7)' }}
        onMouseEnter={() => setTickerPaused(true)}
        onMouseLeave={() => setTickerPaused(false)}
      >
        {/* Right fade-edge on mobile signals more content */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none lg:hidden z-10"
          style={{ background: 'linear-gradient(to left, rgba(10,10,10,0.9), transparent)' }}
        />
        <div
          className="flex py-3.5"
          style={{
            width: 'max-content',
            animation: 'marquee 32s linear infinite',
            animationPlayState: tickerPaused ? 'paused' : 'running',
          }}
        >
          {DOUBLED.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap mx-8 flex items-center gap-8"
            >
              {item.label}
              <span className="text-white/20">·</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
