import { TeamHero } from "@/components/team-hero"
import { TeamGrid } from "@/components/team-grid"

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <TeamHero />
      <TeamGrid />
    </main>
  )
}
