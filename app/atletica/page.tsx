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
    name: "Marcelo Teixeira Filho",
    position: "Presidente",
    description:
      "Responsável pela liderança geral da atlética, coordenação das atividades e representação institucional.",
    icon: Crown,
    photo: "/equipe/marcelo.jpeg",
  },
  {
    id: 2,
    name: "Bruno Santos Oliveira",
    position: "Vice-Presidente",
    description: "Auxilia na gestão geral e substitui o presidente quando necessário. Coordena projetos especiais.",
    icon: User,
    photo: "/member-2.png",
  },
  {
    id: 3,
    name: "Camila Rodrigues",
    position: "Diretora de Eventos",
    description: "Organiza e coordena todos os eventos esportivos e sociais da atlética ao longo do ano.",
    icon: Calendar,
    photo: "/member-3.png",
  },
  {
    id: 4,
    name: "Diego Ferreira",
    position: "Diretor Financeiro",
    description: "Gerencia as finanças, orçamentos e patrocínios da atlética. Controla receitas e despesas.",
    icon: DollarSign,
    photo: "/member-4.png",
  },
  {
    id: 5,
    name: "Eduarda Lima",
    position: "Diretora de Marketing",
    description: "Responsável pela comunicação, redes sociais e divulgação das atividades da atlética.",
    icon: Megaphone,
    photo: "/member-5.png",
  },
  {
    id: 6,
    name: "Felipe Costa",
    position: "Diretor de Esportes",
    description: "Coordena as modalidades esportivas, treinos e competições universitárias.",
    icon: Trophy,
    photo: "/member-6.png",
  },
  {
    id: 7,
    name: "Gabriela Mendes",
    position: "Diretora Social",
    description: "Organiza atividades de integração, festas e eventos sociais para os membros.",
    icon: Users,
    photo: "/member-7.png",
  },
  {
    id: 8,
    name: "Henrique Alves",
    position: "Diretor de Mídia",
    description: "Responsável pela produção de conteúdo audiovisual e cobertura dos eventos.",
    icon: Camera,
    photo: "/member-8.png",
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  src="/elderly-professor-formal-portrait.png"
                  alt="Prof. Dr. Roberto Pantera Silva"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
            </div>

            <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Em Memória</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6"></div>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-2">Prof. Dr. Roberto Pantera Silva</h3>
              <p className="text-lg text-gray-400 mb-6 font-light">1965 - 2018</p>

              <div className="prose prose-lg mx-auto">
                <p className="text-gray-300 leading-relaxed mb-6">
                  O Professor Roberto foi o visionário por trás da criação da Atlética Panterão em 1995. Seu amor pelo
                  esporte e dedicação aos estudantes inspiraram gerações de universitários a buscar a excelência tanto
                  nos estudos quanto nas atividades esportivas.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Seu legado permanece vivo em cada conquista, em cada momento de união e em cada valor que defendemos.
                  A Atlética Panterão é o reflexo de sua paixão pela educação e pelo desenvolvimento integral dos
                  jovens.
                </p>
                <p className="text-blue-300 font-medium italic">
                  "O esporte não forma apenas atletas, forma cidadãos." - Prof. Roberto Pantera Silva
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 border-t border-slate-700">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">Atlética Panterão</span>
            </div>

            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
