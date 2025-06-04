
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const ModernFAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqs = [
    {
      question: "O que é o parto humanizado?",
      answer: "É um tipo de parto que respeita as suas escolhas, valoriza o seu protagonismo e busca o mínimo de intervenções médicas desnecessárias, priorizando o seu bem-estar físico e emocional e do seu bebê."
    },
    {
      question: "O parto humanizado é sempre normal?",
      answer: "Não necessariamente. Parto humanizado pode ser vaginal ou cesárea — o importante é que seja baseado em informações, respeito e na decisão compartilhada entre você e a equipe médica."
    },
    {
      question: "Posso ter parto humanizado em hospital?",
      answer: "Sim! O parto humanizado pode acontecer em hospitais, casas de parto ou até em casa, desde que com uma equipe preparada e respeitando todas as condições de segurança."
    },
    {
      question: "Quem pode me acompanhar no parto?",
      answer: "Você tem o direito de escolher quem estará ao seu lado — seja o(a) parceiro(a), uma doula ou outra pessoa de confiança."
    },
    {
      question: "Quais os benefícios do parto humanizado?",
      answer: "Menor risco de intervenções desnecessárias, recuperação mais rápida, vínculo fortalecido com o bebê e maior satisfação com a sua experiência do parto."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title mb-6">
            🤰 Dúvidas sobre Parto Humanizado? Nós Respondemos!
          </h2>
          <p className="text-xl text-gray-600 font-inter leading-relaxed max-w-3xl mx-auto">
            Selecionamos as perguntas mais comuns para te ajudar a se sentir segura, 
            informada e confiante em cada etapa da sua jornada.
          </p>
        </div>

        <div className="space-y-4 fade-in">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-medium text-gray-900 font-inter pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItem === index ? (
                    <Minus size={20} className="text-primary" />
                  ) : (
                    <Plus size={20} className="text-primary" />
                  )}
                </div>
              </button>
              
              {openItem === index && (
                <div className="px-8 pb-6 pt-2">
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <p className="text-gray-700 font-inter leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <p className="text-gray-600 font-inter mb-6">
            Ainda tem dúvidas? Estou aqui para esclarecer tudo com você.
          </p>
          <a
            href="https://wa.me/5541999999999?text=Olá,%20gostaria%20de%20esclarecer%20algumas%20dúvidas%20sobre%20parto%20humanizado"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Tire suas dúvidas comigo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ModernFAQ;
