import { useState } from "react";
import { MessageCircle, Mail, Instagram, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const ModernContact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve."
    });

    // Reset do formulário
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      message: ""
    });
  };
  const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/554198943285?text=Olá, meu nome é ${formData.name || 'interessado'}. Gostaria de agendar uma consulta.`;
    window.open(whatsappUrl, "_blank");
  };
  return <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estou aqui para esclarecer suas dúvidas e acompanhar você durante toda a gestação
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-medium text-gray-900 mb-6">
                Fale Comigo
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Se você deseja um pré-natal acolhedor ou tem dúvidas sobre acompanhamento obstétrico, 
                estou à disposição para ajudá-la.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MessageCircle size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-playfair font-medium text-gray-900">WhatsApp</h4>
                  <button onClick={handleWhatsApp} className="text-primary hover:text-primary/80 transition-colors">
                    (41) 98943-285
                  </button>
                </div>
              </div>

              

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Instagram size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-playfair font-medium text-gray-900">Instagram</h4>
                  <a href="https://instagram.com/draconiwaldow" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
                    @draconiwaldow
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-playfair font-medium text-gray-900 mb-6">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo *
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="Seu nome completo" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="seu@email.com" />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp
                </label>
                <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors" placeholder="(41) 98943-285" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none" placeholder="Como posso ajudá-la?" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" className="btn-primary flex items-center justify-center gap-2 flex-1">
                  <Send size={16} />
                  Enviar Mensagem
                </button>
                <button type="button" onClick={handleWhatsApp} className="bg-green-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-green-600 hover:scale-105 flex items-center justify-center gap-2">
                  <MessageCircle size={16} />
                  WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ModernContact;