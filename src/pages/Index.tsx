
import { Calendar, Check, Heart, Hospital, Instagram, Mail, Phone, Plus, Syringe, User, Users } from "lucide-react";
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
      title: "Pré-natal personalizado",
      description: "Acompanhamento completo e individualizado durante toda a gestação.",
      icon: Calendar
    },
    {
      title: "Parto humanizado",
      description: "Respeito às escolhas da mãe, com foco no bem-estar físico e emocional.",
      icon: Heart
    },
    {
      title: "Obstetrícia de alto risco",
      description: "Cuidado especializado para gestações que demandam atenção especial.",
      icon: Hospital
    },
    {
      title: "Inserção de DIU e Implanon",
      description: "Métodos contraceptivos de longa duração com procedimento minimamente invasivo.",
      icon: Plus
    },
    {
      title: "Ginecologia geral",
      description: "Atendimento integral à saúde da mulher em todas as fases da vida.",
      icon: Users
    }
  ];

  const differentials = [
    {
      title: "Atendimento empático e humanizado",
      description: "Escuta ativa e respeito às suas escolhas e individualidades."
    },
    {
      title: "Atendimento por convênio e particular",
      description: "Flexibilidade de atendimento para maior acessibilidade."
    },
    {
      title: "Disponibilidade via WhatsApp",
      description: "Suporte e esclarecimento de dúvidas para maior tranquilidade."
    },
    {
      title: "Experiência com casos de alto risco",
      description: "Segurança e expertise para o manejo de gestações complexas."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOTags />
      <Header />
      <WhatsAppButton />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-24 min-h-screen flex items-center hero-section">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 z-10 py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-dm-serif mb-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              Parto Humanizado e Obstetrícia de Alto Risco com Atenção Integral
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              Acompanhamento pré-natal personalizado e seguro em Curitiba e região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: "1s" }}>
              <a
                href="https://wa.me/5541999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20pré-natal%20com%20a%20Dra.%20Coni%20Waldow" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-coni-pink hover:bg-coni-pink/90 text-white font-medium rounded-full transition-colors"
              >
                Agendar Pré-Natal
              </a>
              <a
                href="#sobre"
                className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium rounded-full transition-colors"
              >
                Conheça Meu Trabalho
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 section-fade"></div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-20 bg-coni-light-pink">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-dm-serif mb-6 text-coni-pink">
                Sobre a Dra. Coni
              </h2>
              <p className="text-lg mb-6 text-coni-dark">
                Dra. Coni é médica formada pela UFPR, com residência em Ginecologia e 
                Obstetrícia pela UFPR e especialização em Obstetrícia de Alto Risco pela UNIFESP.
              </p>
              <p className="text-lg mb-6 text-coni-dark">
                Atua com foco em gestantes com trombofilias, diabetes gestacional, hipertensão 
                e lúpus. Atendimento humanizado e empático desde o pré-natal até o parto.
              </p>
              <div className="mt-8">
                <a
                  href="#contato"
                  className="px-6 py-3 bg-coni-pink hover:bg-coni-pink/90 text-white font-medium rounded-full transition-colors inline-block"
                >
                  Entre em contato
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1591604021695-0c69b7c05981?q=80&w=1470&auto=format&fit=crop"
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
      <section id="servicos" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-dm-serif mb-4 text-coni-pink">
              Serviços Oferecidos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cuidado integral para a saúde da mulher com foco na humanização e atendimento personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1631046073935-456c3a38e17b?q=80&w=1470&auto=format&fit=crop"
                  alt="Consulta médica com Dra. Coni"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-medium mb-4 text-coni-pink">
                Atendimento personalizado para cada paciente
              </h3>
              <p className="text-lg mb-6 text-gray-600">
                Cada gestação é única e merece atenção individualizada. O cuidado 
                pré-natal é adaptado às necessidades específicas de cada mãe e bebê.
              </p>
              <p className="text-lg text-gray-600">
                Com formação especializada em obstetrícia de alto risco, Dra. Coni 
                proporciona segurança e tranquilidade mesmo em casos mais complexos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-20 bg-coni-light-pink relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-dm-serif mb-4 text-coni-pink">
              Diferenciais
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Por que escolher a Dra. Coni para acompanhar sua jornada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentials.map((item, index) => (
              <div key={index} className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-md">
                <div className="p-2 bg-coni-pink bg-opacity-10 text-coni-pink rounded-full shrink-0">
                  <Check size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-coni-dark">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://wa.me/5541999999999" // Replace with actual WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-coni-pink hover:bg-coni-pink/90 text-white font-medium rounded-full transition-colors inline-block"
            >
              Agende sua consulta
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-dm-serif mb-4 text-coni-pink">
                Entre em Contato
              </h2>
              <p className="text-lg mb-8 text-gray-600">
                Estou à disposição para esclarecer suas dúvidas e agendar sua consulta.
                Preencha o formulário e entraremos em contato o mais breve possível.
              </p>
              
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-coni-pink bg-opacity-10 text-coni-pink rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">WhatsApp</h3>
                    <p className="text-gray-600">(41) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-coni-pink bg-opacity-10 text-coni-pink rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">E-mail</h3>
                    <p className="text-gray-600">contato@draconiwaldow.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-coni-pink bg-opacity-10 text-coni-pink rounded-full">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Instagram</h3>
                    <p className="text-gray-600">@draconiwaldow</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-xl hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1494386346843-e12284507169?q=80&w=1470&auto=format&fit=crop"
                  alt="Família feliz com recém-nascido"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
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
