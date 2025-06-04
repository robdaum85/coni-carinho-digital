
import { Baby, Users, ShieldCheck, Pill, Stethoscope, UserCheck } from "lucide-react";

const ModernServices = () => {
  const services = [
    {
      title: "Pré-natal personalizado",
      description: "Acompanhamento feito especialmente para você, respeitando suas necessidades e criando um vínculo de confiança que durará toda a gestação.",
      icon: Baby
    },
    {
      title: "Parto humanizado",
      description: "Seu parto, suas escolhas. Estarei ao seu lado garantindo que este momento seja vivido com respeito, segurança e da forma que você sonhou.",
      icon: Users
    },
    {
      title: "Obstetrícia de alto risco",
      description: "Mesmo em gestações complexas, você terá todo o cuidado especializado e o suporte emocional necessário para viver essa experiência com tranquilidade.",
      icon: ShieldCheck
    },
    {
      title: "Métodos contraceptivos",
      description: "Orientação cuidadosa sobre DIU e Implanon, ajudando você a escolher o método que melhor se adapta ao seu estilo de vida e planos futuros.",
      icon: Pill
    },
    {
      title: "Ginecologia integral",
      description: "Cuidado completo da sua saúde íntima em todas as fases da vida, com consultas acolhedoras que respeitam suas individualidades e necessidades.",
      icon: Stethoscope
    },
    {
      title: "Cuidado para adolescentes",
      description: "Atendimento especial para jovens, criando um espaço seguro para conversas sobre saúde íntima, puberdade e bem-estar emocional.",
      icon: UserCheck
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title">Como Posso Cuidar de Você</h2>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto mt-6">
            Cada serviço é pensado para oferecer não apenas cuidado médico, mas também o acolhimento e a segurança que você merece.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Additional Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <img 
                alt="Ambiente acolhedor do consultório da Dra. Coni" 
                className="w-full h-auto object-cover" 
                loading="lazy" 
                src="/lovable-uploads/78f9170c-561e-42f8-b304-7075152000b7.png" 
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-playfair font-medium mb-6 text-primary">
              Um cuidado pensado especialmente para você
            </h3>
            <p className="text-lg mb-6 text-gray-600 font-inter leading-relaxed">
              Cada consulta é um momento dedicado inteiramente a você e ao seu bebê. 
              Aqui, suas dúvidas são escutadas, seus medos são acolhidos e seus sonhos são respeitados.
            </p>
            <p className="text-lg text-gray-600 font-inter leading-relaxed">
              Com especialização em obstetrícia de alto risco, ofereço a segurança técnica 
              que você precisa, envolvida no carinho humano que toda gestante merece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernServices;
