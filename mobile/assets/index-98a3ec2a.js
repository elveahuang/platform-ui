import{u as m}from"./use-placeholder-55253c18.js";import{m as D,d as C,j as I,q as R,s,av as A,h as l,a5 as d,bc as w,C as P,y as L}from"./index-9f8d664e.js";const[N,t]=D("nav-bar"),S={title:String,fixed:Boolean,zIndex:R,border:s,leftText:String,rightText:String,leftDisabled:Boolean,rightDisabled:Boolean,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:s};var y=C({name:N,props:S,emits:["clickLeft","clickRight"],setup(e,{emit:n,slots:a}){const r=I(),f=m(r,t),o=i=>{e.leftDisabled||n("clickLeft",i)},h=i=>{e.rightDisabled||n("clickRight",i)},g=()=>a.left?a.left():[e.leftArrow&&l(P,{class:t("arrow"),name:"arrow-left"},null),e.leftText&&l("span",{class:t("text")},[e.leftText])],b=()=>a.right?a.right():l("span",{class:t("text")},[e.rightText]),c=()=>{const{title:i,fixed:x,border:u,zIndex:v}=e,B=A(v),T=e.leftArrow||e.leftText||a.left,k=e.rightText||a.right;return l("div",{ref:r,style:B,class:[t({fixed:x}),{[w]:u,"van-safe-area-top":e.safeAreaInsetTop}]},[l("div",{class:t("content")},[T&&l("div",{class:[t("left",{disabled:e.leftDisabled}),e.clickable&&!e.leftDisabled?d:""],onClick:o},[g()]),l("div",{class:[t("title"),"van-ellipsis"]},[a.title?a.title():i]),k&&l("div",{class:[t("right",{disabled:e.rightDisabled}),e.clickable&&!e.rightDisabled?d:""],onClick:h},[b()])])])};return()=>e.fixed&&e.placeholder?f(c):c()}});const _=L(y);export{_ as N};