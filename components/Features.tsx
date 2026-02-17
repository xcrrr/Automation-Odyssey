import React, { useState, useRef } from 'react';
import { Bot, Zap, Target, BarChart3, ChevronRight } from 'lucide-react';

const BentoCard = ({ icon: Icon, title, description, className = "" }: { icon: any, title: string, description: string, className?: string }) => {
  return (
    <div
      className={`relative group bg-[#000] border border-white/5 p-12 overflow-hidden transition-all duration-1000 ease-luxury hover:border-white/20 ${className}`}
    >
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
            <div className="text-white/20 mb-12 group-hover:text-primary transition-colors duration-700">
              <Icon size={40} strokeWidth={1} />
            </div>
            <h3 className="text-4xl font-bold mb-6 tracking-tighter text-white uppercase">{title}</h3>
            <p className="text-white/30 leading-relaxed text-xl font-light max-w-sm">{description}</p>
        </div>
        
        <div className="mt-16 flex items-center gap-4 text-white/10 group-hover:text-white transition-all duration-700">
           <div className="w-12 h-px bg-white/10 group-hover:w-20 group-hover:bg-white transition-all"></div>
           <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Detail Analysis</span>
        </div>
      </div>
      
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-48 md:py-64 px-6 bg-[#020205] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <h2 className="text-7xl md:text-[12rem] font-black mb-12 tracking-tighter leading-[0.8] text-white">
            CORE<br />
            <span className="text-white/5">SOLUTIONS.</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/5 border border-white/5">
          <BentoCard 
            icon={Bot}
            title="AI Voice Agents"
            description="Konwersacyjne systemy głosowe o bezbłędnej polszczyźnie. Pełna automatyzacja infolinii."
          />
          <BentoCard 
            icon={Zap}
            title="Speed-to-Lead"
            description="Reakcja na kontakt w czasie rzeczywistym. Eliminujemy czas oczekiwania klienta."
          />
          <BentoCard 
            icon={Target}
            title="AI Recruitment"
            description="Inteligentny screening fachowców. Pozyskujemy talenty, gdy inni ich szukają."
          />
          <BentoCard 
            icon={BarChart3}
            title="Database Recovery"
            description="Ekstrakcja wartości z zapomnianych baz danych. Nowy zysk bez nowych kosztów."
          />
        </div>
      </div>
    </section>
  );
};
