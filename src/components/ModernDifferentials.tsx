
import { Check } from "lucide-react";

const ModernDifferentials = () => {
  const differentials = [
    {
      title: "Atendimento empático e humanizado",
      description: "Escuta ativa e respeito às suas escolhas e individualidades em todos os momentos."
    },
    {
      title: "Atendimento por convênio e particular",
      description: "Flexibilidade de atendimento para maior acessibilidade às pacientes."
    },
    {
      title: "Disponibilidade via WhatsApp",
      description: "Suporte e esclarecimento de dúvidas para maior tranquilidade durante a gestação."
    },
    {
      title: "Experiência com casos de alto risco",
      description: "Segurança e expertise para o manejo de gestações complexas e situações especiais."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="diferenciais" className="py-20 bg-modern-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title text-modern-primary font-playfair font-medium mb-4">
            Por que escolher a Dra. Coni?
          </h2>
          <p className="text-lg text-modern-text-secondary font-inter max-w-2xl mx-auto mt-6">
            Compromisso com seu bem-estar e com a experiência que você merece viver.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {differentials.map((item, index) => (
            <div 
              key={index} 
              className="modern-card flex items-start gap-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-8 h-8 bg-modern-secondary rounded-full flex items-center justify-center shrink-0 mt-1">
                <Check size={16} className="text-modern-primary" />
              </div>
              <div>
                <h3 className="text-lg font-playfair font-medium mb-2 text-modern-text-primary">
                  {item.title}
                </h3>
                <p className="text-modern-text-secondary font-inter leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in-up">
          <button
            onClick={() => scrollToSection('contato')}
            className="btn-primary hover-scale"
          >
            Agende sua consulta
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModernDifferentials;
