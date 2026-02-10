import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ModernTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const testimonials = [
    {
      text: "A Dra. Coni foi uma luz no momento mais importante da minha vida. Cuidou de mim e do meu bebê com tanto amor que nunca vou esquecer. Me senti segura e acolhida em cada consulta.",
      name: "Mariana C.",
      location: "Curitiba"
    },
    {
      text: "Descobrir minha trombofilia foi assustador, mas a Dra. Coni me tranquilizou desde o primeiro momento. Graças ao cuidado dela, vivi um parto humanizado e seguro.",
      name: "Juliane P.",
      location: "Ponta Grossa"
    },
    {
      text: "Foi como ter uma amiga médica me acompanhando. Ela respeitou todas as minhas escolhas e me deu força quando eu mais precisava. Recomendo de coração!",
      name: "Larissa M.",
      location: "São José dos Pinhais"
    },
    {
      text: "Minha gestação de alto risco não foi fácil, mas ter a Dra. Coni ao meu lado fez toda a diferença. Ela me deu confiança e cuidado em cada momento.",
      name: "Ana Paula S.",
      location: "Curitiba"
    },
    {
      text: "Profissional excepcional e ser humano incrível! Me acompanhou com tanto carinho que transformou minha experiência de maternidade. Gratidão eterna!",
      name: "Carolina R.",
      location: "Araucária"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => prev + slidesToShow >= testimonials.length ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? Math.max(0, testimonials.length - slidesToShow) : prev - 1);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentSlide + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title text-modern-primary font-playfair font-medium mb-4">
            Histórias reais de mães que confiaram em mim
          </h2>
          <p className="text-lg text-modern-text-secondary font-inter max-w-2xl mx-auto mt-6">
            Cada depoimento representa uma jornada única de amor, cuidado e realização.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-modern-primary hover:bg-modern-primary hover:text-white transition-all duration-300 hover-scale" 
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-modern-primary hover:bg-modern-primary hover:text-white transition-all duration-300 hover-scale" 
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonials Grid */}
          <div className="mx-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div key={index} className="testimonial-card animate-fade-in-up" itemScope itemType="https://schema.org/Review" itemProp="review">
                  <p className="text-modern-text-secondary font-inter italic mb-6 pt-8 leading-relaxed" itemProp="reviewBody">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <div className="w-1 h-10 bg-modern-primary/30 mr-3 rounded-full"></div>
                    <div>
                      <p className="font-inter font-semibold text-modern-text-primary" itemProp="name">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-modern-text-muted font-inter">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / slidesToShow) }).map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentSlide(index * slidesToShow)} 
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentSlide / slidesToShow) === index 
                    ? 'bg-modern-primary' 
                    : 'bg-modern-border hover:bg-modern-primary/50'
                }`} 
                aria-label={`Go to slide ${index + 1}`} 
              />
            ))}
          </div>
        </div>

        {/* Bottom Image */}
        <div className="flex justify-center animate-fade-in-up">
          <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-lg hover-lift">
            <img 
              alt="Mãe feliz com seu bebê após parto humanizado" 
              className="w-full h-auto object-cover" 
              loading="lazy" 
              src="/lovable-uploads/84414bf5-5064-4600-843b-408056150760.png" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernTestimonials;
