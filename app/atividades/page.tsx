import { ActivitiesHero } from "@/components/activities-hero"
import { ActivitiesList } from "@/components/activities-list"
import { ScheduleSection } from "@/components/schedule-section"

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen">
      <ActivitiesHero />
      <ActivitiesList />
      <ScheduleSection />
    </main>
  )
}
