import{$ as c,r as i,O as g}from"./index-pyS-jaTs.js";function n(e){return typeof e=="function"?e():g(e)}typeof WorkerGlobalScope!="undefined"&&globalThis instanceof WorkerGlobalScope;function p(e=!1,l={}){const{truthyValue:r=!0,falsyValue:a=!1}=l,s=c(e),t=i(e);function u(f){if(arguments.length)return t.value=f,t.value;{const o=n(r);return t.value=t.value===o?n(a):o,t.value}}return s?u:[t,u]}export{p as u};