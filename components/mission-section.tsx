import { Target, Heart, Users, Award } from "lucide-react"

const missions = [
  {
    icon: Target,
    title: "Nossa Missão",
    description:
      "Democratizar o acesso ao Esporte, tornando-o acessível a todos.",
  },
  {
    icon: Heart,
    title: "Nossos Valores",
    description:
      "Nos baseamos nos Valores Olímpicos: Respeito, Amizade e Excelência, na realização de todas as ações do Campus Aberto, dentro e fora dele.",
  },
  {
    icon: Users,
    title: "Nossa Visão",
    description:
      "Ser uma instituição federal referência na promoção do esporte como ferramenta de transformação social, criando um futuro mais justo e inclusivo para as comunidades em todo o país.",
  },
  {
    icon: Award,
    title: "Nosso Compromisso",
    description:
      "Transformar a sociedade através do Esporte gratuito e de qualidade.",
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
              Conheça os princípios que guiam o nosso trabalho e as nossas ações na comunidade.
              {/* O Campus Aberto foi criado em 2022 com o objetivo de democratizar o acesso ao esporte e promover a
              integração entre a universidade e a comunidade externa. */}
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
