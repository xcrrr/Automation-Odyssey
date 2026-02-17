import React from 'react';
import { Clock, TrendingUp, Users, PiggyBank } from 'lucide-react';

const features = [
  {
    id: '1',
    title: 'Dostępność 24/7',
    description: 'Boty pracują o każdej porze dnia i nocy. Twoja firma nigdy nie traci szansy na sprzedaż.',
    Icon: Clock,
    accent: 'bg-primary'
  },
  {
    id: '2',
    title: 'Redukcja Kosztów',
    description: 'Brak składek ZUS, urlopów i zwolnień. Pracownik, który kosztuje ułamek pensji.',
    Icon: PiggyBank,
    accent: 'bg-secondary'
  },
  {
    id: '3',
    title: 'Skalowanie',
    description: '5 czy 500 klientów jednocześnie? To nie ma znaczenia. Obsłużymy każdego bez sekundy czekania.',
    Icon: Users,
    accent: 'bg-accent'
  },
  {
    id: '4',
    title: 'Konwersja',
    description: 'Każdy nieodebrany telefon to strata. My zmieniamy go w realne spotkanie w Twoim kalendarzu.',
    Icon: TrendingUp,
    accent: 'bg-green-500'
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-40 bg-[#020205] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(0,212,255,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 text-white tracking-tighter">
            EFEKTY, KTÓRYCH <br />
            <span className="gradient-text">NIE DA SIĘ ZIGNOROWAĆ.</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light">
            Eliminujemy ludzkie błędy i wąskie gardła. Wdrażamy autonomię tam, gdzie liczy się precyzja i czas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-2 md:px-0">
          {features.map((feature) => (
            <div key={feature.id} className="group relative bg-white/[0.02] rounded-[2rem] border border-white/5 p-8 transition-all duration-700 hover:bg-white/[0.05] hover:border-white/10 flex flex-col justify-between min-h-[300px]">
               <div>
                  <div className={`w-14 h-14 ${feature.accent}/10 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                    <feature.Icon className="text-white w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed font-light">{feature.description}</p>
               </div>
               <div className="h-px w-full bg-white/5 mt-8 group-hover:bg-primary/50 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
