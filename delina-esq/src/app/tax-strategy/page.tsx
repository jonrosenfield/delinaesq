import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { TaxStrategyContent } from './TaxStrategyContent'

const service = getServiceBySlug('tax-strategy')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
}

export default function TaxStrategyPage() {
  return <TaxStrategyContent />
}
