
import { Instagram, Mail, Phone } from "lucide-react";

const ModernFooter = () => {
  return (
    <footer className="bg-modern-primary text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-playfair mb-4">Dra. Coni Waldow</h2>
            <p className="text-sm opacity-90 text-center md:text-left font-inter leading-relaxed">
              Obstetrícia humanizada e de alto risco em Curitiba e região.
            </p>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-inter font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5541999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={18} className="text-modern-primary" />
                </div>
                <span className="font-inter">(41) 99999-9999</span>
              </a>
              <a
                href="mailto:contato@draconiwaldow.com.br"
                className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={18} className="text-modern-primary" />
                </div>
                <span className="font-inter">contato@draconiwaldow.com.br</span>
              </a>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-inter font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/draconiwaldow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram size={20} className="text-modern-primary" />
              </a>
              <a
                href="https://wa.me/5541999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Phone size={20} className="text-modern-primary" />
              </a>
              <a
                href="mailto:contato@draconiwaldow.com.br"
                aria-label="Email"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Mail size={20} className="text-modern-primary" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-white/20 pt-6">
          <p className="text-sm opacity-80 font-inter text-center">
            © 2025 Dra. Coni Waldow | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
