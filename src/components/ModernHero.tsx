
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
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="/lovable-uploads/2516b20b-786c-48c8-a7c3-6e5a8a0d9363.png" 
          alt="Dra. Coni Waldow em atendimento profissional" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center max-w-4xl">
        <div className="opacity-0 animate-[fade-in_0.6s_ease-out_forwards]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium mb-6 text-white leading-tight">
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
              className="bg-primary text-white px-7 py-3 rounded-full font-inter font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Agendar Pré-Natal
            </a>
            <button
              onClick={() => scrollToSection('sobre')}
              className="bg-transparent border-2 border-white text-white px-7 py-3 rounded-full font-inter font-medium transition-all duration-300 hover:bg-primary hover:border-primary"
            >
              Conheça Meu Trabalho
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('sobre')}>
            <ChevronDown 
              size={32} 
              className="text-white/70 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
