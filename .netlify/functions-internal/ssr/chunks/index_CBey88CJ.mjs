import { c as createComponent, r as renderTemplate, a as renderComponent, d as createAstro, m as maybeRenderHead } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import { g as getCollection, D as DEFAULT_CSS_FILES, b as DEFAULT_JS_FILES, a as $$BaseLayout } from './BaseLayout_B19851el.mjs';
import { $ as $$Grid } from './Grid_CDcsMZ6G.mjs';
import { $ as $$Container1 } from './Container1_6j8VJpfb.mjs';
import { $ as $$ServiceCard1 } from './ServiceCard1_BCSmRXGW.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const services = await getCollection("services");
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "author": pageAuthor, "ogImage": pageOgImage, "canonicalUrl": pageCanonicalUrl, "prefetchUrls": pagePrefetchUrls, "cssFiles": pageCssFiles, "jsFiles": pageJsFiles, "lang": pageLang, "robots": pageRobots }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="Services"> ${renderComponent($$result2, "Container", $$Container1, { "topper": "Notre Expertise", "title": "Nos Services", "description": "D\xE9couvrez nos services de qualit\xE9 pour vous accompagner dans vos projets.", "class": "cs-container" }, { "default": ($$result3) => renderTemplate` <ul class="cs-list"> ${renderComponent($$result3, "Grid", $$Grid, { "columnsDesktop": 4, "columnsTablet": 2, "columnsMobile": 1, "minColumnWidthDesktop": "300px", "minColumnWidthTablet": "200px", "minColumnWidthMobile": "150px", "gap": "24px", "backgroundColor": "transparent" }, { "default": ($$result4) => renderTemplate`${services.slice(0, 4).map((p) => renderTemplate`${renderComponent($$result4, "ServiceCard1", $$ServiceCard1, { "service": p })}`)}` })} </ul> ` })} <div class="cs-bubbles" aria-hidden="true"></div> </section> ` })}`;
}, "C:/Users/Utilisateur/zatchou74/src/pages/services/index.astro", void 0);

const $$file = "C:/Users/Utilisateur/zatchou74/src/pages/services/index.astro";
const $$url = "/services";

export { $$Index as default, $$file as file, $$url as url };
