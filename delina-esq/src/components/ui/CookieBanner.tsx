'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'delina_cookie_consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-steel/30 bg-ink/95 backdrop-blur-sm"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">

        <p className="font-sans text-[13px] text-silver/80 leading-relaxed flex-1">
          This site uses cookies to understand how visitors interact with it.
          No personal data is sold.{' '}
          <Link
            href="/privacy"
            className="underline underline-offset-2 text-silver hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </p>

        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            onClick={decline}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-mist hover:text-silver transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="font-mono text-[11px] uppercase tracking-[0.2em] px-6 py-2.5 border border-white/25 text-white hover:bg-white hover:text-ink transition-all duration-200"
          >
            Accept
          </button>
        </div>

      </div>
    </div>
  )
}
