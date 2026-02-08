import React, { useState } from 'react';
import { Plus, Minus, Calendar } from 'lucide-react';
import { FAQItem } from '../types';
import { WavyDivider } from './WavyDivider';

const faqs: FAQItem[] = [
  {
    question: 'Jak szybko działa bot?',
    answer: 'Bot odpowiada natychmiastowo, bez opóźnień. Jest w stanie obsłużyć tysiące połączeń jednocześnie, gwarantując zerowy czas oczekiwania dla Twoich klientów.',
  },
  {
    question: 'Czy chatbot integruje się z moim CRM?',
    answer: 'Tak, oferujemy natywne integracje z popularnymi systemami jak HubSpot, Salesforce, Pipedrive i wieloma innymi. Dostępne jest również API do niestandardowych wdrożeń.',
  },
  {
    question: 'Ile to kosztuje?',
    answer: 'Każdy biznes jest inny, dlatego nie stosujemy sztywnego cennika. Koszt wdrożenia zależy od specyfiki Twojej branży, stopnia skomplikowania procesów oraz oczekiwanych funkcjonalności. Umów się na krótką rozmowę, podczas której poznamy Twoje potrzeby i przygotujemy ofertę szytą na miarę.',
  },
  {
    question: 'Czy dane są bezpieczne?',
    answer: 'Bezpieczeństwo to nasz priorytet. Wszystkie dane są szyfrowane (SSL/TLS), a nasze serwery znajdują się w Unii Europejskiej, zapewniając pełną zgodność z RODO.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleBookingClick = () => {
    if (window.Cal) {
      window.Cal("ui", "open", { calLink: "automationodyssey.pl/konsultacja-ai" });
    } else {
      window.open("https://cal.com/automationodyssey.pl/konsultacja-ai", "_blank");
    }
  };

  return (
    <section id="faq" className="py-32 bg-dark-lighter relative">
      {/* No Top Divider - The bottom divider of HowItWorks handles the transition to this light section */}
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-12 text-center text-white">
          Częste <span className="text-primary">Pytania</span>
        </h2>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-700 rounded-xl bg-dark overflow-hidden transition-all duration-300 hover:border-gray-500 shadow-md"
            >
              <button
                type="button"
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-primary shrink-0 transition-transform duration-300" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-400 shrink-0 transition-transform duration-300" />
                )}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-400">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-white">Masz inne pytania?</h3>
            <button 
              type="button"
              onClick={handleBookingClick}
              data-cal-link="automationodyssey.pl/konsultacja-ai"
              data-cal-namespace="konsultacja-ai"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-lg text-white shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <Calendar size={20} />
              Umów bezpłatną konsultację
            </button>
        </div>
      </div>
      
      {/* Bottom Divider: Dark rise to Footer */}
      <WavyDivider position="bottom" fill="#0f0f1e" />
    </section>
  );
};