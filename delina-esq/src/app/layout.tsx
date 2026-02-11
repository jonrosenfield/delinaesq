import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono, Silkscreen, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AccessibilityToolbar } from '@/components/accessibility/AccessibilityToolbar'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const silkscreen = Silkscreen({
  subsets: ['latin'],
  variable: '--font-silkscreen',
  display: 'swap',
  weight: ['400', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://delina.esq'),
  title: {
    default: 'Delina Yasmeh, Esq. — Tax Attorney for Businesses and Individuals',
    template: '%s | Delina Yasmeh, Esq.',
  },
  description: 'Legal architecture for high-growth companies, private clients, and creators. TAX | CONTRACTS | ENTITY | STRATEGY | FORMATION',
  keywords: ['tax strategy', 'legal counsel', 'entity formation', 'business structuring', 'entrepreneur attorney', 'founder legal services', 'creator legal counsel', 'tax attorney', 'M&A', 'California attorney'],
  authors: [{ name: 'Delina Yasmeh, Esq.' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://delina.esq',
    title: 'Delina Yasmeh, Esq. — Tax Attorney for Businesses and Individuals',
    description: 'Legal architecture for high-growth companies, private clients, and creators. TAX | CONTRACTS | ENTITY | STRATEGY',
    siteName: 'DELINA.ESQ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delina Yasmeh, Esq. — Legal Architecture for High-Growth Companies',
    description: 'Attorney for creators, founders, and high-growth entrepreneurs. TAX | CONTRACTS | ENTITY | STRATEGY',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${silkscreen.variable} ${playfair.variable}`}>
      <body>
        {/* Y2K grain + scanline overlays */}
        <div className="grain-overlay" aria-hidden="true" />
        <div className="scanline-overlay" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AccessibilityToolbar />
      </body>
    </html>
  )
}
