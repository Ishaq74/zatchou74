import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const $$Astro$1 = createAstro();
const $$InputField = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InputField;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="input-group" data-astro-cid-b7egcmen> <label${addAttribute(props.id, "for")} data-astro-cid-b7egcmen>${props.label}</label> <input${addAttribute(props.type, "type")}${addAttribute(props.id, "id")}${addAttribute(props.id, "name")}${addAttribute(props.required, "required")} data-astro-cid-b7egcmen> </div> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Form/InputField.astro", void 0);

const $$Astro = createAstro();
const $$ButtonForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ButtonForm;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="submit" data-astro-cid-66srkwwu>${props.label}</button> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Form/ButtonForm.astro", void 0);

export { $$InputField as $, $$ButtonForm as a };
