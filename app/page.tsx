import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GallerySection } from "@/components/gallery-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <GallerySection />
    </main>
  )
}
