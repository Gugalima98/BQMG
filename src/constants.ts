import { Service, Neighborhood } from './types';
import cabineStandardImage from './assets/cabine-standard.png';
import cabineVipImage from './assets/banheiro-quimico-vip.png';
import cabineLuxoImage from './assets/banheiro-quimico-de-luxo-1.png';
import cabinePneImage from './assets/Banheiro-quimico-cabine-pne-1.png';
import cabineChuveiroImage from './assets/cabine-com-chuveiro-1.png';

export const COMPANY_INFO = {
  name: "Banheiro Químico MG",
  phone: "21978946985",
  formattedPhone: "(21) 97894-6985",
  whatsappLink: "https://wa.me/5521978946985",
  city: "Belo Horizonte",
  email: "contato@banheiroquimicomg.com.br",
  address: "Av. Afonso Pena, 2314 - Centro - Belo Horizonte - MG, 30130-005",
  cnpj: "79.788.331/0001-98"
};

// Using specific Unsplash IDs to ensure high quality "Professional/Construction/Clean" vibe 
// instead of random sources which can be unreliable.
export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Cabine Standard',
    slug: 'cabine-standard',
    shortDescription: 'Banheiro Químico Standard: Conforto e praticidade em qualquer lugar.',
    fullDescription: 'Desfrute de banheiros bem equipados e mantidos com padrões de higiene impecáveis.\n\nNossa opção de banheiro químico standard oferece uma solução prática e acessível para atender suas necessidades em eventos ou obras.',
    features: ['Tanque de contenção de dejetos com assento', 'Tampa do assento', 'Mictório', 'Porta Objetos', 'Suporte para papel higiênico', 'Piso antiderrapante e teto translúcido'],
    image: cabineStandardImage,
    specs: { altura: "2,35m", largura: "1,10m", comprimento: "1,20m", alturaAssento: "460mm", volumeTanque: "280 litros", peso: "70 KG" }
  },
  {
    id: '2',
    title: 'Cabine VIP',
    slug: 'cabine-vip',
    shortDescription: 'Banheiros Químicos VIP: Luxo, higiene e sofisticação.',
    fullDescription: 'Desfrute de banheiros bem equipados e mantidos com padrões de higiene impecáveis.\n\nNossa opção de banheiro químico VIP oferece uma solução prática e acessível para atender suas necessidades em eventos ou obras.',
    features: ['Tanque de contenção de dejetos com assento', 'Tampa do assento', 'Mictório', 'Pia com capacidade de 60 litros de água, com acionamento através de bomba de pé;', 'Porta Objetos', 'Porta sabonete líquido;', 'Porta Papel Toalha;', 'Suporte para papel higiênico', 'Piso antiderrapante e teto translúcido'],
    image: cabineVipImage,
    specs: { altura: "2,35m", largura: "1,10m", comprimento: "1,20m", alturaAssento: "460mm", volumeTanque: "280 litros", peso: "80 KG" }
  },
  {
    id: '3',
    title: 'Cabine Luxo',
    slug: 'cabine-luxo',
    shortDescription: 'Banheiros Químicos de Luxo: Exclusividade e higiene impecáveis.',
    fullDescription: 'Desfrute de banheiros bem equipados e mantidos com padrões de higiene impecáveis.\n\nNossa opção de banheiro químico de luxo oferece uma solução prática e confortável para atender suas necessidades em eventos ou obras.\n\n*Cabines podem sofrer alterações',
    features: ['Assoalho de madeira', 'Divisórias seguras e bonitas', 'Pias e sanitários de louça', 'Suporte para papel higiênico', 'Decoração elegante'],
    image: cabineLuxoImage,
    specs: { altura: "2,35m", largura: "1,10m", comprimento: "1,20m", alturaAssento: "460mm", volumeTanque: "280 litros", peso: "70 KG" }
  },
  {
    id: '4',
    title: 'Cabine PNE',
    slug: 'cabine-pne',
    shortDescription: 'Banheiros Químicos PNE: Acessibilidade e conforto garantidos.',
    fullDescription: 'Desfrute de banheiros adaptados para Pessoas com Necessidades Especiais (PNE), bem equipados e mantidos com padrões de higiene impecáveis.\n\nNossa opção de banheiro químico PNE oferece uma solução prática e acessível para atender suas necessidades em eventos ou obras.',
    features: ['Tanque de contenção de dejetos com assento', 'Tampa do assento', 'Mictório', 'Pia com capacidade de 60 litros de água, com acionamento através de bomba de pé;', 'Porta Objetos', 'Porta sabonete líquido;', 'Porta Papel Toalha;', 'Suporte para papel higiênico', 'Piso antiderrapante e teto translúcido'],
    image: cabinePneImage,
    specs: { altura: "2,35m", largura: "1,10m", comprimento: "1,20m", alturaAssento: "460mm", volumeTanque: "280 litros", peso: "70 KG" }
  },
  {
    id: '5',
    title: 'Cabine Chuveiro',
    slug: 'cabine-chuveiro',
    shortDescription: 'Cabines com Chuveiro: Conforto e praticidade para você.',
    fullDescription: 'Desfrute de banheiros bem equipados e mantidos com padrões de higiene impecáveis.\n\nNossa opção de banheiro químico com chuveiro oferece uma solução prática e acessível para atender suas necessidades em eventos ou obras.',
    features: ['Cabine em polietileno de alta densidade', 'Chuveiro elétrico', 'Ralo sifonado para escoamento da água', 'Piso antiderrapante'],
    image: cabineChuveiroImage,
    specs: { altura: "2,35m", largura: "1,10m", comprimento: "1,20m", peso: "70 KG" }
  }
];

export const NEIGHBORHOODS: Neighborhood[] = [
  { name: 'Savassi', slug: 'savassi' },
  { name: 'Lourdes', slug: 'lourdes' },
  { name: 'Funcionários', slug: 'funcionarios' },
  { name: 'Santo Agostinho', slug: 'santo-agostinho' },
  { name: 'Centro', slug: 'centro' },
  { name: 'Pampulha', slug: 'pampulha' },
  { name: 'Santa Efigênia', slug: 'santa-efigenia' },
  { name: 'Serra', slug: 'serra' },
  { name: 'Floresta', slug: 'floresta' },
  { name: 'Anchieta', slug: 'anchieta' },
  { name: 'Carmo', slug: 'carmo' },
  { name: 'Cruzeiro', slug: 'cruzeiro' },
  { name: 'Santa Tereza', slug: 'santa-tereza' },
  { name: 'Horto', slug: 'horto' },
  { name: 'Cidade Jardim', slug: 'cidade-jardim' },
  { name: 'Luxemburgo', slug: 'luxemburgo' },
  { name: 'Gutierrez', slug: 'gutierrez' },
  { name: 'Buritis', slug: 'buritis' },
  { name: 'Barroca', slug: 'barroca' },
  { name: 'Nova Granada', slug: 'nova-granada' },
  { name: 'Padre Eustáquio', slug: 'padre-eustaquio' },
  { name: 'Carlos Prates', slug: 'carlos-prates' },
  { name: 'Caiçara', slug: 'caicara' },
  { name: 'Prado', slug: 'prado' },
  { name: 'Calafate', slug: 'calafate' },
  { name: 'Gameleira', slug: 'gameleira' },
  { name: 'Nova Suíça', slug: 'nova-suica' },
  { name: 'Coração de Jesus', slug: 'coracao-de-jesus' },
  { name: 'Barro Preto', slug: 'barro-preto' },
  { name: 'Santo Antônio', slug: 'santo-antonio' },
  { name: 'São Pedro', slug: 'sao-pedro' }
];