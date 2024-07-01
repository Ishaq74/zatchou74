import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, b as addAttribute, a as renderComponent, d as createAstro, u as unescapeHTML, F as Fragment, e as renderSlot, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, i as renderHead } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                          */
/* empty css                         */
import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_BUTefziw.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$2 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "C:/Users/Utilisateur/zatchou74/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$1 = createAstro();
const $$Link1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link1;
  const { text, href, ariaLabel, style, icon, background = false, border = false, shadow = false, shape = "sharp", classes, ...rest } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")}${addAttribute(`link ${style} ${background ? "custom-background" : ""} ${border ? "border-visible" : ""} ${shadow ? "shadow" : ""} ${shape} ${classes}`, "class")}${addAttribute(background ? `background-color: ${background};` : "", "style")}${spreadAttributes(rest)} data-astro-cid-locx5scp> ${icon && icon.side === "left" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "data-astro-cid-locx5scp": true })}`} ${renderSlot($$result, $$slots["default"])} ${icon && icon.side === "right" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "data-astro-cid-locx5scp": true })}`} </a> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Elements/Link/Link1.astro", void 0);

const FAVICON_ICO = "/favicon.ico";
const FAVICON_32x32 = "/favicon-32x32.png";
const FAVICON_16x16 = "/favicon-16x16.png";
const APPLE_TOUCH_ICON = "/apple-touch-icon.png";
const MANIFEST = "/site.webmanifest";
const ROBOTS_CONTENT = "index, follow";
const THEME_COLOR = "#ffffff";
const NAV_MENU = [
  { label: "Accueil", url: "/" },
  { label: "À propos", url: "/apropos" },
  { label: "Services", url: "/#services" },
  { label: "Blog", url: "/blog" },
  {
    label: "Autres",
    dropdown: [
      { label: "404", url: "404" },
      { label: "Login", url: "/connexion" }
    ]
  }
];
const CTA_BUTTON = { label: "Contactez moi", url: "/contact" };
const SITE_DEV = "Zatchouli";
const SITE_DEV_URL = "https://zatchouli.fr";
const SITE_DEV_EMAIL = "contact@zatchouli.fr";
const SITE_HOST_NAME = "Ionos";
const SITE_HOST_ADDRESS = "1 rue de l'hébergeur, Paris";
const SITE_HOST_CONTACT = "+33612345678";
const SITE_MEDIATEUR_NAME = "Ionos";
const SITE_MEDIATEUR_ADRESS = "";
const SITE_MEDIATEUR_URL = "";
const DEFAULT_TITLE = "Mon Site Incroyable";
const DEFAULT_DESCRIPTION = "Bienvenue sur mon site incroyable utilisant Astro.";
const DEFAULT_KEYWORDS = "astro, cms, site web, gratuit, performant";
const DEFAULT_AUTHOR = "Auteur de la Publication";
const DEFAULT_ADDRESS = "1 rue de la lune, 74000 Annecy";
const DEFAULT_EMAIL = "contact@zatchouli.fr";
const DEFAULT_PHONE = "+33612345678";
const GOOGLE_MAPS = "https://goo.gl/maps/annecy";
const DEFAULT_LANG = "fr";
const SITE_URL = "/";
const DEFAULT_OG_IMAGE = "/images/default-og-image.jpg";
const DEFAULT_PREFETCH_URLS = ["/images/common-image1.jpg", "/images/common-image2.jpg"];
const DEFAULT_CSS_FILES = ["/styles/global.css"];
const DEFAULT_JS_FILES = ["/scripts/main.js"];
const LOGO_URL = "../src/assets/images/logo.png";
const LOGO_ALT = "logo";
const whyChooseUs = {
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
    }
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
    }
  ]
};
const stats = [
  {
    icon: "https://csimg.nyc3.digitaloceanspaces.com/Stats/group-gold.svg",
    number: "+15",
    desc: "années d'expérience"
  },
  {
    icon: "https://csimg.nyc3.digitaloceanspaces.com/Stats/group-gold.svg",
    number: "+300",
    desc: "sites créés"
  },
  {
    icon: "https://csimg.nyc3.digitaloceanspaces.com/Stats/group-gold.svg",
    number: "+500",
    desc: "clients satisfaits"
  },
  {
    icon: "https://csimg.nyc3.digitaloceanspaces.com/Stats/group-gold.svg",
    number: "98%",
    desc: "taux de satisfaction"
  }
];
const timeline = {
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
    }
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
const NAV_LINKS = [
  {
    name: "Accueil",
    url: "/"
  },
  {
    name: "À propos",
    url: "/apropos"
  },
  {
    name: "Services",
    url: "/services"
  },
  {
    name: "Blog",
    url: "/blog"
  },
  {
    name: "Contact",
    url: "/contact"
  }
];
const NAV_LINKS_SECONDARY = [
  {
    name: "Mentions Légales",
    url: "/mentions-legales"
  },
  {
    name: "Politique de confidentialité",
    url: "/mentions-legales/#politique-confidentialite"
  },
  {
    name: "Conditions Générales de Vente",
    url: "/mentions-legales/#cgv"
  },
  {
    name: "Plan du site",
    url: "/plan-du-site"
  }
];
const FOOTER_TEXT = "Fait avec ❤️ par";
const SOCIAL_MEDIA = [
  {
    name: "instagram",
    iconClass: "icon instagram",
    url: "https://instagram.com/zatchouli",
    img: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/instagram.svg"
  },
  {
    name: "linkedin",
    iconClass: "icon linkedin",
    url: "https://linkedin.com/zatchouli",
    img: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/linkedin.svg"
  },
  {
    name: "twitter",
    iconClass: "icon twitter",
    url: "https://twitter.com/zatchouli",
    img: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-white.svg"
  },
  {
    name: "youtube",
    iconClass: "icon youtube",
    url: "https://youtube.com/zatchouli",
    img: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/youtube.svg"
  },
  {
    name: "facebook",
    iconClass: "icon facebook",
    url: "https://facebook.com/zatchouli",
    img: "https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/facebook-white.svg"
  }
];
const StepService = {
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
    }
  ]
};

