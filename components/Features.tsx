import React, { useState, useRef } from 'react';
import { Bot, Zap, Target, BarChart3 } from 'lucide-react';

const BentoCard = ({ icon: Icon, title, description, className = "" }: { icon: any, title: string, description: string, className?: string }) => {
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
      className={`relative group bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-10 overflow-hidden transition-all duration-700 ease-luxury hover:bg-white/[0.05] hover:border-white/10 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 212, 255, 0.1), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-white/5">
          <Icon className="text-primary" size={28} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight text-white">{title}</h3>
        <p className="text-white/40 leading-relaxed text-base md:text-lg font-light">{description}</p>
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 md:py-32 px-6 bg-[#020205] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            Nasze <span className="gradient-text">Rozwiązania.</span>
          </h2>
          <p className="text-base md:text-xl text-white/40 max-w-2xl font-light">
            Projektujemy systemy, które nie tylko automatyzują, ale realnie zwiększają zysk Twojej firmy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <BentoCard 
            icon={Bot}
            title="AI Voice Agents"
            description="Autonomiczni agenci głosowi, którzy brzmią jak człowiek i przejmują 100% połączeń."
          />
          <BentoCard 
            icon={Zap}
            title="Speed-to-Lead"
            description="Kontakt z nowym klientem w mniej niż 30 sekund od zapytania."
          />
          <BentoCard 
            icon={Target}
            title="AI Recruitment"
            description="Automatyczny screening i wywiady z kandydatami do pracy."
          />
          <BentoCard 
            icon={BarChart3}
            title="Database Recovery"
            description="Inteligentne budzenie starych baz danych i odzyskiwanie sprzedaży."
          />
        </div>
      </div>
    </section>
  );
};
