"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
	{
		src: "/galeria/carunners.jpg",
		alt: "Prática de corrida da equipe Campus Aberto Runners",
		title: "Equipe de Corrida",
	},
	{
		src: "/oficinas/palestra-runners.jpg",
		alt: "Palestra inaugural projeto Campus Aberto Runners",
		title: "Palestra inaugural projeto Campus Aberto Runners",
	},
	{
		src: "/equipecampusaberto.jpg",
		alt: "Equipe Campus Aberto",
		title: "Participação na MOCITEC 2023",
	},
	{
		src: "/galeria/futevolei.jpg",
		alt: "Oficina Futevôlei",
		title: "Oficina de futevôlei na MOCITEC 2023",
	},
	{
		src: "/oficinas/lei-incentivo.jpg",
		alt: "Curso Lei de Incentivo ao Esporte",
		title: "Curso Lei de Incentivo ao Esporte",
	},
	{
		src: "/oficinas/equipecarunners.jpg",
		alt: "Aula inaugural Runners",
		title: "Aula inaugural Campus Aberto Runners",
	},
	{
		src: "/galeria/apresentacao-ipaq-gabriela.jpg",
		alt: "Apresentação do projeto IPAQmove",
		title: "Apresentação do projeto IPAQmove",
		objectPosition: "center 20%",
	},
	{
		src: "/galeria/ipaqmove.jpg",
		alt: "Apresentação do projeto IPAQmove",
		title: "Apresentação do projeto IPAQmove na Semana da Computação 2024",
		objectPosition: "center 20%",
	},
	{
		src: "/galeria/palestra-runners2.jpg",
		alt: "Apresentação do projeto Runners",
		title: "Palestra na inauguração do projeto Campus Aberto Runners",
		objectPosition: "center 20%",
	},
	{
		src: "/galeria/acao-apae.png",
		alt: "Participação na Ação social na APAE de Leopildina",
		title: "Ação social na APAE de Leopildina",
		objectPosition: "center 20%",
	},
	{
		src: "/galeria/basquete.jpg",
		alt: "Campeonato de basquete em parceria com a Atlética Panterão",
		title: "Campeonato de basquete 2025",
		objectPosition: "center 20%",
	},
	{
		src: "/galeria/caminhada.jpg",
		alt: "Equipe de caminhada do Campus Aberto Runners",
		title: "Equipe de caminhada do Campus Aberto Runners",
		objectPosition: "center 20%",
	},
	{
		src: "/galeria/validacao-ipaqmove.jpg",
		alt: "Validação do aplicativo mobile IPAQmove",
		title: "Validação do aplicativo mobile IPAQmove",
		objectPosition: "center 20%",
	},
	{
		src: "/galeria/trabalho-ipaqmove.jpg",
		alt: "Equipe de trabalho do IPAQmove",
		title: "Validação de dados coletados no aplicativo IPAQmove",
		objectPosition: "center 20%",
	},
	{
		src: "/galeria/profrunners.jpg",
		alt: "Profissionais Campus Aberto Runners",
		title: "Embaixadores do Campus Aberto Runners",
		objectPosition: "center 20%",
	},
	{
		src: "/oficinas/camp-arthur-ribeiro-fem.jpg",
		alt: "Jogo feminino na final do Campeonato Arthur Ribeiro",
		title: "Campeonato Arthur Ribeiro",
		objectPosition: "center 20%",
	},
]

export function GallerySection() {
	const [selectedImage, setSelectedImage] = useState<number | null>(null)

	const nextImage = () => {
		if (selectedImage !== null) {
			setSelectedImage((selectedImage + 1) % galleryImages.length)
		}
	}

	const prevImage = () => {
		if (selectedImage !== null) {
			setSelectedImage(
				selectedImage === 0
					? galleryImages.length - 1
					: selectedImage - 1
			)
		}
	}

	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-800">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
						Nossos Projetos em Ação
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						Veja como é participar das atividades do Campus Aberto
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{galleryImages.map((image, index) => (
						<div
							key={index}
							className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
							onClick={() => setSelectedImage(index)}
						>
							<img
								src={image.src || "/placeholder.svg"}
								alt={image.alt}
								className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
								style={
									image.objectPosition
										? { objectPosition: image.objectPosition }
										: {}
								}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<h3 className="text-lg font-semibold">{image.title}</h3>
							</div>
						</div>
					))}
				</div>

				{/* Modal */}
				{selectedImage !== null && (
					<div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
						<div className="relative max-w-4xl w-full">
							<img
								src={galleryImages[selectedImage].src || "/placeholder.svg"}
								alt={galleryImages[selectedImage].alt}
								className="w-full h-auto rounded-lg"
								style={
									galleryImages[selectedImage].objectPosition
										? { objectPosition: galleryImages[selectedImage].objectPosition }
										: {}
								}
							/>

							<Button
								variant="ghost"
								size="icon"
								className="absolute top-4 right-4 text-white hover:bg-white/20"
								onClick={() => setSelectedImage(null)}
							>
								<X className="h-6 w-6" />
							</Button>

							<Button
								variant="ghost"
								size="icon"
								className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
								onClick={prevImage}
							>
								<ChevronLeft className="h-8 w-8" />
							</Button>

							<Button
								variant="ghost"
								size="icon"
								className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
								onClick={nextImage}
							>
								<ChevronRight className="h-8 w-8" />
							</Button>

							<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
								<h3 className="text-xl font-semibold mb-2">
									{galleryImages[selectedImage].title}
								</h3>
								<p className="text-sm opacity-75">
									{selectedImage + 1} de {galleryImages.length}
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	)
}
