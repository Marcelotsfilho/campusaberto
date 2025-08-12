import { Target, Heart, Users, Award } from "lucide-react"

const missions = [
  {
    icon: Target,
    title: "Nossa Missão",
    description:
      "Promover o acesso gratuito ao esporte de qualidade para toda a comunidade, contribuindo para o desenvolvimento social e a melhoria da qualidade de vida.",
  },
  {
    icon: Heart,
    title: "Nossos Valores",
    description:
      "Inclusão, respeito, excelência e compromisso social são os pilares que norteiam todas as nossas ações e atividades.",
  },
  {
    icon: Users,
    title: "Nossa Visão",
    description:
      "Ser referência em extensão universitária, conectando o CEFET-MG com a comunidade através do esporte e da educação.",
  },
  {
    icon: Award,
    title: "Nosso Compromisso",
    description:
      "Oferecer atividades de alta qualidade com profissionais qualificados, infraestrutura adequada e acompanhamento personalizado.",
  },
]

export function MissionSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Nossos Princípios</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              O Campus Aberto foi criado em 2022 com o objetivo de democratizar o acesso ao esporte e promover a
              integração entre a universidade e a comunidade externa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {missions.map((mission, index) => {
              const Icon = mission.icon
              return (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{mission.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{mission.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
