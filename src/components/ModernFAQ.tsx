import { useState } from "react";
import { Plus, Minus } from "lucide-react";
const ModernFAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  const faqs = [{
    question: "O que é o parto humanizado?",
    answer: "É um tipo de parto que respeita as escolhas da mulher, valoriza o protagonismo da gestante e busca o mínimo de intervenções médicas desnecessárias, priorizando o bem-estar físico e emocional da mãe e do bebê."
  }, {
    question: "O parto humanizado é sempre normal?",
    answer: "Não necessariamente. Parto humanizado pode ser vaginal ou cesárea — o importante é que seja baseado em informações, respeito e na decisão compartilhada entre a gestante e a equipe médica."
  }, {
    question: "Posso ter parto humanizado em hospital?",
    answer: "Com certeza. Com a equipe certa ao seu lado, além da segurança em situações nem sempre previsíveis na obstetrícia, você estará em um ambiente acolhedor, com respeito, onde a protagonista do seu parto será você."
  }, {
    question: "Quem pode me acompanhar no parto?",
    answer: "Você tem o direito de escolher quem estará ao seu lado. Você pode levar seu parceiro(a), ou algum familiar ou amigo. Além do seu acompanhante, também pode levar a sua equipe: médico obstetra, enfermeira obstetriz, doula, pediatra. O que será conversado durante o pré-natal para compor a equipe que mais se enquadra em seu perfil."
  }, {
    question: "Quais os benefícios do parto humanizado?",
    answer: "Menor risco de intervenções desnecessárias, recuperação mais rápida, vínculo fortalecido com o bebê e maior satisfação com a experiência do parto."
  }, {
    question: "Minha gestação é de risco. Posso ter parto normal?",
    answer: "Sim, a maioria das gestantes tem condições em ter um parto normal. Ter fatores de risco não determinam na maioria das vezes a via de parto. Muito pelo contrário, o parto normal em geral reduz os riscos especialmente para a mãe e fornece diversos benefícios para o bebê."
  }, {
    question: "O que é Plano de parto?",
    answer: "É um documento que será redigido por você e seu acompanhante, após ter recebido todas as orientações, que permite você colocar seus desejos e anseios de forma individualizada em busca de atendimento mais respeitoso e personalizado."
  }, {
    question: "Qual o preço do parto humanizado em Curitiba?",
    answer: "O valor do parto humanizado varia conforme cada caso e é discutido de forma transparente durante a consulta. O atendimento da Dra. Coni Waldow é particular, garantindo acompanhamento personalizado e dedicado do pré-natal ao pós-parto."
  }, {
    question: "O que é parto aquático e quais os benefícios?",
    answer: "O parto aquático é realizado em uma banheira com água morna, proporcionando relaxamento muscular, alívio natural da dor e maior conforto durante o trabalho de parto. A água aquecida ajuda a reduzir a tensão e facilita a movimentação da gestante."
  }, {
    question: "Posso ter parto de cócoras ou em outras posições?",
    answer: "Sim! Posições verticais como cócoras, de joelhos ou semi-sentada utilizam a gravidade a favor, facilitando a descida do bebê e proporcionando maior autonomia. A Dra. Coni respeita a liberdade de posição durante o trabalho de parto."
  }, {
    question: "Qual o papel da doula no parto humanizado?",
    answer: "A doula oferece suporte emocional, físico e informacional contínuo durante a gestação, trabalho de parto e pós-parto. Ela complementa o trabalho da equipe médica, proporcionando conforto, técnicas de alívio da dor e apoio emocional à gestante e sua família."
  }];
  return <section id="faq" className="py-20 bg-white">
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
          {faqs.map((faq, index) => <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <button onClick={() => toggleItem(index)} className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200">
                <h3 className="text-lg font-medium text-gray-900 font-inter pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItem === index ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-primary" />}
                </div>
              </button>
              
              {openItem === index && <div className="px-8 pb-6 pt-2">
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <p className="text-gray-700 font-inter leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>}
            </div>)}
        </div>

        <div className="text-center mt-12 fade-in">
          <p className="text-gray-600 font-inter mb-6">
            Ainda tem dúvidas? Estou aqui para esclarecer tudo com você.
          </p>
          <a href={`https://wa.me/5541998943285?text=${encodeURIComponent('(*SITE*) - Olá, gostaria de esclarecer algumas dúvidas sobre parto humanizado')}`} target="_blank" rel="noopener noreferrer" className="btn-primary">Agende sua consulta.</a>
        </div>
      </div>
    </section>;
};
export default ModernFAQ;