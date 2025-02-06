import { s as sanityClient } from '../chunks/page-ssr_C5Px3wCo.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as renderComponent, e as createAstro } from '../chunks/astro/server_CcJUOLtN.mjs';
import 'kleur/colors';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_B4_O29PP.mjs';
/* empty css                                 */
import { PortableText } from '@portabletext/react';
import { f as formatDate } from '../chunks/formatDate_CO36HwdP.mjs';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_B7mDPAbe.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Category;
  const posts = await sanityClient.fetch('*[_type == "post"]{category}');
  const { link, image, text, category } = Astro2.props;
  const categoryPost = posts.filter((post) => post.category === category);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="category relative mb-8 inline-block overflow-hidden min-h-[300px]" data-astro-cid-acbv6hgm> <!-- Overlay --> <div class="overlay absolute left-0 top-0 z-10 h-full w-full rounded-lg bg-black opacity-0 transition-opacity duration-300" data-astro-cid-acbv6hgm></div> <!-- Image --> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-lg w-full h-auto", "src": image, "alt": category, "data-astro-cid-acbv6hgm": true })} <!-- Text (e.g., "Daily Digest") --> <span class="absolute bottom-4 left-4 z-20 rounded-full bg-primary-400 px-4 py-2 text-200 font-600 transition-all duration-500" data-astro-cid-acbv6hgm> ${text} </span> <!-- Category Name --> <p class="absolute bottom-[-3rem] left-4 z-30 text-200 font-500 transition-all delay-100 duration-500" data-astro-cid-acbv6hgm> ${categoryPost.length} article${categoryPost.length !== 1 ? "s" : ""} </p> </a> `;
}, "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/components/Category.astro", undefined);

const DailyDigest = new Proxy({"src":"/_astro/daily-digest.CX4z6x90.jpg","width":1920,"height":1280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/assets/daily-digest.jpg";
							}
							
							return target[name];
						}
					});

const DesignTools = new Proxy({"src":"/_astro/design-tools.CDBlSSuO.jpg","width":1920,"height":1280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/assets/design-tools.jpg";
							}
							
							return target[name];
						}
					});

const Tutorials = new Proxy({"src":"/_astro/tutorials.B2zCZoeY.jpg","width":1920,"height":1280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/assets/tutorials.jpg";
							}
							
							return target[name];
						}
					});

