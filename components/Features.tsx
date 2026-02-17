import React, { useState, useRef } from 'react';
import { Bot, Zap, Target, BarChart3, Clock, Users } from 'lucide-react';

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
      className={`relative group bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 overflow-hidden transition-all duration-700 ease-luxury hover:bg-white/[0.04] hover:border-white/10 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${accentColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10">
        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-700 ease-luxury">
          <Icon className="text-white" size={28} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tighter text-white">{title}</h3>
        <p className="text-gray-500 leading-relaxed text-lg font-light">{description}</p>
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 md:py-48 px-6 bg-[#020205] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-24">
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
            SYSTEMY <br />
            <span className="gradient-text italic">AUTONOMICZNE</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
            Eliminujemy ludzkie błędy i wąskie gardła. Wdrażamy AI tam, gdzie liczy się precyzja, czas i bezwzględna skuteczność.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoCard 
            icon={Bot}
            title="AI Voice Agents"
            description="Pełna obsługa połączeń przychodzących i wychodzących. Brzmią jak człowiek, myślą jak ekspert."
            className="md:col-span-2"
            accentColor="rgba(0, 212, 255, 0.1)"
          />
          <BentoCard 
            icon={Zap}
            title="Speed-to-Lead"
            description="Kontakt z nowym klientem w < 30 sekund. Reagujemy, zanim klient pomyśli o konkurencji."
            accentColor="rgba(99, 102, 241, 0.1)"
          />
          <BentoCard 
            icon={Users}
            title="AI Recruitment"
            description="Automatyczny screening i pierwsze wywiady. AI filtruje talenty, Ty podpisujesz umowy."
            accentColor="rgba(255, 0, 110, 0.05)"
          />
          <BentoCard 
            icon={BarChart3}
            title="Database Reactivation"
            description="Budzimy Twoją martwą bazę klientów. AI identyfikuje szanse sprzedażowe tam, gdzie nikt ich nie widzi."
            className="md:col-span-2"
            accentColor="rgba(34, 197, 94, 0.1)"
          />
        </div>
      </div>
    </section>
  );
};
