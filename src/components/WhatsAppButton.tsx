import { MessageCircle } from "lucide-react";
const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, gostaria de agendar uma consulta com a Dra. Coni Waldow");
    const whatsappLink = `https://wa.me/554198943285?text=${message}`;
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };
  return <button onClick={handleWhatsAppClick} aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 mx-[2px] my-0 px-0 text-center">
      <MessageCircle size={28} />
    </button>;
};
export default WhatsAppButton;