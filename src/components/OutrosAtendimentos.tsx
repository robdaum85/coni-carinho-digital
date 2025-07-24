import { Pill, UserCheck, Stethoscope } from "lucide-react";

const OutrosAtendimentos = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Métodos Contraceptivos",
      description: "Orientação sobre cada método disponível, ajudando você a escolher o método que melhor se adapta ao seu estilo de vida e planos futuros. Isso inclui também inserção de DIU e Implanon.",
      icon: Pill
    },
    {
      title: "Cuidados para adolescentes",
      description: "Atendimento especial para jovens, criando um espaço seguro para conversas sobre saúde íntima, puberdade e bem-estar emocional.",
      icon: UserCheck
    },
    {
      title: "Ginecologia Integral",
      description: "Cuidado completo da sua saúde íntima em todas as fases da vida, inclusive a menopausa, com consultas acolhedoras que respeitam a sua individualidade e necessidade.",
      icon: Stethoscope
    }
  ];

  return (
    <section id="outros-atendimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title mb-6">
            Dra você faz apenas obstetrícia?
          </h2>
          <p className="text-xl text-gray-600 font-inter leading-relaxed max-w-3xl mx-auto">
            Não, também realizo atendimento nas seguintes áreas:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group fade-in" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-100 transition-colors">
                <service.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-playfair font-medium mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed text-left">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center fade-in">
          <button
            onClick={() => scrollToSection('contato')}
            className="btn-primary"
          >
            Agende sua consulta
          </button>
        </div>
      </div>
    </section>
  );
};

export default OutrosAtendimentos;