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
    
    // Neural Threads
    const threads: Thread[] = [];
    const threadCount = 40;
    
    class Thread {
      points: { x: number; y: number }[] = [];
      seed: number = Math.random() * 1000;
      color: string;
      maxLength: number = 20 + Math.random() * 30;
      angle: number = Math.random() * Math.PI * 2;
      radius: number = 50 + Math.random() * 150;
      speed: number = 0.002 + Math.random() * 0.005;

      constructor() {
        this.color = Math.random() > 0.5 ? '#00d4ff' : '#6366f1';
        for (let i = 0; i < this.maxLength; i++) {
          this.points.push({ x: 400, y: 400 });
        }
      }

      update(time: number) {
        this.angle += this.speed;
        
        // Organic flow using layered sines
        const noiseX = Math.sin(time * 0.5 + this.seed) * 30;
        const noiseY = Math.cos(time * 0.3 + this.seed) * 30;
        
        const targetX = 400 + Math.cos(this.angle) * this.radius + noiseX;
        const targetY = 400 + Math.sin(this.angle) * (this.radius * 0.6) + noiseY;

        // Shift points for trail
        this.points.unshift({ x: targetX, y: targetY });
        if (this.points.length > this.maxLength) {
          this.points.pop();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        
        for (let i = 1; i < this.points.length; i++) {
          const p = this.points[i];
          ctx.lineTo(p.x, p.y);
        }

        const gradient = ctx.createLinearGradient(
          this.points[0].x, this.points[0].y,
          this.points[this.points.length-1].x, this.points[this.points.length-1].y
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.stroke();
        
        // Glow head
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
      }
    }

    for (let i = 0; i < threadCount; i++) {
      threads.push(new Thread());
    }

    let time = 0;
    const animate = () => {
      time += 0.02;
      
      // Black background with slight fade for trails
      ctx.fillStyle = 'rgba(2, 2, 2, 0.2)';
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      ctx.fillRect(0, 0, width, height);

      // 1. Atmosphere (Ambient Glow)
      const ambient = ctx.createRadialGradient(400, 400, 0, 400, 400, 300);
      ambient.addColorStop(0, 'rgba(0, 212, 255, 0.05)');
      ambient.addColorStop(1, 'transparent');
      ctx.fillStyle = ambient;
      ctx.fillRect(0, 0, width, height);

      // 2. Neural Threads (Flowing Silk)
      threads.forEach(t => {
        t.update(time);
        t.draw();
      });

      // 3. The Core (High-End Singularity)
      ctx.shadowBlur = 0;
      const coreGrad = ctx.createRadialGradient(380, 380, 5, 400, 400, 100);
      coreGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      coreGrad.addColorStop(0.2, 'rgba(0, 212, 255, 0.4)');
      coreGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.1)');
      coreGrad.addColorStop(1, 'rgba(2, 2, 2, 0.9)');
      
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(400, 400, 100, 0, Math.PI * 2);
      ctx.fill();
      
      // Glass Refraction Rim
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(400, 400, 101, 0, Math.PI * 2);
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative flex items-center justify-center pointer-events-none scale-75 md:scale-100">
       {/* Organic Depth Glow */}
       <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen animate-pulse"></div>
       
       <canvas 
        ref={canvasRef} 
        width={800} 
        height={800} 
        className="relative z-10 w-full h-full max-w-[400px] md:max-w-[800px] mix-blend-screen opacity-90"
       />
       
       {/* Cinematic HUD Elements */}
       <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[105%] h-[105%] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
          <div className="w-[110%] h-[110%] border border-white/[0.02] rounded-full animate-[spin_45s_linear_infinite_reverse]"></div>
       </div>
    </div>
  );
};
