import{e as o,d as c,b as r,F as d,a6 as u,ah as m,bf as f,am as b,x as p}from"./index-b8efec62.js";const[v,i]=o("cell-group"),g={title:String,inset:Boolean,border:u};var h=c({name:v,inheritAttrs:!1,props:g,setup(e,{slots:t,attrs:l}){const n=()=>{var a;return r("div",m({class:[i({inset:e.inset}),{[b]:e.border&&!e.inset}]},l,f()),[(a=t.default)==null?void 0:a.call(t)])},s=()=>r("div",{class:i("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?r(d,null,[s(),n()]):n()}});const P=p(h);export{P as C};