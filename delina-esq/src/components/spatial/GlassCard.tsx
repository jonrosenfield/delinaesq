'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, ReactNode, MouseEvent } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
  depth?: number
}

export function GlassCard({ children, className = '', glowColor = 'neon-pink', depth = 0 }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 25 })
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 25 })

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)
    rotateX.set(-y * 5)
    rotateY.set(x * 5)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const shadowMap: Record<string, string> = {
    'neon-pink': 'hover:shadow-neon-pink',
    'neon-blue': 'hover:shadow-neon-blue',
    'neon-violet': 'hover:shadow-neon-violet',
  }

  return (
    <motion.div
      ref={ref}
      className={`glass-card ${shadowMap[glowColor] || ''} transition-shadow duration-500 ${className}`}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
        zIndex: depth,
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}