const $$Categories = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="  container mt-12"> <div class=" mx-auto mb-8 max-w-[650px] text-center"> <h2 class="mb-2 text-500 font-500 md:text-650">Explore Our Featured Categories </h2> <p>From daily inspiration to practical tutorials , find the resources you need to fuel your creativity and growth </p> </div> <div class="md:grid md:grid-cols-3 md:gap-4"> ${renderComponent($$result, "Category", $$Category, { "link": "daily-digest", "text": "Daily digest", "image": DailyDigest, "category": "daily digest" })} ${renderComponent($$result, "Category", $$Category, { "link": "design-tools", "text": "Design Tools", "image": DesignTools, "category": "design tools" })} ${renderComponent($$result, "Category", $$Category, { "link": "tutorials", "text": "Tutorials", "image": Tutorials, "category": "tutorials" })} </div> </section>`;
}, "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/components/Categories.astro", undefined);

const $$Featured = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await sanityClient.fetch(
    `*[_type == 'post' && featured] | order(_updatedAt desc) { 
    "slug": slug.current,
     name, 
     tags,
      date,
     "image": image.asset->url, 
     content } `
  );
  return renderTemplate`${maybeRenderHead()}<section class="container" data-astro-cid-gghe66ga> <div class="mb-8" data-astro-cid-gghe66ga> <h2 class="text-500  font-500 md:text-650" data-astro-cid-gghe66ga>Featured posts</h2> </div> <div class="md:grid  md:grid-cols-[1.5fr,1fr]  md:gap-4" data-astro-cid-gghe66ga> <!----Main Image---- --> <div data-astro-cid-gghe66ga> ${posts[0] && renderTemplate`<a class="post relative mb-8 inline-block overflow-hidden rounded-lg"${addAttribute(`/blog/${posts[0].slug}`, "href")} data-astro-cid-gghe66ga> <div class="overlay absolute left-0 top-0 z-10 h-full w-full rounded-lg bg-black opacity-65 transition-opacity duration-500" data-astro-cid-gghe66ga></div> ${renderComponent($$result, "Image", $$Image, { "class": "h-fit w-full rounded-lg transition-transform duration-500", "width": 700, "height": 700, "src": posts[0].image, "alt": posts[0].name, "data-astro-cid-gghe66ga": true })} <div class="absolute bottom-4 left-0 z-20 w-full px-4" data-astro-cid-gghe66ga> <div data-astro-cid-gghe66ga> <span class="mb-2 inline-block" data-astro-cid-gghe66ga>${formatDate(posts[0].date)}</span> <h3 class="mb-2 text-200 font-600 md:text-400 lg:text-500" data-astro-cid-gghe66ga>${posts[0].name}</h3> <ul class="mb-4 flex items-center justify-start gap-4 " data-astro-cid-gghe66ga> ${posts[0].tags.map((tag, _index) => renderTemplate`<li${addAttribute(`rounded-full px-3 py-2 text-[.9rem] ${_index % 2 === 0 ? "bg-primary-400" : "bg-[purple]"}`, "class")} data-astro-cid-gghe66ga>${tag}</li>`)} </ul> </div> </div> </a>`} </div> <!--Other posts ----> <div class="lg:self-center" data-astro-cid-gghe66ga> ${posts.slice(1).map(
    (post) => renderTemplate`<div class="mb-8 rounded-lg border-[1.5px] md:mb-3 md:flex md:border-none" data-astro-cid-gghe66ga> ${renderComponent($$result, "Image", $$Image, { "src": post.image, "alt": post.name, "width": 500, "height": 500, "class": "h-fit w-full rounded-t-lg object-cover  md:size-[100px] md:rounded-lg", "data-astro-cid-gghe66ga": true })} <div class="p-4 md: pt-0" data-astro-cid-gghe66ga> <span class="mb-4 inline-block text-grey-200 md:mb-2" data-astro-cid-gghe66ga>${formatDate(post.date)}</span> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-gghe66ga> <h3 class="mb-2 text-200 transition-colors duration-300 hover:text-primary-400 md:text-100" data-astro-cid-gghe66ga>${post.name}</h3> </a> <article class="mb-4 line-clamp-3 text-grey-200 md:hidden" data-astro-cid-gghe66ga> ${renderComponent($$result, "PortableText", PortableText, { "value": post.content, "data-astro-cid-gghe66ga": true })} </article> <a class="inline-block w-full rounded-lg  bg-primary-400 px-4 py-3 text-center font-500 md:w-fit md:bg-opacity-0 md:p-0 md:text-primary-400 "${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-gghe66ga>Read More</a> </div> </div>`
  )} </div> </div> </section> `;
}, "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/components/Featured.astro", undefined);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class=" container mx-auto flex h-screen max-w-[800px]  flex-col items-center justify-center" data-astro-cid-bbe6dxrz> <span class="mb-4 rounded-full  bg-grey-100 px-4 py-2 capitalize text-black" data-astro-cid-bbe6dxrz> Meet Skharry</span> <h1 class="mb-4 text-600  font-900 leading-[1.2] md:text-900" data-astro-cid-bbe6dxrz>Unlock the world of knowledge with Skharry</h1> <p class="md:text-300" data-astro-cid-bbe6dxrz>
Whether you're a curious reader, a creative professional, 
        learner,SkHarry has something for you
</p>  </section>`;
}, "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/components/Hero.astro", undefined);

