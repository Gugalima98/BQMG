import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES, COMPANY_INFO } from '../constants';
import { CheckCircle, Phone, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { slug: rawSlug } = useParams<{ slug: string }>();

  // Extract the actual service slug from the URL slug (e.g., "aluguel-cabine-standard" -> "cabine-standard")
  const serviceSlug = rawSlug && rawSlug.startsWith('aluguel-') 
    ? rawSlug.substring('aluguel-'.length) 
    : null;

  const service = SERVICES.find((s) => s.slug === serviceSlug);

  if (!service) {
    // If the slug is invalid or the service is not found, redirect.
    return <Navigate to="/servicos" replace />;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner for Service */}
      <div className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10" />
        <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover fixed-bg" />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 pt-16">
          <Link to="/servicos" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <ArrowLeft size={16} className="mr-2" /> Voltar para Serviços
          </Link>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">{service.title}</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl font-light">{service.shortDescription}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-brand-secondary rounded-full"></span>
              Descrição Completa
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 whitespace-pre-wrap">
              {service.fullDescription}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Características</h3>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-10">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="bg-brand-light p-2 rounded-lg text-brand-primary mt-1">
                      <CheckCircle size={16} />
                    </div>
                    <span className="text-gray-700 font-medium text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {service.specs && (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Especificações Técnicas</h3>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-10">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                    {Object.entries(service.specs).map(([key, value]) => (
                      <div key={key}>
                        <span className="block text-sm font-bold text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="text-lg font-semibold text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-brand-light p-6 rounded-2xl border border-green-100">
                  <div className="text-brand-primary mb-3"><ShieldCheck size={32} /></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Higienização Garantida</h3>
                  <p className="text-gray-600 text-sm">Todos os equipamentos passam por rigoroso processo de limpeza e desinfecção antes da entrega.</p>
               </div>
               <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                  <div className="text-brand-secondary mb-3"><Truck size={32} /></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Entrega Rápida</h3>
                  <p className="text-gray-600 text-sm">Logística otimizada para atender sua urgência em toda região metropolitana.</p>
               </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <span className="text-brand-primary font-bold tracking-widest text-xs uppercase">Orçamento Gratuito</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">Interessado neste modelo?</h3>
              </div>
              
              <div className="space-y-4">
                <a 
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-brand-primary hover:bg-green-700 text-white text-center font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Pedir no WhatsApp
                </a>
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="block w-full bg-white border-2 border-brand-primary text-brand-primary hover:bg-brand-light text-center font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Ligar Agora
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500 mb-2">Dúvidas? Fale com um especialista.</p>
                <p className="text-brand-secondary font-bold text-lg">{COMPANY_INFO.formattedPhone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;