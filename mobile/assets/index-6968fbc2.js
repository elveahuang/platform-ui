import{m as B,d as $,j as u,ay as j,U as C,as as f,Y as D,a9 as U,ba as _,aI as N,g as R,ac as I,h as n,q as d,s as P,a7 as z,aL as q,bb as F,ae as S,C as M,y as O}from"./index-eaaf9806.js";const[T,t]=B("image"),V={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:P,errorIcon:z("photo-fail"),iconPrefix:String,showLoading:P,loadingIcon:z("photo")};var Y=$({name:T,props:V,emits:["load","error"],setup(a,{emit:v,slots:s}){const i=u(!1),o=u(!0),r=u(),{$Lazyload:l}=j().proxy,x=C(()=>{const e={width:f(a.width),height:f(a.height)};return D(a.radius)&&(e.overflow="hidden",e.borderRadius=f(a.radius)),e});U(()=>a.src,()=>{i.value=!1,o.value=!0});const g=e=>{o.value&&(o.value=!1,v("load",e))},h=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:r.value,enumerable:!0}),g(e)},m=e=>{i.value=!0,o.value=!1,v("error",e)},y=(e,c,b)=>b?b():n(M,{name:e,size:a.iconSize,class:c,classPrefix:a.iconPrefix},null),E=()=>{if(o.value&&a.showLoading)return n("div",{class:t("loading")},[y(a.loadingIcon,t("loading-icon"),s.loading)]);if(i.value&&a.showError)return n("div",{class:t("error")},[y(a.errorIcon,t("error-icon"),s.error)])},k=()=>{if(i.value||!a.src)return;const e={alt:a.alt,class:t("img"),style:{objectFit:a.fit,objectPosition:a.position}};return a.lazyLoad?q(n("img",S({ref:r},e),null),[[F("lazy"),a.src]]):n("img",S({ref:r,src:a.src,onLoad:g,onError:m},e),null)},L=({el:e})=>{const c=()=>{e===r.value&&o.value&&h()};r.value?c():I(c)},w=({el:e})=>{e===r.value&&!i.value&&m()};return l&&_&&(l.$on("loaded",L),l.$on("error",w),N(()=>{l.$off("loaded",L),l.$off("error",w)})),R(()=>{I(()=>{var e;(e=r.value)!=null&&e.complete&&!a.lazyLoad&&h()})}),()=>{var e;return n("div",{class:t({round:a.round,block:a.block}),style:x.value},[k(),E(),(e=s.default)==null?void 0:e.call(s)])}}});const G=O(Y);export{G as I};
