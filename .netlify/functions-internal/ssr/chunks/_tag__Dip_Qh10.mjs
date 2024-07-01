import { c as createComponent, r as renderTemplate, a as renderComponent, d as createAstro, m as maybeRenderHead } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import { g as getCollection, a as $$BaseLayout } from './BaseLayout_B19851el.mjs';
import { $ as $$Container1 } from './Container1_6j8VJpfb.mjs';
import { $ as $$Grid } from './Grid_CDcsMZ6G.mjs';
import { $ as $$PostCard1 } from './PostCard1_-9Z1ww2w.mjs';

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  const allPosts = await getCollection("posts");
  const uniqueTags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter(
      (post) => post.data.tags.includes(tag)
    );
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="blog"> ${renderComponent($$result2, "Container", $$Container1, { "topper": "Derni\xE8res Nouvelles et Articles", "title": `Cat\xE9gorie ${tag}`, "description": `D\xE9couvrez nos 4 derniers articles en lien avec ${tag}.`, "class": "cs-container", "paddingTop": "40px" }, { "default": ($$result3) => renderTemplate` <ul class="cs-list"> ${renderComponent($$result3, "Grid", $$Grid, { "columnsDesktop": 3, "columnsTablet": 2, "columnsMobile": 1, "minColumnWidthDesktop": "300px", "minColumnWidthTablet": "200px", "minColumnWidthMobile": "150px", "gap": "24px", "backgroundColor": "transparent" }, { "default": ($$result4) => renderTemplate`${posts && posts.map((post) => renderTemplate`${renderComponent($$result4, "PostCard1", $$PostCard1, { "post": post })}`)}` })} </ul> ` })} <div class="cs-bubbles" aria-hidden="true"></div> </section> ` })}`;
}, "C:/Users/Utilisateur/zatchou74/src/pages/[tag].astro", void 0);

const $$file = "C:/Users/Utilisateur/zatchou74/src/pages/[tag].astro";
const $$url = "/[tag]";

export { $$tag as default, $$file as file, getStaticPaths, prerender, $$url as url };
