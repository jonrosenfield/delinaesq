'use client'

import { useState, useEffect, useCallback } from 'react'

export interface AccessibilityState {
  textSize: 0 | 1 | 2  // 0=normal, 1=large, 2=x-large
  grayscale: boolean
  highContrast: boolean
  negativeContrast: boolean
  lightBackground: boolean
  underlineLinks: boolean
  readableFont: boolean
}

const defaultState: AccessibilityState = {
  textSize: 0,
  grayscale: false,
  highContrast: false,
  negativeContrast: false,
  lightBackground: false,
  underlineLinks: false,
  readableFont: false,
}

const STORAGE_KEY = 'delina-a11y-settings'

const classMap: Record<string, string> = {
  'textSize-1': 'a11y-text-large',
  'textSize-2': 'a11y-text-xlarge',
  grayscale: 'a11y-grayscale',
  highContrast: 'a11y-high-contrast',
  negativeContrast: 'a11y-negative-contrast',
  lightBackground: 'a11y-light-bg',
  underlineLinks: 'a11y-underline-links',
  readableFont: 'a11y-readable-font',
}

export function useAccessibility() {
  const [state, setState] = useState<AccessibilityState>(defaultState)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setState({ ...defaultState, ...parsed })
      }
    } catch {
      // ignore
    }
    setIsLoaded(true)
  }, [])

  // Apply classes to <html> and persist
  useEffect(() => {
    if (!isLoaded) return

    const html = document.documentElement

    // Remove all a11y classes
    Object.values(classMap).forEach((cls) => html.classList.remove(cls))

    // Apply active classes
    if (state.textSize === 1) html.classList.add(classMap['textSize-1'])
    if (state.textSize === 2) html.classList.add(classMap['textSize-2'])
    if (state.grayscale) html.classList.add(classMap.grayscale)
    if (state.highContrast) html.classList.add(classMap.highContrast)
    if (state.negativeContrast) html.classList.add(classMap.negativeContrast)
    if (state.lightBackground) html.classList.add(classMap.lightBackground)
    if (state.underlineLinks) html.classList.add(classMap.underlineLinks)
    if (state.readableFont) html.classList.add(classMap.readableFont)

    // Persist
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // ignore
    }
  }, [state, isLoaded])

  const toggleSetting = useCallback((key: keyof Omit<AccessibilityState, 'textSize'>) => {
    setState((prev) => ({ ...prev, [key]: !prev[key] }))
  }, [])

  const cycleTextSize = useCallback(() => {
    setState((prev) => ({
      ...prev,
      textSize: ((prev.textSize + 1) % 3) as 0 | 1 | 2,
    }))
  }, [])

  const resetAll = useCallback(() => {
    setState(defaultState)
  }, [])

  return {
    state,
    isLoaded,
    toggleSetting,
    cycleTextSize,
    resetAll,
  }
}
