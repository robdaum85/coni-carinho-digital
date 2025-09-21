
import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-coni-pink text-xl font-playfair font-medium">Dra. Coni Waldow</h1>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-coni-pink focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-coni-text-primary hover:text-coni-pink transition-colors font-inter font-medium">
            Sobre
          </a>
          <a href="#servicos" className="text-coni-text-primary hover:text-coni-pink transition-colors font-inter font-medium">
            Serviços
          </a>
          <a href="#diferenciais" className="text-coni-text-primary hover:text-coni-pink transition-colors font-inter font-medium">
            Diferenciais
          </a>
          <a href="#contato" className="text-coni-text-primary hover:text-coni-pink transition-colors font-inter font-medium">
            Contato
          </a>
          <a
            href="https://wa.me/554198943285"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 bg-coni-pink text-white rounded-full hover:bg-coni-pink/90 transition-all duration-300 hover:scale-105"
          >
            <Calendar size={16} />
            Agendar Consulta
          </a>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#sobre"
              className="py-2 text-coni-text-primary hover:text-coni-pink transition-colors font-inter"
              onClick={toggleMenu}
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="py-2 text-coni-text-primary hover:text-coni-pink transition-colors font-inter"
              onClick={toggleMenu}
            >
              Serviços
            </a>
            <a
              href="#diferenciais"
              className="py-2 text-coni-text-primary hover:text-coni-pink transition-colors font-inter"
              onClick={toggleMenu}
            >
              Diferenciais
            </a>
            <a
              href="#contato"
              className="py-2 text-coni-text-primary hover:text-coni-pink transition-colors font-inter"
              onClick={toggleMenu}
            >
              Contato
            </a>
            <a
              href="https://wa.me/554198943285"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-coni-pink text-white rounded-full hover:bg-coni-pink/90 transition-colors font-inter"
            >
              <Calendar size={16} />
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
