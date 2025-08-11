"use client";

import { useState, useEffect, useRef } from "react";
import { Heart, Users, Trophy, Zap, Handshake } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Saúde e Qualidade de Vida",
    description:
      "Desenvolve o condicionamento físico dos participantes, melhorando a saúde física e mental.",
  },
  {
    icon: Zap,
    title: "Desenvolvimento Social",
    description:
      "Desenvolve habilidades sociais e emocionais dos participantes contribuindo para o melhor bem estar social.",
  },
  {
    icon: Trophy,
    title: "Desenvolvimento Profissional",
    description:
      "Desenvolve habilidades tecnológicas dos participantes através de oficinas, cursos, eventos e palestras contribuindo para sua preparação para o atual mercado de trabalho.",
  },
  {
    icon: Users,
    title: "Inclusão Social",
    description:
      "Proporciona o acesso igualitário a todas as pessoas, ao esporte gratuito e de qualidade oferecido por uma instituição pública federal.",
  },
  {
    icon: Handshake,
    title: "Transformação da Sociedade",
    description:
      "Proporciona o desenvolvimento integral dos participantes, conectando pessoas, ampliando as relações humanas, através do Esporte enquanto Bem Social.",
  },
];

export function BenefitsSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            benefits.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Impacto Social
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubra como o Campus Aberto transforma a comunidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                } hover:-translate-y-2`}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
