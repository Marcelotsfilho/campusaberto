"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Search, Filter, FileText } from "lucide-react";

const teamMembers = [
	{
		name: "Drª Gabriela Venturini",
		role: "Coordenador Geral",
		specialization: "Educação Física",
		bio: [
			"Profissional de Educação Física (CREF 029632 - G/MG).",
			"Doutora em Ciências do Exercício e do Esporte (UERJ).",
			"Professora EBTT de Educação Física do campus Leopoldina do CEFET-MG.",
			"Especialista em Lei de Incentivo ao Esporte.",
		],
		image: "/equipe/gabriela-venturini.png?height=300&width=300",
		email: "carlos.silva@cefetmg.br",
		lattes: "http://lattes.cnpq.br/4100383917466105",
		linkedin: "",
	},
];

// First, update the areas constant to match the new types
const areas = [
	{ value: "todas", label: "Todos" },
	{ value: "cursos", label: "Cursos" },
	{ value: "oficinas", label: "Oficinas" },
	{ value: "pesquisa", label: "Pesquisa" },
	{ value: "eventos", label: "Eventos" },
	{ value: "atletica", label: "Atlética Panterão" },
	{ value: "acoes", label: "Ações Sociais" },
];

// Update the projects array to include type
const projects = [
	{
		name: "IPAQmove",
		type: "pesquisa", // Add type field
		members: [
			{
				name: "Prof. Ms. Luis Augusto Mattos Mendes",
				role: "Coordenador",
				specialization: "Banco de Dados",
				bio: "",
				image: "/equipe/default.webp",
				//email: "ana.santos@cefetmg.br",
				lattes: "http://lattes.cnpq.br/4100383917466105",
				linkedin: "",
				github: "",
			},
			{
				name: "Isabelly Araujo Temóteo",
				role: "Bolsista",
				specialization: "Graduanda em Engenharia da Computação",
				bio: "Graduanda em Engenharia da Computação",
				image: "/equipe/campus-aberto/isabelly.jpeg",
				// email: "ana.santos@cefetmg.br",
				linkedin: "https://www.linkedin.com/in/isabelly-temoteo-010131230/",
				github: "https://github.com/IsabellyTemoteo",
			},
			{
				name: "Elianfrancis",
				role: "Bolsista",
				specialization: "Graduando em Engenharia de Controle e Automação",
				bio: "Graduando em Engenharia de Controle e Automação",
				image: "/equipe/campus-aberto/elian.jpeg",
				//email: "ana.santos@cefetmg.br",
				linkedin: "",
				github: "",
			},
			{
				name: "Humberto de Moraes Lanzieri Filho",
				role: "Bolsista",
				specialization: "Estudante em Técnico em Informática",
				bio: "Estudante em Técnico em Informática",
				image: "/equipe/campus-aberto/humberto.jpeg",
				linkedin: "https://br.linkedin.com/in/humberto-de-moraes-lanzieri-filho-9a913b285",
				github: "https://github.com/hlanzieri",
			},
			{
				name: "Gabriela Queiroz Ribeiro",
				role: "Bolsista",
				specialization: "Estudante em Técnica em Informática",
				bio: "Estudante em Técnica em Informática",
				image: "/equipe/default.webp",
				linkedin: "https://br.linkedin.com/in/gabriela-queiroz-ribeiro-789396356",
				github: "",
			},
		],
	},
	{
		name: "Oficinas Esportivas de Natação e Esportes Coletivos",
		type: "oficinas",
		members: [
			{
				name: "Jonathan Assis",
				role: "Bolsista",
				specialization: "Graduando em Engenharia da Computação",
				bio: "Graduando em Engenharia.",
				image: "/equipe/default.webp",
				// email: "joao.oliveira@cefetmg.br",
				linkedin: "",
				github: "",
			},
			{
				name: "Pedro Henrique Carvalho Barbosa",
				role: "Bolsista",
				specialization: "Estudante de Técnica em Mecânica",
				bio: "Estudante de Técnica em Mecânica.",
				image: "/equipe/campus-aberto/pedrohenrique.jpeg",
				// email: "joao.oliveira@cefetmg.br",
				linkedin: "",
				github: "",
			},
		],
	},
	{
		name: "Arte, Cultura e Tecnologia",
		type: "cursos",
		members: [
			{
				name: "Ítalo Aurélio de Paula Vieira",
				role: "Bolsista",
				specialization: "Graduando em Engenharia da Computação",
				bio: "Graduando em Engenharia.",
				image: "/equipe/campus-aberto/italo.jpeg",
				// email: "joao.oliveira@cefetmg.br",
				linkedin: "https://www.linkedin.com/in/italoaurelio?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
				github: "https://github.com/italoaurelio",
			},
			{
				name: "Eduarda Costa de Oliveira Silva",
				role: "Bolsista",
				specialization: "Estudante de Técnica em Mecânica",
				bio: "Estudante de Técnica em Mecânica.",
				image: "/equipe/default.webp",
				// email: "joao.oliveira@cefetmg.br",
				linkedin: "",
				github: "",
			},
		],
	},
	{
		name: "Campus Aberto Runners",
		type: "oficinas",
		members: [
			{
				name: "Prof. Dr Douglas da Silva Vieira Martins",
				role: "Instrutor de Futebol",
				specialization: "Futebol e Futsal",
				bio: "Ex-atleta profissional com licença CBF e experiência em formação de base.",
				image: "/equipe/isabelly.jpeg",
				// email: "joao.oliveira@cefetmg.br",
				linkedin: "",
				github: "",
			},
			{
				name: "Lucas Junqueira Chagas da Cunha",
				role: "Bolsista",
				specialization: "Graduando em Engenharia da Computação",
				bio: "Graduando em Engenharia.",
				image: "/equipe/default.webp",
				// email: "joao.oliveira@cefetmg.br",
				linkedin: "",
				github: "",
			},
			{
				name: "Arthur Rocha Barros",
				role: "Bolsista",
				specialization: "Graduando em Engenharia",
				bio: "Graduando em Engenharia.",
				image: "/equipe/campus-aberto/arthur.jpeg",
				// email: "joao.oliveira@cefetmg.br",
				linkedin: "",
				github: "",
			},
		],
	},
	{
		name: "Educação Física no ENEM",
		type: "oficinas",
		members: [
			{
				name: "Prof Drª Juliana Barbosa Neves",
				role: "Instrutor de Futebol",
				specialization: "Futebol e Futsal",
				bio: "Ex-atleta profissional com licença CBF e experiência em formação de base.",
				image: "/equipe/default.webp",
				// email: "joao.oliveira@cefetmg.br",
				linkedin: "",
				github: "",
			},
			{
				name: "Pedro Felipe Eblen",
				role: "Bolsista",
				specialization: "Graduando em Engenharia da Computação",
				bio: "Graduando em Engenharia da Computação.",
				image: "/equipe/campus-aberto/pedro.jpeg",
				// email: "joao.oliveira@cefetmg.br",
				linkedin: "",
				github: "",
			},
			{
				name: "Rodrigo Albuquerque da Silva Venetillo",
				role: "Bolsista",
				specialization: "Graduando em Engenharia da Computação",
				bio: "Graduando em Engenharia da Computação.",
				image: "/equipe/default.webp",
				// email: "joao.oliveira@cefetmg.br",
				// linkedin: "https://linkedin.com/in/joao-oliveira",
				// github: "https://github.com/joao-oliveira",
			},
		],
	},
	{
		name: "Atlética Panterão",
		type: "atletica",
		members: [
			{
				name: "Marcelo Teixeira de Sousa Filho",
				role: "Bolsista",
				specialization: "Graduando em Engenharia da Computação",
				bio: "Graduando em Engenharia da Computação.",
				image: "/equipe/marcelo.jpeg",
				email: "joao.oliveira@cefetmg.br",
				linkedin: "https://www.linkedin.com/in/marcelo-teixeira-574926311/",
				github: "https://github.com/marcelotsfilho",
			},
			{
				name: "Lanna Duarte de Souza",
				role: "Bolsista",
				specialization: "Graduando em Engenharia da Computação",
				bio: "Graduando em Engenharia da Computação.",
				image: "/equipe/default.webp",
				// email: "joao.oliveira@cefetmg.br",
				linkedin: "https://www.linkedin.com/in/lanna-duarte-de-souza-901a912b0",
				github: "",
			},
		],
	},
];

