export type PageId = 'home' | 'about' | 'services' | 'portfolio' | 'faq' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  aspects: string[];
  category: string;
}

export interface PortfolioCreation {
  id: string;
  title: string;
  category: 'tables' | 'shelving' | 'furniture' | 'interiors';
  categoryLabel: string;
  material: string;
  dimensionsNote: string;
  description: string;
  image: string;
  features: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
  estimatedBudget?: string;
}
