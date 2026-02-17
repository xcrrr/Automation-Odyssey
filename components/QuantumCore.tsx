import React, { useEffect, useRef } from 'react';

export const QuantumCore: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = 400;
    let height = canvas.height = 400;
    let particles: any[] = [];
    let mouse = { x: -1000, y: -1000 };

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    class Particle {
      x: number; y: number; r: number; color: string; speed: number; orbit: number;
      baseX: number; baseY: number;
      angle: number;
      
      constructor() {
        this.orbit = Math.random() * 150 + 50;
        this.angle = Math.random() * Math.PI * 2;
        this.x = width / 2 + Math.cos(this.angle) * this.orbit;
        this.y = height / 2 + Math.sin(this.angle) * this.orbit * 0.6;
        this.r = Math.random() * 2 + 0.5;
        this.color = Math.random() > 0.5 ? '#00d4ff' : '#6366f1';
        this.speed = Math.random() * 0.01 + 0.005;
      }

      update() {
        this.angle += this.speed;
        const targetX = width / 2 + Math.cos(this.angle) * this.orbit;
        const targetY = height / 2 + Math.sin(this.angle) * this.orbit * 0.6;
        
        // Interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 80) {
          this.x -= dx / 10;
          this.y -= dy / 10;
        } else {
          this.x += (targetX - this.x) * 0.05;
          this.y += (targetY - this.y) * 0.05;
        }
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Trail effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
      }
    }

    for (let i = 0; i < 100; i++) particles.push(new Particle());

    const animate = () => {
      ctx.fillStyle = 'rgba(2, 2, 2, 0.15)'; // Deep black fade
      ctx.fillRect(0, 0, width, height);
      
      // Central Singularity
      const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, 80);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
      gradient.addColorStop(0.2, 'rgba(0, 212, 255, 0.05)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(width/2, height/2, 80, 0, Math.PI * 2);
      ctx.fill();

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative group cursor-none">
       <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
       <canvas 
        ref={canvasRef} 
        width={400} 
        height={400} 
        className="relative z-10 w-64 h-64 md:w-[500px] md:h-[500px] mix-blend-screen transition-transform duration-1000 ease-luxury group-hover:scale-110"
       />
       {/* Floating Glass Panels */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-80 md:h-80 border border-white/10 rounded-full backdrop-blur-[2px] animate-[spin_20s_linear_infinite] pointer-events-none"></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-[400px] md:h-[400px] border border-white/5 rounded-full animate-[spin_35s_linear_infinite_reverse] pointer-events-none"></div>
    </div>
  );
};
