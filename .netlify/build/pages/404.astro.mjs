import '../chunks/page-ssr_C5Px3wCo.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CcJUOLtN.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_B7mDPAbe.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_B4_O29PP.mjs';
export { renderers } from '../renderers.mjs';

const ErrorImg = new Proxy({"src":"/_astro/404.CbPhEc6q.png","width":2000,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/assets/404.png";
							}
							
							return target[name];
						}
					});

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page not found " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-full items-center justify-center pt-16 text-center"> <div class="mb-8"> ${renderComponent($$result2, "Image", $$Image, { "src": ErrorImg, "class": "mx-auto mb-4 size-[400px] animate-bounce", "alt": "Error Images" })} <a class="inline-block rounded-full bg-primary-400 px-4 py-2 text-center text-400 font-500" href="/">Go to Homepage</a> </div> </div> ` })}`;
}, "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/pages/404.astro", undefined);

const $$file = "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
