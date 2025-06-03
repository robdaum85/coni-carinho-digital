
import { ChevronDown } from "lucide-react";

const ModernHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/lovable-uploads/48c699a6-333d-4f18-b61e-40561fde5197.png" 
          alt="Consultório acolhedor da Dra. Coni Waldow" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="hero-title font-playfair font-medium mb-6 text-white leading-tight">
            Parto Humanizado & Obstetrícia de Alto Risco
          </h1>
          <p className="text-lg md:text-xl mb-8 font-inter font-light text-white/90 leading-relaxed max-w-2xl mx-auto">
            Acompanho você com confiança, empatia e acolhimento.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar Pré-Natal
            </a>
            <button
              onClick={() => scrollToSection('sobre')}
              className="btn-secondary"
            >
              Conheça Meu Trabalho
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-slow">
            <ChevronDown 
              size={32} 
              className="text-white/70 mx-auto cursor-pointer"
              onClick={() => scrollToSection('sobre')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
