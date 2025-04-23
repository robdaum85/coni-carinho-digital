
import { Baby, Calendar, Check, Heart, Hospital, Instagram, Mail, MessageCircle, Phone, Pill, ShieldCheck, Stethoscope, Users } from "lucide-react";
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
    <div className="min-h-screen painterly-bg overflow-hidden">
      <SEOTags />
      <Header />
      <WhatsAppButton />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-coni-pink/10 to-coni-light-pink/50"></div>
          <img 
            src="/lovable-uploads/48c699a6-333d-4f18-b61e-40561fde5197.png" 
            alt="Mãe carinhosa com bebê" 
            className="w-full h-full object-cover opacity-40 md:opacity-50"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 flex flex-col items-center">
          <div className="max-w-3xl text-center bg-white/40 rounded-3xl px-6 py-10 backdrop-blur-sm shadow-lg border border-white/50">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-dm-serif mb-6 animate-fadeIn text-coni-pink drop-shadow-sm leading-tight">
              Parto Humanizado e Obstetrícia de Alto Risco com Atenção Integral
            </h1>
            <p className="text-lg md:text-xl mb-8 font-light animate-fadeIn text-coni-dark/90 leading-relaxed">
              Acompanhamento completo e personalizado para você viver a gestação com confiança, empatia e acolhimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
              <a
                href="https://wa.me/5541999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20pré-natal%20com%20a%20Dra.%20Coni%20Waldow"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-coni-pink hover:bg-coni-pink/90 text-white font-medium rounded-full shadow-md transition duration-200"
              >
                Agendar Pré-Natal
              </a>
              <a
                href="#sobre"
                className="px-7 py-3 bg-transparent border-2 border-coni-pink hover:bg-coni-pink/10 text-coni-pink font-medium rounded-full transition-colors"
              >
                Conheça Meu Trabalho
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-dm-serif mb-6 text-coni-pink brush-title">
                Sobre a Dra. Coni Waldow
              </h2>
              <p className="text-lg mb-6 text-coni-dark leading-relaxed">
                Sou médica formada pela UFPR com especialização em Ginecologia e Obstetrícia. 
                Também sou especialista em Obstetrícia de Alto Risco pela UNIFESP.
              </p>
              <p className="text-lg mb-6 text-coni-dark leading-relaxed">
                Minha missão é oferecer um atendimento acolhedor e seguro para gestantes, 
                respeitando seus desejos e cuidando de cada detalhe — seja em gestações de baixo risco 
                ou casos mais delicados como trombofilias, hipertensão, diabetes gestacional ou lúpus.
              </p>
              <p className="text-lg mb-8 font-dm-serif italic text-coni-pink leading-relaxed">
                "Cada gestação é única. Cada mulher merece respeito, cuidado e um parto com segurança e dignidade."
              </p>
              <div className="mt-8">
                <a
                  href="#contato"
                  className="px-6 py-3 bg-coni-pink hover:bg-coni-pink/90 text-white font-medium rounded-full transition-colors inline-block shadow-md"
                >
                  Entre em contato
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-white/50 w-full max-w-md">
                <img
                  src="/lovable-uploads/02c9d300-d10a-441f-ab9c-8a50fb743c3d.png"
                  alt="Dra. Coni Waldow"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 md:py-28 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-dm-serif mb-4 text-coni-pink brush-title inline-block">
              Serviços Oferecidos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Acompanhe sua gestação com o cuidado que você merece. Veja como posso te ajudar:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-white/50">
                <img
                  src="/lovable-uploads/ce2ba223-9ca2-4c00-a8df-139b4a8cd831.png"
                  alt="Atendimento médico personalizado"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4 text-coni-pink font-dm-serif">
                Atendimento personalizado para cada paciente
              </h3>
              <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                Cada gestação é única e merece atenção individualizada. O cuidado
                pré-natal é adaptado às necessidades específicas de cada mãe e bebê.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Com formação especializada em obstetrícia de alto risco, Dra. Coni
                proporciona segurança e tranquilidade mesmo em casos mais complexos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-20 relative">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-coni-light-pink to-white"></div>
          <img 
            src="/lovable-uploads/8ef1a133-96f7-4730-b115-b5050e3e2b72.png" 
            alt="Casal grávido" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-dm-serif mb-4 text-coni-pink brush-title inline-block">
              Por que escolher a Dra. Coni?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Compromisso com seu bem-estar e com a experiência que você merece viver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentials.map((item, index) => (
              <div key={index} className="flex gap-4 items-start bg-white/70 border border-white/80 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 backdrop-blur-sm">
                <div className="p-2 bg-coni-pink bg-opacity-10 text-coni-pink rounded-full shrink-0 mt-0.5">
                  <Check size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-coni-dark font-dm-serif">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-coni-pink hover:bg-coni-pink/90 text-white font-medium rounded-full shadow-md transition-colors inline-block"
            >
              Agende sua consulta
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 md:py-28 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-dm-serif mb-4 text-coni-pink brush-title inline-block">
              O que as pacientes dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Experiências reais de mães que confiaram seus cuidados à Dra. Coni.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card">
                <p className="text-gray-600 mb-6 italic">"{item.text}"</p>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-10 bg-coni-pink/20 mr-3 rounded-full"></div>
                  <div>
                    <p className="font-medium text-coni-dark">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-white/50 w-full max-w-lg">
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
      <section id="contato" className="py-20 md:py-28 relative">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-coni-light-pink/50 to-white"></div>
          <img 
            src="/lovable-uploads/221b086f-bb6c-4c45-aab6-5ccea0a9af30.png" 
            alt="Recém-nascido" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-dm-serif mb-4 text-coni-pink brush-title">
                Fale comigo
              </h2>
              <p className="text-lg mb-8 text-gray-600 leading-relaxed">
                Se você deseja um pré-natal acolhedor ou tem dúvidas sobre acompanhamento obstétrico, 
                estou à disposição. Preencha o formulário ou fale comigo no WhatsApp.
              </p>

              <div className="mb-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-coni-pink bg-opacity-10 text-coni-pink rounded-full">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium font-dm-serif">WhatsApp</h3>
                    <p className="text-gray-600">(41) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-coni-pink bg-opacity-10 text-coni-pink rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium font-dm-serif">E-mail</h3>
                    <p className="text-gray-600">contato@draconiwaldow.com.br</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-coni-pink bg-opacity-10 text-coni-pink rounded-full">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium font-dm-serif">Instagram</h3>
                    <p className="text-gray-600">@draconiwaldow</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-3xl shadow-xl p-8 border border-white/70 backdrop-blur-sm">
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
