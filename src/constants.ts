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
    shortDescription: 'A solução econômica e eficiente para obras e eventos de pequeno porte.',
    fullDescription: 'Nossa Cabine Standard é o modelo mais popular, ideal para canteiros de obras, feiras e eventos abertos. Fabricada em polietileno de alta densidade, oferece durabilidade e facilidade de limpeza.',
    features: ['Caixa de detritos 220L', 'Mictório acoplado', 'Suporte para papel higiênico', 'Ventilação estratégica'],
    image: cabineStandardImage
  },
  {
    id: '2',
    title: 'Cabine VIP',
    slug: 'cabine-vip',
    shortDescription: 'Mais conforto e higiene com sistema de descarga e pia interna.',
    fullDescription: 'A Cabine VIP eleva o padrão do seu evento. Equipada com sistema de descarga recirculante e pia interna, proporciona uma experiência muito mais agradável aos usuários.',
    features: ['Descarga recirculante', 'Pia com torneira', 'Espelho', 'Dispenser de sabão e papel toalha'],
    image: cabineVipImage
  },
  {
    id: '3',
    title: 'Cabine Luxo',
    slug: 'cabine-luxo',
    shortDescription: 'O máximo em sofisticação para casamentos e eventos corporativos.',
    fullDescription: 'Para ocasiões especiais, a Cabine Luxo é a escolha certa. Acabamento superior, maior espaço interno e iluminação diferenciada (opcional) para garantir total conforto.',
    features: ['Acabamento premium', 'Assento almofadado', 'Lixeira interna', 'Espelho grande'],
    image: cabineLuxoImage
  },
  {
    id: '4',
    title: 'Cabine PNE',
    slug: 'cabine-pne',
    shortDescription: 'Acessibilidade garantida com amplo espaço e corrimãos de apoio.',
    fullDescription: 'Conformidade total com as normas de acessibilidade. Nossa cabine PNE possui piso plano ao nível do solo, amplo espaço interno para giro de cadeira de rodas e corrimãos de apoio em todo o perímetro.',
    features: ['Piso plano sem degraus', 'Corrimãos de segurança', 'Espaço para manobra 360º', 'Fechadura acessível'],
    image: cabinePneImage
  },
  {
    id: '5',
    title: 'Cabine Chuveiro',
    slug: 'cabine-chuveiro',
    shortDescription: 'Ideal para campings, eventos esportivos e canteiros de obras.',
    fullDescription: 'Garanta a higiene completa com nossas Cabines Chuveiro. Podem ser conectadas à rede de água e esgoto local ou utilizadas com reservatórios externos.',
    features: ['Chuveiro com registro', 'Ralo sifonado', 'Ganchos para roupa', 'Piso antiderrapante'],
    image: cabineChuveiroImage
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