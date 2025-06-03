
import { ChevronDown } from "lucide-react";

const ModernHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/2516b20b-786c-48c8-a7c3-6e5a8a0d9363.png" 
          alt="Dra. Coni Waldow em atendimento profissional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-medium mb-6 text-white leading-tight">
            Parto Humanizado & Obstetrícia de Alto Risco
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-inter font-light text-white opacity-90 leading-relaxed max-w-3xl mx-auto">
            Acompanho você com confiança, empatia e acolhimento.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Agendar Pré-Natal
            </a>
            <button
              onClick={() => scrollToSection('sobre')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-inter font-medium text-lg transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Conheça Meu Trabalho
            </button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className="animate-bounce cursor-pointer" 
            onClick={() => scrollToSection('sobre')}
          >
            <ChevronDown size={32} className="text-white opacity-70 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
