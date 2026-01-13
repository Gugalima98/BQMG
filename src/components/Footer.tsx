import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Truck, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, NEIGHBORHOODS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <div className="bg-brand-primary p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tighter">BQMG</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Líder em locação de banheiros químicos em Belo Horizonte. Soluções sanitárias com qualidade, higiene e compromisso ambiental para obras e eventos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-brand-primary p-2 rounded-full transition-colors text-white"><Facebook size={18} /></a>
              <a href="#" className="bg-white/10 hover:bg-brand-primary p-2 rounded-full transition-colors text-white"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-secondary">Navegação</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {['Home', 'Quem Somos', 'Nossos Serviços', 'Solicitar Orçamento'].map((item, idx) => {
                 const paths = ['/', '/sobre', '/servicos', '/contato'];
                 return (
                  <li key={idx}>
                    <Link to={paths[idx]} className="hover:text-brand-secondary transition-colors flex items-center gap-2 group">
                      <ChevronRight size={14} className="text-gray-500 group-hover:text-brand-secondary" />
                      {item}
                    </Link>
                  </li>
                 )
              })}
            </ul>
          </div>

          {/* Column 3: SEO Locations */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-secondary">Área de Atuação</h4>
            <div className="h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-brand-primary scrollbar-track-brand-dark/50">
               <ul className="space-y-2 text-xs text-gray-400">
                {NEIGHBORHOODS.map((neighborhood) => (
                  <li key={neighborhood.slug}>
                    <Link 
                      to={`/atuacao/${neighborhood.slug}`} 
                      className="hover:text-white transition-colors block py-1 border-b border-gray-800 hover:border-brand-primary"
                    >
                      {neighborhood.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-secondary">Fale Conosco</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0 text-brand-primary" size={18} />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="flex-shrink-0 text-brand-primary" size={18} />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white font-bold">{COMPANY_INFO.formattedPhone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="flex-shrink-0 text-brand-primary" size={18} />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">{COMPANY_INFO.email}</a>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href={COMPANY_INFO.whatsappLink}
                className="inline-block w-full bg-brand-primary hover:bg-green-600 text-white text-center py-3 rounded-lg font-bold transition-colors text-xs uppercase tracking-wider"
              >
                Whatsapp 24h
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} BQMG Soluções Ambientais. Todos os direitos reservados.</p>
          <p>Desenvolvido com tecnologia React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;