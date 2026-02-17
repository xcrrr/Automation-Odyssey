import React, { useEffect, useRef } from 'react';

export const QuantumCore: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use a fixed virtual coordinate system for the drawing logic
    const SIZE = 800;
    canvas.width = SIZE;
    canvas.height = SIZE;
    
    const particles: any[] = [];
    for(let i=0; i<100; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: 100 + Math.random() * 200,
        speed: 0.002 + Math.random() * 0.005,
        size: 1 + Math.random() * 3,
        color: Math.random() > 0.5 ? '#00d4ff' : '#6366f1'
      });
    }

    let time = 0;
    const animate = () => {
      time += 0.01;
      ctx.fillStyle = '#020202';
      ctx.fillRect(0, 0, SIZE, SIZE);

      // Central Glow
      const grad = ctx.createRadialGradient(SIZE/2, SIZE/2, 0, SIZE/2, SIZE/2, 300);
      grad.addColorStop(0, 'rgba(0, 212, 255, 0.3)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(SIZE/2, SIZE/2, 300, 0, Math.PI * 2);
      ctx.fill();

      // Particles
      particles.forEach(p => {
        p.angle += p.speed;
        const x = SIZE/2 + Math.cos(p.angle) * p.radius;
        const y = SIZE/2 + Math.sin(p.angle) * p.radius * 0.6;
        
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add a small trail
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
      });

      // Core Orb
      const core = ctx.createRadialGradient(SIZE/2 - 20, SIZE/2 - 20, 10, SIZE/2, SIZE/2, 100);
      core.addColorStop(0, '#ffffff');
      core.addColorStop(0.5, '#00d4ff');
      core.addColorStop(1, '#020202');
      ctx.fillStyle = core;
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(SIZE/2, SIZE/2, 100, 0, Math.PI * 2);
      ctx.fill();

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative w-full max-w-[300px] md:max-w-[500px] aspect-square mx-auto">
      {/* Heavy blurred background glow to ensure visibility */}
      <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full"></div>
      <canvas 
        ref={canvasRef} 
        className="relative z-10 w-full h-full block"
      />
    </div>
  );
};
