import { Suspense } from 'react'

import HeroSection from '@/components/hero-section'
import LoadingPortfolios from '@/components/loading-portfolios'
import PortfolioGrid from '@/components/portfolio-grid'

// import { Input } from '@/components/ui/input'

export default async function Home() {
  return (
    <div className="w-full">
      <HeroSection
        title="Modelos de Portfólio"
        description="Encontre a inspiração perfeita para o seu próximo portfólio"
      />

      <Suspense fallback={<LoadingPortfolios addCss="mt-10" />}>
        <PortfolioGrid />
      </Suspense>
    </div>
  )
}
