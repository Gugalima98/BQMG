import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { SERVICES, COMPANY_INFO } from '../constants';
import { CheckCircle, ArrowRight, Star, Tent, Map, BadgeCheck, Quote, User } from 'lucide-react';

const Home: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ricardo Mendes",
      role: "Engenheiro Civil",
      text: "Agilidade impressionante. Solicitamos para uma obra urgente na região da Pampulha e em menos de 24h tudo estava instalado e pronto para uso.",
      rating: 5
    },
    {
      id: 2,
      name: "Fernanda Costa",
      role: "Cerimonialista",
      text: "Banheiros extremamente limpos e novos. Nossos convidados do casamento elogiaram muito a estrutura da Cabine Luxo. Super recomendo!",
      rating: 5
    },
    {
      id: 3,
      name: "Lucas Oliveira",
      role: "Produtor de Eventos",
      text: "Parceiros de longa data. A BQMG atende todos os nossos eventos de rua em BH com profissionalismo ímpar e equipe técnica sempre a postos.",
      rating: 5
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeroSlider />

      {/* 1. SEÇÃO NOSSO DIFERENCIAL (Prioridade Alta) */}
      <section className="py-24 bg-white relative z-10 -mt-8 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Por que escolher a BQMG</span>
             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">NOSSO DIFERENCIAL</h2>
             <div className="w-20 h-1 bg-brand-secondary mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border-t-4 border-brand-secondary hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-brand-primary shadow-sm">
                <Tent size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">TODO TIPO DE EVENTO</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Desfrute da tranquilidade de contar com uma empresa com quase uma década de experiência, garantindo a entrega dos nossos serviços para festas, eventos, canteiros de obras, shows e feiras.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border-t-4 border-brand-primary hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-brand-primary shadow-sm">
                <Map size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ÁREA DE COBERTURA</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Atendemos em toda a extensão do estado de Minas Gerais, levando nossos serviços até você. Conte conosco para atender suas necessidades em qualquer região do estado.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border-t-4 border-brand-secondary hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-brand-primary shadow-sm">
                <BadgeCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% CERTIFICADO</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A Banheiro Químico MG está regularizada nos órgãos de fiscalização, como INEA, IBAMA e ANVISA, para aluguel de banheiros químicos portáteis. Confie em nossa qualidade e conformidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO SOBRE NÓS (About) */}
      <section className="py-24 bg-brand-light/50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 text-brand-secondary mb-4">
                <Star className="fill-current" size={20} />
                <span className="font-bold uppercase tracking-wider">Tradição e Confiança</span>
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Mais do que equipamentos, entregamos <span className="text-brand-primary">soluções</span>
              </h2>
              <div className="space-y-6 mb-8 text-gray-600 text-lg leading-relaxed">
                <p>
                  Com anos de experiência no mercado de locação de banheiros químicos em Belo Horizonte, a BQMG se destaca pela qualidade dos equipamentos e excelência no atendimento.
                </p>
                <p>
                  Nossa missão é fornecer soluções de saneamento portátil que garantam conforto, dignidade e higiene para qualquer ambiente, seja uma obra civil ou um evento de luxo.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {['Atendimento 24h', 'Frota Própria', 'Higienização ISO', 'Entrega Expressa'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <CheckCircle className="text-brand-primary flex-shrink-0" size={24} />
                    <span className="font-semibold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/sobre"
                className="inline-block bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200"
              >
                Conheça Nossa História
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-brand-secondary rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="absolute -inset-4 bg-brand-primary rounded-2xl transform -rotate-2 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Equipe BQMG em ação" 
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Mantido entre Sobre e Depoimentos para fluxo lógico, mas com peso visual secundário) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Nossos Modelos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Conheça a qualidade que levamos para o seu evento.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden relative">
                   <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow whitespace-pre-wrap">{service.fullDescription}</p>
                  <Link to={`/aluguel-${service.slug}`} className="text-brand-primary font-bold hover:underline flex items-center gap-1 mt-auto">
                    Ver detalhes <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/servicos" className="inline-block border-2 border-brand-primary text-brand-primary font-bold px-8 py-3 rounded-full hover:bg-brand-primary hover:text-white transition-all">
              Ver Catálogo Completo
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DE DEPOIMENTOS (Nova) */}
      <section className="py-24 bg-brand-primary relative overflow-hidden">
         {/* Texture Overlay */}
         <div className="absolute inset-0 bg-brand-dark/10"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <span className="text-brand-secondary font-bold tracking-wider uppercase text-sm mb-2 block">O que dizem sobre nós</span>
             <h2 className="text-3xl md:text-4xl font-extrabold text-white">DEPOIMENTOS DE CLIENTES</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl p-8 shadow-2xl relative transform transition-transform hover:-translate-y-2">
                <Quote size={40} className="text-brand-secondary/30 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-brand-secondary fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-primary font-bold">
                    <User size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                    <span className="text-xs text-brand-primary font-semibold uppercase">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
         </div>
      </section>

      {/* 4. SEÇÃO DE CONTATO (CTA Bar) */}
      <section className="bg-white py-20 relative border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pronto para garantir o melhor para seu evento?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Solicite um orçamento sem compromisso e garanta a reserva da sua data.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-brand-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ligar Agora
            </a>
            <a 
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-secondary text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;