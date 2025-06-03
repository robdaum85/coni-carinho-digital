
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
    <header className="fixed top-0 left-0 right-0 z-50 glass-header h-20">
      <div className="container mx-auto px-4 h-full flex justify-between items-center max-w-6xl">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-modern-primary text-xl font-playfair font-medium">
            Dra. Coni Waldow
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-modern-accent focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-modern-text-secondary hover:text-modern-primary transition-colors font-inter font-semibold"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('servicos')}
            className="text-modern-text-secondary hover:text-modern-primary transition-colors font-inter font-semibold"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('diferenciais')}
            className="text-modern-text-secondary hover:text-modern-primary transition-colors font-inter font-semibold"
          >
            Diferenciais
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-modern-text-secondary hover:text-modern-primary transition-colors font-inter font-semibold"
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
        <div className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center">
          <div className="flex flex-col space-y-8 text-center">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-2xl text-modern-text-secondary hover:text-modern-primary transition-colors font-inter"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-2xl text-modern-text-secondary hover:text-modern-primary transition-colors font-inter"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="text-2xl text-modern-text-secondary hover:text-modern-primary transition-colors font-inter"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-2xl text-modern-text-secondary hover:text-modern-primary transition-colors font-inter"
            >
              Contato
            </button>
            <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 w-64 mx-auto"
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
