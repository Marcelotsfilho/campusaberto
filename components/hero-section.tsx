"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bannerCA.png"
          alt="Campus CEFET-MG"
          className="w-full h-full object-cover brightness-75 filter"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-800/30 to-orange-500/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Esporte gratuito e de
            <span className="text-[#004299]"> qualidade</span>
            <br />
            para todos
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Participe das atividades esportivas do Campus Aberto CEFET-MG. Mais de 500 pessoas já transformaram suas
            vidas através do esporte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#004299] hover:bg-[#022b6dff] text-white font-semibold px-8 py-4 text-lg"
            >
              <Link href="/cadastro">Quero me cadastrar</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Assistir vídeo
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}  
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-10 w-10 text-white/70" />
        </div>
      </div>
    </section>
  )
}
