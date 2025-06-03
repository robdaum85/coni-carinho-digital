
import { Baby, Users, ShieldCheck, Pill, Stethoscope } from "lucide-react";

const ModernServices = () => {
  const services = [
    {
      title: "Pré-natal individualizado",
      description: "Acompanhamento personalizado durante toda a gestação, adaptado às suas necessidades específicas.",
      icon: Baby
    },
    {
      title: "Parto humanizado",
      description: "Respeito às escolhas da mãe, com foco no bem-estar físico e emocional durante o nascimento.",
      icon: Users
    },
    {
      title: "Obstetrícia de alto risco",
      description: "Cuidado especializado para gestações que demandam atenção adicional e monitoramento específico.",
      icon: ShieldCheck
    },
    {
      title: "Inserção de DIU e Implanon",
      description: "Métodos contraceptivos de longa duração com procedimento minimamente invasivo e acompanhamento.",
      icon: Pill
    },
    {
      title: "Ginecologia geral",
      description: "Atendimento integral à saúde da mulher em todas as fases da vida, com atenção e cuidado.",
      icon: Stethoscope
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title text-modern-primary font-playfair font-medium mb-4">
            Serviços
          </h2>
          <p className="text-lg text-modern-text-secondary font-inter max-w-2xl mx-auto mt-6">
            Acompanhe sua gestação com o cuidado que você merece. Veja como posso te ajudar:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                <service.icon size={24} className="text-modern-primary" />
              </div>
              <h3 className="text-xl font-playfair font-medium mb-3 text-modern-text-primary">
                {service.title}
              </h3>
              <p className="text-modern-text-secondary font-inter leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Hover Button */}
              <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border-2 border-modern-primary text-modern-primary px-6 py-2 rounded-full font-inter font-medium hover:bg-modern-primary hover:text-white">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in-up">
          <div className="hover-lift">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/lovable-uploads/ce2ba223-9ca2-4c00-a8df-139b4a8cd831.png"
                alt="Ambiente acolhedor do consultório da Dra. Coni"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-playfair font-medium mb-4 text-modern-primary">
              Atendimento personalizado para cada paciente
            </h3>
            <p className="text-lg mb-6 text-modern-text-secondary font-inter leading-relaxed">
              Cada gestação é única e merece atenção individualizada. O cuidado
              pré-natal é adaptado às necessidades específicas de cada mãe e bebê.
            </p>
            <p className="text-lg text-modern-text-secondary font-inter leading-relaxed">
              Com formação especializada em obstetrícia de alto risco, Dra. Coni
              proporciona segurança e tranquilidade mesmo em casos mais complexos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernServices;
