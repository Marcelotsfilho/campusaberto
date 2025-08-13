import { Card, CardContent } from "@/components/ui/card"

export function ImpactSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Nosso Impacto na Comunidade
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ao longo dos anos, o Campus Aberto tem transformado vidas e fortalecido laços comunitários
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">+500</div>
                <div className="text-gray-600 dark:text-gray-300">Famílias Beneficiadas</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">10</div>
                <div className="text-gray-600 dark:text-gray-300">Projetos em Andamento</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">3</div>
                <div className="text-gray-600 dark:text-gray-300">Anos de Atividade</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">História do Projeto</h3>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                O Campus Aberto surgiu da demanda identificada de aproximar a instituição da comunidade, de forma a consolidar 
                sua função social. Em 2022 foi iniciada uma versão piloto do projeto, com oficinas de natação para crianças e 
                adolescentes.
              </p>
              <p className="mb-4">
                No ano seguinte foram implementados 3 projetos de pesquisa, no contexto de Esporte e Tecnologia; e 1 de extensão, 
                na forma de oficinas gratuitas de natação e esportes coletivos para adolescentes. Foi implementada também, a 
                identidade visual do projeto.
              </p>
              <p className="mb-4">
                Em 2024 ampliaram-se os projetos: 4 de pesquisa (IPAQmove); 1 curso de extensão (Lei de Incentivo ao Esporte); 
                2 projetos (oficinas esportivas de natação e esportes coletivos); 1 equipe de competição (Atlética Panterão). 
                A implementação da Atlética Panterão ao Campus Aberto foi de extrema importância pois possibilitou conectar 
                pessoas em prol do mesmo objetivo: transformar a sociedade através do Esporte.
              </p>
              <p>
                Atualmente, em 2025 mantiveram-se os projetos do ano anterior, e foram implementados: 1 grupo de corrida; 1 
                curso com oficinas de dança. Gratuitas sobre Educação Física no ENEM; e 1 curso de Arte, Cultura e Tecnologia. 
                A grande novidade desse ano foi a ampliação da área de atuação do Campus Aberto, que passou a atuar como grupo 
                de Arte e Cultura do CEFET-MG.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
