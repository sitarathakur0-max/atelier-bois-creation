import React from 'react';
import { ArrowUpRight, Check, Compass, Sparkles, Layers, Ruler } from 'lucide-react';
import { PageId } from '../types';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/business';
import { ProjectQuoteCTA } from '../components/ProjectQuoteCTA';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForQuote: (serviceCategory: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceForQuote,
}) => {
  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="py-14 md:py-20 bg-[#F4EEE5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#8C6239] font-semibold">
              Prestations en Atelier
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#1C1917] mt-2 leading-tight">
              Nos prestations d'ébénisterie et de menuiserie sur mesure.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
              De la table de réception au mobilier d’alcôve, l’atelier conçoit chaque meuble
              comme un dialogue entre les spécificités de votre pièce et la noblesse du bois naturel.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Details */}
      <section className="py-16 md:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden border border-[#E3DACD] shadow-md aspect-4/3 bg-[#EAE2D7] group">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#1C1917]/80 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-md">
                      Fabrication d'atelier à Paris 11<sup>e</sup>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFE9E1] text-xs font-semibold uppercase tracking-widest text-[#8C6239]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Création sur mesure</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1917] leading-tight">
                    {service.title}
                  </h2>

                  <p className="text-base text-[#57534E] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Highlights / Aspects */}
                  <div className="pt-2">
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1C1917] mb-3">
                      Ce que nous apportons à cette prestation :
                    </h3>
                    <ul className="space-y-2.5 text-sm text-[#44403C]">
                      {service.aspects.map((aspect, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#EAE2D7] text-[#8C6239] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            ✓
                          </span>
                          <span>{aspect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA buttons */}
                  <div className="pt-4 flex flex-wrap gap-3">
                    <button
                      onClick={() => {
                        onSelectServiceForQuote(service.category);
                        onNavigate('contact');
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#24211E] hover:bg-[#8C6239] text-white text-sm font-medium transition-colors shadow-xs cursor-pointer"
                    >
                      <span>Demander un devis pour {service.title.toLowerCase()}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onNavigate('portfolio')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-[#F2ECE4] text-[#24211E] text-sm font-medium border border-[#DCD3C7] transition-colors cursor-pointer"
                    >
                      <span>Voir des exemples</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reusable Project Quote CTA */}
      <ProjectQuoteCTA onNavigate={onNavigate} />
    </div>
  );
};
