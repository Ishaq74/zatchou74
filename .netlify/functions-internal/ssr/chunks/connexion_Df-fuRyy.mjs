import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, a as renderComponent, d as createAstro } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import { $ as $$Link1, a as $$BaseLayout } from './BaseLayout_B19851el.mjs';
import { $ as $$InputField, a as $$ButtonForm } from './ButtonForm_31Fso1OC.mjs';
/* empty css                             */

const $$LoginForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="login-container flex-center" data-astro-cid-figte2dg> ${renderSlot($$result, $$slots["default"])} <form id="loginForm" action="/api/auth/signin" method="post" data-astro-cid-figte2dg> <div id="error-message" class="error-message" style="display: none;" data-astro-cid-figte2dg></div> ${renderComponent($$result, "InputField", $$InputField, { "id": "email", "label": "Email", "type": "email", "required": true, "data-astro-cid-figte2dg": true })} ${renderComponent($$result, "InputField", $$InputField, { "id": "password", "label": "Mot de passe", "type": "password", "required": true, "data-astro-cid-figte2dg": true })} ${renderComponent($$result, "Button", $$ButtonForm, { "label": "Connexion", "data-astro-cid-figte2dg": true })} </form> </div> `;
}, "C:/Users/Utilisateur/zatchou74/src/components/Form/LoginForm.astro", void 0);

const $$Astro = createAstro();
const $$Connexion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Connexion;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BaseLayout, { "title": "Connexion" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LoginForm", $$LoginForm, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>Connexion</h1> <p>Vous souhaitez vous inscrire ?</p> ${renderComponent($$result3, "Link", $$Link1, { "href": "/inscription", "icon": { name: "mdi:user-plus", side: "right" }, "ariaLabel": "Aller \xE0 la page d'inscription", "text": "Inscription", "style": "button", "shape": "circle", "}": true }, { "default": ($$result4) => renderTemplate`
Inscription` })} ` })} ` })} `;
}, "C:/Users/Utilisateur/zatchou74/src/pages/connexion.astro", void 0);

const $$file = "C:/Users/Utilisateur/zatchou74/src/pages/connexion.astro";
const $$url = "/connexion";

export { $$Connexion as default, $$file as file, $$url as url };
