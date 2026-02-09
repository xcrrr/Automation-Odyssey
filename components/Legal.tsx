import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LegalPageProps {
  title: string;
  children: React.ReactNode;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
          {title}
        </h1>
        <div className="glass-card p-8 md:p-12 rounded-3xl border-white/5 prose prose-invert max-w-none">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const PrivacyPolicy: React.FC = () => (
  <LegalPage title="Polityka Prywatności">
    <div className="space-y-6 text-gray-300">
      <section>
        <h2 className="text-xl font-bold text-white mb-3">1. Informacje ogólne</h2>
        <p>Właścicielem serwisu automationodyssey.pl oraz Administratorem Danych Osobowych jest Adam Parszewski, działający w ramach modelu inkubacji biznesowej (wsparcie prawne: Rodzice / Opiekunowie Prawni). Kontakt: automationodyssey@gmail.com.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-white mb-3">2. Jakie dane zbieramy?</h2>
        <p>Zbieramy dane, które dobrowolnie podajesz w celach kontaktowych i biznesowych:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Imię i nazwisko</li>
          <li>Adres e-mail</li>
          <li>Numer telefonu</li>
          <li>Nazwa firmy</li>
          <li>Dane przekazywane w trakcie rozmów z naszymi botami AI (wyłącznie w celu realizacji usługi).</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold text-white mb-3">3. Cel i podstawa przetwarzania</h2>
        <p>Dane przetwarzane są w celu:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Nawiązania kontaktu i odpowiedzi na zapytania (Art. 6 ust. 1 lit. f RODO – uzasadniony interes administratora).</li>
          <li>Przygotowania i realizacji umowy (Art. 6 ust. 1 lit. b RODO).</li>
          <li>Marketingu bezpośredniego (Art. 6 ust. 1 lit. a RODO – za Twoją zgodą).</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-bold text-white mb-3">4. Odbiorcy danych</h2>
        <p>Twoje dane mogą być przekazywane podmiotom technicznym wspierającym nasze usługi: Vapi (infrastruktura voicebotów), ElevenLabs (synteza mowy), Cal.com (zarządzanie terminami spotkań) oraz dostawcy usług hostingowych.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-white mb-3">5. Twoje prawa</h2>
        <p>Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia („prawo do bycia zapomnianym”), ograniczenia przetwarzania, wniesienia sprzeciwu oraz wniesienia skargi do PUODO.</p>
      </section>
    </div>
  </LegalPage>
);

export const TermsOfService: React.FC = () => (
  <LegalPage title="Regulamin">
    <div className="space-y-6 text-gray-300">
      <section>
        <h2 className="text-xl font-bold text-white mb-3">1. Postanowienia wstępne</h2>
        <p>Niniejszy regulamin określa zasady korzystania z serwisu automationodyssey.pl oraz zamawiania usług automatyzacji AI. Usługodawcą jest Adam Parszewski (Automation Odyssey).</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-white mb-3">2. Usługi</h2>
        <p>Automation Odyssey świadczy usługi projektowania, wdrażania i utrzymania systemów konwersacyjnej sztucznej inteligencji (Voiceboty i Chatboty). Szczegółowy zakres i cena usługi ustalane są indywidualnie.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-white mb-3">3. Realizacja zamówień</h2>
        <p>Z uwagi na wiek Wykonawcy (15 lat), wszelkie wiążące umowy cywilnoprawne są zawierane przy udziale i za zgodą opiekunów prawnych lub za pośrednictwem platformy rozliczeniowej (np. Useme).</p>
      </section>
      <section>
        <h2 className="text-xl font-bold text-white mb-3">4. Odpowiedzialność</h2>
        <p>Usługodawca nie ponosi odpowiedzialności za treści generowane przez modele AI, które wykraczają poza zdefiniowane ramy konwersacji, o ile wynikają one z nieprzewidywalnego zachowania modeli zewnętrznych dostawców.</p>
      </section>
    </div>
  </LegalPage>
);
