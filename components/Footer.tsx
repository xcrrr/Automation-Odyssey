import React from 'react';
import { Compass, Mail, Phone, Twitter, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#030303] pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
                <Compass size={24} />
              </div>
              <span className="font-heading font-black text-2xl tracking-tighter text-white">ODYSSEY</span>
            </div>
            <p className="text-gray-400 text-xl font-light leading-relaxed max-w-md mb-10">
              Budujemy inteligencję, która uwalnia potencjał Twojego biznesu. Przyszłość nie jest do przewidzenia – jest do zaprojektowania.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/40 transition-all"><Twitter size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/40 transition-all"><Linkedin size={20} /></a>
              <a href="https://github.com/xcrrr/Automation-Odyssey" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/40 transition-all"><Github size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Nawigacja</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-500 hover:text-primary transition-colors font-medium">Strategia</a></li>
              <li><a href="#how-it-works" className="text-gray-500 hover:text-primary transition-colors font-medium">Proces</a></li>
              <li><a href="#faq" className="text-gray-500 hover:text-primary transition-colors font-medium">Wsparcie</a></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Kontakt</h4>
            <ul className="space-y-6">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Email</span>
                <a href="mailto:automationodyssey@gmail.com" className="text-white hover:text-primary transition-colors font-bold truncate">automationodyssey@gmail.com</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Telefon</span>
                <a href="tel:+48729086144" className="text-white hover:text-primary transition-colors font-bold">+48 729 086 144</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-600 text-sm font-light">
            &copy; {new Date().getFullYear()} Automation Odyssey. Created with passion in Szczecin.
          </p>
          <div className="flex items-center gap-8">
             <a href="#privacy" className="text-gray-600 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">Privacy</a>
             <a href="#terms" className="text-gray-600 hover:text-white text-xs font-black uppercase tracking-widest transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
