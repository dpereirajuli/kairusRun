import { CheckCircle, Target, CreditCard, Users, TrendingUp, Award } from "lucide-react";

const roadmapSteps = [
  {
    icon: CreditCard,
    title: "Escolha do Plano",
    description: "Você escolhe o plano ideal e faz a compra. Processo seguro e garantia de 30 dias.",
    color: "bg-red-500",
    year: "1º Passo"
  },
  {
    icon: CheckCircle,
    title: "Primeiro Contato",
    description: "Após a compra, entramos em contato para agendar uma conversa inicial e entender suas necessidades.",
    color: "bg-orange-500",
    year: "2º Passo"
  },
  {
    icon: Target,
    title: "Avaliação Profissional",
    description: "Nossos especialistas fazem uma análise completa para identificar o melhor programa para você.",
    color: "bg-yellow-500",
    year: "3º Passo"
  },
  {
    icon: Users,
    title: "Assessoria Completa",
    description: "Agora você tem acesso total à nossa assessoria, acompanhamento e materiais personalizados.",
    color: "bg-green-500",
    year: "4º Passo"
  },
  {
    icon: Award,
    title: "Resultados",
    description: "Transformação completa com resultados mensuráveis e duradouros em sua vida.",
    color: "bg-purple-500",
    year: "5º Passo"
  }
];

const RoadmapSection = () => {
  return (
    <section id="como-funciona" className="py-24 sm:py-32 lg:py-48 xl:py-56 px-4 sm:px-6 lg:px-8 bg-yellow-500 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 sm:mb-24 lg:mb-28">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ fontFamily: '"Luckiest Guy", cursive', fontWeight: '400' }}>
            <span className="text-black">Como</span>{" "}
            <span className="text-black">Funciona</span>
          </h2>
          <div className="w-24 h-1 bg-neon mx-auto rounded-full mb-6"></div>
           <p className="text-gray-800 text-lg max-w-2xl mx-auto">
            Descubra como funciona nossa assessoria pessoal, desde a compra do plano até sua transformação completa, incluindo participação em corridas locais
          </p>
        </div>

        {/* Desktop/Tablet Roadmap */}
        <div className="hidden md:block">
          <div className="relative">
            {/* SVG Road Path */}
            <svg 
              className="absolute top-1/2 left-0 w-full h-32 transform -translate-y-1/2" 
              viewBox="0 0 1200 100" 
              preserveAspectRatio="none"
            >
              <path
                d="M50,50 Q300,20 600,50 T1150,50"
                stroke="#374151"
                strokeWidth="8"
                fill="none"
                className="road-path"
              />
              {/* Road center line */}
              <path
                d="M50,50 Q300,20 600,50 T1150,50"
                stroke="#ffffff"
                strokeWidth="2"
                fill="none"
                strokeDasharray="10,10"
                className="road-center-line"
              />
            </svg>

            {/* Roadmap Steps */}
            <div className="relative z-10 grid grid-cols-5 gap-8">
              {roadmapSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className={`absolute ${
                    index % 2 === 0 ? '-top-20' : 'top-20'
                  } left-1/2 transform -translate-x-1/2 w-56`}>
                     <div className="bg-black border border-gray-600 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {/* Icon */}
                      <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      
                       {/* Year */}
                       <div className="text-center mb-2">
                         <span className="text-sm font-bold text-white">{step.year}</span>
                       </div>
                       
                       {/* Title */}
                       <h3 className="text-lg font-bold text-center mb-2 text-white">
                         {step.title}
                       </h3>
                       
                       {/* Description */}
                       <p className="text-sm text-gray-300 text-center leading-relaxed">
                         {step.description}
                       </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-300"></div>
            
            {/* Timeline Steps */}
            <div className="space-y-8">
              {roadmapSteps.map((step, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-16 h-16 ${step.color} rounded-full flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="ml-6 flex-1">
                     <div className="bg-black border border-gray-600 rounded-lg p-4 shadow-lg">
                      {/* Year */}
                      <div className="mb-2">
                        <span className="text-sm font-bold text-white">{step.year}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg font-bold mb-2 text-white">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
