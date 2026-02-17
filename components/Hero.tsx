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
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-[#020202]">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.08),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className={`transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Lider Automatyzacji AI
            </div>
            
            <h1 className="text-white font-black mb-8">
              Twoja Firma na <br />
              <span className="gradient-text italic">Autopilocie.</span>
            </h1>
            
            <p className="text-xl text-white/50 font-light leading-relaxed max-w-xl mb-12">
              Wdrażamy zaawansowane systemy AI, które odbierają telefony, rekrutują pracowników i odzyskują leady. Skoncentruj się na wzroście, my zajmiemy się resztą.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                  onClick={handleBookingClick} 
                  className="btn-luxury group"
              >
                Umów Konsultację
                <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:+48729086144" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/10 text-white/60 hover:text-white transition-all font-bold text-sm uppercase tracking-widest">
                <Phone size={16} />
                AI Hotline
              </a>
            </div>
            
            <div className="mt-16 flex gap-12 border-t border-white/5 pt-10">
               <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs text-white/30 uppercase tracking-widest">Dostępność</div>
               </div>
               <div>
                  <div className="text-2xl font-bold text-white">&lt;30s</div>
                  <div className="text-xs text-white/30 uppercase tracking-widest">Reakcja</div>
               </div>
            </div>
          </div>

          <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ease-luxury ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
             <QuantumCore />
          </div>

        </div>
      </div>
    </section>
  );
};
