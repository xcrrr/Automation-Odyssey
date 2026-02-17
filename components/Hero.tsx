import React, { useEffect, useState } from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
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
    <section className="relative w-full bg-[#020202] pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.08),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content side */}
          <div className={`w-full lg:w-3/5 text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">
              Lider Automatyzacji AI • Szczecin
            </div>
            
            <h1 className="text-white font-black leading-[1.1] mb-8 text-[clamp(2.5rem,7vw,5.5rem)] tracking-tight">
              Twoja Firma na <br />
              <span className="gradient-text italic">Autopilocie.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-2xl mb-12">
              Projektujemy i wdrażamy autonomiczne systemy AI dla branży usługowej. Głosowi agenci, rekrutacja i obsługa leadów 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <button 
                  onClick={handleBookingClick} 
                  className="btn-luxury px-10 py-5 text-lg"
              >
                Rozpocznij Projekt
                <ArrowRight size={20} className="ml-3" />
              </button>
              <a href="tel:+48729086144" className="flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                <Phone size={18} className="text-primary" />
                AI Hotline
              </a>
            </div>

            <div className="flex flex-wrap gap-8 opacity-40">
               <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span className="text-xs uppercase font-bold tracking-widest">Voiceboty</span>
               </div>
               <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span className="text-xs uppercase font-bold tracking-widest">Rekrutacja AI</span>
               </div>
               <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span className="text-xs uppercase font-bold tracking-widest">Lead Recovery</span>
               </div>
            </div>
          </div>

          {/* Visual side */}
          <div className={`w-full lg:w-2/5 flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
             <QuantumCore />
          </div>

        </div>
      </div>
    </section>
  );
};
