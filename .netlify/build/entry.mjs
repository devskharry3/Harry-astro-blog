import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_D3lxVLg-.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin/_---params_.astro.mjs');
const _page3 = () => import('./pages/api/sanity.astro.mjs');
const _page4 = () => import('./pages/api/subscribe.astro.mjs');
const _page5 = () => import('./pages/blog/_slug_.astro.mjs');
const _page6 = () => import('./pages/daily-digest.astro.mjs');
const _page7 = () => import('./pages/design-tools.astro.mjs');
const _page8 = () => import('./pages/layouts/layout.astro.mjs');
const _page9 = () => import('./pages/tutorials.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["node_modules/@sanity/astro/dist/studio/studio-route.astro", _page2],
    ["src/pages/api/Sanity.js", _page3],
    ["src/pages/api/subscribe.ts", _page4],
    ["src/pages/blog/[slug].astro", _page5],
    ["src/pages/daily-digest.astro", _page6],
    ["src/pages/design-tools.astro", _page7],
    ["src/pages/layouts/Layout.astro", _page8],
    ["src/pages/tutorials.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7be32b8d-ed93-42c8-a334-bfbe4f5c594e"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
