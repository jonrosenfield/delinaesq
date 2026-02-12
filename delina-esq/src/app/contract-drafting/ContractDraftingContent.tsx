'use client'

import { getServiceBySlug } from '@/lib/services'
import { ServicePageLayout } from '@/components/services/ServicePageLayout'

const service = getServiceBySlug('contract-drafting')!

export function ContractDraftingContent() {
  return <ServicePageLayout service={service} />
}
