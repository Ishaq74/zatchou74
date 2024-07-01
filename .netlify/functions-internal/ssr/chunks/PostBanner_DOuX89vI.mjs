import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as createAstro, F as Fragment } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { a as $$Picture } from './_astro_assets_BGpc4fzX.mjs';
/* empty css                           */

const BannerImage = new Proxy({"src":"/_astro/logo.mdJHo91r.png","width":220,"height":166,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Utilisateur/zatchou74/src/assets/images/logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$PostBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostBanner;
  const {
    title = "Nom de la Page",
    text = "Obtenez les r\xE9sultats que vous m\xE9ritez rapidement gr\xE2ce \xE0 notre coaching personnalis\xE9.",
    author = "Zatchouli",
    date = "29/05/2024",
    image = BannerImage.src,
    altimage = "illustration du cabinet de coaching Recrutement Gagnant",
    showExtra = false,
    showCredit = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="banner" class="banner" data-astro-cid-ayx4s5ck> <div class="cs-container" data-astro-cid-ayx4s5ck> <span class="cs-int-title" data-astro-cid-ayx4s5ck>${title}</span> ${showExtra && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-ayx4s5ck": true }, { "default": ($$result2) => renderTemplate` <p class="cs-text" data-astro-cid-ayx4s5ck>${text}</p> ` })}`} ${showCredit && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-ayx4s5ck": true }, { "default": ($$result2) => renderTemplate` <p class="cs-text" data-astro-cid-ayx4s5ck>Rédigé par ${author} le ${date}</p> ` })}`} </div> <!-- Image de fond --> ${renderComponent($$result, "Picture", $$Picture, { "class": "cs-background fill img", "src": image, "alt": altimage, "loading": "eager", "format": "webp", "width": 4096, "height": 1352, "data-astro-cid-ayx4s5ck": true })} </div> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/BannerPage/PostBanner.astro", void 0);

export { $$PostBanner as $ };
