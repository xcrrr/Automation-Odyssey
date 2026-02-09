import React, { useState } from 'react';
import { Compass, Mail, Phone, Twitter, Linkedin, Facebook, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const preventDefault = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <footer id="contact" className="bg-dark pt-24 md:pt-32 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16 text-left">
          
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Compass className="h-6 w-6 text-primary group-hover:rotate-45 transition-transform duration-500" />
              <span className="font-heading font-bold text-xl text-white">Automation Odyssey</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Rewolucjonizujemy komunikację biznesową dzięki inteligentnym botom głosowym i chatbotom.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-primary hover:bg-white/10 transition-all"><Twitter size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-primary hover:bg-white/10 transition-all"><Linkedin size={18} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-primary hover:bg-white/10 transition-all"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Firma</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors cursor-pointer">O nas</a></li>
              <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors cursor-pointer">Jak to działa</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors cursor-pointer">FAQ</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors cursor-pointer">Kontakt</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Prawne</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#privacy" className="hover:text-primary transition-colors cursor-pointer">Polityka Prywatności</a></li>
              <li><a href="#terms" className="hover:text-primary transition-colors cursor-pointer">Regulamin</a></li>
              <li><button onClick={() => alert('RODO: Administratorem danych jest Adam Parszewski. Dane przetwarzane są wyłącznie w celach biznesowych.')} className="hover:text-primary transition-colors cursor-pointer">RODO</button></li>
            </ul>
          </div>

          {/* Contact/Newsletter */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start">
            <h4 className="text-white font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-gray-400 mb-6 w-full">
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={14} />
                </div>
                <a href="mailto:automationodyssey@gmail.com" className="hover:text-white transition-colors">automationodyssey@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={14} />
                </div>
                <a href="tel:+48729086144" className="hover:text-white transition-colors">+48 729 086 144</a>
              </li>
            </ul>
            <form onSubmit={handleSubscribe} className="relative w-full max-w-xs md:max-w-none">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Twój email" 
                required
                className="w-full bg-dark-lighter border border-gray-700 rounded-lg py-2 px-4 text-sm text-white focus:outline-none focus:border-primary transition-colors pr-24"
              />
              <button 
                type="submit" 
                disabled={isSubscribed}
                className={`absolute right-1 top-1 bottom-1 px-3 rounded-md text-xs font-bold transition-all duration-300 flex items-center justify-center cursor-pointer ${
                  isSubscribed 
                    ? 'bg-green-500 text-white w-20' 
                    : 'bg-primary text-dark-lighter hover:bg-white w-20'
                }`}
              >
                {isSubscribed ? <Check size={16} /> : 'Zapisz się'}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Automation Odyssey. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};