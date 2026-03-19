import { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'ghost'
  className?: string
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-ghost'
  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`}>
        {children}
      </Link>
    )
  }
  return (
    <button onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  )
}
