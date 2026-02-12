import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { ContractDraftingContent } from './ContractDraftingContent'

const service = getServiceBySlug('contract-drafting')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
}

export default function ContractDraftingPage() {
  return <ContractDraftingContent />
}
