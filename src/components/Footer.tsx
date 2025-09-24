import { Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.jpeg" 
                alt="KAIRUS RUN Logo" 
                className="h-12 w-12 rounded-full mr-3"
              />
              <h3 className="text-2xl font-bold" style={{ fontFamily: '"Luckiest Guy", cursive', fontWeight: '400' }}>
                KAIRUS RUN
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos vidas através do bem-estar e desenvolvimento pessoal. 
              Nossa missão é empoderar pessoas e organizações para alcançarem seu potencial máximo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-neon transition-colors duration-300">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#planos" className="text-gray-300 hover:text-neon transition-colors duration-300">
                  Nossos Planos
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-neon transition-colors duration-300">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-neon transition-colors duration-300">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-neon mr-3" />
                <span className="text-gray-300">(11) 98293-1457</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-neon mr-3" />
                <span className="text-gray-300">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Dtech Labs. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-neon text-sm transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-neon text-sm transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
