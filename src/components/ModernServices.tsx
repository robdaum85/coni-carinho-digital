
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
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title">Serviços</h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto mt-6">
            Acompanhe sua gestação with o cuidado que você merece. Veja como posso te ajudar:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-100 transition-colors">
                <service.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-playfair font-medium mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <img
                src="/lovable-uploads/ce2ba223-9ca2-4c00-a8df-139b4a8cd831.png"
                alt="Ambiente acolhedor do consultório da Dra. Coni"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-playfair font-medium mb-6 text-primary">
              Atendimento personalizado para cada paciente
            </h3>
            <p className="text-lg mb-6 text-gray-600 font-inter leading-relaxed">
              Cada gestação é única e merece atenção individualizada. O cuidado
              pré-natal é adaptado às necessidades específicas de cada mãe e bebê.
            </p>
            <p className="text-lg text-gray-600 font-inter leading-relaxed">
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
