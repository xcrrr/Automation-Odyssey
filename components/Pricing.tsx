import React from 'react';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';
import { RevealOnScroll } from './RevealOnScroll';

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '999 zł',
    description: 'Idealny dla małych firm i freelancerów.',
    features: [
      '1 AI Voice Bot',
      'Do 500 minut rozmów/mc',
      'Podstawowa integracja (Email)',
      'Raportowanie tygodniowe',
      'Wsparcie mailowe'
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '2499 zł',
    description: 'Dla rozwijających się firm potrzebujących skali.',
    features: [
      '3 AI Voice Boty',
      'Nielimitowane minuty',
      'Pełna integracja CRM & Kalendarz',
      'Panel analityczny Live',
      'Dedykowany opiekun',
      'Nagrywanie rozmów',
      'Wsparcie 24/7'
    ],
    isPopular: true,
  },
];

export const Pricing: React.FC = () => {
  const handleBookingClick = () => {
    if (window.Cal) {
      window.Cal("ui", "open", { calLink: "automationodyssey.pl/konsultacja-ai" });
    } else {
      window.open("https://cal.com/automationodyssey.pl/konsultacja-ai", "_blank");
    }
  };

  return (
    <section id="pricing" className="py-24 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 pt-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
            Proste <span className="text-secondary">Zasady</span>
          </h2>
          <p className="text-gray-400">Wybierz plan, który pasuje do Twojego tempa rozwoju.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <RevealOnScroll key={plan.name} delay={index * 200}>
              <div 
                className={`relative h-full p-8 rounded-2xl border transition-all duration-300 flex flex-col
                  ${plan.isPopular 
                    ? 'bg-dark border-secondary shadow-[0_0_40px_rgba(99,102,241,0.2)] transform md:-translate-y-4' 
                    : 'bg-dark/50 border-gray-700 hover:border-gray-500'
                  }
                `}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-secondary to-primary text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
                    Najczęściej Wybierany
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/miesiąc</span>
                </div>
                <p className="text-gray-400 mb-8 border-b border-gray-700 pb-8">{plan.description}</p>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-3" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  type="button"
                  onClick={handleBookingClick}
                  data-cal-link="automationodyssey.pl/konsultacja-ai"
                  data-cal-namespace="konsultacja-ai"
                  data-cal-config='{"layout":"month_view","theme":"dark"}'
                  className={`w-full py-3 rounded-xl font-bold transition-all duration-300 cursor-pointer
                    ${plan.isPopular 
                      ? 'bg-secondary hover:bg-secondary/80 text-white shadow-lg shadow-secondary/25' 
                      : 'bg-transparent border border-gray-600 text-white hover:bg-gray-800'
                    }
                  `}
                >
                  Umów Rozmowę
                </button>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};