'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, ReactNode, MouseEvent } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  type?: 'button' | 'submit'
}

const variantClasses = {
  primary: 'bg-neon-pink text-white hover:shadow-neon-pink',
  secondary: 'bg-electric-blue text-white hover:shadow-neon-blue',
  outline: 'border border-sage-200/30 text-sage-100 hover:border-neon-pink hover:text-neon-pink',
  ghost: 'text-sage-100 hover:text-neon-pink',
}

export function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  variant = 'primary',
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.15)
    y.set((e.clientY - centerY) * 0.15)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const baseClass = `relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-pill font-mono text-sm tracking-wider uppercase transition-all duration-300 ${variantClasses[variant]} ${className}`

  const Component = href ? 'a' : 'button'

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        type={href ? undefined : type}
        className={baseClass}
      >
        {children}
        <motion.span
          className="absolute inset-0 rounded-pill opacity-0 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)',
          }}
          whileHover={{ opacity: 1 }}
        />
      </Component>
    </motion.div>
  )
}
