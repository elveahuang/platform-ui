System.register(["./index-legacy-1b70f568.js","./index-legacy-2240c3cd.js","./core.service-legacy-54392d86.js"],(function(e,t){"use strict";var a,n,c,o,r,i,s,u,d,l,h;return{setters:[e=>{a=e.d,n=e.K,c=e.m,o=e.o,r=e.g,i=e.f,s=e.ba,u=e.bb,d=e.b3,l=e.an},null,e=>{h=e.C}],execute:function(){const t={class:"app-page-content"};e("default",a({__name:"wechat",setup:e=>(n((async()=>{c("Component - <<WeChat>> is mounted."),await h.initialize().then(),await(async()=>{let e=s.currentRoute.value.query||{};c(`WeChat Page setup - Current location is [${location.href}]...`),e.code&&!u(e.code)?c(`Current OAuth Code - ${e.code}`):(c("Empty code, redirect to WeChat oauth..."),await d.auth(""))})().then()})),(e,a)=>{const n=l;return o(),r("div",t,[i(n)])})}))}}}));
