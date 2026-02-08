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
    <footer id="contact" className="bg-dark pt-24 md:pt-32 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Compass className="h-6 w-6 text-primary" />
              <span className="font-heading font-bold text-xl text-white">Automation Odyssey</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-xs mx-auto md:mx-0">
              Rewolucjonizujemy komunikację biznesową dzięki inteligentnym botom głosowym i chatbotom.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Firma</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-primary transition-colors">O nas</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">Jak to działa</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Prawne</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" onClick={preventDefault} className="hover:text-primary transition-colors cursor-pointer">Polityka Prywatności</a></li>
              <li><a href="#" onClick={preventDefault} className="hover:text-primary transition-colors cursor-pointer">Regulamin</a></li>
              <li><a href="#" onClick={preventDefault} className="hover:text-primary transition-colors cursor-pointer">RODO</a></li>
            </ul>
          </div>

          {/* Contact/Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-gray-400 mb-6 w-full max-w-xs md:max-w-none">
              <li className="flex items-center justify-center md:justify-start gap-2 group">
                <Mail size={16} className="text-primary group-hover:text-white transition-colors" />
                <a href="mailto:kontakt@automationodyssey.pl" className="hover:text-white transition-colors">kontakt@automationodyssey.pl</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 group">
                <Phone size={16} className="text-primary group-hover:text-white transition-colors" />
                <a href="tel:+48573920727" className="hover:text-white transition-colors">+48 573 920 727</a>
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