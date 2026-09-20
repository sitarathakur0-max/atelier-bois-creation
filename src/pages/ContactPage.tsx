import React, { useState } from 'react';
import { Phone, MapPin, CheckCircle2, AlertCircle, Send, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import { ContactFormData } from '../types';

interface ContactPageProps {
  initialProjectType?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialProjectType = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: initialProjectType || 'table',
    description: '',
    estimatedBudget: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Veuillez indiquer votre nom et prénom.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez renseigner votre adresse e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Veuillez entrer une adresse e-mail valide.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Veuillez renseigner votre numéro de téléphone.';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      newErrors.phone = 'Veuillez entrer un numéro de téléphone valide.';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Veuillez décrire brièvement votre projet (type de meuble, dimensions, essence souhaitée).';
    } else if (formData.description.trim().length < 15) {
      newErrors.description = 'Merci de préciser votre besoin en au moins 15 caractères.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Client-side simulation of cleanly structured inquiry
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: 'table',
      description: '',
      estimatedBudget: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="py-14 md:py-20 bg-[#F4EEE5] border-b border-[#E8E1D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#8C6239] font-semibold">
              Prendre Contact
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#1C1917] mt-2 leading-tight">
              Parlez-nous de votre projet de mobilier en bois.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#57534E] leading-relaxed">
              Nous étudions chaque demande avec une attention particulière. Remplissez le formulaire ci-dessous
              ou contactez directement l’atelier par téléphone au {BUSINESS_INFO.phone}.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Workshop Info Grid */}
      <section className="py-16 md:py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Info & Address presentation */}
            <div className="lg:col-span-5 space-y-8">
              {/* Exact Business Card */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E3DACD] shadow-xs space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8C6239] font-semibold">
                    Coordonnées de l'atelier
                  </span>
                  <h2 className="font-serif text-2xl font-semibold text-[#1C1917] mt-1">
                    {BUSINESS_INFO.name}
                  </h2>
                  <p className="text-xs text-[#78716C] mt-0.5">
                    {BUSINESS_INFO.categoryFr}
                  </p>
                </div>

                <div className="space-y-4 pt-2 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3 text-[#24211E]">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] border border-[#E3DACD] flex items-center justify-center text-[#8C6239] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#78716C] font-semibold">Adresse</div>
                      <div className="font-medium text-[#1C1917] mt-0.5">{BUSINESS_INFO.address}</div>
                      <div className="text-xs text-[#78716C] mt-1">11<sup>e</sup> arrondissement de Paris</div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 text-[#24211E]">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] border border-[#E3DACD] flex items-center justify-center text-[#8C6239] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#78716C] font-semibold">Téléphone</div>
                      <a
                        href={BUSINESS_INFO.phoneHref}
                        className="font-medium text-[#1C1917] hover:text-[#8C6239] transition-colors text-base block mt-0.5 underline underline-offset-4"
                        title={`Appeler le ${BUSINESS_INFO.phone}`}
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                      <div className="text-xs text-[#78716C] mt-1">Joignable pour tout renseignement</div>
                    </div>
                  </div>
                </div>

                {/* Metro & Access Guide */}
                <div className="pt-4 border-t border-[#F0EAE1] space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] uppercase tracking-wider">
                    <Compass className="w-4 h-4 text-[#8C6239]" />
                    <span>Accès transports & Quartier</span>
                  </div>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {BUSINESS_INFO.districtNote}
                  </p>
                  <ul className="text-xs text-[#44403C] space-y-1 pt-1">
                    {BUSINESS_INFO.metroStations.map((st, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C6239]" />
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Google Maps link */}
                <div className="pt-2">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=24+Rue+des+Artisans+75011+Paris+France"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF7F2] hover:bg-[#F2ECE4] text-[#24211E] text-xs font-semibold border border-[#DCD3C7] transition-colors"
                  >
                    <span>Ouvrir l'adresse dans Google Maps</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8C6239]" />
                  </a>
                </div>
              </div>

              {/* Trust Box */}
              <div className="p-6 rounded-2xl bg-[#EFE9E1] border border-[#DDD4C7] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6239]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confiance & Rigueur</span>
                </div>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  Toutes les informations partagées restent strictement confidentielles et servent exclusivement à l'établissement de votre devis de menuiserie sur mesure.
                </p>
              </div>
            </div>

            {/* Right: Interactive Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-7 sm:p-10 border border-[#E3DACD] shadow-xs">
                {isSubmitted ? (
                  <div className="text-center py-10 space-y-5 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-[#EAE2D7] text-[#8C6239] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-3xl font-semibold text-[#1C1917]">
                      Votre demande a bien été préparée !
                    </h3>
                    <p className="text-sm sm:text-base text-[#57534E] max-w-lg mx-auto leading-relaxed">
                      Merci <strong>{formData.fullName}</strong>. Votre projet concernant « {formData.projectType} »
                      a été enregistré. L’atelier reviendra vers vous à l’adresse{' '}
                      <strong>{formData.email}</strong> ou par téléphone au <strong>{formData.phone}</strong>.
                    </p>
                    <div className="pt-4 flex justify-center gap-3">
                      <button
                        onClick={resetForm}
                        className="px-6 py-2.5 rounded-xl bg-[#24211E] text-white text-sm font-medium hover:bg-[#8C6239] transition-colors cursor-pointer"
                      >
                        Soumettre une autre demande
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1917]">
                        Demande de devis & étude de projet
                      </h2>
                      <p className="mt-1 text-xs sm:text-sm text-[#78716C]">
                        Renseignez vos coordonnées et décrivez votre projet pour recevoir un retour adapté.
                      </p>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-semibold text-[#1C1917] mb-1.5">
                          Nom & prénom *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Ex. Claire Delorme"
                          className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FAF7F2] focus:bg-white transition-colors ${
                            errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-[#DDD4C7] focus:border-[#8C6239]'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-[#1C1917] mb-1.5">
                          Adresse e-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="votre.email@exemple.fr"
                          className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FAF7F2] focus:bg-white transition-colors ${
                            errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#DDD4C7] focus:border-[#8C6239]'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Project Type Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-[#1C1917] mb-1.5">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Ex. 06 12 34 56 78"
                          className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FAF7F2] focus:bg-white transition-colors ${
                            errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-[#DDD4C7] focus:border-[#8C6239]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="projectType" className="block text-xs uppercase tracking-wider font-semibold text-[#1C1917] mb-1.5">
                          Type d'ouvrage souhaité *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#DDD4C7] text-sm bg-[#FAF7F2] focus:bg-white focus:border-[#8C6239] transition-colors cursor-pointer"
                        >
                          <option value="table">Table sur mesure (repas, basse, console)</option>
                          <option value="shelving">Étagère ou bibliothèque d'alcôve</option>
                          <option value="furniture">Mobilier sur mesure (enfilade, buffet, bureau)</option>
                          <option value="interiors">Pièce d’agencement intérieur (claustra, tête de lit)</option>
                          <option value="autre">Autre création spécifique en bois</option>
                        </select>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label htmlFor="description" className="block text-xs uppercase tracking-wider font-semibold text-[#1C1917] mb-1.5">
                        Description du projet & Dimensions approximatives *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Précisez votre souhait : dimensions estimées, essence de bois envisagée (chêne, noyer...), lieu d’installation à Paris ou IDF..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#FAF7F2] focus:bg-white transition-colors ${
                          errors.description ? 'border-red-500 ring-1 ring-red-500' : 'border-[#DDD4C7] focus:border-[#8C6239]'
                        }`}
                      />
                      {errors.description && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.description}
                        </p>
                      )}
                    </div>

                    {/* Optional Budget */}
                    <div>
                      <label htmlFor="estimatedBudget" className="block text-xs uppercase tracking-wider font-semibold text-[#1C1917] mb-1.5">
                        Budget indicatif envisagé (optionnel)
                      </label>
                      <input
                        type="text"
                        id="estimatedBudget"
                        name="estimatedBudget"
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        placeholder="Ex. 1 500 € - 3 000 € ou À définir selon étude"
                        className="w-full px-4 py-3 rounded-xl border border-[#DDD4C7] text-sm bg-[#FAF7F2] focus:bg-white focus:border-[#8C6239] transition-colors"
                      />
                      <p className="text-[11px] text-[#78716C] mt-1">
                        Cette indication nous aide à orienter directement le choix de l’essence et des finitions.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#24211E] hover:bg-[#8C6239] text-white font-semibold text-sm transition-colors shadow-md disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <span>Transmission en cours...</span>
                        ) : (
                          <>
                            <span>Envoyer la demande de devis</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
