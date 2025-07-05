import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Localização</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold">CEFET-MG Campus I</h4>
            <p className="text-gray-600">Av. Amazonas, 7675 - Nova Gameleira</p>
            <p className="text-gray-600">Belo Horizonte - MG, 30510-000</p>
          </div>

          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Mapa do Campus</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Informações de Contato</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-blue-600" />
            <span>(31) 3319-7000</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-blue-600" />
            <span>campusaberto@cefetmg.br</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="h-5 w-5 text-blue-600" />
            <span>Segunda a Sexta: 7h às 22h</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Redes Sociais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors">
              <Facebook className="h-6 w-6 text-blue-600" />
            </a>
            <a href="#" className="p-3 bg-pink-100 rounded-lg hover:bg-pink-200 transition-colors">
              <Instagram className="h-6 w-6 text-pink-600" />
            </a>
            <a href="#" className="p-3 bg-red-100 rounded-lg hover:bg-red-200 transition-colors">
              <Youtube className="h-6 w-6 text-red-600" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
