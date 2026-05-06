import { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Heart, Baby, ShieldCheck, MessageCircle, Quote } from 'lucide-react';

type Testimonial = {
  name: string;
  initials: string;
  paragraphs: string[];
};

const testimonials: Testimonial[] = [
  {
    name: 'Bruna Mendes Paiva',
    initials: 'BM',
    paragraphs: [
      'Não existem palavras suficientes para agradecer tudo o que a Dra. Coni representou na minha jornada até o nascimento do Thomas.',
      'A calma, a presença e a confiança que ela transmite foram essenciais para que eu conseguisse viver o parto normal com que sempre sonhei.',
      'A Dra. Coni é uma profissional excepcional, mas acima de tudo, é uma pessoa humana, sensível e acolhedora.',
    ],
  },
  {
    name: 'Izadora Silveira',
    initials: 'IS',
    paragraphs: [
      'Dra. Coni é uma médica excepcional! Muito cuidadosa, gentil e atenciosa.',
      'Nossos filhos não poderiam ter nascido com melhor médica!',
    ],
  },
  {
    name: 'Gabriel Couto',
    initials: 'GC',
    paragraphs: ['Excelente profissional. Sempre muito solícita, paciente, muito correta.'],
  },
  {
    name: 'Mariana Couto',
    initials: 'MC',
    paragraphs: ['Médica excelente! Humana! Tornou nossa experiência de parto normal possível e incrível!'],
  },
  {
    name: 'Rachel Lobato',
    initials: 'RL',
    paragraphs: ['Meu parto foi excelente, tranquila e humanizada!'],
  },
  {
    name: 'Sibele Alberti',
    initials: 'SA',
    paragraphs: [
      'Profissional extremamente atenciosa, empática e competente.',
      'Durante todo o acompanhamento, senti-me acolhida e bem cuidada.',
    ],
  },
  {
    name: 'Jassilane Granemann',
    initials: 'JG',
    paragraphs: ['Profissional com atendimento humanizado, equilibrado e técnico.'],
  },
  {
    name: 'Psicóloga Renata Dallegrave',
    initials: 'RD',
    paragraphs: ['Não é só uma médica, é alguém com um olhar atento às necessidades e emoções.'],
  },
];

const metrics = [
  { icon: Star, label: 'Avaliações 5 estrelas' },
  { icon: Heart, label: 'Atendimento humanizado' },
  { icon: Baby, label: 'Pré-natal e parto acolhedor' },
  { icon: ShieldCheck, label: 'Segurança em toda gestação' },
];

const floatingKeywords = [
  'acolhimento',
  'segurança',
  'parto humanizado',
  'empatia',
  'cuidado',
  'confiança',
  'humanização',
];

const GoogleLogo = () => (
  <svg viewBox="0 0 48 48" className="w-3.5 h-3.5" aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.6l6.2 5.2C41 35.8 44 30.4 44 24c0-1.3-.1-2.4-.4-3.5z"/>
  </svg>
);

const Stars = () => (
  <div className="flex gap-0.5" aria-label="5 de 5 estrelas">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={16} className="fill-amber-400 text-amber-400" aria-hidden="true" />
    ))}
  </div>
);

