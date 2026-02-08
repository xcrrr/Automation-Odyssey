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
      const headerOffset = 80;
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
    { name: 'O nas', href: '#features' },
    { name: 'Jak to działa', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-dark/95 backdrop-blur-xl border-primary/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-2' 
          : 'bg-transparent border-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`p-1.5 rounded-lg transition-colors duration-300 ${isScrolled ? 'bg-primary/10' : 'bg-transparent'}`}>
                <Compass className={`h-6 w-6 md:h-8 md:w-8 transition-all duration-500 group-hover:rotate-45 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            </div>
            <span className={`font-heading font-bold text-lg md:text-xl tracking-wider transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-white'}`}>
              Automation Odyssey
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-primary hover:bg-white/5 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <button
                type="button"
                onClick={handleBookingClick}
                data-cal-link="automationodyssey.pl/konsultacja-ai"
                data-cal-namespace="konsultacja-ai"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className={`text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cursor-pointer ${
                    isScrolled 
                    ? 'bg-gradient-to-r from-primary to-secondary shadow-lg hover:shadow-primary/25' 
                    : 'bg-white/10 hover:bg-white/20 border border-white/20'
                }`}
              >
                <Calendar size={18} />
                Umów Rozmowę
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none cursor-pointer"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-primary/20 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-300 hover:text-primary hover:bg-white/5 block px-3 py-3 rounded-lg text-base font-medium cursor-pointer transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
                type="button"
                onClick={() => { handleBookingClick(); setIsMenuOpen(false); }}
                data-cal-link="automationodyssey.pl/konsultacja-ai"
                data-cal-namespace="konsultacja-ai"
                data-cal-config='{"layout":"month_view","theme":"dark"}'
                className="w-full text-center mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-bold cursor-pointer hover:shadow-lg transition-shadow"
            >
                <Calendar size={18} />
                Umów Rozmowę
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};