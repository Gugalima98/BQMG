import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { NEIGHBORHOODS, COMPANY_INFO, SERVICES } from '../constants';
import { MapPin, Phone, Truck, Check } from 'lucide-react';

const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const neighborhood = NEIGHBORHOODS.find((n) => n.slug === slug);

  if (!neighborhood) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* SEO Header */}
      <div className="bg-brand-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-brand-secondary text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <MapPin size={12} />
              Área de Atuação Confirmada
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            Aluguel de Banheiros Químicos em <br />
            <span className="text-brand-primary bg-white/10 px-2 rounded-lg inline-block mt-2">{neighborhood.name}, BH</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Atendimento prioritário para o bairro {neighborhood.name}. Entrega rápida, frota própria e o melhor custo-benefício da região.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-brand-primary rounded-full"></span>
              Atendimento em {neighborhood.name}
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Se você está organizando um evento, gerenciando uma obra ou precisa de uma solução sanitária temporária em <strong>{neighborhood.name}, Belo Horizonte</strong>, a BQMG é sua parceira ideal. Conhecemos bem a região e garantimos uma logística eficiente para que você não tenha preocupações.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-2xl mb-12 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Diferenciais para sua região</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm text-brand-primary"><Truck size={20} /></div>
                  <div>
                    <span className="font-bold text-gray-900 block">Rapidez na Entrega</span>
                    <span className="text-gray-600 text-sm">Nossa frota estratégica permite atendimento ágil em {neighborhood.name}.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm text-brand-primary"><Check size={20} /></div>
                  <div>
                    <span className="font-bold text-gray-900 block">Manutenção Programada</span>
                    <span className="text-gray-600 text-sm">Limpeza e sucção conforme sua necessidade.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm text-brand-primary"><Check size={20} /></div>
                  <div>
                    <span className="font-bold text-gray-900 block">Licenciamento Ambiental</span>
                    <span className="text-gray-600 text-sm">Descarte legal em estações de tratamento.</span>
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Modelos Disponíveis</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SERVICES.map((s) => (
                <Link key={s.id} to={`/aluguel-${s.slug}`} className="block group">
                  <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-brand-primary hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-gray-900 group-hover:text-brand-primary transition-colors">{s.title}</h4>
                      <div className="text-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                         <Check size={16} />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">{s.shortDescription}</p>
                    <span className="text-xs font-bold text-brand-primary mt-3 inline-block">Ver detalhes &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="lg:col-span-1">
             <div className="sticky top-28 bg-brand-primary rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-brand-dark/20 p-6 text-center">
                  <h3 className="text-xl font-bold text-white">Precisa de Banheiros em {neighborhood.name}?</h3>
                </div>
                <div className="p-8 space-y-5">
                   <p className="text-white/90 text-center text-sm mb-4">
                     Temos equipes próximas prontas para atender.
                   </p>
                  <a 
                    href={COMPANY_INFO.whatsappLink}
                    className="flex items-center justify-center gap-2 w-full bg-brand-secondary text-gray-900 font-bold py-4 rounded-xl hover:bg-amber-400 transition-colors shadow-lg"
                  >
                    Orçamento via WhatsApp
                  </a>
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="flex items-center justify-center gap-2 w-full bg-white/10 text-white border border-white/30 font-bold py-4 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <Phone size={18} />
                    Ligar: {COMPANY_INFO.formattedPhone}
                  </a>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LocationPage;