const Spinner = () => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "size-[25px] animate-spin rounded-full border-4 border-t-4 border-white border-t-black " }) }) });
};

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (successMessage || errorMessage) {
      const timeout = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 3e3);
      return () => clearTimeout(timeout);
    }
  }, [successMessage, errorMessage]);
  const createSubscription = async (email2) => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email2 })
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) return;
    try {
      setIsLoading(true);
      const response = await createSubscription(email);
      if (response.error) {
        setErrorMessage("This user is already subscribed");
      } else {
        setSuccessMessage("✅ You've been subscribed");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    setEmail("");
  };
  return /* @__PURE__ */ jsx("section", { className: "mb-8 mt-12 bg-black", children: /* @__PURE__ */ jsxs("div", { className: "container py-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-8 max-w-[650px] text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-2 text-500 font-500 md:text-650", children: "Lexicon Newsletter" }),
      /* @__PURE__ */ jsx("p", { children: "A bi-weekly newsletter of design inspiration, resources and anything related to career development." })
    ] }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "relative mx-auto max-w-[500px] md:flex",
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "mb-4 h-[45px] w-full rounded-lg pl-4 text-black placeholder-black",
              type: "text",
              value: email,
              onChange: (event) => setEmail(event.target.value),
              placeholder: "Email Address",
              required: true
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "w-full rounded-lg bg-primary-400 px-4 py-3 font-500 md:absolute md:right-0 md:top-0 md:h-[45px] md:w-fit md:rounded-bl-none md:rounded-tl-none",
              disabled: isLoading,
              children: isLoading ? /* @__PURE__ */ jsx(Spinner, {}) : "Subscribe"
            }
          )
        ]
      }
    ),
    successMessage && /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-[500px] rounded-lg bg-[green] p-3 text-center font-600 text-white", children: successMessage }),
    errorMessage && /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-[500px] rounded-lg bg-[red] p-3 text-center font-600 text-white", children: errorMessage })
  ] }) });
};

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await sanityClient.fetch(
    `*[_type == 'post' ] | order(_updatedAt desc) { 
    "slug": slug.current,
     name,
      date,
     "image": image.asset->url, 
     content } `
  );
  return renderTemplate`${maybeRenderHead()}<section class="container mt-12"> <div class="mb-8"> <h2 class="text-500 font-500 leading-none md:text-650">Recent Post</h2> </div> <div class="md:grid md:grid-cols-3 md:gap-4"> ${posts.map(
    (post) => renderTemplate`<div class="mb-8 flex flex-col rounded-lg  border-[1.5px] border-grey-200 md:mb-0"> <a${addAttribute(`/blog/${post.slug}`, "href")}> ${renderComponent($$result, "Image", $$Image, { "src": post.image, "alt": post.name, "width": 500, "height": 500, "class": "h-fit w-full rounded-t-lg" })} </a> <div class=" flex flex-1 flex-col px-4 "> <div class="mb-4  mt-4 flex items-center justify-between md:mb-6"> <span class="text-grey-200 md:mb-2"> ${formatDate(post.date)} </span> <span class="text-primary-400">${post.category}</span> </div> <h2 class="mb-2  text-300 font-600">${post.name}</h2> <article class="mb-4 flex-1 line-clamp-3 text-grey-200 "> ${renderComponent($$result, "PortableText", PortableText, { "value": post.content })} </article> <a class=" mb-4 mt-auto w-full  rounded-lg  bg-primary-400 px-4 py-3 text-center font-500 "${addAttribute(`/blog/${post.slug}`, "href")}>Read More</a> </div> </div>`
  )} </div> </section>`;
}, "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/components/Blog.astro", undefined);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home page" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})}  ${renderComponent($$result2, "Featured", $$Featured, {})}  ${renderComponent($$result2, "Categories", $$Categories, {})}  ${renderComponent($$result2, "Blog", $$Blog, {})}  ${renderComponent($$result2, "Newsletter", Newsletter, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/components/Newsletter.tsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/pages/index.astro", undefined);

const $$file = "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
