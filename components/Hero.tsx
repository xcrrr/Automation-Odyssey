import React, { useEffect, useState } from 'react';
import { Phone, ChevronRight } from 'lucide-react';
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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden bg-[#000]">
      
      {/* 1. The Blueprint Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }}></div>

      {/* 2. Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        <div className={`flex flex-col items-center transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="text-primary text-[10px] font-bold uppercase tracking-[0.5em] mb-12 border-b border-primary/20 pb-2">
            Intelligence in Motion
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-[-0.06em] mb-12 text-white">
            ODYSSEY<br />
            <span className="text-white/10">SYSTEMS.</span>
          </h1>
          
          <div className="max-w-2xl mb-16">
            <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed tracking-tight">
              Projektujemy i wdrażamy <span className="text-white">autonomiczne systemy operacyjne</span> dla nowoczesnego biznesu. Od voicebotów po pełną automatyzację procesów.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
            <button 
                onClick={handleBookingClick} 
                className="btn-luxury group"
            >
              Rozpocznij Projekt
            </button>
            <a href="tel:+48729086144" className="group flex items-center gap-3 text-white/30 hover:text-white transition-all duration-500 font-bold text-xs uppercase tracking-[0.3em]">
              <div className="w-8 h-[1px] bg-white/10 group-hover:w-12 transition-all"></div>
              Live Agent Hotline
            </a>
          </div>
        </div>

        {/* 3. The Sculpture */}
        <div className={`mt-24 transition-all duration-1000 delay-500 ease-luxury ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
           <QuantumCore />
        </div>
      </div>

      {/* 4. Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#020205] to-transparent z-10"></div>
    </section>
  );
};
