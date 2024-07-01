import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot, d as createAstro } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Grid;
  const {
    columnsDesktop = 4,
    columnsTablet = 2,
    columnsMobile = 1,
    gap = "var(--gap-default)",
    backgroundColor = "var(--background-color-default)",
    title = "",
    subtitle = "",
    description = "",
    titleAlign = "left",
    subtitleAlign = "left",
    descriptionAlign = "left",
    children
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-4ojtinow> ${subtitle && renderTemplate`<div class="subtitle"${addAttribute(`--subtitle-align: ${subtitleAlign};`, "style")} data-astro-cid-4ojtinow>${subtitle}</div>`} ${title && renderTemplate`<h2 class="title"${addAttribute(`--title-align: ${titleAlign};`, "style")} data-astro-cid-4ojtinow>${title}</h2>`} ${description && renderTemplate`<p class="description"${addAttribute(`--description-align: ${descriptionAlign};`, "style")} data-astro-cid-4ojtinow>${description}</p>`} <div class="grid-container"${addAttribute(`--columns-desktop: ${columnsDesktop}; --columns-tablet: ${columnsTablet}; --columns-mobile: ${columnsMobile}; --gap: ${gap}; --background-color: ${backgroundColor};`, "style")} data-astro-cid-4ojtinow> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/Utilisateur/zatchou74/src/components/Elements/Grid/Grid.astro", void 0);

export { $$Grid as $ };
