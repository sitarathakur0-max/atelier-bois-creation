import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { FAQ_ITEMS, BUSINESS_INFO } from '../data/business';
import { ProjectQuoteCTA } from '../components/ProjectQuoteCTA';

interface FaqPageProps {
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="py-14 md:py-20 bg-[#F4EEE5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#8C6239] font-semibold">
              Questions Fréquentes
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#1C1917] mt-2 leading-tight">
              Tout savoir avant de confier votre projet à l’atelier.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
              Retrouvez ici les réponses précises et factuelles concernant notre mode de fabrication,
              la présentation de votre besoin et l’accès à notre atelier parisien.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 md:py-24 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  id={`faq-${item.id}`}
                  className="bg-white rounded-2xl border border-[#E3DACD] overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  >
                    <span className="font-serif text-lg sm:text-xl font-semibold text-[#1C1917]">
                      {item.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E3DACD] flex items-center justify-center text-[#8C6239] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#8C6239] text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${item.id}`}
                      className="px-6 pb-7 sm:px-7 text-sm sm:text-base text-[#57534E] leading-relaxed border-t border-[#F0EAE1] pt-4 animate-fade-in"
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Help Card */}
          <div className="mt-12 p-8 rounded-2xl bg-[#EFE9E1] border border-[#DDD4C7] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-xl font-semibold text-[#1C1917]">
                Une autre question sur votre pièce ?
              </h3>
              <p className="text-sm text-[#57534E] mt-1">
                L’artisan est à votre disposition par téléphone ou par message pour vous renseigner directement.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#24211E] text-sm font-medium border border-[#DCD3C7] hover:bg-[#FAF7F2] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#8C6239]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#24211E] text-white text-sm font-medium hover:bg-[#8C6239] transition-colors cursor-pointer"
              >
                <span>Poser une question</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ProjectQuoteCTA onNavigate={onNavigate} />
    </div>
  );
};
