
const ModernAbout = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="fade-in space-y-8">
            <h2 className="section-title text-left">
              Sobre a Dra. Coni Waldow
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed font-inter">
                Sou médica formada pela UFPR com especialização em Ginecologia e Obstetrícia, 
                e especialista em Obstetrícia de Alto Risco pela UNIFESP. Atendo em Curitiba.
              </p>
              
              <p className="text-lg leading-relaxed font-inter">
                Acredito que cada gestação é única e que você merece um cuidado que vai além do protocolo médico. 
                Meu compromisso é estar ao seu lado, oferecendo segurança técnica e acolhimento humano, 
                seja em gestações de baixo risco ou em casos que demandam atenção especial.
              </p>
              
              <p className="text-lg leading-relaxed font-inter">
                Juntas, vamos construir uma experiência de maternidade que respeita suas escolhas 
                e celebra esse momento tão especial da sua vida.
              </p>
              
              <blockquote className="text-xl font-playfair italic text-primary leading-relaxed border-l-4 border-primary pl-6 py-4 bg-white rounded-r-lg shadow-sm">
                "Cada gestação é única. Cada mulher merece respeito, cuidado e um parto com segurança e dignidade."
              </blockquote>
            </div>
            
            <div className="pt-4">
              <button
                onClick={() => scrollToSection('contato')}
                className="btn-primary"
              >
                Vamos conversar
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center lg:justify-end fade-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-md lg:max-w-lg transition-transform duration-300 hover:-translate-y-2">
              <img
                src="/lovable-uploads/46c8404b-585c-4e04-808d-408e99eeaddc.png"
                alt="Dra. Coni Waldow em atendimento profissional"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;
