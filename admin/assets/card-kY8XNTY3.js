var u=Object.defineProperty,m=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var l=(s,a,e)=>a in s?u(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,d=(s,a)=>{for(var e in a||(a={}))h.call(a,e)&&l(s,e,a[e]);if(t)for(var e of t(a))v.call(a,e)&&l(s,e,a[e]);return s},n=(s,a)=>m(s,f(a));import{ah as S,ai as b,d as y,a6 as g,e as p,g as i,a7 as o,i as r,ac as c,n as C,t as w,ad as k,k as _,ag as E,af as N,al as $}from"./index-_pyGAx0K.js";const B=S({header:{type:String,default:""},bodyStyle:{type:b([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),P=y({name:"ElCard"}),V=y(n(d({},P),{props:B,setup(s){const a=g("card");return(e,T)=>(p(),i("div",{class:o([r(a).b(),r(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(p(),i("div",{key:0,class:o(r(a).e("header"))},[c(e.$slots,"header",{},()=>[C(w(e.header),1)])],2)):k("v-if",!0),_("div",{class:o([r(a).e("body"),e.bodyClass]),style:E(e.bodyStyle)},[c(e.$slots,"default")],6)],2))}}));var z=N(V,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const D=$(z);export{D as E};
