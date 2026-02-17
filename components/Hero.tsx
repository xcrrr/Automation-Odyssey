import React, { useEffect, useState } from 'react';
import { Calendar, Bot, Activity, TrendingDown, TrendingUp, Cpu, ShieldCheck, Rocket, Phone } from 'lucide-react';
import { WavyDivider } from './WavyDivider';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 40, 
        y: (e.clientY / window.innerHeight - 0.5) * 40 
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleBookingClick = () => {
    if (window.Cal) {
      window.Cal("ui", "open", { calLink: "automationodyssey.pl/konsultacja-ai" });
    } else {
      window.open("https://cal.com/automationodyssey.pl/konsultacja-ai", "_blank");
    }
  };

  // Content for the benefit cards to be reused in mobile grid and desktop orbit
  const benefits = [
    {
      icon: TrendingDown,
      iconColor: 'text-primary',
      bgClass: 'bg-primary/10',
      borderClass: 'border-primary/20',
      label: 'Oszczędność',
      title: 'Redukcja Kosztów',
      positionStyle: { right: '15%', top: '15%' },
      connectorClass: 'top-full right-full origin-top-right rotate-45',
      delay: '0s'
    },
    {
      icon: Activity,
      iconColor: 'text-green-400',
      bgClass: 'bg-green-500/10',
      borderClass: 'border-green-500/20',
      label: 'Dostępność',
      title: 'Online 24/7',
      isLive: true,
      positionStyle: { right: '5%', top: '55%' },
      connectorClass: 'top-1/2 right-full -z-10',
      delay: '1.5s'
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-secondary',
      bgClass: 'bg-secondary/10',
      borderClass: 'border-secondary/20',
      label: 'Bezpieczeństwo',
      title: 'Dane Szyfrowane',
      positionStyle: { left: '10%', bottom: '15%' },
      connectorClass: 'bottom-full left-full origin-bottom-left -rotate-45',
      delay: '2.5s'
    },
    {
      icon: Rocket,
      iconColor: 'text-accent',
      bgClass: 'bg-accent/10',
      borderClass: 'border-accent/20',
      label: 'Wdrożenie',
      title: 'Gotowe w 48h',
      positionStyle: { left: '5%', top: '25%' },
      connectorClass: 'top-full left-full origin-top-left rotate-[30deg]',
      delay: '1s'
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24 pb-20 md:pt-40 md:pb-40 overflow-hidden bg-[#030303]">
      {/* Background Cinematic Spotlight */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50"
        style={{ transform: `translate3d(-50%, ${scrollY * 0.3}px, 0)` }}
      ></div>

      {/* Grid Pattern with Perspective */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Text Content - Centered for Modern SaaS look */}
        <div className="w-full max-w-4xl relative z-20 mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md animate-reveal shadow-[0_0_20px_rgba(255,255,255,0.05)]" style={{ animationDelay: '0ms' }}>
            <span className="text-gray-400 text-xs md:text-sm font-medium tracking-[0.2em] uppercase flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Praca Przyszłości Już Tu Jest
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold leading-[1.1] mb-6 tracking-tighter">
            <span className="inline-block animate-reveal text-white" style={{ animationDelay: '100ms' }}>
              Przyszłość
            </span>
            <br />
            <span className="inline-block animate-reveal gradient-text" style={{ animationDelay: '300ms' }}>
              Zautomatyzowana
            </span>
          </h1>
          
          <p className="text-base md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-reveal font-light tracking-wide px-4" style={{ animationDelay: '600ms' }}>
            Twoja firma nigdy nie śpi. My też nie. Wdrażamy systemy AI, które myślą, mówią i zarabiają za Ciebie, 24 godziny na dobę.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-reveal px-6" style={{ animationDelay: '800ms' }}>
            <button 
              type="button"
              onClick={handleBookingClick}
              className="group relative px-10 py-5 bg-white text-black rounded-full font-black text-lg tracking-widest uppercase overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.15)] w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="relative z-10">Bezpłatna Konsultacja</span>
            </button>
            <a 
              href="tel:+48729086144" 
              className="px-10 py-5 bg-transparent border border-white/10 rounded-full font-black text-lg tracking-widest uppercase text-white hover:bg-white/5 hover:border-white/30 transition-all duration-500 backdrop-blur-md flex items-center justify-center gap-3 group w-full sm:w-auto"
            >
              <Phone size={18} className="text-primary group-hover:rotate-12 transition-transform" />
              <span>Zadzwoń do AI</span>
            </a>
          </div>
        </div>

        {/* Central Visual Piece - Unified Master Core */}
        <div className="w-full max-w-[900px] aspect-square md:aspect-[16/9] relative perspective-2000 animate-reveal" style={{ animationDelay: '1000ms' }}>
           <div 
            className="relative w-full h-full flex items-center justify-center transition-transform duration-700 ease-out"
            style={{ transform: `rotateX(${mousePos.y * -0.2}deg) rotateY(${mousePos.x * 0.2}deg)` }}
           >
              {/* Massive Outer Halo */}
              <div className="absolute w-[95%] md:w-[85%] h-[95%] md:h-[85%] rounded-full border border-primary/5 animate-[spin_40s_linear_infinite] opacity-30"></div>
              <div className="absolute w-[75%] md:w-[65%] h-[75%] md:h-[65%] rounded-full border border-secondary/5 animate-[spin_30s_linear_infinite_reverse] opacity-20"></div>

              {/* Quantum Core Visual */}
              <div className="relative w-56 h-56 md:w-80 md:h-80 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-accent opacity-30 blur-[50px] md:blur-[80px] group-hover:opacity-60 transition-opacity duration-1000 animate-pulse"></div>
                
                {/* Rotating Geometric Rings */}
                <div className="absolute -inset-4 md:-inset-8 border-t border-white/20 rounded-full animate-[spin_10s_linear_infinite] opacity-40"></div>
                <div className="absolute -inset-8 md:-inset-16 border-r border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-20"></div>

                <div className="relative w-full h-full bg-[#050505] rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_100px_rgba(0,212,255,0.1)] overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.15),transparent_75%)]"></div>
                  
                  {/* Abstract Core Icon - Nanobanana style */}
                  <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="relative w-full h-full border-4 border-white/80 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center overflow-hidden">
                       <div className="w-full h-2 bg-white absolute top-1/2 -translate-y-1/2 animate-[spin_2s_linear_infinite]"></div>
                       <div className="w-2 h-full bg-white absolute left-1/2 -translate-x-1/2 animate-[spin_3s_linear_infinite]"></div>
                       <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-white to-gray-400 rounded-full animate-float shadow-inner"></div>
                       </div>
                    </div>
                  </div>
                  
                  {/* Neural Activity Scan Line */}
                  <div className="absolute inset-0 w-full h-px bg-white/20 animate-[scan_4s_ease-in-out_infinite]"></div>
                  
                  {/* Energy Pulse Ring */}
                  <div className="absolute inset-2 rounded-full border border-primary/40 animate-ping opacity-20"></div>
                </div>
              </div>

              {/* Orbital Benefit Nodes - Desktop Only */}
              <div className="hidden md:block">
                {benefits.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="absolute z-30 transition-all duration-700 ease-luxury"
                    style={{ 
                      top: item.positionStyle.top || 'auto',
                      bottom: item.positionStyle.bottom || 'auto',
                      left: item.positionStyle.left || 'auto',
                      right: item.positionStyle.right || 'auto',
                      transform: `translate3d(${mousePos.x * (idx + 1) * 0.4}px, ${mousePos.y * (idx + 1) * 0.4}px, 0)` 
                    }}
                  >
                    <div className="flex flex-col items-center gap-3 group/node">
                      <div className={`p-4 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 shadow-2xl group-hover/node:border-primary/50 transition-all duration-500 scale-90 group-hover/node:scale-110`}>
                        <item.icon className={`w-6 h-6 ${item.iconColor} group-hover/node:scale-110 transition-transform`} />
                      </div>
                      <div className="bg-white/5 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 opacity-0 group-hover/node:opacity-100 transition-opacity duration-300">
                        <span className="text-[10px] font-bold tracking-widest text-white uppercase">{item.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* Mobile Benefit Grid - Shown only on small screens */}
        <div className="md:hidden mt-12 grid grid-cols-2 gap-3 w-full animate-reveal px-2" style={{ animationDelay: '1200ms' }}>
            {benefits.map((item, idx) => (
              <div key={idx} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center backdrop-blur-sm">
                <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 mb-3`}>
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold mb-1">{item.label}</div>
                <div className="text-xs font-bold text-white flex items-center gap-1">
                   {item.title}
                   {item.isLive && <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse inline-block"></span>}
                </div>
              </div>
            ))}
          </div>
      </div>
      
      {/* Divider transitions to Features */}
      <WavyDivider position="bottom" fill="#1a1a2e" />
    </div>
  );
};