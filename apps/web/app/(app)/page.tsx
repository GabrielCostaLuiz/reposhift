import { auth } from '@/auth-user/auth'
import HeroSection from '@/components/hero-section'
import LoadingPortfolios from '@/components/loading-portfolios'
import PortfolioGrid from '@/components/portfolio-grid'
import { getTemplates } from '@/http/get-templates'
import { Suspense } from 'react'

// import { Input } from '@/components/ui/input'

export default async function Home() {
  const { templates } = await getTemplates()

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection
        title="Modelos de Portfólio"
        description="Encontre a inspiração perfeita para o seu próximo portfólio"
      />

      <Suspense fallback={<LoadingPortfolios addCss="mt-10" />}>
        <PortfolioGrid templates={templates} />
      </Suspense>
    </div>
  )
}
