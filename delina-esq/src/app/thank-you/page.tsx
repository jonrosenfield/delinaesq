import type { Metadata } from 'next'
import { ThankYouContent } from './ThankYouContent'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Your message has been received. We will respond within 24-48 hours.',
}

export default function ThankYouPage() {
  return <ThankYouContent />
}
