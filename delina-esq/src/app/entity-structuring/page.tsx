import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { EntityStructuringContent } from './EntityStructuringContent'

const service = getServiceBySlug('entity-structuring')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
}

export default function EntityStructuringPage() {
  return <EntityStructuringContent />
}
