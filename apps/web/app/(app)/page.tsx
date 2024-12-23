import { Input } from '@/components/ui/input'

import PortfolioGrid from '@/components/portfolio-grid'
import HeroSection from '@/components/hero-section'

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <HeroSection
        title="Modelos de Portfólio"
        description="Encontre a inspiração perfeita para o seu próximo portfólio"
      />

      <PortfolioGrid />
    </div>
  )
}
