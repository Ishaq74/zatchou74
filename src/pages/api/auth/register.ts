import type { APIRoute } from "astro";
import { handleAuth } from "./AuthHandler";

export const POST: APIRoute = async (context) => {
  return handleAuth(context, 'register');
};
