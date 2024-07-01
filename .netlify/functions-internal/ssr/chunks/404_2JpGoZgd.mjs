import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import { $ as $$Container1 } from './Container1_6j8VJpfb.mjs';
import { $ as $$Link1, a as $$BaseLayout } from './BaseLayout_B19851el.mjs';
/* empty css                       */

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-zetdm5md> ${renderComponent($$result2, "Container1", $$Container1, { "title": "Cette page n'existe pas.", "topper": "404 NOT FOUND", "description": "Rendez vous sur la page d'accueil.", "paddingTop": "40px", "paddingBottom": "40px", "data-astro-cid-zetdm5md": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Link1", $$Link1, { "href": "/", "style": "button", "icon": { name: "mdi:arrow-left", side: "left" }, "ariaLabel": "Retour \xE0 la page d'accueil", "data-astro-cid-zetdm5md": true }, { "default": ($$result4) => renderTemplate`Retour` })} ` })} </main> ` })} `;
}, "C:/Users/Utilisateur/zatchou74/src/pages/404.astro", void 0);

const $$file = "C:/Users/Utilisateur/zatchou74/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