export function TeamGrid() {
	const [expandedMember, setExpandedMember] = useState<number | null>(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedArea, setSelectedArea] = useState("todas");

	const filteredMembers = teamMembers.filter((member) => {
		const matchesSearch =
			member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
			member.specialization.toLowerCase().includes(searchTerm.toLowerCase());

		const matchesArea =
			selectedArea === "todos"
				? true
				: (selectedArea === "coordenacao" &&
						(member.role.includes("Coordenador") || member.role.includes("Coordenadora"))) ||
				  (selectedArea === "natacao" && member.specialization.includes("Natação")) ||
				  (selectedArea === "futebol" && member.specialization.includes("Futebol")) ||
				  (selectedArea === "volei" && member.specialization.includes("Voleibol")) ||
				  (selectedArea === "basquete" && member.specialization.includes("Basquetebol")) ||
				  (selectedArea === "atletismo" && member.specialization.includes("Atletismo"));

		return matchesSearch && matchesArea;
	});

	// Coordenadora Geral (primeira do array)
	const coordinator = teamMembers.find((m) =>
		m.role.toLowerCase().includes("coordenador")
	);

	// Demais membros (exclui coordenadora)
	const projectMembers = teamMembers.filter((m) => m !== coordinator);

	const filteredProjects = projects.filter((project) => {
		const matchesProjectName = project.name
			.toLowerCase()
			.includes(searchTerm.toLowerCase());

		const matchesMembers = project.members.some((member) =>
			member.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		const matchesType =
			selectedArea === "todas" || project.type === selectedArea;

		return (matchesProjectName || matchesMembers) && matchesType;
	});

	// Substitua a função sortMembersAlphabetically por esta nova versão
	const sortMembersWithCoordinators = (members: any[]) => {
		// Separa coordenadores/instrutores dos demais membros
		const coordinators = members.filter((member) =>
			member.role.toLowerCase().includes("coordenador") ||
			member.role.toLowerCase().includes("coordenadora") ||
			member.role.toLowerCase().includes("instrutor")
		);

		const otherMembers = members.filter((member) =>
			!member.role.toLowerCase().includes("coordenador") &&
			!member.role.toLowerCase().includes("coordenadora") &&
			!member.role.toLowerCase().includes("instrutor")
		);

		// Ordena cada grupo alfabeticamente
		const sortedCoordinators = [...coordinators].sort((a, b) =>
			a.name.localeCompare(b.name)
		);

		const sortedOtherMembers = [...otherMembers].sort((a, b) =>
			a.name.localeCompare(b.name)
		);

		// Concatena os grupos mantendo coordenadores primeiro
		return [...sortedCoordinators, ...sortedOtherMembers];
	};

	return (
		<section className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-4">
				{/* Search Filters */}
				<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
					<div className="flex flex-col lg:flex-row gap-4 items-center">
						{/* Search Input */}
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<input
								type="text"
								placeholder="Buscar por nome do projeto ou membro..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
							/>
						</div>

						{/* Project Filter */}
						<div className="relative">
							<Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<select
								value={selectedArea}
								onChange={(e) => setSelectedArea(e.target.value)}
								className="pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white dark:bg-gray-700 dark:text-white min-w-[200px]"
							>
								{areas.map((area) => (
									<option key={area.value} value={area.value}>
										{area.label}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				{/* Coordenadora Geral Section */}
				{coordinator && (
					<section className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12 flex flex-col md:flex-row items-center">
						<div className="w-full md:w-1/3 flex flex-col items-center">
							<span className="uppercase text-orange-600 dark:text-orange-400 font-bold mb-4 tracking-widest text-lg">
								Coordenadora Geral
							</span>
							<img
								src={coordinator.image || "/placeholder.svg"}
								alt={coordinator.name}
								className="w-40 h-40 object-cover rounded-full mb-4 md:mb-0"
							/>
						</div>
						<div className="w-full md:w-2/3 flex flex-col items-start md:pl-8">
							<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
								{coordinator.name}
							</h3>
							{Array.isArray(coordinator.bio) ? (
								<ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300 text-base mb-4">
									{coordinator.bio.map((item, idx) => (
										<li key={idx}>{item}</li>
									))}
								</ul>
							) : (
								<p className="text-gray-600 dark:text-gray-300 text-base mb-4">
									{coordinator.bio}
								</p>
							)}
							<div className="flex items-center space-x-3">
								{coordinator.linkedin && (
									<a
										href={coordinator.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
									>
										<Linkedin className="h-4 w-4" />
										<span>LinkedIn</span>
									</a>
								)}
								{coordinator.github && (
									<a
										href={coordinator.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm"
									>
										<svg
											className="h-4 w-4"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.535-1.527.117-3.183 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.656.242 2.879.118 3.183.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.921.43.37.813 1.096.813 2.21 0 1.595-.014 2.882-.014 3.273 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
										</svg>
										<span>GitHub</span>
									</a>
								)}
								{coordinator.lattes && (
									<a
										href={coordinator.lattes}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-1 text-blue-700 hover:text-blue-800 text-sm"
									>
										<FileText className="h-4 w-4" />
										<span>Lattes</span>
									</a>
								)}
							</div>
						</div>
					</section>
				)}

				{/* Projetos Section */}
				<section className="mb-12">
					{filteredProjects.map((project, pIdx) => (
						<div key={pIdx} className="mb-12">
							<h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-left">
								{project.name}
							</h2>
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
								{sortMembersWithCoordinators(project.members).map((member, index) => (
									<Card
										key={index}
										className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center"
										onClick={() =>
											setExpandedMember(
												expandedMember === `${pIdx}-${index}`
													? null
													: `${pIdx}-${index}`
											)
										}
									>
										<img
											src={member.image || "/placeholder.svg"}
											alt={member.name}
											className="w-32 h-32 object-cover rounded-full mt-6 mb-4"
										/>
										<CardContent className="flex flex-col items-center p-6">
											<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 text-center">
												{member.name}
											</h3>
											<p className="text-orange-500 dark:text-orange-400 font-medium mb-3 text-center">
												{member.role}
											</p>
											{expandedMember === `${pIdx}-${index}` ? (
												<div className="space-y-4 w-full">
													<p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-center">
														{member.bio}
													</p>
													<div className="flex items-center justify-center space-x-3">
														{member.linkedin && (
															<a
																href={member.linkedin}
																target="_blank"
																rel="noopener noreferrer"
																className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
																onClick={(e) => e.stopPropagation()}
															>
																<Linkedin className="h-4 w-4" />
																<span>LinkedIn</span>
															</a>
														)}
														{member.github && (
															<a
																href={member.github}
																target="_blank"
																rel="noopener noreferrer"
																className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 text-sm"
																onClick={(e) => e.stopPropagation()}
															>
																<svg
																	className="h-4 w-4"
																	fill="currentColor"
																	viewBox="0 0 24 24"
																>
																	<path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.606-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.535-1.527.117-3.183 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.656.242 2.879.118 3.183.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.921.43.37.813 1.096.813 2.21 0 1.595-.014 2.882-.014 3.273 0 .322.218.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
																</svg>
																<span>GitHub</span>
															</a>
														)}
														{member.lattes && (
															<a
																href={member.lattes}
																target="_blank"
																rel="noopener noreferrer"
																className="flex items-center space-x-1 text-blue-700 hover:text-blue-800 text-sm"
																onClick={(e) => e.stopPropagation()}
															>
																<FileText className="h-4 w-4" />
																<span>Lattes</span>
															</a>
														)}
													</div>
												</div>
											) : (
												<p className="text-gray-600 dark:text-gray-300 text-sm text-center">
													Clique para ver mais informações
												</p>
											)}
										</CardContent>
									</Card>
								))}
							</div>
							{/* Linha horizontal para separar projetos, exceto após o último */}
							{pIdx < projects.length - 1 && (
								<hr className="my-12 border-t border-gray-300 dark:border-gray-700" />
							)}
						</div>
					))}
				</section>
			</div>
		</section>
	);
}
