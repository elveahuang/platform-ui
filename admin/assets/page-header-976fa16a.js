var D=Object.defineProperty,V=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var y=(o,a,e)=>a in o?D(o,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[a]=e,m=(o,a)=>{for(var e in a||(a={}))z.call(a,e)&&y(o,e,a[e]);if(g)for(var e of g(a))N.call(a,e)&&y(o,e,a[e]);return o},f=(o,a)=>V(o,w(a));import{g as S,J as B,d as v,u as P,f as H,o as n,P as d,R as l,a as t,r as i,a2 as c,aI as I,_ as C,V as E,C as T,b1 as J,aD as L,aO as O,Q as u,c as k,w as Q,aH as R,z as U,S as h,U as $,a0 as j}from"./index-1eef4886.js";const q=S({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:B(String),default:"solid"}}),A=v({name:"ElDivider"}),F=v(f(m({},A),{props:q,setup(o){const a=o,e=P("divider"),p=H(()=>e.cssVar({"border-style":a.borderStyle}));return(s,b)=>(n(),d("div",{class:l([t(e).b(),t(e).m(s.direction)]),style:I(t(p)),role:"separator"},[s.$slots.default&&s.direction!=="vertical"?(n(),d("div",{key:0,class:l([t(e).e("text"),t(e).is(s.contentPosition)])},[i(s.$slots,"default")],2)):c("v-if",!0)],6))}}));var G=C(F,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const K=E(G),M=S({icon:{type:T,default:()=>J},title:String,content:{type:String,default:""}}),W={back:()=>!0},X=["aria-label"],Y=v({name:"ElPageHeader"}),Z=v(f(m({},Y),{props:M,emits:W,setup(o,{emit:a}){const e=L(),{t:p}=O(),s=P("page-header"),b=H(()=>[s.b(),{[s.m("has-breadcrumb")]:!!e.breadcrumb,[s.m("has-extra")]:!!e.extra,[s.is("contentful")]:!!e.default}]);function _(){a("back")}return(r,ee)=>(n(),d("div",{class:l(t(b))},[r.$slots.breadcrumb?(n(),d("div",{key:0,class:l(t(s).e("breadcrumb"))},[i(r.$slots,"breadcrumb")],2)):c("v-if",!0),u("div",{class:l(t(s).e("header"))},[u("div",{class:l(t(s).e("left"))},[u("div",{class:l(t(s).e("back")),role:"button",tabindex:"0",onClick:_},[r.icon||r.$slots.icon?(n(),d("div",{key:0,"aria-label":r.title||t(p)("el.pageHeader.title"),class:l(t(s).e("icon"))},[i(r.$slots,"icon",{},()=>[r.icon?(n(),k(t(U),{key:0},{default:Q(()=>[(n(),k(R(r.icon)))]),_:1})):c("v-if",!0)])],10,X)):c("v-if",!0),u("div",{class:l(t(s).e("title"))},[i(r.$slots,"title",{},()=>[h($(r.title||t(p)("el.pageHeader.title")),1)])],2)],2),j(t(K),{direction:"vertical"}),u("div",{class:l(t(s).e("content"))},[i(r.$slots,"content",{},()=>[h($(r.content),1)])],2)],2),r.$slots.extra?(n(),d("div",{key:0,class:l(t(s).e("extra"))},[i(r.$slots,"extra")],2)):c("v-if",!0)],2),r.$slots.default?(n(),d("div",{key:1,class:l(t(s).e("main"))},[i(r.$slots,"default")],2)):c("v-if",!0)],2))}}));var x=C(Z,[["__file","/home/runner/work/element-plus/element-plus/packages/components/page-header/src/page-header.vue"]]);const ae=E(x);export{ae as E};