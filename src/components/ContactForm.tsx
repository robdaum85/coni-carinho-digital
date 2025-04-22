
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

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
    
    // For now, we'll just show a toast message
    // In a real application, you would send this data to a server
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Clear the form
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      message: "",
    });
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/5541999999999?text=Olá, meu nome é ${formData.name}. ${formData.message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Nome completo"
          value={formData.name}
          onChange={handleChange}
          required
          className="rounded-md"
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
          className="rounded-md"
        />
      </div>
      <div>
        <Input
          type="tel"
          name="whatsapp"
          placeholder="WhatsApp"
          value={formData.whatsapp}
          onChange={handleChange}
          required
          className="rounded-md"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Mensagem"
          value={formData.message}
          onChange={handleChange}
          className="min-h-32 rounded-md"
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full py-6 bg-coni-pink hover:bg-coni-pink/90 text-white font-medium rounded-full"
      >
        Enviar mensagem
      </Button>
    </form>
  );
};

export default ContactForm;
