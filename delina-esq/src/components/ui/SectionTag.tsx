'use client'

import { motion } from 'framer-motion'

interface SectionTagProps {
  text: string
  className?: string
}

export function SectionTag({ text, className = '' }: SectionTagProps) {
  return (
    <motion.span
      className={`tag-label ${className}`}
      initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {text}
    </motion.span>
  )
}
