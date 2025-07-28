
import { Check } from "lucide-react";

const ModernDifferentials = () => {
  const differentials = [
    {
      title: "Atendimento que realmente te escuta",
      description: "Cada consulta é um espaço seguro onde suas dúvidas, medos e sonhos são acolhidos com carinho e respeito genuíno."
    },
    {
      title: "Em busca de um parto mais seguro",
      description: "Compreendendo que o parto normal é possível para a maioria das gestantes e também respeitando a sua decisão individualizada, baseada no conhecimento adquirido durante o pré-natal."
    },
    {
      title: "Segurança em casos complexos",
      description: "Experiência especializada em alto risco, oferecendo tranquilidade técnica quando você mais precisa de cuidado."
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
            Por que escolher estar comigo nesta jornada?
          </h2>
          <p className="text-lg text-modern-text-secondary font-inter max-w-2xl mx-auto mt-6">
            Porque você merece viver a maternidade com segurança, respeito e muito carinho.
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
            Vamos começar essa jornada juntas
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModernDifferentials;
