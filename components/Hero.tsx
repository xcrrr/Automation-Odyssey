import React, { useEffect, useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { QuantumCore } from './QuantumCore';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookingClick = () => {
    window.open("https://cal.com/automationodyssey.pl/konsultacja-ai", "_blank");
  };

  return (
    <section className="relative w-full bg-[#020202] pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.05),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className={`w-full lg:w-1/2 text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              Lider Automatyzacji AI
            </div>
            
            <h1 className="text-white mb-6">
              Automatyzacja,<br />
              <span className="gradient-text italic">Która Zarabia.</span>
            </h1>
            
            <p className="text-base md:text-xl text-white/50 font-light leading-relaxed max-w-lg mb-10">
              Wdrażamy inteligentne voiceboty i systemy Speed-to-Lead. Pozwól AI przejąć rutynowe zadania, podczas gdy Ty skupiasz się na strategii.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <button 
                  onClick={handleBookingClick} 
                  className="btn-luxury"
              >
                Umów Konsultację
                <ArrowRight size={18} className="ml-2" />
              </button>
              <a href="tel:+48729086144" className="flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                <Phone size={16} className="text-primary" />
                Infolinia AI
              </a>
            </div>
          </div>

          {/* Visual Content (The Galaxy) */}
          <div className={`w-full lg:w-1/2 flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
             <QuantumCore />
          </div>

        </div>
      </div>
    </section>
  );
};
