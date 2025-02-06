import './page-ssr_C5Px3wCo.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, k as renderScript, e as createAstro, a as renderComponent, d as renderHead, l as renderSlot } from './astro/server_CcJUOLtN.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                          */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <hr class="text-grey-200"> <p class="p-8 text-center">Copyright ${(/* @__PURE__ */ new Date()).getFullYear()} - Dev Skharry</p> </footer>`;
}, "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/components/Footer.astro", undefined);

const navigation = [
  { name: "daily digest", href: "/daily-digest" },
  { name: "design tools", href: "/design-tools" },
  { name: "tutorials", href: "/tutorials" }
];
const Nav = ({ isClicked, toggleNavClick }) => {
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive(window.location.pathname);
  }, []);
  const handleNavClick = (href) => {
    setActive(href);
    toggleNavClick();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("nav", { className: `${isClicked ? "transalte-x-0" : "translate-x-[190rem]"}   fixed left-0 top-0 flex h-screen w-full items-center justify-end transition-transform duration-300 md:hidden`, children: /* @__PURE__ */ jsx("ul", { className: "h-full w-[60%] border-1 border-primary-400 bg-black pl-4 pt-[9rem]", children: navigation.map((item) => /* @__PURE__ */ jsx("li", { className: "mb-4 text-300 font-500 capitalize", children: /* @__PURE__ */ jsx(
      "a",
      {
        className: ` ${active === item.href ? "text-primary-400" : ""} transition-colors duration-300 hover:text-primary-400`,
        href: item.href,
        onClick: () => handleNavClick(item.href),
        children: item.name
      }
    ) }, item.name)) }) }),
    /* @__PURE__ */ jsx("nav", { className: "hidden md:inline-block mt-5", children: /* @__PURE__ */ jsx("ul", { className: "md:flex md:gap-10", children: navigation.map((item) => /* @__PURE__ */ jsx("li", { className: " text-300 font-500 capitalize", children: /* @__PURE__ */ jsx(
      "a",
      {
        className: ` ${active === item.href ? "text-primary-400" : ""} transition-colors duration-300 hover:text-primary-400`,
        href: item.href,
        onClick: () => handleNavClick(item.href),
        children: item.name
      }
    ) }, item.name)) }) })
  ] });
};

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const toggleNavClick = () => {
    setIsClicked(!isClicked);
  };
  return /* @__PURE__ */ jsx("header", { className: "fixed top-0 z-[500] w-full bg-neutral-900 ", children: /* @__PURE__ */ jsxs("div", { className: "container flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "z-10 text-400 font-900 mt-3", children: /* @__PURE__ */ jsx("a", { className: "text-white", href: "", children: "SkHarry" }) }),
    /* @__PURE__ */ jsx("div", { className: "z-10 inline-block md:hidden", onClick: toggleNavClick, children: isClicked ? /* @__PURE__ */ jsx("button", { className: "text-500", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-close" }) }) : /* @__PURE__ */ jsx("button", { className: "text-500", children: /* @__PURE__ */ jsx("i", { className: "fa-solid fa-bars" }) }) }),
    /* @__PURE__ */ jsx(Nav, { isClicked, toggleNavClick })
  ] }) });
};

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/astro/components/ClientRouter.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "welcome to harry", description = "Harry is a website that gives daily blog updates" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer"><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="bg-neutral-900 text-white"> ${renderComponent($$result, "Header", Header, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/components/Header", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/pages/layouts/Layout.astro", undefined);

const $$file = "C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/pages/layouts/Layout.astro";
const $$url = "/layouts/Layout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Layout,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _page as _ };
