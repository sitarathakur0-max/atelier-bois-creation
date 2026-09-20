import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, TRUST_FACTS } from '../data/business';

export const TrustBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      id="google-trust-badge"
      className={`inline-flex flex-wrap items-center gap-3 py-2 px-4 rounded-xl bg-[#F2ECE4] border border-[#E3DACD] ${className}`}
    >
      <div className="flex items-center gap-1 text-[#C68A4C]">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < 4
                ? 'fill-[#C68A4C] text-[#C68A4C]'
                : 'fill-[#C68A4C] text-[#C68A4C] opacity-90'
            }`}
          />
        ))}
      </div>
      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#24211E]">
        <span className="font-bold text-[#1C1917]">{BUSINESS_INFO.rating} / 5</span>
        <span className="text-[#78716C]">•</span>
        <span className="font-medium text-[#44403C]">{BUSINESS_INFO.reviewCount} avis Google vérifiés</span>
      </div>
      <div className="hidden sm:flex items-center gap-1 text-xs text-[#78716C] border-l border-[#DCD3C7] pl-3">
        <ShieldCheck className="w-3.5 h-3.5 text-[#8C6239]" />
        <span>Atelier Paris 11<sup>e</sup></span>
      </div>
    </div>
  );
};
