'use client'

import { useState, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { motion } from 'framer-motion'

interface GlowInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

interface GlowTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

export function GlowInput({ label, className = '', ...props }: GlowInputProps) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  return (
    <div className="relative group">
      <input
        {...props}
        className={`w-full bg-transparent border-b-2 border-void-700 px-1 py-4 pt-6 text-void-100 font-body text-base outline-none transition-colors duration-300 focus:border-hot-pink peer ${className}`}
        onFocus={(e) => { setFocused(true); props.onFocus?.(e) }}
        onBlur={(e) => { setFocused(false); setHasValue(!!e.target.value); props.onBlur?.(e) }}
        onChange={(e) => { setHasValue(!!e.target.value); props.onChange?.(e) }}
      />
      <label
        className={`absolute left-1 font-pixel text-[9px] tracking-[0.2em] uppercase transition-all duration-300 pointer-events-none ${
          focused || hasValue
            ? 'top-0 text-hot-pink'
            : 'top-5 text-void-600'
        }`}
      >
        {label}
      </label>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        initial={{ width: '0%' }}
        animate={{ width: focused ? '100%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        style={{
          background: 'linear-gradient(90deg, #FF006E, #00F5FF)',
          boxShadow: '0 0 12px rgba(255, 0, 110, 0.6)',
        }}
      />
    </div>
  )
}

export function GlowTextarea({ label, className = '', ...props }: GlowTextareaProps) {
  const [focused, setFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  return (
    <div className="relative group">
      <textarea
        {...props}
        className={`w-full bg-transparent border-b-2 border-void-700 px-1 py-4 pt-6 text-void-100 font-body text-base outline-none transition-colors duration-300 focus:border-hot-pink peer resize-none ${className}`}
        onFocus={(e) => { setFocused(true); props.onFocus?.(e) }}
        onBlur={(e) => { setFocused(false); setHasValue(!!e.target.value); props.onBlur?.(e) }}
        onChange={(e) => { setHasValue(!!e.target.value); props.onChange?.(e) }}
      />
      <label
        className={`absolute left-1 font-pixel text-[9px] tracking-[0.2em] uppercase transition-all duration-300 pointer-events-none ${
          focused || hasValue
            ? 'top-0 text-hot-pink'
            : 'top-5 text-void-600'
        }`}
      >
        {label}
      </label>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px]"
        initial={{ width: '0%' }}
        animate={{ width: focused ? '100%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        style={{
          background: 'linear-gradient(90deg, #FF006E, #00F5FF)',
          boxShadow: '0 0 12px rgba(255, 0, 110, 0.6)',
        }}
      />
    </div>
  )
}
