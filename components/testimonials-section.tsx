"use client"

import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    age: 34,
    activity: "Vôlei",
    text: "O Campus Aberto mudou minha vida! Além de melhorar minha saúde, fiz amizades incríveis. A qualidade dos professores é excepcional.",
    rating: 5,
  },
  {
    name: "João Santos",
    age: 28,
    activity: "Futebol",
    text: "Sempre quis jogar futebol mas nunca tive oportunidade. Aqui encontrei um ambiente acolhedor e profissionais dedicados.",
    rating: 5,
  },
  {
    name: "Sol e Neve",
    // 'age' foi removido, pois é um patrocinador
    activity: "Patrocinador Master",
    text: "Acreditamos no poder do esporte para transformar comunidades. Apoiar o Campus Aberto é investir no futuro e no bem-estar de todos.",
    rating: 5,
    logo: "/logo/soleneve-logo.webp", // Logo do patrocinador
  },
  {
    name: "Ana Pereira",
    // Exemplo de bolsista sem idade obrigatória
    activity: "Bolsista de Educação Física",
    text: "Fazer parte deste projeto como bolsista é uma experiência de aprendizado imensa. A troca com a comunidade é gratificante e enriquece minha formação.",
    rating: 5,
  }
]

const stats = [
  { number: "+500", label: "Familias atendidas" },
  { number: "10", label: "Projetos" },
  { number: "3", label: "Anos de projeto" },
  { number: "+30", label: "Apoiadores" },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const testimonial = testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Relatos que inspiram
          </h2>

          <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-blue-200 opacity-50" />

            <div className="relative z-10">
              <p className="text-xl md:text-2xl leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-lg">
                    {testimonial.name}
                    {/* Renderiza a idade apenas se ela existir */}
                    {testimonial.age && `, ${testimonial.age} anos`}
                  </div>
                  <div className="text-blue-200">
                    {/* Lógica para exibir o texto da atividade (praticante ou bolsista) */}
                    {testimonial.age ? `Praticante de ${testimonial.activity}` : testimonial.activity}
                  </div>
                  {/* Renderiza a logo apenas se ela existir */}
                  {testimonial.logo && (
                    <img
                      src={testimonial.logo}
                      alt={`Logo de ${testimonial.name}`}
                      className="h-16 mt-4" // Ajustei a altura e margem para melhor visualização
                    />
                  )}
                </div>

                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}