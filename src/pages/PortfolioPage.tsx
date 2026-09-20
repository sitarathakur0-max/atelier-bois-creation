import React, { useState } from 'react';
import { Sparkles, ArrowRight, Eye, Layers } from 'lucide-react';
import { PageId, PortfolioCreation } from '../types';
import { PORTFOLIO_DATA, BUSINESS_INFO } from '../data/business';
import { ProjectQuoteCTA } from '../components/ProjectQuoteCTA';

interface PortfolioPageProps {
  onNavigate: (page: PageId) => void;
  onOpenItem: (item: PortfolioCreation) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate, onOpenItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Toutes les créations' },
    { id: 'tables', label: 'Tables' },
    { id: 'shelving', label: 'Étagères & Bibliothèques' },
    { id: 'furniture', label: 'Mobilier sur mesure' },
    { id: 'interiors', label: 'Agencements intérieurs' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="py-14 md:py-20 bg-[#F4EEE5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#8C6239] font-semibold">
              Galerie & Savoir-faire
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#1C1917] mt-2 leading-tight">
              Créations & Typologies d'ouvrages
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
              Découvrez des exemples représentatifs des pièces en bois façonnées par l’atelier :
              tables de caractère, rayonnages d’alcôves, buffets épurés et agencements sur mesure.
            </p>
            <p className="mt-2 text-xs text-[#78716C] italic">
              * Présentation des typologies et finitions réalisables en atelier selon vos cotes et essences préférées.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-8 bg-[#FAF7F2] border-b border-[#E8E1D5] sticky top-20 z-30 backdrop-blur-md bg-[#FAF7F2]/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#24211E] text-white shadow-xs'
                      : 'bg-white text-[#44403C] hover:bg-[#F2ECE4] border border-[#E3DACD]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenItem(item)}
                className="bg-white rounded-2xl overflow-hidden border border-[#E3DACD] shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                {/* Image Container with overlay */}
                <div className="relative aspect-4/3 overflow-hidden bg-[#EDE6DC]">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs text-xs font-semibold px-2.5 py-1 rounded-md text-[#8C6239]">
                    {item.categoryLabel}
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/90 text-[#1C1917] text-xs font-semibold shadow-md">
                      <Eye className="w-4 h-4 text-[#8C6239]" />
                      <span>Examiner les détails</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#1C1917] group-hover:text-[#8C6239] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#57534E] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#F0EAE1] space-y-1 text-xs text-[#78716C]">
                      <p>
                        <strong className="text-[#44403C]">Matière :</strong> {item.material}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs font-semibold text-[#8C6239]">
                    <span>Voir la fiche technique</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#78716C] text-sm">Aucune pièce trouvée pour cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Reusable Project Quote CTA */}
      <ProjectQuoteCTA
        onNavigate={onNavigate}
        title="Une idée précise en tête ou un croquis ?"
        subtitle="Partagez-nous vos cotes et l’ambiance de votre pièce. L’atelier vous guide sur le choix de l’essence et réalise une étude sans engagement."
      />
    </div>
  );
};
