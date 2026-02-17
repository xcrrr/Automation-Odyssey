import React, { useEffect, useRef } from 'react';

export const QuantumCore: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = 600;
    let height = canvas.height = 600;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      const centerX = width / 2;
      const centerY = height / 2;

      // Deep Orb Glow
      const glow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 200);
      glow.addColorStop(0, 'rgba(0, 212, 255, 0.2)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 200, 0, Math.PI * 2);
      ctx.fill();

      // Orbital Rings
      for(let i=0; i<3; i++) {
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, 120 + i*20, 60 + i*10, time * (0.2 + i*0.1), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + i*0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // The Core
      const coreGradient = ctx.createRadialGradient(centerX - 30, centerY - 30, 20, centerX, centerY, 80);
      coreGradient.addColorStop(0, '#fff');
      coreGradient.addColorStop(0.2, '#00d4ff');
      coreGradient.addColorStop(1, '#020202');
      
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
      ctx.fill();
      
      // Rim
      ctx.strokeStyle = 'rgba(255,255,255,0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="relative flex items-center justify-center">
       <div className="absolute w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
       <canvas 
        ref={canvasRef} 
        width={600} 
        height={600} 
        className="relative z-10 w-full h-full max-w-[400px] md:max-w-[600px] mix-blend-screen"
       />
    </div>
  );
};
