import HeroSection from '@/components/hero-section'
import PortfolioGrid from '@/components/portfolio-grid'

export default function Favoritos() {
  return (
    <div>
      <HeroSection
        title="Portfólios Baixados"
        description="Explore os portfólios que você já baixou e gerencie suas preferências."
      />

      <PortfolioGrid />
    </div>
  )
}
