import { ServiceItem, PortfolioCreation, FaqItem } from '../types';

// Images generated specifically for Atelier Bois & Création
import heroImage from '../assets/images/atelier_hero_1789816577859.jpg';
import tableImage from '../assets/images/table_artisan_1789816593939.jpg';
import shelvingImage from '../assets/images/etagere_bois_1789816612462.jpg';
import furnitureImage from '../assets/images/mobilier_artisan_1789816626237.jpg';
import craftImage from '../assets/images/atelier_details_1789816646430.jpg';

export const BUSINESS_INFO = {
  name: 'Atelier Bois & Création',
  tagline: 'Le bois, façonné pour votre intérieur.',
  category: 'Artisan Woodworking & Furniture',
  categoryFr: 'Artisanat du bois & Mobilier sur mesure',
  address: '24 Rue des Artisans, 75011 Paris, France',
  addressStreet: '24 Rue des Artisans',
  addressCity: '75011 Paris, France',
  metroStations: ['Ledru-Rollin (Ligne 8)', 'Faidherbe - Chaligny (Ligne 8)', 'Charonne (Ligne 9)'],
  districtNote: 'Situé au cœur du faubourg Saint-Antoine, quartier historique de l’artisanat d’art et du travail du bois parisien.',
  phone: '+33 1 84 80 21 45',
  phoneHref: 'tel:+33184802145',
  rating: 4.9,
  maxRating: 5,
  reviewCount: 27,
  shortDescription: 'Petit atelier artisanal créant du mobilier en bois sur mesure, des étagères, des tables et des pièces d’agencement intérieur uniques à Paris.',
  fullDescription: 'Atelier Bois & Création est un atelier d’artisanat d’art niché dans le 11e arrondissement de Paris. Nous concevons et façonnons des pièces de mobilier uniques et des aménagements intérieurs en bois massif et placages d’essences sélectionnées avec rigueur. Chaque réalisation est pensée pour s’intégrer avec harmonie et précision à votre espace de vie.',
  images: {
    hero: heroImage,
    table: tableImage,
    shelving: shelvingImage,
    furniture: furnitureImage,
    craft: craftImage,
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'tables-sur-mesure',
    title: 'Tables sur mesure',
    category: 'tables',
    shortDesc: 'Tables de repas, tables basses et consoles façonnées dans des plateaux de bois massifs aux finitions soignées.',
    fullDesc: 'Chaque table est conçue selon vos proportions idéales, le rythme de votre pièce et vos habitudes de réception. Nous travaillons des essences nobles comme le chêne de pays ou le noyer, assemblées traditionnellement pour allier solidité et pureté des lignes.',
    image: tableImage,
    aspects: [
      'Dimensions et géométrie adaptées à votre pièce',
      'Sélection de plateaux en chêne, noyer ou frêne',
      'Assemblages traditionnels à tenons et mortaises',
      'Finitions huilées ou vernies naturelles et durables'
    ]
  },
  {
    id: 'etageres-sur-mesure',
    title: 'Étagères & bibliothèques sur mesure',
    category: 'shelving',
    shortDesc: 'Bibliothèques murales, étagères d’alcôves et systèmes de rangement intégrés aux particularités de vos murs.',
    fullDesc: 'Pensées pour valoriser les volumes de votre intérieur parisien (niches, hauteurs sous plafond, passages), nos étagères associent la chaleur du bois naturel à une structure calculée pour supporter le poids de vos livres et objets avec élégance.',
    image: shelvingImage,
    aspects: [
      'Intégration millimétrée dans les alcôves et renfoncements',
      'Structures rigides à fleur de mur ou autoportantes',
      'Rythme des casiers sur mesure selon vos collections',
      'Chants travaillés et ferrures discrètes'
    ]
  },
  {
    id: 'mobilier-en-bois',
    title: 'Mobilier en bois sur mesure',
    category: 'furniture',
    shortDesc: 'Enfilades, buffets, bureaux et meubles d’appoint créés pièce par pièce pour répondre à un besoin précis.',
    fullDesc: 'L’artisanat du bois permet de s’affranchir des formats standards. Que vous recherchiez une enfilade aux proportions spécifiques ou un bureau ergonomique et épuré, nous réalisons chaque pièce avec un soin constant des détails et de la texture.',
    image: furnitureImage,
    aspects: [
      'Conception personnalisée d’après vos usages quotidiens',
      'Tiroirs assemblés à queues d’aronde',
      'Portes coulissantes ou battantes à ajustement soigné',
      'Texture bois naturelle préservée au toucher'
    ]
  },
  {
    id: 'agencements-interieurs',
    title: 'Pièces d’agencement intérieur',
    category: 'interiors',
    shortDesc: 'Habillages muraux, têtes de lit intégrées, claustras ajourés et éléments boisés structurant l’espace.',
    fullDesc: 'Le bois apporte chaleur visuelle et confort acoustique aux espaces contemporains. Nous façonnons des séparations légères, des habillages muraux subtilement cannelés ou des têtes de lit sur mesure qui donnent du caractère à votre intérieur.',
    image: craftImage,
    aspects: [
      'Claustras en tasseaux de bois massif ajourés',
      'Habillages muraux et têtes de lit avec rangements discrets',
      'Continuité des veinages et des teintes',
      'Installation adaptée aux spécificités des bâtis parisiens'
    ]
  }
];

