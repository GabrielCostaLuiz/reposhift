import HeroSection from '@/components/hero-section'
import PortfolioGrid from '@/components/portfolio-grid'

export default function Favoritos() {
  return (
    <div>
      <HeroSection
        title="Portfólios Favoritos"
        description="Aqui estão os seus portfólios favoritos. Gerencie e explore suas preferências com facilidade."
      />

      <PortfolioGrid />
    </div>
  )
}
