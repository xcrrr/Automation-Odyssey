import React from 'react';
import { Settings, Mic, Link, CheckCircle } from 'lucide-react';

const steps = [
  { id: 1, title: 'Blueprint', description: 'Analizujemy wąskie gardła i projektujemy logikę agenta.', Icon: Settings },
  { id: 2, title: 'Głos', description: 'Klonujemy Twój głos lub wybieramy z biblioteki profesjonalnych modeli.', Icon: Mic },
  { id: 3, title: 'Integracja', description: 'Spinamy AI z Twoim CRM, kalendarzem i telefonem.', Icon: Link },
  { id: 4, title: 'Start', description: 'Uruchamiamy system i optymalizujemy konwersję.', Icon: CheckCircle },
];

export const HowItWorks: React.FC = () => {
  const handleBookingClick = () => {
    if (window.Cal) {
      window.Cal("ui", "open", { calLink: "automationodyssey.pl/konsultacja-ai" });
    } else {
      window.open("https://cal.com/automationodyssey.pl/konsultacja-ai", "_blank");
    }
  };

  return (
    <section id="how-it-works" className="py-24 md:py-40 bg-[#050202] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(99,102,241,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 text-white tracking-tighter uppercase">
            Proces <span className="gradient-text">Odysei</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Od mapowania procesów do pełnej autonomii. Szybko, konkretnie, profesjonalnie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-0">
          {steps.map((step) => (
            <div key={step.id} className="relative group p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 transition-all duration-500 hover:border-white/10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-white/10 transition-all">
                  <step.Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase">{step.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm">{step.description}</p>
                <div className="absolute top-6 right-8 text-white/5 font-black text-4xl">{step.id}</div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
           <button onClick={handleBookingClick} className="btn-luxury">
            Umów Konsultację
           </button>
        </div>
      </div>
    </section>
  );
};
