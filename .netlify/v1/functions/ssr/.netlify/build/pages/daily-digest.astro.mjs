import { s as sanityClient } from '../chunks/page-ssr_C5Px3wCo.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CcJUOLtN.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_B7mDPAbe.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_B4_O29PP.mjs';
import { PortableText } from '@portabletext/react';
import { f as formatDate } from '../chunks/formatDate_CO36HwdP.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const $$DailyDigest = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await sanityClient.fetch(
    `*[_type == 'post' && category == "daily digest"]  { 
    "slug": slug.current,
     name,
      date,
      category,
     "image": image.asset->url, 
     content } `
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": posts[0].category, "data-astro-cid-fkkexaqb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-fkkexaqb> <div class="hero relative mb-[4rem] flex items-center justify-center" data-astro-cid-fkkexaqb> <div class="overlay" data-astro-cid-fkkexaqb> <div class="container" data-astro-cid-fkkexaqb> <div class="mr-auto max-w-[700px] " data-astro-cid-fkkexaqb> <h2 class="text-700 font-700  capitalize  leading-[1.2]" data-astro-cid-fkkexaqb>${posts[0].category}</h2> <a class="mt-2 inline-block border-b-2 font-500 capitalize leading-3 text-white transition-colors duration-300 hover:text-primary-400" href="/" data-astro-cid-fkkexaqb> <i class="fa-solid fa-arrow-left" data-astro-cid-fkkexaqb></i> <span data-astro-cid-fkkexaqb>go back </span> </a> </div> </div> </div> </div> <div class="container mt-16" data-astro-cid-fkkexaqb> <div class="md:grid md:grid-cols-2 md:gap-4" data-astro-cid-fkkexaqb> ${posts.map(
    (post) => renderTemplate`<div class="mb-8 rounded-lg border-[1.5px] border-grey-200 md:mb-0" data-astro-cid-fkkexaqb> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-fkkexaqb> ${renderComponent($$result2, "Image", $$Image, { "src": post.image, "alt": post.name, "width": 500, "height": 500, "class": "h-fit w-full rounded-t-lg", "data-astro-cid-fkkexaqb": true })} </a> <div class="px-4" data-astro-cid-fkkexaqb> <div class="mb-4  mt-4 flex items-center justify-between md:mb-6" data-astro-cid-fkkexaqb> <span class="mb-4 inline-block text-grey-200 md:mb-2" data-astro-cid-fkkexaqb> ${formatDate(post.date)} </span> <span class="text-primary-400" data-astro-cid-fkkexaqb>${post.category}</span> </div> <h2 class="mb-2 inline-block text-300 font-600" data-astro-cid-fkkexaqb>${post.name}</h2> <article class="mb-4 line-clamp-3 text-grey-200 " data-astro-cid-fkkexaqb> ${renderComponent($$result2, "PortableText", PortableText, { "value": post.content, "data-astro-cid-fkkexaqb": true })} </article> <a class="inline-block w-full mb-4 rounded-lg  bg-primary-400 px-4 py-3 text-center font-500  "${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-fkkexaqb>Read More</a> </div> </div>`
  )} </div> </div> </section> ` })} `;
}, "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/pages/daily-digest.astro", undefined);

const $$file = "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/pages/daily-digest.astro";
const $$url = "/daily-digest";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$DailyDigest,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
