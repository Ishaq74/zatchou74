import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as createAstro, b as addAttribute } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import { g as getCollection, D as DEFAULT_CSS_FILES, b as DEFAULT_JS_FILES, a as $$BaseLayout } from './BaseLayout_B19851el.mjs';
import { $ as $$Grid } from './Grid_CDcsMZ6G.mjs';
import { $ as $$Container1 } from './Container1_6j8VJpfb.mjs';
import { $ as $$ServiceCard1 } from './ServiceCard1_BCSmRXGW.mjs';
import { $ as $$PostCard1 } from './PostCard1_-9Z1ww2w.mjs';
/* empty css                         */
import '@astrojs/internal-helpers/path';
import { a as $$Picture } from './_astro_assets_BGpc4fzX.mjs';
import 'clsx';

const $$Partners = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="Partners" data-astro-cid-6g7imab6> ${renderComponent($$result, "Container", $$Container1, { "paddingTop": "40px", "paddingBottom": "40px", "PaddingLeft": "10px", "PaddingRight": "10px", "class": "cs-container", "data-astro-cid-6g7imab6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Grid", $$Grid, { "columnsDesktop": 4, "columnsTablet": 4, "columnsMobile": 2, "minColumnWidthDesktop": "300px", "minColumnWidthTablet": "200px", "minColumnWidthMobile": "150px", "gap": "24px", "backgroundColor": "transparent", "data-astro-cid-6g7imab6": true }, { "default": ($$result3) => renderTemplate` <img class="cs-logo" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="logo" width="100%" loading="lazy" decoding="async" data-astro-cid-6g7imab6> <img class="cs-logo" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="logo" width="100%" loading="lazy" decoding="async" data-astro-cid-6g7imab6> <img class="cs-logo" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" alt="logo" width="100%" loading="lazy" decoding="async" data-astro-cid-6g7imab6> <img class="cs-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" width="100%" loading="lazy" decoding="async" data-astro-cid-6g7imab6> ` })} ` })} </section>`;
}, "C:/Users/Utilisateur/zatchou74/src/components/Partners/Partners.astro", void 0);

const $$Astro$3 = createAstro();
const $$ReviewCard1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ReviewCard1;
  const { commentaire } = Astro2.props;
  const { nom, photo, job, texte, note } = commentaire.data;
  return renderTemplate`${maybeRenderHead()}<li class="cs-item" data-astro-cid-l6vnzirg> <div class="cs-flex-group" data-astro-cid-l6vnzirg> <picture data-astro-cid-l6vnzirg> ${renderComponent($$result, "Picture", $$Picture, { "class": "cs-profile", "src": photo, "alt": nom, "format": "webp", "loading": "eager", "width": 50, "height": 50, "data-astro-cid-l6vnzirg": true })} </picture> <span class="cs-name" data-astro-cid-l6vnzirg> ${nom} <span class="cs-job" data-astro-cid-l6vnzirg>${job}</span> </span> </div> <div class="wrapper" data-astro-cid-l6vnzirg> <img class="cs-item-stars" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/yellow-stars.svg" alt="stars" width="96" height="16" data-astro-cid-l6vnzirg> <p class="cs-review" data-astro-cid-l6vnzirg> ${texte} </p> </div> <!--Quote Icon--> <img class="cs-quote" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/gray-quote.svg" decoding="async" alt="quote icon" width="120" height="99" data-astro-cid-l6vnzirg> </li> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Card/Reviews/ReviewCard1.astro", void 0);

const $$Astro$2 = createAstro();
const $$ReviewCard2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ReviewCard2;
  const { commentaire } = Astro2.props;
  const { nom, photo, job, texte, note } = commentaire.data;
  return renderTemplate`${maybeRenderHead()}<li class="cs-item" data-astro-cid-7oa7gnua> <!--Blue Quote--> <img class="cs-stars" aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/stars3.svg" decoding="async" alt="quote icon" width="189" height="24" data-astro-cid-7oa7gnua> <p class="cs-item-text" data-astro-cid-7oa7gnua> ${texte} </p> <div class="cs-flex-group" data-astro-cid-7oa7gnua> <picture class="cs-picture" data-astro-cid-7oa7gnua> ${renderComponent($$result, "Picture", $$Picture, { "class": "cs-profile", "src": photo, "alt": nom, "format": "webp", "loading": "eager", "width": 50, "height": 50, "data-astro-cid-7oa7gnua": true })} </picture> <span class="cs-name" data-astro-cid-7oa7gnua>
