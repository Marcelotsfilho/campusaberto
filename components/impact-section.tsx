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
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-300">Pessoas Beneficiadas</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">5</div>
                <div className="text-gray-600 dark:text-gray-300">Modalidades Oferecidas</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">3</div>
                <div className="text-gray-600 dark:text-gray-300">Anos de Projeto</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">História do Projeto</h3>
            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                O Campus Aberto nasceu em 2016 da necessidade de aproximar o CEFET-MG da comunidade externa, oferecendo
                acesso gratuito às instalações esportivas da instituição. O projeto surgiu como uma iniciativa de
                extensão universitária, reconhecendo o papel social da universidade pública.
              </p>
              <p className="mb-4">
                Inicialmente, o projeto atendia cerca de 50 pessoas em apenas 3 modalidades. Hoje, graças ao apoio da
                comunidade acadêmica e ao reconhecimento da sociedade, o Campus Aberto se tornou um dos maiores projetos
                de extensão do CEFET-MG.
              </p>
              <p>
                Nossa infraestrutura inclui quadras poliesportivas, piscina olímpica, campo de futebol, pista de
                atletismo e salas especializadas, todas disponíveis gratuitamente para a comunidade externa, sempre com
                acompanhamento de profissionais qualificados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
