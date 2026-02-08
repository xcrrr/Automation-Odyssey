import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

declare global {
  interface Window {
    Cal: any;
  }
}