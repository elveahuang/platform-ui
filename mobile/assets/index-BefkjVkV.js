import{e as D,d as m,r as I,aX as R,n as A,am as s,bE as C,b as l,aV as d,bL as w,ae as L,y as P}from"./index-D-4qiK4k.js";const[N,t]=D("nav-bar"),S={title:String,fixed:Boolean,zIndex:A,border:s,leftText:String,rightText:String,leftDisabled:Boolean,rightDisabled:Boolean,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:s};var y=m({name:N,props:S,emits:["clickLeft","clickRight"],setup(e,{emit:n,slots:a}){const r=I(),f=R(r,t),o=i=>{e.leftDisabled||n("clickLeft",i)},h=i=>{e.rightDisabled||n("clickRight",i)},b=()=>a.left?a.left():[e.leftArrow&&l(L,{class:t("arrow"),name:"arrow-left"},null),e.leftText&&l("span",{class:t("text")},[e.leftText])],g=()=>a.right?a.right():l("span",{class:t("text")},[e.rightText]),c=()=>{const{title:i,fixed:x,border:u,zIndex:v}=e,B=C(v),T=e.leftArrow||e.leftText||a.left,k=e.rightText||a.right;return l("div",{ref:r,style:B,class:[t({fixed:x}),{[w]:u,"van-safe-area-top":e.safeAreaInsetTop}]},[l("div",{class:t("content")},[T&&l("div",{class:[t("left",{disabled:e.leftDisabled}),e.clickable&&!e.leftDisabled?d:""],onClick:o},[b()]),l("div",{class:[t("title"),"van-ellipsis"]},[a.title?a.title():i]),k&&l("div",{class:[t("right",{disabled:e.rightDisabled}),e.clickable&&!e.rightDisabled?d:""],onClick:h},[g()])])])};return()=>e.fixed&&e.placeholder?f(c):c()}});const O=P(y);export{O as N};