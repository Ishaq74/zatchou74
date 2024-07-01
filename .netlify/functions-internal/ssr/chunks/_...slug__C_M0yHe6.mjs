import { c as createComponent, r as renderTemplate, a as renderComponent, d as createAstro, e as renderSlot, m as maybeRenderHead } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_BGpc4fzX.mjs';
import { a as $$BaseLayout, g as getCollection, c as getEntry } from './BaseLayout_B19851el.mjs';
import { f as formatDate } from './formatDate_ddWwMEw8.mjs';
import { $ as $$PostBanner } from './PostBanner_DOuX89vI.mjs';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$MarkdownWrapper = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MarkdownWrapper;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "C:/Users/Utilisateur/zatchou74/src/layouts/MarkdownWrapper.astro", void 0);

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  const authorData = await getEntry("team", entry.data.author.slug);
  const formattedDate = formatDate(entry.data.date);
  return renderTemplate`${renderComponent($$result, "MarkdownWrapper", $$MarkdownWrapper, { "frontmatter": entry.data, "data-astro-cid-7jjqptxk": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PostBanner", $$PostBanner, { "showCredit": true, "showExtra": false, "title": entry.data.title, "date": formattedDate, "author": authorData?.data.name, "image": entry.data.image, "altimage": "", "data-astro-cid-7jjqptxk": true })} ${maybeRenderHead()}<section id="content-page-852" data-astro-cid-7jjqptxk> <div class="cs-container" data-astro-cid-7jjqptxk> <div class="cs-content" data-astro-cid-7jjqptxk> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-7jjqptxk": true })} </div> <div class="cs-image-group" data-astro-cid-7jjqptxk> ${renderComponent($$result2, "Image", $$Image, { "src": entry.data.image, "class": "cs-picture", "alt": entry.data.title, "width": "542", "height": "520", "aria-hidden": "true", "data-astro-cid-7jjqptxk": true })} </div> </div> </section> ` })} `;
}, "C:/Users/Utilisateur/zatchou74/src/pages/blog/[...slug].astro", void 0);

const $$file = "C:/Users/Utilisateur/zatchou74/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, prerender, $$url as url };
