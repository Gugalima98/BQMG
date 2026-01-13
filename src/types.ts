export interface ServiceSpecs {
  altura?: string;
  largura?: string;
  comprimento?: string;
  alturaAssento?: string;
  volumeTanque?: string;
  peso?: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
  specs?: ServiceSpecs;
}

export interface Neighborhood {
  name: string;
  slug: string;
}

export interface NavItem {
  label: string;
  path: string;
}