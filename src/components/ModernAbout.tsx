
const ModernAbout = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="py-20 bg-modern-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 animate-fade-in-up">
            <h2 className="section-title text-modern-primary font-playfair font-medium mb-6">
              Sobre a Dra. Coni Waldow
            </h2>
            
            <p className="text-lg mb-6 text-modern-text-secondary font-inter leading-relaxed">
              Sou médica formada pela UFPR com especialização em Ginecologia e Obstetrícia. 
              Também sou especialista em Obstetrícia de Alto Risco pela UNIFESP.
            </p>
            
            <p className="text-lg mb-6 text-modern-text-secondary font-inter leading-relaxed">
              Minha missão é oferecer um atendimento acolhedor e seguro para gestantes, 
              respeitando seus desejos e cuidando de cada detalhe — seja em gestações de baixo risco 
              ou casos mais delicados como trombofilias, hipertensão, diabetes gestacional ou lúpus.
            </p>
            
            <blockquote className="text-lg mb-8 font-playfair italic text-modern-primary leading-relaxed border-l-4 border-modern-primary pl-6">
              "Cada gestação é única. Cada mulher merece respeito, cuidado e um parto com segurança e dignidade."
            </blockquote>
            
            <button
              onClick={() => scrollToSection('contato')}
              className="btn-primary"
            >
              Entre em contato
            </button>
          </div>
          
          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-in-up">
            <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-md hover-lift">
              <img
                src="/lovable-uploads/02c9d300-d10a-441f-ab9c-8a50fb743c3d.png"
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
