import { defineConfig } from "astro/config";
import netlify from '@astrojs/netlify';
import icon from "astro-icon";
export default defineConfig({
  output: 'server',
  adapter: netlify(),
    integrations: [icon()],
	security: {
		checkOrigin: true
	}
});

