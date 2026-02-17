import React from 'react';
import { Clock, TrendingUp, Users, PiggyBank } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: '1',
    title: 'Dostępność 24/7',
    description: 'Boty odbierają telefony i odpisują o każdej porze dnia i nocy. Twoja firma pracuje, gdy Ty śpisz.',
    Icon: Clock,
  },
  {
    id: '2',
    title: 'Redukcja Kosztów',
    description: 'Brak składek ZUS, urlopów i zwolnień lekarskich. Bot to pracownik, który kosztuje ułamek pensji.',
    Icon: PiggyBank,
  },
  {
    id: '3',
    title: 'Skalowanie w Sekundy',
    description: '5 czy 500 klientów jednocześnie? To nie ma znaczenia. Obsłużymy każdego bez sekundy czekania.',
    Icon: Users,
  },
  {
    id: '4',
    title: 'Więcej Sprzedaży',
    description: 'Każdy nieodebrany telefon to stracony klient. My zmieniamy je w realne, umówione spotkania.',
    Icon: TrendingUp,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-40 bg-[#05050a] relative overflow-hidden">
      {/* Dynamic Background Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-20 text-center md:text-left mx-auto md:mx-0">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.3em] uppercase">
            Przewaga Konkurencyjna
          </div>
          <h2 className="text-4xl md:text-7xl font-heading font-bold mb-6 text-white tracking-tighter">
            Technologia, która <br />
            <span className="gradient-text">Zarabia Sama.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Nie budujemy po prostu botów. Budujemy autonomiczne systemy wzrostu, które eliminują wąskie gardła w Twojej firmie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px] px-2 md:px-0">
          {/* Bento Card 1 - Main Large */}
          <div className="md:col-span-2 md:row-span-2 group relative bg-[#0a0a0f] rounded-[2rem] md:rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-700 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(0,212,255,0.1)] p-6 md:p-12 flex flex-col justify-between min-h-[300px] md:min-h-0">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-primary/20 group-hover:scale-110 transition-transform duration-500">
                  <Clock className="text-primary w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight">{features[0].title}</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">{features[0].description}</p>
             </div>
             {/* Paski usunięte zgodnie z prośbą */}
             <div className="relative z-10 mt-6 md:mt-8 flex gap-1.5 md:gap-2 h-1">
             </div>
          </div>

          {/* Bento Card 2 - Top Right */}
          <div className="md:col-span-2 group relative bg-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-700 hover:border-secondary/40 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 shadow-xl">
             <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/10 rounded-xl md:rounded-2xl flex items-center justify-center border border-secondary/20 shrink-0">
               <PiggyBank className="text-secondary w-6 h-6 md:w-8 md:h-8" />
             </div>
             <div>
               <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{features[1].title}</h3>
               <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">{features[1].description}</p>
             </div>
          </div>

          {/* Bento Card 3 - Bottom Right 1 */}
          <div className="group relative bg-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-700 hover:border-accent/40 p-6 md:p-8 flex flex-col justify-between min-h-[160px] md:min-h-0">
             <div className="w-10 h-10 bg-accent/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-accent/20">
               <Users className="text-accent w-5 h-5 md:w-6 md:h-6" />
             </div>
             <div>
               <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">{features[2].title}</h3>
               <p className="text-gray-500 text-xs md:text-sm mt-1.5 md:mt-2">{features[2].description}</p>
             </div>
          </div>

          {/* Bento Card 4 - Bottom Right 2 */}
          <div className="group relative bg-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-700 hover:border-green-500/40 p-6 md:p-8 flex flex-col justify-between min-h-[160px] md:min-h-0">
             <div className="w-10 h-10 bg-green-500/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-green-500/20">
               <TrendingUp className="text-green-500 w-5 h-5 md:w-6 md:h-6" />
             </div>
             <div>
               <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">{features[3].title}</h3>
               <p className="text-gray-500 text-xs md:text-sm mt-1.5 md:mt-2">{features[3].description}</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
