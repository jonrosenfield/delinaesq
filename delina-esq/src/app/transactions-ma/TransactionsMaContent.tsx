'use client'

import { getServiceBySlug } from '@/lib/services'
import { ServicePageLayout } from '@/components/services/ServicePageLayout'

const service = getServiceBySlug('transactions-ma')!

export function TransactionsMaContent() {
  return <ServicePageLayout service={service} />
}
