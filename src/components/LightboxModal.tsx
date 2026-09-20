import React, { useEffect } from 'react';
import { X, ArrowRight, Ruler, Layers, Sparkles } from 'lucide-react';
import { PortfolioCreation, PageId } from '../types';

interface LightboxModalProps {
  item: PortfolioCreation | null;
  onClose: () => void;
  onSelectProject: (category: string, title: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      id="portfolio-lightbox-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div
        className="relative bg-[#FAF7F2] text-[#24211E] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E8E1D5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-lightbox-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-[#24211E] hover:bg-[#8C6239] hover:text-white transition-colors shadow-xs cursor-pointer"
          aria-label="Fermer la vue détaillée"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Visual Showcase */}
          <div className="relative bg-[#EDE7DF] aspect-4/3 md:aspect-auto min-h-[300px] md:min-h-[440px] flex items-center justify-center overflow-hidden rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl">
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-[#1C1917]/80 backdrop-blur-xs text-white text-xs px-2.5 py-1 rounded-md">
              Exemple de façonnage en atelier
            </div>
          </div>

          {/* Details & Specifications */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE2D7] text-[#8C6239] text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{item.categoryLabel}</span>
              </div>

              <h3 id="lightbox-title" className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1917] leading-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-[#57534E] leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 space-y-3 pt-5 border-t border-[#E8E1D5] text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 text-[#44403C]">
                  <Layers className="w-4 h-4 text-[#8C6239] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917]">Essence & Finition : </span>
                    <span>{item.material}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-[#44403C]">
                  <Ruler className="w-4 h-4 text-[#8C6239] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917]">Format d’exemple : </span>
                    <span>{item.dimensionsNote}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {item.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-[#F2ECE4] text-[#44403C] text-xs border border-[#E3DACD]"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-8 pt-5 border-t border-[#E8E1D5]">
              <button
                id="lightbox-enquiry-btn"
                onClick={() => {
                  onSelectProject(item.category, item.title);
                  onClose();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#24211E] hover:bg-[#8C6239] text-white font-medium text-sm transition-colors cursor-pointer shadow-xs"
              >
                <span>Échanger sur une pièce similaire</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-[#78716C] mt-2">
                Confection personnalisée à vos cotes au 24 Rue des Artisans, Paris 11<sup>e</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
