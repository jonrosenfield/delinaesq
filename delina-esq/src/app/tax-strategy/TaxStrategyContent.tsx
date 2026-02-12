'use client'

import { getServiceBySlug } from '@/lib/services'
import { ServicePageLayout } from '@/components/services/ServicePageLayout'

const service = getServiceBySlug('tax-strategy')!

export function TaxStrategyContent() {
  return <ServicePageLayout service={service} />
}
