'use client'

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'

interface KineticWordProps {
  word: string
  index: number
  total: number
  scrollYProgress: MotionValue<number>
  isHighlight: boolean
}

function KineticWord({ word, index, total, scrollYProgress, isHighlight }: KineticWordProps) {
  const opacity = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [0.2, 1]
  )
  const y = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [20, 0]
  )

  return (
    <motion.span
      className={`inline-block mr-[0.25em] ${isHighlight ? 'gradient-text' : 'text-sage-100'}`}
      style={{ opacity, y }}
    >
      {word}
    </motion.span>
  )
}

interface KineticTextProps {
  text: string
  className?: string
  highlightWord?: string
}

export function KineticText({ text, className = '', highlightWord }: KineticTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.3'],
  })

  const words = text.split(' ')

  return (
    <div ref={ref} className={className}>
      <h1 className="font-display text-display-xl font-bold leading-[0.95]">
        {words.map((word, i) => (
          <KineticWord
            key={i}
            word={word}
            index={i}
            total={words.length}
            scrollYProgress={scrollYProgress}
            isHighlight={!!highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase())}
          />
        ))}
      </h1>
    </div>
  )
}
