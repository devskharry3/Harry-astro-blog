import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_CcJUOLtN.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/OSHO%20SUNKANMI/Documents/Astro-Blog/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.DW-cS0FX.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.DW-cS0FX.css"},{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/admin/[...params]","pattern":"^\\/admin(?:\\/(.*?))?\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/sanity","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/Sanity\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"Sanity","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/Sanity.js","pathname":"/api/Sanity","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/subscribe","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/subscribe\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"subscribe","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/subscribe.ts","pathname":"/api/subscribe","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.DW-cS0FX.css"},{"type":"inline","content":".hero[data-astro-cid-fkkexaqb]{background-image:url(/_astro/daily-digest-bg.CcphLFNi.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;width:100%;min-height:60vh}.overlay[data-astro-cid-fkkexaqb]{position:absolute;top:0;left:0;background-color:#000c;width:100%;height:100%;display:flex;align-items:center;justify-content:center}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/daily-digest","isIndex":false,"type":"page","pattern":"^\\/daily-digest\\/?$","segments":[[{"content":"daily-digest","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/daily-digest.astro","pathname":"/daily-digest","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.DW-cS0FX.css"},{"type":"inline","content":".hero[data-astro-cid-xnzultev]{background-image:url(/_astro/design-tools-bg.CpkEmGKp.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;width:100%;min-height:60vh}.overlay[data-astro-cid-xnzultev]{position:absolute;top:0;left:0;background-color:#000c;width:100%;height:100%;display:flex;align-items:center;justify-content:center}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/design-tools","isIndex":false,"type":"page","pattern":"^\\/design-tools\\/?$","segments":[[{"content":"design-tools","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/design-tools.astro","pathname":"/design-tools","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.DW-cS0FX.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/layouts/layout","isIndex":false,"type":"page","pattern":"^\\/layouts\\/Layout\\/?$","segments":[[{"content":"layouts","dynamic":false,"spread":false}],[{"content":"Layout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/layouts/Layout.astro","pathname":"/layouts/Layout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.DW-cS0FX.css"},{"type":"inline","content":".hero[data-astro-cid-bzdfz3mo]{background-image:url(/_astro/tutorials-bg.C2wwrjOp.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;width:100%;min-height:60vh}.overlay[data-astro-cid-bzdfz3mo]{position:absolute;top:0;left:0;background-color:#000c;width:100%;height:100%;display:flex;align-items:center;justify-content:center}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/tutorials","isIndex":false,"type":"page","pattern":"^\\/tutorials\\/?$","segments":[[{"content":"tutorials","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tutorials.astro","pathname":"/tutorials","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.DW-cS0FX.css"},{"type":"inline","content":".category[data-astro-cid-acbv6hgm]:hover .overlay[data-astro-cid-acbv6hgm]{opacity:.65}.category[data-astro-cid-acbv6hgm]:hover span[data-astro-cid-acbv6hgm]{bottom:3rem;padding:0;background-color:transparent}.category[data-astro-cid-acbv6hgm]:hover p[data-astro-cid-acbv6hgm]{bottom:1rem}.post[data-astro-cid-gghe66ga]:hover img[data-astro-cid-gghe66ga]{transform:scale(1.1)}.post[data-astro-cid-gghe66ga]:hover .overlay[data-astro-cid-gghe66ga]{opacity:.75}h1[data-astro-cid-bbe6dxrz]{background:linear-gradient(to right,#c41740,#ea9c28);-webkit-background-clip:text;-webkit-text-fill-color:transparent}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/pages/layouts/Layout.astro",{"propagation":"none","containsHead":true}],["C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/pages/blog/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/pages/daily-digest.astro",{"propagation":"none","containsHead":true}],["C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/pages/design-tools.astro",{"propagation":"none","containsHead":true}],["C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/pages/tutorials.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/admin/_---params_.astro.mjs","\u0000@astro-page:src/pages/api/Sanity@_@js":"pages/api/sanity.astro.mjs","\u0000@astro-page:src/pages/api/subscribe@_@ts":"pages/api/subscribe.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/daily-digest@_@astro":"pages/daily-digest.astro.mjs","\u0000@astro-page:src/pages/design-tools@_@astro":"pages/design-tools.astro.mjs","\u0000@astro-page:src/pages/layouts/Layout@_@astro":"pages/layouts/layout.astro.mjs","\u0000@astro-page:src/pages/tutorials@_@astro":"pages/tutorials.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D3lxVLg-.mjs","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CCp5pxxz.mjs","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/components/Header":"_astro/Header.C2X7GdGO.js","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/src/components/Newsletter.tsx":"_astro/Newsletter.D6rOvEwd.js","@astrojs/react/client.js":"_astro/client.DfpLQ3lm.js","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.Cc3YVkv6.js","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.DunQQI-v.js","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.3akuFU0N.js","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.CnesjMFm.js","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.6wgON8U7.js","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.B3tg-BPd.js","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.Bz8ScbGp.js","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/@sanity/vision/lib/_chunks-es/resources.mjs":"_astro/resources.CX6g6hD0.js","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/@sanity/vision/lib/_chunks-es/SanityVision.mjs":"_astro/SanityVision.BVkOEpCl.js","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.C_pF03V3.js","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.DGHRlq1B.js","C:/Users/OSHO SUNKANMI/Documents/Astro-Blog/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.CaEVPQ3l.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/design-tools-bg.CpkEmGKp.jpg","/_astro/tutorials-bg.C2wwrjOp.jpg","/_astro/Robot-bg.CVovg32O.jpg","/_astro/daily-digest-bg.CcphLFNi.jpg","/_astro/404.CbPhEc6q.png","/_astro/daily-digest.CX4z6x90.jpg","/_astro/design-tools.CDBlSSuO.jpg","/_astro/tutorials.B2zCZoeY.jpg","/_astro/studio-route.DW-cS0FX.css","/favicon.svg","/_astro/browser.Bm6ozjDV.js","/_astro/client.CuXuStBN.js","/_astro/client.DfpLQ3lm.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.rasoniT7.js","/_astro/Header.C2X7GdGO.js","/_astro/index.2Kbpc7Tc.js","/_astro/index.C_pF03V3.js","/_astro/index2.DGHRlq1B.js","/_astro/index3.Bz8ScbGp.js","/_astro/jsx-runtime.CLpGMVip.js","/_astro/Newsletter.D6rOvEwd.js","/_astro/resources.Cc3YVkv6.js","/_astro/resources.CX6g6hD0.js","/_astro/resources2.3akuFU0N.js","/_astro/resources3.DunQQI-v.js","/_astro/resources4.B3tg-BPd.js","/_astro/SanityVision.BVkOEpCl.js","/_astro/stegaEncodeSourceMap.6wgON8U7.js","/_astro/studio-component.CaEVPQ3l.js","/_astro/studio-component.DfVVlfYF.js","/_astro/ViteDevServerStopped.CnesjMFm.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"LVYcOtf9NDYwuDk0gdM0AOmpfJWL71oXJrtjWoBC4OM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
