// Favicon and Apple Touch Icons
export const FAVICON_ICO = "/favicon.ico";
export const FAVICON_32x32 = "/favicon-32x32.png";
export const FAVICON_16x16 = "/favicon-16x16.png";
export const APPLE_TOUCH_ICON = "/apple-touch-icon.png";
export const MANIFEST = "/site.webmanifest";

// SEO and Accessibility
export const ROBOTS_CONTENT = "index, follow";
export const THEME_COLOR = "#ffffff";


export const NAV_MENU = [
  { label: "Accueil", url: "/" },
  { label: "À propos", url: "/apropos" },
  { label: "Services", url: "/#services" },
  { label: "Blog", url: "/blog" },
  {
    label: "Autres",
    dropdown: [
      { label: "404", url: "404" },
      { label: "Login", url: "/connexion" },
    ],
  },
];

export const CTA_BUTTON = { label: "Contactez moi", url: "/contact" };

// Dev & Mentions Légales
export const SITE_DEV = 'Zatchouli';
export const SITE_DEV_URL = 'https://zatchouli.fr';
export const SITE_DEV_EMAIL = 'contact@zatchouli.fr';
export const SITE_HOST_NAME = 'Ionos';
export const SITE_HOST_ADDRESS = "1 rue de l'hébergeur, Paris";
export const SITE_HOST_URL = 'https://ionos.fr';
export const SITE_HOST_CONTACT = '+33612345678';
export const SITE_MEDIATEUR_NAME = 'Ionos';
export const SITE_MEDIATEUR_ADRESS = '';
export const SITE_MEDIATEUR_URL = '';
export const SITE_MEDIATEUR_CONTACT = '+33612345678';

// QUI ÊTES-VOUS ?

export const DEFAULT_TITLE = "Mon Site Incroyable";
export const DEFAULT_DESCRIPTION = "Bienvenue sur mon site incroyable utilisant Astro.";
export const DEFAULT_KEYWORDS = "astro, cms, site web, gratuit, performant";
export const DEFAULT_AUTHOR = "Auteur de la Publication";
export const DEFAULT_ADDRESS = '1 rue de la lune, 74000 Annecy';
export const DEFAULT_EMAIL = 'contact@zatchouli.fr';
export const DEFAULT_PHONE = '+33612345678';
export const GOOGLE_MAPS = 'https://goo.gl/maps/annecy';
export const IMAGE_MAPS = '../src/assets/images/map.jpg';

// Header

// PARAMÈTRES
export const DEFAULT_LANG = "fr"; // Default language
export const DEFAULT_FAVICON = '../public/img/favicon.ico';
export const SITE_URL = '/';
export const DEFAULT_OG_IMAGE = "/images/default-og-image.jpg";
export const DEFAULT_CANONICAL_URL = ""; // This will be set to the current page's URL
export const DEFAULT_PREFETCH_URLS = ["/images/common-image1.jpg", "/images/common-image2.jpg"];
export const DEFAULT_CSS_FILES = ["/styles/global.css"];
export const DEFAULT_JS_FILES = ["/scripts/main.js"];
export const LOGO_URL = "../src/assets/images/logo.png";
export const LOGO_ALT = "logo";
export const LOGO_WIDTH = 210;
export const LOGO_HEIGHT = 29;

// POURQUOI NOUS CHOISIR ?
export const whyChooseUs = {
  subtitle: "Nos Avantages",
  title: "Pourquoi nous choisir pour la création de votre site Internet",
  description: "Nous nous engageons à créer des sites web qui non seulement attirent des visiteurs mais aussi génèrent des conversions. Notre expertise en design, développement et SEO garantit un site performant et visible sur les moteurs de recherche.",
  button_link: "/apropos",
  button_text: "En savoir plus",
  button_aria_label: "En savoir plus sur nous",
  images: [
    {
      src: "../src/assets/images/web-design1.webp",
      alt: "Équipe travaillant sur un design web"
    },
    {
      src: "../src/assets/images/web-design2.webp",
      alt: "Développeur codant un site Internet"
    },
    {
      src: "../src/assets/images/web-design3.webp",
      alt: "Analyse de performance SEO"
    },
    {
      src: "../src/assets/images/web-design4.webp",
      alt: "Réunion d'équipe pour planifier un projet"
    },
  ],
  reasons: [
    {
      icon: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/squares.svg",
      title: "Équipe expérimentée et qualifiée",
      text: "Notre équipe est composée de développeurs, designers et experts SEO ayant plus de 15 ans d'expérience dans la création de sites web performants."
    },
    {
      icon: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/squares.svg",
      title: "Plans de site personnalisés",
      text: "Nous créons des plans de site personnalisés pour chaque client afin d'assurer une navigation intuitive et une expérience utilisateur optimale."
    },
    {
      icon: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/squares.svg",
      title: "Optimisation SEO avancée",
      text: "Nos sites sont optimisés pour le référencement afin d'améliorer leur visibilité sur les moteurs de recherche et d'attirer un trafic qualifié."
    },
  ]
};

// STATISTIQUES
export const stats = [
  {
    icon: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/group-gold.svg',
    number: '+15',
    desc: "années d'expérience",
  },
  {
    icon: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/group-gold.svg',
    number: '+300',
    desc: "sites créés",
  },
  {
    icon: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/group-gold.svg',
    number: '+500',
    desc: "clients satisfaits",
  },
  {
    icon: 'https://csimg.nyc3.digitaloceanspaces.com/Stats/group-gold.svg',
    number: '98%',
    desc: "taux de satisfaction",
  },

];

