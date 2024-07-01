import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, d as createAstro } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import { c as getEntry, $ as $$Link1, d as $$Icon } from './BaseLayout_B19851el.mjs';
import '@astrojs/internal-helpers/path';
import { a as $$Picture } from './_astro_assets_BGpc4fzX.mjs';
import { f as formatDate } from './formatDate_ddWwMEw8.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$PostCard1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard1;
  const { post } = Astro2.props;
  const { author, description, title, date } = post.data;
  const authorData = await getEntry("team", author.slug);
  const formattedDate = formatDate(date.toString());
  return renderTemplate`${maybeRenderHead()}<li class="cs-item" data-astro-cid-jbosfm3d> <a class="cs-link"${addAttribute("/blog/" + post.slug, "href")} data-astro-cid-jbosfm3d> ${renderComponent($$result, "Picture", $$Picture, { "class": "cs-picture", "src": post.data.image, "alt": title, "format": "webp", "loading": "eager", "inferSize": true, "data-astro-cid-jbosfm3d": true })} <div class="cs-item-text" data-astro-cid-jbosfm3d> <h3 class="cs-h3" data-astro-cid-jbosfm3d> ${title} ${renderComponent($$result, "Icon", $$Icon, { "class": "cs-icon-wrapper cs-icon", "name": "mdi:arrow-top-right", "color": "var(--primary)", "width": 48, "height": 48, "data-astro-cid-jbosfm3d": true })} </h3> <div class="cs-info" data-astro-cid-jbosfm3d> <span class="cs-date" data-astro-cid-jbosfm3d> ${renderComponent($$result, "Icon", $$Icon, { "class": "cs-date-icon", "name": "mdi:calendar-month", "color": "var(--primary)", "width": 24, "height": 24, "data-astro-cid-jbosfm3d": true })}
Par ${authorData?.data.name} le ${formattedDate} </span> <span class="cs-category" data-astro-cid-jbosfm3d> ${renderComponent($$result, "Link", $$Link1, { "classes": "fit-content", "href": post.data.tags, "ariaLabel": "voir la cat\xE9gorie", "background": "var(--secondary)", "shape": "circle", "data-astro-cid-jbosfm3d": true }, { "default": ($$result2) => renderTemplate`${post.data.tags}` })} </span> </div> </div> </a> </li> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Card/Post/PostCard1.astro", void 0);

export { $$PostCard1 as $ };