const ReviewCard = ({ t, index }: { t: Testimonial; index: number }) => (
  <article
    className="group relative h-full bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(230,90,126,0.08)] hover:shadow-[0_12px_40px_rgba(230,90,126,0.18)] border border-coni-light-pink/40 hover:border-coni-pink/40 transition-all duration-500 hover:-translate-y-1 animate-fade-in flex flex-col"
    style={{ animationDelay: `${index * 80}ms` }}
    itemScope
    itemType="https://schema.org/Review"
    itemProp="review"
  >
    <Quote
      className="absolute top-5 right-5 w-10 h-10 text-coni-light-pink/70 group-hover:text-coni-pink/30 transition-colors"
      aria-hidden="true"
    />

    <header className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-coni-light-pink to-amber-100 flex items-center justify-center font-playfair font-semibold text-coni-pink shadow-sm shrink-0">
        {t.initials}
      </div>
      <div className="min-w-0">
        <p
          className="font-inter font-semibold text-coni-text-primary truncate"
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person"
        >
          <span itemProp="name">{t.name}</span>
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <Stars />
          <span className="inline-flex items-center gap-1 text-[10px] font-inter font-medium text-coni-text-muted bg-coni-beige px-1.5 py-0.5 rounded-full border border-coni-light-pink/50">
            <GoogleLogo />
            Google Reviews
          </span>
        </div>
      </div>
    </header>

    <div
      className="space-y-3 text-coni-text-secondary font-inter italic leading-relaxed text-[15px] relative z-10"
      itemProp="reviewBody"
    >
      {t.paragraphs.map((p, i) => (
        <p key={i}>"{p}"</p>
      ))}
    </div>

    <meta itemProp="reviewRating" content="5" />
  </article>
);

const ModernTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      '(*SITE - Depoimentos*) - Olá Dra. Coni, gostaria de agendar uma consulta.',
    );
    window.open(`https://wa.me/5541998943285?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const next = () => setCurrentSlide((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrentSlide((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  return (
    <section
      id="depoimentos"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#fdfaf8' }}
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, #ffe4ea 0%, transparent 70%)' }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, #f5e6c8 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-flex items-center gap-2 text-xs font-inter font-medium tracking-widest uppercase text-coni-pink mb-4">
            <span className="h-px w-8 bg-coni-pink/40" />
            Depoimentos de pacientes
            <span className="h-px w-8 bg-coni-pink/40" />
          </span>
          <h2 className="font-playfair font-medium text-3xl md:text-5xl text-coni-text-primary mb-5 leading-tight">
            Histórias reais de <em className="text-coni-pink not-italic">acolhimento</em> e confiança
          </h2>
          <p className="text-base md:text-lg text-coni-text-secondary font-inter max-w-3xl mx-auto leading-relaxed">
            Cada gestação carrega emoções únicas. Conheça relatos reais de pacientes que viveram esse
            momento com segurança, acolhimento e cuidado humanizado ao lado da Dra. Coni Waldow.
          </p>
        </div>

        {/* Metrics strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16 max-w-5xl mx-auto">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-4 border border-coni-light-pink/50 shadow-sm hover:shadow-md hover:border-coni-pink/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coni-light-pink to-amber-50 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-coni-pink" />
                </div>
                <span className="text-sm font-inter font-medium text-coni-text-primary leading-tight">
                  {m.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Reviews — grid on desktop, carousel on mobile */}
        {!isMobile ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t, i) => (
              <ReviewCard key={t.name} t={t} index={i} />
            ))}
          </div>
        ) : (
          <div className="relative mb-16">
            <div className="px-2">
              <ReviewCard t={testimonials[currentSlide]} index={0} />
            </div>
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prev}
                aria-label="Depoimento anterior"
                className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-coni-pink hover:bg-coni-pink hover:text-white transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="font-inter text-sm text-coni-text-muted">
                {currentSlide + 1} / {testimonials.length}
              </span>
              <button
                onClick={next}
                aria-label="Próximo depoimento"
                className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-coni-pink hover:bg-coni-pink hover:text-white transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Floating keywords */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 max-w-3xl mx-auto">
          {floatingKeywords.map((kw, i) => (
            <span
              key={kw}
              className="px-4 py-2 rounded-full text-sm font-inter text-coni-text-secondary bg-white/80 border border-amber-200/60 shadow-sm animate-float-soft"
              style={{ animationDelay: `${i * 0.4}s` }}
            >
              {kw}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-inter font-semibold text-white bg-gradient-to-r from-coni-pink to-[#d44970] shadow-lg shadow-coni-pink/30 hover:shadow-xl hover:shadow-coni-pink/40 hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={20} />
            Agendar consulta
          </button>
          <p className="mt-4 text-sm text-coni-text-muted font-inter">
            Atendimento personalizado pelo WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernTestimonials;