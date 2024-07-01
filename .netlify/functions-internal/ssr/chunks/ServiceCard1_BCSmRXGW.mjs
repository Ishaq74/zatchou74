import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, d as createAstro } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { a as $$Picture } from './_astro_assets_BGpc4fzX.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$ServiceCard1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServiceCard1;
  const { service } = Astro2.props;
  const { title, image } = service.data;
  return renderTemplate`${maybeRenderHead()}<li class="service-item" data-astro-cid-x7xwalr6> <a${addAttribute("/services/" + service.slug, "href")} class="service-link" data-astro-cid-x7xwalr6> <h3 class="service-h3" data-astro-cid-x7xwalr6>${title}</h3> </a> ${renderComponent($$result, "Picture", $$Picture, { "class": "service-background", "src": image, "alt": title, "format": "webp", "loading": "eager", "width": 305, "height": 305, "data-astro-cid-x7xwalr6": true })} </li> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Card/Service/ServiceCard1.astro", void 0);

export { $$ServiceCard1 as $ };
