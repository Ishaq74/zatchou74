import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, a as renderComponent, d as createAstro } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import { $ as $$Link1, a as $$BaseLayout } from './BaseLayout_B19851el.mjs';
import { $ as $$InputField, a as $$ButtonForm } from './ButtonForm_31Fso1OC.mjs';
/* empty css                               */

const $$RegisterForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="register-container flex-center" data-astro-cid-gr7zohqg> ${renderSlot($$result, $$slots["default"])} <form id="registerForm" action="/api/auth/register" method="post" data-astro-cid-gr7zohqg> <div id="error-message" class="error-message" style="display: none;" data-astro-cid-gr7zohqg></div> ${renderComponent($$result, "InputField", $$InputField, { "id": "email", "label": "Email", "type": "email", "required": true, "data-astro-cid-gr7zohqg": true })} ${renderComponent($$result, "InputField", $$InputField, { "id": "password", "label": "Mot de passe", "type": "password", "required": true, "data-astro-cid-gr7zohqg": true })} ${renderComponent($$result, "Button", $$ButtonForm, { "label": "S'enregistrer", "data-astro-cid-gr7zohqg": true })} </form> </div> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Form/RegisterForm.astro", void 0);

const $$Astro = createAstro();
const $$Inscription = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Inscription;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BaseLayout, { "title": "S'enregistrer" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "RegisterForm", $$RegisterForm, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>S'enregistrer</h1> <p>Vous avez déjà un compte ?</p> ${renderComponent($$result3, "Link", $$Link1, { "href": "/connexion", "icon": { name: "mdi:user-key-outline", side: "right" }, "ariaLabel": "Aller \xE0 la page de connexion", "text": "Connexion", "style": "button", "shape": "circle" }, { "default": ($$result4) => renderTemplate`
Connexion
` })} ` })} ` })} `;
}, "C:/Users/Utilisateur/zatchou74/src/pages/inscription.astro", void 0);

const $$file = "C:/Users/Utilisateur/zatchou74/src/pages/inscription.astro";
const $$url = "/inscription";

export { $$Inscription as default, $$file as file, $$url as url };
