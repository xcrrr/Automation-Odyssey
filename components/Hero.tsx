import React, { useEffect, useState, useRef } from 'react';
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
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#020202]">
      {/* Cinematic Lighting */}
      <div className="absolute top-0 left-1/4 w-[1000px] h-[600px] bg-primary/5 blur-[160px] rounded-full -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[500px] bg-secondary/5 blur-[140px] rounded-full translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className={`transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Szczecin • Global AI Solutions
          </div>
          
          <h1 className="text-6xl md:text-[7rem] font-black leading-[0.85] tracking-tighter mb-10 text-white">
            DESIGNING <br />
            <span className="gradient-text italic">AUTONOMY.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed max-w-xl mb-12">
            Budujemy nową generację systemów operacyjnych dla biznesu. Autonomiczni agenci, którzy przejmują komunikację, sprzedaż i operacje.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <button 
                onClick={handleBookingClick} 
                className="btn-luxury group flex items-center gap-3 w-full sm:w-auto"
            >
              Start Your Journey
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="tel:+48729086144" className="text-white/60 hover:text-white transition-colors flex items-center gap-3 font-bold text-sm uppercase tracking-widest px-6 py-4">
              <Phone size={16} />
              AI Hotline
            </a>
          </div>
          
          <div className="mt-20 grid grid-cols-3 gap-12 border-t border-white/5 pt-10">
             <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-white/30 uppercase tracking-widest mt-1">Uptime</div>
             </div>
             <div>
                <div className="text-2xl font-bold text-white">&lt;30s</div>
                <div className="text-xs text-white/30 uppercase tracking-widest mt-1">Lead Response</div>
             </div>
             <div>
                <div className="text-2xl font-bold text-white">0%</div>
                <div className="text-xs text-white/30 uppercase tracking-widest mt-1">Human Error</div>
             </div>
          </div>
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ease-luxury ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
           <QuantumCore />
        </div>
      </div>
    </section>
  );
};
