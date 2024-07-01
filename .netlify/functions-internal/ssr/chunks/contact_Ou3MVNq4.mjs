import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { a as $$Picture } from './_astro_assets_BGpc4fzX.mjs';
import { d as $$Icon, e as DEFAULT_EMAIL, f as DEFAULT_PHONE, G as GOOGLE_MAPS, h as DEFAULT_ADDRESS, a as $$BaseLayout } from './BaseLayout_B19851el.mjs';
import { $ as $$PostBanner } from './PostBanner_DOuX89vI.mjs';
import 'clsx';
/* empty css                           */
import { $ as $$Container1 } from './Container1_6j8VJpfb.mjs';
import { $ as $$Grid } from './Grid_CDcsMZ6G.mjs';

const MapImage = new Proxy({"src":"/_astro/map.4Rf2LV22.jpg","width":462,"height":438,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Utilisateur/zatchou74/src/assets/images/map.jpg";
							}
							
							return target[name];
						}
					});

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="cs-form-242" name="Contact Form" method="post" data-astro-cid-3cawy2ou> <label class="cs-label" data-astro-cid-3cawy2ou>
Nom
<input class="cs-input" required type="text" id="name-242" name="name" placeholder="Jean/Jeanne Dupond" data-astro-cid-3cawy2ou> </label> <label class="cs-label" data-astro-cid-3cawy2ou>
Email
<input class="cs-input" required type="text" id="email-242" name="email" placeholder="nom@google.fr" data-astro-cid-3cawy2ou> </label> <label class="cs-label" data-astro-cid-3cawy2ou>
Prénom
<input class="cs-input" required type="text" id="phone-242" name="phone" placeholder="+33 6 51 54 42 02" data-astro-cid-3cawy2ou> </label> <label class="cs-label" data-astro-cid-3cawy2ou>
Comment vous nous connaissez?
<input class="cs-input" type="text" id="find-242" name="find-us" placeholder="Réseaux Sociaux, Famille, Amis..." data-astro-cid-3cawy2ou> </label> <label class="cs-label cs-label-message" data-astro-cid-3cawy2ou>
Message
<textarea class="cs-input cs-textarea" required name="Message" id="message-242" placeholder="Hello, I’m interested in..." data-astro-cid-3cawy2ou></textarea> </label> <button class="cs-button-solid cs-submit" type="submit" data-astro-cid-3cawy2ou>Submit Message Now</button> </form> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Form/ContactForm.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BaseLayout, { "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostBanner", $$PostBanner, { "showCredit": false, "showExtra": false, "title": "Contact", "image": "https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/agency-presentation.png", "altimage": "yest alt", "data-astro-cid-uw5kdbxl": true })} ${maybeRenderHead()}<section id="contact" data-astro-cid-uw5kdbxl> ${renderComponent($$result2, "Container", $$Container1, { "topper": "Formulaire de Contact", "title": "Contactez-moi", "description": "N'h\xE9sitez pas \xE0 me contacter pour toute question ou demande de devis. Je vous r\xE9pondrais dans les plus brefs d\xE9lais.", "class": "cs-container", "paddingTop": "40px", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Grid", $$Grid, { "columnsDesktop": 2, "columnsTablet": 2, "columnsMobile": 1, "minColumnWidthDesktop": "300px", "minColumnWidthTablet": "200px", "minColumnWidthMobile": "150px", "gap": "24px", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ContactForm", $$ContactForm, { "data-astro-cid-uw5kdbxl": true })} <div class="cs-right-section" data-astro-cid-uw5kdbxl> <ul class="cs-ul" data-astro-cid-uw5kdbxl> <li class="cs-li" data-astro-cid-uw5kdbxl> ${renderComponent($$result4, "Icon", $$Icon, { "name": "mdi:mailbox-up", "width": 36, "height": 36, "class": "cs-icon cs-icon-wrapper", "color": "var(--primaryLight)", "data-astro-cid-uw5kdbxl": true })} <div class="cs-flex-group" data-astro-cid-uw5kdbxl> <span class="cs-header" data-astro-cid-uw5kdbxl>Email</span> <a${addAttribute(`mailto:${DEFAULT_EMAIL}`, "href")} class="cs-link" data-astro-cid-uw5kdbxl>${DEFAULT_EMAIL}</a> </div> </li> <li class="cs-li" data-astro-cid-uw5kdbxl> ${renderComponent($$result4, "Icon", $$Icon, { "name": "mdi:phone-classic", "width": 36, "height": 36, "class": "cs-icon cs-icon-wrapper", "color": "var(--primaryLight)", "data-astro-cid-uw5kdbxl": true })} <div class="cs-flex-group" data-astro-cid-uw5kdbxl> <span class="cs-header" data-astro-cid-uw5kdbxl>Téléphone</span> <a${addAttribute(`tel:${DEFAULT_EMAIL}`, "href")} class="cs-link" data-astro-cid-uw5kdbxl>${DEFAULT_PHONE}</a> </div> </li> <li class="cs-li" data-astro-cid-uw5kdbxl> ${renderComponent($$result4, "Icon", $$Icon, { "name": "mdi:map-marker-radius", "width": 36, "height": 36, "class": "cs-icon cs-icon-wrapper", "color": "var(--primaryLight)", "data-astro-cid-uw5kdbxl": true })} <div class="cs-flex-group" data-astro-cid-uw5kdbxl> <span class="cs-header" data-astro-cid-uw5kdbxl>Adresse</span> <a${addAttribute(GOOGLE_MAPS, "href")} class="cs-link" data-astro-cid-uw5kdbxl>${DEFAULT_ADDRESS}</a> </div> </li> </ul> <!-- Picture --> ${renderComponent($$result4, "Picture", $$Picture, { "class:list": ["cs-picture"], "src": MapImage, "alt": "map location", "width": "462", "height": "438", "decoding": "async", "loading": "eager", "data-astro-cid-uw5kdbxl": true })} </div> ` })} ` })} </section> ` })} `;
}, "C:/Users/Utilisateur/zatchou74/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Utilisateur/zatchou74/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
