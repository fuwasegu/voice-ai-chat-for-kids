if(!self.define){let e,s={};const l=(l,i)=>(l=new URL(l+".js",i).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,n)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(s[u])return;let r={};const t=e=>l(e,u),a={module:{uri:u},exports:r,require:t};s[u]=Promise.all(i.map((e=>a[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/_layout.0xvHKR_w.css",revision:null},{url:"_app/immutable/assets/_page.ZtL1o1Mf.css",revision:null},{url:"_app/immutable/assets/0.equJ02-T.css",revision:null},{url:"_app/immutable/assets/3.ZtL1o1Mf.css",revision:null},{url:"_app/immutable/chunks/center.P_nAeEF8.js",revision:null},{url:"_app/immutable/chunks/entry.CLYhZFNX.js",revision:null},{url:"_app/immutable/chunks/Icon.nxKWlsCd.js",revision:null},{url:"_app/immutable/chunks/index.cWGSX31V.js",revision:null},{url:"_app/immutable/chunks/index.r4ESoaId.js",revision:null},{url:"_app/immutable/chunks/scheduler.ZZvfSGQU.js",revision:null},{url:"_app/immutable/chunks/store.g2_QKCx6.js",revision:null},{url:"_app/immutable/entry/app.XhGHATo3.js",revision:null},{url:"_app/immutable/entry/start.mWp5b5JL.js",revision:null},{url:"_app/immutable/nodes/0.UJHQRXr9.js",revision:null},{url:"_app/immutable/nodes/1.a4ySapOF.js",revision:null},{url:"_app/immutable/nodes/2.rEkYa87S.js",revision:null},{url:"_app/immutable/nodes/3.zHiPF3ya.js",revision:null},{url:"favicon.png",revision:"3a387408ecc6cc283f724b39ca5fffb4"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"96dd644b37bad8eca144a6941e4933d5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
