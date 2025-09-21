
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
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
    
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      message: "",
    });
    
    const whatsappUrl = `https://wa.me/554198943285?text=Olá, meu nome é ${formData.name}. ${formData.message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Nome completo"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-lg border-gray-300 focus:border-coni-pink focus:ring-coni-pink"
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-lg border-gray-300 focus:border-coni-pink focus:ring-coni-pink"
          />
        </div>
        <div>
          <Input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp (41) 98943-285"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            className="rounded-lg border-gray-300 focus:border-coni-pink focus:ring-coni-pink"
          />
        </div>
        <div>
          <Textarea
            name="message"
            placeholder="Mensagem"
            value={formData.message}
            onChange={handleChange}
            className="min-h-32 rounded-lg border-gray-300 focus:border-coni-pink focus:ring-coni-pink resize-none"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full py-3 bg-coni-pink hover:bg-coni-pink/90 text-white font-inter font-medium rounded-full transition-all duration-300 hover:scale-105"
        >
          Enviar mensagem
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
