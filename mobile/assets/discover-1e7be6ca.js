var l=(c,a,t)=>new Promise((r,o)=>{var _=e=>{try{n(t.next(e))}catch(s){o(s)}},d=e=>{try{n(t.throw(e))}catch(s){o(s)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(_,d);n((t=t.apply(c,a)).next())});import{d as p,a3 as u,g as f,B as v,o as g,c as k,k as B,E as i,O as N,J as x,a as m}from"./index-8cf3448a.js";/* empty css              */import{N as h}from"./index-75272307.js";import"./use-placeholder-7f0ff041.js";const D=m("div",null,[m("div",{class:"m-8 text-center"},"Discover")],-1),C=p({__name:"discover",setup(c){const{t:a}=u();return f(()=>l(this,null,function*(){v("Page <<DiscoverPage>> mounted.")})),(t,r)=>{const o=h;return g(),k(x,null,[B(o,{title:i(a)("common.title"),"on-click-left":i(N)},null,8,["title","on-click-left"]),D],64)}}});export{C as default};
