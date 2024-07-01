import { c as createComponent, r as renderTemplate, a as renderComponent, d as createAstro, m as maybeRenderHead } from './astro/server_DhV-obnq.mjs';
import 'kleur/colors';
import { a as $$BaseLayout } from './BaseLayout_B19851el.mjs';

const $$Astro = createAstro();
const $$Monprofil = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Monprofil;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/signin");
  }
  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value
  });
  if (error) {
    cookies.delete("sb-access-token", {
      path: "/"
    });
    cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return redirect("/signin");
  }
  const email = data.user?.email;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BaseLayout, { "title": "dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Bienvenue ${email}</h1> <p>Nous sommes heureux de vous voir ici.</p> <form action="/api/auth/signout"> <button type="submit">Se déconnecter</button> </form> ` })}`;
}, "C:/Users/Utilisateur/zatchou74/src/pages/monprofil.astro", void 0);

const $$file = "C:/Users/Utilisateur/zatchou74/src/pages/monprofil.astro";
const $$url = "/monprofil";

export { $$Monprofil as default, $$file as file, $$url as url };
