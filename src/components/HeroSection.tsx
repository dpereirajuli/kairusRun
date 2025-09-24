import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-runners.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay with gradient */}
        <div className="absolute inset-0 hero-bg opacity-75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Main Headline */}
        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 animate-slide-up">
          <span className="text-hero-foreground block mb-1 sm:mb-2">ACREDITE NO</span>
          <span 
            className="text-neon block" 
            style={{ 
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5), 0 0 10px hsl(64 100% 50% / 0.5)',
              boxShadow: 'none'
            }}
          >
            SEU PODER
          </span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-hero-foreground text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 sm:mb-10 lg:mb-12 leading-relaxed opacity-90 animate-slide-up px-4" style={{ animationDelay: '0.3s' }}>
        Não é sobre correr mais rápido.
        É sobre correr no tempo certo.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up px-4" style={{ animationDelay: '0.6s' }}>
          <a href="#planos">
            <Button variant="hero" size="xl" className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px]">
              VER PLANOS
            </Button>
          </a>
          <a href="#como-funciona">
            <Button variant="power" size="xl" className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px]">
              COMECE SUA JORNADA
            </Button>
          </a>
        </div>
        
      </div>
      
      {/* Partners Section - Full Width */}
      <div className="absolute bottom-0 left-0 w-full mt-12 sm:mt-16 lg:mt-20 animate-slide-up overflow-hidden" style={{ animationDelay: '0.9s' }}>
        <div className="relative w-full">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-hero-bg to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-hero-bg to-transparent z-10"></div>
          
          <div className="flex animate-scroll-left whitespace-nowrap w-full">
            <div className="flex items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 w-full">
              {/* First set */}
              <span className="text-hero-foreground text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-40 hover:opacity-60 transition-opacity duration-300">KAIRUS</span>
              <span className="text-neon text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-60 hover:opacity-80 transition-opacity duration-300">Run</span>
              <span className="text-hero-foreground text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-40 hover:opacity-60 transition-opacity duration-300">KAIRUS</span>
              <span className="text-neon text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-60 hover:opacity-80 transition-opacity duration-300">Run</span>
              <span className="text-hero-foreground text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-40 hover:opacity-60 transition-opacity duration-300">KAIRUS</span>
              <span className="text-neon text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-60 hover:opacity-80 transition-opacity duration-300">Run</span>
              
              {/* Duplicate for seamless loop */}
              <span className="text-hero-foreground text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-40 hover:opacity-60 transition-opacity duration-300">KAIRUS</span>
              <span className="text-neon text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-60 hover:opacity-80 transition-opacity duration-300">Run</span>
              <span className="text-hero-foreground text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-40 hover:opacity-60 transition-opacity duration-300">KAIRUS</span>
              <span className="text-neon text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-60 hover:opacity-80 transition-opacity duration-300">Run</span>
              <span className="text-hero-foreground text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-40 hover:opacity-60 transition-opacity duration-300">KAIRUS</span>
              <span className="text-neon text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-60 hover:opacity-80 transition-opacity duration-300">Run</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-float hidden sm:block">
        <div className="w-6 h-10 border-2 border-neon rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;