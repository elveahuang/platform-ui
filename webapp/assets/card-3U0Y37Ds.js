var m=Object.defineProperty,v=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var i=(s,a,e)=>a in s?m(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,f=(s,a)=>{for(var e in a||(a={}))b.call(a,e)&&i(s,e,a[e]);if(n)for(var e of n(a))C.call(a,e)&&i(s,e,a[e]);return s},p=(s,a)=>v(s,S(a));import{q as $,v as g,d as h,C as w,b as t,f as d,J as r,h as o,Y as l,m as y,t as u,M as c,i as k,K as E,$ as N,a3 as B}from"./index-qJ4ExrTw.js";const P=$({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:g([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),V=h({name:"ElCard"}),z=h(p(f({},V),{props:P,setup(s){const a=w("card");return(e,_)=>(t(),d("div",{class:r([o(a).b(),o(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(t(),d("div",{key:0,class:r(o(a).e("header"))},[l(e.$slots,"header",{},()=>[y(u(e.header),1)])],2)):c("v-if",!0),k("div",{class:r([o(a).e("body"),e.bodyClass]),style:E(e.bodyStyle)},[l(e.$slots,"default")],6),e.$slots.footer||e.footer?(t(),d("div",{key:1,class:r(o(a).e("footer"))},[l(e.$slots,"footer",{},()=>[y(u(e.footer),1)])],2)):c("v-if",!0)],2))}}));var T=N(z,[["__file","card.vue"]]);const A=B(T);export{A as E};
