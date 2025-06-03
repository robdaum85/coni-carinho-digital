
import { useState } from "react";
import { MessageCircle, Mail, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ModernContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    const whatsappUrl = `https://wa.me/5541999999999?text=Olá, meu nome é ${formData.name}. ${formData.message}`;
    window.open(whatsappUrl, "_blank");
    
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      message: "",
    });
  };

  return (
    <section id="contato" className="py-20 bg-modern-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <h2 className="section-title text-modern-primary font-playfair font-medium mb-6">
              Fale comigo
            </h2>
            <p className="text-lg mb-8 text-modern-text-secondary font-inter leading-relaxed">
              Se você deseja um pré-natal acolhedor ou tem dúvidas sobre acompanhamento obstétrico, 
              estou à disposição. Preencha o formulário ou fale comigo no WhatsApp.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-modern-secondary rounded-full flex items-center justify-center hover-scale">
                  <MessageCircle size={20} className="text-modern-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-medium text-modern-text-primary">WhatsApp</h3>
                  <a 
                    href="https://wa.me/5541999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-modern-text-secondary font-inter hover:text-modern-primary transition-colors"
                  >
                    (41) 99999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-modern-secondary rounded-full flex items-center justify-center hover-scale">
                  <Mail size={20} className="text-modern-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-medium text-modern-text-primary">E-mail</h3>
                  <a 
                    href="mailto:contato@draconiwaldow.com.br"
                    className="text-modern-text-secondary font-inter hover:text-modern-primary transition-colors"
                  >
                    contato@draconiwaldow.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-modern-secondary rounded-full flex items-center justify-center hover-scale">
                  <Instagram size={20} className="text-modern-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-medium text-modern-text-primary">Instagram</h3>
                  <a 
                    href="https://instagram.com/draconiwaldow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-modern-text-secondary font-inter hover:text-modern-primary transition-colors"
                  >
                    @draconiwaldow
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="floating-label">
                  <input
                    type="text"
                    name="name"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label>Nome completo</label>
                </div>

                <div className="floating-label">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label>E-mail</label>
                </div>

                <div className="floating-label">
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder=" "
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                  />
                  <label>WhatsApp (41) 99999-9999</label>
                </div>

                <div className="floating-label">
                  <textarea
                    name="message"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-32 resize-none"
                    required
                  />
                  <label>Mensagem</label>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full hover-scale"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;
