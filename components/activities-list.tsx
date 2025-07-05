"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, MapPin } from "lucide-react"

const activities = [
  {
    name: "Futebol",
    description: "Treinos e jogos recreativos em campo oficial com grama sintética.",
    schedule: "Terça e Quinta - 18h às 20h",
    location: "Campo de Futebol",
    participants: "22 jogadores por treino",
    ageGroup: "16+ anos",
    level: "Todos os níveis",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Vôlei",
    description: "Modalidade indoor e de praia com foco no desenvolvimento técnico.",
    schedule: "Segunda e Quarta - 19h às 21h",
    location: "Quadra Poliesportiva",
    participants: "12 jogadores por treino",
    ageGroup: "14+ anos",
    level: "Iniciante a Avançado",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Basquete",
    description: "Treinos focados em fundamentos e jogos coletivos.",
    schedule: "Terça e Quinta - 17h às 19h",
    location: "Quadra de Basquete",
    participants: "10 jogadores por treino",
    ageGroup: "12+ anos",
    level: "Todos os níveis",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Natação",
    description: "Aulas de natação em piscina olímpica aquecida.",
    schedule: "Segunda a Sexta - 7h às 9h / 18h às 20h",
    location: "Piscina Olímpica",
    participants: "15 alunos por turma",
    ageGroup: "6+ anos",
    level: "Iniciante a Competitivo",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Tênis de Mesa",
    description: "Treinos técnicos e torneios internos regulares.",
    schedule: "Segunda a Sexta - 16h às 18h",
    location: "Sala de Tênis de Mesa",
    participants: "8 jogadores por treino",
    ageGroup: "8+ anos",
    level: "Todos os níveis",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Atletismo",
    description: "Corrida, saltos e arremessos na pista oficial.",
    schedule: "Terça e Quinta - 6h às 8h",
    location: "Pista de Atletismo",
    participants: "20 atletas por treino",
    ageGroup: "10+ anos",
    level: "Iniciante a Competitivo",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const filters = ["Todos", "Coletivos", "Individuais", "Aquáticos", "Quadra"]

export function ActivitiesList() {
  const [selectedFilter, setSelectedFilter] = useState("Todos")
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <Badge
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm"
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </Badge>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <div className="relative">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600">{activity.level}</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{activity.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{activity.description}</p>

                <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{activity.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{activity.participants}</span>
                  </div>
                </div>

                {expandedCard === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Faixa Etária:</span>
                      <span>{activity.ageGroup}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
