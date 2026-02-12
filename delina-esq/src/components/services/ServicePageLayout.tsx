'use client'

import type { ServiceData } from '@/lib/services'
import { ServiceHero } from './ServiceHero'
import { PainPoints } from './PainPoints'
import { ServiceSolution } from './ServiceSolution'
import { ServiceProcess } from './ServiceProcess'
import { SocialProof } from './SocialProof'
import { ServiceCTA } from './ServiceCTA'
import { CrossLinks } from './CrossLinks'

interface ServicePageLayoutProps {
  service: ServiceData
}

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  return (
    <>
      <ServiceHero
        headline={service.heroHeadline}
        subheadline={service.heroSubheadline}
        tagLabel={service.shortTitle.toUpperCase()}
        icon={service.icon}
        color={service.color}
        trustMarker={service.trustMarker}
      />
      <PainPoints
        painPoints={service.painPoints}
        color={service.color}
      />
      <ServiceSolution
        solutionCards={service.solutionCards}
        color={service.color}
      />
      <ServiceProcess
        steps={service.process}
        color={service.color}
      />
      <SocialProof
        metrics={service.metrics}
        color={service.color}
      />
      <ServiceCTA
        serviceTitle={service.title}
        color={service.color}
      />
      <CrossLinks
        relatedSlugs={service.relatedSlugs}
      />
    </>
  )
}
