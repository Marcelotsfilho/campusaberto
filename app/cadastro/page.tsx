import { RegistrationForm } from "@/components/registration-form"

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cadastre-se no Campus Aberto</h1>
            <p className="text-lg text-gray-600">
              Preencha o formulário abaixo para participar das nossas atividades esportivas gratuitas
            </p>
          </div>
          <RegistrationForm />
        </div>
      </div>
    </main>
  )
}
