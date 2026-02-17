import React, { useState, useEffect } from 'react';
import { Compass, Menu, X, Calendar } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingClick = () => {
    if (window.Cal) {
      window.Cal("ui", "open", { calLink: "automationodyssey.pl/konsultacja-ai" });
    } else {
      window.open("https://cal.com/automationodyssey.pl/konsultacja-ai", "_blank");
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Strategia', href: '#features' },
    { name: 'Proces', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <div className="fixed w-full z-50 top-0 left-0 px-4 py-4 md:py-6 pointer-events-none">
      <nav 
        className={`max-w-6xl mx-auto transition-all duration-500 rounded-3xl pointer-events-auto border
          ${isScrolled 
            ? 'bg-[#0a0a0a]/80 backdrop-blur-2xl border-white/10 shadow-2xl py-2 px-6' 
            : 'bg-transparent border-transparent py-4 px-4'
          }
        `}
      >
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg]">
                <Compass className="h-6 w-6" />
            </div>
            <span className="font-heading font-black text-xl tracking-tighter text-white">
              ODYSSEY
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
            <button
              type="button"
              onClick={handleBookingClick}
              className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Konsultacja
            </button>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-[calc(100%+1rem)] left-0 w-full px-4 transition-all duration-500 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="bg-[#0a0a0a] backdrop-blur-3xl border border-white/10 rounded-[2rem] p-6 shadow-2xl overflow-hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-400 hover:text-white text-lg font-bold tracking-tight py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[1px] bg-white/5 my-2"></div>
              <button
                  type="button"
                  onClick={() => { handleBookingClick(); setIsMenuOpen(false); }}
                  className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest"
              >
                  Umów Rozmowę
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
