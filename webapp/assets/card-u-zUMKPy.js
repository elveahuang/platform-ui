var u=Object.defineProperty,m=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var l=(s,a,e)=>a in s?u(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,d=(s,a)=>{for(var e in a||(a={}))h.call(a,e)&&l(s,e,a[e]);if(t)for(var e of t(a))v.call(a,e)&&l(s,e,a[e]);return s},n=(s,a)=>m(s,f(a));import{q as b,v as C,d as y,C as S,b as p,f as i,J as o,h as r,Y as c,m as w,t as g,M as _,i as k,K as $,$ as E,a3 as N}from"./index-uFi7EQ3z.js";const B=b({header:{type:String,default:""},bodyStyle:{type:C([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),P=y({name:"ElCard"}),V=y(n(d({},P),{props:B,setup(s){const a=S("card");return(e,T)=>(p(),i("div",{class:o([r(a).b(),r(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(p(),i("div",{key:0,class:o(r(a).e("header"))},[c(e.$slots,"header",{},()=>[w(g(e.header),1)])],2)):_("v-if",!0),k("div",{class:o([r(a).e("body"),e.bodyClass]),style:$(e.bodyStyle)},[c(e.$slots,"default")],6)],2))}}));var z=E(V,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const A=N(z);export{A as E};
