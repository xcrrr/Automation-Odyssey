import React from 'react';
import { Settings, Mic, Link, CheckCircle } from 'lucide-react';
import { Step } from '../types';
import { WavyDivider } from './WavyDivider';
import { RevealOnScroll } from './RevealOnScroll';

const steps: Step[] = [
  {
    id: 1,
    title: 'Analiza i Konfiguracja',
    description: 'Analizujemy Twoje procesy i tworzymy mapę konwersacji. Otrzymujesz działający prototyp w 48h.',
    Icon: Settings,
  },
  {
    id: 2,
    title: 'Voice Design',
    description: 'Dobieramy idealny głos i ton. Klonujemy Twój głos lub korzystamy z profesjonalnych modeli AI.',
    Icon: Mic,
  },
  {
    id: 3,
    title: 'Integracja',
    description: 'Wpinamy bota w Twój system CRM, kalendarz i telefon. Pełna automatyzacja przepływu danych.',
    Icon: Link,
  },
  {
    id: 4,
    title: 'Start',
    description: 'Uruchamiamy system, testujemy i optymalizujemy rozmowy dla maksymalnej skuteczności.',
    Icon: CheckCircle,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-dark relative overflow-hidden">
      {/* Top Divider */}
      <WavyDivider position="top" fill="#1a1a2e" />
      
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6">
        <div className="text-center mb-12">
          <div className="inline-block mb-3 px-3 py-1 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm">
             <span className="text-gray-300 text-[10px] font-semibold tracking-wide uppercase">Proces Wdrożenia</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Jak To <span className="gradient-text">Działa</span>?
          </h2>
        </div>

        <div className="relative">
          {/* Central Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-800/50">
             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent opacity-30"></div>
          </div>
          
          {/* Timeline Line - Mobile (Left Side) */}
          <div className="md:hidden absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/30 to-secondary/30"></div>

          <div className="space-y-8 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div key={step.id} className={`flex flex-col md:flex-row items-center justify-between md:-my-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="w-full md:w-[45%] relative group z-10 pl-16 md:pl-0 md:py-6">
                  <RevealOnScroll delay={index * 100}>
                    <div className={`
                      relative p-6 rounded-2xl bg-[#131326] border border-white/5 
                      hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]
                      ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}
                    `}>
                      <div className={`flex flex-col mb-2 ${index % 2 === 1 ? 'md:items-end' : 'items-start'}`}>
                         <span className="text-primary font-bold text-xs tracking-wider uppercase mb-1 opacity-80">Krok 0{step.id}</span>
                         <h3 className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {step.description}
                      </p>
                    </div>
                  </RevealOnScroll>
                </div>

                {/* Center Icon */}
                <div className="absolute left-1 md:left-1/2 md:transform md:-translate-x-1/2 mt-6 md:mt-0 z-20 flex-shrink-0">
                   <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-dark border-2 border-dark-lighter shadow-[0_0_0_1px_rgba(255,255,255,0.1)] flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></div>
                      <step.Icon className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-primary transition-colors duration-300 relative z-10" />
                   </div>
                </div>

                {/* Empty Side (Desktop) */}
                <div className="w-full md:w-[45%] hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Divider */}
      <WavyDivider position="bottom" fill="#1a1a2e" />
    </section>
  );
};