// VOTRE PARCOURS
export const timeline = {
  topper: "Mon CV",
  title: "Parcours de Succès",
  description: "Découvrez notre parcours et notre expertise dans la création de sites Internet performants et optimisés pour le référencement.",
  images: [
    {
      src: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/cert1.png",
      alt: "Certification en Développement Web"
    },
    {
      src: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/cert2.png",
      alt: "Certification en Référencement SEO"
    },
    {
      src: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/cert3.png",
      alt: "Certification en Design UX/UI"
    },
  ],
  events: [
    {
      date: "Juillet 2018",
      title: "Certification en Développement Web",
      text: "École Supérieure du Développement Web"
    },
    {
      date: "Août 2018",
      title: "Master en Référencement SEO",
      text: "Université des Talents Numériques"
    },
    {
      date: "Septembre 2018",
      title: "Formation Avancée en Design UX/UI",
      text: "Institut de Design et Technologie"
    },
    {
      date: "Octobre 2018",
      title: "Atelier sur l'Optimisation SEO",
      text: "Centre de Développement Digital"
    }
  ]
};

// COMMENT NOUS CONTACTER ?
export const SITE_TWITTER = '@zatchouli';
export const SITE_FB = 'zatchouli';
export const SITE_INSTA = 'zatchouli';
export const SITE_YOUTUBE = 'zatchouli';


// NAVIGATION
export const NAV_LINKS = [
  {
    name: 'Accueil',
    url: '/',
  },
  {
    name: 'À propos',
    url: '/apropos',
  },
  {
    name: 'Services',
    url: '/services',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
];

// NAVIGATION SECONDAIRE
export const NAV_LINKS_SECONDARY = [
  {
    name: 'Mentions Légales',
    url: '/mentions-legales',
  },
  {
    name: 'Politique de confidentialité',
    url: '/mentions-legales/#politique-confidentialite',
  },
  {
    name: 'Conditions Générales de Vente',
    url: '/mentions-legales/#cgv',
  },
  {
    name: 'Plan du site',
    url: '/plan-du-site',
  },
];

// PIED DE PAGE
export const FOOTER_TEXT = 'Fait avec ❤️ par';

// RÉSEAUX SOCIAUX
export const SOCIAL_MEDIA = [
  {
    name: 'instagram',
    iconClass: 'icon instagram',
    url: 'https://instagram.com/zatchouli',
    img: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram.svg',
  },
  {
    name: 'linkedin',
    iconClass: 'icon linkedin',
    url: 'https://linkedin.com/zatchouli',
    img: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/linkedin.svg',
  },
  {
    name: 'twitter',
    iconClass: 'icon twitter',
    url: 'https://twitter.com/zatchouli',
    img: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-white.svg',
  },
  {
    name: 'youtube',
    iconClass: 'icon youtube',
    url: 'https://youtube.com/zatchouli',
    img: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube.svg',
  },
  {
    name: 'facebook',
    iconClass: 'icon facebook',
    url: 'https://facebook.com/zatchouli',
    img: 'https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/facebook-white.svg',
  },
];

// ARTICLES
export const POSTS_PER_PAGE = 5;

// SERVICES PAR DÉFAUT
export const defaultService = {
  title: "Création de Site Internet Personnalisé",
  description: "Nous concevons des sites web sur mesure qui répondent aux besoins spécifiques de chaque client, tout en étant optimisés pour le référencement.",
  tags: "Création de site, SEO, Développement web",
  image: "default-image.webp",
  serviceType: "Développement Web",
  provider: {
    type: "LocalBusiness",
    name: "Zatchouli Web Agency",
  },
  hasOfferCatalog: [
    {
      type: "OfferCatalog",
      name: "Services de Création de Sites",
      itemListElement: [
        {
          type: "Offer",
          itemOffered: {
            type: "Service",
            name: "Développement de sites vitrine",
          },
        },
        {
          type: "Offer",
          itemOffered: {
            type: "Service",
            name: "Création de sites e-commerce",
          },
        },
        {
          type: "Offer",
          itemOffered: {
            type: "Service",
            name: "Refonte de sites existants",
          },
        },
      ],
    },
  ],
  areaServed: {
    type: "State",
    name: "Haute-Savoie",
  },
  atoutsservices: [
    {
      title: "Développement sur mesure",
      text: "Chaque site est conçu spécifiquement pour répondre aux besoins uniques de votre entreprise.",
      icon: "custom-development.svg",
    },
    {
      title: "Optimisation SEO",
      text: "Nos sites sont optimisés pour le référencement afin d'améliorer leur visibilité sur les moteurs de recherche.",
      icon: "seo-optimization.svg",
    },
    {
      title: "Design Responsive",
      text: "Nos designs sont responsives, assurant une expérience utilisateur optimale sur tous les appareils.",
      icon: "responsive-design.svg",
    },
  ],
};

// ÉTAPES DU SERVICE PAR DÉFAUT
export const StepService = {
  title: "Notre Processus de A à Z",
  description: "Nous suivons un processus méthodique pour garantir la réussite de votre projet web, de l'analyse initiale à la mise en ligne.",
  buttonText: "En savoir plus",
  steps: [
    {
      number: "01",
      text: "<strong>Analyse des besoins</strong> : Nous discutons de vos objectifs et analysons vos besoins pour définir une stratégie claire."
    },
    {
      number: "02",
      text: "<strong>Conception du site</strong> : Nous créons des maquettes et des prototypes pour visualiser votre futur site."
    },
    {
      number: "03",
      text: "<strong>Développement et intégration</strong> : Nous développons et intégrons votre site en utilisant les technologies les plus récentes."
    },
    {
      number: "04",
      text: "<strong>Optimisation SEO</strong> : Nous optimisons votre site pour les moteurs de recherche afin d'assurer une visibilité maximale."
    },
  ]
};