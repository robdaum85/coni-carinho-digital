
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-coni-pink text-xl font-dm-serif">Dra. Coni Waldow</h1>
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
          <a href="#sobre" className="text-coni-dark hover:text-coni-pink transition-colors">
            Sobre
          </a>
          <a href="#servicos" className="text-coni-dark hover:text-coni-pink transition-colors">
            Serviços
          </a>
          <a href="#diferenciais" className="text-coni-dark hover:text-coni-pink transition-colors">
            Diferenciais
          </a>
          <a href="#contato" className="text-coni-dark hover:text-coni-pink transition-colors">
            Contato
          </a>
          <a
            href="https://wa.me/5541999999999" // Replace with actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-coni-pink text-white rounded-full hover:bg-opacity-90 transition-colors"
          >
            Agendar Consulta
          </a>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#sobre"
              className="py-2 text-coni-dark hover:text-coni-pink transition-colors"
              onClick={toggleMenu}
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="py-2 text-coni-dark hover:text-coni-pink transition-colors"
              onClick={toggleMenu}
            >
              Serviços
            </a>
            <a
              href="#diferenciais"
              className="py-2 text-coni-dark hover:text-coni-pink transition-colors"
              onClick={toggleMenu}
            >
              Diferenciais
            </a>
            <a
              href="#contato"
              className="py-2 text-coni-dark hover:text-coni-pink transition-colors"
              onClick={toggleMenu}
            >
              Contato
            </a>
            <a
              href="https://wa.me/5541999999999" // Replace with actual WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-coni-pink text-white text-center rounded-full hover:bg-opacity-90 transition-colors"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