Vera Robinson
<span class="cs-job" data-astro-cid-7oa7gnua>${job}</span> </span> </div> </li> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Card/Reviews/ReviewCard2.astro", void 0);

const $$Astro$1 = createAstro();
const $$IconCard1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$IconCard1;
  const { service } = Astro2.props;
  const { description, title, icon } = service.data;
  return renderTemplate`${maybeRenderHead()}<li class="cs-item" data-astro-cid-pfz3l7tz> <i${addAttribute(icon, "class")} data-astro-cid-pfz3l7tz></i> <div class="cs-text-group" data-astro-cid-pfz3l7tz> <h3 class="cs-h3" data-astro-cid-pfz3l7tz>${title}</h3> <p class="cs-item-text" data-astro-cid-pfz3l7tz>${description}</p> </div> </li> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Card/Service/IconCard1.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const services = await getCollection("services");
  const posts = await getCollection("posts");
  const commentaires = await getCollection("commentaires");
  const pageTitle = "Blog - Mon Site Incroyable";
  const pageDescription = "Page d'accueil du Blog avec Astro.";
  const pageKeywords = "blog, astro, cms, site web";
  const pageAuthor = "Votre Nom";
  const pageOgImage = "/images/og-home.jpg";
  const pageCanonicalUrl = "";
  const pagePrefetchUrls = ["/images/feature1.jpg", "/images/feature2.jpg"];
  const pageCssFiles = ["/styles/home.css", ...DEFAULT_CSS_FILES];
  const pageJsFiles = ["/scripts/home.js", ...DEFAULT_JS_FILES];
  const pageLang = "fr";
  const pageRobots = "noindex, nofollow";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "author": pageAuthor, "ogImage": pageOgImage, "canonicalUrl": pageCanonicalUrl, "prefetchUrls": pagePrefetchUrls, "cssFiles": pageCssFiles, "jsFiles": pageJsFiles, "lang": pageLang, "robots": pageRobots }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="Services"> ${renderComponent($$result2, "Container", $$Container1, { "topper": "Notre Expertise", "title": "Nos Services", "description": "D\xE9couvrez nos services de qualit\xE9 pour vous accompagner dans vos projets.", "class": "cs-container", "paddingTop": "40px", "margin-right": "auto", "margin-left": "auto" }, { "default": ($$result3) => renderTemplate` <ul class="cs-list"> ${renderComponent($$result3, "Grid", $$Grid, { "columnsDesktop": 4, "columnsTablet": 2, "columnsMobile": 1, "minColumnWidthDesktop": "300px", "minColumnWidthTablet": "200px", "minColumnWidthMobile": "150px", "gap": "24px", "backgroundColor": "transparent" }, { "default": ($$result4) => renderTemplate`${services.slice(0, 4).map((p) => renderTemplate`${renderComponent($$result4, "IconCard1", $$IconCard1, { "service": p })}`)}` })} </ul> ` })} <div class="cs-bubbles" aria-hidden="true"></div> </section> <section id="Services"> ${renderComponent($$result2, "Container", $$Container1, { "topper": "Notre Expertise", "title": "Nos Services", "description": "D\xE9couvrez nos services de qualit\xE9 pour vous accompagner dans vos projets.", "class": "cs-container", "paddingTop": "40px" }, { "default": ($$result3) => renderTemplate` <ul class="cs-list"> ${renderComponent($$result3, "Grid", $$Grid, { "columnsDesktop": 4, "columnsTablet": 2, "columnsMobile": 1, "minColumnWidthDesktop": "300px", "minColumnWidthTablet": "200px", "minColumnWidthMobile": "150px", "gap": "24px", "backgroundColor": "transparent" }, { "default": ($$result4) => renderTemplate`${services.slice(0, 4).map((p) => renderTemplate`${renderComponent($$result4, "ServiceCard1", $$ServiceCard1, { "service": p })}`)}` })} </ul> ` })} <div class="cs-bubbles" aria-hidden="true"></div> </section> <section id="blog"> ${renderComponent($$result2, "Container", $$Container1, { "topper": "Derni\xE8res Nouvelles et Articles", "title": "Blog", "description": "D\xE9couvrez les derni\xE8res nouvelles et articles de notre blog.", "class": "cs-container" }, { "default": ($$result3) => renderTemplate` <ul class="cs-list"> ${renderComponent($$result3, "Grid", $$Grid, { "columnsDesktop": 3, "columnsTablet": 2, "columnsMobile": 1, "minColumnWidthDesktop": "300px", "minColumnWidthTablet": "200px", "minColumnWidthMobile": "150px", "gap": "24px", "backgroundColor": "transparent" }, { "default": ($$result4) => renderTemplate`${posts.slice(0, 3).map((p) => renderTemplate`${renderComponent($$result4, "PostCard1", $$PostCard1, { "post": p })}`)}` })} </ul> ` })} <div class="cs-bubbles" aria-hidden="true"></div> </section> <section id="reviews"> ${renderComponent($$result2, "Container", $$Container1, { "topper": "Avis Clients", "title": "Ce que nos clients disent de nous", "description": "D\xE9couvrez les avis de nos clients et ce qu'ils pensent de nos services.", "titleAlign": "left", "descriptionAlign": "left", "contentAlign": "left", "class": "cs-container" }, { "default": ($$result3) => renderTemplate` <ul class=""> ${renderComponent($$result3, "Grid", $$Grid, { "columnsDesktop": 3, "columnsTablet": 2, "columnsMobile": 1, "minColumnWidthDesktop": "300px", "minColumnWidthTablet": "200px", "minColumnWidthMobile": "150px", "gap": "24px", "backgroundColor": "transparent" }, { "default": ($$result4) => renderTemplate`${commentaires.slice(0, 4).map((p) => renderTemplate`${renderComponent($$result4, "ReviewCard1", $$ReviewCard1, { "commentaire": p })}`)}` })} </ul> ` })} </section> <section id="reviews"> ${renderComponent($$result2, "Container", $$Container1, { "topper": "Avis Clients", "title": "Ce que nos clients disent de nous", "description": "D\xE9couvrez les avis de nos clients et ce qu'ils pensent de nos services.", "titleAlign": "left", "descriptionAlign": "left", "contentAlign": "left", "class": "cs-container" }, { "default": ($$result3) => renderTemplate` <ul class=""> ${renderComponent($$result3, "Grid", $$Grid, { "columnsDesktop": 3, "columnsTablet": 2, "columnsMobile": 1, "minColumnWidthDesktop": "300px", "minColumnWidthTablet": "200px", "minColumnWidthMobile": "150px", "gap": "24px", "backgroundColor": "transparent" }, { "default": ($$result4) => renderTemplate`${commentaires.slice(0, 4).map((p) => renderTemplate`${renderComponent($$result4, "ReviewCard2", $$ReviewCard2, { "commentaire": p })}`)}` })} </ul> ` })} </section> ${renderComponent($$result2, "Partners", $$Partners, {})} ` })}`;
}, "C:/Users/Utilisateur/zatchou74/src/pages/index.astro", void 0);

const $$file = "C:/Users/Utilisateur/zatchou74/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
