import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot, d as createAstro } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Container1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Container1;
  const {
    topper,
    title,
    description,
    class: className,
    style: inlineStyle,
    paddingTop = "10px",
    paddingRight = "10px",
    paddingBottom = "10px",
    paddingLeft = "10px",
    marginTop = "0",
    marginRight = "auto",
    marginBottom = "0",
    marginLeft = "auto",
    topperAlign = "center",
    // Nouvelle prop pour l'alignement du topper
    titleAlign = "center",
    // Nouvelle prop pour l'alignement du titre
    descriptionAlign = "center",
    // Nouvelle prop pour l'alignement de la description
    contentAlign = "center",
    // Nouvelle prop pour l'alignement du contenu du slot
    topperStyle = "",
    titleStyle = "",
    descriptionStyle = "",
    gap = "var(--gap, 0.25rem)",
    // Nouvelle prop pour le gap
    background = "transparent"
    // Nouvelle prop pour le background
  } = Astro2.props;
  const alignmentClasses = {
    topper: `align-${topperAlign}`,
    title: `align-${titleAlign}`,
    description: `align-${descriptionAlign}`,
    content: `align-${contentAlign}`
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`container ${className ?? ""} ${alignmentClasses.content}`, "class")}${addAttribute(`padding-top: ${paddingTop}; padding-right: ${paddingRight}; padding-bottom: ${paddingBottom}; padding-left: ${paddingLeft}; margin-top: ${marginTop}; margin-right: ${marginRight}; margin-bottom: ${marginBottom}; margin-left: ${marginLeft}; gap: ${gap}; background: ${background}; ${inlineStyle ?? ""}`, "style")} data-astro-cid-uijrwrcj> ${topper && renderTemplate`<span${addAttribute(`cs-topper ${alignmentClasses.topper}`, "class")}${addAttribute(topperStyle, "style")} data-astro-cid-uijrwrcj>${topper}</span>`} ${title && renderTemplate`<h2${addAttribute(`cs-title ${alignmentClasses.title}`, "class")}${addAttribute(titleStyle, "style")} data-astro-cid-uijrwrcj>${title}</h2>`} ${description && renderTemplate`<p${addAttribute(`cs-text ${alignmentClasses.description}`, "class")}${addAttribute(descriptionStyle, "style")} data-astro-cid-uijrwrcj>${description}</p>`} ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Container/Container1.astro", void 0);

export { $$Container1 as $ };
