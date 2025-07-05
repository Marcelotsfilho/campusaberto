import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Calendar } from "lucide-react"

export function ScheduleSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">Cronograma Completo</h2>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Calendar className="h-6 w-6" />
                <span>Horários das Atividades</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Manhã (6h - 12h)</h3>
                  <ul className="space-y-2 text-left">
                    <li className="flex justify-between">
                      <span>Atletismo</span>
                      <span className="text-gray-500">6h - 8h</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Natação</span>
                      <span className="text-gray-500">7h - 9h</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Caminhada</span>
                      <span className="text-gray-500">6h - 7h</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Tarde/Noite (16h - 22h)</h3>
                  <ul className="space-y-2 text-left">
                    <li className="flex justify-between">
                      <span>Tênis de Mesa</span>
                      <span className="text-gray-500">16h - 18h</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Basquete</span>
                      <span className="text-gray-500">17h - 19h</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Futebol</span>
                      <span className="text-gray-500">18h - 20h</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Vôlei</span>
                      <span className="text-gray-500">19h - 21h</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-4 w-4" />
                Baixar Cronograma Completo (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
