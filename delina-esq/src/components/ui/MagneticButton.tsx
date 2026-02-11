'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
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
  primary: 'btn-bevel btn-bevel-pink',
  secondary: 'btn-bevel btn-bevel-cyan',
  outline: 'btn-bevel btn-bevel-white',
  ghost: 'text-cream hover:text-hot-pink font-pixel text-xs uppercase tracking-wider',
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
        className={`${variantClasses[variant]} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  )
}
