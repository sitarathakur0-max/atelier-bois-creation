import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'L’Atelier' },
    { id: 'services', label: 'Prestations' },
    { id: 'portfolio', label: 'Créations' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E3DACD]'
          : 'bg-[#FAF7F2] border-b border-[#E8E1D5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Wordmark */}
          <button
            id="header-brand-link"
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus:outline-hidden"
            aria-label="Atelier Bois & Création - Retour à l'accueil"
          >
            <span className="block font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#1C1917] group-hover:text-[#8C6239] transition-colors">
              {BUSINESS_INFO.name}
            </span>
            <span className="block text-xs uppercase tracking-widest text-[#78716C] font-medium mt-0.5">
              Ébénisterie & Mobilier Artisanal • Paris 11<sup>e</sup>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" aria-label="Navigation principale" className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors relative cursor-pointer ${
                    isActive
                      ? 'text-[#8C6239] font-semibold'
                      : 'text-[#44403C] hover:text-[#1C1917] hover:bg-[#F2ECE4]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#8C6239] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Contact Actions (Phone & CTA) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              id="header-phone-link"
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-[#44403C] hover:text-[#8C6239] px-3 py-2 transition-colors"
              title={`Appeler l'atelier : ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4 text-[#8C6239]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="header-quote-cta"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#24211E] hover:bg-[#8C6239] text-[#FAF7F2] text-sm font-medium transition-colors shadow-xs cursor-pointer"
            >
              <span>Demander un devis</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              id="mobile-phone-quick-link"
              href={BUSINESS_INFO.phoneHref}
              className="p-2 text-[#44403C] hover:text-[#8C6239] rounded-md"
              aria-label={`Appeler ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#24211E] hover:text-[#8C6239] rounded-md focus:outline-hidden"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu de navigation'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#FAF7F2] border-b border-[#E3DACD] px-4 pt-3 pb-6 shadow-md transition-all duration-200"
        >
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-md text-base font-medium flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#EAE2D7] text-[#8C6239] font-semibold'
                      : 'text-[#292524] hover:bg-[#F2ECE4]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#8C6239]" />}
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-[#E8E1D5] space-y-3">
            <a
              id="mobile-drawer-phone"
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#F2ECE4] text-[#24211E] text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-[#8C6239]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="mobile-drawer-quote-cta"
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#24211E] text-white text-sm font-medium hover:bg-[#8C6239] transition-colors"
            >
              <span>Parler de votre projet</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
