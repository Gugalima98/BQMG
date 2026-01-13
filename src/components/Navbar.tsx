import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
              <div className="bg-brand-primary p-2 rounded-lg group-hover:bg-brand-dark transition-colors shadow-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className={`font-bold text-2xl tracking-tighter transition-colors ${scrolled || isOpen || location.pathname !== '/' ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>
                BQMG
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-brand-secondary ${
                  scrolled || location.pathname !== '/' ? 'text-gray-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-secondary hover:bg-amber-500 text-gray-900 px-6 py-2.5 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Orçamento Gratuito</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none p-2 rounded-md ${
                scrolled || isOpen || location.pathname !== '/' ? 'text-gray-600 hover:text-brand-primary' : 'text-white hover:text-brand-secondary'
              }`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl absolute w-full shadow-2xl border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-light transition-all"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-brand-primary text-white px-4 py-3 rounded-lg font-bold mt-6 shadow-md"
            >
              Orçamento Gratuito
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;