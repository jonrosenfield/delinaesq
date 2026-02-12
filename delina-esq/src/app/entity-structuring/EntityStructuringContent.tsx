'use client'

import { getServiceBySlug } from '@/lib/services'
import { ServicePageLayout } from '@/components/services/ServicePageLayout'

const service = getServiceBySlug('entity-structuring')!

export function EntityStructuringContent() {
  return <ServicePageLayout service={service} />
}
