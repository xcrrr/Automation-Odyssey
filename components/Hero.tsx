import React, { useEffect, useState } from 'react';
import { Phone, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
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
      {/* Cinematic Fog & Lighting */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(0,212,255,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          
          {/* Left: Strategic Content */}
          <div className={`flex-1 text-left transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-10">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Autonomous Systems • Szczecin
            </div>
            
            <h1 className="text-white font-black leading-[0.9] mb-10 text-5xl md:text-7xl xl:text-8xl tracking-tighter">
              DESIGNING<br />
              <span className="gradient-text italic">AUTONOMY.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-xl mb-12">
              Transformujemy firmy usługowe w autonomiczne potęgi. Voiceboty, rekrutacja AI i systemy Speed-to-Lead, które pracują, gdy Ty skalujesz biznes.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <button 
                  onClick={handleBookingClick} 
                  className="btn-luxury group flex items-center justify-center rounded-full px-10 py-5 bg-white text-black font-bold hover:bg-primary transition-all duration-500"
              >
                Rozpocznij Projekt
                <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
              <a href="tel:+48729086144" className="flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                <Phone size={16} className="text-primary" />
                Zadzwoń do AI
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/5 pt-10">
               <div className="flex items-center gap-3">
                  <Zap size={20} className="text-primary opacity-50" />
                  <span className="text-[11px] text-white/40 uppercase tracking-widest font-bold">&lt;30s Response</span>
               </div>
               <div className="flex items-center gap-3">
                  <ShieldCheck size={20} className="text-primary opacity-50" />
                  <span className="text-[11px] text-white/40 uppercase tracking-widest font-bold">Safe AI Tech</span>
               </div>
               <div className="flex items-center gap-3">
                  <Globe size={20} className="text-primary opacity-50" />
                  <span className="text-[11px] text-white/40 uppercase tracking-widest font-bold">Global Ready</span>
               </div>
            </div>
          </div>

          {/* Right: The Neural Core */}
          <div className={`flex-1 flex items-center justify-center transition-all duration-1000 delay-300 ease-luxury ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
             <div className="relative w-full max-w-[500px] xl:max-w-[700px] aspect-square">
                <QuantumCore />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
