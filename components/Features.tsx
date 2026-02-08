import React from 'react';
import { Clock, TrendingUp, Users, PiggyBank } from 'lucide-react';
import { Feature } from '../types';
import { RevealOnScroll } from './RevealOnScroll';

const features: Feature[] = [
  {
    id: '1',
    title: 'Dostępność 24/7',
    description: 'Twoja firma nigdy nie śpi. Boty odbierają telefony i odpisują na wiadomości o każdej porze dnia i nocy, w święta i weekendy.',
    Icon: Clock,
  },
  {
    id: '2',
    title: 'Redukcja Kosztów',
    description: 'Zatrudnienie pracownika to pensja, ZUS, urlopy i sprzęt. Bot pracuje za ułamek tej kwoty, nie choruje i nie bierze wolnego.',
    Icon: PiggyBank,
  },
  {
    id: '3',
    title: 'Natychmiastowa Skalowalność',
    description: 'Niezależnie czy dzwoni 5 czy 500 klientów jednocześnie – bot obsłuży każdego z nich bez czasu oczekiwania na linii.',
    Icon: Users,
  },
  {
    id: '4',
    title: 'Wyższa Konwersja',
    description: 'Każde nieodebrane połączenie to stracony klient. Nasz system "łapie" każdy lead i natychmiast kwalifikuje go do sprzedaży.',
    Icon: TrendingUp,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-dark-lighter relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
            Dlaczego <span className="text-primary">Warto?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Technologia, która nie tylko usprawnia procesy, ale realnie zwiększa zyski Twojej firmy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <RevealOnScroll key={feature.id} delay={index * 100}>
              <div className="group glass-card p-6 md:p-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] border-transparent hover:border-primary/30 h-full flex flex-col items-start text-left">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <feature.Icon className="text-primary w-7 h-7 md:w-8 md:h-8 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};