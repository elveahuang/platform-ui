import{u as I}from"./use-placeholder-84f8ddf1.js";import{c as R,d as b,r as A,n as C,v as s,a7 as w,p as r,H as o,aZ as P,a3 as L,G as N}from"./index-ceb4400b.js";const[S,t]=R("nav-bar"),y={title:String,fixed:Boolean,zIndex:C,border:s,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:s};var E=b({name:S,props:y,emits:["clickLeft","clickRight"],setup(e,{emit:l,slots:a}){const c=A(),f=I(c,t),d=n=>l("clickLeft",n),h=n=>l("clickRight",n),g=()=>a.left?a.left():[e.leftArrow&&r(L,{class:t("arrow"),name:"arrow-left"},null),e.leftText&&r("span",{class:t("text")},[e.leftText])],x=()=>a.right?a.right():r("span",{class:t("text")},[e.rightText]),i=()=>{const{title:n,fixed:u,border:v,zIndex:T}=e,k=w(T),B=e.leftArrow||e.leftText||a.left,m=e.rightText||a.right;return r("div",{ref:c,style:k,class:[t({fixed:u}),{[P]:v,"van-safe-area-top":e.safeAreaInsetTop}]},[r("div",{class:t("content")},[B&&r("div",{class:[t("left"),e.clickable?o:""],onClick:d},[g()]),r("div",{class:[t("title"),"van-ellipsis"]},[a.title?a.title():n]),m&&r("div",{class:[t("right"),e.clickable?o:""],onClick:h},[x()])])])};return()=>e.fixed&&e.placeholder?f(i):i()}});const z=N(E);export{z as N};
