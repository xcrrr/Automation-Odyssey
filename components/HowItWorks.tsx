import React from 'react';
import { Settings, Mic, Link, CheckCircle, ArrowRight } from 'lucide-react';
import { Step } from '../types';

const steps: Step[] = [
  {
    id: 1,
    title: 'Blueprint Strategiczny',
    description: 'Analizujemy wąskie gardła w Twojej firmie i projektujemy logikę agenta. Działający prototyp w 48h.',
    Icon: Settings,
  },
  {
    id: 2,
    title: 'Inżynieria Głosu',
    description: 'Klonujemy Twój głos lub wybieramy z biblioteki profesjonalnych modeli. Gwarancja 100% naturalności.',
    Icon: Mic,
  },
  {
    id: 3,
    title: 'Głęboka Integracja',
    description: 'Spinamy AI z Twoim CRM, kalendarzem i telefonem. Dane płyną tam, gdzie ich potrzebujesz.',
    Icon: Link,
  },
  {
    id: 4,
    title: 'Dominacja Rynkowa',
    description: 'Uruchamiamy system i optymalizujemy konwersję. Twoje AI dzwoni, sprzedaje i umawia spotkania.',
    Icon: CheckCircle,
  },
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
    <section id="how-it-works" className="py-24 md:py-40 bg-[#080505] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-heading font-bold mb-6 text-white tracking-tighter">
            Proces <span className="gradient-text">Odysei.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Od chaosu manualnych zadań do precyzyjnie naoliwionej machiny AI. Szybko, konkretnie, bez zbędnych pytań.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 px-2 md:px-0">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              {/* Connector Arrows for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 z-20">
                  <ArrowRight size={24} className="text-white/10 group-hover:text-primary transition-colors duration-500" />
                </div>
              )}

              <div className="relative p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 transition-all duration-500 hover:border-primary/40 h-full flex flex-col items-center text-center">
                {/* Step Number Badge */}
                <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-dark border border-white/10 flex items-center justify-center">
                   <span className="text-primary font-black text-[10px] md:text-xs">0{step.id}</span>
                </div>

                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/5 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-8 border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <step.Icon className="text-white w-6 h-6 md:w-8 md:h-8" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 tracking-tight group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">{step.description}</p>
                
                {/* Subtle Progress Indicator */}
                <div className="mt-6 md:mt-8 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                   <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out" 
                    style={{ width: index === 0 ? '25%' : index === 1 ? '50%' : index === 2 ? '75%' : '100%' }}
                   ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="mt-16 md:mt-24 p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 backdrop-blur-xl mx-2 md:mx-0">
           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                 <Mic className="text-primary animate-pulse w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                 <h4 className="text-lg md:text-xl font-bold text-white">Gotowy na własnego klona AI?</h4>
                 <p className="text-gray-400 text-sm md:text-base font-light">Sprawdź demo głosu na żywo podczas darmowej rozmowy.</p>
              </div>
           </div>
           <button 
            onClick={handleBookingClick}
            className="px-8 md:px-10 py-3.5 md:py-4 bg-white text-black rounded-full font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-300 shadow-2xl w-full md:w-auto text-center"
           >
            Umów Konsultację
           </button>
        </div>
      </div>
    </section>
  );
};
