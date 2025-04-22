
import { Phone } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink = "https://wa.me/5541999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Coni%20Waldow"; // Replace with actual WhatsApp number
  
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <Phone size={28} />
    </a>
  );
};

export default WhatsAppButton;
