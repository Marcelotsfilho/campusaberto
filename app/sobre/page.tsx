import { AboutHero } from "@/components/about-hero"
import { MissionSection } from "@/components/mission-section"
import { ImpactSection } from "@/components/impact-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <MissionSection />
      <ImpactSection />
    </main>
  )
}
