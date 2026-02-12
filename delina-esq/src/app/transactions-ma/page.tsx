import type { Metadata } from 'next'
import { getServiceBySlug } from '@/lib/services'
import { TransactionsMaContent } from './TransactionsMaContent'

const service = getServiceBySlug('transactions-ma')!

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
}

export default function TransactionsMaPage() {
  return <TransactionsMaContent />
}
