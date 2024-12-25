import HeroSection from '@/components/hero-section'
import PortfolioGrid from '@/components/portfolio-grid'
// import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection
        title="Modelos de Portfólio"
        description="Encontre a inspiração perfeita para o seu próximo portfólio"
      />

      <PortfolioGrid />
    </div>
  )
}
