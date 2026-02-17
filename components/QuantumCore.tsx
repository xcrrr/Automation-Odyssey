import React, { useEffect, useRef } from 'react';

export const QuantumCore: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = 800;
    let height = canvas.height = 800;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.005;

      const centerX = width / 2;
      const centerY = height / 2;

      // 1. Aura / Deep Glow
      const aura = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 300);
      aura.addColorStop(0, 'rgba(0, 212, 255, 0.05)');
      aura.addColorStop(1, 'transparent');
      ctx.fillStyle = aura;
      ctx.fillRect(0, 0, width, height);

      // 2. The Glass Sphere (Lensed Effect)
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
      ctx.clip();

      // Draw distorted "inside"
      for (let i = 0; i < 3; i++) {
        const offset = i * 20;
        ctx.beginPath();
        ctx.ellipse(
          centerX + Math.cos(time + i) * 30, 
          centerY + Math.sin(time * 0.8 + i) * 30,
          100 + Math.sin(time) * 20, 
          250, 
          time * 0.2 + i, 
          0, Math.PI * 2
        );
        ctx.strokeStyle = i === 0 ? 'rgba(0, 212, 255, 0.3)' : 'rgba(99, 102, 241, 0.2)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      ctx.restore();

      // 3. The Rim Light (Luksusowa krawędź)
      const rim = ctx.createRadialGradient(centerX - 50, centerY - 50, 100, centerX, centerY, 150);
      rim.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
      rim.addColorStop(0.5, 'rgba(255, 255, 255, 0.05)');
      rim.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
      
      ctx.strokeStyle = rim;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
      ctx.stroke();

      // 4. Floating Data Shards
      for(let i=0; i<15; i++) {
          const angle = time + i * (Math.PI * 2 / 15);
          const x = centerX + Math.cos(angle) * (180 + Math.sin(time + i) * 20);
          const y = centerY + Math.sin(angle) * (180 + Math.cos(time + i) * 20);
          
          ctx.fillStyle = 'rgba(255,255,255,0.4)';
          ctx.beginPath();
          ctx.arc(x, y, 0.8, 0, Math.PI * 2);
          ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <div className="relative flex items-center justify-center group">
       {/* Blurred organic shadow */}
       <div className="absolute w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
       
       <canvas 
        ref={canvasRef} 
        width={800} 
        height={800} 
        className="relative z-10 w-[300px] h-[300px] md:w-[550px] md:h-[550px] transition-transform duration-1000 ease-luxury group-hover:scale-105"
       />
       
       {/* HUD Labels */}
       <div className="absolute inset-0 pointer-events-none font-mono text-[10px] tracking-[0.3em] text-white/20 uppercase">
          <div className="absolute top-1/4 left-0 -rotate-90">Core.Intelligence</div>
          <div className="absolute bottom-1/4 right-0 rotate-90">Odyssey.System</div>
       </div>
    </div>
  );
};
