
const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Chuviscos Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="particles-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* About Content - Text and Image */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 mt-8 sm:mt-12 lg:mt-16">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6" style={{ fontFamily: '"Luckiest Guy", cursive', fontWeight: '400' }}>
              <span className="text-white">Quem</span>{" "}
              <span className="text-white">Somos</span>
            </h2>
            <div className="w-24 h-1 bg-neon rounded-full mb-6"></div>
            <p className="text-white text-lg sm:text-xl leading-relaxed">
              KAIRUS RUN É MAIS QUE UM GRUPO DE CORRIDA.<br/><br/>
              É UM RITUAL COLETIVO DE PRESENÇA, ONDE CADA PASSO É UM ATO DE LIBERDADE, CONSCIÊNCIA E FORÇA INTERNA.<br/><br/>
              AQUI, NÃO SE CORRE POR VAIDADE. CORRE-SE POR TRANSFORMAÇÃO.<br/><br/>
              NÃO SEGUIMOS O TEMPO DO RELÓGIO, MAS O TEMPO DO CORPO E DA ALMA.
            </p>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2">
            <img 
              src="/logo.jpeg" 
              alt="KAIRUS RUN Logo" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AboutSection;
