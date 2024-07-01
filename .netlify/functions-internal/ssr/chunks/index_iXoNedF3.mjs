import { c as createComponent, r as renderTemplate, a as renderComponent, d as createAstro, m as maybeRenderHead } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import { g as getCollection, D as DEFAULT_CSS_FILES, b as DEFAULT_JS_FILES, a as $$BaseLayout } from './BaseLayout_B19851el.mjs';
import { $ as $$Grid } from './Grid_CDcsMZ6G.mjs';
import { $ as $$Container1 } from './Container1_6j8VJpfb.mjs';
import { $ as $$PostCard1 } from './PostCard1_-9Z1ww2w.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("posts");
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "author": pageAuthor, "ogImage": pageOgImage, "canonicalUrl": pageCanonicalUrl, "prefetchUrls": pagePrefetchUrls, "cssFiles": pageCssFiles, "jsFiles": pageJsFiles, "lang": pageLang, "robots": pageRobots }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="blog"> ${renderComponent($$result2, "Container", $$Container1, { "topper": "Derni\xE8res Nouvelles et Articles", "title": "Blog", "description": "D\xE9couvrez les derni\xE8res nouvelles et articles de notre blog.", "class": "cs-container", "paddingTop": "40px" }, { "default": ($$result3) => renderTemplate` <ul class="cs-list"> ${renderComponent($$result3, "Grid", $$Grid, { "columnsDesktop": 3, "columnsTablet": 2, "columnsMobile": 1, "minColumnWidthDesktop": "300px", "minColumnWidthTablet": "200px", "minColumnWidthMobile": "150px", "gap": "24px", "backgroundColor": "transparent" }, { "default": ($$result4) => renderTemplate`${posts.slice(0, 3).map((p) => renderTemplate`${renderComponent($$result4, "PostCard1", $$PostCard1, { "post": p })}`)}` })} </ul> ` })} <div class="cs-bubbles" aria-hidden="true"></div> </section> ` })}`;
}, "C:/Users/Utilisateur/zatchou74/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Utilisateur/zatchou74/src/pages/blog/index.astro";
const $$url = "/blog";

export { $$Index as default, $$file as file, $$url as url };
