import React from 'react';
import { ArrowUpRight, ArrowRight, Check, Compass, Hammer, Sparkles, MapPin, Phone, Star } from 'lucide-react';
import { PageId, PortfolioCreation } from '../types';
import { BUSINESS_INFO, SERVICES_DATA, PORTFOLIO_DATA, WORKSHOP_PROCESS_STEPS } from '../data/business';
import { TrustBadge } from '../components/TrustBadge';
import { ProjectQuoteCTA } from '../components/ProjectQuoteCTA';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenItem: (item: PortfolioCreation) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenItem }) => {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section id="hero-section" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge / Tag */}
              <div className="flex flex-wrap items-center gap-3">
                <TrustBadge />
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1C1917] leading-[1.12]">
                Le bois, façonné pour{' '}
                <span className="italic font-normal text-[#8C6239]">votre intérieur.</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#57534E] max-w-2xl leading-relaxed">
                Atelier artisanal d’ébénisterie basé au 24 Rue des Artisans à Paris.
                Nous concevons et réalisons sur mesure vos tables, étagères, meubles
                et pièces d’agencement intérieur dans des essences de bois nobles.
              </p>

              {/* Features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-[#44403C]">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#EAE2D7] text-[#8C6239] flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Fabrication 100% sur mesure</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#EAE2D7] text-[#8C6239] flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Essences sélectionnées & finitions durables</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#EAE2D7] text-[#8C6239] flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Atelier d’artisanat à Paris 11<sup>e</sup></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#EAE2D7] text-[#8C6239] flex items-center justify-center text-xs font-bold">✓</span>
                  <span>Échange direct avec l’artisan</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  id="hero-cta-quote"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#24211E] hover:bg-[#8C6239] text-[#FAF7F2] font-medium text-base transition-colors shadow-sm cursor-pointer"
                >
                  <span>Demander un devis personnalisé</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>

                <button
                  id="hero-cta-creations"
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-[#F2ECE4] text-[#24211E] font-medium text-base transition-colors border border-[#DCD3C7] cursor-pointer"
                >
                  <span>Découvrir nos créations</span>
                  <ArrowRight className="w-4 h-4 text-[#8C6239]" />
                </button>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#E0D7CB] shadow-lg bg-[#EAE2D7] aspect-4/3 sm:aspect-5/4 lg:aspect-4/5">
                <img
                  src={BUSINESS_INFO.images.hero}
                  alt="Établi et travail du bois artisanal chez Atelier Bois & Création à Paris"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider text-[#D4A373] font-semibold">
                    Atelier Bois & Création • Paris 11<sup>e</sup>
                  </p>
                  <p className="font-serif text-lg font-medium leading-snug mt-0.5">
                    L’artisanat du bois au service de vos volumes.
                  </p>
                </div>
              </div>

              {/* Floating workshop card badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-4 rounded-xl border border-[#E3DACD] shadow-md items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E3DACD] flex items-center justify-center text-[#8C6239]">
                  <Hammer className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#78716C] uppercase tracking-wider font-semibold">Atelier parisien</div>
                  <div className="text-sm font-semibold text-[#1C1917]">24 Rue des Artisans</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION TO THE WORKSHOP */}
      <section id="workshop-intro-section" className="py-16 md:py-24 bg-[#F5EFE6]/60 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-xs border border-[#E2D9CC] aspect-3/4">
                  <img
                    src={BUSINESS_INFO.images.craft}
                    alt="Détail du travail de rabotage et d'assemblage en bois massif"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-xs border border-[#E2D9CC] aspect-3/4 mt-8">
                  <img
                    src={BUSINESS_INFO.images.furniture}
                    alt="Mobilier contemporain en bois réalisé sur mesure"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E8DFD3] text-xs font-semibold uppercase tracking-widest text-[#8C6239]">
                <Compass className="w-3.5 h-3.5" />
                <span>L’Atelier du 11<sup>e</sup> arrondissement</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1C1917] leading-tight">
                Une approche artisanale, au millimètre près, pour vos pièces de vie.
              </h2>

              <p className="text-base text-[#57534E] leading-relaxed">
                Niché au <strong>24 Rue des Artisans</strong> dans le 11e arrondissement de Paris, notre atelier
                façonne des meubles qui ont du sens et une histoire. Ici, nous refusons les gabarits industriels
                imposés : chaque table, chaque rayonnage et chaque panneau d’agencement est dessiné et confectionné
                spécifiquement pour son futur emplacement.
              </p>

              <p className="text-base text-[#57534E] leading-relaxed">
                Nous travaillons avec des essences de bois sélectionnées pour leur caractère : chêne français aux veinages profonds,
                noyer chaleureux, frêne lumineux. Les assemblages traditionnels garantissent la durabilité mécanique de vos meubles,
                tandis que les finitions aux huiles mates respectent le grain naturel et la douceur du bois.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#8C6239] hover:text-[#5E3E1F] transition-colors cursor-pointer group"
                >
                  <span>En savoir plus sur notre savoir-faire en atelier</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BESPOKE SERVICES OVERVIEW */}
      <section id="services-overview-section" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-[#8C6239] font-semibold">
              Notre domaine d’intervention
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1C1917] mt-2">
              Des créations sur mesure adaptées à votre intérieur
            </h2>
            <p className="mt-4 text-base text-[#57534E]">
              Du meuble autonome à l’aménagement complet d’alcôve, l’atelier répond aux exigences
              géométriques et esthétiques de votre espace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5DCD0] shadow-xs hover:border-[#8C6239]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="rounded-xl overflow-hidden aspect-16/10 mb-6 bg-[#EFE9E1]">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#1C1917]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
                    {service.shortDesc}
                  </p>
                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-[#44403C]">
                    {service.aspects.slice(0, 3).map((asp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C6239] mt-2 shrink-0" />
                        <span>{asp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-[#F0EAE1] flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold uppercase tracking-wider text-[#8C6239] hover:text-[#5E3E1F] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Détails de la prestation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#24211E] hover:text-white text-xs font-medium text-[#24211E] border border-[#DDD3C6] transition-colors cursor-pointer"
                  >
                    Demander une étude
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED CREATIONS GALLERY PREVIEW */}
      <section id="creations-preview-section" className="py-16 md:py-24 bg-[#F5EFE6]/40 border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8C6239] font-semibold">
                Portfolio de l’atelier
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1C1917] mt-2">
                Exemples de pièces façonnées
              </h2>
              <p className="mt-2 text-sm text-[#57534E] max-w-xl">
                Chaque création présentée illustre nos techniques d’assemblage, le choix des essences
                et l’ajustement soigné aux intérieurs de nos clients.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => onNavigate('portfolio')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-[#F2ECE4] text-[#1C1917] text-sm font-semibold border border-[#DCD3C7] shadow-xs cursor-pointer"
              >
                <span>Voir toutes les créations</span>
                <ArrowRight className="w-4 h-4 text-[#8C6239]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenItem(item)}
                className="bg-white rounded-2xl overflow-hidden border border-[#E3DACD] shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="aspect-4/3 overflow-hidden bg-[#EAE2D7] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs text-xs font-semibold px-2.5 py-1 rounded-md text-[#8C6239]">
                    {item.categoryLabel}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#1C1917] group-hover:text-[#8C6239] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#78716C]">
                      {item.material}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#8C6239] font-medium">
                    <span>Explorer la réalisation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CRAFTSMANSHIP & PROCESS SECTION */}
      <section id="craftsmanship-process-section" className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#8C6239] font-semibold">
              Rigueur & Méthode
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1C1917] mt-2">
              Comment naît une pièce sur mesure ?
            </h2>
            <p className="mt-3 text-sm text-[#57534E]">
              De la première prise de cotes jusqu’à la dernière couche d’huile protectrice,
              chaque étape est menée avec le souci de la perfection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WORKSHOP_PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="relative bg-white rounded-xl p-6 border border-[#E3DACD] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#8C6239]/80 mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-base font-semibold text-[#1C1917] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE BESPOKE WOODWORKING */}
      <section id="why-bespoke-section" className="py-16 md:py-20 bg-[#F2ECE4] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#8C6239] font-semibold">
                La valeur du sur mesure
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1917] mt-2 leading-tight">
                Pourquoi faire appel à un artisan ébéniste ?
              </h2>
              <p className="mt-4 text-sm text-[#57534E] leading-relaxed">
                Le mobilier de série impose souvent des compromis : formats inadaptés aux appartements parisiens,
                matériaux reconstitués fragiles et finitions standardisées. L’artisanat d’atelier offre une alternative durable et authentique.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white border border-[#E3DACD]">
                <h4 className="font-serif text-lg font-semibold text-[#1C1917] mb-1">
                  Adaptation millimétrée
                </h4>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Aucun espace perdu : le meuble s’encastre parfaitement entre vos plinthes, sous vos poutres ou dans vos recoins.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E3DACD]">
                <h4 className="font-serif text-lg font-semibold text-[#1C1917] mb-1">
                  Bois massifs & nobles
                </h4>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Sélection rigoureuse d’essences durables (chêne, noyer, frêne) qui traversent les décennies et se patinent élégamment.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E3DACD]">
                <h4 className="font-serif text-lg font-semibold text-[#1C1917] mb-1">
                  Solidité des assemblages
                </h4>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Tenons, mortaises et queues d’aronde réalisés dans les règles de l’art pour une tenue mécanique inégalable.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E3DACD]">
                <h4 className="font-serif text-lg font-semibold text-[#1C1917] mb-1">
                  Écoute & Relation humaine
                </h4>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Vous échangez en direct avec la personne qui façonne votre pièce, garantissant la bonne prise en compte de chaque souhait.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRUST & GOOGLE RATING FACTUAL SECTION */}
      <section id="trust-reviews-section" className="py-14 bg-white border-b border-[#E8E1D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 text-[#C68A4C] mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C68A4C]" />
            ))}
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1917]">
            Note Google de {BUSINESS_INFO.rating} / 5 basée sur {BUSINESS_INFO.reviewCount} avis vérifiés
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#57534E] max-w-2xl mx-auto">
            La confiance de nos clients repose sur notre écoute attentive, la précision du travail
            du bois et le respect des délais convenus pour chaque pièce fabriquée en atelier.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-xs font-medium text-[#78716C]">
            <span>Atelier Bois & Création</span>
            <span>•</span>
            <span>24 Rue des Artisans, Paris 11<sup>e</sup></span>
            <span>•</span>
            <a href={BUSINESS_INFO.phoneHref} className="hover:text-[#8C6239] transition-colors underline">
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 8. WORKSHOP LOCATION PREVIEW */}
      <section id="location-preview-section" className="py-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-10 border border-[#E3DACD] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#8C6239] font-semibold">
                Venir à l’atelier
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1917]">
                Au cœur du 11<sup>e</sup> arrondissement de Paris
              </h2>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Notre atelier est implanté <strong>24 Rue des Artisans, 75011 Paris</strong>,
                dans le quartier emblématique des métiers du bois et du meuble. Pour étudier votre projet ou déposer
                des plans, contactez-nous au préalable par téléphone ou via le formulaire.
              </p>
              <div className="space-y-2 pt-2 text-sm text-[#44403C]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8C6239] shrink-0" />
                  <span>24 Rue des Artisans, 75011 Paris, France</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#8C6239] shrink-0" />
                  <a href={BUSINESS_INFO.phoneHref} className="hover:text-[#8C6239] font-medium">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3.5 px-5 rounded-xl bg-[#24211E] hover:bg-[#8C6239] text-white text-sm font-medium transition-colors text-center shadow-xs cursor-pointer"
              >
                Accéder au formulaire de contact
              </button>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="w-full py-3.5 px-5 rounded-xl bg-white hover:bg-[#F2ECE4] text-[#24211E] text-sm font-medium border border-[#DCD3C7] transition-colors text-center"
              >
                Appeler l’atelier : {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. REUSABLE PROJECT CTA */}
      <ProjectQuoteCTA onNavigate={onNavigate} />
    </div>
  );
};
