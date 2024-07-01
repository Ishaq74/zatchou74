import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CNqsTFPE.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/apropos.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page5 = () => import('./pages/connexion.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/dashboard.astro.mjs');
const _page8 = () => import('./pages/inscription.astro.mjs');
const _page9 = () => import('./pages/mentions-legales.astro.mjs');
const _page10 = () => import('./pages/monprofil.astro.mjs');
const _page11 = () => import('./pages/services.astro.mjs');
const _page12 = () => import('./pages/services/_---slug_.astro.mjs');
const _page13 = () => import('./pages/_tag_.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/apropos.astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/connexion.astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/dashboard.astro", _page7],
    ["src/pages/inscription.astro", _page8],
    ["src/pages/mentions-legales.astro", _page9],
    ["src/pages/monprofil.astro", _page10],
    ["src/pages/services/index.astro", _page11],
    ["src/pages/services/[...slug].astro", _page12],
    ["src/pages/[tag].astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "0338546f-a3a4-4eb4-b103-20520dd5ee72"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
