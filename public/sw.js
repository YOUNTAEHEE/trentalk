if(!self.define){let e,s={};const t=(t,n)=>(t=new URL(t+".js",n).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>t(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"2227b1d688f9ac8150be6bd212bf1897"},{url:"/_next/static/chunks/0e762574-88897667530ffb46.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/chunks/23-effea5b940252795.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/chunks/35.03ae917f238a8966.js",revision:"03ae917f238a8966"},{url:"/_next/static/chunks/769-18629338c0112fa8.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/chunks/947-60fe99aca22b2e0f.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/chunks/9c4e2130-c86c6082dab9cfea.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/chunks/app/_not-found/page-94c683a891433c6f.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/chunks/app/hotContent/page-c61b368f0c6ac881.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/chunks/app/layout-2aa83ed52bc7cf6b.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/chunks/app/page-6685dc1d6267c205.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/chunks/fd9d1056-62aaf4b921c84028.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/chunks/main-52ec8017281c6329.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/chunks/main-app-95ea17601b4c46fa.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-8b4053cac4b17e2b.js",revision:"z_7mEzAtr0XEImZqGBsFk"},{url:"/_next/static/css/478d16ff3951c7d1.css",revision:"478d16ff3951c7d1"},{url:"/_next/static/css/a66b5340f414d866.css",revision:"a66b5340f414d866"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c391bca821eb4633-s.woff2",revision:"7ab6746885effd1c294e61a61eb22229"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/f2200587bd48c57f-s.p.woff2",revision:"b0c7f916ebbfdca4e43cb1538fc45a71"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/z_7mEzAtr0XEImZqGBsFk/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/z_7mEzAtr0XEImZqGBsFk/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"9f524e9110284ea41d404fc43271648b"},{url:"/googlece87654fe1ddea61.html",revision:"69a0527698d27831cf1d696a238bcd5a"},{url:"/icons/icon-192x192.png",revision:"a2cc1ba59a7219c928b5603292d5509c"},{url:"/icons/icon-512x512.png",revision:"023831264ed0c562dbb1b60f6ad670de"},{url:"/manifest.json",revision:"b48c75d9574d645c149755825539937a"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
