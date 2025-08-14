import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Crown,
  Calendar,
  Trophy,
  Heart,
  Share2,
  Facebook,
  Instagram,
  Twitter,
  User,
  Megaphone,
  DollarSign,
  Camera,
  Gamepad2,
} from "lucide-react"

interface Member {
  id: number
  name: string
  position: string
  description: string
  icon: any
  photo: string
}

const members: Member[] = [
  {
    id: 1,
    name: "Marcelo Teixeira de Sousa Filho",
    position: "Presidente",
    description:
      "Líder visionário com foco na integração e crescimento da atlética. Responsável pela gestão geral e representação institucional.",
    icon: Crown,
    photo: "/equipe/marcelo.jpeg",
  },
  {
    id: 2,
    name: "Isabelly Araújo Temoteo",
    position: "Vice-Presidente",
    description: "Apoio estratégico à presidência e coordenação de projetos especiais. Foco em parcerias e desenvolvimento institucional.",
    icon: User,
    photo: "/equipe/isabelly.jpeg",
  },
  {
    id: 3,
    name: "Giovana Marreiro Bonin Freire",
    position: "Secretária",
    description: "Responsável pela documentação, atas e comunicação interna. Organização de reuniões e controle administrativo.",
    icon: Calendar,
    photo: "/equipe/giovana.jpeg",
  },
  {
    id: 4,
    name: "Italo Aurélio de Paula Vieira",
    position: "Diretor Social e Visual",
    description: "Responsável pela comunicação visual, redes sociais e campanhas publicitárias. Criação de conteúdo e identidade visual.",
    icon: DollarSign,
    photo: "/equipe/italo.jpeg",
  },
  {
    id: 5,
    name: "Elianfrancis Silveira de Souza",
    position: "Diretor Financeiro",
    description: "Gestão financeira da atlética, controle de receitas e despesas. Planejamento orçamentário e prestação de contas.",
    icon: Megaphone,
    photo: "/equipe/elian.jpeg",
  },
  {
    id: 6,
    name: "Gabriela Rezende Venturini",
    position: "Diretora de Ensino, Pesquisa e Extensão",
    description: "Coordenação de todas as modalidades esportivas, organização de campeonatos e gestão de treinadores.",
    icon: Trophy,
    photo: "/equipe/gabriela-venturini.png",
  },
]

export default function AtleticaPanteraoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-gray-800">
      {/* Hero Section */}
      <section
        className="relative py-20 px-4 text-center bg-gradient-to-r from-slate-900/90 to-blue-900/90 min-h-[80vh] flex items-center"
        style={{
          backgroundImage: `url('/equipe-atletica.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-blue-900/80"></div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">Atlética Panterão</h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Mais que uma atlética, somos uma família unida pela paixão pelo esporte e pelo espírito universitário.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-slate-800/80 border-slate-600 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Excelência</h3>
                <p className="text-blue-200 text-sm">
                  Buscamos sempre o melhor desempenho em todas as modalidades esportivas
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-slate-600 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">União</h3>
                <p className="text-blue-200 text-sm">
                  Promovemos a integração e o companheirismo entre todos os estudantes
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-slate-600 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Paixão</h3>
                <p className="text-blue-200 text-sm">Vivemos intensamente cada momento da vida universitária</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-20 px-4 bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nossa Diretoria</h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Conheça os líderes que fazem a diferença na Atlética Panterão
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {members.map((member) => {
              const IconComponent = member.icon
              return (
                <Card
                  key={member.id}
                  className="bg-slate-700 border-slate-600 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-4">
                      <img
                        src={member.photo || "/placeholder.svg"}
                        alt={member.name}
                        className="w-32 h-32 mx-auto rounded-full mb-3 object-cover border-3 border-blue-400 group-hover:border-blue-300 transition-all duration-300"
                      />
                      <Badge className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs">
                        {member.position}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Founder Tribute Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-700 to-slate-800 relative">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mb-6">
                <img
                  src="/equipe/arthur-ribeiro.jpg"
                  alt="Arthur de Oliveira Ribeiro"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Em Memória</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-2">Arthur de Oliveira Ribeiro</h3>
              <p className="text-lg text-gray-400 mb-6 font-light">2002- 2021</p>

              <div className="prose prose-lg mx-auto">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Visionário e coração da Atlética Panterão, Arthur foi a força que deu vida a este projeto com garra e generosidade.
                </p>
                <p className="text-blue-300 font-medium italic">
                  Obrigado por tudo, Arthur. Você é, e sempre será, um de nós.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-slate-900 text-center">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-blue-200 mb-8">
              Descubra mais detalhes sobre a Atlética Panterão e nossa trajetória
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <a href="https://atleticaleopoldina.netlify.app/" target="_blank" rel="noopener noreferrer">
                Quer saber mais?
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
