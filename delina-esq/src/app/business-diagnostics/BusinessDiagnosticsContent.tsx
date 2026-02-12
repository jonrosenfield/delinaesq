'use client'

import { getServiceBySlug } from '@/lib/services'
import { ServicePageLayout } from '@/components/services/ServicePageLayout'

const service = getServiceBySlug('business-diagnostics')!

export function BusinessDiagnosticsContent() {
  return <ServicePageLayout service={service} />
}
