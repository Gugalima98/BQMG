import React from 'react';
import { Award, Clock, ShieldCheck, Users, MapPin, Phone, Mail, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import aboutImage from '../assets/banheiro-quimico-mg-2.jpg';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-brand-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-brand-secondary font-bold tracking-wider uppercase text-sm mb-3 block">Nossa Essência</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quem Somos</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A parceira ideal para eventos e obras em Belo Horizonte e região.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Column 1: Story */}
          <div>
             <div className="flex items-center gap-2 mb-6">
                <span className="w-12 h-1 bg-brand-primary rounded-full"></span>
                <h2 className="text-3xl font-bold text-gray-900">Nossa História</h2>
             </div>
             
             <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-justify">
                <p>
                  Somos uma empresa especializada em oferecer serviços de aluguel de banheiros químicos em Minas Gerais. Com uma extensa trajetória e um histórico sólido, destacamo-nos como referência no setor na região.
                </p>
                <p>
                  Nossa missão é fornecer soluções práticas e de alta qualidade para atender às diversas necessidades de banheiros temporários em eventos e locais variados em todo o estado.
                </p>
                <p>
                  A busca incessante pela excelência reflete-se em nossa ampla variedade de opções de banheiros químicos. Oferecemos desde banheiros padrão até unidades adaptadas para pessoas com necessidades especiais (PNE), bem como opções com chuveiro para maior comodidade.
                </p>
                <p>
                  Priorizamos a manutenção rigorosa dos nossos banheiros, seguindo os mais altos padrões de limpeza e higiene, para garantir um ambiente sempre confortável e seguro para os usuários em todas as ocasiões em Minas Gerais.
                </p>
                <p>
                  Com uma equipe altamente profissional e dedicada, estamos prontos para fornecer suporte em todas as etapas do processo. Desde a seleção do banheiro adequado até a entrega, instalação e retirada, nosso compromisso é garantir um serviço ágil e eficiente em todo o estado.
                </p>
                <p>
                  A satisfação do cliente é nossa prioridade máxima, e nossa equipe está sempre pronta para superar suas expectativas.
                </p>
                <p className="font-bold text-brand-primary">
                  Confie na Banheiro Químico MG para uma experiência confiável, higiênica e de qualidade em todos os cantos do estado mineiro.
                </p>
             </div>
          </div>

          {/* Column 2: Image & Corporate Info */}
          <div className="flex flex-col gap-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-secondary/20 rounded-2xl transform rotate-2"></div>
              {/* Imagem de Logística/Caminhão Munck para representar a frota */}
              <img 
                src={aboutImage} 
                alt="Logística e Transporte BQMG" 
                className="relative rounded-xl shadow-xl w-full h-80 object-cover"
              />
            </div>

            {/* Corporate Info Card */}
            <div className="bg-brand-light/50 border border-brand-primary/20 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">Dados Empresariais</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-full shadow-sm text-brand-primary mt-1">
                    <FileText size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">CNPJ</span>
                    <span className="font-medium text-gray-900 text-lg">{COMPANY_INFO.cnpj}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-full shadow-sm text-brand-primary mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">E-mail</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="font-medium text-gray-900 hover:text-brand-primary transition-colors text-lg break-all">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-full shadow-sm text-brand-primary mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">Telefone</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="font-medium text-gray-900 hover:text-brand-primary transition-colors text-lg">
                      {COMPANY_INFO.formattedPhone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-full shadow-sm text-brand-primary mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wide">Endereço</span>
                    <span className="font-medium text-gray-900 text-lg leading-snug">
                      {COMPANY_INFO.address}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Clock size={40} />, title: "Pontualidade", desc: "Entrega e retirada no prazo combinado." },
            { icon: <ShieldCheck size={40} />, title: "Qualidade", desc: "Equipamentos novos e higienizados." },
            { icon: <Users size={40} />, title: "Atendimento", desc: "Equipe pronta para resolver seu problema." },
            { icon: <Award size={40} />, title: "Experiência", desc: "Anos de mercado em BH e região." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl text-center hover:bg-brand-light hover:shadow-lg transition-all border border-gray-100 group">
              <div className="text-brand-primary flex justify-center mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;