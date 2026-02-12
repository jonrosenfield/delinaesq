import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { BusinessDiagnosticsContent } from './BusinessDiagnosticsContent'

const service = getServiceBySlug('business-diagnostics')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
}

export default function BusinessDiagnosticsPage() {
  return <BusinessDiagnosticsContent />
}
