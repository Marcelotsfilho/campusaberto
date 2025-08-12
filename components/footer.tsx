import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/logoC.A-branca.png"
                alt="Campus Aberto Logo"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">Esporte gratuito e de qualidade para toda a comunidade.</p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a> */}
              <a href="https://wa.me/5532988157183" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/campusabertocefetleopoldina/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/atividades" className="text-gray-400 hover:text-white transition-colors">
                  Atividades
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-gray-400 hover:text-white transition-colors">
                  Equipe
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Atividades</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Oficinas de natação</li>
              <li>Grupo de corrida</li>
              <li>Curso - Lei de Insentivo ao Esporte</li>
              <li>Curso - Arte, Cultura e Tecnologia</li>
              <li>Oficinas de Educação Física no ENEM</li>
              <li>Altética Panterão</li>
              <li>Campeonato Arthur Ribeiro</li>
              <li>IPAQmove</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">CEFET-MG, Leopoldina</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(32) 98815-7183</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">campusabertocefetleopoldina@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Campus Aberto - CEFET-MG. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
