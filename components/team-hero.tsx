export function TeamHero() {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/profrunners.jpg"
          alt="Equipe Campus Aberto"
          className="w-full h-full object-cover brightness-75 blur-none"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Nossa Equipe</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Conheça os profissionais dedicados que tornam o Campus Aberto uma realidade
        </p>
      </div>
    </section>
  )
}
