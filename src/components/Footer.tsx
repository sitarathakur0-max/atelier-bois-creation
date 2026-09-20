import React from 'react';
import { Phone, MapPin, Star, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/business';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1C1917] text-[#FAF7F2] pt-16 pb-12 border-t border-[#292524]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2E2926]">
          {/* Col 1: Business Identity */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-white">
              {BUSINESS_INFO.name}
            </h2>
            <p className="text-sm text-[#A8A29E] leading-relaxed">
              {BUSINESS_INFO.shortDescription}
            </p>
            {/* Google Rating Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#292524] text-xs font-medium text-[#FAF7F2] border border-[#38332E]">
              <div className="flex items-center text-[#D4A373]">
                <Star className="w-3.5 h-3.5 fill-[#D4A373]" />
              </div>
              <span>Google : <strong>{BUSINESS_INFO.rating}/5</strong> ({BUSINESS_INFO.reviewCount} avis)</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#D4A373] font-semibold mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className="text-[#D6D3D1] hover:text-white transition-colors cursor-pointer"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className="text-[#D6D3D1] hover:text-white transition-colors cursor-pointer"
                >
                  L’Atelier & Savoir-faire
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="text-[#D6D3D1] hover:text-white transition-colors cursor-pointer"
                >
                  Prestations de menuiserie
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('portfolio')}
                  className="text-[#D6D3D1] hover:text-white transition-colors cursor-pointer"
                >
                  Créations & Réalisations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('faq')}
                  className="text-[#D6D3D1] hover:text-white transition-colors cursor-pointer"
                >
                  Questions fréquentes (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="text-[#D6D3D1] hover:text-white transition-colors cursor-pointer"
                >
                  Nous contacter
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#D4A373] font-semibold mb-4">
              Prestations
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D6D3D1]">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleLinkClick('services')}
                    className="text-left text-[#D6D3D1] hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3 h-3 text-[#8C6239]" />
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Exact Address */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#D4A373] font-semibold mb-4">
              L’Atelier à Paris
            </h3>
            <address className="not-italic text-sm text-[#D6D3D1] space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4A373] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="text-[#FAF7F2] hover:text-[#D4A373] transition-colors font-medium underline underline-offset-4"
                  title={`Téléphoner à ${BUSINESS_INFO.phone}`}
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </address>

            <div className="mt-5">
              <button
                onClick={() => handleLinkClick('contact')}
                className="inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-md bg-[#8C6239] text-white hover:bg-[#A27344] transition-colors cursor-pointer"
              >
                Parler de votre projet
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] gap-4">
          <p>© {currentYear} {BUSINESS_INFO.name}. Tous droits réservés.</p>
          <p className="text-center sm:text-right">
            Artisanat du bois & Mobilier sur mesure • 24 Rue des Artisans, 75011 Paris
          </p>
        </div>
      </div>
    </footer>
  );
};
