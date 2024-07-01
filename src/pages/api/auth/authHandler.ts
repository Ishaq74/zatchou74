import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const handleAuth: (context: { request: any; }, action: 'login' | 'register') => Promise<Response> = async ({ request }, action) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
      return new Response(JSON.stringify({ success: false, message: "L'email et le mot de passe sont obligatoires." }), { status: 400 });
    }

    if (action === 'register' && password.length < 6) {
      return new Response(JSON.stringify({ success: false, message: "Le mot de passe doit contenir au moins 6 caractères." }), { status: 400 });
    }

    let response;
    if (action === 'login') {
      response = await supabase.auth.signInWithPassword({ email, password });
    } else if (action === 'register') {
      response = await supabase.auth.signUp({ email, password });
    }

    const { data, error } = response;
    if (error) {
      const errorMessage = action === 'register' && error.message.includes("already registered")
        ? "L'utilisateur avec cet email existe déjà."
        : `Une erreur est survenue lors de la tentative de ${action === 'login' ? 'connexion' : "d'inscription"}. Veuillez vérifier vos informations et réessayer.`;
      return new Response(JSON.stringify({ success: false, message: errorMessage }), { status: 500 });
    }

    const { access_token, refresh_token } = data.session;
    return new Response(JSON.stringify({ success: true, access_token, refresh_token }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: "Une erreur inattendue s'est produite. Veuillez réessayer plus tard." }), { status: 500 });
  }
};

