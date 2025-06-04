
import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";

const ModernHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="container mx-auto px-6 h-20 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/394e917b-f476-43e0-9cb7-2a712c1e6c49.png"
            alt="Logo Dra. Coni Waldow"
            className="h-16 w-auto"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-600 focus:outline-none hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-gray-600 hover:text-primary transition-colors font-inter font-medium"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('servicos')}
            className="text-gray-600 hover:text-primary transition-colors font-inter font-medium"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('diferenciais')}
            className="text-gray-600 hover:text-primary transition-colors font-inter font-medium"
          >
            Diferenciais
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-gray-600 hover:text-primary transition-colors font-inter font-medium"
          >
            Contato
          </button>
          <a
            href="https://wa.me/5541999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <Calendar size={16} />
            Agendar Consulta
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-left py-3 text-gray-600 hover:text-primary transition-colors font-inter text-lg"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-left py-3 text-gray-600 hover:text-primary transition-colors font-inter text-lg"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="text-left py-3 text-gray-600 hover:text-primary transition-colors font-inter text-lg"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-left py-3 text-gray-600 hover:text-primary transition-colors font-inter text-lg"
            >
              Contato
            </button>
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 mt-4"
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

export default ModernHeader;
