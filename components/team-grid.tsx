"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Search, Filter } from "lucide-react"

const teamMembers = [
  {
    name: "Prof. Dr. Carlos Silva",
    role: "Coordenador Geral",
    specialization: "Educação Física",
    bio: "Doutor em Ciências do Esporte com mais de 15 anos de experiência em projetos de extensão universitária.",
    image: "/placeholder.svg?height=300&width=300",
    email: "carlos.silva@cefetmg.br",
  },
  {
    name: "Profa. Dra. Ana Santos",
    role: "Coordenadora Pedagógica",
    specialization: "Natação e Esportes Aquáticos",
    bio: "Especialista em natação adaptada e desenvolvimento de programas esportivos inclusivos.",
    image: "/placeholder.svg?height=300&width=300",
    email: "ana.santos@cefetmg.br",
  },
  {
    name: "Prof. João Oliveira",
    role: "Instrutor de Futebol",
    specialization: "Futebol e Futsal",
    bio: "Ex-atleta profissional com licença CBF e experiência em formação de base.",
    image: "/placeholder.svg?height=300&width=300",
    email: "joao.oliveira@cefetmg.br",
  },
  {
    name: "Profa. Maria Costa",
    role: "Instrutora de Vôlei",
    specialization: "Voleibol",
    bio: "Técnica certificada pela CBV com experiência em equipes competitivas e recreativas.",
    image: "/placeholder.svg?height=300&width=300",
    email: "maria.costa@cefetmg.br",
  },
  {
    name: "Prof. Pedro Lima",
    role: "Instrutor de Basquete",
    specialization: "Basquetebol",
    bio: "Formado em Educação Física com especialização em basquete de formação e alto rendimento.",
    image: "/placeholder.svg?height=300&width=300",
    email: "pedro.lima@cefetmg.br",
  },
  {
    name: "Profa. Laura Ferreira",
    role: "Instrutora de Atletismo",
    specialization: "Atletismo e Corrida",
    bio: "Especialista em atletismo com foco em corridas de fundo e meio-fundo.",
    image: "/placeholder.svg?height=300&width=300",
    email: "laura.ferreira@cefetmg.br",
  },
]

const areas = [
  { value: "todas", label: "Todas as áreas" },
  { value: "coordenacao", label: "Coordenação" },
  { value: "natacao", label: "Natação" },
  { value: "futebol", label: "Futebol" },
  { value: "volei", label: "Vôlei" },
  { value: "basquete", label: "Basquete" },
  { value: "atletismo", label: "Atletismo" },
]

export function TeamGrid() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedArea, setSelectedArea] = useState("todas")

  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.specialization.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesArea =
      selectedArea === "todas"
        ? true
        : selectedArea === "coordenacao" && member.role.includes("Coordenador") ||
          selectedArea === "natacao" && member.specialization.includes("Natação") ||
          selectedArea === "futebol" && member.specialization.includes("Futebol") ||
          selectedArea === "volei" && member.specialization.includes("Voleibol") ||
          selectedArea === "basquete" && member.specialization.includes("Basquetebol") ||
          selectedArea === "atletismo" && member.specialization.includes("Atletismo")

    return matchesSearch && matchesArea
  })

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Search Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar por nome ou especialidade..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Area Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white dark:bg-gray-700 dark:text-white min-w-[200px]"
              >
                {areas.map((area) => (
                  <option key={area.value} value={area.value}>
                    {area.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedMember(expandedMember === index ? null : index)}
            >
              <div className="relative">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-orange-500">{member.specialization}</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-orange-500 dark:text-orange-400 font-medium mb-3">{member.role}</p>

                {expandedMember === index ? (
                  <div className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                    <div className="flex items-center space-x-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="h-4 w-4" />
                        <span>Contato</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="h-4 w-4" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Clique para ver mais informações</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
