import React from 'react';
import { ArrowUpRight, Compass, Hammer, Sparkles, MapPin, Phone, Layers, Shield } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, WORKSHOP_PROCESS_STEPS } from '../data/business';
import { TrustBadge } from '../components/TrustBadge';
import { ProjectQuoteCTA } from '../components/ProjectQuoteCTA';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="py-14 md:py-20 bg-[#F4EEE5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#8C6239] font-semibold">
              L’Atelier & Savoir-Faire
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#1C1917] mt-2 leading-tight">
              L’esprit d’un atelier artisanal au cœur de Paris.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
              Atelier Bois & Création est un petit atelier artisanal dédié à la création
              de mobilier en bois sur mesure, d’étagères, de tables et de pièces d’agencement intérieur.
            </p>
            <div className="mt-6">
              <TrustBadge />
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFE9E1] text-xs font-semibold uppercase tracking-widest text-[#8C6239]">
                <Hammer className="w-3.5 h-3.5" />
                <span>Philosophie d'atelier</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1917] leading-tight">
                Chaque pièce commence par une écoute attentive de votre lieu de vie.
              </h2>

              <p className="text-base text-[#57534E] leading-relaxed">
                Dans les appartements et maisons de la région parisienne, chaque mètre carré et chaque volume
                ont leurs particularités : angles non droits, niches d’époque, hauteurs de plafond singulières.
                Le mobilier industriel prêt-à-poser s’avère souvent frustrant ou mal proportionné.
              </p>

              <p className="text-base text-[#57534E] leading-relaxed">
                Chez <strong>Atelier Bois & Création</strong>, nous prenons le contre-pied des séries uniformes.
                Nous abordons chaque meuble comme une création unique. Nous prenons le temps d’échanger sur
                votre usage quotidien, vos contraintes d’espace et les teintes qui s’harmonisent avec vos sols,
                murs et luminaires.
              </p>

              <div className="p-5 rounded-xl bg-white border border-[#E3DACD] text-sm text-[#44403C] space-y-2">
                <div className="font-semibold text-[#1C1917] font-serif text-base">
                  Notre engagement fondamental :
                </div>
                <p>
                  Un meuble pensé sur mesure, façonné avec des matières naturelles de haute qualité,
                  assemblé pour durer et installer chez vous sans compromis esthétique.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#E3DACD] shadow-md aspect-4/3">
                <img
                  src={BUSINESS_INFO.images.craft}
                  alt="Travail manuel du bois en atelier, rabotage et finitions précises"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Wood Species */}
      <section className="py-16 md:py-20 bg-[#F4EEE5]/60 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-[#8C6239] font-semibold">
              Matières Nobles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1917] mt-2">
              Le respect des essences de bois
            </h2>
            <p className="mt-3 text-sm text-[#57534E]">
              Le bois est une matière vivante et chaleureuse. Nous sélectionnons des plateaux et tasseaux
              stables, au fil harmonieux et aux teintes naturelles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#E3DACD] shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E3DACD] flex items-center justify-center text-[#8C6239] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1C1917] mb-2">
                Chêne de pays
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Essence reine de l'ébénisterie française, réputée pour sa robustesse incomparable,
                ses maillures caractéristiques et sa capacité à s’embellir au fil des années.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E3DACD] shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E3DACD] flex items-center justify-center text-[#8C6239] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1C1917] mb-2">
                Noyer sélectionné
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Bois noble au veinage contrasté et aux reflets profonds, idéal pour les enfilades élégantes,
                les plateaux de table raffinés et les meubles d’exception.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E3DACD] shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E3DACD] flex items-center justify-center text-[#8C6239] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#1C1917] mb-2">
                Frêne & Essences claires
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Texture lumineuse, fil droit et grande souplesse mécanique pour des claustras ajourés
                et des étagères murales au design moderne et épuré.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paris 11th Address & Workshop Identity */}
      <section className="py-16 md:py-20 bg-[#FAF7F2] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E3DACD] shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#8C6239] font-semibold">
                Implantation
              </span>
              <h2 className="font-serif text-3xl font-medium text-[#1C1917]">
                24 Rue des Artisans, 75011 Paris
              </h2>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Le 11e arrondissement de Paris et le faubourg Saint-Antoine perpétuent depuis des siècles
                la tradition de l’ébénisterie et du travail du bois. C'est dans ce cadre propice à l'artisanat
                d'exigence que nous vous accueillons sur rendez-vous pour étudier vos croquis et échantillons.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4 text-sm">
                <div className="flex items-center gap-2 text-[#24211E]">
                  <MapPin className="w-4 h-4 text-[#8C6239]" />
                  <span>24 Rue des Artisans, 75011 Paris</span>
                </div>
                <div className="flex items-center gap-2 text-[#24211E]">
                  <Phone className="w-4 h-4 text-[#8C6239]" />
                  <a href={BUSINESS_INFO.phoneHref} className="underline hover:text-[#8C6239]">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3.5 px-6 rounded-xl bg-[#24211E] hover:bg-[#8C6239] text-white font-medium text-sm transition-colors text-center shadow-xs cursor-pointer"
              >
                Prendre contact avec l'atelier
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="w-full py-3 px-6 rounded-xl bg-[#FAF7F2] hover:bg-[#F2ECE4] text-[#24211E] font-medium text-sm border border-[#DCD3C7] transition-colors text-center cursor-pointer"
              >
                Découvrir nos créations
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
