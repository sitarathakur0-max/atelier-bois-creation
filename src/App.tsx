/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, PortfolioCreation } from './types';
import { BUSINESS_INFO } from './data/business';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedItem, setSelectedItem] = useState<PortfolioCreation | null>(null);
  const [selectedProjectType, setSelectedProjectType] = useState<string>('table');

  // Handle URL Hash on load & hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages: PageId[] = ['home', 'about', 'services', 'portfolio', 'faq', 'contact'];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update Page Title and Meta Description for SEO on each page
  useEffect(() => {
    const pageTitles: Record<PageId, string> = {
      home: 'Atelier Bois & Création | Mobilier & Ébénisterie sur Mesure à Paris 11e',
      about: 'L’Atelier & Savoir-Faire | Atelier Bois & Création Paris 11e',
      services: 'Prestations de Menuiserie & Mobilier sur Mesure | Atelier Bois & Création',
      portfolio: 'Créations & Réalisations en Bois Massif | Atelier Bois & Création',
      faq: 'Questions Fréquentes | Atelier Bois & Création Paris',
      contact: 'Demander un Devis & Contact | Atelier Bois & Création Paris 11e',
    };

    const pageDescriptions: Record<PageId, string> = {
      home: 'Atelier d’artisanat du bois au 24 Rue des Artisans, Paris 11e. Mobilier sur mesure, tables, étagères et agencements intérieurs.',
      about: 'Découvrez notre atelier d’ébénisterie au 24 Rue des Artisans à Paris 11e. Savoir-faire traditionnel et travail des essences nobles.',
      services: 'Prestations d’ébénisterie sur mesure : tables de repas, bibliothèques d’alcôve, enfilades en bois massif et agencements.',
      portfolio: 'Galerie des réalisations de l’Atelier Bois & Création à Paris : tables en chêne, étagères sur mesure et mobilier raffiné.',
      faq: 'Toutes les réponses pour préparer votre projet de meuble sur mesure chez Atelier Bois & Création à Paris.',
      contact: 'Contactez l’Atelier Bois & Création au 24 Rue des Artisans, 75011 Paris. Téléphone : +33 1 84 80 21 45. Devis gratuit.',
    };

    document.title = pageTitles[currentPage] || pageTitles.home;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDescriptions[currentPage] || pageDescriptions.home);
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForQuote = (serviceCategory: string) => {
    setSelectedProjectType(serviceCategory);
    handleNavigate('contact');
  };

  const handleSelectProjectFromLightbox = (category: string, _title: string) => {
    setSelectedProjectType(category);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#24211E] selection:bg-[#8C6239] selection:text-white">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#24211E] focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Aller au contenu principal
      </a>

      {/* Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1 focus:outline-hidden">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenItem={(item) => setSelectedItem(item)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectServiceForQuote={handleSelectServiceForQuote}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onNavigate={handleNavigate}
            onOpenItem={(item) => setSelectedItem(item)}
          />
        )}

        {currentPage === 'faq' && (
          <FaqPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage initialProjectType={selectedProjectType} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onSelectProject={handleSelectProjectFromLightbox}
      />
    </div>
  );
}
