
const ModernAbout = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="fade-in space-y-6">
            <h2 className="section-title text-left">
              Sobre a Dra. Coni Waldow
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Sou médica formada pela UFPR com especialização em Ginecologia e Obstetrícia. 
                Também sou especialista em Obstetrícia de Alto Risco pela UNIFESP.
              </p>
              
              <p className="text-lg leading-relaxed">
                Minha missão é oferecer um atendimento acolhedor e seguro para gestantes, 
                respeitando seus desejos e cuidando de cada detalhe — seja em gestações de baixo risco 
                ou casos mais delicados como trombofilias, hipertensão, diabetes gestacional ou lúpus.
              </p>
              
              <blockquote className="text-xl font-playfair italic text-primary leading-relaxed border-l-4 border-primary pl-6 py-4 bg-gray-50 rounded-r-lg">
                "Cada gestação é única. Cada mulher merece respeito, cuidado e um parto com segurança e dignidade."
              </blockquote>
            </div>
            
            <div className="pt-4">
              <button
                onClick={() => scrollToSection('contato')}
                className="btn-primary"
              >
                Entre em contato
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center lg:justify-end fade-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-md lg:max-w-lg transition-transform duration-300 hover:-translate-y-2">
              <img
                src="/lovable-uploads/8ef1a133-96f7-4730-b115-b5050e3e2b72.png"
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
