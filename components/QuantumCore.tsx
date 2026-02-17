import React, { useEffect, useRef } from 'react';

export const QuantumCore: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = canvas.width = 600;
    let height = canvas.height = 600;
    let particles: Particle[] = [];
    let strings: NeuralString[] = [];
    let mouse = { x: -1000, y: -1000, active: false };

    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) * (width / rect.width);
      mouse.y = (e.clientY - rect.top) * (height / rect.height);
      mouse.active = true;
    });

    class Particle {
      x: number; y: number; z: number; r: number; color: string; 
      angle: number; orbit: number; speed: number;
      
      constructor() {
        this.reset();
      }

      reset() {
        this.orbit = Math.random() * 180 + 40;
        this.angle = Math.random() * Math.PI * 2;
        this.z = Math.random() * 200 - 100;
        this.speed = (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1);
        this.r = Math.random() * 1.5 + 0.5;
        this.color = Math.random() > 0.7 ? '#00d4ff' : '#6366f1';
      }

      update() {
        this.angle += this.speed;
        
        // Target positions in 3D-like space
        let tx = width / 2 + Math.cos(this.angle) * this.orbit;
        let ty = height / 2 + Math.sin(this.angle) * this.orbit * 0.5;
        
        // Gravitational pull to mouse
        if (mouse.active) {
          const dx = mouse.x - tx;
          const dy = mouse.y - ty;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            tx += dx * (1 - dist / 150) * 0.5;
            ty += dy * (1 - dist / 150) * 0.5;
          }
        }

        this.x = tx;
        this.y = ty;
      }

      draw() {
        if (!ctx) return;
        const scale = (this.z + 100) / 200;
        const opacity = Math.max(0.1, scale);
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r * scale, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = opacity;
        ctx.fill();
        
        if (scale > 0.8) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = this.color;
        }
      }
    }

    class NeuralString {
        points: {x: number, y: number}[] = [];
        constructor() {
            for(let i=0; i<10; i++) {
                this.points.push({x: width/2, y: height/2});
            }
        }
        update(targetX: number, targetY: number) {
            this.points[0].x = targetX;
            this.points[0].y = targetY;
            for(let i=1; i<this.points.length; i++) {
                this.points[i].x += (this.points[i-1].x - this.points[i].x) * 0.3;
                this.points[i].y += (this.points[i-1].y - this.points[i].y) * 0.3;
            }
        }
        draw() {
            if(!ctx) return;
            ctx.beginPath();
            ctx.moveTo(this.points[0].x, this.points[0].y);
            for(let i=1; i<this.points.length; i++) {
                ctx.lineTo(this.points[i].x, this.points[i].y);
            }
            ctx.strokeStyle = 'rgba(0, 212, 255, 0.05)';
            ctx.stroke();
        }
    }

    for (let i = 0; i < 200; i++) particles.push(new Particle());
    for (let i = 0; i < 5; i++) strings.push(new NeuralString());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Central "Singularity" Glow
      const time = Date.now() * 0.001;
      const pulse = Math.sin(time) * 10 + 90;
      
      const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, pulse);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
      gradient.addColorStop(0.3, 'rgba(0, 212, 255, 0.05)');
      gradient.addColorStop(0.6, 'rgba(99, 102, 241, 0.02)');
      gradient.addColorStop(1, 'transparent');
      
      ctx.globalAlpha = 1;
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(width/2, height/2, pulse, 0, Math.PI * 2);
      ctx.fill();

      // Draw Atmospheric Rings
      ctx.strokeStyle = 'rgba(255,255,255,0.02)';
      ctx.lineWidth = 1;
      for(let i=1; i<=3; i++) {
          ctx.beginPath();
          ctx.ellipse(width/2, height/2, pulse * i * 0.8, pulse * i * 0.4, time * 0.2 * i, 0, Math.PI * 2);
          ctx.stroke();
      }

      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if(i < 5) {
            strings[i].update(p.x, p.y);
            strings[i].draw();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative flex items-center justify-center">
       {/* High-End Glass Backdrop */}
       <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.03),transparent_70%)] pointer-events-none"></div>
       
       <canvas 
        ref={canvasRef} 
        width={600} 
        height={600} 
        className="relative z-10 w-full h-full max-w-[600px] max-h-[600px] mix-blend-screen opacity-80"
       />

       {/* Floating UI Indicators */}
       <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-white/[0.02] rounded-full animate-[spin_60s_linear_infinite]"></div>
       </div>
    </div>
  );
};
