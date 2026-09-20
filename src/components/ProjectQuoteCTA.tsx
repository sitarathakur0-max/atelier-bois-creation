import React from 'react';
import { ArrowUpRight, Phone, Compass, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/business';

interface ProjectQuoteCTAProps {
  onNavigate: (page: PageId) => void;
  title?: string;
  subtitle?: string;
}

export const ProjectQuoteCTA: React.FC<ProjectQuoteCTAProps> = ({
  onNavigate,
  title = 'Vous avez un projet de meuble ou d’agencement en bois ?',
  subtitle = 'Échangeons ensemble sur vos dimensions, vos envies et vos contraintes d’espace. Nous étudions chaque demande avec rigueur.',
}) => {
  return (
    <section id="project-quote-cta" className="py-16 md:py-20 bg-[#24211E] text-white relative overflow-hidden">
      {/* Subtle organic wood ring background accent */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-72 h-72 rounded-full border border-white/5 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium tracking-wide uppercase text-[#D4A373] mb-6">
          <Compass className="w-3.5 h-3.5" />
          <span>Atelier artisanal à Paris 11<sup>e</sup></span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#D6D3D1] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#A8A29E]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D4A373]" /> Étude personnalisée
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D4A373]" /> Ébénisterie sur mesure
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D4A373]" /> Essences nobles
          </span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="cta-request-quote-btn"
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-[#8C6239] hover:bg-[#A27344] text-white font-medium text-base transition-colors shadow-md cursor-pointer"
          >
            <span>Demander un devis pour votre projet</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>

          <a
            id="cta-call-workshop-btn"
            href={BUSINESS_INFO.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-base transition-colors border border-white/15"
          >
            <Phone className="w-4 h-4 text-[#D4A373]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
