
import { ChevronDown } from "lucide-react";

const ModernHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/2516b20b-786c-48c8-a7c3-6e5a8a0d9363.png" 
          alt="Dra. Coni Waldow em atendimento profissional" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl py-0 my-[6px] pt-24 md:pt-0">
        <div className="fade-in space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium text-white leading-tight max-w-4xl mx-auto drop-shadow-lg">
            Cuidado Humanizado em Todas as Fases da Sua Jornada
          </h1>
          
          <p className="text-xl md:text-2xl font-inter font-light text-white/95 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
            Do pré-natal ao parto, você merece um acompanhamento que respeita seus desejos e cuida de cada momento com carinho e segurança.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a 
              href="https://wa.me/5541999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Coni%20Waldow" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary text-lg px-8 py-4 w-full sm:w-auto"
            >
              Agende Sua Consulta
            </a>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-inter font-medium text-lg transition-all duration-300 hover:bg-white hover:text-gray-900 w-full sm:w-auto"
            >
              Conheça Minha História
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-8">
            <button 
              className="animate-bounce cursor-pointer inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/50 hover:border-white transition-colors" 
              onClick={() => scrollToSection('sobre')} 
              aria-label="Rolar para próxima seção"
            >
              <ChevronDown size={24} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
