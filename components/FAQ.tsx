import React, { useState } from 'react';
import { Plus, HelpCircle } from 'lucide-react';

const faqs = [
  { question: 'Jak szybko działa bot?', answer: 'Bot odpowiada natychmiastowo, bez żadnych opóźnień.' },
  { question: 'Czy bot integruje się z CRM?', answer: 'Tak, integrujemy się z GHL, HubSpot, Pipedrive i Make.com.' },
  { question: 'Ile trwa wdrożenie?', answer: 'Działający prototyp w 48h, pełne wdrożenie do 14 dni.' },
  { question: 'Czy dane są bezpieczne?', answer: 'Tak, pełna zgodność z RODO i szyfrowanie SSL.' },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleBookingClick = () => {
    if (window.Cal) {
      window.Cal("ui", "open", { calLink: "automationodyssey.pl/konsultacja-ai" });
    } else {
      window.open("https://cal.com/automationodyssey.pl/konsultacja-ai", "_blank");
    }
  };

  return (
    <section id="faq" className="py-24 md:py-40 bg-[#020502] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 text-white tracking-tighter uppercase">
            FAQ
          </h2>
          <p className="text-gray-500 text-lg font-light">
            Wszystko, co musisz wiedzieć przed startem.
          </p>
        </div>

        <div className="space-y-4 px-2">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-[2rem] border border-white/5 bg-white/[0.01] overflow-hidden transition-all duration-500 hover:border-white/10">
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-lg font-bold tracking-tight transition-colors ${openIndex === index ? 'text-white' : 'text-gray-500'}`}>
                  {faq.question}
                </span>
                <Plus size={20} className={`transition-transform duration-500 ${openIndex === index ? 'rotate-45 text-white' : 'text-gray-700'}`} />
              </button>
              <div className={`transition-all duration-500 ease-luxury overflow-hidden ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-8 text-gray-500 text-base font-light leading-relaxed border-t border-white/5 pt-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <button onClick={handleBookingClick} className="btn-luxury">
             Masz pytania? Porozmawiajmy.
           </button>
        </div>
      </div>
    </section>
  );
};
