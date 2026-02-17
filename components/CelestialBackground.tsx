import React from 'react';

export const CelestialBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020202]">
      {/* Dynamic Nebulas */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-primary/5 blur-[120px] rounded-full animate-[pulse_15s_infinite_alternate]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/5 blur-[100px] rounded-full animate-[pulse_20s_infinite_alternate-reverse]"></div>
      
      {/* Static Stars / Grain */}
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '100px 100px'
      }}></div>

      {/* Atmospheric Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]"></div>
    </div>
  );
};
