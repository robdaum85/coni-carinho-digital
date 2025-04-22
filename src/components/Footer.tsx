
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coni-pink text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-dm-serif mb-4">Dra. Coni Waldow</h2>
            <p className="text-sm opacity-80 text-center md:text-left">
              Obstetrícia humanizada e de alto risco em Curitiba e região.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium mb-4">Contato</h3>
            <div className="space-y-2">
              <a
                href="https://wa.me/5541999999999" // Replace with actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Phone size={18} />
                <span>(41) 99999-9999</span>
              </a>
              <a
                href="mailto:contato@draconiwaldow.com.br"
                className="flex items-center gap-2 hover:underline"
              >
                <Mail size={18} />
                <span>contato@draconiwaldow.com.br</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-medium mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/draconiwaldow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5541999999999" // Replace with actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
              >
                <Phone size={20} />
              </a>
              <a
                href="mailto:contato@draconiwaldow.com.br"
                aria-label="Email"
                className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-white border-opacity-20 text-center">
          <p className="text-sm opacity-70">
            © 2025 Dra. Coni Waldow | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
