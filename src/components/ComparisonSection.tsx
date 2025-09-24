const ComparisonSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-yellow-500 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4" style={{ fontFamily: '"Luckiest Guy", cursive', fontWeight: '400' }}>
            <span className="text-black">Qual a</span>{" "}
            <span className="text-white">Diferença?</span>
          </h2>
          <div className="w-24 h-1 bg-neon mx-auto rounded-full mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Entenda as diferenças entre nossos planos e escolha o que melhor se adapta ao seu estilo de vida
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Plano Pessoal */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-neon">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">Plano Pessoal</h3>
              <p className="text-black font-semibold text-lg">Assessoria Presencial Completa</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-neon rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Treinos Coletivos Presenciais</h4>
                  <p className="text-gray-600 text-sm">Treinos de corrida e caminhada em grupo com supervisão direta dos nossos profissionais</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-neon rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Avaliação Física Inicial</h4>
                  <p className="text-gray-600 text-sm">Avaliação completa presencial para determinar seu nível atual e objetivos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-neon rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Aulas Semanais com Educador Físico</h4>
                  <p className="text-gray-600 text-sm">Sessões presenciais semanais com orientação técnica e correção de movimentos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-neon rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Monitoramento de Evolução</h4>
                  <p className="text-gray-600 text-sm">Acompanhamento presencial do seu progresso com ajustes personalizados</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-neon rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Participação em Corridas Locais</h4>
                  <p className="text-gray-600 text-sm">Inscrições e participação em eventos esportivos com a marca da empresa</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-neon rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Suporte Presencial Completo</h4>
                  <p className="text-gray-600 text-sm">Acesso direto aos profissionais, correção de técnica e motivação em tempo real</p>
                </div>
              </div>
            </div>
          </div>

          {/* Planilhas */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">Planilhas</h3>
              <p className="text-gray-600 font-semibold text-lg">Treino Online Completo</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Planilhas Digitais Personalizadas</h4>
                  <p className="text-gray-600 text-sm">Treinos estruturados para Iniciante, Intermediário e Avançado, adaptados ao seu nível</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Flexibilidade Total de Horários</h4>
                  <p className="text-gray-600 text-sm">Treine quando e onde quiser, sem compromissos de horários fixos</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Acompanhamento por Mensagem</h4>
                  <p className="text-gray-600 text-sm">Suporte online via WhatsApp para dúvidas e orientações</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Estrutura Semanal Progressiva</h4>
                  <p className="text-gray-600 text-sm">Planos que evoluem gradualmente para maximizar seus resultados</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Dicas de Alongamento e Recuperação</h4>
                  <p className="text-gray-600 text-sm">Orientações completas para prevenção de lesões e recuperação muscular</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Atualizações Mensais</h4>
                  <p className="text-gray-600 text-sm">Seu plano é atualizado mensalmente para acompanhar sua evolução</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-black text-lg mb-6">
            Ainda tem dúvidas? Fale conosco e encontre o plano ideal para você!
          </p>
          <a 
            href="https://wa.me/5511982931457" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-neon text-black font-bold rounded-full hover:bg-neon/90 transition-colors duration-300"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
