
import { Calendar, Check, Heart, Hospital, Instagram, Mail, Phone, Plus, Users } from "lucide-react";
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
    <div className="min-h-screen bg-coni-light-pink">
      <SEOTags />
      <Header />
      <WhatsAppButton />
      <ScrollToTop />

      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(198,11,101,0.26), rgba(255,248,238,0.82)), url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1500&q=80'), url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1500&q=80')"
        }}
      >
        <div className="container mx-auto px-4 z-10 py-24 flex flex-col items-center">
          <div className="max-w-3xl text-center text-coni-dark bg-white/65 rounded-3xl px-6 py-10 backdrop-blur-[2px] shadow-xl border border-white/30">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-dm-serif mb-6 animate-fadeIn font-bold text-coni-pink drop-shadow-md">
              Parto Humanizado e Obstetrícia de Alto Risco com Atenção Integral
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light animate-fadeIn text-coni-dark/80">
              Acompanhamento pré-natal personalizado e seguro em Curitiba e região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
              <a
                href="https://wa.me/5541999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20pré-natal%20com%20a%20Dra.%20Coni%20Waldow"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-coni-pink hover:bg-coni-pink/90 text-white font-medium rounded-full shadow-lg transition duration-200"
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
      <section id="sobre" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-dm-serif mb-6 text-coni-pink font-semibold">
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
                  className="px-6 py-3 bg-coni-pink hover:bg-coni-pink/90 text-white font-medium rounded-full transition-colors inline-block shadow-md"
                >
                  Entre em contato
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-coni-pink/30 w-full max-w-xs md:max-w-md bg-coni-light-pink">
                <img
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=640&q=80"
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
      <section id="servicos" className="py-16 md:py-24 bg-coni-light-pink">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-dm-serif mb-4 text-coni-pink font-semibold">
              Serviços Oferecidos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cuidado integral para a saúde da mulher com foco na humanização e atendimento personalizado.
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

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-coni-pink/20 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=700&q=80"
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
      <section id="diferenciais" className="py-20 bg-white relative">
        <div
          className="absolute inset-0 -z-10 opacity-50"
          style={{
            background:
              "linear-gradient(120deg, #fff8ee 60%, #c60b65 100%)",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-dm-serif mb-4 text-coni-pink font-semibold">
              Diferenciais
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Por que escolher a Dra. Coni para acompanhar sua jornada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentials.map((item, index) => (
              <div key={index} className="flex gap-4 items-start bg-white/80 border border-coni-pink/10 p-6 rounded-2xl shadow-md transition hover:shadow-lg">
                <div className="p-2 bg-coni-pink bg-opacity-10 text-coni-pink rounded-full shrink-0 mt-0.5">
                  <Check size={22} />
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

      {/* Contact Section */}
      <section id="contato" className="py-16 md:py-24 bg-coni-light-pink">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-dm-serif mb-4 text-coni-pink font-semibold">
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

              <div className="rounded-2xl overflow-hidden shadow-xl hidden md:block border border-coni-pink/20 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=700&q=80"
                  alt="Família feliz com recém-nascido"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-coni-pink/10">
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

