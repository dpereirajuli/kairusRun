import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pricingPlans = [
  {
    name: "Escola",
    price: "consultar",
    period: "",
    description: "Programa flexível adaptado às necessidades e realidade da escola, com opções presenciais e online. Desenvolvido para formar jovens mais conscientes e preparados para o futuro.",
    features: [
      "Treino presencial mensal com foco em iniciação",
      "Planilhas de treino online para continuidade",
      "Suporte remoto com profissionais especializados",
      "Avaliação e medição corporal",
      "Palestras sobre saúde, sono e alimentação",
      "Atividades lúdicas e educativas",
      "Roda de conversa com psicólogo",
      "Programa adaptável à realidade da escola"
    ],
    popular: false,
    buttonText: "Falar com Vendas",
    buttonVariant: "outline" as const
  },
  {
    name: "Planilhas",
    price: "R$ 47",
    period: "/mês",
    description: "Ideal para quem quer treinar online com flexibilidade total. Treine quando e onde quiser, com suporte por mensagem e atualizações mensais.",
    features: [
      "Iniciante — primeiros passos com segurança",
      "Intermediário — ganho de resistência e ritmo",
      "Avançado — performance, velocidade e provas",
      "Estrutura semanal progressiva",
      "Dicas de alongamento e recuperação",
      "Acompanhamento por mensagem",
    ],
    popular: false,
    buttonText: "Escolher Planilhas",
    buttonVariant: "outline" as const
  },
  {
    name: "Pessoal",
    price: "R$ 197",
    period: "/mês",
    description: "Para quem quer resultados mais rápidos com acompanhamento presencial completo. Ideal para quem busca supervisão direta, treinos em grupo e participação em eventos esportivos.",
    features: [
      "Treinos coletivos de corrida e caminhada",
      "Avaliação física inicial presencial",
      "Aulas semanais com educador físico",
      "Monitoramento de evolução contínuo",
      "Participação em corridas locais",
      "Suporte presencial prioritário",
      "Acesso à comunidade VIP"
    ],
    popular: true,
    buttonText: "Escolher Pessoal",
    buttonVariant: "default" as const
  },
  {
    name: "Corporativo",
    price: "R$ 127",
    period: "/mês",
    description: "Programa acessível, motivador e de fácil implementação na rotina corporativa. Desenvolvido para transformar equipes através do bem-estar e desenvolvimento pessoal.",
    features: [
      "1 treino presencial por mês",
      "Planilhas de treino online personalizadas",
      "Suporte remoto com profissionais especializados",
      "Relatórios de engajamento e participação",
      "Educador físico, fisioterapeuta e psicólogo",
      "Para níveis iniciante e intermediário",
      "Valores acessíveis com descontos progressivos",
      "Implementação no local da empresa"
    ],
    popular: false,
    buttonText: "Falar com Vendas",
    buttonVariant: "outline" as const
  }
];

const PricingSection = () => {
  const headerRef = useScrollAnimation();
  const plansRef = useScrollAnimation();

  return (
    <section id="planos" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16 scroll-animate">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ fontFamily: '"Luckiest Guy", cursive', fontWeight: '400' }}>
            <span className="text-white">Nossos</span>{" "}
            <span className="text-neon">Planos</span>
          </h2>
          <div className="w-24 h-1 bg-neon mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para sua transformação pessoal ou corporativa
          </p>
        </div>

        {/* Pricing Cards */}
        <div ref={plansRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 scroll-animate">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 border rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-neon ring-2 ring-neon/20 scale-105' 
                  : 'border-gray-700 hover:border-neon/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-neon text-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl lg:text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                {plan.name === "Corporativo" && (
                  <p className="text-gray-400 text-xs mb-2">Até 15 pessoas</p>
                )}
                <p className="text-gray-300 text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-neon mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              {plan.buttonText === "Falar com Vendas" ? (
                <a 
                  href="https://wa.me/5511982931457?text=Olá! Gostaria de saber mais sobre os planos da KAIRUS RUN."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-neon hover:bg-neon/90 text-black font-bold' 
                        : ''
                    }`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </a>
              ) : (
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-neon hover:bg-neon/90 text-black font-bold' 
                      : ''
                  }`}
                  variant={plan.buttonVariant}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Todos os planos incluem garantia de 30 dias. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
