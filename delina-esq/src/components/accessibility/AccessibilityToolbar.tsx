'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAccessibility } from './useAccessibility'

const textSizeLabels = ['Normal', 'Large', 'X-Large']

export function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { state, isLoaded, toggleSetting, cycleTextSize, resetAll } = useAccessibility()

  if (!isLoaded) return null

  const toggles: { label: string; key: string; active: boolean; action: () => void }[] = [
    { label: `Text Size: ${textSizeLabels[state.textSize]}`, key: 'textSize', active: state.textSize > 0, action: cycleTextSize },
    { label: 'Grayscale', key: 'grayscale', active: state.grayscale, action: () => toggleSetting('grayscale') },
    { label: 'High Contrast', key: 'highContrast', active: state.highContrast, action: () => toggleSetting('highContrast') },
    { label: 'Negative Contrast', key: 'negativeContrast', active: state.negativeContrast, action: () => toggleSetting('negativeContrast') },
    { label: 'Light Background', key: 'lightBackground', active: state.lightBackground, action: () => toggleSetting('lightBackground') },
    { label: 'Underline Links', key: 'underlineLinks', active: state.underlineLinks, action: () => toggleSetting('underlineLinks') },
    { label: 'Readable Font', key: 'readableFont', active: state.readableFont, action: () => toggleSetting('readableFont') },
  ]

  const hasActiveSettings = state.textSize > 0 || state.grayscale || state.highContrast || state.negativeContrast || state.lightBackground || state.underlineLinks || state.readableFont

  return (
    <>
      {/* Toggle Button — fixed bottom-right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9997] w-12 h-12 rounded-retro border-2 border-hot-pink bg-void-950 flex items-center justify-center transition-all duration-200 hover:shadow-glow-pink focus:outline-none focus:ring-2 focus:ring-hot-pink focus:ring-offset-2 focus:ring-offset-void-950"
        style={{ boxShadow: '2px 2px 0px #00FF41' }}
        aria-label={isOpen ? 'Close accessibility toolbar' : 'Open accessibility toolbar'}
        aria-expanded={isOpen}
      >
        <span className="text-hot-pink text-lg" aria-hidden="true">
          {isOpen ? '\u2715' : '\u267F'}
        </span>
        {hasActiveSettings && !isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-hot-pink" />
        )}
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
            className="fixed bottom-20 right-6 z-[9997] w-72 glass-card border-2 border-void-700 p-5"
            style={{ boxShadow: '4px 4px 0px #00FF41' }}
            role="dialog"
            aria-label="Accessibility settings"
          >
            <h3 className="font-pixel text-[10px] tracking-[0.2em] uppercase text-hot-pink mb-4">
              ACCESSIBILITY
            </h3>

            <div className="space-y-2">
              {toggles.map((toggle) => (
                <button
                  key={toggle.key}
                  onClick={toggle.action}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-retro border text-left transition-all duration-200 font-body text-xs ${
                    toggle.active
                      ? 'border-hot-pink/50 bg-hot-pink/10 text-cream'
                      : 'border-void-700 bg-void-900/50 text-void-400 hover:border-void-500 hover:text-void-300'
                  }`}
                  aria-pressed={toggle.active}
                >
                  <span>{toggle.label}</span>
                  <span
                    className={`font-pixel text-[8px] ${toggle.active ? 'text-hot-pink' : 'text-void-600'}`}
                    aria-hidden="true"
                  >
                    {toggle.active ? 'ON' : 'OFF'}
                  </span>
                </button>
              ))}
            </div>

            {hasActiveSettings && (
              <button
                onClick={resetAll}
                className="mt-4 w-full font-pixel text-[9px] tracking-[0.15em] uppercase text-void-500 hover:text-cream py-2 border border-void-700 rounded-retro hover:border-void-500 transition-colors"
              >
                RESET ALL
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
