import React, { useEffect, useRef } from 'react';

export const CelestialBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    let mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      color: string;
      glowSize: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random();
        this.fadeSpeed = Math.random() * 0.005 + 0.001;
        this.color = Math.random() > 0.6 ? '#00d4ff' : (Math.random() > 0.5 ? '#6366f1' : '#ffffff');
        this.glowSize = Math.random() * 15 + 5;
      }

      update() {
        // Subtle drift
        this.x += this.speedX;
        this.y += this.speedY;

        // Interaction with mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = (100 - distance) / 100;

        if (distance < 100) {
          this.x -= dx * force * 0.05;
          this.y -= dy * force * 0.05;
        }

        if (this.x > width) this.x = 0;
        else if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        else if (this.y < 0) this.y = height;

        this.opacity -= this.fadeSpeed;
        if (this.opacity <= 0) {
          this.opacity = 1;
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }
      }

      draw() {
        if (!ctx) return;
        
        // Particle Glow
        if (this.opacity > 0.5) {
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.glowSize);
          gradient.addColorStop(0, this.color + Math.floor(this.opacity * 255).toString(16).padStart(2, '0'));
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.globalAlpha = 0.15;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity * 0.6;
        ctx.fill();
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const init = () => {
      particles = [];
      const particleCount = Math.floor((width * height) / 10000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      init();
    };

    canvas.width = width;
    canvas.height = height;
    init();
    animate();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
