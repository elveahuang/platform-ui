var u=Object.defineProperty,m=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var d=(s,a,e)=>a in s?u(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,l=(s,a)=>{for(var e in a||(a={}))h.call(a,e)&&d(s,e,a[e]);if(t)for(var e of t(a))b.call(a,e)&&d(s,e,a[e]);return s},n=(s,a)=>m(s,f(a));import{a1 as v,a3 as S,d as y,a7 as C,e as p,g as c,ac as o,i as r,ab as i,n as g,t as w,ap as k,k as _,ao as E,ad as N,ar as $}from"./index-DrnEKMDB.js";const B=v({header:{type:String,default:""},bodyStyle:{type:S([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),P=y({name:"ElCard"}),V=y(n(l({},P),{props:B,setup(s){const a=C("card");return(e,T)=>(p(),c("div",{class:o([r(a).b(),r(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(p(),c("div",{key:0,class:o(r(a).e("header"))},[i(e.$slots,"header",{},()=>[g(w(e.header),1)])],2)):k("v-if",!0),_("div",{class:o([r(a).e("body"),e.bodyClass]),style:E(e.bodyStyle)},[i(e.$slots,"default")],6)],2))}}));var z=N(V,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const D=$(z);export{D as E};
