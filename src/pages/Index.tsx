
import { Baby, Calendar, Check, Heart, Hospital, Instagram, Mail, MessageCircle, Phone, Pill, ShieldCheck, Stethoscope, Users, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import SEOTags from "@/components/SEOTags";

const Index = () => {
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

  const differentials = [
    {
      title: "Atendimento empático e humanizado",
      description: "Escuta ativa e respeito às suas escolhas e individualidades em todos os momentos."
    },
    {
      title: "Atendimento por convênio e particular",
      description: "Flexibilidade de atendimento para maior acessibilidade às pacientes."
    },
    {
      title: "Disponibilidade via WhatsApp",
      description: "Suporte e esclarecimento de dúvidas para maior tranquilidade durante a gestação."
    },
    {
      title: "Experiência com casos de alto risco",
      description: "Segurança e expertise para o manejo de gestações complexas e situações especiais."
    }
  ];

  const testimonials = [
    {
      text: "A Dra. Coni foi uma luz no momento mais importante da minha vida. Cuidou de mim e do meu bebê com tanto amor que nunca vou esquecer.",
      name: "Mariana C.",
      location: "Curitiba"
    },
    {
      text: "Ela não é só médica, é anjo. Me acolheu quando descobri minha trombofilia e me ajudou a viver um parto tranquilo.",
      name: "Juliane P.",
      location: "Ponta Grossa"
    },
    {
      text: "Foi como ter uma amiga me acompanhando até o parto. E a técnica dela me deu segurança o tempo todo.",
      name: "Larissa M.",
      location: "São José dos Pinhais"
    }
  ];

  return (
    <div className="min-h-screen bg-coni-beige overflow-hidden">
      <SEOTags />
      <Header />
      <WhatsAppButton />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="/lovable-uploads/48c699a6-333d-4f18-b61e-40561fde5197.png" 
            alt="Dra. Coni Waldow sorrindo em consultório" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-medium mb-6 animate-fadeIn text-white leading-tight">
              Parto Humanizado e Obstetrícia de Alto Risco com Atenção Integral
            </h1>
            <p className="text-lg md:text-xl mb-8 font-inter font-light animate-fadeIn text-white/90 leading-relaxed max-w-3xl mx-auto">
              Acompanhamento completo e personalizado para você viver a gestação com confiança, empatia e acolhimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeIn mb-12">
              <a
                href="#contato"
                className="px-7 py-3 bg-coni-pink hover:bg-coni-pink/90 text-white font-inter font-medium rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                Agendar Pré-Natal
              </a>
              <a
                href="#sobre"
                className="px-7 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-coni-pink text-white font-inter font-medium rounded-full transition-all duration-300"
              >
                Conheça Meu Trabalho
              </a>
            </div>
            <div className="animate-bounce-slow">
              <ChevronDown size={32} className="text-white/70 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-6 text-coni-pink brush-title">
                Sobre a Dra. Coni Waldow
              </h2>
              <p className="text-lg mb-6 text-coni-text-secondary font-inter leading-relaxed">
                Sou médica formada pela UFPR com especialização em Ginecologia e Obstetrícia. 
                Também sou especialista em Obstetrícia de Alto Risco pela UNIFESP.
              </p>
              <p className="text-lg mb-6 text-coni-text-secondary font-inter leading-relaxed">
                Minha missão é oferecer um atendimento acolhedor e seguro para gestantes, 
                respeitando seus desejos e cuidando de cada detalhe — seja em gestações de baixo risco 
                ou casos mais delicados como trombofilias, hipertensão, diabetes gestacional ou lúpus.
              </p>
              <p className="text-lg mb-8 font-playfair italic text-coni-pink leading-relaxed">
                "Cada gestação é única. Cada mulher merece respeito, cuidado e um parto com segurança e dignidade."
              </p>
              <div className="mt-8">
                <a
                  href="#contato"
                  className="px-6 py-3 bg-coni-pink hover:bg-coni-pink/90 text-white font-inter font-medium rounded-full transition-all duration-300 hover:scale-105 inline-block shadow-md"
                >
                  Entre em contato
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-md">
                <img
                  src="/lovable-uploads/02c9d300-d10a-441f-ab9c-8a50fb743c3d.png"
                  alt="Dra. Coni Waldow atendendo paciente"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4 text-coni-pink brush-title inline-block">
              Serviços Oferecidos
            </h2>
            <p className="text-lg text-coni-text-secondary font-inter max-w-2xl mx-auto mt-6">
              Acompanhe sua gestação com o cuidado que você merece. Veja como posso te ajudar:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/lovable-uploads/ce2ba223-9ca2-4c00-a8df-139b4a8cd831.png"
                  alt="Retrato realístico da Dra. Coni em consultório"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-playfair font-medium mb-4 text-coni-pink">
                Atendimento personalizado para cada paciente
              </h3>
              <p className="text-lg mb-6 text-coni-text-secondary font-inter leading-relaxed">
                Cada gestação é única e merece atenção individualizada. O cuidado
                pré-natal é adaptado às necessidades específicas de cada mãe e bebê.
              </p>
              <p className="text-lg text-coni-text-secondary font-inter leading-relaxed">
                Com formação especializada em obstetrícia de alto risco, Dra. Coni
                proporciona segurança e tranquilidade mesmo em casos mais complexos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4 text-coni-pink brush-title inline-block">
              Por que escolher a Dra. Coni?
            </h2>
            <p className="text-lg text-coni-text-secondary font-inter max-w-2xl mx-auto mt-6">
              Compromisso com seu bem-estar e com a experiência que você merece viver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {differentials.map((item, index) => (
              <div key={index} className="differential-card">
                <div className="w-8 h-8 bg-coni-light-pink rounded-full flex items-center justify-center shrink-0">
                  <Check size={16} className="text-coni-pink" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-medium mb-2 text-coni-text-primary">{item.title}</h3>
                  <p className="text-coni-text-muted font-inter leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#contato"
              className="px-8 py-4 bg-coni-pink hover:bg-coni-pink/90 text-white font-inter font-medium rounded-full shadow-md transition-all duration-300 hover:scale-105 inline-block"
            >
              Agende sua consulta
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4 text-coni-pink brush-title inline-block">
              O que as pacientes dizem
            </h2>
            <p className="text-lg text-coni-text-secondary font-inter max-w-2xl mx-auto mt-6">
              Experiências reais de mães que confiaram seus cuidados à Dra. Coni.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card">
                <p className="text-coni-text-secondary font-inter italic mb-6 pt-6">"{item.text}"</p>
                <div className="flex items-center">
                  <div className="w-1 h-10 bg-coni-pink/30 mr-3 rounded-full"></div>
                  <div>
                    <p className="font-inter font-medium text-coni-text-primary">{item.name}</p>
                    <p className="text-sm text-coni-text-muted font-inter">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl w-full max-w-lg">
              <img
                src="/lovable-uploads/e49a2143-2be1-43c8-b728-a3d4d8afe0de.png"
                alt="Mãe feliz com seu bebê"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-medium mb-4 text-coni-pink brush-title">
                Fale comigo
              </h2>
              <p className="text-lg mb-8 text-coni-text-secondary font-inter leading-relaxed">
                Se você deseja um pré-natal acolhedor ou tem dúvidas sobre acompanhamento obstétrico, 
                estou à disposição. Preencha o formulário ou fale comigo no WhatsApp.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-coni-light-pink rounded-full flex items-center justify-center">
                    <MessageCircle size={20} className="text-coni-pink" />
                  </div>
                  <div>
                    <h3 className="text-lg font-playfair font-medium text-coni-text-primary">WhatsApp</h3>
                    <p className="text-coni-text-secondary font-inter">(41) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-coni-light-pink rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-coni-pink" />
                  </div>
                  <div>
                    <h3 className="text-lg font-playfair font-medium text-coni-text-primary">E-mail</h3>
                    <p className="text-coni-text-secondary font-inter">contato@draconiwaldow.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-coni-light-pink rounded-full flex items-center justify-center">
                    <Instagram size={20} className="text-coni-pink" />
                  </div>
                  <div>
                    <h3 className="text-lg font-playfair font-medium text-coni-text-primary">Instagram</h3>
                    <p className="text-coni-text-secondary font-inter">@draconiwaldow</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
