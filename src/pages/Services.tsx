import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Check, Star } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/20"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-brand-secondary font-bold tracking-wider uppercase text-sm mb-3 block">Excelência em Saneamento</span>
          <h1 className="text-5xl font-extrabold mb-6">Nossos Serviços</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Tecnologia, higiene e conforto. Escolha o modelo ideal para sua necessidade.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-16">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-10 bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={service.slug === 'cabine-standard' 
                ? 'lg:w-1/3 h-72 lg:h-auto relative overflow-hidden group'
                : 'lg:w-1/2 h-72 lg:h-auto relative overflow-hidden group'
              }>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full ${service.slug === 'cabine-standard' ? 'object-contain' : 'object-cover'} transform group-hover:scale-105 transition-transform duration-700`}
                />
              </div>
              <div className={service.slug === 'cabine-standard' ? 'lg:w-2/3 p-10 flex flex-col justify-center' : 'lg:w-1/2 p-10 flex flex-col justify-center'}>
                <div className="flex items-center gap-2 mb-3">
                  <Star className="text-brand-secondary fill-current" size={16} />
                  <span className="text-brand-primary font-bold text-sm uppercase tracking-wide">Disponibilidade Imediata</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">{service.title}</h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">{service.fullDescription}</p>
                
                <div className="bg-brand-light/50 p-6 rounded-2xl mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">Destaques:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                    {service.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <div className="bg-brand-primary/10 p-1 rounded-full">
                          <Check size={14} className="text-brand-primary" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={`/aluguel-${service.slug}`}
                  className="inline-block bg-brand-primary hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-fit"
                >
                  Ver Detalhes e Contratar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
