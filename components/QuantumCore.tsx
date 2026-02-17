import React from 'react';

export const QuantumCore: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[300px] md:max-w-[500px] aspect-square mx-auto">
      {/* Dynamic Glow Layer */}
      <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse"></div>
      
      {/* The Core - Abstract Glass Geometry */}
      <div className="relative w-40 h-40 md:w-64 md:h-64 group">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-3xl border border-white/20 rounded-3xl rotate-12 transition-transform duration-1000 group-hover:rotate-45"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 backdrop-blur-2xl border border-white/10 rounded-3xl -rotate-12 transition-transform duration-1000 group-hover:-rotate-12 group-hover:scale-110"></div>
        
        {/* Floating Inner Orb */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 md:w-32 md:h-32 bg-white rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-white to-primary rounded-full shadow-[0_0_50px_rgba(0,212,255,0.5)]"></div>
        </div>
      </div>

      {/* Atmospheric Orbitals */}
      <div className="absolute w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45"></div>
      <div className="absolute w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45"></div>
    </div>
  );
};
