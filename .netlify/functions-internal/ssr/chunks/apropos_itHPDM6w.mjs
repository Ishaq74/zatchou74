import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, d as createAstro } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import { t as timeline, w as whyChooseUs, $ as $$Link1, s as stats, D as DEFAULT_CSS_FILES, b as DEFAULT_JS_FILES, a as $$BaseLayout } from './BaseLayout_B19851el.mjs';
import { $ as $$PostBanner } from './PostBanner_DOuX89vI.mjs';
import 'clsx';
/* empty css                           */
import { $ as $$Container1 } from './Container1_6j8VJpfb.mjs';
import { $ as $$Grid } from './Grid_CDcsMZ6G.mjs';

const $$Timeline1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="timeline-1517" data-astro-cid-njroqcto> <div class="cs-container" data-astro-cid-njroqcto> <div class="cs-content" data-astro-cid-njroqcto> <div class="cs-flex" data-astro-cid-njroqcto> <span class="cs-topper" data-astro-cid-njroqcto>Timeline</span> <h2 class="cs-title" data-astro-cid-njroqcto>${timeline.title}</h2> <p class="cs-text" data-astro-cid-njroqcto>${timeline.description}</p> </div> <div class="cs-image-group" data-astro-cid-njroqcto> ${timeline.images.map((image) => renderTemplate`<picture class="cs-picture" data-astro-cid-njroqcto> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} width="199" height="140" loading="lazy" decoding="async" aria-hidden="true" data-astro-cid-njroqcto> </picture>`)} </div> </div> <ul class="cs-card-group" data-astro-cid-njroqcto> ${timeline.events.map((event) => renderTemplate`<li class="cs-item" data-astro-cid-njroqcto> <span class="cs-date" data-astro-cid-njroqcto>${event.date}</span> <h3 class="cs-h3" data-astro-cid-njroqcto>${event.title}</h3> <p class="cs-item-text" data-astro-cid-njroqcto>${event.text}</p> </li>`)} </ul> </div> </section> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Timeline/Timeline1.astro", void 0);

const $$WhyChooseUs1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Grid", $$Grid, { "columnsDesktop": 2, "columnsTablet": 1, "columnsMobile": 1, "minColumnWidthDesktop": "300px", "minColumnWidthTablet": "200px", "minColumnWidthMobile": "150px", "gap": "24px", "backgroundColor": "transparent", "data-astro-cid-i4vcjzin": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Container", $$Container1, { "topper": whyChooseUs.subtitle, "title": whyChooseUs.title, "description": whyChooseUs.description, "paddingLeft": "10px", "paddingRight": "10px", "titleAlign": "left", "descriptionAlign": "left", "contentAlign": "left", "gap": "0.25rem", "class": "cs-container", "data-astro-cid-i4vcjzin": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<ul class="cs-ul" data-astro-cid-i4vcjzin> ${whyChooseUs.reasons.map((reason) => renderTemplate`<li class="cs-li" data-astro-cid-i4vcjzin> <h3 class="cs-h3" data-astro-cid-i4vcjzin> <img class="cs-icon" aria-hidden="true"${addAttribute(reason.icon, "src")} loading="lazy" decoding="async" alt="icon" width="17" height="18" data-astro-cid-i4vcjzin> ${reason.title} </h3> <p class="cs-item-text" data-astro-cid-i4vcjzin>${reason.text}</p> </li>`)} </ul> ${renderComponent($$result3, "Link", $$Link1, { "ariaLabel": whyChooseUs.button_aria_label, "href": whyChooseUs.button_link, "style": "button", "data-astro-cid-i4vcjzin": true }, { "default": ($$result4) => renderTemplate`${whyChooseUs.button_text}` })} ` })}  ${renderComponent($$result2, "Grid", $$Grid, { "columnsDesktop": 2, "columnsTablet": 2, "columnsMobile": 2, "minColumnWidthDesktop": "100px", "minColumnWidthTablet": "100px", "minColumnWidthMobile": "150px", "gap": "2px", "backgroundColor": "transparent", "data-astro-cid-i4vcjzin": true }, { "default": ($$result3) => renderTemplate`${whyChooseUs.images.map((image, index) => renderTemplate`<picture${addAttribute(`cs-picture cs-picture${index + 1}`, "class")} data-astro-cid-i4vcjzin> <source media="(max-width: 600px)"${addAttribute(image.src, "srcset")} data-astro-cid-i4vcjzin> <source media="(min-width: 601px)"${addAttribute(image.src, "srcset")} data-astro-cid-i4vcjzin> <img loading="lazy" decoding="async"${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} width="306" height="360" data-astro-cid-i4vcjzin> </picture>`)}` })}  ` })} `;
}, "C:/Users/Utilisateur/zatchou74/src/components/WhyChooseUs/WhyChooseUs1.astro", void 0);

const $$Stats1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="stats-316" data-astro-cid-jtmxti4h> <ul class="cs-card-group" data-astro-cid-jtmxti4h> ${stats.map((stat) => renderTemplate`<li class="cs-item" data-astro-cid-jtmxti4h> <picture class="cs-picture" data-astro-cid-jtmxti4h> <img class="cs-icon"${addAttribute(stat.icon, "src")} alt="icon" width="35" height="40" loading="lazy" decoding="async" aria-hidden="true" data-astro-cid-jtmxti4h> </picture> <div class="cs-flex-group" data-astro-cid-jtmxti4h> <span class="cs-number" data-astro-cid-jtmxti4h>${stat.number}</span> <span class="cs-desc" data-astro-cid-jtmxti4h>${stat.desc}</span> </div> </li>`)} </ul> </div> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Stats/Stats1.astro", void 0);

const $$Astro = createAstro();
const $$Apropos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Apropos;
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": pageTitle, "description": pageDescription, "keywords": pageKeywords, "author": pageAuthor, "ogImage": pageOgImage, "canonicalUrl": pageCanonicalUrl, "prefetchUrls": pagePrefetchUrls, "cssFiles": pageCssFiles, "jsFiles": pageJsFiles, "lang": pageLang, "robots": pageRobots }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostBanner", $$PostBanner, { "showCredit": false, "showExtra": false, "title": "\xC0 propos", "image": "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/agency-presentation.png", "altimage": "yest alt" })} ${maybeRenderHead()}<section id="À propos"> ${renderComponent($$result2, "WhyChooseUs", $$WhyChooseUs1, {})} </section> <section id="stats"> ${renderComponent($$result2, "Stats", $$Stats1, {})} </section> <section id="timeline"> ${renderComponent($$result2, "Timeline", $$Timeline1, {})} </section> ` })}`;
}, "C:/Users/Utilisateur/zatchou74/src/pages/apropos.astro", void 0);

const $$file = "C:/Users/Utilisateur/zatchou74/src/pages/apropos.astro";
const $$url = "/apropos";

export { $$Apropos as default, $$file as file, $$url as url };
