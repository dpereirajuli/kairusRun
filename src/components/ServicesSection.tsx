import { Target, Users, TrendingUp, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Target,
    title: "Assessoria Corporativa",
    description: "Transformamos empresas através de programas de bem-estar e desenvolvimento pessoal para equipes. Aumente a produtividade e satisfação dos seus colaboradores.",
  },
  {
    icon: Users,
    title: "Programas para Escolas",
    description: "Levamos educação em bem-estar e desenvolvimento pessoal para instituições de ensino. Formamos jovens mais conscientes e preparados para o futuro.",
  },
  {
    icon: TrendingUp,
    title: "Assessoria Pessoal",
    description: "Treinos coletivos de corrida e caminhada com avaliação física inicial, aulas semanais com educador físico, monitoramento de evolução e participação em corridas locais com a marca da empresa ou da escola.",
  },
  {
    icon: FileText,
    title: "Planilhas de Corrida",
    description: "Quer começar a correr ou evoluir na corrida? Planilhas elaboradas por profissionais para cada nível: Iniciante, Intermediário e Avançado. Inclui estrutura semanal progressiva, dicas de alongamento.",
  },
];

const ServicesSection = () => {
  const headerRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();

  return (
    <section 
      id="servicos"
      className="py-16 sm:py-20 lg:py-48 xl:py-56 px-4 sm:px-6 lg:px-8 bg-black relative mobile-logo-bg sm:desktop-logo-bg"
    >
      {/* Overlay para garantir legibilidade */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16 scroll-animate">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ fontFamily: '"Luckiest Guy", cursive', fontWeight: '400', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)' }}>
            <span className="text-white">O que nos torna</span>{" "}
            <span className="text-neon">únicos?</span>
          </h2>
          <div className="w-24 h-1 bg-neon mx-auto rounded-full"></div>
        </div>
        
        {/* Services Grid */}
        <div ref={servicesRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 scroll-animate">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card text-center group"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animation: `slide-up 0.6s ease-out forwards`,
                opacity: 0
              }}
            >
              {/* Icon */}
              <div className="service-icon group-hover:animate-float">
                <service.icon className="w-8 h-8" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-foreground transition-colors duration-300">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <a 
            href="#planos" 
            className="inline-block px-4 sm:px-6 py-2 sm:py-3 border-2 border-neon rounded-full hover:bg-neon hover:text-black transition-all duration-300 cursor-pointer"
          >
            <span className="text-neon font-semibold uppercase tracking-wide text-xs sm:text-sm hover:text-black transition-colors duration-300">
              Saiba Mais
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;