export const PORTFOLIO_DATA: PortfolioCreation[] = [
  {
    id: 'table-chene-massif',
    title: 'Table de repas en chêne massif de pays',
    category: 'tables',
    categoryLabel: 'Tables',
    material: 'Chêne français massif, finition huile mate écologique',
    dimensionsNote: 'Format 240 × 95 cm, piètement fuselé',
    description: 'Une table généreuse conçue pour un appartement parisien aux parquets anciens. Les arêtes sont légèrement adoucies à la main et les veinages soigneusement appairés au centre du plateau.',
    image: tableImage,
    features: ['Assemblage traditionnel', 'Finition huilée résistante', 'Veinage sélectionné']
  },
  {
    id: 'bibliotheque-niche',
    title: 'Bibliothèque d’alcôve sur mesure',
    category: 'shelving',
    categoryLabel: 'Étagères',
    material: 'Chêne naturel et noyer, fond en placage fin',
    dimensionsNote: 'Hauteur 280 cm, intégration sous corniche',
    description: 'Structure conçue sur mesure pour épouser une niche asymétrique. Les étagères alternent hauteurs de romans et formats d’art pour un rythme aéré et harmonieux.',
    image: shelvingImage,
    features: ['Ajustement millimétré', 'Fixation invisible', 'Portée renforcée']
  },
  {
    id: 'enfilade-noyer-lignes',
    title: 'Enfilade basse en noyer et lignes épurées',
    category: 'furniture',
    categoryLabel: 'Mobilier sur mesure',
    material: 'Noyer sélectionné, poignées prises de main sculptées',
    dimensionsNote: 'Longueur 190 cm, profondeur 42 cm',
    description: 'Meuble bas d’inspiration contemporaine combinant portes coulissantes et tiroirs intérieurs à fermeture douce. Le veinage du bois court en continu sur toute la façade.',
    image: furnitureImage,
    features: ['Veinage filant en façade', 'Tiroirs queues d’aronde', 'Passe-câbles intégré discret']
  },
  {
    id: 'claustra-panneau-bois',
    title: 'Agencement mural & claustra ajouré',
    category: 'interiors',
    categoryLabel: 'Agencements intérieurs',
    material: 'Chêne clair et détails de quincaillerie affleurante',
    dimensionsNote: 'Réalisation sur mesure du sol au plafond',
    description: 'Séparation de pièce tout en légèreté permettant de filtrer la lumière naturelle entre l’entrée et la pièce de réception, accompagnée d’un plateau vide-poche suspendu.',
    image: craftImage,
    features: ['Lumière traversante', 'Lignes architecturales', 'Stabilité mécanique optimale']
  },
  {
    id: 'table-basse-organique',
    title: 'Table basse contemporaine aux chants biseautés',
    category: 'tables',
    categoryLabel: 'Tables',
    material: 'Chêne massif sélectionné',
    dimensionsNote: 'Format 110 × 65 cm, hauteur 38 cm',
    description: 'Pièce centrale de salon associant des angles arrondis et un chant biseauté vers l’intérieur qui allège la silhouette tout en magnifiant le fil du bois.',
    image: tableImage,
    features: ['Chant biseauté à la main', 'Toucher soyeux', 'Solidité durable']
  },
  {
    id: 'etageres-murales-fines',
    title: 'Système d’étagères linéaires suspendues',
    category: 'shelving',
    categoryLabel: 'Étagères',
    material: 'Frêne et chêne de pays',
    dimensionsNote: 'Composition modulée sur 3 niveaux',
    description: 'Étagères suspendues créées pour optimiser un espace de travail ou de lecture, laissant respirer le mur tout en offrant une excellente rigidité.',
    image: shelvingImage,
    features: ['Fixations invisibles', 'Profil affiné', 'Finition incolore protectrice']
  }
];

