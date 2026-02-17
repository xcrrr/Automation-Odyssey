import React, { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 20, 
        y: (e.clientY / window.innerHeight - 0.5) * 20 
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleBookingClick = () => {
    if (window.Cal) {
      window.Cal("ui", "open", { calLink: "automationodyssey.pl/konsultacja-ai" });
    } else {
      window.open("https://cal.com/automationodyssey.pl/konsultacja-ai", "_blank");
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden bg-[#020202]">
      {/* Background Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <div className="w-full max-w-4xl mb-12">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
            <span className="text-gray-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
              Inteligencja Bez Kompromisów
            </span>
          </div>
          
          <h1 className="text-5xl md:text-9xl font-heading font-black leading-[1] mb-8 tracking-tighter">
            <span className="text-white">PRZYSZŁOŚĆ</span><br />
            <span className="gradient-text">ZAUTOMATYZOWANA</span>
          </h1>
          
          <p className="text-base md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Wdrażamy systemy AI, które myślą, mówią i zarabiają za Ciebie, 24 godziny na dobę. Bez przerw, bez błędów, bez limitów.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center px-6">
            <button onClick={handleBookingClick} className="btn-luxury w-full sm:w-auto">
              Bezpłatna Konsultacja
            </button>
            <a href="tel:+48729086144" className="flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-white/10 text-white font-bold text-lg hover:bg-white/5 transition-all w-full sm:w-auto">
              <Phone size={18} className="text-primary" />
              <span>Zadzwoń do AI</span>
            </a>
          </div>
        </div>

        {/* Fluid Glass Core */}
        <div className="relative w-48 h-48 md:w-96 md:h-96 mt-8 md:mt-0">
           <div 
            className="w-full h-full relative flex items-center justify-center transition-transform duration-1000 ease-luxury"
            style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
           >
              {/* Outer Energy Field */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] animate-pulse"></div>
              
              {/* The "Nano-Banana" Glass Orb */}
              <div className="relative w-40 h-40 md:w-80 md:h-80 bg-white/5 backdrop-blur-3xl rounded-full border border-white/20 shadow-[0_0_80px_rgba(255,255,255,0.1)] flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10"></div>
                 
                 {/* Inner Floating Elements */}
                 <div className="relative w-20 h-20 md:w-40 md:h-40 border-2 border-white/40 rounded-full animate-[spin_8s_linear_infinite] flex items-center justify-center">
                    <div className="w-12 h-12 md:w-24 md:h-24 bg-white rounded-full opacity-80 blur-xl animate-float"></div>
                 </div>
                 
                 {/* Scanning Glow */}
                 <div className="absolute inset-0 w-full h-px bg-white/30 animate-scan"></div>
              </div>

              {/* Orbital Rings */}
              <div className="absolute inset-[-20px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-[-40px] border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
           </div>
        </div>
      </div>
    </section>
  );
};