const $$SocialList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<li class="cs-social-group" data-astro-cid-2gzzo37m> <div class="cs-social" data-astro-cid-2gzzo37m> ${SOCIAL_MEDIA.map((social) => renderTemplate`<a class="cs-social-link"${addAttribute(`visit ${social.name} profile`, "aria-label")}${addAttribute(social.url, "href")} data-astro-cid-2gzzo37m> ${renderComponent($$result, "Icon", $$Icon, { "name": `mdi:${social.name}`, "class": "icon-social", "data-astro-cid-2gzzo37m": true })} </a>`)} </div> </li> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Socials/SocialList.astro", void 0);

const $$Footer1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer id="cs-footer-308" data-astro-cid-grvbgruz> <div class="cs-container" data-astro-cid-grvbgruz> <!-- Logo Group --> <div class="cs-logo-group" data-astro-cid-grvbgruz> <a aria-label="Revenir à l'accueil" class="cs-logo" href="/" data-astro-cid-grvbgruz> <img class="cs-logo-img"${addAttribute(LOGO_URL, "src")}${addAttribute(LOGO_ALT, "alt")}${addAttribute(178, "width")}${addAttribute(32, "height")} loading="eager" decoding="async" data-astro-cid-grvbgruz> </a> <p class="cs-text" data-astro-cid-grvbgruz> ${DEFAULT_DESCRIPTION} </p> </div> <!-- Links --> <ul class="cs-nav" data-astro-cid-grvbgruz> <li class="cs-nav-li" data-astro-cid-grvbgruz> <span class="cs-header" data-astro-cid-grvbgruz>Plan du Site</span> </li> ${NAV_LINKS.map((link) => renderTemplate`<li class="cs-nav-li" data-astro-cid-grvbgruz> <a class="cs-nav-link"${addAttribute(link.url, "href")} data-astro-cid-grvbgruz>${link.name}</a> </li>`)} </ul> <ul class="cs-nav" data-astro-cid-grvbgruz> <li class="cs-nav-li" data-astro-cid-grvbgruz> <span class="cs-header" data-astro-cid-grvbgruz>Mentions Légales</span> </li> ${NAV_LINKS_SECONDARY.map((link) => renderTemplate`<li class="cs-nav-li" data-astro-cid-grvbgruz> <a class="cs-nav-link"${addAttribute(link.url, "href")} data-astro-cid-grvbgruz>${link.name}</a> </li>`)} </ul> <!-- Contact Info --> <ul class="cs-nav" data-astro-cid-grvbgruz> <li class="cs-nav-li" data-astro-cid-grvbgruz> <span class="cs-header" data-astro-cid-grvbgruz>Contact</span> </li> <li class="cs-nav-li" data-astro-cid-grvbgruz> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:mailbox-up", "width": 24, "height": 24, "class": "cs-icon", "color": "var(--bodyTextColorWhite)", "data-astro-cid-grvbgruz": true })} <a class="cs-nav-link cs-phone"${addAttribute(`tel:${DEFAULT_PHONE}`, "href")} data-astro-cid-grvbgruz>${DEFAULT_PHONE}</a> </li> <li class="cs-nav-li" data-astro-cid-grvbgruz> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:phone-classic", "width": 24, "height": 24, "class": "cs-icon", "color": "var(--bodyTextColorWhite)", "data-astro-cid-grvbgruz": true })} <a class="cs-nav-link cs-email"${addAttribute(`mailto:${DEFAULT_EMAIL}`, "href")} data-astro-cid-grvbgruz>${DEFAULT_EMAIL}</a> </li> <li class="cs-nav-li" data-astro-cid-grvbgruz> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:map-marker-radius", "width": 24, "height": 24, "class": "cs-icon", "color": "var(--bodyTextColorWhite)", "data-astro-cid-grvbgruz": true })} <a class="cs-nav-link cs-address"${addAttribute(GOOGLE_MAPS, "href")} target="_blank" rel="noopener" data-astro-cid-grvbgruz> ${DEFAULT_ADDRESS} </a> </li> ${renderComponent($$result, "SocialList", $$SocialList, { "data-astro-cid-grvbgruz": true })} </ul> </div> <div class="cs-bottom" data-astro-cid-grvbgruz> <span class="cs-copyright" data-astro-cid-grvbgruz>${FOOTER_TEXT} <a class="cs-copyright-link"${addAttribute(SITE_DEV_URL, "href")} data-astro-cid-grvbgruz>${SITE_DEV}</a></span> </div> </footer> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Footer/Footer1.astro", void 0);

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/commentaires/Comment1.md": () => import('./Comment1_CC_x0PwD.mjs'),"/src/content/commentaires/Comment2.md": () => import('./Comment2_WvZTDkT6.mjs'),"/src/content/commentaires/Comment3.md": () => import('./Comment3_B4f2NzIl.mjs'),"/src/content/posts/post-1.md": () => import('./post-1_CkaLI847.mjs'),"/src/content/posts/post-2.md": () => import('./post-2_UgsTHmnL.mjs'),"/src/content/posts/post3.md": () => import('./post3_CiBA5nKL.mjs'),"/src/content/service/service-1.md": () => import('./service-1_BItDIeVY.mjs'),"/src/content/services/service-1.md": () => import('./service-1_DTRtCk4W.mjs'),"/src/content/services/service-2.md": () => import('./service-2_BMZt2uWQ.mjs'),"/src/content/team/author-1.md": () => import('./author-1_DefI3zUi.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"commentaires":{"type":"content","entries":{"comment1":"/src/content/commentaires/Comment1.md","comment2":"/src/content/commentaires/Comment2.md","comment3":"/src/content/commentaires/Comment3.md"}},"posts":{"type":"content","entries":{"post-1":"/src/content/posts/post-1.md","post-2":"/src/content/posts/post-2.md","post3":"/src/content/posts/post3.md"}},"service":{"type":"content","entries":{"service-1":"/src/content/service/service-1.md"}},"services":{"type":"content","entries":{"service-1":"/src/content/services/service-1.md","service-2":"/src/content/services/service-2.md"}},"team":{"type":"content","entries":{"author-1":"/src/content/team/author-1.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/commentaires/Comment1.md": () => import('./Comment1_BQQEPSBA.mjs'),"/src/content/commentaires/Comment2.md": () => import('./Comment2_Cm1hG7XX.mjs'),"/src/content/commentaires/Comment3.md": () => import('./Comment3_CM0-9zm8.mjs'),"/src/content/posts/post-1.md": () => import('./post-1_-Dz0JTEP.mjs'),"/src/content/posts/post-2.md": () => import('./post-2_BEiBVa7e.mjs'),"/src/content/posts/post3.md": () => import('./post3_DXdFk408.mjs'),"/src/content/service/service-1.md": () => import('./service-1_cbjNVQ25.mjs'),"/src/content/services/service-1.md": () => import('./service-1_DRTnJcWj.mjs'),"/src/content/services/service-2.md": () => import('./service-2_DLMobqvH.mjs'),"/src/content/team/author-1.md": () => import('./author-1_B7tNPe5s.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Header1 = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  const tagsSet = /* @__PURE__ */ new Set();
  posts.forEach((post) => {
    const tag = post.data.tags;
    if (tag) {
      tagsSet.add(tag);
    }
  });
  const uniqueTags = Array.from(tagsSet);
  const updatedNavMenu = NAV_MENU.map((item) => {
    if (item.label === "Blog") {
      return {
        ...item,
        dropdown: item.dropdown ? [...item.dropdown, ...uniqueTags.map((tag) => ({ label: tag, url: `/${tag}` }))] : uniqueTags.map((tag) => ({ label: tag, url: `/${tag}` }))
      };
    }
    return item;
  });
  return renderTemplate`${maybeRenderHead()}<header id="cs-navigation" data-astro-cid-wompjfus> <div class="cs-container" data-astro-cid-wompjfus> <!-- Nav Logo --> ${renderComponent($$result, "Link", $$Link1, { "href": "/", "ariaLabel": "back to home", "text": "", "style": "link", "classes": "cs-logo", "data-astro-cid-wompjfus": true }, { "default": ($$result2) => renderTemplate` <img${addAttribute(LOGO_URL, "src")}${addAttribute(LOGO_ALT, "alt")} width="210" height="29" aria-hidden="true" decoding="async" data-astro-cid-wompjfus> ` })} <!-- Navigation List --> <nav class="cs-nav" role="navigation" data-astro-cid-wompjfus> <!-- Mobile Nav Toggle --> <button class="cs-toggle" aria-label="mobile menu toggle" data-astro-cid-wompjfus> <div class="cs-box" aria-hidden="true" data-astro-cid-wompjfus> <span class="cs-line cs-line1" aria-hidden="true" data-astro-cid-wompjfus></span> <span class="cs-line cs-line2" aria-hidden="true" data-astro-cid-wompjfus></span> <span class="cs-line cs-line3" aria-hidden="true" data-astro-cid-wompjfus></span> </div> </button> <div class="cs-ul-wrapper" data-astro-cid-wompjfus> <ul id="cs-expanded" class="cs-ul" aria-expanded="false" data-astro-cid-wompjfus> ${updatedNavMenu.map((item) => renderTemplate`<li class="cs-li" data-astro-cid-wompjfus> ${item.dropdown ? renderTemplate`<div class="cs-dropdown" tabindex="0" data-astro-cid-wompjfus> ${renderComponent($$result, "Link", $$Link1, { "href": item.url, "classes": "cs-li-link", "ariaLabel": item.label, "style": "link", "text": item.label, "data-astro-cid-wompjfus": true }, { "default": ($$result2) => renderTemplate`${item.label}` })} <ul class="cs-drop-ul" data-astro-cid-wompjfus> ${item.dropdown.map((subitem) => renderTemplate`<li class="cs-drop-li" data-astro-cid-wompjfus> ${renderComponent($$result, "Link", $$Link1, { "href": subitem.url, "classes": "cs-li-link cs-drop-link", "ariaLabel": subitem.label, "style": "link", "text": subitem.label, "data-astro-cid-wompjfus": true }, { "default": ($$result2) => renderTemplate`${subitem.label}` })} </li>`)} </ul> </div>` : renderTemplate`${renderComponent($$result, "Link", $$Link1, { "href": item.url, "classes": "cs-li-link", "ariaLabel": item.label, "style": "link", "text": item.label, "data-astro-cid-wompjfus": true }, { "default": ($$result2) => renderTemplate`${item.label}` })}`} </li>`)} ${renderComponent($$result, "Link", $$Link1, { "href": CTA_BUTTON.url, "ariaLabel": CTA_BUTTON.label, "text": CTA_BUTTON.label, "style": "button", "icon": { name: "mdi:email-fast", side: "left" }, "data-astro-cid-wompjfus": true }, { "default": ($$result2) => renderTemplate`${CTA_BUTTON.label}` })} </ul> </div> </nav> </div> </header>  `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Header/Header1.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { url } = Astro2.request;
  const {
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    keywords = DEFAULT_KEYWORDS,
    author = DEFAULT_AUTHOR,
    ogImage = DEFAULT_OG_IMAGE,
    canonicalUrl = url,
    prefetchUrls = DEFAULT_PREFETCH_URLS,
    cssFiles = DEFAULT_CSS_FILES,
    jsFiles = DEFAULT_JS_FILES,
    lang = DEFAULT_LANG,
    robots = ROBOTS_CONTENT
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge"><!-- Title and Meta --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="keywords"${addAttribute(keywords, "content")}><meta name="author"${addAttribute(author, "content")}><!-- Open Graph --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalUrl, "content")}><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImage, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalUrl, "href")}><!-- Prefetch URLs -->${prefetchUrls.map((url2) => renderTemplate`<link rel="prefetch"${addAttribute(url2, "href")}>
      <link rel="preconnect" href="https://fonts.gstatic.com">`)}<!-- Styles and Fonts -->${cssFiles.map((file) => renderTemplate`<link rel="stylesheet"${addAttribute(file, "href")}>`)}<link rel="preload" href="/fonts/your-font.woff2" as="font" type="font/woff2" crossorigin="anonymous"><!-- Favicon --><link rel="icon"${addAttribute(FAVICON_ICO, "href")}><link rel="apple-touch-icon" sizes="180x180"${addAttribute(APPLE_TOUCH_ICON, "href")}><link rel="icon" type="image/png" sizes="32x32"${addAttribute(FAVICON_32x32, "href")}><link rel="icon" type="image/png" sizes="16x16"${addAttribute(FAVICON_16x16, "href")}><link rel="manifest"${addAttribute(MANIFEST, "href")}><!-- Accessibility and SEO --><meta name="robots"${addAttribute(robots, "content")}><meta name="theme-color"${addAttribute(THEME_COLOR, "content")}><!-- Custom Scripts -->${jsFiles.map((file) => renderTemplate(_a || (_a = __template(["<script async", "><\/script>"])), addAttribute(file, "src")))}${renderHead()}</head> <body> ${renderComponent($$result, "Header1", $$Header1, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer1", $$Footer1, {})} </body></html>`;
}, "C:/Users/Utilisateur/zatchou74/src/layouts/BaseLayout.astro", void 0);

export { $$Link1 as $, DEFAULT_CSS_FILES as D, GOOGLE_MAPS as G, SITE_HOST_NAME as S, $$BaseLayout as a, DEFAULT_JS_FILES as b, getEntry as c, $$Icon as d, DEFAULT_EMAIL as e, DEFAULT_PHONE as f, getCollection as g, DEFAULT_ADDRESS as h, DEFAULT_TITLE as i, DEFAULT_DESCRIPTION as j, SITE_HOST_ADDRESS as k, SITE_HOST_CONTACT as l, DEFAULT_AUTHOR as m, SITE_DEV_EMAIL as n, SITE_MEDIATEUR_NAME as o, SITE_MEDIATEUR_URL as p, SITE_MEDIATEUR_ADRESS as q, SITE_URL as r, stats as s, timeline as t, StepService as u, whyChooseUs as w };