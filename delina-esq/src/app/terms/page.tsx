import type { Metadata } from 'next'
import { TermsContent } from './TermsContent'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms & Conditions governing all services, disclosures, and engagements for Delina Yasmeh, Esq.',
}

export default function TermsPage() {
  return <TermsContent />
}
