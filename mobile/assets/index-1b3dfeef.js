import{u as b}from"./use-placeholder-19b9d0f2.js";import{c as I,d as R,r as A,n as C,v as s,ac as w,p as r,H as o,b2 as P,ab as L,G as N}from"./index-da393970.js";const[S,t]=I("nav-bar"),y={title:String,fixed:Boolean,zIndex:C,border:s,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:s};var E=R({name:S,props:y,emits:["clickLeft","clickRight"],setup(e,{emit:l,slots:a}){const c=A(),f=b(c,t),d=n=>l("clickLeft",n),h=n=>l("clickRight",n),x=()=>a.left?a.left():[e.leftArrow&&r(L,{class:t("arrow"),name:"arrow-left"},null),e.leftText&&r("span",{class:t("text")},[e.leftText])],g=()=>a.right?a.right():r("span",{class:t("text")},[e.rightText]),i=()=>{const{title:n,fixed:u,border:v,zIndex:T}=e,k=w(T),B=e.leftArrow||e.leftText||a.left,m=e.rightText||a.right;return r("div",{ref:c,style:k,class:[t({fixed:u}),{[P]:v,"van-safe-area-top":e.safeAreaInsetTop}]},[r("div",{class:t("content")},[B&&r("div",{class:[t("left"),e.clickable?o:""],onClick:d},[x()]),r("div",{class:[t("title"),"van-ellipsis"]},[a.title?a.title():n]),m&&r("div",{class:[t("right"),e.clickable?o:""],onClick:h},[g()])])])};return()=>e.fixed&&e.placeholder?f(i):i()}});const z=N(E);export{z as N};