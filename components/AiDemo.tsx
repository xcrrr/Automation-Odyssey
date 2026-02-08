import React, { useEffect, useState } from 'react';
import { Radio } from 'lucide-react';
import { WavyDivider } from './WavyDivider';

export const AiDemo: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check if script already exists
    if (document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]')) {
      return () => window.removeEventListener('scroll', handleScroll);
    }

    // Load the ElevenLabs script dynamically
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Optional: Cleanup if needed, but usually we want the script to persist for performance
      // document.body.removeChild(script);
    }
  }, []);

  const ConvaiWidget = 'elevenlabs-convai' as any;

  return (
    <section id="ai-demo" className="py-32 bg-dark-lighter relative overflow-hidden min-h-[600px] flex flex-col justify-center">
      {/* Background Ambience with Parallax */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[20%] right-[10%] w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse-slow will-change-transform"
          style={{ transform: `translate3d(0, ${scrollY * 0.05}px, 0)` }}
        ></div>
        <div 
          className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-secondary/5 rounded-full blur-[100px] animate-pulse-slow will-change-transform"
          style={{ transform: `translate3d(0, -${scrollY * 0.05}px, 0)` }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Radio size={14} className="animate-pulse" />
            Live Demo
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
            Porozmawiaj z <span className="gradient-text">AI</span>
          </h2>
          <p className="text-gray-400">
            Nasz asystent jest gotowy. Użyj widgetu poniżej, aby rozpocząć rozmowę.
          </p>
        </div>

        {/* AI Interface Container */}
        <div className="relative bg-dark border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
          
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>

          {/* Decorative Orb (Visual Anchor) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
            <div className="relative w-64 h-64 rounded-full flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-30 animate-spin-slow"></div>
            </div>
          </div>

          {/* The ElevenLabs Widget */}
          <div className="z-20 w-full flex justify-center items-center h-full min-h-[300px]">
             <ConvaiWidget agent-id="agent_3501kdv292srfvrvjy3qx9v34409"></ConvaiWidget>
          </div>
          
          <div className="absolute bottom-4 text-xs text-gray-600 flex flex-col items-center gap-1 z-20">
             <span>Powered by ElevenLabs Conversational AI</span>
          </div>
        </div>
      </div>

      <WavyDivider position="bottom" fill="#0f0f1e" />
    </section>
  );
};