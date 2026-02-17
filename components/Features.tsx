import React, { useState, useRef } from 'react';
import { Bot, Zap, Target, BarChart3, ChevronRight } from 'lucide-react';

const BentoCard = ({ icon: Icon, title, description, className = "", accentColor = "rgba(0, 212, 255, 0.15)" }: { icon: any, title: string, description: string, className?: string, accentColor?: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative group bg-[#080808] border border-white/[0.03] rounded-[3rem] p-12 overflow-hidden transition-all duration-1000 ease-luxury hover:border-white/[0.08] ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
        style={{
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${accentColor}, transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
            <div className="w-16 h-16 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-white/[0.05] transition-all duration-700 ease-luxury">
              <Icon className="text-white" size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-700">{title}</h3>
            <p className="text-white/40 leading-relaxed text-xl font-light max-w-sm">{description}</p>
        </div>
        
        <div className="mt-12 flex items-center gap-2 text-white/20 group-hover:text-primary transition-colors duration-500">
           <span className="text-xs font-bold uppercase tracking-[0.3em]">Discovery</span>
           <ChevronRight size={14} />
        </div>
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-40 md:py-64 px-6 bg-[#020202] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-32">
          <div className="text-primary text-xs font-bold uppercase tracking-[0.4em] mb-6">Capabilities</div>
          <h2 className="text-6xl md:text-[9rem] font-black mb-12 tracking-tighter leading-[0.8] text-white">
            UNMATCHED <br />
            <span className="text-white/10">INTELLIGENCE.</span>
          </h2>
          <p className="text-2xl md:text-3xl text-white/30 font-light leading-relaxed max-w-2xl">
            Odchodzimy od prostych automatyzacji. Budujemy ekosystemy, które ewoluują wraz z Twoim biznesem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <BentoCard 
            icon={Bot}
            title="AI Voice Agents"
            description="Agenci głosowi o ludzkim brzmieniu, obsługujący 100% ruchu telefonicznego."
            className="md:col-span-2"
            accentColor="rgba(0, 212, 255, 0.12)"
          />
          <BentoCard 
            icon={Zap}
            title="Speed-to-Lead"
            description="Konwersja leadów w czasie rzeczywistym. Reakcja < 30s."
            accentColor="rgba(99, 102, 241, 0.12)"
          />
          <BentoCard 
            icon={Target}
            title="AI Recruitment"
            description="Autonomiczny screening kandydatów i wywiady wstępne."
            accentColor="rgba(255, 0, 110, 0.08)"
          />
          <BentoCard 
            icon={BarChart3}
            title="Database Recovery"
            description="Inteligentna reaktywacja uśpionych baz danych klientów."
            className="md:col-span-2"
            accentColor="rgba(34, 197, 94, 0.12)"
          />
        </div>
      </div>
    </section>
  );
};
