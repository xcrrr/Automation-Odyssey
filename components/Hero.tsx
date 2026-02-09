import React, { useEffect, useState } from 'react';
import { Calendar, Bot, Activity, TrendingDown, TrendingUp, Cpu, ShieldCheck, Rocket } from 'lucide-react';
import { WavyDivider } from './WavyDivider';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="relative min-h-screen flex items-center justify-center pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-dark">
      {/* Background Gradients with Parallax */}
      <div 
        className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow will-change-transform"
        style={{ transform: `translate3d(-50%, calc(-50% + ${scrollY * 0.2}px), 0)` }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/20 rounded-full blur-[80px] md:blur-[100px] translate-x-1/2 translate-y-1/2 animate-pulse-slow will-change-transform"
        style={{ transform: `translate3d(50%, calc(50% - ${scrollY * 0.15}px), 0)` }}
      ></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Floating particles or "Stars" */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-white rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-[60%] left-[15%] w-1.5 h-1.5 bg-primary rounded-full animate-float opacity-30" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-[30%] right-[15%] w-1 h-1 bg-secondary rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-2 h-2 bg-primary/40 rounded-full animate-float opacity-20" style={{ animationDuration: '7s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text Content */}
        <div className="w-full md:w-5/12 text-center md:text-left relative z-20">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm animate-reveal shadow-[0_0_15px_rgba(0,212,255,0.3)]" style={{ animationDelay: '0ms' }}>
            <span className="text-primary text-xs md:text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              <Cpu size={14} className="animate-pulse" />
              Twoja Przewaga
            </span>
          </div>
          <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.15] md:leading-tight mb-6 tracking-tight px-1">
            <span className="inline-block animate-reveal" style={{ animationDelay: '100ms' }}>
              <span className="animate-text-shine">Automatyzacja</span>,
            </span>{" "}
            <br className="sm:hidden" />
            <span className="inline-block animate-reveal" style={{ animationDelay: '200ms' }}>Która</span>{" "}
            <span className="inline-block animate-reveal" style={{ animationDelay: '300ms' }}>Uwalnia</span>{" "}
            <span className="inline-block animate-reveal" style={{ animationDelay: '700ms' }}>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Czas</span>
            </span>
          </h1>
          <p className="text-base md:text-xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed animate-reveal px-2 md:px-0 font-light" style={{ animationDelay: '800ms' }}>
            Wykorzystaj moc konwersacyjnej sztucznej inteligencji. Tworzymy voiceboty i systemy AI, które transformują obsługę klienta w zautomatyzowane centrum zysku.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-reveal" style={{ animationDelay: '1000ms' }}>
            <button 
              type="button"
              onClick={handleBookingClick}
              data-cal-link="automationodyssey.pl/konsultacja-ai"
              data-cal-namespace="konsultacja-ai"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-lg text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_35px_rgba(99,102,241,0.7)] transform hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <Calendar size={20} className="relative z-10" />
              <span className="relative z-10">Umów konsultację</span>
            </button>
            <a href="#features" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg text-white hover:bg-white/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto">
              Więcej
              <TrendingUp size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* MOBILE ONLY: Static Grid Display (Replaces Orbit) */}
          <div className="md:hidden mt-12 grid grid-cols-2 gap-3 animate-reveal" style={{ animationDelay: '1200ms' }}>
            {benefits.map((item, idx) => (
              <div key={idx} className="bg-dark-lighter/50 border border-white/5 rounded-xl p-4 flex flex-col items-center text-center backdrop-blur-sm">
                <div className={`p-2 rounded-lg ${item.bgClass} mb-3`}>
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-1">{item.label}</div>
                <div className="text-sm font-bold text-white flex flex-col items-center gap-1">
                   {item.title}
                   {item.isLive && <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse inline-block"></span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP ONLY: Hero Graphic - Advanced Neural Core */}
        <div className="hidden md:flex w-full md:w-7/12 justify-center relative perspective-1000 animate-reveal" style={{ animationDelay: '600ms' }}>
           <div className="relative w-full max-w-[650px] aspect-square flex items-center justify-center md:scale-100 scale-75">
              
              {/* Outer Orbital Ring (Data Stream) */}
              <div className="absolute inset-0 m-auto w-[95%] h-[95%] rounded-full border border-white/5 border-dashed animate-[spin_60s_linear_infinite] will-change-transform"></div>
              <div className="absolute inset-0 m-auto w-[95%] h-[95%] rounded-full border-t border-r border-primary/20 animate-[spin_60s_linear_infinite] will-change-transform" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>

              {/* Middle Orbital Ring (Counter Rotation) */}
              <div className="absolute inset-0 m-auto w-[70%] h-[70%] rounded-full border border-secondary/10 animate-[spin_40s_linear_infinite_reverse] will-change-transform"></div>
              <div className="absolute inset-0 m-auto w-[70%] h-[70%] rounded-full border-b-2 border-l-2 border-secondary/30 animate-[spin_40s_linear_infinite_reverse] opacity-50 will-change-transform"></div>

              {/* Inner Energy Field */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-full blur-[90px] animate-pulse-slow"></div>
              
              {/* Central Core Structure */}
              <div className="relative z-10 w-56 h-56 bg-dark/40 backdrop-blur-xl rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(0,212,255,0.15)] group cursor-default overflow-hidden">
                  
                  {/* Internal Scanning Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-30 animate-[shine_3s_linear_infinite]"></div>
                  
                  {/* Rotating Core Rings */}
                  <div className="absolute inset-0 rounded-full border-t-2 border-primary/60 animate-[spin_3s_linear_infinite] will-change-transform"></div>
                  <div className="absolute inset-2 rounded-full border-r-2 border-secondary/60 animate-[spin_5s_linear_infinite_reverse] will-change-transform"></div>
                  
                  {/* Center Icon */}
                  <div className="relative z-20 bg-dark-lighter p-4 rounded-full border border-white/10 shadow-lg">
                    <Bot className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                  </div>
              </div>

              {/* Floating Status Cards (Desktop Only) */}
              {benefits.map((item, idx) => (
                <div key={idx} className="absolute z-20" style={item.positionStyle}>
                    <div className="animate-float" style={{ animationDelay: item.delay }}>
                        <div className="relative p-4 bg-dark-lighter/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300 group">
                             {/* Connector Line */}
                             {/* Note: This is simplified logic for the connector lines based on the complex CSS in the original file */}
                            <div className={`absolute w-20 h-[1px] bg-gradient-to-r from-transparent to-white/10 -z-10 ${item.connectorClass || ''}`}></div>
                            
                            <div className="flex items-center gap-4">
                                <div className={`p-2.5 rounded-xl border transition-colors ${item.bgClass} ${item.borderClass} group-hover:bg-opacity-30`}>
                                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">{item.label}</div>
                                    <div className="text-sm font-bold text-white flex items-center gap-2">
                                      {item.isLive && <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>}
                                      {item.title}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              ))}
           </div>
        </div>
      </div>
      
      {/* Divider transitions to Features */}
      <WavyDivider position="bottom" fill="#1a1a2e" />
    </div>
  );
};