export const WORKSHOP_PROCESS_STEPS = [
  {
    number: '01',
    title: 'Échange & Définition du besoin',
    description: 'Vous nous partagez vos envies, les dimensions approximatives et l’esprit de votre intérieur. Nous vérifions la faisabilité et ciblons l’essence de bois la plus appropriée.'
  },
  {
    number: '02',
    title: 'Conception & Choix des bois',
    description: 'Nous établissons une proposition claire avec le plan côté. Nous sélectionnons des plateaux et pièces de bois pour l’harmonie de leur fil et de leur teinte.'
  },
  {
    number: '03',
    title: 'Façonnage artisanal en atelier',
    description: 'Au 24 Rue des Artisans à Paris, chaque pièce est débitée, corroyée, usinée et assemblée à la main avec une exigence stricte de précision.'
  },
  {
    number: '04',
    title: 'Finitions naturelles & Ajustement',
    description: 'Application de protections durables (huiles végétales ou vernis mats) qui subliment le toucher naturel du bois, puis livraison et mise en place soignée.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'types-meubles',
    question: 'Quels types de meubles réalisez-vous ?',
    answer: 'Nous réalisons principalement du mobilier en bois sur mesure : des tables de repas et tables basses, des étagères et bibliothèques d’alcôve, des enfilades, des bureaux, ainsi que des pièces d’agencement intérieur conçues pour s’intégrer harmonieusement à votre habitat.'
  },
  {
    id: 'sur-mesure',
    question: 'Proposez-vous des créations sur mesure ?',
    answer: 'Oui, l’intégralité de nos réalisations est confectionnée sur mesure. Chaque pièce est pensée et dimensionnée pour répondre précisément à vos besoins fonctionnels et aux particularités spatiales de votre intérieur.'
  },
  {
    id: 'presenter-projet',
    question: 'Comment présenter mon projet ?',
    answer: 'Vous pouvez nous contacter par téléphone au +33 1 84 80 21 45 ou via notre formulaire de contact en décrivant votre idée : le type de meuble souhaité, les dimensions envisagées, quelques photos de l’emplacement si vous en avez, et vos préférences de bois.'
  },
  {
    id: 'amenagements',
    question: 'Quels types d’aménagements pouvez-vous réaliser ?',
    answer: 'Nous concevons des agencements intérieurs en bois tels que des bibliothèques murales ajustées, des claustras en tasseaux ajourés, des têtes de lit sur mesure et des meubles de rangement parfaitement adaptés aux niches ou recoins de votre intérieur.'
  },
  {
    id: 'demander-devis',
    question: 'Comment demander un devis ?',
    answer: 'Pour demander une étude et un devis personnalisé, transmettez-nous simplement les détails de votre projet via notre formulaire de contact ou appelez directement l’atelier au +33 1 84 80 21 45. Nous échangeons sur votre projet pour établir une proposition adaptée.'
  },
  {
    id: 'ou-se-trouve-atelier',
    question: 'Où se trouve l’atelier ?',
    answer: 'L’Atelier Bois & Création est situé au 24 Rue des Artisans, dans le 11e arrondissement de Paris (75011), à proximité des stations de métro Ledru-Rollin et Faidherbe - Chaligny.'
  }
];

export const TRUST_FACTS = {
  rating: '4.9/5',
  reviewCount: 27,
  source: 'Avis Google vérifiés',
  highlight: 'Un savoir-faire reconnu par nos clients pour la qualité d’écoute et la précision du travail du bois.'
};
