import{u as I}from"./use-placeholder-8cb787f8.js";import{H as s,d as R,I as b}from"./index-802aec68.js";import{d as A,e as C,r as w,n as P,t as o,k as L,h as a,x as N}from"./index-38c8f8b2.js";const[S,t]=A("nav-bar"),y={title:String,fixed:Boolean,zIndex:P,border:o,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:o};var E=C({name:S,props:y,emits:["clickLeft","clickRight"],setup(e,{emit:l,slots:r}){const i=w(),f=I(i,t),d=n=>l("clickLeft",n),h=n=>l("clickRight",n),x=()=>r.left?r.left():[e.leftArrow&&a(b,{class:t("arrow"),name:"arrow-left"},null),e.leftText&&a("span",{class:t("text")},[e.leftText])],g=()=>r.right?r.right():a("span",{class:t("text")},[e.rightText]),c=()=>{const{title:n,fixed:u,border:v,zIndex:k}=e,m=L(k),T=e.leftArrow||e.leftText||r.left,B=e.rightText||r.right;return a("div",{ref:i,style:m,class:[t({fixed:u}),{[R]:v,"van-safe-area-top":e.safeAreaInsetTop}]},[a("div",{class:t("content")},[T&&a("div",{class:[t("left"),e.clickable?s:""],onClick:d},[x()]),a("div",{class:[t("title"),"van-ellipsis"]},[r.title?r.title():n]),B&&a("div",{class:[t("right"),e.clickable?s:""],onClick:h},[g()])])])};return()=>e.fixed&&e.placeholder?f(c):c()}});const D=N(E);export{D as N};
