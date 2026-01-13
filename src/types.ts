export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  image: string;
}

export interface Neighborhood {
  name: string;
  slug: string;
}

export interface NavItem {
  label: string;
  path: string;
}