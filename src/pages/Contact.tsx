import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-brand-dark text-white py-20 relative">
        <div className="absolute inset-0 bg-brand-primary/10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Entre em Contato</h1>
          <p className="text-xl text-gray-300">Estamos prontos para atender sua solicitação com agilidade.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 mb-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-brand-secondary pl-4">Envie uma mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nome Completo</label>
                  <input required type="text" id="name" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary bg-gray-50 p-4 border transition-all" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">E-mail</label>
                  <input required type="email" id="email" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary bg-gray-50 p-4 border transition-all" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Telefone / WhatsApp</label>
                  <input required type="tel" id="phone" className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary bg-gray-50 p-4 border transition-all" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Mensagem</label>
                  <textarea required id="message" rows={4} className="w-full rounded-lg border-gray-300 shadow-sm focus:border-brand-primary focus:ring-brand-primary bg-gray-50 p-4 border transition-all" placeholder="Descreva sua necessidade (data, local, quantidade)..."></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-primary hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  <span>Enviar Mensagem</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Info & Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-brand-secondary pl-4">Canais de Atendimento</h2>
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="bg-brand-light p-3 rounded-full text-brand-primary shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Endereço</h3>
                    <p className="text-gray-600 leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="bg-brand-light p-3 rounded-full text-brand-primary shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Telefone</h3>
                    <p className="text-gray-600 text-lg">{COMPANY_INFO.formattedPhone}</p>
                    <p className="text-sm text-green-600 font-semibold mt-1">Disponível no WhatsApp</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="bg-brand-light p-3 rounded-full text-brand-primary shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">E-mail</h3>
                    <p className="text-gray-600">{COMPANY_INFO.email}</p>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <div className="bg-brand-light p-3 rounded-full text-brand-primary shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Horário</h3>
                    <p className="text-gray-600">Seg - Sex: 08:00 - 18:00</p>
                    <p className="text-gray-600">Sábado: 08:00 - 12:00</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl shadow-xl h-80 flex items-center justify-center relative overflow-hidden group border-4 border-white">
              <div className="absolute inset-0 bg-cover bg-center opacity-60 transition-opacity group-hover:opacity-40" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)'}}></div>
              <div className="relative z-10 text-center p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg m-4">
                <MapPin className="mx-auto text-brand-primary mb-3" size={40} />
                <p className="font-bold text-gray-900 text-lg">Localização Estratégica</p>
                <p className="text-sm text-gray-600 mt-2">Atendemos toda Belo Horizonte e Grande BH com rapidez.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;